import { motion } from 'framer-motion'
export function RoadLayer() { return <motion.div aria-hidden="true" className="road-grid absolute inset-x-0 bottom-0 h-[65%] origin-bottom bg-[linear-gradient(180deg,transparent,#090A0C_20%)] opacity-60" initial={{ scaleY: .2 }} animate={{ scaleY: 1 }} transition={{ duration: .7 }} /> }
