import type { PropsWithChildren } from 'react'
import { usePointerTilt } from '../../hooks/usePointerTilt'
export function TiltCard({ children }: PropsWithChildren) { const tilt = usePointerTilt(); return <div {...tilt} className="transition-transform duration-200 will-change-transform">{children}</div> }
