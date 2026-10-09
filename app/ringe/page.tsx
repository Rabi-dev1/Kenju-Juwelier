import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import CategoryHero from '@/components/CategoryHero';
import AppointmentForm from '@/components/AppointmentForm';
import JewelrySlider from '@/components/JewelrySlider';

export const metadata: Metadata = {
  title: 'Schmuck, Ringe & Ketten in Bielefeld',
  description: 'Goldschmuck bei KenJu Juwelier Bielefeld: Ringe, Brillantringe, Ketten, Anhänger, Armbänder (auch Silber & Edelstahl), Fußketten, Creolen und mehr.',
  keywords: ['Schmuck Bielefeld', 'Goldringe', 'Brillantringe', 'Goldketten', 'Anhänger Gold', 'Armbänder Gold', 'Armband Silber', 'Armband Edelstahl', 'Fußketten Gold', 'Creolen', '585 Gold', 'Juwelier Bielefeld'],
  alternates: { canonical: 'https://kenju.de/ringe' },
};

/* ── Slider-Bilder – exakte Dateinamen aus public/images ── */
const sliderBilder = [
  { src: '/images/labordiamanten.jpeg',        alt: 'Ohrringe mit Labor Diamanten – Brillantschmuck bei KenJu Juwelier Bielefeld & Lippstadt' },
  { src: '/images/anhaenger-fluegel.jpg',     alt: '585 Gelbgold Kette mit Flügel-Anhänger und Zirkonia – KenJu Juwelier Bielefeld' },
  { src: '/images/schlangenkette-gold.jpg',   alt: '585 Gelbgold Schlangenkette flach – KenJu Juwelier Bielefeld' },
  { src: '/images/anhaenger-kleeblatt.jpg',   alt: '585 Gelbgold Kette mit Kleeblatt-Anhänger – KenJu Juwelier Bielefeld' },
  { src: '/images/anhaenger-herz.jpg',        alt: '585 Gelbgold Kette mit Herz-Anhänger und Zirkonia – KenJu Juwelier Bielefeld' },
  { src: '/images/armband-rose.jpg',         alt: '585 Roségold Armband KenJu Juwelier' },
  { src: '/images/armreif-gedreht.jpg',       alt: '585 Gelbgold Armreifen gedreht' },
  { src: '/images/armreif-welle.jpg',         alt: '585 Gelbgold Armreif Wellenform' },
  { src: '/images/halsketten.jpg',            alt: 'Schaufenster Goldketten KenJu Bielefeld' },
  { src: '/images/kette-engelsfluegel.jpg',   alt: '585 Gelbgold Kette Engelflügel' },
  { src: '/images/kette-herz.jpg',            alt: '585 Gelbgold Kette Herz Anhänger' },
  { src: '/images/kette-kreis.jpg',           alt: 'Goldketten mit Farbstein-Anhänger' },
  { src: '/images/kette-schlange.jpg',        alt: 'Goldketten Sortiment KenJu Bielefeld' },
  { src: '/images/kette-traumfaenger.jpg',    alt: '585 Gelbgold Kette Traumfänger Anhänger' },
  { src: '/images/ohrstecker-kugel.jpg',      alt: '585 Gelbgold Kugelstecker Ohrringe' },
  { src: '/images/ring-baguette.jpg',         alt: '585 Gelbgold Ringe mit Farbsteinen' },
  { src: '/images/creolen-farbsteine.jpg',    alt: '585 Gelbgold Creolen mit Farbsteinen' },
  { src: '/images/creolen-gedreht.jpg',       alt: '585 Gelbgold Creolen gedreht' },
  { src: '/images/creolen-filigran.jpg',      alt: '585 Gelbgold Creolen klassisch' },
  { src: '/images/kreuz-filigran.jpg',        alt: '585 Gelbgold Goldkreuze klassisch' },
  { src: '/images/kreuz-platte.jpg',          alt: '585 Gelbgold Kreuz Dog-Tag Anhänger' },
  { src: '/images/brillantring-cluster-gelb.jpg', alt: 'Brillantring KenJu Juwelier Bielefeld' },
];

