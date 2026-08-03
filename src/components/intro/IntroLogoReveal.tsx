import { motion } from 'framer-motion'
import { company } from '../../content/company'

export function IntroLogoReveal({ reduced, mobile }: { reduced: boolean; mobile: boolean }) {
  const delay = reduced ? 0.05 : mobile ? 1.05 : 1.35

  return (
    <motion.div
      className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center"
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: reduced ? 0.2 : 0.45 }}
    >
      <img src="/assets/brand/logo-horizontal.png" alt="1st Class Express" width="920" height="210" className="h-auto w-[min(88vw,42rem)] drop-shadow-2xl" />
      <p className="mt-6 text-sm text-soft-grey sm:text-base">{company.tagline}</p>
    </motion.div>
  )
}
