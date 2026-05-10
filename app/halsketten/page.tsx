import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import CategoryHero from '@/components/CategoryHero';

export const metadata: Metadata = {
  title: 'Halsketten & Kreuzanhänger – 585 Gold | KenJu Juwelier',
  description: 'Goldketten mit Anhängern und Kreuzanhänger in 585 Gelbgold bei KenJu Juwelier Bielefeld. Engelsflügel, Traumfänger, Herzketten sowie filigrane und klassische Goldkreuze.',
  keywords: ['Halsketten Gold', 'Goldkette Anhänger', 'Kreuzanhänger', 'Goldkreuz', 'Engelsflügel Kette', '585 Gelbgold', 'Juwelier Bielefeld'],
  alternates: { canonical: 'https://kenju-juwelier.de/halsketten' },
};

const ketten = [
  { name: 'Engelsflügel-Kette',      material: '585 Gelbgold', detail: 'Großer Flügel-Anhänger',                img: '/images/kette-engelsfluegel.jpg' },
  { name: 'Traumfänger-Kette',       material: '585 Gelbgold', detail: 'Dreamcatcher mit Kristall-Federn',      img: '/images/kette-traumfaenger.jpg' },
  { name: 'Herzkette',               material: '585 Gelbgold', detail: 'Kugel-Herz Anhänger, zarte Ankerkette', img: '/images/kette-herz.jpg' },
  { name: 'Layered Kreis-Anhänger',  material: '585 Gelbgold', detail: 'Mit Rubin, Smaragd & Kristall',         img: '/images/kette-kreis.jpg' },
  { name: 'Schlangenkette mit Kugeln', material: '585 Gelbgold', detail: 'Choker + lange Version',             img: '/images/kette-schlange.jpg' },
];

const kreuze = [
  { name: 'Filigran-Kreuz',  material: '585 Gelbgold', detail: 'Handgraviertes Flechtmuster',    img: '/images/kreuz-filigran.jpg' },
  { name: 'Filigran-Kreuz II', material: '585 Gelbgold', detail: 'Verschiedene Größen erhältlich', img: '/images/kreuz-filigran.jpg' },
  { name: 'Dog-Tag Kreuz',   material: '585 Gelbgold', detail: 'Mattiert mit Kreuz-Gravur, #NEW', img: '/images/kreuz-platte.jpg' },
  { name: 'Kreuz-Platte',    material: '585 Gelbgold', detail: '3 Größen: S, M, L',              img: '/images/kreuz-platte.jpg' },
];

export default function HalskettenPage() {
  return (
    <>
      <CategoryHero
        title="Halsketten & Kreuze"
        subtitle="Feine Ketten & Anhänger"
        description="Goldketten mit einzigartigen Anhängern und handgefertigte Kreuzanhänger in 585 Gelbgold – von der zarten Herzkette bis zum filigranen Goldkreuz."
        imageSrc="/images/halsketten.jpg"
        imageAlt="Paar hält Händchen – Halsketten KenJu Juwelier Bielefeld"
        breadcrumb="Halsketten"
      />

      {/* Halsketten */}
      <section className="py-24 bg-kenju-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="section-subtitle mb-3">Ketten & Anhänger</p>
            <h2 className="section-title">Halsketten</h2>
            <div className="divider-gold mx-auto mt-4" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            {ketten.map((p) => (
              <article key={p.name} className="card-dark overflow-hidden group">
                <div className="relative h-64 category-img-placeholder">
                  <Image src={p.img} alt={p.name} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
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

          {/* Kreuze */}
          <div className="text-center mb-12">
            <p className="section-subtitle mb-3">Glaube & Eleganz</p>
            <h2 className="section-title">Kreuzanhänger</h2>
            <div className="divider-gold mx-auto mt-4" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {kreuze.map((p) => (
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

          <div className="max-w-2xl mx-auto text-center mt-4">
            <p className="font-sans text-sm text-kenju-muted leading-relaxed mb-8">
              Unsere Kreuze in 585 Gelbgold werden von Hand gefertigt und können auf Wunsch mit einer
              persönlichen Gravur versehen oder in individuellen Maßen angefertigt werden.
            </p>
            <Link href="/#termin" className="btn-gold">Kette oder Kreuz anfragen</Link>
          </div>
        </div>
      </section>
    </>
  );
}
