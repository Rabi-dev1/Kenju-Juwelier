import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import AppointmentForm from '@/components/AppointmentForm';

export const metadata: Metadata = {
  title: 'Uhren in Bielefeld – Tommy Hilfiger, Hugo Boss & mehr | KenJu Juwelier',
  description: 'Markenuhren bei KenJu Juwelier Bielefeld: Tommy Hilfiger, Hugo Boss, Police, Regent und Swiss Military. Persönliche Beratung vor Ort.',
  keywords: ['Uhren Bielefeld', 'Tommy Hilfiger Uhren', 'Hugo Boss Uhren', 'Police Uhren', 'Juwelier Bielefeld'],
  alternates: { canonical: 'https://kenju-juwelier.de/uhren' },
};

const brands = [
  { name: 'Tommy Hilfiger', desc: 'Moderne Designuhren für Alltag und Business.', tags: ['Elegant', 'Alltag', 'Modern'] },
  { name: 'Hugo Boss',       desc: 'Reduziertes, elegantes Design mit Präzisionsuhrwerk.', tags: ['Premium', 'Business', 'Elegant'] },
  { name: 'Police',          desc: 'Urbane Uhren mit starkem Charakter und italienischem Stil.', tags: ['Urban', 'Statement', 'Trendy'] },
  { name: 'Regent',          desc: 'Klassische Eleganz für Damen und Herren zum fairen Preis.', tags: ['Klassisch', 'Damen & Herren', 'Alltag'] },
  { name: 'Swiss Military',  desc: 'Schweizer Präzision – robust, wasserdicht, zuverlässig.', tags: ['Robust', 'Swiss Made', 'Wasserdicht'] },
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
            style={{ objectPosition: 'center 40%' }}
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
      <section className="py-20" style={{ backgroundColor: 'var(--kj-surface)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="section-subtitle mb-4">Unsere Markenpartner</p>
            <h2 className="section-title mb-4">Qualität, die man spürt</h2>
            <div className="divider-gold mx-auto" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {brands.map((brand) => (
              <div
                key={brand.name}
                className="p-8 flex flex-col gap-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                style={{ background: 'var(--kj-card)', border: '1px solid var(--kj-border)' }}
              >
                <h3 className="font-serif text-2xl font-light" style={{ color: 'var(--kj-text)' }}>
                  {brand.name}
                </h3>
                <p className="font-sans text-sm leading-relaxed flex-1" style={{ color: 'var(--kj-muted)' }}>
                  {brand.desc}
                </p>
                <div className="flex flex-wrap gap-2 pt-4" style={{ borderTop: '1px solid var(--kj-border)' }}>
                  {brand.tags.map((tag) => (
                    <span key={tag} className="font-sans text-xs px-3 py-1.5 tracking-wide" style={{ background: 'var(--kj-surface)', color: 'var(--kj-muted)' }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── AUSGEWÄHLTE UHREN (uhrzeig.jpg) ──────────────── */}
      <section className="py-20" style={{ backgroundColor: 'var(--kj-bg)', borderTop: '1px solid var(--kj-border)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 overflow-hidden" style={{ border: '1px solid var(--kj-border)' }}>

            {/* Bild */}
            <div className="relative overflow-hidden" style={{ minHeight: '420px' }}>
              <Image
                src="/images/uhrzeig.jpg"
                alt="Ausgewählte Markenuhren KenJu Juwelier Bielefeld"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 hover:scale-[1.02]"
                style={{ objectPosition: 'center center' }}
              />
              <div
                className="absolute top-5 left-5 px-4 py-3"
                style={{ background: 'rgba(15,13,10,0.85)', border: '1px solid rgba(201,168,76,0.4)' }}
              >
                <p className="font-sans text-xs tracking-widest uppercase" style={{ color: 'var(--kj-gold)' }}>Markenuhren</p>
                <p className="font-serif text-sm text-white mt-0.5">KenJu Juwelier · Bielefeld</p>
              </div>
            </div>

            {/* Marken-Liste */}
            <div className="p-8 lg:p-12 flex flex-col justify-center" style={{ background: 'var(--kj-card)' }}>
              <p className="section-subtitle mb-4">Verfügbare Marken</p>
              <h2 className="font-serif text-2xl md:text-3xl font-light mb-4" style={{ color: 'var(--kj-text)', lineHeight: 1.2 }}>
                Ausgewählte Uhren
              </h2>
              <div className="divider-gold mb-8" />

              <ul className="space-y-5 mb-8">
                {brands.map((brand) => (
                  <li key={brand.name} className="flex items-start gap-4 pb-5" style={{ borderBottom: '1px solid var(--kj-border)' }}>
                    <span style={{ color: 'var(--kj-gold)', marginTop: '2px' }}>✦</span>
                    <div>
                      <p className="font-serif text-lg" style={{ color: 'var(--kj-text)' }}>{brand.name}</p>
                      <p className="font-sans text-xs mt-0.5" style={{ color: 'var(--kj-muted)' }}>{brand.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>

              <Link href="#termin" className="btn-gold self-start">
                Beratung vereinbaren
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICE ──────────────────────────────────────── */}
      <section className="py-16" style={{ backgroundColor: 'var(--kj-surface)', borderTop: '1px solid var(--kj-border)' }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="section-subtitle mb-3">Uhrenservice</p>
            <h2 className="section-title mb-4">Service vor Ort</h2>
            <div className="divider-gold mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {services.map((s) => (
              <div key={s.title} className="p-6 text-center" style={{ border: '1px solid var(--kj-border)', background: 'var(--kj-card)' }}>
                <span className="font-serif text-2xl mb-3 block" style={{ color: 'var(--kj-gold)' }}>{s.icon}</span>
                <h3 className="font-serif text-lg mb-2" style={{ color: 'var(--kj-text)' }}>{s.title}</h3>
                <p className="font-sans text-xs leading-relaxed" style={{ color: 'var(--kj-muted)' }}>{s.desc}</p>
              </div>
            ))}
          </div>

          <p className="font-sans text-xs text-center mt-5" style={{ color: 'var(--kj-muted)' }}>
            Auch ohne Termin – einfach vorbeikommen.{' '}
            <Link href="/service" style={{ color: 'var(--kj-gold)' }}>Alle Uhrenservices ansehen →</Link>
          </p>
        </div>
      </section>

      {/* ── APPOINTMENT ──────────────────────────────────── */}
      <section className="py-24" style={{ backgroundColor: 'var(--kj-bg)' }} id="termin">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
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
