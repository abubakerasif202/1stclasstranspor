import { OptimizedImage } from './OptimizedImage'

type Props = {
  eyebrow: string
  title: string
  copy: string
  image?: string
}

export function PageHero({ eyebrow, title, copy, image = '/assets/backgrounds/highway-dawn.webp' }: Props) {
  return (
    <section className="road-grid relative isolate overflow-hidden bg-charcoal py-20 text-white sm:py-28">
      <OptimizedImage src={image} alt="" width={1600} height={900} priority className="absolute inset-0 -z-20 h-full w-full object-cover opacity-40" sizes="100vw" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-ink via-ink/90 to-ink/35" aria-hidden="true" />
      <div className="container-page">
        <div className="max-w-3xl">
          <p className="eyebrow">{eyebrow}</p>
          <h1 className="mt-3 text-4xl font-extrabold leading-[1.02] sm:text-6xl">{title}</h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-soft-grey sm:text-lg">{copy}</p>
        </div>
      </div>
    </section>
  )
}
