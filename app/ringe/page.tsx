import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import CategoryHero from '@/components/CategoryHero';

export const metadata: Metadata = {
  title: 'Ringe Berlin – Eheringe, Siegelringe & mehr | KenJu Juwelier',
  description: 'Hochwertige Ringe in Berlin. Eheringe, Siegelringe, Bandringen und individuelle Unikate in Gold, Weißgold, Roségold und Platin.',
  keywords: ['Ringe Berlin', 'Eheringe Berlin', 'Goldring', 'Siegelring', 'Juwelier Berlin', 'Trauringe'],
  alternates: { canonical: 'https://kenju-juwelier.de/ringe' },
};

const items = [
  { name: 'Klassischer Ehering', material: '18K Gelbgold', detail: '4 mm Bandbreite', img: '/images/image_1.png' },
  { name: 'Siegelring', material: '14K Gelbgold', detail: 'Mit Wappenplatte', img: '/images/image_4.png' },
  { name: 'Infinity Ring', material: '18K Weißgold', detail: 'Diamant-Pavé', img: '/images/image_5.png' },
  { name: 'Cocktailring', material: '18K Roségold', detail: 'Rubin & Brillant', img: '/images/image_6.png' },
];

export default function RingePage() {
  return (
    <>
      <CategoryHero
        title="Ringe"
        subtitle="Zeitlose Eleganz"
        description="Von klassischen Eheringen bis zu auffälligen Cocktailringen – entdecken Sie unsere Ringkollektion in Gold, Weißgold und Platin."
        imageSrc="/images/image_1.png"
        imageAlt="Goldringe KenJu Juwelier Berlin"
        breadcrumb="Ringe"
      />
      <section className="py-24 bg-kenju-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {items.map((p) => (
              <article key={p.name} className="card-dark overflow-hidden group">
                <div className="relative h-52 category-img-placeholder">
                  <Image src={p.img} alt={p.name} fill className="object-cover opacity-75 group-hover:opacity-95 transition-all duration-500" />
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
