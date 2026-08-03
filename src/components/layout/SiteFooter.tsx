import { ArrowUpRight, Mail, Phone } from 'lucide-react'
import { Link } from 'react-router-dom'
import { company } from '../../content/company'
import { navigation } from '../../content/navigation'

export function SiteFooter() {
  return (
    <footer className="bg-ink pt-16 text-soft-grey">
      <div className="container-page grid gap-10 pb-12 md:grid-cols-[1.2fr_.8fr_.9fr]">
        <div>
          <Link to="/" aria-label="1st Class Express home" className="inline-block">
            <img src="/assets/brand/logo-horizontal.png" alt="1st Class Express" width="920" height="210" className="h-16 w-auto max-w-full object-contain object-left" loading="lazy" />
          </Link>
          <p className="mt-5 max-w-sm leading-7">Transport and Logistics Specialists. From 1 Tonne Vans to Road Trains, Keeping Australia on the Move.</p>
        </div>
        <div>
          <p className="eyebrow">Navigate</p>
          <div className="mt-4 grid grid-cols-2 gap-3">
            {navigation.map((item) => <Link className="text-sm hover:text-gold" key={item.to} to={item.to}>{item.label}</Link>)}
            <Link className="text-sm hover:text-gold" to="/privacy">Privacy</Link>
            <Link className="text-sm hover:text-gold" to="/terms">Terms</Link>
          </div>
        </div>
        <div>
          <p className="eyebrow">Talk to us</p>
          <div className="mt-4 space-y-3 text-sm">
            <a className="flex items-center gap-2 hover:text-gold" href={company.phoneHref}><Phone size={16} />{company.phone}</a>
            <a className="flex items-center gap-2 break-all hover:text-gold" href={company.emailHref}><Mail size={16} />{company.email}</a>
            <a className="flex items-center gap-2 hover:text-gold" href={company.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn <ArrowUpRight size={16} /></a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-page flex flex-col gap-2 py-5 text-xs sm:flex-row sm:justify-between">
          <span>© {new Date().getFullYear()} 1st Class Express. All rights reserved.</span>
          <span>{company.tagline}</span>
        </div>
      </div>
    </footer>
  )
}
