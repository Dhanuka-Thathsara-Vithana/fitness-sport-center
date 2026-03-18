import React, { useState } from 'react';
import SectionTitle from '../components/ui/SectionTitle';
import Button from '../components/ui/Button';
import InputField from '../components/ui/InputField';
import FormFeedback from '../components/FormFeedback';
import { validateForm, INITIAL_FORM, INQUIRY_OPTIONS } from '../utils/validation';
import useIntersection from '../hooks/useIntersection';
import type { FormValues, FormErrors, FormTouched, FormStatus } from '../types';

const INFO = [
  { icon: '📍', label: 'Location', value: '88 Iron Ave, Fitness District\nColombo 03, Western Province' },
  { icon: '📞', label: 'Phone',    value: '+94 11 234 5678' },
  { icon: '✉️',  label: 'Email',   value: 'hello@fitnesssportscenter.lk' },
  { icon: '🕐', label: 'Hours',    value: 'Mon–Fri: 5:00 AM – 11:00 PM\nSat–Sun: 6:00 AM – 9:00 PM' },
];

const ContactSection: React.FC = () => {
  const [form, setForm]       = useState<FormValues>(INITIAL_FORM);
  const [errors, setErrors]   = useState<FormErrors>({});
  const [touched, setTouched] = useState<FormTouched>({});
  const [status, setStatus]   = useState<FormStatus>('idle');
  const [ref, visible]        = useIntersection();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ): void => {
    const { name, value } = e.target;
    const fieldName = name as keyof FormValues;
    setForm((prev) => ({ ...prev, [fieldName]: value }));
    if (touched[fieldName]) {
      const errs: FormErrors = validateForm({ ...form, [fieldName]: value });
      setErrors((prev) => ({ ...prev, [fieldName]: errs[fieldName] }));
    }
  };

  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ): void => {
    const { name } = e.target;
    const fieldName = name as keyof FormValues;
    setTouched((prev) => ({ ...prev, [fieldName]: true }));
    const errs: FormErrors = validateForm(form);
    setErrors((prev) => ({ ...prev, [fieldName]: errs[fieldName] }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    const allTouched = Object.fromEntries(
      Object.keys(INITIAL_FORM).map((k) => [k, true])
    ) as FormTouched;
    setTouched(allTouched);
    const errs: FormErrors = validateForm(form);
    setErrors(errs);
    if (Object.keys(errs).length) return;
    setStatus('loading');
    await new Promise<void>((r) => setTimeout(r, 1600));
    setStatus('success');
  };

  const handleReset = (): void => {
    setForm(INITIAL_FORM);
    setErrors({});
    setTouched({});
    setStatus('idle');
  };

  return (
    <section
      id="contact"
      className="relative bg-dark-brown/15 py-16 md:py-24 lg:py-32 before:absolute before:top-0 before:left-0 before:right-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-gold/22 before:to-transparent"
      ref={ref}
    >
      {/* Tighter horizontal padding on mobile */}
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <SectionTitle
          eyebrow="Get In Touch"
          title="Start Your Journey."
          subtitle="Have a question or ready to join? Fill in the form and our team will get back to you within 24 hours."
          align="center"
        />

        {/* Gap and top margin scale up from mobile → desktop */}
        <div className={`grid grid-cols-1 lg:grid-cols-[380px_1fr] gap-4 sm:gap-6 lg:gap-8 mt-6 sm:mt-8 reveal ${visible ? 'is-visible' : ''}`}>

          <aside className="bg-dark-brown border-t-[3px] border-gold p-5 sm:p-7 lg:p-9">
            <h3 className="font-condensed text-[1.15rem] sm:text-[1.3rem] font-extrabold tracking-[0.08em] uppercase text-off-white mb-2">
              Visit Us
            </h3>
            <p className="font-body text-[0.9rem] sm:text-[0.95rem] font-normal text-off-white/60 leading-[1.75] mb-5 sm:mb-8">
              Come in for a free tour and see why hundreds of members call Fitness Sports
              Center their second home.
            </p>

            {/* Info items — tighter gap on mobile */}
            <div className="flex flex-col gap-4 sm:gap-6">
              {INFO.map(({ icon, label, value }) => (
                <div key={label} className="flex gap-3 sm:gap-3.5 items-start">
                  <span className="text-gold text-[1rem] sm:text-[1.1rem] mt-0.5 flex-shrink-0">
                    {icon}
                  </span>
                  <div>
                    <span className="block font-condensed text-[0.72rem] sm:text-[0.75rem] font-extrabold tracking-[0.16em] uppercase text-gold/70 mb-0.5 sm:mb-1">
                      {label}
                    </span>
                    {/* break-words prevents long email addresses overflowing on narrow screens */}
                    <span className="block font-body text-[0.88rem] sm:text-[0.95rem] font-normal text-off-white/78 leading-[1.65] whitespace-pre-line break-words">
                      {value}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </aside>

          {/* ── Contact form ── */}
          <div className="bg-dark-brown p-5 sm:p-7 lg:p-9">
            {status === 'success' ? (
              <FormFeedback onReset={handleReset} />
            ) : (
              <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4 sm:gap-6">

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <InputField
                    label="Full Name" id="name" name="name" required type="text"
                    placeholder="Dhanuka Vithana" value={form.name}
                    onChange={handleChange} onBlur={handleBlur}
                    error={touched.name ? errors.name : undefined}
                  />
                  <InputField
                    label="Email Address" id="email" name="email" required type="email"
                    placeholder="dhanuka@example.com" value={form.email}
                    onChange={handleChange} onBlur={handleBlur}
                    error={touched.email ? errors.email : undefined}
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <InputField
                    label="Phone" id="phone" name="phone" optional type="tel"
                    placeholder="+94 71 164 4487" value={form.phone}
                    onChange={handleChange} onBlur={handleBlur}
                    error={touched.phone ? errors.phone : undefined}
                  />
                  <InputField
                    label="Inquiry Type" id="subject" name="subject" required
                    type="select" options={INQUIRY_OPTIONS} value={form.subject}
                    onChange={handleChange} onBlur={handleBlur}
                    error={touched.subject ? errors.subject : undefined}
                  />
                </div>

                <div>
                  <InputField
                    label="Message" id="message" name="message" required
                    type="textarea" rows={5}
                    placeholder="Tell us about your fitness goals or any questions…"
                    value={form.message}
                    onChange={handleChange} onBlur={handleBlur}
                    error={touched.message ? errors.message : undefined}
                  />
                  <p className="text-right text-[0.78rem] sm:text-[0.82rem] font-medium text-off-white/32 mt-1.5">
                    {form.message.length} characters
                  </p>
                </div>

                <Button
                  type="submit" variant="primary" size="lg"
                  fullWidth disabled={status === 'loading'}
                >
                  {status === 'loading' ? 'Sending…' : 'Send Message'}
                </Button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;