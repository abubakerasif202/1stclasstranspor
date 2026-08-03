import { PageHero } from '../components/common/PageHero'
import { SEO } from '../components/common/SEO'
import { company } from '../content/company'

export function PrivacyPage() {
  return (
    <>
      <SEO title="Privacy Policy | 1st Class Express" description="How 1st Class Express handles information submitted through this website." />
      <PageHero eyebrow="Privacy" title="Privacy Policy" copy="How enquiry information is collected, used and protected." />
      <section className="section">
        <div className="container-page max-w-3xl space-y-9 leading-7 text-slate">
          <section><h2 className="text-2xl font-bold text-charcoal">Information we collect</h2><p className="mt-3">We collect the contact, freight, pickup, delivery and timing details you choose to provide through our quote, booking and contact forms. Basic technical information may also be processed by our website hosting provider to operate and secure the site.</p></section>
          <section><h2 className="text-2xl font-bold text-charcoal">How information is used</h2><p className="mt-3">Information is used to assess and respond to transport enquiries, communicate about requested services, coordinate accepted work and maintain appropriate business records. Submitting a form does not subscribe you to unrelated marketing.</p></section>
          <section><h2 className="text-2xl font-bold text-charcoal">Disclosure and storage</h2><p className="mt-3">Website form submissions are processed by Formspree so they can be delivered to 1st Class Express. Information may also be handled by service providers that support website hosting, communications or transport operations where reasonably required. We do not sell personal information. Information is retained only for legitimate operational, legal and record-keeping needs.</p></section>
          <section><h2 className="text-2xl font-bold text-charcoal">Access and contact</h2><p className="mt-3">To ask about, correct or request access to information you have supplied, email <a className="font-semibold text-red-dark underline" href={company.emailHref}>{company.email}</a> or call <a className="font-semibold text-red-dark underline" href={company.phoneHref}>{company.phone}</a>.</p></section>
          <p className="border-t border-charcoal/15 pt-6 text-sm">Last updated: 4 August 2026.</p>
        </div>
      </section>
    </>
  )
}
