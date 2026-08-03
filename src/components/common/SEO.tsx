import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { company } from '../../content/company'

type Props = {
  title: string
  description: string
  noIndex?: boolean
}

const socialImage = `${company.website}/assets/og/og-home.jpg`

export function SEO({ title, description, noIndex = false }: Props) {
  const { pathname } = useLocation()

  useEffect(() => {
    const canonicalPath = pathname === '/' ? '/' : pathname.replace(/\/$/, '')
    const canonical = `${company.website}${canonicalPath}`
    document.title = title

    const setMeta = (selector: string, value: string, attribute = 'content') => {
      let node = document.head.querySelector(selector) as HTMLMetaElement | HTMLLinkElement | null
      if (!node) {
        node = selector.startsWith('link') ? document.createElement('link') : document.createElement('meta')
        document.head.append(node)
      }
      node.setAttribute(attribute, value)
    }

    setMeta('meta[name="description"]', description)
    setMeta('meta[name="robots"]', noIndex ? 'noindex, nofollow' : 'index, follow, max-image-preview:large')
    setMeta('meta[property="og:type"]', 'website')
    setMeta('meta[property="og:site_name"]', company.name)
    setMeta('meta[property="og:locale"]', 'en_AU')
    setMeta('meta[property="og:title"]', title)
    setMeta('meta[property="og:description"]', description)
    setMeta('meta[property="og:url"]', canonical)
    setMeta('meta[property="og:image"]', socialImage)
    setMeta('meta[property="og:image:alt"]', '1st Class Express transport and logistics')
    setMeta('meta[name="twitter:card"]', 'summary_large_image')
    setMeta('meta[name="twitter:title"]', title)
    setMeta('meta[name="twitter:description"]', description)
    setMeta('meta[name="twitter:image"]', socialImage)
    setMeta('link[rel="canonical"]', canonical, 'href')
  }, [title, description, noIndex, pathname])

  return null
}
