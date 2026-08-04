import type { InputHTMLAttributes, TextareaHTMLAttributes } from 'react'

type SharedProps = { label: string; error?: string; hint?: string; optional?: boolean }
type Props = InputHTMLAttributes<HTMLInputElement> & SharedProps & { textarea?: false }
type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & SharedProps & { textarea: true }

export function FormField(props: Props | TextareaProps) {
  const { label, error, hint, optional, textarea, id, ...field } = props
  const fieldId = id ?? String(field.name)
  const describedBy = [hint ? `${fieldId}-hint` : '', error ? `${fieldId}-error` : ''].filter(Boolean).join(' ') || undefined
  const required = Boolean(field.required)
  const className = 'min-h-12 w-full rounded-md border border-charcoal/25 bg-white px-3 text-sm shadow-sm transition hover:border-charcoal/45 focus:border-red'

  return (
    <div>
      <label className="mb-2 flex items-baseline justify-between gap-3 text-sm font-bold text-charcoal" htmlFor={fieldId}>
        <span>{label}{required && <><span className="text-red" aria-hidden="true"> *</span><span className="sr-only"> (required)</span></>}</span>
        {optional && <span className="text-xs font-medium text-slate">Optional</span>}
      </label>
      {hint && <p id={`${fieldId}-hint`} className="mb-2 text-xs leading-5 text-slate">{hint}</p>}
      {textarea
        ? <textarea id={fieldId} className={`${className} min-h-32 py-3`} aria-invalid={Boolean(error)} aria-describedby={describedBy} {...field as TextareaHTMLAttributes<HTMLTextAreaElement>} />
        : <input id={fieldId} className={className} aria-invalid={Boolean(error)} aria-describedby={describedBy} {...field as InputHTMLAttributes<HTMLInputElement>} />}
      {error && <p id={`${fieldId}-error`} className="mt-2 text-sm font-semibold text-red" role="alert">{error}</p>}
    </div>
  )
}
