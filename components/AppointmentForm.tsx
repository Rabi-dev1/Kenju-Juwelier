'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';

interface FormData {
  name: string;
  email: string;
  phone: string;
  standort: string;
  category: string;
  date: string;
  time: string;
  message: string;
}

const standorte = ['Bielefeld (Loom, 1. OG)', 'Lippstadt (Lange Straße 29)'];

const categories = [
  'Schmuck & Brillantringe',
  'Trauringe',
  'Uhren',
  'Goldankauf',
  'Reparatur & Service',
  'Labor Diamanten',
  'Sonstiges',
];

const times = [
  '10:00', '10:30', '11:00', '11:30', '12:00',
  '14:00', '14:30', '15:00', '15:30', '16:00', '16:30', '17:00', '17:30',
];

const WHATSAPP_NUMBER = '4917663284312';

const labelStyle: React.CSSProperties = {
  display: 'block',
  fontFamily: 'var(--font-inter), system-ui, sans-serif',
  fontSize: '0.7rem',
  letterSpacing: '0.2em',
  textTransform: 'uppercase',
  color: 'var(--kj-muted)',
  marginBottom: '0.5rem',
};

function buildMessage(data: FormData): string {
  const lines = [
    'Terminanfrage über kenju-juwelier.de',
    '',
    `Name: ${data.name}`,
    `E-Mail: ${data.email}`,
    data.phone ? `Telefon: ${data.phone}` : null,
    `Standort: ${data.standort}`,
    `Anliegen: ${data.category}`,
    `Wunschtermin: ${data.date} um ${data.time} Uhr`,
    data.message ? `Nachricht: ${data.message}` : null,
  ];
  return lines.filter(Boolean).join('\n');
}

export default function AppointmentForm() {
  const { register, handleSubmit, reset, getValues, formState: { errors } } = useForm<FormData>();
  const [sent, setSent] = useState(false);
  const [lastMessage, setLastMessage] = useState('');

  const onSubmit = (data: FormData) => {
    const text = buildMessage(data);
    setLastMessage(text);
    // Anfrage per WhatsApp übermitteln – öffnet Chat mit vorbefüllter Nachricht
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, '_blank', 'noopener');
    setSent(true);
    reset();
  };

  if (sent) {
    const mailtoHref = `mailto:info@kenju-juwelier.de?subject=${encodeURIComponent('Terminanfrage – KenJu Juwelier')}&body=${encodeURIComponent(lastMessage)}`;
    return (
      <div className="text-center py-16">
        <div
          className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-6"
          style={{ border: '1px solid var(--kj-gold)' }}
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: 'var(--kj-gold)' }}>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="font-serif text-3xl mb-3" style={{ color: 'var(--kj-text)' }}>
          Fast geschafft!
        </h3>
        <p className="font-sans text-sm mb-2 max-w-md mx-auto leading-relaxed" style={{ color: 'var(--kj-muted)' }}>
          Ihre Anfrage wurde in WhatsApp geöffnet – bitte senden Sie die Nachricht dort ab.
          Wir melden uns innerhalb von 24 Stunden persönlich bei Ihnen.
        </p>
        <p className="font-sans text-xs mb-8" style={{ color: 'var(--kj-muted)', opacity: 0.7 }}>
          Kein WhatsApp?{' '}
          <a href={mailtoHref} style={{ color: 'var(--kj-gold)' }} className="underline underline-offset-2">
            Anfrage per E-Mail senden
          </a>
          {' '}oder rufen Sie uns an: <a href="tel:+4917663284312" style={{ color: 'var(--kj-gold)' }}>0176 63284312</a>
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
            autoComplete="name"
          />
          {errors.name && (
            <p className="font-sans text-xs mt-1.5" style={{ color: '#e05252' }}>{errors.name.message}</p>
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
            autoComplete="email"
          />
          {errors.email && (
            <p className="font-sans text-xs mt-1.5" style={{ color: '#e05252' }}>{errors.email.message}</p>
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
            autoComplete="tel"
          />
        </div>

        {/* Standort */}
        <div>
          <label style={labelStyle}>Standort *</label>
          <select
            {...register('standort', { required: 'Bitte wählen Sie einen Standort.' })}
            className="input-dark"
            style={{ background: 'var(--kj-card)', color: 'var(--kj-text)' }}
            defaultValue=""
          >
            <option value="" disabled>Bitte wählen …</option>
            {standorte.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
          {errors.standort && (
            <p className="font-sans text-xs mt-1.5" style={{ color: '#e05252' }}>{errors.standort.message}</p>
          )}
        </div>

        {/* Category */}
        <div>
          <label style={labelStyle}>Anliegen *</label>
          <select
            {...register('category', { required: 'Bitte wählen Sie eine Kategorie.' })}
            className="input-dark"
            style={{ background: 'var(--kj-card)', color: 'var(--kj-text)' }}
            defaultValue=""
          >
            <option value="" disabled>Bitte wählen …</option>
            {categories.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
          {errors.category && (
            <p className="font-sans text-xs mt-1.5" style={{ color: '#e05252' }}>{errors.category.message}</p>
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
            <p className="font-sans text-xs mt-1.5" style={{ color: '#e05252' }}>{errors.date.message}</p>
          )}
        </div>

        {/* Time */}
        <div>
          <label style={labelStyle}>Wunschzeit *</label>
          <select
            {...register('time', { required: 'Bitte wählen Sie eine Uhrzeit.' })}
            className="input-dark"
            style={{ background: 'var(--kj-card)', color: 'var(--kj-text)' }}
            defaultValue=""
          >
            <option value="" disabled>Bitte wählen …</option>
            {times.map((t) => (
              <option key={t} value={t}>{t} Uhr</option>
            ))}
          </select>
          {errors.time && (
            <p className="font-sans text-xs mt-1.5" style={{ color: '#e05252' }}>{errors.time.message}</p>
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
        <button type="submit" className="btn-gold" style={{ minWidth: '200px' }}>
          Termin anfragen
        </button>
        <p className="font-sans text-xs" style={{ color: 'var(--kj-muted)' }}>
          * Pflichtfelder — Ihre Anfrage wird per WhatsApp übermittelt.<br />
          Alternativ:{' '}
          <a
            href={`mailto:info@kenju-juwelier.de?subject=${encodeURIComponent('Terminanfrage – KenJu Juwelier')}`}
            style={{ color: 'var(--kj-gold)' }}
            onClick={(e) => {
              const v = getValues();
              if (v.name || v.message) {
                e.preventDefault();
                window.location.href = `mailto:info@kenju-juwelier.de?subject=${encodeURIComponent('Terminanfrage – KenJu Juwelier')}&body=${encodeURIComponent(buildMessage(v))}`;
              }
            }}
          >
            per E-Mail anfragen
          </a>
        </p>
      </div>
    </form>
  );
}
