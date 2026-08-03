import { ArrowRight, Check, Mail, Phone } from 'lucide-react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { AustraliaRouteGraphic } from '../components/coverage/AustraliaRouteGraphic'
import { Button } from '../components/common/Button'
import { OptimizedImage } from '../components/common/OptimizedImage'
import { SectionHeading } from '../components/common/SectionHeading'
import { SEO } from '../components/common/SEO'
import { HomeHero } from '../components/hero/HomeHero'
import { TruckArrivalIntro } from '../components/intro/TruckArrivalIntro'
import { Reveal } from '../components/motion/Reveal'
import { RouteLine } from '../components/motion/RouteLine'
import { TiltCard } from '../components/motion/TiltCard'
import { company } from '../content/company'
import { fleetCategories } from '../content/fleet'
import { areas } from '../content/serviceAreas'
import { seo } from '../content/seo'
import { services } from '../content/services'

const trustPoints = [
  'Australian-owned business',
  'Professional transport support',
  'Reliable delivery scheduling',
  'Flexible fleet solutions',
  'Local, regional and interstate capability',
  'Safe freight handling',
  'Direct customer communication',
  'Competitive transport options',
  'Customer-focused service',
  'Experienced operational leadership',
]

const processSteps = ['Request a Quote', 'Confirm Your Requirements', 'Freight Is Collected', 'Transport and Updates', 'Safe Delivery']

