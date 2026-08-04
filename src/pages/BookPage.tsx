import { PageHero } from '../components/common/PageHero'
import { SEO } from '../components/common/SEO'
import { BookingForm } from '../components/forms/BookingForm'
import { seo } from '../content/seo'
export function BookPage() { return <><SEO {...seo.book}/><PageHero eyebrow="Booking enquiry" title="Start a Delivery Booking Enquiry" copy="Already know the shipment details? Send a booking enquiry for review. Transport is confirmed only after 1st Class Express accepts the request."/><section className="section"><div className="container-page max-w-4xl"><BookingForm/></div></section></> }
