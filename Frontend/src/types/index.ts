import { ReactNode, ChangeEvent, FocusEvent } from 'react'

// ── Button ────────────────────────────────────────────────────
export type ButtonVariant = 'primary' | 'outline' | 'ghost'
export type ButtonSize = 'sm' | 'md' | 'lg'

export interface ButtonProps {
  children: ReactNode
  variant?: ButtonVariant
  size?: ButtonSize
  fullWidth?: boolean
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  onClick?: () => void
  className?: string
}

// ── SectionTitle ──────────────────────────────────────────────
export type SectionAlign = 'left' | 'center'

export interface SectionTitleProps {
  eyebrow?: string
  title: string
  subtitle?: string
  align?: SectionAlign
  light?: boolean
}

// ── InputField ────────────────────────────────────────────────
export type InputType = 'text' | 'email' | 'tel' | 'select' | 'textarea'

export interface InputFieldProps {
  label?: string
  required?: boolean
  error?: string
  type?: InputType
  optional?: boolean
  options?: string[]
  rows?: number
  id?: string
  name?: string
  value?: string
  placeholder?: string
  onChange?: (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void
  onBlur?: (e: FocusEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void
}

// ── FormFeedback ──────────────────────────────────────────────
export interface FormFeedbackProps {
  onReset: () => void
}

// ── AnnouncementBar ───────────────────────────────────────────
export interface AnnouncementBarProps {
  onDismiss?: () => void
}

// ── Navbar ────────────────────────────────────────────────────
export interface NavbarProps {
  topOffset?: string
}

export interface NavLink {
  label: string
  href: string
}

// ── Hero ──────────────────────────────────────────────────────
export interface HeroProps {
  topOffset?: string
}

export interface StatItem {
  value: string
  label: string
}

// ── Services ──────────────────────────────────────────────────
export interface ServiceItem {
  icon: ReactNode
  title: string
  desc: string
  tags: string[]
}

// ── Trainers ──────────────────────────────────────────────────
export interface TrainerItem {
  emoji: string
  name: string
  specialty: string
  cert: string
  exp: string
  badges: string[]
}

// ── Results ───────────────────────────────────────────────────
export interface BigStat {
  value: string
  label: string
  sub: string
}

export interface Testimonial {
  quote: string
  name: string
  result: string
  emoji: string
}

// ── Plans ─────────────────────────────────────────────────────
export interface Plan {
  name: string
  price: string
  tagline: string
  popular: boolean
  features: string[]
  unavailable: string[]
}

export interface PlanCardProps extends Plan {
  visible: boolean
  delay: string
}

// ── How It Works ──────────────────────────────────────────────
export interface Step {
  num: string
  title: string
  desc: string
  icon: string
}

// ── FAQ ───────────────────────────────────────────────────────
export interface FAQEntry {
  q: string
  a: string
}

export interface FAQItemProps {
  q: string
  a: string
  isOpen: boolean
  onToggle: () => void
}

// ── Contact Form ──────────────────────────────────────────────
export interface FormValues {
  name: string
  email: string
  phone: string
  subject: string
  message: string
}

export type FormErrors = Partial<FormValues>
export type FormTouched = Partial<Record<keyof FormValues, boolean>>
export type FormStatus = 'idle' | 'loading' | 'success' | 'error'

// ── Contact Info ──────────────────────────────────────────────
export interface ContactInfoItem {
  icon: string
  label: string
  value: string
}

// ── Footer ────────────────────────────────────────────────────
export interface LinkColProps {
  title: string
  links: string[]
}

export interface SocialItem {
  label: string
  char: string
}