export default function SchmuckPage() {
  return (
    <>
      <CategoryHero
        title="Schmuck in Bielefeld & Lippstadt"
        subtitle="Gold · Brillanten · Leidenschaft"
        description="Memory-Ringe, Solitär-Ringe, Anhänger, Ketten, Armbänder, Fußketten, Ohrstecker & Brillantschmuck – in Gold, Silber und Edelstahl."
        imageSrc="/images/ringe.jpg"
        imageAlt="Schmuck KenJu Juwelier Bielefeld"
        breadcrumb="Schmuck"
        pageUrl="https://kenju.de/ringe"
      />

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
          Alle Stücke in Ihrer Wunschgröße erhältlich · Gravuren auf Anfrage (kostenpflichtig)
        </p>
      </section>

      {/* ── Sortiment ───────────────────────────────────── */}
      <section className="py-20" style={{ backgroundColor: 'var(--kj-bg)', borderTop: '1px solid var(--kj-border)' }}>
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="text-center mb-12">
            <p className="section-subtitle mb-3">Unser Sortiment</p>
            <h2 className="section-title mb-4">Das finden Sie bei KenJu</h2>
            <div className="divider-gold mx-auto" />
          </div>

          <div className="max-w-3xl mx-auto space-y-6 font-sans text-base leading-relaxed" style={{ color: 'var(--kj-muted)' }}>
            <p>
              Entdecken Sie bei <strong style={{ color: 'var(--kj-text)' }}>Juwelier KenJu</strong> eine besonders
              große Auswahl an hochwertigem Gold- und Silberschmuck, veredelt mit funkelnden Brillanten und
              hochwertigen Edelsteinen. Ob elegante Armbänder – auch in Silber und Edelstahl –, stilvolle Halsketten
              oder besondere Ohrringe: Unsere Schmuckstücke verbinden zeitlose Eleganz mit modernem Design. Dabei
              führen wir Stücke sowohl mit natürlichen Diamanten als auch mit Labor Diamanten.
            </p>

            <div>
              <h3 className="font-serif text-2xl font-light mb-3" style={{ color: 'var(--kj-text)' }}>
                Schmuck, der Ihre Persönlichkeit unterstreicht
              </h3>
              <p>
                Sie suchen ein einzigartiges Stück, das ganz Ihren Vorstellungen entspricht? Gemeinsam entwickeln wir
                ein Unikat aus Gold oder Silber, das nach Ihren Wünschen gefertigt und auf Wunsch mit ausgewählten
                Edelsteinen veredelt wird. Ob als besonderes Geschenk, zur Feier eines wichtigen Moments oder als
                Ausdruck des eigenen Stils – individueller Schmuck erzählt eine ganz persönliche Geschichte.
              </p>
            </div>

            <p>
              Sie finden uns im <strong style={{ color: 'var(--kj-text)' }}>LooM Einkaufszentrum in Bielefeld</strong>{' '}
              sowie in der <strong style={{ color: 'var(--kj-text)' }}>Langen Straße 29 in Lippstadt</strong>. Lassen
              Sie sich von unserer Auswahl inspirieren und entdecken Sie Ihr neues Lieblingsstück – wir freuen uns
              auf Ihren Besuch.
            </p>

            <p className="text-sm pt-2">
              Goldmünzen, Goldbarren und Investmentgold sowie unseren Silberankauf finden Sie im Bereich{' '}
              <Link href="/goldankauf" style={{ color: 'var(--kj-gold)' }} className="underline underline-offset-2">
                Goldankauf
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      {/* ── Brillantring Editorial (brillantring-box.jpg) ── */}
      <section className="py-28" style={{ backgroundColor: 'var(--kj-bg)' }}>
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16">
          <div
            className="grid grid-cols-1 lg:grid-cols-2 gap-0 overflow-hidden"
            style={{ border: '1px solid var(--kj-border)' }}
          >
            {/* Bild */}
            <div className="relative min-h-[420px] lg:min-h-0 overflow-hidden group" style={{ background: 'var(--kj-surface)' }}>
              <Image
                src="/images/labordiamanten-collier.jpg"
                alt="Collier mit Labor Diamanten – Brillantschmuck bei KenJu Juwelier Bielefeld"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover img-zoom"
                style={{ opacity: 0.92 }}
              />
              <div
                className="absolute top-5 left-5 px-3 py-2.5"
                style={{ background: 'rgba(15,13,10,0.78)', border: '1px solid rgba(201,168,76,0.35)' }}
              >
                <p className="font-sans text-xs tracking-widest uppercase" style={{ color: 'var(--kj-gold)' }}>Brillantschmuck</p>
                <p className="font-serif text-sm text-white mt-0.5">Natürliche &amp; Labor Diamanten</p>
              </div>
            </div>

            {/* Text */}
            <div className="p-8 lg:p-14 flex flex-col justify-center" style={{ background: 'var(--kj-card)' }}>
              <p className="section-subtitle mb-4">Der besondere Moment</p>
              <h2 className="font-serif text-3xl md:text-4xl font-light mb-5" style={{ color: 'var(--kj-text)', lineHeight: 1.2 }}>
                Brillantschmuck bei KenJu Juwelier Bielefeld
              </h2>
              <div className="divider-gold mb-7" />
              <p className="font-sans text-sm leading-relaxed mb-9" style={{ color: 'var(--kj-muted)' }}>
                Entdecken Sie hochwertige Solitärringe, Memory-Ringe und Brillantringe mit funkelnden Brillanten. Gefertigt in 585 Gelbgold, Weißgold oder Roségold und individuell nach Ihren Wünschen ausgewählt.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="#termin" className="btn-dark">Jetzt kontaktieren</Link>
                <a href="tel:+4917663284312" className="btn-outline-gold">Jetzt anrufen</a>
              </div>
            </div>
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
              Kostenlose und unverbindliche Beratung – Bahnhofstraße 28 (Loom, 1. OG), 33602 Bielefeld · Lange Straße 29, 59555 Lippstadt.
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
