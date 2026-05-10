import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import CategoryHero from '@/components/CategoryHero';
import AppointmentForm from '@/components/AppointmentForm';

export const metadata: Metadata = {
  title: 'Ringe & Brillantringe – 585 Gold & Weißgold | KenJu Juwelier',
  description: 'Goldringe, Brillantringe und Verlobungsringe in 585 Gelbgold und Weißgold. Solitärringe, Baguette-Ringe, Cluster-Ringe und individuelle Anfertigungen bei KenJu Juwelier Bielefeld.',
  keywords: ['Ringe', 'Brillantringe', 'Verlobungsringe', 'Goldringe', 'Solitärring', 'Baguette Ring', '585 Gold', 'Juwelier Bielefeld'],
  alternates: { canonical: 'https://kenju-juwelier.de/ringe' },
};

const goldringe = [
  { name: 'Solitär-Ring',          material: '585 Gelbgold', detail: 'Mit Zirkonia-Brillant, handgravierter Ringschiene', img: '/images/ring-solitaer.jpg' },
  { name: 'Baguette-Ring Rubin',   material: '585 Gelbgold', detail: 'Roter Baguette-Stein, Panzerketten-Schiene',        img: '/images/ring-baguette.jpg' },
  { name: 'Baguette-Ring Smaragd', material: '585 Gelbgold', detail: 'Grüner Baguette-Stein, florale Gravur',             img: '/images/ring-baguette.jpg' },
  { name: 'Individueller Ring',    material: '585 Gold',      detail: 'Nach Ihren Wünschen angefertigt',                  img: '/images/ring-solitaer.jpg' },
];

const brillantringe = [
  { name: 'Brillant-Cluster Ring', material: '585 Gelbgold', stone: 'Cluster-Brillant, Halo-Fassung',             img: '/images/brillantring-cluster-gelb.jpg' },
  { name: 'Halo-Ring Weißgold',    material: '585 Weißgold', stone: 'Ovaler Brillant, doppelter Halo',             img: '/images/brillantring-halo-weiss.jpg' },
  { name: 'Luxus Brillant-Set',    material: 'Weißgold',     stone: 'Collier + Armband + Creolen, Tropfenschliff', img: '/images/brillant-set-luxus.jpg' },
  { name: 'Solitär Brillant',      material: '585 Gelbgold', stone: 'Klassischer Solitär, gravierte Schiene',      img: '/images/ring-solitaer.jpg' },
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

      {/* Goldringe */}
      <section className="py-24 bg-kenju-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="section-subtitle mb-3">Klassische Kollektion</p>
            <h2 className="section-title">Goldringe</h2>
            <div className="divider-gold mx-auto mt-4" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {goldringe.map((p) => (
              <article key={p.name} className="card-dark overflow-hidden group">
                <div className="relative h-52 category-img-placeholder">
                  <Image src={p.img} alt={p.name} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-kenju-black to-transparent" />
                </div>
                <div className="p-5">
                  <h3 className="font-serif text-xl text-kenju-cream mb-1">{p.name}</h3>
                  <p className="font-sans text-xs text-kenju-gold mb-1">{p.material}</p>
                  <p className="font-sans text-xs text-kenju-muted">{p.detail}</p>
                </div>
              </article>
            ))}
          </div>
          <p className="font-sans text-kenju-muted text-center mb-20">Alle Ringe sind in Ihrer Wunschgröße erhältlich. Gravuren auf Anfrage.</p>

          {/* Brillantringe */}
          <div className="text-center mb-12">
            <p className="section-subtitle mb-3">Unvergessliche Momente</p>
            <h2 className="section-title">Brillantringe & Verlobungsringe</h2>
            <div className="divider-gold mx-auto mt-4" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {brillantringe.map((p) => (
              <article key={p.name} className="card-dark overflow-hidden group">
                <div className="relative h-64 category-img-placeholder">
                  <Image src={p.img} alt={p.name} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-kenju-black to-transparent" />
                </div>
                <div className="p-5">
                  <h3 className="font-serif text-xl text-kenju-cream mb-1">{p.name}</h3>
                  <p className="font-sans text-xs text-kenju-gold mb-1">{p.material}</p>
                  <p className="font-sans text-xs text-kenju-muted">{p.stone}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="text-center">
            <p className="font-sans text-kenju-muted mb-6">Alle Brillantringe sind individuell anfertigbar – in Ihrer Wunschgröße und Legierung.</p>
            <Link href="/#termin" className="btn-gold">Individuelle Beratung anfragen</Link>
          </div>
        </div>
      </section>

      {/* Goldlegierungen */}
      <section className="py-24 bg-kenju-navy">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="font-serif text-3xl text-kenju-cream mb-4">Warum KenJu für Ihren Ring?</h2>
              <div className="divider-gold mb-6" />
              <ul className="space-y-3 font-sans text-sm text-kenju-muted">
                {['585 Gelbgold, Weißgold & Roségold', 'Brillant-, Halo- und Solitär-Fassungen', 'Individuelle Anfertigungen nach Wunsch',
                  'Kostenlose Ringgrößenbestimmung', 'Gravuren auf Anfrage', 'Faire Preise ohne versteckte Aufschläge'].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-kenju-gold shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="font-serif text-3xl text-kenju-cream mb-4">Unsere Goldlegierungen</h2>
              <div className="divider-gold mb-6" />
              <div className="space-y-4">
                {[
                  { c: '585 Gelbgold', desc: '14 Karat Gelbgold – der Klassiker für warmen Goldglanz.' },
                  { c: '585 Weißgold', desc: '14 Karat Weißgold – modern, rhodiniert für brillanten Glanz.' },
                  { c: '585 Roségold', desc: '14 Karat Roségold – romantisch und zeitlos elegant.' },
                  { c: '750 Gold',     desc: '18 Karat Gold – maximale Reinheit auf Anfrage erhältlich.' },
                ].map((item) => (
                  <div key={item.c} className="flex gap-4">
                    <span className="font-serif text-base gold-text shrink-0 w-32">{item.c}</span>
                    <p className="font-sans text-xs text-kenju-muted">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Appointment */}
      <section className="py-24 bg-kenju-black" id="termin">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-title mb-3">Ring-Beratung buchen</h2>
            <p className="font-sans text-kenju-muted">Kostenlose und unverbindliche Beratung in unserem Atelier in Bielefeld.</p>
          </div>
          <div className="card-dark p-8"><AppointmentForm /></div>
        </div>
      </section>
    </>
  );
}
