import { ArrowUpRight, MapPin, Maximize2 } from 'lucide-react'
import { Link } from 'react-router-dom'
import { WhatsAppButton } from './Actions'

export default function PropertyCard({ property }) {
  return <article className="property-card">
    <div className="property-image"><img src={property.image} alt={`${property.name} demo property in ${property.location}`} /><span>Demo property</span></div>
    <div className="property-content"><p className="eyebrow">{property.type} · {property.intent === 'buy' ? 'For sale' : 'For rent'}</p><h3>{property.name}</h3><p className="muted"><MapPin size={15} /> {property.location}</p><div className="property-facts"><b>{property.bhk}</b><span><Maximize2 size={14} /> {property.area}</span></div><p className="price">{property.priceLabel}</p><div className="card-actions"><Link className="text-link" to={`/property/${property.id}`}>View details <ArrowUpRight size={16} /></Link><WhatsAppButton property={property} /></div></div>
  </article>
}
