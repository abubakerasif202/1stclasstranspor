import { Menu, Phone, X } from 'lucide-react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'
import { company } from '../../content/company'
import { navigation } from '../../content/navigation'
import { useScrollProgress } from '../../hooks/useScrollProgress'
import { TopBar } from './TopBar'

export function Brand() {
  return (
    <Link to="/" aria-label="1st Class Express home" className="inline-flex shrink-0 items-center">
      <img
        src="/assets/brand/logo-horizontal.png"
        alt="1st Class Express"
        width="920"
        height="210"
        className="h-11 w-auto sm:h-12"
      />
    </Link>
  )
}

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  const firstMobileLink = useRef<HTMLAnchorElement>(null)
  const location = useLocation()
  const scrolled = useScrollProgress()

  useEffect(() => setOpen(false), [location.pathname])

  useEffect(() => {
    if (!open) return
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }
    document.addEventListener('keydown', handleKeyDown)
    firstMobileLink.current?.focus()
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [open])

  const solid = scrolled || location.pathname !== '/'

  return (
    <header className={`sticky top-0 z-40 transition-colors duration-300 ${solid ? 'bg-charcoal shadow-xl' : 'bg-ink/90 backdrop-blur-md'}`}>
      <TopBar />
      <div className="container-page flex min-h-[4.75rem] items-center justify-between gap-4 py-3">
        <Brand />
        <nav className="hidden items-center gap-5 xl:flex" aria-label="Main navigation">
          {navigation.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) => `text-xs font-bold uppercase tracking-[.12em] text-soft-grey transition hover:text-gold ${isActive ? 'text-gold' : ''}`}
              end={item.to === '/'}
            >
              {item.label}
            </NavLink>
          ))}
          <Link className="button-primary min-h-10 py-2" to="/quote">Get a Quote</Link>
        </nav>
        <div className="flex items-center gap-2 xl:hidden">
          <a className="rounded-sm p-3 text-white transition hover:bg-white/10" href={company.phoneHref} aria-label={`Call 1st Class Express on ${company.phone}`}>
            <Phone size={20} />
          </a>
          <button
            className="rounded-sm border border-white/30 p-3 text-white transition hover:border-gold hover:text-gold"
            type="button"
            aria-label={open ? 'Close navigation' : 'Open navigation'}
            aria-expanded={open}
            aria-controls="mobile-navigation"
            onClick={() => setOpen((current) => !current)}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      {open && (
        <div className="border-t border-white/10 bg-charcoal shadow-2xl xl:hidden" id="mobile-navigation">
          <nav className="container-page flex flex-col py-4" aria-label="Mobile navigation">
            {navigation.map((item, index) => (
              <NavLink
                ref={index === 0 ? firstMobileLink : undefined}
                key={item.to}
                to={item.to}
                className={({ isActive }) => `border-b border-white/10 py-4 text-sm font-bold ${isActive ? 'text-gold' : 'text-white'}`}
              >
                {item.label}
              </NavLink>
            ))}
            <Link className="button-primary mt-4" to="/quote">Get a Quote</Link>
          </nav>
        </div>
      )}
    </header>
  )
}
