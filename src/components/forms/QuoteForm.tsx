import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { quoteSchema, type QuoteData } from '../../lib/formSchemas'
import { submitQuoteForm } from '../../lib/formSubmission'
import { sydneyDateInputValue } from '../../lib/dateInput'
import { FormError } from './FormError'
import { FormField } from './FormField'
import { FormSuccess } from './FormSuccess'

export function QuoteForm() {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<QuoteData>({
    resolver: zodResolver(quoteSchema),
    defaultValues: { dangerousGoods: false, consent: false, website: '' },
  })
  const [result, setResult] = useState<{ success: boolean; reference?: string; message?: string }>()
  const onSubmit = async (data: QuoteData) => {
    setResult(undefined)
    setResult(await submitQuoteForm(data))
  }

  if (result?.success) return <FormSuccess reference={result.reference} />

  return (
    <form noValidate aria-busy={isSubmitting} onSubmit={handleSubmit(onSubmit)} className="space-y-10">
      <p className="border-l-2 border-gold pl-4 text-sm text-slate"><span className="font-bold text-charcoal">Required fields are marked *</span>. Estimates are welcome where exact freight details are not yet known.</p>

      <fieldset>
        <legend className="mb-5 font-display text-2xl font-bold">1. Your details</legend>
        <div className="grid gap-5 sm:grid-cols-2">
          <FormField label="First Name" autoComplete="given-name" required error={errors.firstName?.message} {...register('firstName')} />
          <FormField label="Last Name" autoComplete="family-name" required error={errors.lastName?.message} {...register('lastName')} />
          <FormField label="Business Name" autoComplete="organization" optional {...register('businessName')} />
          <FormField label="Email" type="email" autoComplete="email" required error={errors.email?.message} {...register('email')} />
          <FormField label="Phone" type="tel" inputMode="tel" autoComplete="tel" required error={errors.phone?.message} {...register('phone')} />
        </div>
      </fieldset>

      <fieldset>
        <legend className="mb-5 font-display text-2xl font-bold">2. Journey and timing</legend>
        <div className="grid gap-5 sm:grid-cols-2">
          <FormField label="Pickup Location" autoComplete="street-address" required error={errors.pickupLocation?.message} {...register('pickupLocation')} />
          <FormField label="Delivery Location" autoComplete="street-address" required error={errors.deliveryLocation?.message} {...register('deliveryLocation')} />
          <FormField label="Preferred Date" type="date" min={sydneyDateInputValue()} optional error={errors.preferredDate?.message} {...register('preferredDate')} />
          <FormField label="Service Type" list="service-types" placeholder="Choose or describe a service" required error={errors.serviceType?.message} {...register('serviceType')} />
          <datalist id="service-types">
            <option value="Same-day delivery" />
            <option value="Next-day delivery" />
            <option value="Regional freight" />
            <option value="Interstate freight" />
            <option value="Linehaul transport" />
            <option value="Business logistics" />
          </datalist>
        </div>
      </fieldset>

      <fieldset>
        <legend className="mb-5 font-display text-2xl font-bold">3. Freight details</legend>
        <div className="grid gap-5 sm:grid-cols-2">
          <FormField label="Freight Type" placeholder="For example, palletised goods" required error={errors.freightType?.message} {...register('freightType')} />
          <FormField label="Approximate Quantity" optional {...register('quantity')} />
          <FormField label="Approximate Weight" optional {...register('weight')} />
          <FormField label="Approximate Dimensions" optional {...register('dimensions')} />
          <FormField label="Special Handling Requirements" optional {...register('specialHandling')} />
          <div className="sm:col-span-2"><FormField label="Additional Details" textarea optional error={errors.details?.message} {...register('details')} /></div>
        </div>
      </fieldset>

      <input className="sr-only" tabIndex={-1} autoComplete="off" aria-hidden="true" {...register('website')} />
      <fieldset className="space-y-4 border-t border-charcoal/15 pt-7">
        <legend className="font-display text-2xl font-bold">4. Review and send</legend>
        <label className="flex min-h-11 items-start gap-3 text-sm leading-6"><input className="mt-1 h-5 w-5 shrink-0 accent-red" type="checkbox" {...register('dangerousGoods')} /><span>This shipment includes declared dangerous goods or requires a dangerous-goods review.</span></label>
        <label className="flex min-h-11 items-start gap-3 text-sm leading-6"><input className="mt-1 h-5 w-5 shrink-0 accent-red" type="checkbox" required {...register('consent')} /><span>I consent to 1st Class Express using these details to respond to this enquiry. <span className="text-red" aria-hidden="true">*</span></span></label>
        {errors.consent && <p className="text-sm font-semibold text-red" role="alert">{errors.consent.message}</p>}
        {result?.message && <FormError message={result.message} />}
        <button type="submit" className="button-primary w-full disabled:cursor-wait disabled:opacity-70 sm:w-auto" disabled={isSubmitting}>{isSubmitting ? 'Sending enquiry…' : 'Request a Quote'}</button>
      </fieldset>
    </form>
  )
}
