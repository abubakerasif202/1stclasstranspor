import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import { MemoryRouter } from 'react-router-dom'
import { HomePage } from '../pages/HomePage'
import { ContactPage } from '../pages/ContactPage'
import { quoteSchema } from '../lib/formSchemas'
import { submitQuoteForm } from '../lib/formSubmission'
import { TruckArrivalIntro } from '../components/intro/TruckArrivalIntro'
describe('site essentials', () => {
  it('renders the homepage primary heading', () => { render(<MemoryRouter><HomePage/></MemoryRouter>); expect(screen.getByRole('heading', { name: /moving australia with first-class service/i })).toBeInTheDocument() })
  it('uses the exact contact telephone and email links', () => { render(<MemoryRouter><ContactPage/></MemoryRouter>); expect(screen.getByRole('link', { name: /0431 604 240/i })).toHaveAttribute('href', 'tel:+61431604240'); expect(screen.getByRole('link', { name: /div@1stclassexpress.com.au/i })).toHaveAttribute('href', 'mailto:Div@1stclassexpress.com.au') })
  it('renders and skips the homepage intro', async () => { const completed = vi.fn(); render(<TruckArrivalIntro onComplete={completed}/>); fireEvent.click(screen.getByRole('button', { name: /skip intro/i })); await waitFor(() => expect(screen.queryByRole('dialog')).not.toBeInTheDocument()); await waitFor(() => expect(completed).toHaveBeenCalledOnce()) })
  it('rejects invalid quote email and missing consent', () => { const result = quoteSchema.safeParse({ firstName: 'Ava', lastName: 'Lee', email: 'not-an-email', phone: '0431604240', pickupLocation: 'Sydney', deliveryLocation: 'Canberra', serviceType: 'Freight', freightType: 'Pallet', dangerousGoods: false, consent: false }); expect(result.success).toBe(false) })
  it('accepts a formatted Australian mobile number', () => { const result = quoteSchema.safeParse({ firstName: 'Ava', lastName: 'Lee', email: 'ava@example.test', phone: '0431 604 240', pickupLocation: 'Sydney', deliveryLocation: 'Canberra', serviceType: 'Freight', freightType: 'Pallet', dangerousGoods: false, consent: true }); expect(result.success).toBe(true); if (result.success) expect(result.data.phone).toBe('0431604240') })
  it('submits quote data to the configured Formspree form with enquiry metadata', async () => { const request = vi.spyOn(globalThis, 'fetch').mockResolvedValue(new Response(JSON.stringify({ ok: true }), { status: 200, headers: { 'Content-Type': 'application/json' } })); const result = await submitQuoteForm({ firstName: 'Ava', lastName: 'Lee', email: 'ava@example.test', phone: '0431604240', pickupLocation: 'Sydney', deliveryLocation: 'Canberra', serviceType: 'Freight', freightType: 'Pallet', dangerousGoods: false, consent: true }); expect(result).toEqual({ success: true, reference: undefined }); expect(request).toHaveBeenCalledOnce(); const [endpoint, init] = request.mock.calls[0]; expect(endpoint).toBe('https://formspree.io/f/mlgqqqld'); const body = JSON.parse(String(init?.body)); expect(body).toMatchObject({ enquiryType: 'Quote', _subject: '1st Class Express — New Quote Enquiry', email: 'ava@example.test' }); request.mockRestore() })
})
