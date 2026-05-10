import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import CategoryHero from '@/components/CategoryHero';

export const metadata: Metadata = {
  title: 'Ohrstecker â€“ Goldohrstecker in 585 Gelbgold | KenJu Juwelier',
  description: 'Exklusive Goldohrstecker in 585 Gelbgold. Kugelohrstecker in 4 GrÃ¶ÃŸen (3mm, 4mm, 6mm, 8mm) â€“ schlicht und elegant fÃ¼r jeden Anlass.',
  keywords: ['Ohrstecker', 'Goldohrstecker', 'Kugelohrstecker', '585 Gelbgold', 'Juwelier'],
  alternates: { canonical: 'https://kenju-juwelier.de/ohrstecker' },
};

const items = [
  { name: 'Kugel-Ohrstecker 3 mm', material: '585 Gelbgold', detail: 'FÃ¼r das tÃ¤gliche Tragen', img: '/images/ohrstecker-kugel.jpg' },
  { name: 'Kugel-Ohrstecker 4 mm', material: '585 Gelbgold', detail: 'Beliebteste GrÃ¶ÃŸe',       img: '/images/ohrstecker-kugel.jpg' },
  { name: 'Kugel-Ohrstecker 6 mm', material: '585 Gelbgold', detail: 'Statement-Piece',         img: '/images/ohrstecker-kugel.jpg' },
  { name: 'Kugel-Ohrstecker 8 mm', material: '585 Gelbgold', detail: 'GroÃŸe Kugel, maximaler Glanz', img: '/images/ohrstecker-kugel.jpg' },
];

export default function OhrsteckerPage() {
  return (
    <>
      <CategoryHero
        title="Ohrstecker"
        subtitle="Schlicht & Strahlend"
        description="Klassische Kugel-Ohrstecker in 585 Gelbgold â€“ erhÃ¤ltlich in vier GrÃ¶ÃŸen (3, 4, 6 und 8 mm). Zeitlos elegant fÃ¼r jeden Anlass."
        imageSrc="/images/ohrstecker.jpg"
        imageAlt="Juwelier Beratung Ohrstecker – KenJu Juwelier Bielefeld"
        breadcrumb="Ohrstecker"
      />

      <section className="py-24 bg-kenju-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {items.map((p) => (
              <article key={p.name} className="card-dark overflow-hidden group">
                <div className="relative h-52 category-img-placeholder">
                  <Image
                    src={p.img}
                    alt={p.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover opacity-80 group-hover:opacity-100 transition-all duration-500"
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

          <div className="max-w-2xl mx-auto">
            <div className="card-dark p-8">
              <h2 className="font-serif text-3xl text-kenju-cream mb-4">Der perfekte Ohrstecker</h2>
              <div className="divider-gold mb-6" />
              <p className="font-sans text-sm text-kenju-muted leading-relaxed mb-6">
                Unsere Kugel-Ohrstecker in 585 Gelbgold sind ein absoluter Klassiker. Die perfekte Kugelform
                sorgt fÃ¼r maximalen Glanz â€“ von der zarten 3-mm-Variante fÃ¼r den Alltag bis zum auffÃ¤lligen
                8-mm-Stecker als Statement-Piece. Alle Stecker verfÃ¼gen Ã¼ber sichere Butterfly-VerschlÃ¼sse.
              </p>
              <Link href="/#termin" className="btn-gold">Ohrstecker anfragen</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
