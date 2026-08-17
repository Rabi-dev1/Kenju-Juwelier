'use client';

import { useState } from 'react';
import { standorte, EMAIL } from '@/lib/standorte';

const PhoneIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6.16 6.16l.95-.95a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
  </svg>
);

const buttons = [
  {
    id: 'phone-bielefeld',
    href: standorte[0].telefon.href,
    label: `Bielefeld: ${standorte[0].telefon.label}`,
    external: false,
    badge: 'BI',
    icon: <PhoneIcon />,
  },
  {
    id: 'phone-lippstadt',
    href: standorte[1].telefon.href,
    label: `Lippstadt: ${standorte[1].telefon.label}`,
    external: false,
    badge: 'LP',
    icon: <PhoneIcon />,
  },
  {
    id: 'maps',
    href: standorte[0].maps,
    label: 'Loom Bielefeld · 1. OG',
    external: true,
    badge: null,
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
        <circle cx="12" cy="10" r="3"/>
      </svg>
    ),
  },
  {
    id: 'email',
    href: `mailto:${EMAIL}`,
    label: EMAIL,
    external: false,
    badge: null,
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
        <polyline points="22,6 12,13 2,6"/>
      </svg>
    ),
  },
];

export default function FloatingButtons() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <div
      className="fixed right-0 top-1/2 -translate-y-1/2 z-40 flex-col hidden lg:flex"
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
            {/* Standort-Kürzel, damit die beiden Telefonnummern unterscheidbar sind */}
            {btn.badge && (
              <span
                className="absolute bottom-0.5 right-1 font-sans"
                style={{ fontSize: '0.5rem', letterSpacing: '0.02em', color: isHovered ? '#fff' : 'var(--kj-gold)' }}
              >
                {btn.badge}
              </span>
            )}
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
