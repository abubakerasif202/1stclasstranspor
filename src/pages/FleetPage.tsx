import { Button } from '../components/common/Button'
import { OptimizedImage } from '../components/common/OptimizedImage'
import { PageHero } from '../components/common/PageHero'
import { SectionHeading } from '../components/common/SectionHeading'
import { SEO } from '../components/common/SEO'
import { fleetCategories } from '../content/fleet'
import { seo } from '../content/seo'

export function FleetPage() {
  return (
    <>
      <SEO {...seo.fleet} />
      <PageHero eyebrow="Our fleet" title="Flexible Capability for Every Freight Conversation" copy="From smaller commercial transport through to larger interstate freight and road-train transport enquiries." image="/assets/trucks/k220/k220-hero.webp" />
      <section className="section">
        <div className="container-page grid items-center gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Classic K200-inspired capability" title="Built for the road ahead" copy="The classic cab-over format remains an unmistakable symbol of Australian linehaul capability. We match transport enquiries to the load, route, timing and operational availability." />
            <Button to="/quote" className="mt-7">Request Vehicle Advice</Button>
          </div>
          <figure className="image-frame image-depth relative min-h-[24rem] overflow-hidden bg-ink">
            <OptimizedImage src="/assets/trucks/k200/k200-detail.webp" alt="Original cinematic artwork of a classic K200-inspired cab-over prime mover" width={1200} height={900} className="absolute inset-0 h-full w-full object-cover" sizes="(min-width: 1024px) 48vw, 100vw" />
          </figure>
        </div>
      </section>
      <section className="section bg-charcoal text-white">
        <div className="container-page grid items-center gap-10 lg:grid-cols-2">
          <figure className="image-frame image-depth relative min-h-[26rem] overflow-hidden border-gold/30 bg-ink">
            <OptimizedImage src="/assets/trucks/k220/k220-feature.webp" alt="Original cinematic artwork of a modern K220-inspired prime mover at sunrise" width={1200} height={900} className="absolute inset-0 h-full w-full object-cover" sizes="(min-width: 1024px) 48vw, 100vw" />
          </figure>
          <div>
            <SectionHeading eyebrow="Modern K220-inspired capability" title="Built for Serious Freight" inverted copy="From local delivery support through to large interstate freight requirements, 1st Class Express coordinates transport solutions suited to the load, route and requested timeframe." />
            <Button to="/quote" variant="dark" className="mt-7">Request Vehicle Advice</Button>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container-page">
          <SectionHeading eyebrow="Categories" title="A flexible starting point" />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {fleetCategories.map((category, index) => <article className="surface-card" key={category}><span className="text-xs font-bold text-red">{String(index + 1).padStart(2, '0')}</span><h3 className="mt-8 text-2xl font-bold">{category}</h3></article>)}
          </div>
          <p className="mt-10 max-w-3xl border-l-2 border-gold pl-4 text-sm leading-6 text-slate">Vehicle availability depends on freight requirements, route, delivery date and operational availability. Truck imagery on this site is original, K200- and K220-inspired promotional artwork.</p>
        </div>
      </section>
    </>
  )
}
