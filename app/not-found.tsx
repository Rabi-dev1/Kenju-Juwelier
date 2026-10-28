import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Seite nicht gefunden',
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <section className="flex items-center justify-center px-4 pt-40 pb-28" style={{ backgroundColor: 'var(--kj-bg)', minHeight: '70vh' }}>
      <div className="text-center max-w-lg">
        <p className="section-subtitle mb-4">Fehler 404</p>
        <h1 className="font-serif font-light mb-4" style={{ fontSize: 'clamp(2rem, 6vw, 3.4rem)', color: 'var(--kj-text)' }}>
          Diese Seite gibt es nicht.
        </h1>
        <div className="divider-gold mx-auto mb-6" />
        <p className="font-sans text-base leading-relaxed mb-9" style={{ color: 'var(--kj-muted)' }}>
          Der Link ist veraltet oder die Adresse wurde falsch eingegeben. Hier geht es weiter:
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="/" className="btn-gold">Zur Startseite</Link>
          <Link href="/goldankauf" className="btn-outline-gold">Goldankauf</Link>
        </div>
      </div>
    </section>
  );
}
