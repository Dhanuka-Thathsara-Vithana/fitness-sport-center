import React, { useState, useEffect } from 'react'
import Button from '../ui/Button'
import logo from '../../assets/images/logo.jpg'
import type { NavbarProps, NavLink } from '../../types'

const NAV_LINKS: NavLink[] = [
  { label: 'Home',     href: '#home' },
  { label: 'About',   href: '#about' },
  { label: 'Results', href: '#results' },
  { label: 'Services',href: '#services' },
  { label: 'Trainers',href: '#trainers' },
  { label: 'Plans',   href: '#plans' },
  { label: 'Contact', href: '#contact' },
]

const Navbar: React.FC<NavbarProps> = ({ topOffset = '0px' }) => {
  const [scrolled, setScrolled]  = useState<boolean>(false)
  const [menuOpen, setMenuOpen]  = useState<boolean>(false)
  const [activeLink, setActive]  = useState<string>('#home')

  useEffect(() => {
    const onScroll = (): void => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleClick = (href: string): void => { setActive(href); setMenuOpen(false) }

  const scrollToContact = (): void => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav
      style={{ top: topOffset }}
      className={`fixed left-0 right-0 z-[100] transition-all duration-300 ${
        scrolled
          ? 'bg-gym-black/96 backdrop-blur-md shadow-[0_2px_30px_rgba(0,0,0,0.6)] py-2'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-6 flex items-center gap-6">
        {/* Logo */}
        <a href="#home" onClick={() => handleClick('#home')}
          className="flex items-center gap-3 flex-shrink-0 no-underline group">
          <img
            src={logo} alt="Fitness Sports Center logo"
            className="h-12 w-12 object-contain rounded-full border-2 border-gold/40 group-hover:border-gold transition-colors duration-200"
          />
          <div className="hidden sm:flex flex-col leading-none">
            <span className="font-display text-[1.4rem] tracking-[0.08em] text-gold leading-none">FITNESS</span>
            <span className="font-condensed text-[0.65rem] font-bold tracking-[0.22em] uppercase text-off-white/55 leading-none mt-0.5">
              Sports Center
            </span>
          </div>
        </a>

        {/* Desktop links */}
        <ul className="hidden lg:flex gap-6 ml-auto list-none">
          {NAV_LINKS.map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                onClick={() => handleClick(href)}
                className={`font-condensed text-[0.9rem] font-bold tracking-[0.1em] uppercase no-underline transition-colors duration-200 relative pb-1
                  after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-gold after:transition-all after:duration-200
                  ${activeLink === href
                    ? 'text-gold after:w-full'
                    : 'text-off-white/75 hover:text-gold after:w-0 hover:after:w-full'
                  }`}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden lg:block flex-shrink-0">
          <Button variant="primary" size="sm" onClick={scrollToContact}>Free Trial</Button>
        </div>

        {/* Hamburger */}
        <button
          className="lg:hidden ml-auto flex flex-col gap-[5px] p-1 bg-transparent border-none cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span className={`block w-6 h-[2px] bg-off-white transition-all duration-200 ${menuOpen ? 'translate-y-[7px] rotate-45 bg-gold' : ''}`} />
          <span className={`block w-6 h-[2px] bg-off-white transition-all duration-200 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-[2px] bg-off-white transition-all duration-200 ${menuOpen ? '-translate-y-[7px] -rotate-45 bg-gold' : ''}`} />
        </button>
      </div>

      {/* Mobile drawer */}
      <div className={`lg:hidden overflow-hidden transition-[max-height] duration-300 bg-gym-black/98 backdrop-blur-md ${menuOpen ? 'max-h-[520px]' : 'max-h-0'}`}>
        <ul className="list-none px-6 pt-4 pb-6 flex flex-col gap-1">
          {NAV_LINKS.map(({ label, href }) => (
            <li key={href}>
              <a href={href} onClick={() => handleClick(href)}
                className="block font-condensed text-[1.15rem] font-bold tracking-[0.1em] uppercase text-off-white/85 no-underline py-3 border-b border-white/[0.07] transition-all duration-200 hover:text-gold hover:pl-2">
                {label}
              </a>
            </li>
          ))}
          <li className="mt-4">
            <Button variant="primary" size="md" fullWidth
              onClick={() => { scrollToContact(); setMenuOpen(false) }}>
              Free Trial — No Card Needed
            </Button>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
