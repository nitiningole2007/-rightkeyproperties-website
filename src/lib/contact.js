import { site } from '../config/site'

export function createWhatsAppHref(property, message = '') {
  const text = `Hello ${site.name}, I am interested in ${property.name} in ${property.location}. ${message}`.trim()
  const destination = site.whatsAppNumber ? `/${site.whatsAppNumber}` : '/'
  return `https://wa.me${destination}?text=${encodeURIComponent(text)}`
}
