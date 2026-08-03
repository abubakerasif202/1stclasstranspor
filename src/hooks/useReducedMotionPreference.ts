import { useReducedMotion } from 'framer-motion'
export const useReducedMotionPreference = () => useReducedMotion() ?? false
