import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import CategoryHero from '@/components/CategoryHero';
import AppointmentForm from '@/components/AppointmentForm';

export const metadata: Metadata = {
  title: 'Ringe & Brillantringe – 585 Gold & Weißgold | KenJu Juwelier',
  description: 'Goldringe, Brillantringe und Verlobungsringe in 585 Gelbgold und Weißgold. Solitärringe, Baguette-Ringe, Cluster-Ringe und individuelle Anfertigungen bei KenJu Juwelier Bielefeld.',
  keywords: ['Ringe', 'Brillantringe', 'Verlobungsringe', 'Goldringe', 'Solitärring', '585 Gold', 'Juwelier Bielefeld'],
  alternates: { canonical: 'https://kenju-juwelier.de/ringe' },
};

const goldringe = [
  { name: 'Solitär-Ring',          material: '585 Gelbgold', detail: 'Mit Zirkonia-Brillant, handgravierter Ringschiene', img: '/images/ringe.jpg' },
  { name: 'Baguette-Ring Rubin',   material: '585 Gelbgold', detail: 'Roter Baguette-Stein, Panzerketten-Schiene',        img: '/images/ringe.jpg' },
  { name: 'Baguette-Ring Smaragd', material: '585 Gelbgold', detail: 'Grüner Baguette-Stein, florale Gravur',             img: '/images/ringe.jpg' },
  { name: 'Individueller Ring',    material: '585 Gold',      detail: 'Nach Ihren Wünschen angefertigt',                  img: '/images/ringe.jpg' },
];

const brillantringe = [
  { name: 'Brillant-Cluster Ring', material: '585 Gelbgold', stone: 'Cluster-Brillant, Halo-Fassung',             img: '/images/brillant-set-luxus.jpg' },
  { name: 'Halo-Ring Weißgold',    material: '585 Weißgold', stone: 'Ovaler Brillant, doppelter Halo',             img: '/images/brillantringe.jpg' },
  { name: 'Luxus Brillant-Set',    material: 'Weißgold',     stone: 'Collier + Armband + Creolen, Tropfenschliff', img: '/images/brillant-set-luxus.jpg' },
  { name: 'Solitär Brillant',      material: '585 Gelbgold', stone: 'Klassischer Solitär, gravierte Schiene',      img: '/images/ringe.jpg' },
];

