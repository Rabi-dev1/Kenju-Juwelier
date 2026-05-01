import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import CategoryHero from '@/components/CategoryHero';

export const metadata: Metadata = {
  title: 'Halsketten Berlin – Gold & Platin Ketten | KenJu Juwelier',
  description: 'Exklusive Halsketten und Colliers in Berlin. Goldketten, Platinketten und individuelle Anhänger bei KenJu Juwelier – dem Spezialisten für feinen Goldschmuck.',
  keywords: ['Halsketten Berlin', 'Goldkette', 'Platinkette', 'Collier', 'Anhänger Gold', 'Juwelier Berlin'],
  alternates: { canonical: 'https://kenju-juwelier.de/halsketten' },
};

const items = [
  { name: 'Ankerkette', material: '18K Gelbgold', detail: '50 cm, 2 mm Breite', img: '/images/image_5.png' },
  { name: 'Diamant Collier', material: 'Platin 950', detail: '1,5 ct Brillant-Besatz', img: '/images/image_7.png' },
  { name: 'Venezianer Kette', material: '18K Weißgold', detail: '45 cm, 1 mm', img: '/images/image_9.png' },
  { name: 'Choker Diamant', material: '18K Roségold', detail: 'Brillant-Pavé', img: '/images/image_10.png' },
];

export default function HalskettenPage() {
  return (
    <>
      <CategoryHero
        title="Halsketten"
        subtitle="Feine Ketten & Colliers"
        description="Elegante Halsketten und Colliers in Gold, Weißgold und Platin – für jeden Anlass und jeden Stil, vom alltäglichen Begleiter bis zum besonderen Schmuckstück."
        imageSrc="/images/image_5.png"
        imageAlt="Goldhalsketten KenJu Juwelier Berlin"
        breadcrumb="Halsketten"
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
            <Link href="/#termin" className="btn-gold">Halskette anfragen</Link>
          </div>
        </div>
      </section>
    </>
  );
}
