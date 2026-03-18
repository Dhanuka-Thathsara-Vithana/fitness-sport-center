import React from 'react';

const GuaranteeBannerSection: React.FC = () => (
  <section className="relative bg-gold py-20 md:py-24 overflow-hidden">
    <div className="absolute -top-32 -right-16 w-[460px] h-[460px] rounded-full bg-black/[0.07] pointer-events-none" />
    <div className="relative max-w-[1200px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

      {/* Left */}
      <div>
        <span className="block font-condensed text-[0.88rem] font-extrabold tracking-[0.22em] uppercase text-black/55 mb-5">
          Our Promise
        </span>
        <h2 className="font-display leading-[1.05] tracking-[0.02em] text-gym-black"
          style={{ fontSize: 'clamp(2.2rem, 4vw, 3.4rem)' }}>
          Not For You After 30 Days?
          <br />
          <span className="text-white">We'll Refund Every Dollar.</span>
        </h2>
      </div>

      {/* Right */}
      <div>
        <p className="font-body text-[1.05rem] font-normal text-black/70 leading-[1.8] mb-7">
          We're so confident you'll love training with us that we back every new membership
          with a full 30-day money-back guarantee. No questions asked.
        </p>
        <div className="flex flex-wrap gap-3 mb-8">
          {['7-day free trial', '30-day guarantee', 'No lock-in'].map((pill) => (
            <span key={pill}
              className="font-condensed text-[0.85rem] font-extrabold tracking-[0.1em] uppercase bg-black/12 text-gym-black px-4 py-1.5 rounded-sm">
              ✓ {pill}
            </span>
          ))}
        </div>
        <button
          className="font-condensed font-extrabold tracking-[0.12em] uppercase text-[1rem] text-gym-black border-2 border-gym-black px-10 py-3.5 transition-all duration-200 hover:bg-gym-black hover:text-gold cursor-pointer bg-transparent"
          onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
        >
          Claim Your Free Week
        </button>
      </div>
    </div>
  </section>
);

export default GuaranteeBannerSection;
