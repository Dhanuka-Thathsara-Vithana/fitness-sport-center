import React from 'react'
import Button from './ui/Button'
import type { FormFeedbackProps } from '../types'

const FormFeedback: React.FC<FormFeedbackProps> = ({ onReset }) => (
  <div className="flex flex-col items-center justify-center text-center gap-6 py-16 px-8 min-h-[380px]">
    <div
      className="rounded-full bg-gold/10 border-2 border-gold flex items-center justify-center"
      style={{ width: 72, height: 72 }}
    >
      <svg
        width="32" height="32" viewBox="0 0 24 24" fill="none"
        stroke="#C9940A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
      >
        <polyline points="20 6 9 17 4 12" />
      </svg>
    </div>
    <h3 className="font-display text-[2.6rem] text-off-white tracking-[0.04em] leading-none">
      Message Sent!
    </h3>
    <p className="font-body text-[1rem] font-normal text-off-white/65 max-w-[380px] leading-[1.8]">
      Thanks for reaching out! Our team will get back to you within 24 hours.
    </p>
    <Button variant="outline" size="md" onClick={onReset}>
      Send Another Message
    </Button>
  </div>
)

export default FormFeedback
