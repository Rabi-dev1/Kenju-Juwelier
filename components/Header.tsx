'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import ThemeToggle from './ThemeToggle';

const nav = [
  { label: 'Schmuck',         href: '/ringe' },
  { label: 'Trauringe',       href: '/trauringe' },
  { label: 'Uhren',           href: '/uhren' },
  { label: 'Goldankauf',      href: '/goldankauf' },
  { label: 'Service',         href: '/service' },
  { label: 'Labor Diamanten', href: '/labordiamanten' },
  { label: 'Kontakt',         href: '/#termin' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen]         = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'shadow-sm' : ''
      }`}
      style={{
        backgroundColor: scrolled
          ? 'var(--kj-bg)'
          : 'transparent',
        borderBottom: scrolled ? '1px solid var(--kj-border)' : 'none',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <Link href="/" className="flex flex-col leading-none group shrink-0">
            <span
              className="font-serif text-3xl font-light tracking-widest transition-colors"
              style={{ color: 'var(--kj-gold)' }}
            >
              KenJu
            </span>
            <span
              className="font-sans text-[9px] tracking-[0.4em] uppercase mt-0.5 transition-colors"
              style={{ color: 'var(--kj-muted)' }}
            >
              Juwelier
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-6">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="font-sans text-xs tracking-widest uppercase transition-colors duration-200"
                style={{ color: 'var(--kj-muted)' }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--kj-gold)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'var(--kj-muted)')}
              >
                {item.label}
              </Link>
            ))}

            <div className="flex items-center gap-3 ml-2">
              <ThemeToggle />
              <Link href="/#termin" className="btn-gold text-xs px-5 py-2.5">
                Termin buchen
              </Link>
            </div>
          </nav>

          {/* Mobile: theme toggle + burger */}
          <div className="lg:hidden flex items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setOpen(!open)}
              className="flex flex-col gap-1.5 p-2"
              aria-label="Menü öffnen"
            >
              <span
                className="block w-6 h-0.5 transition-all duration-300"
                style={{
                  backgroundColor: 'var(--kj-gold)',
                  transform: open ? 'rotate(45deg) translate(4px, 4px)' : '',
                }}
              />
              <span
                className="block w-6 h-0.5 transition-all duration-300"
                style={{
                  backgroundColor: 'var(--kj-gold)',
                  opacity: open ? 0 : 1,
                }}
              />
              <span
                className="block w-6 h-0.5 transition-all duration-300"
                style={{
                  backgroundColor: 'var(--kj-gold)',
                  transform: open ? 'rotate(-45deg) translate(4px, -4px)' : '',
                }}
              />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className="lg:hidden overflow-hidden transition-all duration-300"
        style={{
          maxHeight: open ? '600px' : '0',
          borderTop: open ? '1px solid var(--kj-border)' : 'none',
          backgroundColor: 'var(--kj-bg)',
        }}
      >
        <nav className="px-6 py-6 flex flex-col gap-4">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="font-sans text-sm tracking-widest uppercase py-2 transition-colors"
              style={{ color: 'var(--kj-muted)', borderBottom: '1px solid var(--kj-border)' }}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/#termin"
            onClick={() => setOpen(false)}
            className="btn-gold mt-2 text-center text-xs"
          >
            Termin buchen
          </Link>
        </nav>
      </div>
    </header>
  );
}
