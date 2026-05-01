import Link from 'next/link';

const categories = [
  { label: 'Kreuze',        href: '/kreuze' },
  { label: 'Ringe',         href: '/ringe' },
  { label: 'Ohrstecker',    href: '/ohrstecker' },
  { label: 'Creolen',       href: '/creolen' },
  { label: 'Armreifen',     href: '/armreifen' },
  { label: 'Halsketten',    href: '/halsketten' },
  { label: 'Brillantringe', href: '/brillantringe' },
  { label: 'Goldankauf',    href: '/goldankauf' },
];

const legal = [
  { label: 'Impressum',    href: '/impressum' },
  { label: 'Datenschutz',  href: '/datenschutz' },
  { label: 'AGB',          href: '/agb' },
];

export default function Footer() {
  return (
    <footer className="bg-kenju-black border-t border-kenju-border pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="inline-flex flex-col leading-none mb-4">
              <span className="font-serif text-4xl font-light gold-text tracking-widest">KenJu</span>
              <span className="font-sans text-[9px] tracking-[0.4em] uppercase text-kenju-muted mt-1">Juwelier</span>
            </Link>
            <p className="font-sans text-sm text-kenju-muted leading-relaxed mt-4">
              Exklusiver Juwelier für Schmuck, Brillantringe und Goldankauf. Qualität, die überzeugt.
            </p>
          </div>

          {/* Categories */}
          <div>
            <h3 className="font-sans text-xs tracking-widest uppercase text-kenju-gold mb-5">Kollektionen</h3>
            <ul className="space-y-2.5">
              {categories.map((c) => (
                <li key={c.href}>
                  <Link
                    href={c.href}
                    className="font-sans text-sm text-kenju-muted hover:text-kenju-gold transition-colors"
                  >
                    {c.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-sans text-xs tracking-widest uppercase text-kenju-gold mb-5">Kontakt</h3>
            <ul className="space-y-3 font-sans text-sm text-kenju-muted">
              <li>Musterstraße 12<br />10115 Berlin</li>
              <li>
                <a href="tel:+49301234567" className="hover:text-kenju-gold transition-colors">
                  +49 30 123 456 7
                </a>
              </li>
              <li>
                <a href="mailto:info@kenju-juwelier.de" className="hover:text-kenju-gold transition-colors">
                  info@kenju-juwelier.de
                </a>
              </li>
              <li className="text-kenju-muted/70">
                Mo–Fr: 10:00–18:30<br />
                Sa: 10:00–16:00
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-sans text-xs tracking-widest uppercase text-kenju-gold mb-5">Rechtliches</h3>
            <ul className="space-y-2.5">
              {legal.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="font-sans text-sm text-kenju-muted hover:text-kenju-gold transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-kenju-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-sans text-xs text-kenju-muted">
            © {new Date().getFullYear()} KenJu Juwelier. Alle Rechte vorbehalten.
          </p>
          <p className="font-sans text-xs text-kenju-muted">
            Meisterbetrieb · Zertifizierter Goldankauf · Berlin
          </p>
        </div>
      </div>
    </footer>
  );
}
