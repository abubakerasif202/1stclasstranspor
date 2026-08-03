import { Link } from 'react-router-dom'
import { cn } from '../../lib/cn'
type Props = { to?: string; href?: string; children: React.ReactNode; variant?: 'primary' | 'secondary' | 'dark'; className?: string }
export function Button({ to, href, children, variant = 'primary', className }: Props) { const classes = cn(variant === 'primary' && 'button-primary', variant === 'secondary' && 'button-secondary', variant === 'dark' && 'button-dark', className); if (to) return <Link className={classes} to={to}>{children}</Link>; return <a className={classes} href={href}>{children}</a> }
