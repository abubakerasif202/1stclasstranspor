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

export function TruckArrivalIntro({ onComplete }: Props) {
  const reducedMotion = useReducedMotionPreference()
  const [exiting, setExiting] = useState(false)
  const finishTimer = useRef<number | undefined>(undefined)
  const finishing = useRef(false)
  const [mobile] = useState(() => typeof window !== 'undefined' && window.innerWidth < 640)

  const finish = useCallback(() => {
    if (finishing.current) return
    finishing.current = true
    setExiting(true)
    finishTimer.current = window.setTimeout(onComplete, 340)
  }, [onComplete])

  useEffect(() => {
    const timeout = window.setTimeout(finish, reducedMotion ? 450 : mobile ? 1900 : 2450)
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') finish()
      if (event.key === 'Tab') {
        event.preventDefault()
        document.querySelector<HTMLElement>('[aria-label="1st Class Express arrival intro"] button')?.focus()
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    document.body.style.overflow = 'hidden'

    return () => {
      window.clearTimeout(timeout)
      if (finishTimer.current) window.clearTimeout(finishTimer.current)
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [reducedMotion, mobile, finish])

  return (
    <AnimatePresence>
      {!exiting && (
        <motion.section
          role="dialog"
          aria-modal="true"
          aria-label="1st Class Express arrival intro"
          className="fixed inset-0 z-[70] overflow-hidden bg-ink"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.32 } }}
        >
          <SkipIntroButton onSkip={finish} />
          <RoadLayer />
          <HeadlightLayer />
          <IntroTruckLayer mobile={mobile} />
          <FogLayer />
          {!reducedMotion && <div aria-hidden="true" className="particle-motion absolute left-[26%] top-0 h-1 w-1 rounded-full bg-white/60" />}
          <IntroLogoReveal reduced={reducedMotion} mobile={mobile} />
        </motion.section>
      )}
    </AnimatePresence>
  )
}
