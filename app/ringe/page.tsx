import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import CategoryHero from '@/components/CategoryHero';
import AppointmentForm from '@/components/AppointmentForm';
import JewelrySlider from '@/components/JewelrySlider';

export const metadata: Metadata = {
  title: 'Ringe & Brillantringe – 585 Gold & Weißgold | KenJu Juwelier',
  description: 'Goldringe, Brillantringe und Verlobungsringe in 585 Gelbgold und Weißgold. Solitärringe, Baguette-Ringe, Cluster-Ringe und individuelle Anfertigungen bei KenJu Juwelier Bielefeld.',
  keywords: ['Ringe', 'Brillantringe', 'Verlobungsringe', 'Goldringe', 'Solitärring', '585 Gold', 'Juwelier Bielefeld'],
  alternates: { canonical: 'https://kenju-juwelier.de/ringe' },
};

/* ── Slider-Bilder: Goldringe & Schmuck ──────────────── */
const goldringeSlider = [
  { src: '/images/brillantring-hand.jpg',    alt: 'Brillantring KenJu Juwelier Bielefeld' },
  { src: '/images/ringe-baguette.jpg',        alt: '585 Gelbgold Ringe mit Farbsteinen' },
  { src: '/images/brillantring-solitaer.jpg', alt: '585 Gelbgold Solitärring' },
  { src: '/images/brillantring-box.jpg',      alt: 'Brillantring auf Samtbox' },
  { src: '/images/ringe-memoire.jpg',         alt: 'Memoire Ringe Sortiment KenJu' },
  { src: '/images/brillantringe.jpg',         alt: 'Brillantringe KenJu Bielefeld' },
  { src: '/images/brillant-set-luxus.jpg',    alt: 'Luxus Brillant-Set KenJu' },
  { src: '/images/ringe.jpg',                 alt: 'Goldringe KenJu Juwelier' },
];

