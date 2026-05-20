import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import CategoryHero from '@/components/CategoryHero';

export const metadata: Metadata = {
  title: 'Armreifen – Goldbangles & Armbänder in 585 Gold | KenJu Juwelier',
  description: 'Exklusive Armreifen und Armbänder in 585 Gelbgold und Roségold. Wellen-Armreif, gedrehte Bangles und feine Roségold-Armbänder bei KenJu Juwelier.',
  keywords: ['Armreifen', 'Goldbangle', 'Armband Gold', '585 Gelbgold', 'Roségold Armband'],
  alternates: { canonical: 'https://kenju-juwelier.de/armreifen' },
};

const items = [
  { name: 'Wellen-Armreif',    material: '585 Gelbgold',  detail: 'Organische Wellenform, poliert',           img: '/images/armreifen.jpg' },
  { name: 'Roségold-Armband',  material: '585 Roségold',  detail: 'Zarte Panzerkette, verstellbar',           img: '/images/armreifen.jpg' },
  { name: 'Gedrehter Bangle',  material: '585 Gelbgold',  detail: 'Twisted Muster, matt & poliert',           img: '/images/armreifen.jpg' },
  { name: 'Bangle 2er-Set',    material: '585 Gelbgold',  detail: '2 Bangles im Set, verschiedene Breiten',   img: '/images/armreifen.jpg' },
];

export default function ArmreifenPage() {
  return (
    <>
      <CategoryHero
        title="Armreifen"
        subtitle="Eleganz am Handgelenk"
        description="Unsere Armreifen und Armbänder in 585 Gelbgold und Roségold – vom organischen Wellen-Armreif bis zum feinen Roségold-Armband."
        imageSrc="/images/armreifen.jpg"
        imageAlt="Juwelier mit Schmucktablett – KenJu Juwelier Bielefeld"
        breadcrumb="Armreifen"
      />

      <section className="py-24" style={{ backgroundColor: 'var(--kj-bg)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {items.map((p) => (
              <article
                key={p.name}
                className="overflow-hidden group transition-all duration-300 hover:shadow-lg"
                style={{ background: 'var(--kj-card)', border: '1px solid var(--kj-border)' }}
              >
                <div className="relative h-52 category-img-placeholder overflow-hidden">
                  <Image
                    src={p.img}
                    alt={p.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-all duration-500 group-hover:scale-105"
                    style={{ opacity: 0.85 }}
                  />
                  <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(8,8,15,0.6), transparent)' }} />
                </div>
                <div className="p-5">
                  <h3 className="font-serif text-xl mb-1" style={{ color: 'var(--kj-text)' }}>{p.name}</h3>
                  <p className="font-sans text-xs mb-1" style={{ color: 'var(--kj-gold)' }}>{p.material}</p>
                  <p className="font-sans text-xs" style={{ color: 'var(--kj-muted)' }}>{p.detail}</p>
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
