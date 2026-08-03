import { z } from 'zod'
const phone = z.string().trim().regex(/^(?:\+?61|0)4\d{8}$/, 'Enter a valid Australian mobile number.').transform(value => value.replace(/\s/g, ''))
const requiredText = (label: string) => z.string().trim().min(2, `${label} is required.`)
const consent = z.boolean().refine(value => value, { message: 'Consent is required.' })
export const quoteSchema = z.object({ firstName: requiredText('First name'), lastName: requiredText('Last name'), businessName: z.string().trim().optional(), email: z.string().trim().email('Enter a valid email address.'), phone, pickupLocation: requiredText('Pickup location'), deliveryLocation: requiredText('Delivery location'), preferredDate: z.string().optional(), serviceType: requiredText('Service type'), freightType: requiredText('Freight type'), quantity: z.string().optional(), weight: z.string().optional(), dimensions: z.string().optional(), specialHandling: z.string().optional(), dangerousGoods: z.boolean(), details: z.string().optional(), consent, website: z.string().max(0).optional() })
export const bookingSchema = quoteSchema.extend({ pickupContact: requiredText('Pickup contact'), deliveryContact: requiredText('Delivery contact'), timing: requiredText('Timing'), consent })
export const contactSchema = z.object({ name: requiredText('Name'), email: z.string().trim().email('Enter a valid email address.'), phone: phone.optional().or(z.literal('')), message: requiredText('Message'), consent, website: z.string().max(0).optional() })
export type QuoteData = z.infer<typeof quoteSchema>
export type BookingData = z.infer<typeof bookingSchema>
export type ContactData = z.infer<typeof contactSchema>
