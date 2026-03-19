import React from 'react'
import logo from '../../assets/images/logo.jpg'
import type { LinkColProps, SocialItem } from '../../types'

const EXPLORE: string[] = ['Home', 'About Us', 'Services', 'Trainers', 'Membership Plans']
const SUPPORT: string[]  = ['FAQs', 'Contact Us', 'Cancellation Policy', 'Privacy Policy', 'Terms of Use']

// ── Proper SVG icons ──────────────────────────────────────────────────────────
const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="17" height="17">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.975.975 1.246 2.242 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.975.975-2.242 1.246-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.975-.975-1.246-2.242-1.308-3.608C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608.975-.975 2.242-1.246 3.608-1.308 1.266-.058 1.646-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-1.635.075-3.086.5-4.243 1.657C1.653 2.887 1.228 4.338 1.153 5.973 1.095 7.253 1.081 7.661 1.081 12c0 4.339.014 4.747.072 6.027.075 1.635.5 3.086 1.657 4.243 1.157 1.157 2.608 1.582 4.243 1.657C8.333 23.986 8.741 24 12 24s3.667-.014 4.947-.072c1.635-.075 3.086-.5 4.243-1.657 1.157-1.157 1.582-2.608 1.657-4.243.058-1.28.072-1.688.072-6.028 0-4.339-.014-4.747-.072-6.027-.075-1.635-.5-3.086-1.657-4.243C19.033.572 17.582.147 15.947.072 14.667.014 14.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
  </svg>
)

const FacebookIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="17" height="17">
    <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073c0 6.024 4.388 11.018 10.125 11.927v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.235 2.686.235v2.97h-1.513c-1.491 0-1.956.93-1.956 1.883v2.272h3.328l-.532 3.49h-2.796v8.437C19.612 23.091 24 18.097 24 12.073z"/>
  </svg>
)

const YouTubeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
)

const XIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/>
  </svg>
)

// Map label → icon component
const SOCIAL_ICONS: Record<string, React.FC> = {
  Instagram: InstagramIcon,
  Facebook:  FacebookIcon,
  YouTube:   YouTubeIcon,
  X:         XIcon,
}

const SOCIALS: SocialItem[] = [
  { label: 'Instagram', char: '' },
  { label: 'Facebook',  char: '' },
  { label: 'YouTube',   char: '' },
  { label: 'X',         char: '' },
]

// ── LinkCol ───────────────────────────────────────────────────────────────────
const LinkCol: React.FC<LinkColProps> = ({ title, links }) => (
  <div>
    <h4 className="font-condensed text-[0.82rem] font-extrabold tracking-[0.2em] uppercase text-gold mb-5">{title}</h4>
    <ul className="list-none flex flex-col gap-3">
      {links.map((l) => (
        <li key={l}>
          <a
            href="#"
            className="font-body text-[0.95rem] font-normal text-off-white/52 no-underline transition-all duration-200 hover:text-off-white hover:pl-1 inline-block"
          >
            {l}
          </a>
        </li>
      ))}
    </ul>
  </div>
)

// ── Footer ────────────────────────────────────────────────────────────────────
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

        {/* Social icons */}
        <div className="flex gap-2 mt-1">
          {SOCIALS.map(({ label }) => {
            const Icon = SOCIAL_ICONS[label]
            return (
              <button
                key={label}
                aria-label={label}
                className="w-10 h-10 border border-gold/22 flex items-center justify-center text-off-white/48 transition-all duration-200 hover:border-gold hover:text-gold hover:bg-gold/8 bg-transparent cursor-pointer"
              >
                <Icon />
              </button>
            )
          })}
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
          <input
            type="email"
            placeholder="Your email address"
            className="flex-1 bg-white/5 border border-gold/18 border-r-0 text-off-white font-body text-[0.92rem] px-4 outline-none transition-colors duration-200 focus:border-gold placeholder-off-white/25"
          />
          <button className="bg-gold text-gym-black px-5 text-[1rem] font-bold border-none cursor-pointer transition-colors duration-200 hover:bg-gold-light">
            →
          </button>
        </div>
      </div>
    </div>

    {/* Bottom bar */}
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