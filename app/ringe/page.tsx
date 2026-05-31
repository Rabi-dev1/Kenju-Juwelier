import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import CategoryHero from '@/components/CategoryHero';
import AppointmentForm from '@/components/AppointmentForm';
import JewelrySlider from '@/components/JewelrySlider';

export const metadata: Metadata = {
  title: 'Schmuck – Ringe, Ketten, Ohrringe & mehr | KenJu Juwelier Bielefeld',
  description: 'Goldschmuck bei KenJu Juwelier Bielefeld: Ringe, Brillantringe, Ketten, Creolen, Armreifen, Kreuze und mehr in 585 Gelbgold, Weißgold und Roségold. Persönliche Beratung vor Ort.',
  keywords: ['Schmuck Bielefeld', 'Goldringe', 'Brillantringe', 'Goldketten', 'Creolen', 'Armreifen Gold', '585 Gold', 'Juwelier Bielefeld'],
  alternates: { canonical: 'https://kenju-juwelier.de/ringe' },
};

/* ── Alle Slider-Bilder ─────────────────────────────── */
const sliderBilder = [
  { src: '/images/armband-rosegold.jpg',     alt: '585 Roségold Armband KenJu Juwelier' },
  { src: '/images/vitrine-ketten.jpg',        alt: 'Schaufenster Goldketten KenJu Bielefeld' },
  { src: '/images/armreif-twisted.jpg',       alt: '585 Gelbgold Armreifen gedreht' },
  { src: '/images/armreif-wellen.jpg',        alt: '585 Gelbgold Armreif Wellenform' },
  { src: '/images/laden-ringe.jpg',           alt: 'Ringeauswahl KenJu Juwelier Bielefeld' },
  { src: '/images/creolen-farbsteine.jpg',    alt: '585 Gelbgold Creolen mit Farbsteinen' },
  { src: '/images/creolen-klassisch.jpg',     alt: '585 Gelbgold Creolen klassisch' },
  { src: '/images/creolen-twisted.jpg',       alt: '585 Gelbgold Creolen gedreht' },
  { src: '/images/kette-engel.jpg',           alt: '585 Gelbgold Kette Engelflügel' },
  { src: '/images/kette-herz.jpg',            alt: '585 Gelbgold Kette Herz Anhänger' },
  { src: '/images/kreuze-dogtag.jpg',         alt: '585 Gelbgold Kreuz Dog-Tag Anhänger' },
  { src: '/images/ringe-memoire.jpg',         alt: 'Memoire Ringe Sortiment KenJu' },
  { src: '/images/kreuze-klassisch.jpg',      alt: '585 Gelbgold Goldkreuze klassisch' },
  { src: '/images/ohrstecker-kugel.jpg',      alt: '585 Gelbgold Kugelstecker Ohrringe' },
  { src: '/images/ringe-baguette.jpg',        alt: '585 Gelbgold Ringe mit Farbsteinen' },
  { src: '/images/beratung-frau.jpg',         alt: 'Persönliche Schmuckberatung KenJu Bielefeld' },
  { src: '/images/labor-diamanten-set.jpg',   alt: 'Brillant Collier und Creolen Set KenJu' },
];

