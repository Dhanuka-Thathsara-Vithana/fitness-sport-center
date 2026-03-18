/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        gold: { DEFAULT: '#C9940A', light: '#E5A912', dark: '#9A6F07' },
        'dark-brown': '#2A2416',
        'gym-black': '#080808',
        'off-white': '#F2EFE6',
      },
      fontFamily: {
        display:   ['"Bebas Neue"', 'sans-serif'],
        condensed: ['"Barlow Condensed"', 'sans-serif'],
        body:      ['Barlow', 'sans-serif'],
      },
      keyframes: {
        fadeInUp: {
          from: { opacity: '0', transform: 'translateY(30px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInLeft: {
          from: { opacity: '0', transform: 'translateX(-24px)' },
          to:   { opacity: '1', transform: 'translateX(0)' },
        },
        float: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%':     { transform: 'translateY(-8px)' },
        },
        spinSlow: {
          from: { transform: 'rotate(0deg)' },
          to:   { transform: 'rotate(360deg)' },
        },
        pulseGold: {
          '0%,100%': { boxShadow: '0 0 0 0 rgba(201,148,10,0.4)' },
          '50%':     { boxShadow: '0 0 0 12px rgba(201,148,10,0)' },
        },
        shimmer: {
          '0%':   { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
      },
      animation: {
        'fade-up':       'fadeInUp 0.6s ease forwards',
        'fade-left':     'fadeInLeft 0.6s ease forwards',
        'float':         'float 4s ease-in-out infinite',
        'spin-slow':     'spinSlow 30s linear infinite',
        'spin-slow-rev': 'spinSlow 30s linear reverse infinite',
        'pulse-gold':    'pulseGold 2s ease infinite',
      },
      backgroundSize: {
        grid: '64px 64px',
      },
      transitionTimingFunction: {
        gym: 'cubic-bezier(0.4,0,0.2,1)',
      },
    },
  },
  plugins: [],
}
