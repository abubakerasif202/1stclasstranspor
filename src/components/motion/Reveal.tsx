import { motion } from 'framer-motion'
import type { PropsWithChildren } from 'react'
import { fadeUp } from '../../lib/motionPresets'
export function Reveal({ children }: PropsWithChildren) { return <motion.div {...fadeUp}>{children}</motion.div> }
