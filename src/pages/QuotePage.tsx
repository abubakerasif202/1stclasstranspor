import { PageHero } from '../components/common/PageHero'
import { SEO } from '../components/common/SEO'
import { QuoteForm } from '../components/forms/QuoteForm'
import { seo } from '../content/seo'
export function QuotePage() { return <><SEO {...seo.quote}/><PageHero eyebrow="Get a free quote" title="Tell Us What Needs to Move" copy="Share the essentials and we’ll review a suitable courier, freight or transport solution."/><section className="section"><div className="container-page max-w-4xl"><QuoteForm/></div></section></> }
