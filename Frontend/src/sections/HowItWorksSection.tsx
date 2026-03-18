import React from 'react';
import SectionTitle from '../components/ui/SectionTitle';
import Button from '../components/ui/Button';


const STEPS = [
  { num: '01', title: 'Book Your Session',       desc: "Choose from 30+ weekly classes on our app or website. First-timers get a free orientation — show up 15 minutes early and we'll get you set up.", icon: '📅' },
  { num: '02', title: 'Train With Elite Coaches', desc: "Every 60-minute session cycles through strength, cardio, and functional training zones — guided by a certified coach who adapts the workout to your level.", icon: '🏋️' },
  { num: '03', title: 'Track Your Progress',      desc: "After every session you'll receive a detailed breakdown of calories burned, heart-rate zones, and performance metrics — see exactly how you're improving.", icon: '📊' },
];

const HowItWorksSection: React.FC = () => {
  const [ref, visible] = useIntersection();
  return (
    <section id="how-it-works" className="bg-off-white py-24 md:py-32" ref={ref}>
      <div className="max-w-[1200px] mx-auto px-6">
        <SectionTitle eyebrow="Your Journey" title="How It Works."
          subtitle="Getting started is easier than you think. Three steps stand between you and your best self."
          align="center" light />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-14 mb-16 relative">
          {STEPS.map(({ num, title, desc, icon }, i) => (
            <div key={i} className={`relative reveal ${visible ? 'is-visible' : ''}`} style={{ transitionDelay: `${i * 0.15}s` }}>
              {i < 2 && (
                <div className="hidden md:block absolute top-[36px] right-[-1.5rem] w-12 h-px bg-gradient-to-r from-gold to-gold/30 z-10" />
              )}
              <div className="flex items-center gap-4 mb-5">
                <div className="w-[72px] h-[72px] bg-gym-black border-2 border-gold flex items-center justify-center flex-shrink-0 clip-btn">
                  <span className="font-display text-[1.9rem] leading-none text-gold tracking-[0.05em]">{num}</span>
                </div>
                <span className="text-[2.2rem] leading-none">{icon}</span>
              </div>
              <h3 className="font-condensed text-[1.4rem] font-extrabold tracking-[0.05em] uppercase text-gym-black mb-3">{title}</h3>
              <p className="font-body text-[0.98rem] font-normal text-gray-600 leading-[1.8]">{desc}</p>
            </div>
          ))}
        </div>
        <div className="flex flex-col items-center gap-3">
          <Button variant="primary" size="lg"
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}>
            Book Your First Free Session
          </Button>
          <p className="font-body text-[0.9rem] font-medium text-black/45 tracking-[0.04em]">No experience needed. All fitness levels welcome.</p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
