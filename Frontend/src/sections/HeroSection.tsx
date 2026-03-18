import React, { useEffect, useRef } from 'react'
import Button from '../components/ui/Button'
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
      {/* Background grid */}
      <div className="absolute inset-0 bg-grid pointer-events-none" />

      {/* Mouse-tracked radial glow — disabled on touch devices via pointer-events:none */}
      <div
        className="absolute inset-0 pointer-events-none transition-[background] duration-[80ms]"
        style={{ background: 'radial-gradient(ellipse 65% 55% at var(--mx,50%) var(--my,40%), rgba(201,148,10,0.14) 0%, transparent 65%)' }}
      />

      {/* ── Main content ── */}
      <div className="relative flex-1 flex flex-col items-center justify-center text-center max-w-[1200px] mx-auto w-full px-5 sm:px-6 py-10 sm:py-14">

        {/* Eyebrow badge */}
        <div className="flex items-center gap-3 mb-6 sm:mb-8 animate-fade-up">
          <span className="bg-gold/10 border border-gold/30 text-gold font-condensed text-[0.72rem] sm:text-[0.78rem] font-extrabold tracking-[0.2em] uppercase px-3 py-1 rounded-sm">
            Est. 2023 · Premium Fitness · Colombo
          </span>
        </div>

        {/* Headline
            clamp floor reduced to 2.8rem so it fits on narrow phones (≤ 380 px)
            without overflowing or forcing ugly wrapping */}
        <h1
          className="font-display leading-[0.95] tracking-[0.02em] mb-6 sm:mb-8"
          style={{ fontSize: 'clamp(2.8rem, 10vw, 8rem)' }}
        >
          <span className="text-stroke-white">TRAIN</span>
          <span className="text-gold"> SMARTER.</span>
          <br />
          <span className="text-off-white">LIVE </span>
          <span className="text-stroke-white">STRONGER.</span>
        </h1>

        {/* Sub-headline
            floor raised slightly so it stays readable on all phones */}
        <p
          className="font-body font-normal text-off-white/75 leading-[1.8] max-w-[580px] mb-8 sm:mb-10 animate-fade-up"
          style={{ fontSize: 'clamp(0.95rem, 2.8vw, 1.2rem)', animationDelay: '0.2s' }}
        >
          Science-backed workouts. Elite coaches. A community that pushes you further than
          you'd go alone. Join 2,400+ members already transforming their lives.
        </p>

        {/* CTAs
            Stack vertically on phones, side-by-side from sm upward.
            w-full on xs so each button stretches to the container width. */}
        <div
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto justify-center mb-6 sm:mb-8 animate-fade-up"
          style={{ animationDelay: '0.3s' }}
        >
          <Button
            variant="primary" size="lg"
            className="w-full sm:w-auto"
            onClick={() => scrollTo('#contact')}
          >
            Try Your First Week Free
          </Button>
          <Button
            variant="ghost" size="lg"
            className="w-full sm:w-auto"
            onClick={() => scrollTo('#results')}
          >
            See Real Results
          </Button>
        </div>

        {/* Trust strip
            Column on very small screens, row from xs upward */}
        <p
          className="flex flex-col xs:flex-row items-center gap-2 xs:gap-3 flex-wrap justify-center font-body text-[0.85rem] sm:text-[0.88rem] font-medium text-off-white/50 animate-fade-up"
          style={{ animationDelay: '0.4s' }}
        >
          <span><span className="text-gold mr-1">✓</span> No credit card required</span>
          <span className="hidden xs:inline opacity-30">·</span>
          <span><span className="text-gold mr-1">✓</span> Cancel anytime</span>
          <span className="hidden xs:inline opacity-30">·</span>
          <span><span className="text-gold mr-1">✓</span> 30-day money-back guarantee</span>
        </p>
      </div>

      {/* ── Stats bar ──
          2-col on phones, 4-col from md.
          Border logic: on mobile the right border on even items (2nd col) is removed
          so there's no orphaned border at the right edge of the grid. */}
      <div className="relative bg-gold">
        <div className="max-w-[1200px] mx-auto grid grid-cols-2 md:grid-cols-4">
          {STATS.map(({ value, label }, i) => (
            <div
              key={i}
              className={[
                'flex flex-col items-center py-4 sm:py-5 px-3 sm:px-4 gap-1 sm:gap-1.5',
                'border-b md:border-b-0 border-black/10',        // bottom border between rows on mobile
                'border-r border-black/15',                       // right border always present…
                (i + 1) % 2 === 0 ? 'md:border-r border-r-0' : '', // …except 2nd col on mobile
                i === STATS.length - 1 ? '!border-r-0' : '',     // last item never has right border
              ].join(' ')}
            >
              <span className="font-display text-[1.8rem] sm:text-[2.2rem] leading-none text-gym-black tracking-[0.02em]">
                {value}
              </span>
              <span className="font-condensed text-[0.7rem] sm:text-[0.78rem] font-bold tracking-[0.12em] uppercase text-black/65 text-center">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HeroSection