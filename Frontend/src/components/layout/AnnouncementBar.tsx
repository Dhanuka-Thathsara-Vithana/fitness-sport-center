import React, { useState } from 'react'
import type { AnnouncementBarProps } from '../../types'

const AnnouncementBar: React.FC<AnnouncementBarProps> = ({ onDismiss }) => {
  const [visible, setVisible] = useState<boolean>(true)

  if (!visible) return null

  const handleClose = (): void => {
    setVisible(false)
    onDismiss?.()
  }

  const scrollToContact = (e: React.MouseEvent<HTMLAnchorElement>): void => {
    e.preventDefault()
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="fixed top-0 left-0 right-0 z-[200] bg-gold flex items-center justify-center px-10 py-2.5 gap-4 min-h-[40px]">
      <p className="flex items-center gap-3 flex-wrap justify-center font-condensed text-[0.92rem] font-bold tracking-[0.06em] text-gym-black">
        <span className="bg-gym-black text-gold text-[0.7rem] font-extrabold tracking-[0.18em] uppercase px-2.5 py-0.5 clip-btn-sm">
          LIMITED OFFER
        </span>
        Your first week is completely free — no credit card required.
        <a
          href="#contact"
          onClick={scrollToContact}
          className="font-extrabold tracking-widest underline underline-offset-2 text-gym-black hover:opacity-70 transition-opacity"
        >
          Claim Free Trial →
        </a>
      </p>
      <button
        onClick={handleClose}
        aria-label="Dismiss"
        className="absolute right-4 top-1/2 -translate-y-1/2 text-gym-black text-2xl leading-none opacity-60 hover:opacity-100 transition-opacity bg-transparent border-none cursor-pointer p-1"
      >
        ×
      </button>
    </div>
  )
}

export default AnnouncementBar