export function HomePage() {
  const [introDone, setIntroDone] = useState(false)

  return (
    <>
      <SEO {...seo.home} />
      {!introDone && <TruckArrivalIntro onComplete={() => setIntroDone(true)} />}
      <HomeHero />

      <section className="bg-gold py-4" aria-label="Service highlights">
        <div className="container-page flex flex-wrap justify-center gap-x-8 gap-y-2 text-xs font-extrabold uppercase tracking-[.13em] text-ink">
          {['Australian Owned', 'Committed Service', 'Flexible Fleet', 'Local and Interstate', 'Direct Support'].map((item) => <span key={item}>{item}</span>)}
        </div>
      </section>

      <section className="section overflow-hidden bg-cream">
        <div className="container-page grid items-center gap-12 lg:grid-cols-[1.02fr_.98fr]">
          <Reveal>
            <SectionHeading
              eyebrow="A practical approach"
              title="Transport Solutions Built Around Your Needs"
              copy="1st Class Express supports businesses and private customers with flexible courier, freight and logistics services. From urgent local deliveries to regional and interstate transport, the company focuses on dependable scheduling, professional communication and careful freight handling."
            />
            <div className="mt-8 grid grid-cols-2 gap-4">
              {company.values.map((value) => <div className="border-l-2 border-gold pl-4 font-display text-xl font-bold" key={value}>{value}</div>)}
            </div>
            <Link className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-red-dark" to="/about">About 1st Class Express <ArrowRight size={16} /></Link>
          </Reveal>
          <Reveal>
            <figure className="image-frame image-depth relative min-h-80 overflow-hidden bg-ink shadow-2xl">
              <OptimizedImage
                src="/assets/trucks/k200/k200-detail.webp"
                alt="Cinematic original artwork of a classic K200-inspired cab-over prime mover on an Australian highway"
                width={1200}
                height={900}
                className="absolute inset-0 h-full w-full object-cover"
                sizes="(min-width: 1024px) 48vw, 100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent" aria-hidden="true" />
              <figcaption className="absolute bottom-7 left-7 border-l border-gold pl-4 text-sm font-semibold text-white">Professional freight operations<br /><span className="text-gold-light">Across local and longer routes</span></figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-page">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <SectionHeading eyebrow="Services" title="Flexible Freight, Delivered with Care" copy="Choose the level of support that suits your freight, route and requested timeframe." />
            <Button to="/services" variant="secondary">All services <ArrowRight size={16} /></Button>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {services.slice(0, 4).map((service, index) => {
              const Icon = service.Icon
              return (
                <TiltCard key={service.name}>
                  <article className={`surface-card h-full ${index === 0 ? 'bg-charcoal text-white' : ''}`}>
                    <Icon className={index === 0 ? 'text-gold' : 'text-red'} size={28} />
                    <h3 className="mt-8 text-2xl font-bold">{service.name}</h3>
                    <p className={`mt-3 text-sm leading-6 ${index === 0 ? 'text-soft-grey' : 'text-slate'}`}>{service.summary}</p>
                    <Link to="/services" className={`mt-6 inline-flex items-center gap-2 text-sm font-bold ${index === 0 ? 'text-gold' : 'text-red-dark'}`}>Learn more <ArrowRight size={15} /></Link>
                  </article>
                </TiltCard>
              )
            })}
          </div>
          <div className="mt-6 grid gap-x-8 gap-y-3 border-t border-charcoal/10 pt-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.slice(4).map((service) => <Link className="text-sm font-semibold hover:text-red" to="/services" key={service.name}>{service.name} <ArrowRight className="inline" size={14} /></Link>)}
          </div>
        </div>
      </section>

      <section className="section overflow-hidden bg-navy text-white">
        <div className="container-page grid items-center gap-10 lg:grid-cols-2">
          <Reveal>
            <SectionHeading eyebrow="Fleet capability" title="A Transport Solution for Every Load" inverted copy="Whether the job requires a small commercial van, pallet transport, a rigid truck, semi-trailer or larger interstate equipment, 1st Class Express can help identify an appropriate transport solution." />
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {fleetCategories.map((category) => <div key={category} className="border-b border-white/15 py-3 text-sm font-semibold"><Check className="mr-2 inline text-gold" size={16} />{category}</div>)}
            </div>
            <Button to="/fleet" variant="dark" className="mt-8">Explore Our Fleet <ArrowRight size={16} /></Button>
          </Reveal>
          <Reveal>
            <figure className="image-frame image-depth relative min-h-[25rem] overflow-hidden border-gold/30 bg-ink">
              <OptimizedImage src="/assets/trucks/k200/k200-hero.webp" alt="Original cinematic artwork of a K200-inspired highway prime mover" width={1600} height={900} className="absolute inset-0 h-full w-full object-cover object-[70%_center]" sizes="(min-width: 1024px) 48vw, 100vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/95 via-transparent to-transparent" aria-hidden="true" />
              <figcaption className="absolute bottom-7 left-7 right-7">
                <p className="eyebrow">Classic cab-over capability</p>
                <p className="mt-2 max-w-sm font-display text-2xl font-bold">Built around the freight, route and timeframe.</p>
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      <section className="section overflow-hidden bg-charcoal text-white">
        <div className="container-page grid items-center gap-10 lg:grid-cols-[1.12fr_.88fr]">
          <Reveal>
            <div className="image-frame image-depth relative min-h-[27rem] overflow-hidden border-gold/30">
              <OptimizedImage src="/assets/trucks/k220/k220-feature.webp" alt="Original cinematic artwork of a modern K220-inspired prime mover at sunrise" width={1200} height={900} className="absolute inset-0 h-full w-full object-cover" sizes="(min-width: 1024px) 54vw, 100vw" />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-charcoal/35" aria-hidden="true" />
            </div>
          </Reveal>
          <Reveal>
            <div className="border-l border-gold pl-6">
              <p className="eyebrow">Modern K220-inspired feature</p>
              <h2 className="mt-3 text-4xl font-extrabold sm:text-5xl">Built for Serious Freight</h2>
              <p className="mt-5 leading-7 text-soft-grey">From local delivery support through to large interstate freight requirements, 1st Class Express coordinates transport solutions suited to the load, route and requested timeframe.</p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Button to="/fleet" variant="dark">Explore Our Fleet</Button>
                <Button to="/quote">Request Vehicle Advice</Button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section bg-cream">
        <div className="container-page">
          <SectionHeading eyebrow="Why 1st Class" title="A Focus on Practical, Professional Service" />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {trustPoints.map((item, index) => <div className="border-t border-gold pt-4 text-sm font-bold" key={item}><span className="mr-2 text-red">{String(index + 1).padStart(2, '0')}</span>{item}</div>)}
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-page">
          <SectionHeading eyebrow="Delivery process" title="Simple Steps. Reliable Delivery." />
          <RouteLine />
          <ol className="mt-6 grid gap-5 md:grid-cols-5">
            {processSteps.map((step, index) => <li className="surface-card" key={step}><span className="text-xs font-bold text-red">{String(index + 1).padStart(2, '0')}</span><p className="mt-5 font-display text-xl font-bold">{step}</p></li>)}
          </ol>
        </div>
      </section>

      <section className="section bg-navy text-white">
        <div className="container-page grid items-center gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Service areas" title="Sydney, Regional NSW, ACT and Interstate Enquiries" inverted copy="We consider service areas and transport enquiries based on the route, freight and operational requirements." />
            <div className="mt-7 grid gap-4 sm:grid-cols-2">
              {Object.entries(areas).map(([group, places]) => <div key={group}><h3 className="font-bold text-gold">{group}</h3><p className="mt-2 text-sm leading-6 text-soft-grey">{places.slice(0, 6).join(' · ')}{places.length > 6 ? ' · …' : ''}</p></div>)}
            </div>
            <Link className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-white hover:text-gold" to="/service-areas">View service areas <ArrowRight size={16} /></Link>
          </div>
          <AustraliaRouteGraphic />
        </div>
      </section>

      <section className="section overflow-hidden bg-white">
        <div className="container-page grid items-center gap-10 lg:grid-cols-[.9fr_1.1fr]">
          <Reveal>
            <img src="/assets/leadership/executive-profile.svg" alt="Branded executive profile graphic for Div Sharma" width="960" height="720" className="image-depth w-full" loading="lazy" />
          </Reveal>
          <Reveal>
            <div className="border-l border-gold pl-6">
              <p className="eyebrow">Leadership</p>
              <h2 className="mt-3 text-4xl font-extrabold sm:text-5xl">Leadership Built on Experience</h2>
              <p className="mt-5 leading-7 text-slate">Div Sharma leads 1st Class Express with a focus on dependable transport solutions, professional customer service and flexible logistics support. The company assists customers with requirements ranging from one-tonne vans through to large interstate freight and road-train transport enquiries.</p>
              <p className="mt-7 font-display text-3xl font-bold">{company.director}</p>
              <p className="mt-1 text-sm font-semibold text-red-dark">{company.title}</p>
              <div className="mt-7 flex flex-wrap gap-4 text-sm font-semibold">
                <a className="inline-flex items-center gap-2 hover:text-red" href={company.phoneHref}><Phone size={17} />{company.phone}</a>
                <a className="inline-flex items-center gap-2 break-all hover:text-red" href={company.emailHref}><Mail size={17} />{company.email}</a>
              </div>
              <div className="mt-7 flex flex-wrap gap-3">
                <a className="button-secondary" href={company.linkedin} target="_blank" rel="noopener noreferrer">Connect on LinkedIn</a>
                <Button to="/quote">Request a Quote</Button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section bg-cream">
        <div className="container-page grid gap-12 lg:grid-cols-2">
          <SectionHeading eyebrow="Professional drivers" title="Professional Drivers and Reliable Representation" copy="1st Class Express places importance on driver presentation, professional communication, safe operating practices and reliable customer service. Where agreed, drivers may represent customer businesses professionally and follow suitable delivery instructions or presentation requirements." />
          <div className="grid gap-4 sm:grid-cols-2">
            {['Professional presentation', 'Safe delivery practices', 'Customer communication', 'Reliable scheduling', 'Flexible service arrangements', 'Careful freight handling'].map((item) => <p className="border-l-2 border-red bg-white p-5 text-sm font-bold shadow-sm" key={item}>{item}</p>)}
          </div>
        </div>
      </section>

      <section className="relative isolate overflow-hidden bg-red py-20 text-white">
        <OptimizedImage src="/assets/trucks/k220/k220-side.webp" alt="" width={1600} height={900} className="absolute inset-0 -z-20 h-full w-full object-cover object-center opacity-30 mix-blend-multiply" sizes="100vw" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-red via-red/95 to-red-dark/80" aria-hidden="true" />
        <div className="container-page flex flex-col justify-between gap-8 lg:flex-row lg:items-center">
          <div>
            <p className="eyebrow !text-white">Start the conversation</p>
            <h2 className="mt-3 text-4xl font-extrabold">Let Us Do What We Do Best</h2>
            <p className="mt-4 max-w-2xl leading-7 text-white/90">Tell us what needs to be moved, where it needs to go and when it is required. The 1st Class Express team will help determine a suitable courier, freight or transport solution.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button to="/quote" variant="dark">Get a Free Quote</Button>
            <Button to="/book" variant="dark">Book Now</Button>
            <a className="button-dark" href={company.phoneHref}>Call {company.phone}</a>
          </div>
        </div>
      </section>
    </>
  )
}
