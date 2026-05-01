import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import CategoryHero from '@/components/CategoryHero';

export const metadata: Metadata = {
  title: 'Ohrstecker Berlin – Brillant- & Edelstein-Ohrstecker | KenJu Juwelier',
  description: 'Exklusive Ohrstecker in Berlin. Brillant-Ohrstecker, Perlen- und Edelstein-Ohrringe in Gold, Weißgold und Platin. Handgefertigt bei KenJu Juwelier.',
  keywords: ['Ohrstecker Berlin', 'Brillant Ohrstecker', 'Diamant Ohrringe', 'Goldohrstecker', 'Juwelier Berlin'],
  alternates: { canonical: 'https://kenju-juwelier.de/ohrstecker' },
};

const items = [
  { name: 'Brillant-Solitär', material: '18K Weißgold', detail: '0,30 ct Brillant (F/VS)', img: '/images/image_2.png' },
  { name: 'Rubin-Ohrstecker', material: '14K Gelbgold', detail: 'Burma-Rubin 0,5 ct', img: '/images/image_3.png' },
  { name: 'Perlen-Ohrstecker', material: '18K Gelbgold', detail: 'Akoya-Perlen 7 mm', img: '/images/image_5.png' },
  { name: 'Saphir-Ohrstecker', material: '18K Weißgold', detail: 'Ceylon-Saphir + Brillant', img: '/images/image_7.png' },
];

export default function OhrsteckerPage() {
  return (
    <>
      <CategoryHero
        title="Ohrstecker"
        subtitle="Brillanz am Ohr"
        description="Zarte Brillant-Ohrstecker bis zu opulenten Edelstein-Arrangements – handgefertigt für jeden Anlass und jeden Stil."
        imageSrc="/images/image_2.png"
        imageAlt="Ohrstecker KenJu Juwelier Berlin"
        breadcrumb="Ohrstecker"
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
            <Link href="/#termin" className="btn-gold">Ohrstecker anfragen</Link>
          </div>
        </div>
      </section>
    </>
  );
}
