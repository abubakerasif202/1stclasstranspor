import type { BookingData, ContactData, QuoteData } from './formSchemas'

export type FormSubmissionResult = { success: true; reference?: string } | { success: false; message: string }

const configurationMessage = 'Online form delivery is not configured. Please call or email us directly.'
const defaultFormspreeEndpoint = 'https://formspree.io/f/mlgqqqld'

function getSecureEndpoint(value: string | undefined): string | null {
  if (!value) return null
  try {
    const endpoint = new URL(value)
    return endpoint.protocol === 'https:' ? endpoint.toString() : null
  } catch {
    return null
  }
}

function preparePayload(payload: unknown, kind: 'Quote' | 'Booking' | 'Contact') {
  const values = payload as Record<string, unknown>
  const { website, ...fields } = values
  return {
    ...fields,
    _gotcha: website ?? '',
    _subject: `1st Class Express — New ${kind} Enquiry`,
    enquiryType: kind,
    submittedFrom: typeof window === 'undefined' ? undefined : `${window.location.origin}${window.location.pathname}`,
  }
}

async function submit(endpointValue: string | undefined, payload: unknown, kind: 'Quote' | 'Booking' | 'Contact'): Promise<FormSubmissionResult> {
  const endpoint = getSecureEndpoint(endpointValue)
  if (!endpoint) return { success: false, message: configurationMessage }

  const controller = new AbortController()
  const timeout = window.setTimeout(() => controller.abort(), 15_000)

  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify(preparePayload(payload, kind)),
      signal: controller.signal,
    })

    if (!response.ok) {
      return { success: false, message: 'We could not send your request. Please try again or contact us directly.' }
    }

    const responseType = response.headers.get('content-type') ?? ''
    if (!responseType.includes('application/json')) return { success: true }

    const data = await response.json() as { reference?: unknown; id?: unknown }
    const reference = typeof data.reference === 'string' ? data.reference : typeof data.id === 'string' ? data.id : undefined
    return { success: true, reference }
  } catch (error) {
    const message = error instanceof DOMException && error.name === 'AbortError'
      ? 'The form service took too long to respond. Please try again or contact us directly.'
      : 'We could not connect to the form service. Please try again or contact us directly.'
    return { success: false, message }
  } finally {
    window.clearTimeout(timeout)
  }
}

const formspreeEndpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT || defaultFormspreeEndpoint

export const submitQuoteForm = (data: QuoteData) => submit(formspreeEndpoint, data, 'Quote')
export const submitBookingForm = (data: BookingData) => submit(formspreeEndpoint, data, 'Booking')
export const submitContactForm = (data: ContactData) => submit(formspreeEndpoint, data, 'Contact')
