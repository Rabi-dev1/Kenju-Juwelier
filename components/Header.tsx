'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import ThemeToggle from './ThemeToggle';

const nav = [
  { label: 'Schmuck',         href: '/ringe' },
  { label: 'Diamantschmuck / Labor Diamanten', href: '/labordiamanten' },
  { label: 'Trauringe & Verlobungsringe', href: '/trauringe' },
  { label: 'Uhren',           href: '/uhren' },
  { label: 'Goldankauf',      href: '/goldankauf' },
  { label: 'Service',         href: '/service' },
  { label: 'Kontakt',         href: '/#termin' },
];

/* Seiten mit dauerhaft dunklem Hero: dort ist die Navigation oben hell */
const darkHeroRoutes = ['/', '/ringe', '/trauringe', '/uhren', '/goldankauf', '/service', '/labordiamanten'];

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled]   = useState(false);
  const [open, setOpen]           = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    handler();
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const lightOnHero = !scrolled && darkHeroRoutes.includes(pathname);
  const linkColor = lightOnHero ? 'rgba(245,240,232,0.88)' : 'var(--kj-muted)';
  const isActive = (href: string) => href !== '/#termin' && pathname === href;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'shadow-sm' : ''}`}
      style={{
        backgroundColor: scrolled ? 'var(--kj-bg)' : 'transparent',
        borderBottom: scrolled ? '1px solid var(--kj-border)' : 'none',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
      }}
    >
      <div className="max-w-[1680px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-6 h-20">

          {/* Logo */}
          <Link href="/" className="flex flex-col leading-none group shrink-0">
            <span className="font-serif text-3xl font-light tracking-widest transition-colors" style={{ color: 'var(--kj-gold)', paddingRight: '0.12em' }}>
              KenJu
            </span>
            <span className="font-sans text-[8px] tracking-[0.45em] uppercase mt-0.5 transition-colors" style={{ color: lightOnHero ? 'rgba(245,240,232,0.7)' : 'var(--kj-muted)' }}>
              Bielefeld · Lippstadt
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden min-[1460px]:flex items-center gap-4 2xl:gap-5">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="font-sans text-xs tracking-wider 2xl:tracking-widest uppercase whitespace-nowrap transition-colors duration-200 relative group/link"
                aria-current={isActive(item.href) ? 'page' : undefined}
                style={{ color: isActive(item.href) ? 'var(--kj-gold)' : linkColor }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--kj-gold)')}
                onMouseLeave={e => (e.currentTarget.style.color = isActive(item.href) ? 'var(--kj-gold)' : linkColor)}
              >
                {item.label}
              </Link>
            ))}

            <div className="flex items-center gap-3 ml-2 pl-6" style={{ borderLeft: '1px solid var(--kj-border)' }}>
              <ThemeToggle />
              <Link href="/#termin" className="btn-gold text-xs px-5 py-2.5 whitespace-nowrap">
                Termin buchen
              </Link>
            </div>
          </nav>

          {/* Mobile: theme toggle + burger */}
          <div className="min-[1460px]:hidden flex items-center gap-3">
            <ThemeToggle />
            <button
              onClick={() => setOpen(!open)}
              className="flex flex-col gap-1.5 p-2"
              aria-label={open ? 'Menü schließen' : 'Menü öffnen'}
              aria-expanded={open}
            >
              <span
                className="block w-6 h-0.5 transition-all duration-300"
                style={{ backgroundColor: 'var(--kj-gold)', transform: open ? 'rotate(45deg) translate(4px, 4px)' : '' }}
              />
              <span
                className="block w-6 h-0.5 transition-all duration-300"
                style={{ backgroundColor: 'var(--kj-gold)', opacity: open ? 0 : 1 }}
              />
              <span
                className="block w-6 h-0.5 transition-all duration-300"
                style={{ backgroundColor: 'var(--kj-gold)', transform: open ? 'rotate(-45deg) translate(4px, -4px)' : '' }}
              />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className="min-[1460px]:hidden overflow-hidden transition-all duration-300"
        style={{
          maxHeight: open ? '600px' : '0',
          borderTop: open ? '1px solid var(--kj-border)' : 'none',
          backgroundColor: 'var(--kj-bg)',
        }}
      >
        <nav className="px-6 py-6 flex flex-col gap-1">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="font-sans text-sm tracking-widest uppercase py-3 transition-colors"
              aria-current={isActive(item.href) ? 'page' : undefined}
              style={{ color: isActive(item.href) ? 'var(--kj-gold)' : 'var(--kj-muted)', borderBottom: '1px solid var(--kj-border)' }}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/#termin"
            onClick={() => setOpen(false)}
            className="btn-gold mt-4 text-center text-xs"
          >
            Termin buchen
          </Link>
        </nav>
      </div>
    </header>
  );
}
