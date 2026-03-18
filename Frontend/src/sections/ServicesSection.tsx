import type { ServiceItem } from '../types'
import React, { useState } from 'react';
import SectionTitle from '../components/ui/SectionTitle';

import { Dumbbell, Flame, Brain, Apple, Waves, Bike } from 'lucide-react';

const SERVICES = [
  { icon: <Dumbbell size={28} />, title: 'Strength Training',   desc: 'Olympic barbells, power racks, dumbbells up to 150 lbs — everything to build a powerful physique.', tags: ['Free Weights', 'Powerlifting', 'Olympic Lifts'] },
  { icon: <Flame size={28} />,    title: 'HIIT & Cardio',        desc: 'Torch fat and build stamina with structured HIIT classes and 40+ cardio machines including assault bikes and ski ergs.', tags: ['Group HIIT', '40+ Machines', 'HR Tracking'] },
  { icon: <Brain size={28} />,    title: 'Personal Coaching',    desc: '1-on-1 coaching with a certified trainer building a periodised plan around your body composition goals.', tags: ['NASM Certified', 'Custom Plans', 'Check-ins'] },
  { icon: <Apple size={28} />,    title: 'Nutrition Guidance',   desc: 'Science-backed meal strategies, macro tracking, and supplement guidance — no gimmicks, just results.', tags: ['Macro Calc', 'Meal Prep', 'Body Scan'] },
  { icon: <Waves size={28} />,    title: 'Recovery Suite',       desc: 'Infrared sauna, cold plunge (4°C), contrast therapy, and a full mobility zone to maximise recovery.', tags: ['Sauna', 'Cold Plunge', 'Mobility'] },
  { icon: <Bike size={28} />,     title: 'Group Classes',        desc: '30+ instructor-led classes per week — spin, boxing, yoga, boot camp, and more with community energy.', tags: ['Spin', 'Boxing', 'Yoga'] },
];

const ServiceCard: React.FC<ServiceItem> = ({ icon, title, desc, tags }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`relative bg-dark-brown p-8 overflow-hidden transition-all duration-300 cursor-default border-t-[3px]
        ${hovered ? 'border-gold -translate-y-1.5 shadow-[0_18px_45px_rgba(0,0,0,0.4)]' : 'border-transparent'}`}
    >
      <div className={`absolute bottom-0 right-0 border-b border-r transition-all duration-300 ${hovered ? 'w-14 h-14 border-gold' : 'w-9 h-9 border-gold/30'}`} />
      <div className={`w-14 h-14 flex items-center justify-center mb-5 border transition-all duration-200 ${hovered ? 'bg-gold/20 border-gold' : 'bg-gold/10 border-gold/25'}`}>
        <span className="text-gold">{icon}</span>
      </div>
      <h3 className="font-condensed text-[1.2rem] font-extrabold tracking-[0.07em] uppercase text-off-white mb-3">{title}</h3>
      <p className="font-body text-[0.95rem] font-normal text-off-white/65 leading-[1.75] mb-5">{desc}</p>
      <div className="flex flex-wrap gap-2">
        {tags.map((t) => (
          <span key={t} className="font-condensed text-[0.75rem] font-bold tracking-[0.08em] uppercase text-off-white/65 bg-off-white/[0.07] border border-off-white/12 px-2.5 py-0.5">
            {t}
          </span>
        ))}
      </div>
    </div>
  );
};

const ServicesSection: React.FC = () => {
  const [ref, visible] = useIntersection();
  return (
    <section id="services"
      className="bg-dark-brown py-24 md:py-32 relative before:absolute before:top-0 before:left-0 before:right-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-gold/20 before:to-transparent after:absolute after:bottom-0 after:left-0 after:right-0 after:h-px after:bg-gradient-to-r after:from-transparent after:via-gold/20 after:to-transparent"
      ref={ref}>
      <div className="max-w-[1200px] mx-auto px-6">
        <SectionTitle eyebrow="What We Offer" title="World-Class Services."
          subtitle="From strength training to recovery, every aspect of your fitness journey is covered under one roof."
          align="center" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-4">
          {SERVICES.map((svc, i) => (
            <div key={i} className={`reveal ${visible ? 'is-visible' : ''}`} style={{ transitionDelay: `${i * 0.1}s` }}>
              <ServiceCard {...svc} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
