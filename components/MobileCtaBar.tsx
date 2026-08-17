'use client';

import { useState } from 'react';
import Link from 'next/link';
import { standorte } from '@/lib/standorte';

export default function MobileCtaBar() {
  const [showPhones, setShowPhones] = useState(false);

  return (
    <>
      {/* Standort-Auswahl beim Anrufen */}
      {showPhones && (
        <div
          className="fixed inset-0 z-50 flex items-end lg:hidden"
          style={{ background: 'rgba(0,0,0,0.6)' }}
          onClick={() => setShowPhones(false)}
          role="dialog"
          aria-label="Standort für Anruf wählen"
        >
          <div
            className="w-full pb-20"
            style={{ background: 'var(--kj-bg)', borderTop: '1px solid var(--kj-border)' }}
            onClick={(e) => e.stopPropagation()}
          >
            <p className="font-sans text-xs tracking-widest uppercase text-center pt-5 pb-3" style={{ color: 'var(--kj-gold)' }}>
              Welchen Standort möchten Sie anrufen?
            </p>
            {standorte.map((s) => (
              <a
                key={s.id}
                href={s.telefon.href}
                className="flex items-center justify-between px-6 py-4 active:opacity-70"
                style={{ borderTop: '1px solid var(--kj-border)' }}
              >
                <span>
                  <span className="font-serif text-lg block" style={{ color: 'var(--kj-text)' }}>{s.stadt}</span>
                  <span className="font-sans text-xs" style={{ color: 'var(--kj-muted)' }}>{s.zeitenKurz}</span>
                </span>
                <span className="font-sans text-sm" style={{ color: 'var(--kj-gold)' }}>{s.telefon.label}</span>
              </a>
            ))}
            <button
              onClick={() => setShowPhones(false)}
              className="w-full py-4 font-sans text-xs tracking-widest uppercase"
              style={{ color: 'var(--kj-muted)', borderTop: '1px solid var(--kj-border)' }}
            >
              Abbrechen
            </button>
          </div>
        </div>
      )}

      <div
        className="fixed bottom-0 left-0 right-0 z-50 flex lg:hidden"
        style={{
          background: 'var(--kj-bg)',
          borderTop: '1px solid var(--kj-border)',
          boxShadow: '0 -4px 24px rgba(0,0,0,0.08)',
        }}
      >
        {/* Anrufen – öffnet Standort-Auswahl */}
        <button
          onClick={() => setShowPhones(true)}
          className="flex-1 flex flex-col items-center justify-center gap-1 py-3.5 transition-all active:opacity-70"
          style={{ borderRight: '1px solid var(--kj-border)' }}
          aria-label="Anrufen – Standort wählen"
        >
          <svg
            width="19" height="19" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
            style={{ color: 'var(--kj-gold)' }}
          >
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6.16 6.16l.95-.95a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
          </svg>
          <span className="font-sans text-xs tracking-wide" style={{ color: 'var(--kj-gold)' }}>
            Anrufen
          </span>
        </button>

        {/* Termin buchen */}
        <Link
          href="/#termin"
          className="flex-1 flex flex-col items-center justify-center gap-1 py-3.5 transition-all active:opacity-80"
          aria-label="Termin buchen"
          style={{
            background: 'linear-gradient(135deg, var(--kj-gold) 0%, var(--kj-gold-light) 50%, var(--kj-gold-dark) 100%)',
          }}
        >
          <svg
            width="19" height="19" viewBox="0 0 24 24" fill="none"
            stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
          >
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
            <line x1="16" y1="2" x2="16" y2="6"/>
            <line x1="8" y1="2" x2="8" y2="6"/>
            <line x1="3" y1="10" x2="21" y2="10"/>
          </svg>
          <span className="font-sans text-xs tracking-wide text-white font-medium">
            Termin buchen
          </span>
        </Link>
      </div>
    </>
  );
}
