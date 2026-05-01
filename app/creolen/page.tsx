import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import CategoryHero from '@/components/CategoryHero';

export const metadata: Metadata = {
  title: 'Creolen Berlin – Gold & Diamant Creolen | KenJu Juwelier',
  description: 'Elegante Creolen in Berlin. Klassische und moderne Creolen in Gelbgold, Weißgold, Roségold und Platin. Brillant-besetzte Creolen auf Anfrage.',
  keywords: ['Creolen Berlin', 'Goldcreolen', 'Diamant Creolen', 'Ohrringe Gold', 'Juwelier Berlin'],
  alternates: { canonical: 'https://kenju-juwelier.de/creolen' },
};

const items = [
  { name: 'Klassische Creolen', material: '18K Gelbgold', detail: '30 mm Durchmesser', img: '/images/image_3.png' },
  { name: 'Diamant Creolen', material: '18K Weißgold', detail: 'Brillant-Pavé innen', img: '/images/image_6.png' },
  { name: 'Twisted Creolen', material: '14K Roségold', detail: 'Gedrehtes Design', img: '/images/image_8.png' },
  { name: 'Große Statement Creolen', material: '18K Gelbgold', detail: '50 mm, matt poliert', img: '/images/image_9.png' },
];

export default function CreolenPage() {
  return (
    <>
      <CategoryHero
        title="Creolen"
        subtitle="Klassisch & Modern"
        description="Von zarten Mini-Creolen bis zu großen Statement-Ohrringen – unsere Creolen-Kollektion vereint Klassik und zeitgenössisches Design."
        imageSrc="/images/image_3.png"
        imageAlt="Goldcreolen KenJu Juwelier Berlin"
        breadcrumb="Creolen"
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
            <Link href="/#termin" className="btn-gold">Creolen anfragen</Link>
          </div>
        </div>
      </section>
    </>
  );
}
