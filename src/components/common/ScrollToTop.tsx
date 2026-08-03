import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
export function ScrollToTop() { const location = useLocation(); useEffect(() => { if (!location.hash) window.scrollTo(0, 0); const main = document.getElementById('main-content'); main?.setAttribute('tabindex', '-1'); main?.focus({ preventScroll: true }); }, [location.key, location.hash]); return null }
