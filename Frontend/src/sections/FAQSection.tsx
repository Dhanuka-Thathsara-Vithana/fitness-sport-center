import type { FAQItemProps } from '../types'
import React, { useState, useRef } from 'react';
import SectionTitle from '../components/ui/SectionTitle';
import useIntersection from '../hooks/useIntersection';

const FAQS = [
  { q: 'Do I need to be fit to join?', a: "Absolutely not. Our trainers design every session to be scalable for all fitness levels. Whether you're a complete beginner or a seasoned athlete, our coaches will meet you where you are." },
  { q: 'What should I bring to my first session?', a: "Just bring training shoes, a water bottle, and a towel. We have complimentary lockers, showers, and changing facilities on-site. Arrive 15 minutes early for a quick orientation." },
  { q: 'How does the free trial work?', a: "Sign up via the contact form and we'll book you in for a full 7-day free trial with unrestricted access to all classes and facilities. No credit card required and no obligation to continue." },
  { q: 'Can I cancel my membership at any time?', a: "Yes. All plans are month-to-month with no lock-in contracts. Cancel at any time with 7 days' notice through our app or by speaking to our front desk team." },
  { q: 'What equipment is available?', a: "A fully equipped strength zone with Olympic barbells, power racks, dumbbells up to 150 lbs, cable machines, and plate-loaded equipment. Our cardio floor features 40+ machines including treadmills, assault bikes, rowers, and ski ergs." },
  { q: 'Do you offer nutrition coaching?', a: "Yes, nutrition coaching is available with Pro and Elite memberships, and as an add-on for Starter members. Our coaches work with you on macro targets, meal prep strategies, and supplement guidance." },
  { q: 'Is the gym open 24/7?', a: "24/7 access is available with Pro and Elite memberships. Starter members have access Monday through Friday between 6AM and 10PM. All members can attend any class within their plan." },
];

const FAQItem: React.FC<FAQItemProps> = ({ q, a, isOpen, onToggle }) => {
  const bodyRef = useRef<HTMLDivElement>(null);
  return (
    <div className={`border-b transition-colors duration-200 ${isOpen ? 'border-gold/35' : 'border-white/8'}`}>
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        className={`w-full flex items-center justify-between gap-6 py-5 text-left bg-transparent border-none cursor-pointer transition-colors duration-200
          font-condensed text-[1.1rem] font-bold tracking-[0.04em]
          ${isOpen ? 'text-gold' : 'text-off-white hover:text-gold'}`}
      >
        <span>{q}</span>
        <span className="flex-shrink-0 w-7 text-center text-gold font-light text-[1.6rem] leading-none">{isOpen ? '−' : '+'}</span>
      </button>
      <div
        ref={bodyRef}
        className="overflow-hidden transition-[max-height] duration-[350ms] ease-in-out"
        style={{ maxHeight: isOpen ? `${bodyRef.current?.scrollHeight ?? 400}px` : '0px' }}
      >
        <p className="font-body text-[0.98rem] font-normal text-off-white/68 leading-[1.8] pb-6">{a}</p>
      </div>
    </div>
  );
};

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState(0);
  const [ref, visible] = useIntersection();
  return (
    <section id="faq"
      className="relative bg-gym-black py-24 md:py-32 before:absolute before:top-0 before:left-0 before:right-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-gold/25 before:to-transparent"
      ref={ref}>
      <div className="max-w-[1200px] mx-auto px-6">
        <div className={`grid grid-cols-1 lg:grid-cols-[400px_1fr] gap-16 lg:gap-20 items-start reveal ${visible ? 'is-visible' : ''}`}>
          <div>
            <SectionTitle eyebrow="FAQ" title="Got Questions?"
              subtitle="Everything you need to know before your first visit. Still have questions? Just reach out — we respond within a few hours." />
            <a href="#contact"
              onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }}
              className="font-condensed text-[1rem] font-bold tracking-[0.1em] uppercase text-gold no-underline transition-[letter-spacing] duration-200 hover:tracking-[0.15em]">
              Ask Us Directly →
            </a>
          </div>
          <div className="border-t border-white/8">
            {FAQS.map((item, i) => (
              <FAQItem key={i} q={item.q} a={item.a} isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? -1 : i)} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
