import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import CategoryHero from '@/components/CategoryHero';

export const metadata: Metadata = {
  title: 'Armreifen â€“ Goldbangles & ArmbÃ¤nder in 585 Gold | KenJu Juwelier',
  description: 'Exklusive Armreifen und ArmbÃ¤nder in 585 Gelbgold und RosÃ©gold. Wellen-Armreif, gedrehte Bangles und feine RosÃ©gold-ArmbÃ¤nder bei KenJu Juwelier.',
  keywords: ['Armreifen', 'Goldbangle', 'Armband Gold', '585 Gelbgold', 'RosÃ©gold Armband'],
  alternates: { canonical: 'https://kenju-juwelier.de/armreifen' },
};

const items = [
  { name: 'Wellen-Armreif',      material: '585 Gelbgold',  detail: 'Organische Wellenform, poliert #ARMREIF', img: '/images/armreif-welle.jpg' },
  { name: 'RosÃ©gold-Armband',    material: '585 RosÃ©gold',  detail: 'Zarte Panzerkette, verstellbar',          img: '/images/armband-rose.jpg' },
  { name: 'Gedrehter Bangle',    material: '585 Gelbgold',  detail: 'Twisted Muster, matt & poliert #ARMREIF', img: '/images/armreif-gedreht.jpg' },
  { name: 'Bangle 2er-Set',      material: '585 Gelbgold',  detail: '2 Bangles im Set, verschiedene Breiten',  img: '/images/armreif-gedreht.jpg' },
];

export default function ArmreifenPage() {
  return (
    <>
      <CategoryHero
        title="Armreifen"
        subtitle="Eleganz am Handgelenk"
        description="Unsere Armreifen und ArmbÃ¤nder in 585 Gelbgold und RosÃ©gold â€“ vom organischen Wellen-Armreif bis zum feinen RosÃ©gold-Armband."
        imageSrc="/images/armreifen.jpg"
        imageAlt="Juwelier mit Schmucktablett – KenJu Juwelier Bielefeld"
        breadcrumb="Armreifen"
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
            <Link href="/#termin" className="btn-gold">Armreif anfragen</Link>
          </div>
        </div>
      </section>
    </>
  );
}
