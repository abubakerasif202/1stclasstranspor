import { CheckCircle2, Phone } from 'lucide-react'
import { PageHero } from '../components/common/PageHero'
import { SEO } from '../components/common/SEO'
import { QuoteForm } from '../components/forms/QuoteForm'
import { company } from '../content/company'
import { seo } from '../content/seo'

export function QuotePage() {
  return (
    <>
      <SEO {...seo.quote} />
      <PageHero eyebrow="Get a free quote" title="Tell Us What Needs to Move" copy="Share the essentials and we’ll review a suitable courier, freight or transport solution." />
      <section className="section">
        <div className="container-page grid gap-12 lg:grid-cols-[minmax(0,1fr)_20rem] lg:items-start">
          <QuoteForm />
          <aside className="border-t-2 border-gold bg-cream p-6 lg:sticky lg:top-32" aria-label="Quote preparation help">
            <p className="eyebrow">Before you start</p>
            <h2 className="mt-3 text-2xl font-bold">A few useful details</h2>
            <ul className="mt-5 space-y-4 text-sm leading-6 text-slate">
              {['Pickup and delivery locations', 'Preferred date or timing', 'Freight type and quantity', 'Approximate size and weight', 'Any access or handling needs'].map((item) => <li className="flex gap-3" key={item}><CheckCircle2 className="mt-1 shrink-0 text-red" size={17} />{item}</li>)}
            </ul>
            <p className="mt-6 text-sm leading-6 text-slate">Not sure about a field? Provide your best estimate and explain it in the additional details box.</p>
            <a className="mt-6 inline-flex min-h-11 items-center gap-2 font-bold text-red-dark hover:text-red" href={company.phoneHref}><Phone size={18} />Call {company.phone}</a>
          </aside>
        </div>
      </section>
    </>
  )
}
