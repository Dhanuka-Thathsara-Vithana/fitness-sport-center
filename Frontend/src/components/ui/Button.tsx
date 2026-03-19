import React from 'react'
import type { ButtonProps } from '../../types'

const VARIANTS: Record<string, string> = {
  primary:
    // clip-btn only kicks in at sm+ — on mobile full-width buttons it scales
    // badly, so we fall back to rounded-sm instead.
    'bg-gold text-gym-black rounded-sm sm:rounded-none sm:clip-btn font-condensed font-extrabold tracking-[0.12em] uppercase transition-all duration-200 hover:bg-gold-light hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(201,148,10,0.4)] relative overflow-hidden group',
  outline:
    'bg-transparent text-gold border-2 border-gold hover:bg-gold hover:text-gym-black font-condensed font-extrabold tracking-[0.12em] uppercase transition-all duration-200 hover:-translate-y-0.5',
  ghost:
    'bg-white/[0.08] text-off-white border border-white/30 hover:bg-white/[0.16] hover:border-white/50 font-condensed font-extrabold tracking-[0.12em] uppercase transition-all duration-200 hover:-translate-y-0.5 rounded-sm',
}

const SIZES: Record<string, string> = {
  sm: 'py-2.5 px-6 text-[0.85rem]',
  md: 'py-3.5 px-9 text-[0.95rem]',
  // lg: tighten horizontal padding on mobile so text breathes inside w-full buttons
  lg: 'py-4 px-6 sm:px-11 text-[0.98rem] sm:text-[1.05rem]',
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  type = 'button',
  disabled = false,
  onClick,
  className = '',
}) => (
  <button
    type={type}
    disabled={disabled}
    onClick={onClick}
    className={[
      VARIANTS[variant],
      SIZES[size],
      fullWidth ? 'w-full' : '',
      disabled ? 'opacity-50 cursor-not-allowed' : '',
      className,
    ]
      .filter(Boolean)
      .join(' ')}
  >
    {variant === 'primary' && (
      <span
        aria-hidden
        className="absolute top-0 -left-3/4 w-1/2 h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-[-20deg] transition-[left] duration-500 group-hover:left-full pointer-events-none"
      />
    )}
    <span className="relative z-10">{children}</span>
  </button>
)

export default Button