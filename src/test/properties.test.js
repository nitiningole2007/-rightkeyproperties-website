import { describe, expect, it } from 'vitest'
import { filterProperties, filtersFromSearch } from '../lib/properties'

const homes = [
  { id: 'a', intent: 'buy', location: 'Baner', type: 'Apartment', bhk: '2 BHK', price: 90 },
  { id: 'b', intent: 'rent', location: 'Wakad', type: 'Apartment', bhk: '3 BHK', price: 45 },
]

describe('property filters', () => {
  it('returns only listings that match active filters', () => {
    expect(filterProperties(homes, { intent: 'buy', location: 'Baner', type: '', bhk: '', budget: '' })).toEqual([homes[0]])
  })

  it('reads filters from a shareable query string', () => {
    expect(filtersFromSearch('?location=Wakad&bhk=3+BHK')).toMatchObject({ location: 'Wakad', bhk: '3 BHK' })
  })
})