export default function RingePage() {
  return (
    <>
      <CategoryHero
        title="Ringe"
        subtitle="Goldringe & Brillantringe"
        description="Von klassischen Goldringen bis zu exklusiven Brillantringen – entdecken Sie unsere Kollektion in 585 Gelbgold, Weißgold und Roségold."
        imageSrc="/images/brillantring-hand.jpg"
        imageAlt="Brillantring KenJu Juwelier Bielefeld"
        breadcrumb="Ringe"
        pageUrl="https://kenju-juwelier.de/ringe"
      />

      {/* ── Intro ───────────────────────────────────────── */}
      <section className="py-32" style={{ backgroundColor: 'var(--kj-bg)' }}>
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            {/* Text */}
            <div>
              <p className="section-subtitle mb-5">Goldschmiede-Handwerk</p>
              <h2 className="font-serif text-4xl md:text-5xl font-light leading-tight mb-6" style={{ color: 'var(--kj-text)' }}>
                Goldringe, Brillantringe &amp;<br />Verlobungsringe in Bielefeld
              </h2>
              <div className="divider-gold mb-8" />
              <p className="font-sans text-sm leading-relaxed mb-5" style={{ color: 'var(--kj-muted)' }}>
                Ein Ring ist mehr als ein Schmuckstück – er steht für Liebe, Treue und Verbundenheit.
                Bei <strong style={{ color: 'var(--kj-text)' }}>KenJu Juwelier</strong> in Bielefeld finden
                Sie eine ausgewählte Kollektion an Goldringen, Verlobungsringen und Brillantringen in
                585 Gelbgold, Weißgold oder Roségold.
              </p>
              <p className="font-sans text-sm leading-relaxed mb-5" style={{ color: 'var(--kj-muted)' }}>
                Ob <strong style={{ color: 'var(--kj-text)' }}>Weißgold</strong>,{' '}
                <strong style={{ color: 'var(--kj-text)' }}>Gelbgold</strong>,{' '}
                <strong style={{ color: 'var(--kj-text)' }}>Roségold</strong> oder Bicolor – wir beraten
                Sie persönlich und helfen Ihnen, den passenden Ring zu finden.
              </p>
              <p className="font-sans text-sm leading-relaxed mb-10" style={{ color: 'var(--kj-muted)' }}>
                Wir passen die Ringgröße fachgerecht an und bieten auf Wunsch eine
                <strong style={{ color: 'var(--kj-text)' }}> individuelle Gravur</strong> mit Datum oder
                Widmung. Besuchen Sie uns in der Bahnhofstraße 28.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="#termin" className="btn-dark">Jetzt kontaktieren</Link>
                <a href="tel:+4917663284312" className="btn-outline-gold">Jetzt anrufen</a>
              </div>
            </div>

            {/* Editorial image */}
            <div className="relative h-80 lg:h-[540px] overflow-hidden gold-border group">
              <Image
                src="/images/brillantring-hand.jpg"
                alt="Brillantring KenJu Juwelier Bielefeld"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover img-zoom"
                priority
                style={{ opacity: 0.9 }}
              />
              <div className="img-caption">
                <p className="font-serif text-base text-white leading-snug">585 Gelbgold · Weißgold · Roségold</p>
                <p className="font-sans text-xs mt-1" style={{ color: 'rgba(255,255,255,0.55)' }}>
                  Alle Ringe in Ihrer Wunschgröße · Gravur auf Anfrage
                </p>
              </div>
              <div
                className="absolute top-5 right-5 px-4 py-3"
                style={{ background: 'rgba(15,13,10,0.82)', border: '1px solid rgba(201,168,76,0.4)' }}
              >
                <p className="font-sans text-xs tracking-widest uppercase" style={{ color: 'var(--kj-gold)' }}>Goldschmuck</p>
                <p className="font-serif text-sm text-white mt-0.5">Handgefertigt</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Slider: Einblicke ────────────────────────────── */}
      <section className="py-20" style={{ backgroundColor: 'var(--kj-surface)' }}>
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16 mb-12">
          <p className="section-subtitle mb-3">Einblicke in unsere Lieblingsstücke</p>
          <h2 className="font-serif text-4xl font-light" style={{ color: 'var(--kj-text)' }}>
            Ist etwas für Sie dabei?
          </h2>
          <div className="divider-gold mt-5" />
        </div>

        <JewelrySlider images={goldringeSlider} speedSeconds={38} />

        <p className="font-sans text-xs text-center mt-6 px-4" style={{ color: 'var(--kj-muted)' }}>
          Alle Ringe in Ihrer Wunschgröße erhältlich · Gravuren auf Anfrage
        </p>
      </section>

      {/* ── Brillantschmuck Editorial ────────────────────── */}
      <section className="py-28" style={{ backgroundColor: 'var(--kj-bg)' }}>
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16">
          <div
            className="grid grid-cols-1 lg:grid-cols-2 gap-0 overflow-hidden"
            style={{ border: '1px solid var(--kj-border)' }}
          >
            {/* Image */}
            <div className="relative min-h-[400px] lg:min-h-0 overflow-hidden group" style={{ background: 'var(--kj-surface)' }}>
              <Image
                src="/images/brillantring-hand.jpg"
                alt="Brillantringe & Verlobungsringe KenJu Juwelier Bielefeld"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover img-zoom"
                style={{ opacity: 0.88 }}
              />
              <div
                className="absolute top-5 left-5 px-3 py-2.5"
                style={{ background: 'rgba(15,13,10,0.78)', border: '1px solid rgba(201,168,76,0.35)' }}
              >
                <p className="font-sans text-xs tracking-widest uppercase" style={{ color: 'var(--kj-gold)' }}>Brillantschmuck</p>
                <p className="font-serif text-sm text-white mt-0.5">Handgefertigt · 585 Gold</p>
              </div>
            </div>

            {/* Text – neue Beschreibung für den Brillantring */}
            <div className="p-8 lg:p-14 flex flex-col justify-center" style={{ background: 'var(--kj-card)' }}>
              <p className="section-subtitle mb-4">Exklusiv & Einzigartig</p>
              <h2 className="font-serif text-3xl md:text-4xl font-light mb-5" style={{ color: 'var(--kj-text)', lineHeight: 1.2 }}>
                Brillantringe &amp; Verlobungsringe bei KenJu Juwelier Bielefeld
              </h2>
              <div className="divider-gold mb-7" />
              <p className="font-sans text-sm leading-relaxed mb-5" style={{ color: 'var(--kj-muted)' }}>
                Ein Brillantring ist mehr als ein Schmuckstück – er ist das Zeichen eines Moments,
                der für immer bleibt. Jeder Stein fängt das Licht auf seine ganz eigene Weise ein
                und macht das Stück unverwechselbar. Brillanten setzen edle Lichtreflexe und
                unterstreichen den Charakter jedes einzelnen Rings.
              </p>
              <p className="font-sans text-sm leading-relaxed mb-5" style={{ color: 'var(--kj-muted)' }}>
                Bei <strong style={{ color: 'var(--kj-text)' }}>KenJu Juwelier</strong> in Bielefeld
                finden Sie eine handverlesene Auswahl exklusiver Brillantringe – vom zeitlosen Solitär
                bis zum aufwendigen Halo-Design, in{' '}
                <strong style={{ color: 'var(--kj-text)' }}>585er Gelbgold</strong>,{' '}
                <strong style={{ color: 'var(--kj-text)' }}>Weißgold</strong> oder{' '}
                <strong style={{ color: 'var(--kj-text)' }}>Roségold</strong>. Ob als Verlobungsring
                für den bedeutendsten Antrag Ihres Lebens oder als besonderes Geschenk für jemanden,
                dem Sie alles bedeuten.
              </p>
              <p className="font-sans text-sm leading-relaxed mb-9" style={{ color: 'var(--kj-muted)' }}>
                Kommen Sie in unser Atelier an der Bahnhofstraße 28 und lassen Sie sich persönlich
                beraten. Wir nehmen uns Zeit für Ihre Wünsche – und helfen Ihnen, den Ring zu finden,
                der Ihre Geschichte erzählt.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="#termin" className="btn-dark">Jetzt kontaktieren</Link>
                <a href="tel:+4917663284312" className="btn-outline-gold">Jetzt anrufen</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Zweiter Slider: Brillantringe ───────────────── */}
      <section className="py-20" style={{ backgroundColor: 'var(--kj-surface)' }}>
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16 mb-12">
          <p className="section-subtitle mb-3">Unvergessliche Momente</p>
          <h2 className="font-serif text-4xl font-light" style={{ color: 'var(--kj-text)' }}>
            Brillantringe &amp; Verlobungsringe
          </h2>
          <div className="divider-gold mt-5" />
        </div>

        <JewelrySlider
          images={[...goldringeSlider].reverse()}
          speedSeconds={44}
        />

        {/* Goldlegierungen */}
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16 mt-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            {[
              { c: '585 Gelbgold', desc: '14 Karat · Klassischer Goldglanz' },
              { c: '585 Weißgold', desc: '14 Karat · Modern & rhodiniert' },
              { c: '585 Roségold', desc: '14 Karat · Romantisch & zeitlos' },
              { c: '750 Gold',     desc: '18 Karat · Maximale Reinheit' },
            ].map((item) => (
              <div
                key={item.c}
                className="p-5 text-center"
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

      {/* ── Appointment ─────────────────────────────────── */}
      <section className="py-28" style={{ backgroundColor: 'var(--kj-bg)' }} id="termin">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="section-subtitle mb-3">Kostenlos & Unverbindlich</p>
            <h2 className="section-title mb-4">Ring-Beratung buchen</h2>
            <div className="divider-gold mx-auto mb-5" />
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
