import { z } from 'zod'
import { sydneyDateInputValue } from './dateInput'

const phone = z.string().trim().transform((value) => value.replace(/[\s()-]/g, '')).refine((value) => {
  const local = value.startsWith('+61') ? `0${value.slice(3)}` : value
  return /^(?:0[23478]\d{8}|13\d{4}|1(?:300|800)\d{6})$/.test(local)
}, 'Enter a valid Australian phone number.')
const requiredText = (label: string) => z.string().trim().min(2, `${label} is required.`)
const consent = z.boolean().refine(value => value, { message: 'Consent is required.' })
const preferredDate = z.string().optional().refine((value) => !value || value >= sydneyDateInputValue(), 'Choose today or a future date.')
export const quoteSchema = z.object({ firstName: requiredText('First name'), lastName: requiredText('Last name'), businessName: z.string().trim().optional(), email: z.string().trim().email('Enter a valid email address.'), phone, pickupLocation: requiredText('Pickup location'), deliveryLocation: requiredText('Delivery location'), preferredDate, serviceType: requiredText('Service type'), freightType: requiredText('Freight type'), quantity: z.string().optional(), weight: z.string().optional(), dimensions: z.string().optional(), specialHandling: z.string().optional(), dangerousGoods: z.boolean(), details: z.string().optional(), consent, website: z.string().max(0).optional() })
export const bookingSchema = quoteSchema.extend({ pickupContact: requiredText('Pickup contact'), deliveryContact: requiredText('Delivery contact'), timing: requiredText('Timing'), consent })
export const contactSchema = z.object({ name: requiredText('Name'), email: z.string().trim().email('Enter a valid email address.'), phone: phone.optional().or(z.literal('')), message: requiredText('Message'), consent, website: z.string().max(0).optional() })
export type QuoteData = z.infer<typeof quoteSchema>
export type BookingData = z.infer<typeof bookingSchema>
export type ContactData = z.infer<typeof contactSchema>
