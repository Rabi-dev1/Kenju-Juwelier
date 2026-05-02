import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import CategoryHero from '@/components/CategoryHero';

export const metadata: Metadata = {
  title: 'Ringe – Goldringe & Eheringe in 585 Gold | KenJu Juwelier',
  description: 'Hochwertige Ringe in 585 Gelbgold. Solitärringe mit Brillant, Baguette-Ringe mit Farbsteinen (Rubin, Smaragd) und individuelle Anfertigungen.',
  keywords: ['Ringe', 'Goldringe', 'Solitärring', 'Baguette Ring', 'Rubin Ring', 'Smaragd Ring', '585 Gelbgold'],
  alternates: { canonical: 'https://kenju-juwelier.de/ringe' },
};

const items = [
  { name: 'Solitär-Ring',          material: '585 Gelbgold', detail: 'Mit Zirkonia-Brillant, handgravierter Ringschiene', img: '/images/ring-solitaer.jpg' },
  { name: 'Baguette-Ring Rubin',   material: '585 Gelbgold', detail: 'Roter Baguette-Stein, Panzerketten-Schiene',        img: '/images/ring-baguette.jpg' },
  { name: 'Baguette-Ring Smaragd', material: '585 Gelbgold', detail: 'Grüner Baguette-Stein, florale Gravur',             img: '/images/ring-baguette.jpg' },
  { name: 'Individueller Ring',    material: '585 Gold',      detail: 'Nach Ihren Wünschen angefertigt',                  img: '/images/ring-solitaer.jpg' },
];

export default function RingePage() {
  return (
    <>
      <CategoryHero
        title="Ringe"
        subtitle="Zeitlose Eleganz"
        description="Von klassischen Solitärringen bis zu auffälligen Baguette-Ringen mit Farbsteinen – entdecken Sie unsere Ringkollektion in 585 Gelbgold."
        imageSrc="/images/ring-baguette.jpg"
        imageAlt="Goldringe KenJu Juwelier 585 Gelbgold"
        breadcrumb="Ringe"
      />

      <section className="py-24 bg-kenju-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {items.map((p) => (
              <article key={p.name} className="card-dark overflow-hidden group">
                <div className="relative h-52 category-img-placeholder">
                  <Image
                    src={p.img}
                    alt={p.name}
                    fill
                    className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                  />
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
          <div className="text-center">
            <p className="font-sans text-kenju-muted mb-6">Alle Ringe sind in Ihrer Wunschgröße erhältlich. Gravuren auf Anfrage.</p>
            <Link href="/#termin" className="btn-gold">Ring individuell gestalten</Link>
          </div>
        </div>
      </section>
    </>
  );
}
