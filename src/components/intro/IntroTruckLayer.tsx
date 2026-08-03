import { motion } from 'framer-motion'
import { useReducedMotionPreference } from '../../hooks/useReducedMotionPreference'

export function IntroTruckLayer({ mobile }: { mobile: boolean }) {
  const reducedMotion = useReducedMotionPreference()

  return (
    <motion.div
      aria-hidden="true"
      className="absolute inset-x-0 bottom-[10%] mx-auto h-[52vh] w-[94vw] max-w-6xl overflow-hidden"
      initial={reducedMotion ? false : { scale: 0.45, y: -40, opacity: 0 }}
      animate={reducedMotion ? { opacity: 0.5 } : { scale: mobile ? 1.12 : 1.28, y: mobile ? 18 : 62, opacity: [0, 0.48, 0.92, 0.08] }}
      transition={reducedMotion ? { duration: 0.2 } : { duration: mobile ? 1.55 : 2.05, delay: 0.2, times: [0, 0.18, 0.72, 1], ease: 'easeIn' }}
    >
      <img
        src="/assets/trucks/k200/k200-intro-cutout.webp"
        alt=""
        width="1400"
        height="787"
        className="h-full w-full object-cover object-center opacity-95 [mask-image:linear-gradient(to_bottom,transparent_0%,black_18%,black_82%,transparent_100%)]"
        decoding="async"
      />
    </motion.div>
  )
}
