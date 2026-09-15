import { expect, it } from 'vitest'
import { createWhatsAppHref } from '../lib/contact'

it('includes property name, location, and enquiry in a WhatsApp link', () => {
  const href = createWhatsAppHref({ name: 'Demo Home', location: 'Baner' }, 'Please contact me')
  expect(decodeURIComponent(href)).toContain('Demo Home')
  expect(decodeURIComponent(href)).toContain('Baner')
  expect(decodeURIComponent(href)).toContain('Please contact me')
})
