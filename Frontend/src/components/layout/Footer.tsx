import React from 'react'
import logo from '../../assets/images/logo.jpg'
import type { LinkColProps, SocialItem } from '../../types'

const EXPLORE: string[] = ['Home', 'About Us', 'Services', 'Trainers', 'Membership Plans']
const SUPPORT: string[]  = ['FAQs', 'Contact Us', 'Cancellation Policy', 'Privacy Policy', 'Terms of Use']
const SOCIALS: SocialItem[] = [
  { label: 'Instagram', char: '📷' },
  { label: 'Facebook',  char: '📘' },
  { label: 'YouTube',   char: '▶️' },
  { label: 'X',         char: '𝕏' },
]

const LinkCol: React.FC<LinkColProps> = ({ title, links }) => (
  <div>
    <h4 className="font-condensed text-[0.82rem] font-extrabold tracking-[0.2em] uppercase text-gold mb-5">{title}</h4>
    <ul className="list-none flex flex-col gap-3">
      {links.map((l) => (
        <li key={l}>
          <a href="#"
            className="font-body text-[0.95rem] font-normal text-off-white/52 no-underline transition-all duration-200 hover:text-off-white hover:pl-1 inline-block">
            {l}
          </a>
        </li>
      ))}
    </ul>
  </div>
)

const Footer: React.FC = () => (
  <footer className="bg-gym-black border-t border-gold/15">
    <div className="max-w-[1200px] mx-auto px-6 py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_2fr] gap-10">
      {/* Brand */}
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <img src={logo} alt="Fitness SC" className="h-12 w-12 object-contain rounded-full border-2 border-gold/40" />
          <div className="flex flex-col leading-none">
            <span className="font-display text-[1.5rem] tracking-[0.08em] text-gold leading-none">FITNESS</span>
            <span className="font-condensed text-[0.62rem] font-bold tracking-[0.2em] uppercase text-off-white/45 leading-none mt-0.5">Sports Center</span>
          </div>
        </div>
        <p className="font-body text-[0.95rem] font-normal text-off-white/48 leading-[1.75]">
          Train harder. Live stronger.<br />The premium gym where champions are built.
        </p>
        <div className="flex gap-2 mt-1">
          {SOCIALS.map(({ label, char }) => (
            <button key={label} aria-label={label}
              className="w-10 h-10 border border-gold/22 flex items-center justify-center text-off-white/48 transition-all duration-200 hover:border-gold hover:text-gold hover:bg-gold/8 text-sm bg-transparent cursor-pointer">
              {char}
            </button>
          ))}
        </div>
      </div>

      <LinkCol title="Explore" links={EXPLORE} />
      <LinkCol title="Support" links={SUPPORT} />

      {/* Newsletter */}
      <div>
        <h4 className="font-condensed text-[0.82rem] font-extrabold tracking-[0.2em] uppercase text-gold mb-5">Stay Updated</h4>
        <p className="font-body text-[0.95rem] font-normal text-off-white/48 leading-[1.72] mb-5">
          Training tips, member stories, and exclusive offers to your inbox.
        </p>
        <div className="flex h-12">
          <input type="email" placeholder="Your email address"
            className="flex-1 bg-white/5 border border-gold/18 border-r-0 text-off-white font-body text-[0.92rem] px-4 outline-none transition-colors duration-200 focus:border-gold placeholder-off-white/25" />
          <button className="bg-gold text-gym-black px-5 text-[1rem] font-bold border-none cursor-pointer transition-colors duration-200 hover:bg-gold-light">→</button>
        </div>
      </div>
    </div>

    <div className="border-t border-white/[0.06] py-5">
      <div className="max-w-[1200px] mx-auto px-6 flex flex-wrap items-center justify-between gap-3">
        <p className="font-body text-[0.88rem] font-normal text-off-white/35">
          © {new Date().getFullYear()} Fitness Sports Center. All rights reserved.
        </p>
        <p className="font-body text-[0.88rem] font-normal text-off-white/35 flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-gold inline-block" />
          Est. 2023 — Colombo, Sri Lanka
        </p>
      </div>
    </div>
  </footer>
)

export default Footer
