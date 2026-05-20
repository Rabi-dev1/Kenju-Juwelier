'use client';

import { useState } from 'react';

const PHONE  = 'tel:+4917663284312';
const EMAIL  = 'mailto:info@kenju-juwelier.de';
const MAPS   = 'https://maps.google.com/?q=Bahnhofstraße+28,+33602+Bielefeld';
const IG_URL = 'https://www.instagram.com/juwelier_kenju/';

const buttons = [
  {
    id: 'phone',
    href: PHONE,
    label: '+49 176 63284312',
    external: false,
    color: undefined,
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6.16 6.16l.95-.95a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
      </svg>
    ),
  },
  {
    id: 'email',
    href: EMAIL,
    label: 'info@kenju-juwelier.de',
    external: false,
    color: undefined,
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
        <polyline points="22,6 12,13 2,6"/>
      </svg>
    ),
  },
  {
    id: 'maps',
    href: MAPS,
    label: 'Bahnhofstraße 28',
    external: true,
    color: undefined,
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
        <circle cx="12" cy="10" r="3"/>
      </svg>
    ),
  },
  {
    id: 'instagram',
    href: IG_URL,
    label: '@juwelier_kenju',
    external: true,
    color: undefined,
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
      </svg>
    ),
  },
];

export default function FloatingButtons() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <div
      className="fixed right-0 top-1/2 -translate-y-1/2 z-40 flex flex-col hidden lg:flex"
      role="navigation"
      aria-label="Schnellkontakt"
    >
      {buttons.map((btn) => {
        const isHovered = hovered === btn.id;
        return (
          <a
            key={btn.id}
            href={btn.href}
            target={btn.external ? '_blank' : undefined}
            rel={btn.external ? 'noopener noreferrer' : undefined}
            aria-label={btn.label}
            title={btn.label}
            onMouseEnter={() => setHovered(btn.id)}
            onMouseLeave={() => setHovered(null)}
            className="relative flex items-center justify-center w-10 h-10 transition-all duration-200 hover:-translate-x-0.5"
            style={{
              background: isHovered ? 'var(--kj-gold)' : 'var(--kj-card)',
              color: isHovered ? '#fff' : 'var(--kj-muted)',
              borderLeft: '1px solid var(--kj-border)',
              borderTop: '1px solid var(--kj-border)',
              borderBottom: '1px solid var(--kj-border)',
            }}
          >
            {btn.icon}
            {isHovered && (
              <span
                className="absolute right-11 whitespace-nowrap text-xs px-2.5 py-1.5 pointer-events-none shadow-md font-sans"
                style={{ background: 'var(--kj-text)', color: 'var(--kj-bg)' }}
              >
                {btn.label}
              </span>
            )}
          </a>
        );
      })}
    </div>
  );
}
