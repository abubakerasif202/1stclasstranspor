import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { sydneyDateInputValue } from '../../lib/dateInput'
import { bookingSchema, type BookingData } from '../../lib/formSchemas'
import { submitBookingForm } from '../../lib/formSubmission'
import { FormError } from './FormError'
import { FormField } from './FormField'
import { FormSuccess } from './FormSuccess'

export function BookingForm() {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<BookingData>({
    resolver: zodResolver(bookingSchema),
    defaultValues: { dangerousGoods: false, consent: false, website: '' },
  })
  const [result, setResult] = useState<{ success: boolean; reference?: string; message?: string }>()
  const send = async (data: BookingData) => {
    setResult(undefined)
    setResult(await submitBookingForm(data))
  }

  if (result?.success) return <FormSuccess reference={result.reference} />

  return (
    <form noValidate aria-busy={isSubmitting} onSubmit={handleSubmit(send)} className="space-y-10">
      <p className="border-l-2 border-gold pl-4 text-sm text-slate"><span className="font-bold text-charcoal">Required fields are marked *</span>. This form sends a booking enquiry; transport is confirmed only after review.</p>

      <fieldset>
        <legend className="mb-5 font-display text-2xl font-bold">1. Customer details</legend>
        <div className="grid gap-5 sm:grid-cols-2">
          <FormField label="First Name" autoComplete="given-name" required error={errors.firstName?.message} {...register('firstName')} />
          <FormField label="Last Name" autoComplete="family-name" required error={errors.lastName?.message} {...register('lastName')} />
          <FormField label="Business Name" autoComplete="organization" optional {...register('businessName')} />
          <FormField label="Email" type="email" autoComplete="email" required error={errors.email?.message} {...register('email')} />
          <FormField label="Phone" type="tel" inputMode="tel" autoComplete="tel" required error={errors.phone?.message} {...register('phone')} />
        </div>
      </fieldset>

      <fieldset>
        <legend className="mb-5 font-display text-2xl font-bold">2. Pickup and delivery</legend>
        <div className="grid gap-5 sm:grid-cols-2">
          <FormField label="Pickup Location" required error={errors.pickupLocation?.message} {...register('pickupLocation')} />
          <FormField label="Pickup Contact" required error={errors.pickupContact?.message} {...register('pickupContact')} />
          <FormField label="Delivery Location" required error={errors.deliveryLocation?.message} {...register('deliveryLocation')} />
          <FormField label="Delivery Contact" required error={errors.deliveryContact?.message} {...register('deliveryContact')} />
        </div>
      </fieldset>

      <fieldset>
        <legend className="mb-5 font-display text-2xl font-bold">3. Freight and timing</legend>
        <div className="grid gap-5 sm:grid-cols-2">
          <FormField label="Service Type" required error={errors.serviceType?.message} {...register('serviceType')} />
          <FormField label="Freight Type" required error={errors.freightType?.message} {...register('freightType')} />
          <FormField label="Approximate Quantity" optional {...register('quantity')} />
          <FormField label="Approximate Weight" optional {...register('weight')} />
          <FormField label="Preferred Date" type="date" min={sydneyDateInputValue()} optional error={errors.preferredDate?.message} {...register('preferredDate')} />
          <FormField label="Timing" placeholder="For example, before 2 pm" required error={errors.timing?.message} {...register('timing')} />
        </div>
      </fieldset>

      <fieldset>
        <legend className="mb-5 font-display text-2xl font-bold">4. Special requirements</legend>
        <div className="space-y-5">
          <FormField label="Approximate Dimensions" optional {...register('dimensions')} />
          <FormField label="Special Handling Requirements" textarea optional {...register('specialHandling')} />
          <FormField label="Additional Details" textarea optional {...register('details')} />
          <label className="flex min-h-11 items-start gap-3 text-sm leading-6"><input className="mt-1 h-5 w-5 shrink-0 accent-red" type="checkbox" {...register('dangerousGoods')} /><span>This shipment includes declared dangerous goods or requires a dangerous-goods review.</span></label>
        </div>
      </fieldset>

      <fieldset className="border-t border-charcoal/15 pt-7">
        <legend className="font-display text-2xl font-bold">5. Review and submit</legend>
        <input className="sr-only" tabIndex={-1} autoComplete="off" aria-hidden="true" {...register('website')} />
        <label className="mt-5 flex min-h-11 items-start gap-3 text-sm leading-6"><input className="mt-1 h-5 w-5 shrink-0 accent-red" type="checkbox" required {...register('consent')} /><span>I consent to 1st Class Express using these details to review this booking enquiry. <span className="text-red" aria-hidden="true">*</span></span></label>
        {errors.consent && <p className="mt-2 text-sm font-semibold text-red" role="alert">{errors.consent.message}</p>}
        {result?.message && <div className="mt-4"><FormError message={result.message} /></div>}
        <button type="submit" className="button-primary mt-5 w-full disabled:cursor-wait disabled:opacity-70 sm:w-auto" disabled={isSubmitting}>{isSubmitting ? 'Sending enquiry…' : 'Send Booking Enquiry'}</button>
      </fieldset>
    </form>
  )
}
