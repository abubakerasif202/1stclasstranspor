import { lazy, Suspense, type ComponentType } from 'react'
import { createBrowserRouter } from 'react-router-dom'
import { PageShell } from '../components/layout/PageShell'
const HomePage = lazy(async () => ({ default: (await import('../pages/HomePage')).HomePage }))
const AboutPage = lazy(async () => ({ default: (await import('../pages/AboutPage')).AboutPage }))
const ServicesPage = lazy(async () => ({ default: (await import('../pages/ServicesPage')).ServicesPage }))
const FleetPage = lazy(async () => ({ default: (await import('../pages/FleetPage')).FleetPage }))
const ServiceAreasPage = lazy(async () => ({ default: (await import('../pages/ServiceAreasPage')).ServiceAreasPage }))
const QuotePage = lazy(async () => ({ default: (await import('../pages/QuotePage')).QuotePage }))
const BookPage = lazy(async () => ({ default: (await import('../pages/BookPage')).BookPage }))
const ContactPage = lazy(async () => ({ default: (await import('../pages/ContactPage')).ContactPage }))
const PrivacyPage = lazy(async () => ({ default: (await import('../pages/PrivacyPage')).PrivacyPage }))
const TermsPage = lazy(async () => ({ default: (await import('../pages/TermsPage')).TermsPage }))
const NotFoundPage = lazy(async () => ({ default: (await import('../pages/NotFoundPage')).NotFoundPage }))
const render = (Component: ComponentType) => <Suspense fallback={<div className="min-h-64 bg-cream" aria-busy="true"/>}><Component/></Suspense>
export const router = createBrowserRouter([{ element: <PageShell/>, children: [{ path: '/', element: render(HomePage) }, { path: '/about', element: render(AboutPage) }, { path: '/services', element: render(ServicesPage) }, { path: '/fleet', element: render(FleetPage) }, { path: '/service-areas', element: render(ServiceAreasPage) }, { path: '/quote', element: render(QuotePage) }, { path: '/book', element: render(BookPage) }, { path: '/contact', element: render(ContactPage) }, { path: '/privacy', element: render(PrivacyPage) }, { path: '/terms', element: render(TermsPage) }, { path: '*', element: render(NotFoundPage) }] }])
