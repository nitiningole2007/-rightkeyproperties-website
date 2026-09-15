import PropertyCard from './PropertyCard'
export default function PropertyGrid({ properties, emptyText = 'No demo properties match these filters yet.' }) {
  return properties.length ? <div className="property-grid">{properties.map((property) => <PropertyCard key={property.id} property={property} />)}</div> : <p className="empty-state">{emptyText}</p>
}
