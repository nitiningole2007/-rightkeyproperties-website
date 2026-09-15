export const puneWestLocations = ['Baner', 'Balewadi', 'Wakad', 'Hinjewadi', 'Tathawade', 'Punawale', 'Mahalunge', 'Bavdhan']

export function filtersFromSearch(search) {
  const params = new URLSearchParams(search)
  return Object.fromEntries(['location', 'type', 'bhk', 'budget'].map((key) => [key, params.get(key) || '']))
}

export function filterProperties(properties, filters) {
  return properties.filter((property) =>
    (!filters.intent || property.intent === filters.intent) &&
    (!filters.location || property.location === filters.location) &&
    (!filters.type || property.type === filters.type) &&
    (!filters.bhk || property.bhk === filters.bhk) &&
    (!filters.budget || property.price <= Number(filters.budget)),
  )
}
