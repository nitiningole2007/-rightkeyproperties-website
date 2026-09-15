import { MessageCircle, Phone } from 'lucide-react'
import { site } from '../config/site'
import { createWhatsAppHref } from '../lib/contact'

export function WhatsAppButton({ property, message, className = '' }) {
  const href = createWhatsAppHref(property || { name: 'Right Key Properties', location: 'Pune' }, message)
  return <a className={`btn btn-gold ${className}`} href={href}><MessageCircle size={17} /> WhatsApp Enquiry</a>
}

export function CallButton({ className = '' }) {
  return site.phone ? <a className={`btn btn-dark ${className}`} href={`tel:${site.phone}`}><Phone size={17} /> Call us</a> : <a className={`btn btn-dark ${className}`} href="#contact"><Phone size={17} /> Request a call</a>
}
