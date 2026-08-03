import { PageHero } from '../components/common/PageHero'
import { SEO } from '../components/common/SEO'
import { BookingForm } from '../components/forms/BookingForm'
import { seo } from '../content/seo'
export function BookPage() { return <><SEO {...seo.book}/><PageHero eyebrow="Booking enquiry" title="Start a Delivery Booking Enquiry" copy="Submitting this form creates a booking enquiry. A booking is not confirmed until 1st Class Express reviews and accepts the request."/><section className="section"><div className="container-page max-w-4xl"><BookingForm/></div></section></> }
