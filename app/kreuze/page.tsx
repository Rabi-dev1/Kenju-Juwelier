import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import CategoryHero from '@/components/CategoryHero';

export const metadata: Metadata = {
  title: 'Gold- & Silberkreuze â€“ Hochwertige Kreuze | KenJu Juwelier',
  description: 'Handgefertigte Goldkreuze in 585 Gelbgold. Filigrane Kreuze, Dog-Tag Kreuz-AnhÃ¤nger und klassische Designs. PersÃ¶nliche Gravur mÃ¶glich.',
  keywords: ['Kreuze Gold', 'Goldkreuz', 'Kreuz AnhÃ¤nger', 'Juwelier', '585 Gelbgold'],
  alternates: { canonical: 'https://kenju-juwelier.de/kreuze' },
};

const items = [
  { name: 'Filigran-Kreuz',    material: '585 Gelbgold', detail: 'Handgraviertes Flechtmuster',      img: '/images/kreuz-filigran.jpg' },
  { name: 'Filigran-Kreuz II', material: '585 Gelbgold', detail: 'Verschiedene GrÃ¶ÃŸen erhÃ¤ltlich',   img: '/images/kreuz-filigran.jpg' },
  { name: 'Dog-Tag Kreuz',     material: '585 Gelbgold', detail: 'Mattiert mit Kreuz-Gravur, #NEW',  img: '/images/kreuz-platte.jpg' },
  { name: 'Kreuz-Platte',      material: '585 Gelbgold', detail: '3 GrÃ¶ÃŸen: S, M, L',               img: '/images/kreuz-platte.jpg' },
];

export default function KreuzePage() {
  return (
    <>
      <CategoryHero
        title="Kreuze"
        subtitle="Glaube & Eleganz"
        description="Handgefertigte Goldkreuze in 585 Gelbgold â€“ von filigranen Flechtmustern bis zu modernen Dog-Tag Designs. Ein Symbol fÃ¼r Glaube und Tradition."
        imageSrc="/images/kreuze.jpg"
        imageAlt="Goldschmied am Werktisch – KenJu Juwelier Bielefeld"
        breadcrumb="Kreuze"
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

          <div className="max-w-2xl mx-auto text-center">
            <p className="section-subtitle mb-4">Handwerk & Tradition</p>
            <h2 className="font-serif text-3xl text-kenju-cream mb-4">Kreuze mit persÃ¶nlicher Bedeutung</h2>
            <div className="divider-gold mx-auto mb-6" />
            <p className="font-sans text-sm text-kenju-muted leading-relaxed mb-8">
              Unsere Kreuze in 585 Gelbgold werden von Hand gefertigt und kÃ¶nnen auf Wunsch mit
              einer persÃ¶nlichen Gravur versehen oder in individuellen MaÃŸen angefertigt werden.
              Von der schlichten Eleganz bis zum aufwÃ¤ndigen Flechtmuster â€“ wir realisieren Ihren Wunsch.
            </p>
            <Link href="/#termin" className="btn-gold">Kreuz individuell anfertigen lassen</Link>
          </div>
        </div>
      </section>
    </>
  );
}
