import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import CategoryHero from '@/components/CategoryHero';

export const metadata: Metadata = {
  title: 'Armreifen Berlin – Gold & Platin Armbänder | KenJu Juwelier',
  description: 'Exklusive Armreifen und Armbänder in Berlin. Massivgold, Brillant-besetzte Modelle und individuelle Anfertigung bei KenJu Juwelier.',
  keywords: ['Armreifen Berlin', 'Goldarmband', 'Platin Armreif', 'Diamant Armband', 'Juwelier Berlin'],
  alternates: { canonical: 'https://kenju-juwelier.de/armreifen' },
};

const items = [
  { name: 'Massiv-Armreif', material: '18K Gelbgold', detail: '10 mm Breite, poliert', img: '/images/image_4.png' },
  { name: 'Tennis-Armband', material: '18K Weißgold', detail: '2 ct Brillant-Besatz', img: '/images/image_5.png' },
  { name: 'Bangle Stack', material: '14K Roségold', detail: '3er-Set, dünn', img: '/images/image_8.png' },
  { name: 'Gravur-Armreif', material: '18K Gelbgold', detail: 'Personalisierte Gravur', img: '/images/image_10.png' },
];

export default function ArmreifenPage() {
  return (
    <>
      <CategoryHero
        title="Armreifen"
        subtitle="Eleganz am Handgelenk"
        description="Unsere Armreifen und Armbänder aus Gold und Platin sind zeitlose Schmuckstücke – von schlicht und elegant bis brillantbesetzt."
        imageSrc="/images/image_4.png"
        imageAlt="Goldarmreifen KenJu Juwelier Berlin"
        breadcrumb="Armreifen"
      />
      <section className="py-24 bg-kenju-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
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
            <Link href="/#termin" className="btn-gold">Armreif anfragen</Link>
          </div>
        </div>
      </section>
    </>
  );
}
