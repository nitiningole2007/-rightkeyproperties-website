import { expect, it } from 'vitest'
import { validateEnquiry } from '../lib/validation'

it('requires name, contact, and message', () => {
  expect(validateEnquiry({ name: '', contact: '', message: '' })).toEqual({
    name: 'Please enter your name',
    contact: 'Please enter a phone number or email',
    message: 'Please enter your enquiry',
  })
})
