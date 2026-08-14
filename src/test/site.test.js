import { expect, it } from 'vitest'
import { site } from '../config/site'

it('keeps public configuration in one module', () => {
  expect(site.domain).toBe('https://rightkeyproperties.in')
  expect(site).toHaveProperty('whatsAppNumber')
})
