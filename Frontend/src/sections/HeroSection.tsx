import React, { useEffect, useRef } from 'react'
import Button from '../components/ui/Button'
import logo from '../assets/images/logo.jpg'
import type { HeroProps, StatItem } from '../types'

const STATS: StatItem[] = [
  { value: '2,400+', label: 'Active Members' },
  { value: '8.6%',   label: 'Avg Body Fat Lost' },
  { value: '18',     label: 'Expert Trainers' },
  { value: '24/7',   label: 'Open Access' },
]

const HeroSection: React.FC<HeroProps> = ({ topOffset = '0px' }) => {
  const heroRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = heroRef.current
    if (!el) return
    const onMove = (e: MouseEvent): void => {
      const { left, top, width, height } = el.getBoundingClientRect()
      el.style.setProperty('--mx', `${((e.clientX - left) / width) * 100}%`)
      el.style.setProperty('--my', `${((e.clientY - top) / height) * 100}%`)
    }
    el.addEventListener('mousemove', onMove)
    return () => el.removeEventListener('mousemove', onMove)
  }, [])

  const scrollTo = (id: string): void =>
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen flex flex-col overflow-hidden bg-gym-black"
      style={{ paddingTop: `calc(72px + ${topOffset})` }}
    >
      <div className="absolute inset-0 bg-grid pointer-events-none" />
      <div
        className="absolute inset-0 pointer-events-none transition-[background] duration-[80ms]"
        style={{ background: 'radial-gradient(ellipse 65% 55% at var(--mx,50%) var(--my,40%), rgba(201,148,10,0.14) 0%, transparent 65%)' }}
      />

      <div className="relative flex-1 flex flex-col items-center justify-center text-center max-w-[1200px] mx-auto px-6 py-14">
        {/* Logo + eyebrow */}
        <div className="flex flex-col items-center gap-4 mb-8 animate-fade-up">
          <img
            src={logo} alt="Fitness Sports Center"
            className="h-24 w-24 object-contain rounded-full border-2 border-gold/50 shadow-[0_0_32px_rgba(201,148,10,0.25)]"
          />
          <div className="flex items-center gap-3">
            <span className="bg-gold text-gym-black font-condensed text-[0.78rem] font-extrabold tracking-[0.2em] uppercase px-3 py-1 clip-btn-sm">
              Est. 2023
            </span>
            <span className="w-7 h-px bg-gold/50" />
            <span className="font-condensed text-[0.82rem] font-semibold tracking-[0.18em] uppercase text-off-white/60">
              Premium Fitness · Colombo
            </span>
          </div>
        </div>

        {/* Headline */}
        <h1
          className="font-display leading-none tracking-[0.02em] mb-8"
          style={{ fontSize: 'clamp(4rem, 9vw, 8rem)' }}
        >
          <span className="text-stroke-white">TRAIN</span>
          <span className="text-gold"> SMARTER.</span>
          <br />
          <span className="text-off-white">LIVE </span>
          <span className="text-stroke-white">STRONGER.</span>
        </h1>

        {/* Sub */}
        <p
          className="font-body font-normal text-off-white/75 leading-[1.8] max-w-[580px] mb-10 animate-fade-up"
          style={{ fontSize: 'clamp(1rem, 2.2vw, 1.2rem)', animationDelay: '0.2s' }}
        >
          Science-backed workouts. Elite coaches. A community that pushes you further than
          you'd go alone. Join 2,400+ members already transforming their lives.
        </p>

        {/* CTAs */}
        <div className="flex gap-4 flex-wrap justify-center mb-8 animate-fade-up" style={{ animationDelay: '0.3s' }}>
          <Button variant="primary" size="lg" onClick={() => scrollTo('#contact')}>Try Your First Week Free</Button>
          <Button variant="ghost"   size="lg" onClick={() => scrollTo('#results')}>See Real Results</Button>
        </div>

        {/* Trust strip */}
        <p className="flex items-center gap-3 flex-wrap justify-center font-body text-[0.88rem] font-medium text-off-white/50 animate-fade-up" style={{ animationDelay: '0.4s' }}>
          <span><span className="text-gold mr-1">✓</span> No credit card required</span>
          <span className="opacity-30">·</span>
          <span><span className="text-gold mr-1">✓</span> Cancel anytime</span>
          <span className="opacity-30">·</span>
          <span><span className="text-gold mr-1">✓</span> 30-day money-back guarantee</span>
        </p>
      </div>

      {/* Stats bar */}
      <div className="relative bg-gold">
        <div className="max-w-[1200px] mx-auto grid grid-cols-2 md:grid-cols-4">
          {STATS.map(({ value, label }, i) => (
            <div key={i} className="flex flex-col items-center py-5 px-4 gap-1.5 border-r border-black/15 last:border-r-0">
              <span className="font-display text-[2.2rem] leading-none text-gym-black tracking-[0.02em]">{value}</span>
              <span className="font-condensed text-[0.78rem] font-bold tracking-[0.12em] uppercase text-black/65">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HeroSection
