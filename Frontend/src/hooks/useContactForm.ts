import { useState } from 'react';
import type { ChangeEvent, FocusEvent } from 'react';
import { validateForm, INITIAL_FORM } from '../utils/validation';
import { sendContactEmail } from '../services/emailService';
import type { FormValues, FormErrors, FormTouched, FormStatus } from '../types';

interface UseContactFormReturn {
  form:         FormValues;
  errors:       FormErrors;
  touched:      FormTouched;
  status:       FormStatus;
  handleChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
  handleBlur:   (e: FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
  handleReset:  () => void;
}

export const useContactForm = (): UseContactFormReturn => {
  const [form,    setForm]    = useState<FormValues>(INITIAL_FORM);
  const [errors,  setErrors]  = useState<FormErrors>({});
  const [touched, setTouched] = useState<FormTouched>({});
  const [status,  setStatus]  = useState<FormStatus>('idle');

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ): void => {
    const { name, value } = e.target;
    const field = name as keyof FormValues;
    setForm((prev) => ({ ...prev, [field]: value }));
    if (touched[field]) {
      setErrors((prev) => ({
        ...prev,
        [field]: validateForm({ ...form, [field]: value })[field],
      }));
    }
  };

  const handleBlur = (
    e: FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ): void => {
    const field = e.target.name as keyof FormValues;
    setTouched((prev) => ({ ...prev, [field]: true }));
    setErrors((prev) => ({ ...prev, [field]: validateForm(form)[field] }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();

    const allTouched = Object.fromEntries(
      Object.keys(INITIAL_FORM).map((k) => [k, true])
    ) as FormTouched;
    setTouched(allTouched);

    const errs = validateForm(form);
    setErrors(errs);
    if (Object.keys(errs).length) return;

    setStatus('loading');
    try {
      await sendContactEmail(form);
      setStatus('success');
    } catch (err) {
      console.error('[EmailService]', err);
      setStatus('error');
    }
  };

  const handleReset = (): void => {
    setForm(INITIAL_FORM);
    setErrors({});
    setTouched({});
    setStatus('idle');
  };

  return { form, errors, touched, status, handleChange, handleBlur, handleSubmit, handleReset };
};