export default function SchmuckPage() {
  return (
    <>
      <CategoryHero
        title="Schmuck"
        subtitle="Gold · Brillanten · Leidenschaft"
        description="Entdecken Sie unsere handverlesene Kollektion – Ringe, Ketten, Creolen, Armreifen und Kreuze in 585 Gelbgold, Weißgold und Roségold."
        imageSrc="/images/ringe.jpg"
        imageAlt="Schmuck KenJu Juwelier Bielefeld"
        breadcrumb="Schmuck"
        pageUrl="https://kenju-juwelier.de/ringe"
      />

      {/* ── Intro ───────────────────────────────────────── */}
      <section className="py-32" style={{ backgroundColor: 'var(--kj-bg)' }}>
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <p className="section-subtitle mb-5">Goldschmiede-Handwerk</p>
              <h2 className="font-serif text-4xl md:text-5xl font-light leading-tight mb-6" style={{ color: 'var(--kj-text)' }}>
                Exklusiver Goldschmuck<br />in Bielefeld
              </h2>
              <div className="divider-gold mb-8" />
              <p className="font-sans text-sm leading-relaxed mb-5" style={{ color: 'var(--kj-muted)' }}>
                Bei <strong style={{ color: 'var(--kj-text)' }}>KenJu Juwelier</strong> in Bielefeld finden
                Sie eine sorgfältig zusammengestellte Auswahl an hochwertigem Goldschmuck – von eleganten
                Ringen über feine Ketten bis hin zu Creolen, Armreifen und Kreuzanhängern.
              </p>
              <p className="font-sans text-sm leading-relaxed mb-5" style={{ color: 'var(--kj-muted)' }}>
                Alle Stücke sind in{' '}
                <strong style={{ color: 'var(--kj-text)' }}>585 Gelbgold</strong>,{' '}
                <strong style={{ color: 'var(--kj-text)' }}>Weißgold</strong> oder{' '}
                <strong style={{ color: 'var(--kj-text)' }}>Roségold</strong> erhältlich –
                für jeden Anlass, jeden Stil und jedes Budget.
              </p>
              <p className="font-sans text-sm leading-relaxed mb-10" style={{ color: 'var(--kj-muted)' }}>
                Kommen Sie vorbei und lassen Sie sich persönlich beraten – wir nehmen uns Zeit für Ihre
                Wünsche in der Bahnhofstraße 28.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="#termin" className="btn-dark">Jetzt kontaktieren</Link>
                <a href="tel:+4917663284312" className="btn-outline-gold">Jetzt anrufen</a>
              </div>
            </div>

            <div className="relative h-80 lg:h-[540px] overflow-hidden gold-border group">
              <Image
                src="/images/ringe.jpg"
                alt="Goldschmuck KenJu Juwelier Bielefeld"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover img-zoom"
                priority
                style={{ opacity: 0.9 }}
              />
              <div className="img-caption">
                <p className="font-serif text-base text-white leading-snug">585 Gelbgold · Weißgold · Roségold</p>
                <p className="font-sans text-xs mt-1" style={{ color: 'rgba(255,255,255,0.55)' }}>
                  Alle Größen · Gravur auf Anfrage
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Slider ──────────────────────────────────────── */}
      <section className="py-20" style={{ backgroundColor: 'var(--kj-surface)' }}>
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16 mb-12">
          <p className="section-subtitle mb-3">Unsere Kollektionen</p>
          <h2 className="font-serif text-4xl font-light" style={{ color: 'var(--kj-text)' }}>
            Einblicke in unsere Lieblingsstücke
          </h2>
          <div className="divider-gold mt-5" />
        </div>

        <JewelrySlider images={sliderBilder} speedSeconds={50} />

        <p className="font-sans text-xs text-center mt-6 px-4" style={{ color: 'var(--kj-muted)' }}>
          Alle Stücke in Ihrer Wunschgröße erhältlich · Gravuren auf Anfrage
        </p>
      </section>

      {/* ── Brillantring Editorial ───────────────────────── */}
      <section className="py-28" style={{ backgroundColor: 'var(--kj-bg)' }}>
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16">
          <div
            className="grid grid-cols-1 lg:grid-cols-2 gap-0 overflow-hidden"
            style={{ border: '1px solid var(--kj-border)' }}
          >
            {/* Bild */}
            <div className="relative min-h-[420px] lg:min-h-0 overflow-hidden group" style={{ background: 'var(--kj-surface)' }}>
              <Image
                src="/images/brillantring-cluster-gelb.jpg"
                alt="Brillantringe und Verlobungsringe KenJu Juwelier Bielefeld"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover img-zoom"
                style={{ opacity: 0.9 }}
              />
              <div
                className="absolute top-5 left-5 px-3 py-2.5"
                style={{ background: 'rgba(15,13,10,0.78)', border: '1px solid rgba(201,168,76,0.35)' }}
              >
                <p className="font-sans text-xs tracking-widest uppercase" style={{ color: 'var(--kj-gold)' }}>Brillantschmuck</p>
                <p className="font-serif text-sm text-white mt-0.5">Handgefertigt · 585 Gold</p>
              </div>
            </div>

            {/* Text */}
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
                verleihen jedem Ring einen einzigartigen Charakter.
              </p>
              <p className="font-sans text-sm leading-relaxed mb-5" style={{ color: 'var(--kj-muted)' }}>
                Bei <strong style={{ color: 'var(--kj-text)' }}>KenJu Juwelier</strong> in Bielefeld
                finden Sie eine handverlesene Auswahl exklusiver Brillantringe – vom zeitlosen Solitär
                bis zum aufwendigen Cluster-Design, in{' '}
                <strong style={{ color: 'var(--kj-text)' }}>585er Gelbgold</strong>,{' '}
                <strong style={{ color: 'var(--kj-text)' }}>Weißgold</strong> oder{' '}
                <strong style={{ color: 'var(--kj-text)' }}>Roségold</strong>. Ob als Verlobungsring
                für den bedeutendsten Antrag Ihres Lebens oder als besonderes Geschenk für jemanden,
                dem Sie alles bedeuten.
              </p>
              <p className="font-sans text-sm leading-relaxed mb-9" style={{ color: 'var(--kj-muted)' }}>
                Kommen Sie in unser Atelier an der Bahnhofstraße 28 und lassen Sie sich persönlich
                beraten. Wir nehmen uns Zeit für Ihre Wünsche.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="#termin" className="btn-dark">Jetzt kontaktieren</Link>
                <a href="tel:+4917663284312" className="btn-outline-gold">Jetzt anrufen</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Zweiter Slider (umgekehrt) ───────────────────── */}
      <section className="py-20" style={{ backgroundColor: 'var(--kj-surface)' }}>
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16 mb-12">
          <p className="section-subtitle mb-3">Für jeden Anlass</p>
          <h2 className="font-serif text-4xl font-light" style={{ color: 'var(--kj-text)' }}>
            Goldschmuck für Sie &amp; Ihn
          </h2>
          <div className="divider-gold mt-5" />
        </div>

        <JewelrySlider images={[...sliderBilder].reverse()} speedSeconds={55} />

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
              Alle Stücke individuell anfertigbar – in Ihrer Wunschgröße und Legierung.
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
            <h2 className="section-title mb-4">Schmuck-Beratung buchen</h2>
            <div className="divider-gold mx-auto mb-5" />
            <p className="font-sans text-sm" style={{ color: 'var(--kj-muted)' }}>
              Kostenlose und unverbindliche Beratung in unserem Atelier in Bielefeld, Bahnhofstraße 28.
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