export default function RingePage() {
  return (
    <>
      <CategoryHero
        title="Ringe"
        subtitle="Goldringe & Brillantringe"
        description="Von klassischen Goldringen bis zu exklusiven Brillantringen – entdecken Sie unsere gesamte Ring-Kollektion in 585 Gelbgold, Weißgold und Roségold."
        imageSrc="/images/ringe.jpg"
        imageAlt="Ring-Display KenJu Juwelier Bielefeld"
        breadcrumb="Ringe"
      />

      {/* ── Intro – Text links, Bild rechts (Barok-Stil) ── */}
      <section className="py-24" style={{ backgroundColor: 'var(--kj-bg)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Text */}
            <div>
              <h2 className="font-serif text-4xl md:text-5xl font-light leading-tight mb-6" style={{ color: 'var(--kj-text)' }}>
                Goldringe, Brillantringe &amp;<br />Verlobungsringe in Bielefeld
              </h2>
              <p className="font-sans text-sm leading-relaxed mb-4" style={{ color: 'var(--kj-muted)' }}>
                Ein Ring ist mehr als ein Schmuckstück – er steht für Liebe, Treue und Verbundenheit.
                Bei <strong style={{ color: 'var(--kj-text)' }}>KenJu Juwelier</strong> in Bielefeld finden
                Sie eine ausgewählte Kollektion an Goldringen, Verlobungsringen und Brillantringen in
                Gold oder Weißgold – auf Wunsch auch mit Brillanten oder Labor Diamanten.
              </p>
              <p className="font-sans text-sm leading-relaxed mb-4" style={{ color: 'var(--kj-muted)' }}>
                Ob{' '}
                <strong style={{ color: 'var(--kj-text)' }}>Weißgold</strong>,{' '}
                <strong style={{ color: 'var(--kj-text)' }}>Gelbgold</strong>,{' '}
                <strong style={{ color: 'var(--kj-text)' }}>Roségold</strong> oder Bicolor – wir beraten
                Sie persönlich und helfen Ihnen, den passenden Ring zu finden.
              </p>
              <p className="font-sans text-sm leading-relaxed mb-8" style={{ color: 'var(--kj-muted)' }}>
                Gerne passen wir die Ringgröße fachgerecht an und bieten Ihnen auf Wunsch eine
                <strong style={{ color: 'var(--kj-text)' }}> Gravur</strong> mit Datum oder Widmung.
                Besuchen Sie uns in der Bahnhofstraße 28 und entdecken Sie Ringe, die Ihre Geschichte erzählen.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="#termin" className="btn-dark">Jetzt kontaktieren</Link>
                <a href="tel:+4917663284312" className="btn-outline-gold">Jetzt anrufen</a>
              </div>
            </div>
            {/* Image */}
            <div className="relative h-80 lg:h-[500px] overflow-hidden gold-border">
              <Image
                src="/images/ringe.jpg"
                alt="Goldringe KenJu Juwelier Bielefeld"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                style={{ opacity: 0.88 }}
              />
              {/* Caption overlay */}
              <div
                className="absolute bottom-0 right-0 p-4 max-w-[220px]"
                style={{ background: 'rgba(8,8,15,0.82)', borderTop: '1px solid rgba(180,140,40,0.35)', borderLeft: '1px solid rgba(180,140,40,0.35)' }}
              >
                <p className="font-serif text-base text-white leading-snug">585 Gelbgold · Weißgold · Roségold</p>
                <p className="font-sans text-xs mt-1" style={{ color: 'rgba(255,255,255,0.55)' }}>
                  Alle Ringe in Ihrer Wunschgröße
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Goldringe Carousel Grid ───────────────────────── */}
      <section className="py-20" style={{ backgroundColor: 'var(--kj-surface)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="section-subtitle mb-3">Einblicke in unsere Lieblingsstücke</p>
            <h2 className="font-serif text-4xl font-light mb-4" style={{ color: 'var(--kj-text)' }}>
              Ist etwas für Sie dabei?
            </h2>
            <div className="divider-gold mx-auto" />
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {goldringe.map((p) => (
              <article
                key={p.name}
                className="overflow-hidden group transition-all duration-300 hover:shadow-lg"
                style={{ background: 'var(--kj-card)', border: '1px solid var(--kj-border)' }}
              >
                <div className="relative overflow-hidden category-img-placeholder" style={{ paddingBottom: '110%' }}>
                  <Image
                    src={p.img}
                    alt={p.name}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    style={{ opacity: 0.85 }}
                  />
                  <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(8,8,15,0.55), transparent 55%)' }} />
                  {/* Small label overlay */}
                  <div className="absolute bottom-3 left-3 right-3">
                    <p className="font-sans text-xs text-white/80 tracking-wider uppercase">{p.material}</p>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-serif text-base mb-1" style={{ color: 'var(--kj-text)' }}>{p.name}</h3>
                  <p className="font-sans text-xs" style={{ color: 'var(--kj-muted)' }}>{p.detail}</p>
                </div>
              </article>
            ))}
          </div>
          <p className="font-sans text-xs text-center mb-2" style={{ color: 'var(--kj-muted)' }}>
            Alle Ringe sind in Ihrer Wunschgröße erhältlich. Gravuren auf Anfrage.
          </p>
        </div>
      </section>

      {/* ── Brillantschmuck – Bild links, Text rechts (Barok-Stil) ── */}
      <section className="py-20" style={{ backgroundColor: 'var(--kj-bg)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 overflow-hidden" style={{ border: '1px solid var(--kj-border)' }}>
            {/* Image */}
            <div className="relative min-h-[360px] lg:min-h-0" style={{ background: 'var(--kj-surface)' }}>
              <Image
                src="/images/brillant-set-luxus.jpg"
                alt="Brillantschmuck KenJu Juwelier Bielefeld"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                style={{ opacity: 0.8 }}
              />
              {/* Caption on image */}
              <div
                className="absolute top-4 left-4 px-3 py-2"
                style={{ background: 'rgba(8,8,15,0.75)', border: '1px solid rgba(180,140,40,0.3)' }}
              >
                <p className="font-sans text-xs tracking-widest uppercase" style={{ color: 'var(--kj-gold)' }}>Brillantschmuck</p>
                <p className="font-serif text-sm text-white mt-0.5">Handgefertigt · 585 Gold</p>
              </div>
            </div>
            {/* Text */}
            <div className="p-8 lg:p-12 flex flex-col justify-center" style={{ background: 'var(--kj-card)' }}>
              <p className="section-subtitle mb-3">Exklusiv</p>
              <h2 className="font-serif text-3xl mb-5" style={{ color: 'var(--kj-text)' }}>
                Brillantschmuck bei KenJu Juwelier in Bielefeld
              </h2>
              <div className="divider-gold mb-6" />
              <p className="font-sans text-sm leading-relaxed mb-4" style={{ color: 'var(--kj-muted)' }}>
                Edelsteine verleihen Schmuck eine besondere Bedeutung und Individualität. Durch ihre
                natürliche Einzigartigkeit entsteht ein Charakter, der jedes Stück unverwechselbar macht.
                Brillanten setzen edle Lichtreflexe und unterstreichen die Eleganz.
              </p>
              <p className="font-sans text-sm leading-relaxed mb-8" style={{ color: 'var(--kj-muted)' }}>
                Bei KenJu Juwelier in Bielefeld erwartet Sie eine sorgfältig zusammengestellte Auswahl
                an <strong style={{ color: 'var(--kj-text)' }}>Edelstein- und Brillantschmuck</strong>.
                Feine Ringe mit Solitärstein, glänzende Colliers und passende Ohrringe bieten Ihnen für
                jeden Anlass das perfekte Schmuckstück.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="#termin" className="btn-dark">Jetzt kontaktieren</Link>
                <a href="tel:+4917663284312" className="btn-outline-gold">Jetzt anrufen</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Brillantringe Grid ────────────────────────────── */}
      <section className="py-20" style={{ backgroundColor: 'var(--kj-surface)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="section-subtitle mb-3">Unvergessliche Momente</p>
            <h2 className="font-serif text-4xl font-light mb-4" style={{ color: 'var(--kj-text)' }}>
              Brillantringe &amp; Verlobungsringe
            </h2>
            <div className="divider-gold mx-auto" />
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
            {brillantringe.map((p) => (
              <article
                key={p.name}
                className="overflow-hidden group transition-all duration-300 hover:shadow-lg"
                style={{ background: 'var(--kj-card)', border: '1px solid var(--kj-border)' }}
              >
                <div className="relative overflow-hidden category-img-placeholder" style={{ paddingBottom: '120%' }}>
                  <Image
                    src={p.img}
                    alt={p.name}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    style={{ opacity: 0.85 }}
                  />
                  <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(8,8,15,0.55), transparent 55%)' }} />
                  <div className="absolute bottom-3 left-3 right-3">
                    <p className="font-sans text-xs text-white/80 tracking-wider uppercase">{p.material}</p>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-serif text-base mb-1" style={{ color: 'var(--kj-text)' }}>{p.name}</h3>
                  <p className="font-sans text-xs" style={{ color: 'var(--kj-muted)' }}>{p.stone}</p>
                </div>
              </article>
            ))}
          </div>

          {/* Goldlegierungen Info row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            {[
              { c: '585 Gelbgold', desc: '14 Karat · Klassischer Goldglanz' },
              { c: '585 Weißgold', desc: '14 Karat · Modern & rhodiniert' },
              { c: '585 Roségold', desc: '14 Karat · Romantisch & zeitlos' },
              { c: '750 Gold',     desc: '18 Karat · Maximale Reinheit' },
            ].map((item) => (
              <div
                key={item.c}
                className="p-4 text-center"
                style={{ background: 'var(--kj-card)', border: '1px solid var(--kj-border)' }}
              >
                <p className="font-serif text-base gold-text mb-1">{item.c}</p>
                <p className="font-sans text-xs" style={{ color: 'var(--kj-muted)' }}>{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <p className="font-sans text-xs mb-6" style={{ color: 'var(--kj-muted)' }}>
              Alle Brillantringe sind individuell anfertigbar – in Ihrer Wunschgröße und Legierung.
            </p>
            <Link href="#termin" className="btn-gold">Individuelle Beratung anfragen</Link>
          </div>
        </div>
      </section>

      {/* ── Appointment ──────────────────────────────────── */}
      <section className="py-24" style={{ backgroundColor: 'var(--kj-bg)' }} id="termin">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="section-subtitle mb-3">Kostenlos & Unverbindlich</p>
            <h2 className="section-title mb-3">Ring-Beratung buchen</h2>
            <div className="divider-gold mx-auto mb-4" />
            <p className="font-sans text-sm" style={{ color: 'var(--kj-muted)' }}>
              Kostenlose und unverbindliche Beratung in unserem Atelier in Bielefeld.
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
