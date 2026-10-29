import type { Metadata } from 'next';
import { standorte, EMAIL } from '@/lib/standorte';

export const metadata: Metadata = {
  title: 'Impressum',
  robots: { index: false },
};

export default function ImpressumPage() {
  return (
    <div className="min-h-screen pt-32 pb-24" style={{ backgroundColor: 'var(--kj-bg)' }}>
      <div className="max-w-3xl mx-auto px-6 sm:px-8 lg:px-8">
        <p className="section-subtitle mb-3">Rechtliches</p>
        <h1
          className="font-serif font-light mb-4"
          style={{ color: 'var(--kj-text)', fontSize: 'clamp(2rem, 6vw, 3rem)', lineHeight: 1.15 }}
        >
          Impressum
        </h1>
        <div className="divider-gold mb-10" style={{ marginLeft: 0 }} />

        <div className="space-y-8 font-sans text-sm leading-relaxed" style={{ color: 'var(--kj-muted)' }}>

          <section>
            <h2 className="font-serif text-2xl mb-3" style={{ color: 'var(--kj-text)' }}>
              Angaben gemäß § 5 DDG
            </h2>
            <p>
              <strong style={{ color: 'var(--kj-text)' }}>Juwelier KenJu</strong><br />
              Inhaber: Kenan Gülünay<br />
              Juwelier &amp; Schmuckhandel<br />
              Bahnhofstraße 28 (Loom, 1. OG)<br />
              33602 Bielefeld<br />
              Deutschland
            </p>
            <p className="mt-4">
              <strong style={{ color: 'var(--kj-text)' }}>Zweigstelle Lippstadt</strong><br />
              Lange Straße 29<br />
              59555 Lippstadt
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl mb-3" style={{ color: 'var(--kj-text)' }}>Kontakt</h2>
            {standorte.map((s) => (
              <p key={s.id} className={s.id === 'lippstadt' ? 'mt-4' : undefined}>
                <strong style={{ color: 'var(--kj-text)' }}>{s.stadt}</strong><br />
                {s.nummern.map((n) => (
                  <span key={n.href}>
                    {n.typ}:{' '}
                    <a href={n.href} style={{ color: 'var(--kj-gold)' }} className="hover:underline">
                      {n.label}
                    </a>
                    <br />
                  </span>
                ))}
              </p>
            ))}
            <p className="mt-4">
              E-Mail:{' '}
              <a href={`mailto:${EMAIL}`} style={{ color: 'var(--kj-gold)' }} className="hover:underline">
                {EMAIL}
              </a>
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl mb-3" style={{ color: 'var(--kj-text)' }}>Öffnungszeiten</h2>
            {standorte.map((s) => (
              <p key={s.id}>
                <strong style={{ color: 'var(--kj-text)' }}>{s.stadt}:</strong> {s.zeitenKurz}
              </p>
            ))}
          </section>

          <section>
            <h2 className="font-serif text-2xl mb-3" style={{ color: 'var(--kj-text)' }}>Umsatzsteuer-ID</h2>
            <p>
              Umsatzsteuer-Identifikationsnummer gemäß § 27a UStG:<br />
              <strong style={{ color: 'var(--kj-text)' }}>DE297979670</strong>
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl mb-3" style={{ color: 'var(--kj-text)' }}>
              Verantwortlich für den Inhalt
            </h2>
            <p>
              Gemäß § 18 Abs. 2 MStV:<br />
              Kenan Gülünay, Bahnhofstraße 28, 33602 Bielefeld
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl mb-3" style={{ color: 'var(--kj-text)' }}>
              Verbraucherstreitbeilegung / Universalschlichtungsstelle
            </h2>
            <p>
              Wir sind nicht bereit und nicht verpflichtet, an Streitbeilegungsverfahren vor einer
              Verbraucherschlichtungsstelle teilzunehmen (§ 36 VSBG).
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl mb-3" style={{ color: 'var(--kj-text)' }}>Urheberrecht</h2>
            <p>
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen
              Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der
              Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
