import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import CategoryHero from '@/components/CategoryHero';
import AppointmentForm from '@/components/AppointmentForm';

export const metadata: Metadata = {
  title: 'Brillantringe Berlin – Verlobungsringe & Diamantringe | KenJu Juwelier',
  description: 'Exklusive Brillantringe & Verlobungsringe in Berlin. IGI/GIA-zertifizierte Diamanten, handgefertigt in Gold & Platin. Kostenlose Beratung bei KenJu Juwelier.',
  keywords: ['Brillantringe Berlin', 'Verlobungsringe', 'Diamantringe', 'Brillant', 'Juwelier Berlin'],
  alternates: { canonical: 'https://kenju-juwelier.de/brillantringe' },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'Brillantringe',
  description: 'Handgefertigte Brillant- und Verlobungsringe in Gold und Platin mit IGI/GIA-zertifizierten Diamanten.',
  brand: { '@type': 'Brand', name: 'KenJu Juwelier' },
  offers: { '@type': 'AggregateOffer', priceCurrency: 'EUR', offerCount: '50+', availability: 'https://schema.org/InStock' },
};

const products = [
  { name: 'Solitär Classic', material: '18K Weißgold', stone: '0,50 ct Brillant (H/VS)', img: '/images/image_6.png' },
  { name: 'Halo Diamant', material: '18K Gelbgold', stone: '0,75 ct Brillant (F/VVS)', img: '/images/image_9.png' },
  { name: 'Trilogy Ring', material: 'Platin 950', stone: '1,00 ct total (G/VS)', img: '/images/image_10.png' },
  { name: 'Pavé Eternity', material: '18K Roségold', stone: '0,50 ct Brillant-Pavé', img: '/images/image_7.png' },
];

export default function BrillantrингePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <CategoryHero
        title="Brillantringe"
        subtitle="Unvergessliche Momente"
        description="Brillantringe für die schönsten Momente Ihres Lebens – handgefertigt aus IGI- und GIA-zertifizierten Diamanten in Gold und Platin."
        imageSrc="/images/image_6.png"
        imageAlt="Brillantringe KenJu Juwelier Berlin"
        breadcrumb="Brillantringe"
      />

      {/* Products */}
      <section className="py-24 bg-kenju-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="section-subtitle mb-3">Ausgewählte Stücke</p>
            <h2 className="section-title">Unsere Brillantring-Kollektion</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((p) => (
              <article key={p.name} className="card-dark overflow-hidden group">
                <div className="relative h-56 category-img-placeholder">
                  <Image src={p.img} alt={p.name} fill className="object-cover opacity-75 group-hover:opacity-95 group-hover:scale-105 transition-all duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-kenju-black to-transparent" />
                </div>
                <div className="p-5">
                  <h3 className="font-serif text-xl text-kenju-cream mb-1">{p.name}</h3>
                  <p className="font-sans text-xs text-kenju-gold mb-1">{p.material}</p>
                  <p className="font-sans text-xs text-kenju-muted">{p.stone}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-12 text-center">
            <p className="font-sans text-kenju-muted mb-6">Alle Brillantringe sind auf Anfrage individuell anfertigbar.</p>
            <Link href="/#termin" className="btn-gold">Individuelle Beratung anfragen</Link>
          </div>
        </div>
      </section>

      {/* Info */}
      <section className="py-24 bg-kenju-navy">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="font-serif text-3xl text-kenju-cream mb-4">Warum KenJu für Ihren Brillantring?</h2>
              <div className="divider-gold mb-6" />
              <ul className="space-y-3 font-sans text-sm text-kenju-muted">
                {[
                  'IGI- & GIA-zertifizierte Diamanten',
                  'Individuelle Anfertigungen nach Wunsch',
                  'Kostenlose Umarbeitung bestehender Ringe',
                  'Gratis Reinigung & Inspektion',
                  'Zertifikat für jeden Brillanten',
                  'Faire Preise ohne Aufschläge',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-kenju-gold shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="font-serif text-3xl text-kenju-cream mb-4">Die 4 Cs Ihres Brillanten</h2>
              <div className="divider-gold mb-6" />
              <div className="space-y-4">
                {[
                  { c: 'Cut', desc: 'Der Schliff bestimmt das Feuer und die Brillanz des Diamanten.' },
                  { c: 'Color', desc: 'Von D (farblos) bis Z – wir empfehlen D–H für strahlenden Glanz.' },
                  { c: 'Clarity', desc: 'IF bis SI – mit bloßem Auge makellose Qualitäten ab VS.' },
                  { c: 'Carat', desc: 'Das Gewicht des Diamanten – wir beraten Sie zur idealen Größe.' },
                ].map((item) => (
                  <div key={item.c} className="flex gap-4">
                    <span className="font-serif text-xl gold-text shrink-0 w-24">{item.c}</span>
                    <p className="font-sans text-xs text-kenju-muted">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Appointment */}
      <section className="py-24 bg-kenju-black" id="termin">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-title mb-3">Brillantring-Beratung buchen</h2>
            <p className="font-sans text-kenju-muted">Kostenlose und unverbindliche Beratung in unserem Atelier.</p>
          </div>
          <div className="card-dark p-8"><AppointmentForm /></div>
        </div>
      </section>
    </>
  );
}
