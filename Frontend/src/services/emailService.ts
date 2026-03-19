import emailjs from '@emailjs/browser';
import type { FormValues } from '../types';

const SERVICE_ID  = import.meta.env.VITE_EMAILJS_SERVICE_ID  as string;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string;
const PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY  as string;

export const sendContactEmail = async (form: FormValues): Promise<void> => {
  await emailjs.send(
    SERVICE_ID,
    TEMPLATE_ID,
    {
      to_name:  form.name,
      to_email: form.email,
      subject:  form.subject,
      message:  form.message,
      phone:    form.phone.trim() || 'Not provided',
    },
    PUBLIC_KEY
  );
};