import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import CategoryHero from '@/components/CategoryHero';

export const metadata: Metadata = {
  title: 'Creolen â€“ Goldcreolen in 585 Gelbgold | KenJu Juwelier',
  description: 'Exklusive Goldcreolen in 585 Gelbgold. Filigrane Creolen, gedrehte Creolen in 2 GrÃ¶ÃŸen und bunte Farbstein-Creolen. Neu #NEW erhÃ¤ltlich.',
  keywords: ['Creolen', 'Goldcreolen', 'Creolen Farbsteine', '585 Gelbgold', 'Juwelier'],
  alternates: { canonical: 'https://kenju-juwelier.de/creolen' },
};

const items = [
  { name: 'Filigrane Creolen',          material: '585 Gelbgold', detail: 'Florales Muster, 3 GrÃ¶ÃŸen',           img: '/images/creolen-filigran.jpg' },
  { name: 'Gedrehte Creolen klein',      material: '585 Gelbgold', detail: 'Twisted Design, #NEW',               img: '/images/creolen-gedreht.jpg' },
  { name: 'Gedrehte Creolen groÃŸ',       material: '585 Gelbgold', detail: 'Statement-Piece, #NEW',              img: '/images/creolen-gedreht.jpg' },
  { name: 'Creolen Bunt #FARBSTEINE',    material: '585 Gelbgold', detail: 'Regenbogen-Farbsteine, 3 GrÃ¶ÃŸen',   img: '/images/creolen-farbsteine.jpg' },
];

export default function CreolenPage() {
  return (
    <>
      <CategoryHero
        title="Creolen"
        subtitle="Klassisch & Modern"
        description="Von filigranen Miniaturcreolen bis zu bunten Farbstein-Creolen â€“ unsere Kollektion in 585 Gelbgold vereint Klassik und zeitgenÃ¶ssisches Design."
        imageSrc="/images/creolen-gedreht.jpg"
        imageAlt="Goldcreolen KenJu Juwelier 585 Gelbgold"
        breadcrumb="Creolen"
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
            <Link href="/#termin" className="btn-gold">Creolen anfragen</Link>
          </div>
        </div>
      </section>
    </>
  );
}
