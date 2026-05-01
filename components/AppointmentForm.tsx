'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';

interface FormData {
  name: string;
  email: string;
  phone: string;
  category: string;
  date: string;
  time: string;
  message: string;
}

const categories = [
  'Kreuze', 'Ringe', 'Ohrstecker', 'Creolen',
  'Armreifen', 'Halsketten', 'Brillantringe', 'Goldankauf', 'Sonstiges',
];

const times = [
  '10:00', '10:30', '11:00', '11:30', '12:00',
  '14:00', '14:30', '15:00', '15:30', '16:00', '16:30', '17:00', '17:30',
];

export default function AppointmentForm() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>();
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data: FormData) => {
    setLoading(true);
    await new Promise((r) => setTimeout(r, 800));
    console.log('Appointment request:', data);
    setLoading(false);
    setSent(true);
    reset();
  };

  if (sent) {
    return (
      <div className="text-center py-16">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full border border-kenju-gold mb-6">
          <svg className="w-8 h-8 text-kenju-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="font-serif text-3xl text-kenju-cream mb-3">Anfrage erhalten</h3>
        <p className="font-sans text-kenju-muted mb-8">
          Vielen Dank! Wir melden uns innerhalb von 24 Stunden bei Ihnen.
        </p>
        <button onClick={() => setSent(false)} className="btn-outline-gold">
          Weitere Anfrage
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Name */}
        <div>
          <label className="block font-sans text-xs tracking-widest uppercase text-kenju-muted mb-2">
            Ihr Name *
          </label>
          <input
            {...register('name', { required: 'Bitte geben Sie Ihren Namen an.' })}
            className="input-dark"
            placeholder="Max Mustermann"
          />
          {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name.message}</p>}
        </div>

        {/* Email */}
        <div>
          <label className="block font-sans text-xs tracking-widest uppercase text-kenju-muted mb-2">
            E-Mail *
          </label>
          <input
            type="email"
            {...register('email', {
              required: 'E-Mail ist erforderlich.',
              pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Ungültige E-Mail-Adresse.' },
            })}
            className="input-dark"
            placeholder="max@beispiel.de"
          />
          {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>}
        </div>

        {/* Phone */}
        <div>
          <label className="block font-sans text-xs tracking-widest uppercase text-kenju-muted mb-2">
            Telefon
          </label>
          <input
            type="tel"
            {...register('phone')}
            className="input-dark"
            placeholder="+49 30 …"
          />
        </div>

        {/* Category */}
        <div>
          <label className="block font-sans text-xs tracking-widest uppercase text-kenju-muted mb-2">
            Kategorie *
          </label>
          <select
            {...register('category', { required: 'Bitte wählen Sie eine Kategorie.' })}
            className="input-dark bg-kenju-indigo"
          >
            <option value="">Bitte wählen …</option>
            {categories.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
          {errors.category && <p className="text-red-400 text-xs mt-1">{errors.category.message}</p>}
        </div>

        {/* Date */}
        <div>
          <label className="block font-sans text-xs tracking-widest uppercase text-kenju-muted mb-2">
            Wunschdatum *
          </label>
          <input
            type="date"
            {...register('date', { required: 'Bitte wählen Sie ein Datum.' })}
            className="input-dark"
            min={new Date().toISOString().split('T')[0]}
          />
          {errors.date && <p className="text-red-400 text-xs mt-1">{errors.date.message}</p>}
        </div>

        {/* Time */}
        <div>
          <label className="block font-sans text-xs tracking-widest uppercase text-kenju-muted mb-2">
            Wunschzeit *
          </label>
          <select
            {...register('time', { required: 'Bitte wählen Sie eine Uhrzeit.' })}
            className="input-dark bg-kenju-indigo"
          >
            <option value="">Bitte wählen …</option>
            {times.map((t) => (
              <option key={t} value={t}>{t} Uhr</option>
            ))}
          </select>
          {errors.time && <p className="text-red-400 text-xs mt-1">{errors.time.message}</p>}
        </div>

        {/* Message */}
        <div className="md:col-span-2">
          <label className="block font-sans text-xs tracking-widest uppercase text-kenju-muted mb-2">
            Ihre Nachricht
          </label>
          <textarea
            {...register('message')}
            rows={4}
            className="input-dark resize-none"
            placeholder="Womit können wir Ihnen helfen?"
          />
        </div>
      </div>

      <div className="mt-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <button type="submit" disabled={loading} className="btn-gold disabled:opacity-60">
          {loading ? 'Wird gesendet …' : 'Termin anfragen'}
        </button>
        <p className="font-sans text-xs text-kenju-muted">
          * Pflichtfelder. Wir antworten innerhalb von 24 h.
        </p>
      </div>
    </form>
  );
}
