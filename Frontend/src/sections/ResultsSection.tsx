import React from 'react';
import SectionTitle from '../components/ui/SectionTitle';
import Button from '../components/ui/Button';


const BIG_STATS = [
  { value: '8.6%',  label: 'Average body fat lost',      sub: 'across 18 classes in 8 weeks' },
  { value: '2.6%',  label: 'Lean muscle gained',         sub: 'in the same 8-week period' },
  { value: '500+',  label: 'Calories burned per session', sub: 'with up to 24-hr afterburn effect' },
  { value: '96%',   label: 'Members report more energy',  sub: 'within the first month of training' },
];

const TESTIMONIALS = [
  { quote: 'I lost 14 kg in 12 weeks and finally feel confident again. The coaches pushed me in ways I never would have pushed myself.', name: 'Priya N.', result: '14 kg lost · 12 weeks', emoji: '🏃‍♀️' },
  { quote: 'I came in thinking I was too out of shape to start. Six months later I completed my first 5K. This place changes lives.', name: 'Kamal S.', result: 'First 5K completed', emoji: '💪' },
  { quote: 'The trainers actually remember your goals. It is not a factory — it feels personal every single session.', name: 'Natasha R.', result: '8% body fat reduction', emoji: '⚡' },
];

const ResultsSection: React.FC = () => {
  const [statsRef, statsVisible] = useIntersection();
  const [testiRef, testiVisible] = useIntersection();

  return (
    <section id="results">
      {/* Stats — dark */}
      <div className="relative bg-gym-black py-24 md:py-32 before:absolute before:top-0 before:left-0 before:right-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-gold/30 before:to-transparent"
        ref={statsRef}>
        <div className="max-w-[1200px] mx-auto px-6">
          <SectionTitle eyebrow="Real Results" title="The Numbers Don't Lie."
            subtitle="Our training methodology is backed by exercise science. These are real average outcomes from members who completed our 8-week program."
            align="center" />
          <div className="grid grid-cols-2 lg:grid-cols-4 border border-gold/15">
            {BIG_STATS.map(({ value, label, sub }, i) => (
              <div key={i}
                className={`relative text-center p-8 md:p-10 border-r border-gold/12 last:border-r-0 group
                  reveal ${statsVisible ? 'is-visible' : ''} transition-colors duration-300 hover:bg-dark-brown/50`}
                style={{ transitionDelay: `${i * 0.12}s` }}>
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                <span className="block font-display text-gold tracking-[0.02em] mb-3" style={{ fontSize: 'clamp(2.8rem,5vw,4.5rem)', lineHeight: 1 }}>
                  {value}
                </span>
                <span className="block font-condensed text-[1rem] font-bold tracking-[0.08em] uppercase text-off-white mb-2">{label}</span>
                <span className="block font-body text-[0.88rem] font-normal text-off-white/55 leading-snug">{sub}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials — light */}
      <div className="bg-off-white py-24 md:py-32" ref={testiRef}>
        <div className="max-w-[1200px] mx-auto px-6">
          <SectionTitle eyebrow="Member Stories" title="Hear It From Them." align="center" light />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {TESTIMONIALS.map(({ quote, name, result, emoji }, i) => (
              <div key={i}
                className={`bg-white p-10 border-b-[3px] border-gold shadow-[0_4px_24px_rgba(0,0,0,0.07)] flex flex-col gap-5
                  reveal ${testiVisible ? 'is-visible' : ''}`}
                style={{ transitionDelay: `${i * 0.15}s` }}>
                <span className="text-[2.2rem] leading-none">{emoji}</span>
                <p className="font-body text-[1rem] italic font-normal text-gray-700 leading-[1.8] flex-1">"{quote}"</p>
                <div className="pt-4 border-t border-black/8 flex flex-col gap-1.5">
                  <span className="font-condensed text-[1rem] font-extrabold tracking-[0.08em] uppercase text-gym-black">{name}</span>
                  <span className="font-condensed text-[0.82rem] font-bold tracking-[0.12em] uppercase text-gold">{result}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center">
            <Button variant="primary" size="lg"
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}>
              Start Your Transformation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
