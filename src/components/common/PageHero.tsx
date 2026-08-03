import { SectionHeading } from './SectionHeading'
export function PageHero({ eyebrow, title, copy }: { eyebrow: string; title: string; copy: string }) { return <section className="road-grid bg-charcoal py-20 text-white sm:py-28"><div className="container-page"><SectionHeading eyebrow={eyebrow} title={title} copy={copy} inverted/></div></section> }
