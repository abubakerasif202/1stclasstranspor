import { AnimatePresence, motion } from 'framer-motion'
import { useCallback, useEffect, useRef, useState } from 'react'
import { useReducedMotionPreference } from '../../hooks/useReducedMotionPreference'
import { FogLayer } from './FogLayer'
import { HeadlightLayer } from './HeadlightLayer'
import { IntroLogoReveal } from './IntroLogoReveal'
import { IntroTruckLayer } from './IntroTruckLayer'
import { RoadLayer } from './RoadLayer'
import { SkipIntroButton } from './SkipIntroButton'
type Props = { onComplete: () => void }
export function TruckArrivalIntro({ onComplete }: Props) { const reduced = useReducedMotionPreference(); const [exiting, setExiting] = useState(false); const finishTimer = useRef<number | undefined>(undefined); const finishing = useRef(false); const [mobile] = useState(() => typeof window !== 'undefined' && window.innerWidth < 640); const finish = useCallback(() => { if (finishing.current) return; finishing.current = true; setExiting(true); finishTimer.current = window.setTimeout(onComplete, 390) }, [onComplete]); useEffect(() => { const timeout = window.setTimeout(finish, reduced ? 650 : mobile ? 3200 : 4500); const escape = (event: KeyboardEvent) => { if (event.key === 'Escape') finish() }; document.addEventListener('keydown', escape); document.body.style.overflow = 'hidden'; return () => { window.clearTimeout(timeout); if (finishTimer.current) window.clearTimeout(finishTimer.current); document.removeEventListener('keydown', escape); document.body.style.overflow = '' } }, [reduced, mobile, finish]); return <AnimatePresence>{!exiting && <motion.section role="dialog" aria-label="1st Class Express arrival intro" className="fixed inset-0 z-[70] overflow-hidden bg-ink" initial={{ opacity: 1 }} exit={{ opacity: 0, transition: { duration: .38 } }}><SkipIntroButton onSkip={finish}/><RoadLayer/><HeadlightLayer/><IntroTruckLayer mobile={mobile}/><FogLayer/>{!reduced && <div aria-hidden="true" className="particle-motion absolute left-[26%] top-0 h-1 w-1 rounded-full bg-white/60"/>}<IntroLogoReveal reduced={reduced} mobile={mobile}/></motion.section>}</AnimatePresence> }
