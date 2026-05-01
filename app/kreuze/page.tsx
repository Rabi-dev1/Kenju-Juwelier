import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import CategoryHero from '@/components/CategoryHero';

export const metadata: Metadata = {
  title: 'Gold- & Silberkreuze Berlin – Hochwertige Kreuze | KenJu Juwelier',
  description: 'Handgefertigte Gold- und Silberkreuze in Berlin. Klassische und moderne Designs in 14K, 18K Gold und 925er Silber. Persönliche Gravur möglich.',
  keywords: ['Kreuze Gold Berlin', 'Goldkreuz', 'Silberkreuz', 'Kreuz Anhänger', 'Juwelier Berlin'],
  alternates: { canonical: 'https://kenju-juwelier.de/kreuze' },
};

const items = [
  { name: 'Klassisches Goldkreuz', material: '18K Gelbgold', detail: 'Mit Brillant-Besatz', img: '/images/image_0.png' },
  { name: 'Byzantinisches Kreuz', material: '14K Weißgold', detail: 'Handgraviert', img: '/images/image_1.png' },
  { name: 'Orthodoxes Kreuz', material: '925er Silber vergoldet', detail: 'Emaillearbeit', img: '/images/image_2.png' },
  { name: 'Kreuz mit Diamant', material: '18K Roségold', detail: '0,10 ct Brillant', img: '/images/image_3.png' },
];

export default function KreuzePage() {
  return (
    <>
      <CategoryHero
        title="Kreuze"
        subtitle="Glaube & Eleganz"
        description="Handgefertigte Gold- und Silberkreuze – ein Symbol für Glaube und Tradition, gefertigt mit höchster Handwerkskunst."
        imageSrc="/images/image_0.png"
        imageAlt="Goldkreuze KenJu Juwelier Berlin"
        breadcrumb="Kreuze"
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
          <div className="max-w-2xl mx-auto text-center">
            <p className="section-subtitle mb-4">Handwerk & Tradition</p>
            <h2 className="font-serif text-3xl text-kenju-cream mb-4">Kreuze mit persönlicher Bedeutung</h2>
            <div className="divider-gold mx-auto mb-6" />
            <p className="font-sans text-sm text-kenju-muted leading-relaxed mb-8">
              Unsere Kreuze werden von Hand gefertigt und können auf Wunsch mit einer persönlichen Gravur, Edelsteinen oder in individuellen Maßen angefertigt werden. Von der schlichten Eleganz bis zum aufwändigen Schmuckstück – wir realisieren Ihren Wunsch.
            </p>
            <Link href="/#termin" className="btn-gold">Kreuz individuell anfertigen lassen</Link>
          </div>
        </div>
      </section>
    </>
  );
}
