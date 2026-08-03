import { PageHero } from '../components/common/PageHero'
import { SEO } from '../components/common/SEO'
import { company } from '../content/company'

export function TermsPage() {
  return (
    <>
      <SEO title="Website Terms | 1st Class Express" description="Website and enquiry terms for 1st Class Express." />
      <PageHero eyebrow="Terms" title="Website Terms" copy="Important information about this website and transport enquiries." />
      <section className="section">
        <div className="container-page max-w-3xl space-y-9 leading-7 text-slate">
          <section><h2 className="text-2xl font-bold text-charcoal">General information</h2><p className="mt-3">Content on this website is general in nature and may change without notice. Service suitability, timing, pricing and availability are assessed from the details of each enquiry.</p></section>
          <section><h2 className="text-2xl font-bold text-charcoal">Quote and booking enquiries</h2><p className="mt-3">Submitting a quote or booking form creates an enquiry only. A booking is not confirmed until 1st Class Express has reviewed the request and expressly accepted the work, requirements and applicable commercial terms.</p></section>
          <section><h2 className="text-2xl font-bold text-charcoal">Freight information</h2><p className="mt-3">You are responsible for providing accurate information about the freight, locations, dimensions, weight, handling needs and any dangerous goods. Material changes may affect suitability, timing or price.</p></section>
          <section><h2 className="text-2xl font-bold text-charcoal">Website use</h2><p className="mt-3">You must not misuse this website, attempt unauthorised access, submit unlawful material or interfere with its operation. Website content and branding may not be reproduced for commercial use without permission.</p></section>
          <section><h2 className="text-2xl font-bold text-charcoal">Contact</h2><p className="mt-3">Questions about these terms can be sent to <a className="font-semibold text-red-dark underline" href={company.emailHref}>{company.email}</a> or discussed by calling <a className="font-semibold text-red-dark underline" href={company.phoneHref}>{company.phone}</a>.</p></section>
          <p className="border-t border-charcoal/15 pt-6 text-sm">Last updated: 4 August 2026.</p>
        </div>
      </section>
    </>
  )
}
