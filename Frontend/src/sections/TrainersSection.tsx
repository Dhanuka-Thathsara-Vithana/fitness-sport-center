import React from 'react';
import SectionTitle from '../components/ui/SectionTitle';


const TRAINERS = [
  { emoji: '💪', name: 'Marcus Reid',   specialty: 'Strength & Powerlifting', cert: 'NASM-CPT | CSCS | USA Powerlifting Coach', exp: '10 Yrs', badges: ['Powerlifting', 'Olympic', 'Recomp'] },
  { emoji: '🏋️', name: 'Serena Okafor', specialty: 'HIIT & Fat Loss',         cert: 'ACE-CPT | Precision Nutrition L1 | Spin',  exp: '7 Yrs',  badges: ['HIIT', 'Nutrition', 'Weight Loss'] },
  { emoji: '🧘', name: 'Kai Tanaka',    specialty: 'Mobility & Recovery',      cert: 'RYT-500 | NASM-CES | FRC Mobility',       exp: '9 Yrs',  badges: ['Yoga', 'Mobility', 'Rehab'] },
  { emoji: '🥊', name: 'Diana Cruz',    specialty: 'Boxing & Conditioning',    cert: 'NSCA-CPT | USA Boxing L2 | CrossFit L2',  exp: '6 Yrs',  badges: ['Boxing', 'CrossFit', 'Conditioning'] },
];

const TrainersSection: React.FC = () => {
  const [ref, visible] = useIntersection();
  return (
    <section id="trainers"
      className="relative bg-[#0f0f0f] py-24 md:py-32 before:absolute before:top-0 before:left-0 before:right-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-gold/20 before:to-transparent after:absolute after:bottom-0 after:left-0 after:right-0 after:h-px after:bg-gradient-to-r after:from-transparent after:via-gold/20 after:to-transparent"
      ref={ref}>
      <div className="max-w-[1200px] mx-auto px-6">
        <SectionTitle eyebrow="Expert Coaches" title="Your Trainers."
          subtitle="Our certified coaching team has helped thousands of members reach their goals with deep expertise and genuine passion."
          align="center" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-4 mb-10">
          {TRAINERS.map(({ emoji, name, specialty, cert, exp, badges }, i) => (
            <div key={i}
              className={`bg-dark-brown overflow-hidden transition-transform duration-300 hover:-translate-y-2 reveal ${visible ? 'is-visible' : ''}`}
              style={{ transitionDelay: `${i * 0.12}s` }}>
              {/* Avatar */}
              <div className="relative h-[210px] bg-gradient-to-br from-[#222] to-gym-black flex items-center justify-center border-b-[3px] border-gold text-[5rem]">
                {emoji}
                <div className="absolute top-3 right-3 bg-gold text-gym-black px-2.5 py-0.5 pb-2 clip-ribbon text-center">
                  <span className="block font-display text-[1.2rem] leading-none">{exp}</span>
                  <span className="block font-condensed text-[0.62rem] font-extrabold tracking-[0.1em] uppercase">Exp.</span>
                </div>
              </div>
              {/* Body */}
              <div className="p-5">
                <h3 className="font-condensed text-[1.25rem] font-extrabold tracking-[0.05em] uppercase text-off-white mb-1">{name}</h3>
                <span className="block font-condensed text-[0.82rem] font-bold tracking-[0.14em] uppercase text-gold mb-2.5">{specialty}</span>
                <p className="font-body text-[0.88rem] font-normal text-off-white/55 mb-4 leading-snug">{cert}</p>
                <div className="flex flex-wrap gap-1.5">
                  {badges.map((b) => (
                    <span key={b} className="font-condensed text-[0.72rem] font-bold tracking-[0.08em] uppercase text-off-white/65 bg-off-white/[0.07] border border-off-white/12 px-2.5 py-0.5">{b}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Bottom strip */}
        <div className="flex items-center justify-between gap-6 p-7 md:p-8 bg-dark-brown border border-gold/18 flex-wrap">
          <p className="font-body text-[1rem] font-normal text-off-white/70">
            Ready to work with an elite coach? Book a free intro session today.
          </p>
          <a href="#contact"
            onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }}
            className="font-condensed text-[0.95rem] font-bold tracking-[0.1em] uppercase text-gold no-underline transition-[letter-spacing] duration-200 hover:tracking-[0.15em]">
            Book a Session →
          </a>
        </div>
      </div>
    </section>
  );
};

export default TrainersSection;
