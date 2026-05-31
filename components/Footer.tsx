import Link from 'next/link';

const categories = [
  { label: 'Ringe & Brillantringe', href: '/ringe' },
  { label: 'Trauringe',             href: '/trauringe' },
  { label: 'Ohrringe',              href: '/ohrringe' },
  { label: 'Halsketten & Kreuze',   href: '/halsketten' },
  { label: 'Armreifen',             href: '/armreifen' },
  { label: 'Uhren',                 href: '/uhren' },
  { label: 'Goldankauf',            href: '/goldankauf' },
];

const legal = [
  { label: 'Impressum',   href: '/impressum' },
  { label: 'Datenschutz', href: '/datenschutz' },
  { label: 'AGB',         href: '/agb' },
];

export default function Footer() {
  return (
    <footer
      className="pt-20 pb-10"
      style={{
        backgroundColor: 'var(--kj-surface)',
        borderTop: '2px solid var(--kj-border)',
      }}
    >
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">

          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="inline-flex flex-col leading-none mb-5">
              <span className="font-serif text-5xl font-light gold-text tracking-widest">KenJu</span>
              <span className="font-sans text-[10px] tracking-[0.4em] uppercase mt-1.5" style={{ color: 'var(--kj-muted)' }}>
                Juwelier · Bielefeld
              </span>
            </Link>
            <p className="font-sans text-sm leading-relaxed mt-3" style={{ color: 'var(--kj-muted)' }}>
              Meisterbetrieb für exklusiven Schmuck, Brillantringe, Labor Diamanten und fairen Goldankauf in Bielefeld.
            </p>
            {/* Social links */}
            <div className="flex gap-3 mt-5">
              <a
                href="https://www.instagram.com/juwelier_kenju/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="KenJu Juwelier auf Instagram"
                className="w-8 h-8 flex items-center justify-center transition-colors"
                style={{ border: '1px solid var(--kj-border)' }}
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" style={{ color: 'var(--kj-muted)' }}>
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
              </a>
              <a
                href="https://www.facebook.com/people/Juwelier-KenJu-Bielefeld/100029105127054/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="KenJu Juwelier auf Facebook"
                className="w-8 h-8 flex items-center justify-center transition-colors"
                style={{ border: '1px solid var(--kj-border)' }}
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" style={{ color: 'var(--kj-muted)' }}>
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Categories */}
          <div>
            <h3 className="font-sans text-xs tracking-widest uppercase mb-5" style={{ color: 'var(--kj-gold)' }}>
              Kollektionen
            </h3>
            <ul className="space-y-2.5">
              {categories.map((c) => (
                <li key={c.href}>
                  <Link
                    href={c.href}
                    className="font-sans text-sm transition-colors"
                    style={{ color: 'var(--kj-muted)' }}
                  >
                    {c.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-sans text-xs tracking-widest uppercase mb-5" style={{ color: 'var(--kj-gold)' }}>
              Kontakt
            </h3>
            <ul className="space-y-4 font-sans text-sm" style={{ color: 'var(--kj-muted)' }}>
              <li className="font-medium" style={{ color: 'var(--kj-text)' }}>
                Bahnhofstraße 28<br />33602 Bielefeld
              </li>
              <li>
                <a href="tel:+4917663284312" className="transition-opacity hover:opacity-80 font-medium" style={{ color: 'var(--kj-text)' }}>
                  +49 176 63284312
                </a>
              </li>
              <li>
                <a href="mailto:info@kenju-juwelier.de" className="transition-opacity hover:opacity-80">
                  info@kenju-juwelier.de
                </a>
              </li>
              <li style={{ opacity: 0.75 }}>
                Mo–Fr: 10:00–18:30<br />
                Sa: 10:00–16:00
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-sans text-xs tracking-widest uppercase mb-5" style={{ color: 'var(--kj-gold)' }}>
              Rechtliches
            </h3>
            <ul className="space-y-2.5">
              {legal.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="font-sans text-sm transition-colors"
                    style={{ color: 'var(--kj-muted)' }}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="pt-10 flex flex-col md:flex-row items-center justify-between gap-4"
          style={{ borderTop: '1px solid var(--kj-border)' }}
        >
          <p className="font-sans text-xs" style={{ color: 'var(--kj-muted)' }}>
            © {new Date().getFullYear()} KenJu Juwelier. Alle Rechte vorbehalten.
          </p>
          <p className="font-sans text-xs" style={{ color: 'var(--kj-muted)' }}>
            Meisterbetrieb · Zertifizierter Goldankauf · Bielefeld
          </p>
        </div>
        {/* Agency signature */}
        <div className="mt-7 mb-1 flex justify-center">
          <a
            href="https://www.kundenpilot.site/"
            target="_blank"
            rel="noopener noreferrer"
            className="agency-link inline-flex items-center gap-1.5"
            aria-label="Website erstellt von KundenPilot"
          >
            <span
              className="agency-by font-sans transition-opacity duration-200"
              style={{ fontSize: '0.69rem', color: 'var(--kj-muted)', opacity: 0.55, letterSpacing: '0.05em' }}
            >
              Website by
            </span>
            <span
              className="agency-label font-sans font-semibold relative transition-opacity duration-200"
              style={{ fontSize: '0.78rem', color: 'var(--kj-text)', opacity: 0.75, letterSpacing: '0.01em' }}
            >
              KundenPilot
              <span className="agency-underline" />
            </span>
            {/* Tiny external-link icon */}
            <svg
              className="agency-icon transition-opacity duration-200"
              width="9" height="9" viewBox="0 0 12 12" fill="none"
              stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"
              style={{ color: 'var(--kj-muted)', opacity: 0.4 }}
              aria-hidden="true"
            >
              <path d="M5 2H2a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V7"/>
              <polyline points="8 1 11 1 11 4"/>
              <line x1="5" y1="7" x2="11" y2="1"/>
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
