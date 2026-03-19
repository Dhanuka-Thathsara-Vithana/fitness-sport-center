import React from 'react';
import SectionTitle from '../components/ui/SectionTitle';
import Button from '../components/ui/Button';
import useIntersection from '../hooks/useIntersection';
import { CheckCircle2, Zap, Target, Heart } from 'lucide-react';

const CHECKPOINTS = [
  'State-of-the-art strength & cardio zones',
  'Certified personal trainers with NASM & ACE credentials',
  'Dedicated zones for HIIT, powerlifting & functional training',
  'Nutritional guidance and meal planning support',
  'Recovery suite with sauna and cold plunge',
  'Flexible membership plans — no lock-in contracts',
];

const VALUES = [
  { icon: <Zap size={18} />,    title: 'No-Excuses Culture',   desc: 'We build accountability where every member pushes beyond their limits.' },
  { icon: <Target size={18} />, title: 'Goal-Driven Training', desc: 'Every program is tailored to your specific goal — fat loss, muscle gain, or performance.' },
  { icon: <Heart size={18} />,  title: 'Community First',      desc: "We're more than a gym. Members who train together grow stronger together." },
];

const AboutSection: React.FC = () => {
  const [ref, visible] = useIntersection();

  return (
    <section id="about" className="relative bg-off-white border-t-[3px] border-gold py-24 md:py-32" ref={ref}>
      <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-start">

        {/* Left */}
        <div className={`reveal-left ${visible ? 'is-visible' : ''}`}>
          <SectionTitle
            eyebrow="Who We Are"
            title="Built For Champions."
            subtitle="Founded in 2023, Fitness Sports Center was born from a simple belief: everyone deserves access to elite-level training. Premium equipment, science-backed programming, and passionate coaches — all under one roof."
            light
          />
          <div className="flex flex-col gap-3.5 mb-10">
            {CHECKPOINTS.map((item, i) => (
              <div key={i}
                className={`flex items-start gap-3 reveal ${visible ? 'is-visible' : ''}`}
                style={{ transitionDelay: `${i * 0.07}s` }}>
                <CheckCircle2 size={18} className="text-gold flex-shrink-0 mt-0.5" />
                <span className="font-body text-[1rem] font-medium text-gray-700">{item}</span>
              </div>
            ))}
          </div>
          <Button variant="primary" size="md"
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}>
            Book Free Tour
          </Button>
        </div>

        {/* Right */}
        <div className={`flex flex-col gap-4 reveal-right ${visible ? 'is-visible' : ''}`} style={{ transitionDelay: '0.2s' }}>
          {/* Quote card */}
          <div className="relative bg-gym-black border-l-4 border-gold overflow-hidden">
            <span aria-hidden className="absolute top-[-1rem] right-6 font-display text-[7rem] leading-none text-gold/10 pointer-events-none select-none">"</span>
            <div className="p-10">
              <span className="block font-display text-[3.5rem] leading-none text-gold tracking-[0.05em]">2023</span>
              <span className="block font-condensed text-[0.8rem] font-bold tracking-[0.22em] uppercase text-off-white/45 mb-6">Year Founded</span>
              <div className="w-10 h-0.5 bg-gold mb-6" />
              <p className="font-body text-[1rem] italic font-light text-off-white/75 leading-[1.8] mb-4">
                "We don't just help you get fit. We help you get better — mentally, physically, and as a person."
              </p>
              <cite className="font-condensed text-[0.85rem] font-bold tracking-[0.1em] text-gold not-italic">
                — Founder, Fitness SC
              </cite>
            </div>
          </div>

          {/* Values */}
          {VALUES.map(({ icon, title, desc }, i) => (
            <div key={i}
              className="flex gap-4 items-start p-5 bg-white border border-black/7 shadow-[0_2px_8px_rgba(0,0,0,0.04)] transition-all duration-200 hover:border-gold/40 hover:shadow-[0_4px_16px_rgba(0,0,0,0.1)]">
              <span className="text-gold flex-shrink-0 mt-0.5">{icon}</span>
              <div>
                <h4 className="font-condensed text-[1rem] font-extrabold tracking-[0.08em] uppercase text-gym-black mb-1.5">{title}</h4>
                <p className="font-body text-[0.9rem] font-normal text-gray-500 leading-[1.65]">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
