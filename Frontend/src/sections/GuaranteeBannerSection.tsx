import React from 'react';

const GuaranteeBannerSection: React.FC = () => {
  const perks = ['7-day free trial', '30-day guarantee', 'No lock-in'];

  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative overflow-hidden bg-gold py-20 md:py-24">
      {/* Background accents */}
      <div className="pointer-events-none absolute -top-24 -right-20 h-[360px] w-[360px] rounded-full bg-black/[0.06]" />
      <div className="pointer-events-none absolute -bottom-24 -left-16 h-[220px] w-[220px] rounded-full bg-white/10" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left content */}
          <div className="max-w-2xl">
            <span className="mb-5 block font-condensed text-sm font-extrabold uppercase tracking-[0.24em] text-black/55">
              Our Promise
            </span>

            <h2
              className="font-display text-gym-black leading-[1.05] tracking-tight"
              style={{ fontSize: 'clamp(2.25rem, 4vw, 3.75rem)' }}
            >
              Not For You After 30 Days?
              <br />
              <span className="text-white">We’ll Refund Every Dollar.</span>
            </h2>
          </div>

          {/* Right content */}
          <div className="lg:pl-6">
            <div className="rounded-2xl border border-black/10 bg-white/20 p-6 backdrop-blur-sm shadow-[0_10px_30px_rgba(0,0,0,0.08)] md:p-8">
              <p className="mb-6 max-w-xl font-body text-base leading-8 text-black/75 md:text-lg">
                We’re so confident you’ll love training with us that every new membership is
                backed by a full 30-day money-back guarantee. No pressure, no risk, and no
                questions asked.
              </p>

              <div className="mb-8 flex flex-wrap gap-3">
                {perks.map((pill) => (
                  <span
                    key={pill}
                    className="inline-flex items-center rounded-full border border-black/10 bg-black/10 px-4 py-2 font-condensed text-[0.82rem] font-extrabold uppercase tracking-[0.12em] text-gym-black"
                  >
                    <span className="mr-2 text-sm">✓</span>
                    {pill}
                  </span>
                ))}
              </div>

              <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
                <button
                  onClick={scrollToContact}
                  className="inline-flex items-center justify-center rounded-md border-2 border-gym-black bg-gym-black px-8 py-3.5 font-condensed text-sm font-extrabold uppercase tracking-[0.14em] text-gold transition duration-200 hover:-translate-y-0.5 hover:bg-transparent hover:text-gym-black"
                >
                  Claim Your Free Week
                </button>

                <p className="font-body text-sm leading-6 text-black/60">
                  Start today with zero risk.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuaranteeBannerSection;