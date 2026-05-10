import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import CategoryHero from '@/components/CategoryHero';

export const metadata: Metadata = {
  title: 'Halsketten â€“ Goldketten mit AnhÃ¤nger in 585 Gold | KenJu Juwelier',
  description: 'Exklusive Goldketten in 585 Gelbgold. EngelsflÃ¼gel-Kette, TraumfÃ¤nger-AnhÃ¤nger, Herzkette, layered KreisanhÃ¤nger und Schlangenkette mit Kugeln.',
  keywords: ['Halsketten Gold', 'Goldkette AnhÃ¤nger', 'EngelsflÃ¼gel Kette', 'TraumfÃ¤nger Gold', '585 Gelbgold'],
  alternates: { canonical: 'https://kenju-juwelier.de/halsketten' },
};

const items = [
  { name: 'EngelsflÃ¼gel-Kette',       material: '585 Gelbgold', detail: 'GroÃŸer FlÃ¼gel-AnhÃ¤nger #GOLDKETTE',        img: '/images/kette-engelsfluegel.jpg' },
  { name: 'TraumfÃ¤nger-Kette',         material: '585 Gelbgold', detail: 'Dreamcatcher mit Kristall-Federn',         img: '/images/kette-traumfaenger.jpg' },
  { name: 'Herzkette',                 material: '585 Gelbgold', detail: 'Kugel-Herz AnhÃ¤nger, zarte Ankerkette',    img: '/images/kette-herz.jpg' },
  { name: 'Layered Kreis-AnhÃ¤nger',    material: '585 Gelbgold', detail: 'Mit Rubin, Smaragd & Kristall',            img: '/images/kette-kreis.jpg' },
  { name: 'Schlangenkette mit Kugeln', material: '585 Gelbgold', detail: 'Choker + lange Version, gedrehte Kugeln',  img: '/images/kette-schlange.jpg' },
];

export default function HalskettenPage() {
  return (
    <>
      <CategoryHero
        title="Halsketten"
        subtitle="Feine Ketten & AnhÃ¤nger"
        description="Goldketten mit einzigartigen AnhÃ¤ngern in 585 Gelbgold â€“ von der zarten Herzkette bis zur auffÃ¤lligen EngelsflÃ¼gel-Kette."
        imageSrc="/images/halsketten.jpg"
        imageAlt="Paar hält Händchen – Halsketten KenJu Juwelier Bielefeld"
        breadcrumb="Halsketten"
      />

      <section className="py-24 bg-kenju-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {items.map((p) => (
              <article key={p.name} className="card-dark overflow-hidden group">
                <div className="relative h-64 category-img-placeholder">
                  <Image
                    src={p.img}
                    alt={p.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
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
            <Link href="/#termin" className="btn-gold">Halskette anfragen</Link>
          </div>
        </div>
      </section>
    </>
  );
}
