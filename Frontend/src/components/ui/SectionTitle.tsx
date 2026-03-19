import React from 'react'
import type { SectionTitleProps } from '../../types'

const SectionTitle: React.FC<SectionTitleProps> = ({
  eyebrow,
  title,
  subtitle,
  align = 'left',
  light = false,
}) => {
  const centered = align === 'center'
  return (
    <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
      {eyebrow && (
        <span className="inline-block font-condensed text-[0.85rem] font-extrabold tracking-[0.28em] uppercase text-gold mb-3">
          {eyebrow}
        </span>
      )}
      <h2
        className={`font-display leading-none tracking-[0.02em] ${light ? 'text-gym-black' : 'text-off-white'}`}
        style={{ fontSize: 'clamp(2.6rem, 4.8vw, 4rem)' }}
      >
        {title}
      </h2>
      <div className={`w-12 h-[3px] bg-gold mt-4 mb-5 ${centered ? 'mx-auto' : ''}`} />
      {subtitle && (
        <p
          className={`font-body text-[1rem] font-normal leading-[1.8] max-w-[600px]
            ${light ? 'text-gray-600' : 'text-off-white/75'}
            ${centered ? 'mx-auto' : ''}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  )
}

export default SectionTitle
