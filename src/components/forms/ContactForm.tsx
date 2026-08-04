import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { contactSchema, type ContactData } from '../../lib/formSchemas'
import { submitContactForm } from '../../lib/formSubmission'
import { FormError } from './FormError'
import { FormField } from './FormField'
import { FormSuccess } from './FormSuccess'

export function ContactForm() {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<ContactData>({
    resolver: zodResolver(contactSchema),
    defaultValues: { consent: false, website: '' },
  })
  const [result, setResult] = useState<{ success: boolean; reference?: string; message?: string }>()
  const send = async (data: ContactData) => {
    setResult(undefined)
    setResult(await submitContactForm(data))
  }

  if (result?.success) return <FormSuccess reference={result.reference} />

  return (
    <form noValidate aria-busy={isSubmitting} onSubmit={handleSubmit(send)} className="space-y-5">
      <p className="text-sm text-slate">Required fields are marked *.</p>
      <FormField label="Name" autoComplete="name" required error={errors.name?.message} {...register('name')} />
      <FormField label="Email" type="email" autoComplete="email" required error={errors.email?.message} {...register('email')} />
      <FormField label="Phone" type="tel" inputMode="tel" autoComplete="tel" optional error={errors.phone?.message} {...register('phone')} />
      <FormField label="How can we help?" textarea required error={errors.message?.message} {...register('message')} />
      <input className="sr-only" tabIndex={-1} autoComplete="off" aria-hidden="true" {...register('website')} />
      <label className="flex min-h-11 items-start gap-3 text-sm leading-6"><input className="mt-1 h-5 w-5 shrink-0 accent-red" type="checkbox" required {...register('consent')} /><span>I consent to 1st Class Express using these details to respond to my enquiry. <span className="text-red" aria-hidden="true">*</span></span></label>
      {errors.consent && <p className="text-sm font-semibold text-red" role="alert">{errors.consent.message}</p>}
      {result?.message && <FormError message={result.message} />}
      <button type="submit" className="button-primary w-full disabled:cursor-wait disabled:opacity-70 sm:w-auto" disabled={isSubmitting}>{isSubmitting ? 'Sending…' : 'Send Enquiry'}</button>
    </form>
  )
}
