import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { Link } from 'react-router-dom'
import { company } from '../../content/company'
import { useReducedMotionPreference } from '../../hooks/useReducedMotionPreference'
import { Button } from '../common/Button'
import { OptimizedImage } from '../common/OptimizedImage'
import { RouteLine } from '../motion/RouteLine'

const proofPoints = ['Reliable Service', 'Professional Drivers', 'Flexible Transport Solutions', 'Local and Interstate Coverage']

export function HomeHero() {
  const reducedMotion = useReducedMotionPreference()

  return (
    <section className="relative isolate min-h-[44rem] overflow-hidden bg-ink text-white sm:min-h-[48rem] lg:min-h-[50rem]">
      <motion.div
        aria-hidden="true"
        className="absolute inset-0 -z-30"
        initial={reducedMotion ? false : { scale: 1.06, opacity: 0.72 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      >
        <OptimizedImage src="/assets/trucks/k200/k200-hero.webp" alt="" width={1600} height={900} priority className="h-full w-full object-cover object-[66%_center]" sizes="100vw" />
      </motion.div>
      <div aria-hidden="true" className="absolute inset-0 -z-20 bg-[linear-gradient(90deg,rgba(9,10,12,.99)_0%,rgba(9,10,12,.92)_42%,rgba(9,10,12,.36)_76%,rgba(9,10,12,.18)),linear-gradient(0deg,rgba(9,10,12,.86),transparent_60%)]" />
      <div aria-hidden="true" className="hero-glow absolute -right-24 top-1/3 -z-10 h-96 w-96 rounded-full bg-gold/15 blur-3xl" />

      <div className="container-page relative flex min-h-[44rem] flex-col justify-center py-16 sm:min-h-[48rem] sm:py-24 lg:min-h-[50rem]">
        <motion.div
          className="max-w-3xl"
          initial={reducedMotion ? false : { opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: reducedMotion ? 0 : 0.18, duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="eyebrow">Australian Transport &amp; Logistics</p>
          <h1 className="mt-4 max-w-3xl text-5xl font-extrabold leading-[.96] tracking-[-.06em] sm:text-6xl lg:text-7xl">Moving Australia with First-Class Service</h1>
          <p className="mt-6 text-xl font-semibold text-gold-light sm:text-2xl">From 1 Tonne Vans to Road Trains</p>
          <p className="mt-5 max-w-2xl leading-7 text-soft-grey">1st Class Express provides professional courier, freight, linehaul and interstate transport solutions with a strong commitment to reliability, safe handling and quality customer service.</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Button to="/quote">Get a Free Quote <ArrowRight size={17} /></Button>
            <Button to="/book" variant="dark">Book a Delivery</Button>
            <Link className="inline-flex min-h-12 items-center justify-center gap-2 px-3 py-3 text-sm font-bold text-white underline decoration-gold underline-offset-8 hover:text-gold" to="/services">Explore Our Services</Link>
          </div>
        </motion.div>

        <motion.aside
          className="mt-12 max-w-md border border-gold/40 bg-charcoal/90 p-5 shadow-2xl backdrop-blur-sm lg:absolute lg:bottom-28 lg:right-12"
          initial={reducedMotion ? false : { opacity: 0, x: 28 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: reducedMotion ? 0 : 0.55, duration: 0.7 }}
        >
          <p className="text-xs font-bold uppercase tracking-[.16em] text-gold">Delivery Enquiry</p>
          <p className="mt-3 font-display text-2xl font-bold">Need a transport solution?</p>
          <p className="mt-2 text-sm leading-6 text-soft-grey">Tell us where the freight is moving and we’ll help identify a suitable option.</p>
          <a className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-white hover:text-gold" href={company.phoneHref}>Speak with Div <ArrowRight size={16} /></a>
        </motion.aside>

        <div className="mt-12 lg:absolute lg:inset-x-12 lg:bottom-8">
          <RouteLine />
          <div className="mt-5 grid gap-3 text-sm font-semibold sm:grid-cols-2 lg:grid-cols-4">
            {proofPoints.map((text) => <span className="flex items-center gap-2" key={text}><CheckCircle2 size={16} className="text-gold" />{text}</span>)}
          </div>
        </div>
      </div>
    </section>
  )
}
