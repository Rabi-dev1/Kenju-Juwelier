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
  'Ringe & Brillantringe',
  'Labor Diamanten',
  'Trauringe',
  'Ohrringe',
  'Halsketten & Kreuze',
  'Armreifen',
  'Uhren',
  'Goldankauf',
  'Sonstiges',
];

const times = [
  '10:00', '10:30', '11:00', '11:30', '12:00',
  '14:00', '14:30', '15:00', '15:30', '16:00', '16:30', '17:00', '17:30',
];

const labelStyle: React.CSSProperties = {
  display: 'block',
  fontFamily: 'var(--font-inter), system-ui, sans-serif',
  fontSize: '0.7rem',
  letterSpacing: '0.2em',
  textTransform: 'uppercase',
  color: 'var(--kj-muted)',
  marginBottom: '0.5rem',
};

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
        <div
          className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-6"
          style={{ border: '1px solid var(--kj-gold)' }}
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            style={{ color: 'var(--kj-gold)' }}
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="font-serif text-3xl mb-3" style={{ color: 'var(--kj-text)' }}>
          Anfrage erhalten
        </h3>
        <p className="font-sans text-base mb-8" style={{ color: 'var(--kj-muted)' }}>
          Vielen Dank! Wir melden uns innerhalb von 24 Stunden persönlich bei Ihnen.
        </p>
        <button onClick={() => setSent(false)} className="btn-outline-gold">
          Weitere Anfrage
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

        {/* Name */}
        <div>
          <label style={labelStyle}>Ihr Name *</label>
          <input
            {...register('name', { required: 'Bitte geben Sie Ihren Namen an.' })}
            className="input-dark"
            placeholder="Max Mustermann"
          />
          {errors.name && (
            <p className="font-sans text-xs mt-1.5" style={{ color: '#e05252' }}>
              {errors.name.message}
            </p>
          )}
        </div>

        {/* Email */}
        <div>
          <label style={labelStyle}>E-Mail *</label>
          <input
            type="email"
            {...register('email', {
              required: 'E-Mail ist erforderlich.',
              pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Ungültige E-Mail-Adresse.' },
            })}
            className="input-dark"
            placeholder="max@beispiel.de"
          />
          {errors.email && (
            <p className="font-sans text-xs mt-1.5" style={{ color: '#e05252' }}>
              {errors.email.message}
            </p>
          )}
        </div>

        {/* Phone */}
        <div>
          <label style={labelStyle}>Telefon</label>
          <input
            type="tel"
            {...register('phone')}
            className="input-dark"
            placeholder="+49 176 …"
          />
        </div>

        {/* Category */}
        <div>
          <label style={labelStyle}>Anliegen *</label>
          <select
            {...register('category', { required: 'Bitte wählen Sie eine Kategorie.' })}
            className="input-dark"
            style={{
              background: 'var(--kj-card)',
              color: 'var(--kj-text)',
            }}
          >
            <option value="">Bitte wählen …</option>
            {categories.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
          {errors.category && (
            <p className="font-sans text-xs mt-1.5" style={{ color: '#e05252' }}>
              {errors.category.message}
            </p>
          )}
        </div>

        {/* Date */}
        <div>
          <label style={labelStyle}>Wunschdatum *</label>
          <input
            type="date"
            {...register('date', { required: 'Bitte wählen Sie ein Datum.' })}
            className="input-dark"
            min={new Date().toISOString().split('T')[0]}
          />
          {errors.date && (
            <p className="font-sans text-xs mt-1.5" style={{ color: '#e05252' }}>
              {errors.date.message}
            </p>
          )}
        </div>

        {/* Time */}
        <div>
          <label style={labelStyle}>Wunschzeit *</label>
          <select
            {...register('time', { required: 'Bitte wählen Sie eine Uhrzeit.' })}
            className="input-dark"
            style={{
              background: 'var(--kj-card)',
              color: 'var(--kj-text)',
            }}
          >
            <option value="">Bitte wählen …</option>
            {times.map((t) => (
              <option key={t} value={t}>{t} Uhr</option>
            ))}
          </select>
          {errors.time && (
            <p className="font-sans text-xs mt-1.5" style={{ color: '#e05252' }}>
              {errors.time.message}
            </p>
          )}
        </div>

        {/* Message */}
        <div className="md:col-span-2">
          <label style={labelStyle}>Ihre Nachricht</label>
          <textarea
            {...register('message')}
            rows={5}
            className="input-dark resize-none"
            placeholder="Womit können wir Ihnen helfen? Beschreiben Sie gerne Ihren Wunsch."
          />
        </div>
      </div>

      <div className="mt-7 flex flex-col sm:flex-row items-start sm:items-center gap-5">
        <button
          type="submit"
          disabled={loading}
          className="btn-gold disabled:opacity-60"
          style={{ minWidth: '200px' }}
        >
          {loading ? 'Wird gesendet …' : 'Termin anfragen'}
        </button>
        <p className="font-sans text-sm" style={{ color: 'var(--kj-muted)' }}>
          * Pflichtfelder — Wir antworten persönlich innerhalb von 24 h.
        </p>
      </div>
    </form>
  );
}
