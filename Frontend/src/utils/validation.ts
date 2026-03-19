import type { FormValues, FormErrors } from '../types'

export const validateForm = (values: FormValues): FormErrors => {
  const errors: FormErrors = {}

  if (!values.name?.trim() || values.name.trim().length < 2)
    errors.name = 'Please enter your full name.'

  if (!values.email?.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim()))
    errors.email = 'Please enter a valid email address.'

  if (values.phone?.trim() && !/^[\d\s+\-()]{7,15}$/.test(values.phone.trim()))
    errors.phone = 'Please enter a valid phone number.'

  if (!values.subject)
    errors.subject = 'Please select an inquiry type.'

  if (!values.message?.trim() || values.message.trim().length < 10)
    errors.message = 'Message must be at least 10 characters.'

  return errors
}

export const INITIAL_FORM: FormValues = {
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: '',
}

export const INQUIRY_OPTIONS: string[] = [
  'Membership Plans',
  'Free Trial Request',
  'Personal Coaching',
  'Group Classes',
  'Gym Tour',
  'Other',
]
