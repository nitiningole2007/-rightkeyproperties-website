export function validateEnquiry({ name = '', contact = '', message = '' }) {
  return {
    ...(name.trim() ? {} : { name: 'Please enter your name' }),
    ...(contact.trim() ? {} : { contact: 'Please enter a phone number or email' }),
    ...(message.trim() ? {} : { message: 'Please enter your enquiry' }),
  }
}
