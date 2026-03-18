import type { PlanCardProps } from '../types'
import React from 'react';
import SectionTitle from '../components/ui/SectionTitle';
import Button from '../components/ui/Button';

import { Zap } from 'lucide-react';

const PLANS = [
  { name: 'Starter', price: '39', tagline: 'Perfect for beginners', popular: false,
    features: ['Full gym floor access', 'Locker room & showers', 'Access Mon–Fri (6AM–10PM)', '2 group classes per week', 'Fitness assessment (1×)', 'Member app access'],
    unavailable: ['Personal coaching', 'Recovery suite', '24/7 access'] },
  { name: 'Pro', price: '69', tagline: 'Most popular choice', popular: true,
    features: ['Full gym floor access', 'Locker room & showers', '24/7 access — any day', 'Unlimited group classes', 'Quarterly fitness assessment', 'Member app access', '2 coaching sessions/mo', 'Recovery suite access'],
    unavailable: [] },
  { name: 'Elite', price: '119', tagline: 'For serious athletes', popular: false,
    features: ['Full gym floor access', '24/7 access — any day', 'Unlimited group classes', 'Monthly body scan', '8 coaching sessions/mo', 'Recovery suite — unlimited', 'Nutrition coaching included', 'Guest pass (2/month)'],
    unavailable: [] },
];

const PlanCard: React.FC<PlanCardProps> = ({ name, price, tagline, popular, features, unavailable, visible, delay }) => (
  <div
    className={`relative flex flex-col p-8 border transition-transform duration-300 hover:-translate-y-1.5 reveal ${visible ? 'is-visible' : ''}
      ${popular ? 'bg-gradient-to-br from-[#2e2718] to-dark-brown border-gold shadow-[0_0_40px_rgba(201,148,10,0.15)]' : 'bg-dark-brown border-gold/12'}`}
    style={{ transitionDelay: delay }}
  >
    {popular && (
      <div className="absolute -top-px right-8 bg-gold text-gym-black font-condensed text-[0.72rem] font-extrabold tracking-[0.1em] uppercase px-3 pt-1 pb-2.5 clip-ribbon flex items-center gap-1">
        <Zap size={12} /> Most Popular
      </div>
    )}
    <span className="font-condensed text-[0.82rem] font-extrabold tracking-[0.22em] uppercase text-gold mb-4 block">{name}</span>
    <div className="flex items-end gap-0.5 mb-2">
      <span className="font-condensed text-[1.3rem] font-bold text-off-white self-start mt-1.5">$</span>
      <span className="font-display text-[3.8rem] leading-none text-off-white tracking-tight">{price}</span>
      <span className="font-body text-[0.95rem] font-normal text-off-white/45 pb-1.5">/mo</span>
    </div>
    <p className="font-body text-[0.92rem] font-normal text-off-white/50 mb-5">{tagline}</p>
    <div className="h-px bg-gold/15 mb-5" />
    <ul className="flex flex-col gap-3 flex-1 mb-7 list-none">
      {features.map((f) => (
        <li key={f} className="flex items-center gap-2.5 font-body text-[0.92rem] font-normal text-off-white/85">
          <span className="text-gold text-[0.9rem] font-bold">✔</span> {f}
        </li>
      ))}
      {unavailable.map((f) => (
        <li key={f} className="flex items-center gap-2.5 font-body text-[0.92rem] text-off-white/28">
          <span className="text-off-white/30 w-3.5 text-center font-bold">×</span> {f}
        </li>
      ))}
    </ul>
    <Button variant={popular ? 'primary' : 'outline'} size="md" fullWidth
      onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}>
      {popular ? 'Start Free Trial' : 'Get Started'}
    </Button>
  </div>
);

const PlansSection: React.FC = () => {
  const [ref, visible] = useIntersection();
  return (
    <section id="plans" className="bg-gym-black py-24 md:py-32" ref={ref}>
      <div className="max-w-[1200px] mx-auto px-6">
        <SectionTitle eyebrow="Membership Plans" title="Invest In Yourself."
          subtitle="No lock-in contracts. Cancel anytime. Choose the plan that fits your goals and upgrade whenever you're ready."
          align="center" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-6">
          {PLANS.map((plan, i) => (
            <PlanCard key={i} {...plan} visible={visible} delay={`${i * 0.15}s`} />
          ))}
        </div>
        <p className="text-center font-body text-[0.9rem] font-medium text-off-white/40">
          All plans include a 7-day free trial. No credit card required to start.
        </p>
      </div>
    </section>
  );
};

export default PlansSection;
