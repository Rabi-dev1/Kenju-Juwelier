import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import CategoryHero from '@/components/CategoryHero';
import AppointmentForm from '@/components/AppointmentForm';

export const metadata: Metadata = {
  title: 'Uhren in Bielefeld – Tommy Hilfiger, Hugo Boss & mehr | KenJu Juwelier',
  description: 'Markenuhren bei KenJu Juwelier Bielefeld: Tommy Hilfiger, Hugo Boss, Police, Regent und Swiss Military. Persönliche Beratung vor Ort.',
  keywords: ['Uhren Bielefeld', 'Tommy Hilfiger Uhren', 'Hugo Boss Uhren', 'Police Uhren', 'Juwelier Bielefeld'],
  alternates: { canonical: 'https://kenju-juwelier.de/uhren' },
};

const brands = [
  {
    name: 'Tommy Hilfiger',
    desc: 'Moderne Designuhren für Alltag und Business.',
    tags: ['Elegant', 'Alltag', 'Modern'],
  },
  {
    name: 'Hugo Boss',
    desc: 'Reduziertes, elegantes Design mit Präzisionsuhrwerk.',
    tags: ['Premium', 'Business', 'Elegant'],
  },
  {
    name: 'Police',
    desc: 'Urbane Uhren mit starkem Charakter und italienischem Stil.',
    tags: ['Urban', 'Statement', 'Trendy'],
  },
  {
    name: 'Regent',
    desc: 'Klassische Eleganz für Damen und Herren zum fairen Preis.',
    tags: ['Klassisch', 'Damen & Herren', 'Alltagstauglich'],
  },
  {
    name: 'Swiss Military',
    desc: 'Schweizer Präzision – robust, wasserdicht, zuverlässig.',
    tags: ['Robust', 'Swiss Made', 'Wasserdicht'],
  },
];

const services = [
  { icon: '⟳', title: 'Batteriewechsel', desc: 'Noch am selben Tag, wasserdicht abgedichtet.' },
  { icon: '◇', title: 'Glaswechsel',     desc: 'Mineral- und Saphirglas für alle Modelle.' },
  { icon: '↔', title: 'Armbandservice',  desc: 'Kürzen, verlängern oder austauschen.' },
];

export default function UhrenPage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────── */}
      <section
        className="relative flex items-end pb-16 pt-36 overflow-hidden"
        style={{ background: '#0F0D0A', minHeight: '65vh' }}
      >
        <div className="absolute inset-0">
          <Image
            src="/images/uhrhero.jpg"
            alt="Markenuhren KenJu Juwelier Bielefeld"
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
          <div className="absolute inset-0" style={{ background: 'rgba(0,0,0,0.48)' }} />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <nav className="flex items-center gap-2 font-sans text-xs mb-8 tracking-widest uppercase" style={{ color: 'rgba(245,240,232,0.45)' }}>
            <Link href="/" style={{ color: 'rgba(245,240,232,0.45)' }} className="hover:opacity-80 transition-opacity">Startseite</Link>
            <span style={{ opacity: 0.4 }}>›</span>
            <span style={{ color: 'var(--kj-gold)' }}>Uhren</span>
          </nav>
          <h1 className="font-serif text-6xl md:text-8xl font-light mb-5 text-white" style={{ lineHeight: 1.05 }}>
            Uhren in Bielefeld
          </h1>
          <div className="divider-gold mb-5" />
          <p className="font-sans text-lg max-w-xl leading-relaxed mb-8" style={{ color: 'rgba(245,240,232,0.65)' }}>
            Markenuhren von Tommy Hilfiger, Hugo Boss, Police, Regent und Swiss Military.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link href="#termin" className="btn-gold" style={{ fontSize: '0.75rem', letterSpacing: '0.14em', padding: '1rem 2.5rem' }}>
              Beratung vereinbaren
            </Link>
            <a href="tel:+4917663284312" className="btn-outline-gold" style={{ fontSize: '0.75rem', letterSpacing: '0.14em', padding: '1rem 2.5rem', borderColor: 'rgba(255,255,255,0.3)', color: 'rgba(255,255,255,0.8)' }}>
              Jetzt anrufen
            </a>
          </div>
        </div>
      </section>

      {/* ── MARKEN ───────────────────────────────────────── */}
      <section className="py-28" style={{ backgroundColor: 'var(--kj-surface)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="section-subtitle mb-4">Unsere Markenpartner</p>
            <h2 className="section-title mb-4">Qualität, die man spürt</h2>
            <div className="divider-gold mx-auto" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {brands.map((brand) => (
              <div
                key={brand.name}
                className="p-7 flex flex-col gap-4 transition-all duration-300 hover:-translate-y-0.5"
                style={{ background: 'var(--kj-card)', border: '1px solid var(--kj-border)' }}
              >
                <h3 className="font-serif text-2xl font-light" style={{ color: 'var(--kj-text)' }}>
                  {brand.name}
                </h3>
                <p className="font-sans text-sm leading-relaxed" style={{ color: 'var(--kj-muted)' }}>
                  {brand.desc}
                </p>
                <div className="flex flex-wrap gap-2 pt-3" style={{ borderTop: '1px solid var(--kj-border)' }}>
                  {brand.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-sans text-xs px-3 py-1.5 tracking-wide"
                      style={{ background: 'var(--kj-surface)', color: 'var(--kj-muted)' }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="#termin" className="btn-gold">Beratung anfragen</Link>
          </div>
        </div>
      </section>

      {/* ── SERVICE ──────────────────────────────────────── */}
      <section className="py-20" style={{ backgroundColor: 'var(--kj-bg)', borderTop: '1px solid var(--kj-border)' }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="section-subtitle mb-4">Uhrenservice</p>
            <h2 className="section-title mb-4">Service vor Ort</h2>
            <div className="divider-gold mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {services.map((s) => (
              <div
                key={s.title}
                className="p-7 text-center"
                style={{ border: '1px solid var(--kj-border)', background: 'var(--kj-card)' }}
              >
                <span className="font-serif text-3xl mb-4 block" style={{ color: 'var(--kj-gold)' }}>{s.icon}</span>
                <h3 className="font-serif text-xl mb-2" style={{ color: 'var(--kj-text)' }}>{s.title}</h3>
                <p className="font-sans text-sm leading-relaxed" style={{ color: 'var(--kj-muted)' }}>{s.desc}</p>
              </div>
            ))}
          </div>

          <p className="font-sans text-xs text-center mt-6" style={{ color: 'var(--kj-muted)' }}>
            Auch ohne Termin – einfach vorbeikommen.{' '}
            <Link href="/service" style={{ color: 'var(--kj-gold)' }}>Alle Uhrenservices ansehen →</Link>
          </p>
        </div>
      </section>

      {/* ── APPOINTMENT ──────────────────────────────────── */}
      <section className="py-28" style={{ backgroundColor: 'var(--kj-surface)' }} id="termin">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="section-subtitle mb-3">Persönliche Beratung</p>
            <h2 className="section-title mb-4">Uhren-Termin buchen</h2>
            <div className="divider-gold mx-auto mb-5" />
            <p className="font-sans text-sm" style={{ color: 'var(--kj-muted)' }}>
              Bahnhofstraße 28, 33602 Bielefeld · Persönliche Beratung zu unserer gesamten Uhren-Kollektion.
            </p>
          </div>
          <div className="p-8" style={{ background: 'var(--kj-card)', border: '1px solid var(--kj-border)' }}>
            <AppointmentForm />
          </div>
        </div>
      </section>
    </>
  );
}
