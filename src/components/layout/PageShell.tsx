import { Outlet } from 'react-router-dom'
import { SiteHeader } from './SiteHeader'
import { SiteFooter } from './SiteFooter'
import { ScrollToTop } from '../common/ScrollToTop'
export function PageShell() { return <><a className="skip-link button-primary" href="#main-content">Skip to content</a><ScrollToTop/><SiteHeader/><main id="main-content"><Outlet/></main><SiteFooter/></> }
