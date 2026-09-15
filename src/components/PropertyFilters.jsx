import { Search } from 'lucide-react'
import { puneWestLocations } from '../lib/properties'
const options = { type: ['Apartment', 'Villa', 'Commercial'], bhk: ['1 BHK', '2 BHK', '3 BHK', '4 BHK', 'Office'], budget: [['50', 'Up to ₹50 L / ₹50k'], ['120', 'Up to ₹1.2 Cr / ₹1.2L'], ['200', 'Up to ₹2 Cr / ₹2L'], ['350', 'Up to ₹3.5 Cr / ₹3.5L']] }
export default function PropertyFilters({ filters, onChange, onSubmit, compact = false }) {
  return <form className={`filters ${compact ? 'filters-compact' : ''}`} onSubmit={onSubmit}>{[['location', puneWestLocations], ['type', options.type], ['bhk', options.bhk], ['budget', options.budget]].map(([key, values]) => <label key={key}><span>{key === 'bhk' ? 'BHK' : key[0].toUpperCase() + key.slice(1)}</span><select value={filters[key] || ''} onChange={(event) => onChange(key, event.target.value)}><option value="">Any {key === 'bhk' ? 'BHK' : key[0].toUpperCase() + key.slice(1)}</option>{values.map((value) => Array.isArray(value) ? <option key={value[0]} value={value[0]}>{value[1]}</option> : <option key={value}>{value}</option>)}</select></label>)}<button className="btn btn-gold" type="submit"><Search size={17} /> Search</button></form>
}
