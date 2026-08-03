import { Clock3, ShieldCheck, Truck, Warehouse, type LucideIcon } from 'lucide-react'
export type Service = { name: string; summary: string; uses: string[]; Icon: LucideIcon }
const shared = 'Service availability is considered against the requested route, date and operational requirements.'
export const services: Service[] = [
  { name: 'Same-Day Delivery', summary: 'Responsive delivery support for time-sensitive local freight requirements.', uses: ['Urgent documents', 'Time-sensitive freight', shared], Icon: Clock3 },
  { name: 'Next-Day Delivery', summary: 'Planned delivery support for freight that needs careful scheduling.', uses: ['Planned customer orders', 'Business consignments', shared], Icon: Clock3 },
  { name: 'After-Hours Delivery', summary: 'Flexible delivery arrangements where operating hours require consideration.', uses: ['Site access windows', 'Retail replenishment', shared], Icon: Truck },
  { name: 'Weekend Delivery', summary: 'Weekend transport enquiries assessed around operational availability.', uses: ['Event logistics', 'Weekend trading support', shared], Icon: Truck },
  { name: 'Bulk Deliveries', summary: 'Coordinated support for multiple drops and volume-based freight requirements.', uses: ['Multi-drop freight', 'Retail distribution', shared], Icon: Warehouse },
  { name: 'Backup Driver Services', summary: 'Professional driver support for agreed operational requirements.', uses: ['Short-term coverage', 'Customer representation', shared], Icon: ShieldCheck },
  { name: 'Home Deliveries', summary: 'Customer-facing delivery support with suitable handling instructions.', uses: ['Residential deliveries', 'Scheduled drop-offs', shared], Icon: Truck },
  { name: 'Business Logistics', summary: 'Flexible freight coordination for businesses with changing needs.', uses: ['Warehousing support', 'Corporate freight', shared], Icon: Warehouse },
  { name: 'Regional Freight', summary: 'Freight support across regional NSW and selected transport enquiries.', uses: ['Regional business freight', 'Scheduled transport', shared], Icon: Truck },
  { name: 'Interstate Freight', summary: 'Interstate transport enquiries for major Australian routes.', uses: ['Sydney to interstate cities', 'Longer freight movements', shared], Icon: Truck },
  { name: 'Linehaul Transport', summary: 'Linehaul coordination suited to broader freight movements.', uses: ['Depot-to-depot requirements', 'Interstate planning', shared], Icon: Truck },
  { name: 'Dangerous Goods Transport', summary: 'Dangerous goods transport is available subject to appropriate equipment, insurance, documentation and operational requirements.', uses: ['Declared dangerous goods', 'Compliance-led planning', shared], Icon: ShieldCheck },
]
