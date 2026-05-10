'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const nav = [
  { label: 'Ringe',       href: '/ringe' },
  { label: 'Trauringe',   href: '/trauringe' },
  { label: 'Ohrringe',    href: '/ohrringe' },
  { label: 'Halsketten',  href: '/halsketten' },
  { label: 'Armreifen',   href: '/armreifen' },
  { label: 'Uhren',       href: '/uhren' },
  { label: 'Goldankauf',  href: '/goldankauf' },
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
        scrolled
          ? 'bg-kenju-black/95 backdrop-blur-sm border-b border-kenju-border'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex flex-col leading-none group">
            <span className="font-serif text-3xl font-light gold-text tracking-widest">KenJu</span>
            <span className="font-sans text-[9px] tracking-[0.4em] uppercase text-kenju-muted mt-0.5 group-hover:text-kenju-gold transition-colors">
              Juwelier
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-7">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="font-sans text-xs tracking-widest uppercase text-kenju-muted hover:text-kenju-gold transition-colors duration-300"
              >
                {item.label}
              </Link>
            ))}
            <Link href="/#termin" className="btn-gold text-xs ml-4">
              Termin buchen
            </Link>
          </nav>

          {/* Mobile burger */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden flex flex-col gap-1.5 p-2"
            aria-label="Menü öffnen"
          >
            <span className={`block w-6 h-0.5 bg-kenju-gold transition-all duration-300 ${open ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-6 h-0.5 bg-kenju-gold transition-all duration-300 ${open ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-0.5 bg-kenju-gold transition-all duration-300 ${open ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden ${
          open ? 'max-h-screen border-t border-kenju-border' : 'max-h-0'
        } bg-kenju-black/98 backdrop-blur-sm`}
      >
        <nav className="px-6 py-6 flex flex-col gap-4">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="font-sans text-sm tracking-widest uppercase text-kenju-muted hover:text-kenju-gold transition-colors py-2 border-b border-kenju-border"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/#termin"
            onClick={() => setOpen(false)}
            className="btn-gold mt-2 text-center"
          >
            Termin buchen
          </Link>
        </nav>
      </div>
    </header>
  );
}
