import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import CategoryHero from '@/components/CategoryHero';

export const metadata: Metadata = {
  title: 'Ohrringe – Ohrstecker & Creolen in 585 Gold | KenJu Juwelier',
  description: 'Goldohrstecker und Creolen in 585 Gelbgold bei KenJu Juwelier Bielefeld. Kugelohrstecker in 4 Größen, filigrane Creolen, gedrehte Creolen und bunte Farbstein-Creolen.',
  keywords: ['Ohrstecker', 'Creolen', 'Goldohrringe', 'Kugelohrstecker', 'Goldcreolen', '585 Gelbgold', 'Juwelier Bielefeld'],
  alternates: { canonical: 'https://kenju-juwelier.de/ohrringe' },
};

const ohrstecker = [
  { name: 'Kugel-Ohrstecker 3 mm', material: '585 Gelbgold', detail: 'Für das tägliche Tragen',       img: '/images/ohrstecker-kugel.jpg' },
  { name: 'Kugel-Ohrstecker 4 mm', material: '585 Gelbgold', detail: 'Beliebteste Größe',             img: '/images/ohrstecker-kugel.jpg' },
  { name: 'Kugel-Ohrstecker 6 mm', material: '585 Gelbgold', detail: 'Statement-Piece',              img: '/images/ohrstecker-kugel.jpg' },
  { name: 'Kugel-Ohrstecker 8 mm', material: '585 Gelbgold', detail: 'Maximaler Glanz',              img: '/images/ohrstecker-kugel.jpg' },
];

const creolen = [
  { name: 'Filigrane Creolen',       material: '585 Gelbgold', detail: 'Florales Muster, 3 Größen',     img: '/images/creolen-filigran.jpg' },
  { name: 'Gedrehte Creolen klein',  material: '585 Gelbgold', detail: 'Twisted Design, #NEW',          img: '/images/creolen-gedreht.jpg' },
  { name: 'Gedrehte Creolen groß',   material: '585 Gelbgold', detail: 'Statement-Piece, #NEW',         img: '/images/creolen-gedreht.jpg' },
  { name: 'Creolen Farbsteine',      material: '585 Gelbgold', detail: 'Regenbogen-Farbsteine, 3 Größen', img: '/images/creolen-farbsteine.jpg' },
];

export default function OhringePage() {
  return (
    <>
      <CategoryHero
        title="Ohrringe"
        subtitle="Ohrstecker & Creolen"
        description="Von klassischen Kugel-Ohrsteckern bis zu filigranen Creolen – unsere Ohrringe in 585 Gelbgold vereinen Eleganz und Alltagstauglichkeit."
        imageSrc="/images/ohrstecker.jpg"
        imageAlt="Juwelier Beratung Ohrringe – KenJu Juwelier Bielefeld"
        breadcrumb="Ohrringe"
      />

      {/* Ohrstecker */}
      <section className="py-24 bg-kenju-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="section-subtitle mb-3">Klassiker</p>
            <h2 className="section-title">Kugel-Ohrstecker</h2>
            <div className="divider-gold mx-auto mt-4" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {ohrstecker.map((p) => (
              <article key={p.name} className="card-dark overflow-hidden group">
                <div className="relative h-52 category-img-placeholder">
                  <Image src={p.img} alt={p.name} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover opacity-80 group-hover:opacity-100 transition-all duration-500" />
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
          {/* Creolen */}
          <div className="text-center mb-12">
            <p className="section-subtitle mb-3">Trendy & Klassisch</p>
            <h2 className="section-title">Creolen</h2>
            <div className="divider-gold mx-auto mt-4" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {creolen.map((p) => (
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

          <div className="text-center mt-8">
            <Link href="/#termin" className="btn-gold">Ohrringe anfragen</Link>
          </div>
        </div>
      </section>
    </>
  );
}
