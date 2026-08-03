import { Link } from 'react-router-dom'
import { Button } from '../components/common/Button'
import { OptimizedImage } from '../components/common/OptimizedImage'
import { PageHero } from '../components/common/PageHero'
import { SectionHeading } from '../components/common/SectionHeading'
import { SEO } from '../components/common/SEO'
import { company } from '../content/company'
import { fleetCategories } from '../content/fleet'
import { seo } from '../content/seo'

export function AboutPage() {
  return (
    <>
      <SEO {...seo.about} />
      <PageHero eyebrow="About us" title="A Service Commitment That Moves With You" copy="Australian-owned transport support for local, regional and interstate freight enquiries." image="/assets/trucks/k200/k200-hero.webp" />
      <section className="section">
        <div className="container-page grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Company overview" title="Practical support for freight requirements" copy="1st Class Express works with businesses and private customers seeking a reliable, professional transport partner. The focus is clear communication, appropriate scheduling and careful freight handling." />
            <p className="mt-6 leading-7 text-slate">The company’s approach is based on understanding the load, route and requested timeframe before coordinating a suitable transport solution.</p>
          </div>
          <figure className="image-frame image-depth relative min-h-80 overflow-hidden bg-ink">
            <OptimizedImage src="/assets/trucks/k220/k220-side.webp" alt="Original branded artwork of a modern K220-inspired freight vehicle on a regional Australian route" width={1600} height={900} className="absolute inset-0 h-full w-full object-cover" sizes="(min-width: 1024px) 48vw, 100vw" />
          </figure>
        </div>
      </section>
      <section className="section bg-charcoal text-white">
        <div className="container-page">
          <SectionHeading eyebrow="Core values" title="The principles behind every conversation" inverted />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {company.values.map((value, index) => <div className="border-t border-gold p-5" key={value}><span className="text-xs font-bold text-red">{String(index + 1).padStart(2, '0')}</span><h3 className="mt-7 text-2xl font-bold">{value}</h3></div>)}
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container-page grid items-center gap-10 lg:grid-cols-[.8fr_1.2fr]">
          <img src="/assets/leadership/executive-profile.svg" alt="Branded executive profile graphic for Div Sharma" width="960" height="720" className="image-depth w-full" loading="lazy" />
          <div>
            <SectionHeading eyebrow="Leadership and drivers" title="Experienced operational leadership" copy={`${company.director}, ${company.title}, leads 1st Class Express with a focus on dependable transport solutions, professional customer service and flexible logistics support.`} />
            <Link className="mt-6 inline-block font-bold text-red-dark" to="/contact">Contact Div Sharma →</Link>
            <h3 className="mt-10 font-display text-2xl font-bold">Fleet flexibility</h3>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">{fleetCategories.map((category) => <p key={category} className="border-l-2 border-gold pl-3 text-sm font-semibold">{category}</p>)}</div>
          </div>
        </div>
      </section>
      <section className="bg-red py-16 text-white">
        <div className="container-page flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="text-3xl font-extrabold">Let’s find a suitable transport solution.</h2>
          <Button to="/quote" variant="dark">Request a Quote</Button>
        </div>
      </section>
    </>
  )
}
