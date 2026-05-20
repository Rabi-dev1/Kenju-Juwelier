import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import CategoryHero from '@/components/CategoryHero';
import AppointmentForm from '@/components/AppointmentForm';

export const metadata: Metadata = {
  title: 'Uhren – Tommy Hilfiger, Hugo Boss, Police & mehr | KenJu Juwelier Bielefeld',
  description: 'Exklusive Uhren bei KenJu Juwelier Bielefeld. Tommy Hilfiger, Hugo Boss, Police, Regent und Swiss Military – stilvolle Markenuhren für jeden Anlass.',
  keywords: ['Uhren Bielefeld', 'Tommy Hilfiger Uhren', 'Hugo Boss Uhren', 'Police Uhren', 'Swiss Military Uhren', 'Juwelier Bielefeld'],
  alternates: { canonical: 'https://kenju-juwelier.de/uhren' },
};

const brands = [
  {
    name: 'Tommy Hilfiger',
    subtitle: 'American Classic Style',
    desc: 'Tommy Hilfiger Uhren verbinden den ikonischen amerikanischen Preppy-Stil mit moderner Uhrmacherkunst. Klare Linien, hochwertige Materialien und zeitloser Charakter machen diese Uhren zum perfekten Alltagsbegleiter – von der Business-Uhr bis zum lässigen Freizeitmodell.',
    tags: ['Casual', 'Business', 'Fashion'],
  },
  {
    name: 'Hugo Boss',
    subtitle: 'Deutscher Designanspruch',
    desc: 'Hugo Boss steht für unverwechselbaren deutschen Stil und höchste Verarbeitungsqualität. Die Uhrenkollektion überzeugt durch schlichtes, elegantes Design mit präziser Mechanik – ideal für den modernen Gentleman, der Wert auf Klasse und Stil legt.',
    tags: ['Elegant', 'Business', 'Premium'],
  },
  {
    name: 'Police',
    subtitle: 'Italienischer Urban Style',
    desc: 'Police Uhren sind mutig, urban und unverwechselbar. Die italienische Modemarke bringt avantgardistisches Design und einen starken Charakter ans Handgelenk. Für alle, die auffallen möchten – ohne auf Qualität zu verzichten.',
    tags: ['Urban', 'Trendy', 'Fashion'],
  },
  {
    name: 'Regent',
    subtitle: 'Klassische Eleganz',
    desc: 'Regent steht für zeitlose Eleganz zu einem fairen Preis. Die Uhren überzeugen mit klassischen Designs, zuverlässiger Quarz-Mechanik und hochwertiger Verarbeitung. Ideal für alle, die einen eleganten Zeitmesser ohne großen Aufpreis suchen.',
    tags: ['Klassisch', 'Elegant', 'Alltagstauglich'],
  },
  {
    name: 'Swiss Military',
    subtitle: 'Schweizer Präzision & Robustheit',
    desc: 'Swiss Military Uhren verbinden Schweizer Uhrmachertradition mit militärischer Robustheit. Kratzfeste Gehäuse, wasserdichte Konstruktion und präzise Schweizer Uhrwerke machen diese Uhren zum verlässlichen Begleiter – für Abenteuer wie für den Alltag.',
    tags: ['Robust', 'Wasserdicht', 'Swiss Made'],
  },
];

export default function UhrenPage() {
  return (
    <>
      <CategoryHero
        title="Uhren"
        subtitle="Markenuhren – Stilvoll. Präzise. Zeitlos."
        description="Bei KenJu Juwelier finden Sie eine sorgfältig ausgewählte Kollektion exklusiver Markenuhren – für jeden Stil, jeden Anlass und jedes Budget."
        imageSrc="/images/creolen.jpg"
        imageAlt="Uhren Kollektion KenJu Juwelier Bielefeld"
        breadcrumb="Uhren"
        pageUrl="https://kenju-juwelier.de/uhren"
      />

      {/* Brand Intro */}
      <section className="py-20" style={{ backgroundColor: 'var(--kj-bg)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="section-subtitle mb-3">Unsere Marken</p>
            <h2 className="section-title">Markenuhren – Stilvoll. Präzise. Zeitlos.</h2>
            <div className="divider-gold mx-auto mt-4 mb-8" />
            <p className="font-sans text-sm max-w-2xl mx-auto leading-relaxed" style={{ color: 'var(--kj-muted)' }}>
              Wir führen eine handverlesene Auswahl renommierter Uhrenmarken – von klassisch-elegant
              bis sportlich-modern. Kommen Sie vorbei und lassen Sie sich persönlich beraten.
            </p>
          </div>

          {/* Brand logos / tags */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {['Tommy Hilfiger', 'Hugo Boss', 'Police', 'Regent', 'Swiss Military'].map((brand) => (
              <span
                key={brand}
                className="font-sans text-sm tracking-widest uppercase px-6 py-3"
                style={{
                  border: '1px solid var(--kj-border)',
                  color: 'var(--kj-text)',
                  background: 'var(--kj-card)',
                }}
              >
                {brand}
              </span>
            ))}
          </div>

          {/* Brand cards */}
          <div className="space-y-8">
            {brands.map((brand, i) => (
              <div
                key={brand.name}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-0 overflow-hidden`}
                style={{ border: '1px solid var(--kj-border)' }}
              >
                {/* Text side */}
                <div
                  className={`p-8 lg:p-10 flex flex-col justify-center ${i % 2 === 1 ? 'lg:order-2' : ''}`}
                  style={{ background: 'var(--kj-card)' }}
                >
                  <p className="section-subtitle mb-2">{brand.subtitle}</p>
                  <h3 className="font-serif text-3xl mb-3" style={{ color: 'var(--kj-text)' }}>{brand.name}</h3>
                  <div className="divider-gold mb-5" />
                  <p className="font-sans text-sm leading-relaxed mb-6" style={{ color: 'var(--kj-muted)' }}>
                    {brand.desc}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {brand.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-sans text-xs tracking-wider uppercase px-3 py-1"
                        style={{ background: 'var(--kj-bg)', border: '1px solid var(--kj-border)', color: 'var(--kj-muted)' }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                {/* Image side */}
                <div
                  className={`relative h-64 lg:h-auto min-h-[260px] ${i % 2 === 1 ? 'lg:order-1' : ''}`}
                  style={{ background: 'var(--kj-surface)' }}
                >
                  <Image
                    src="/images/creolen.jpg"
                    alt={`${brand.name} Uhren bei KenJu Juwelier Bielefeld`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                    style={{ opacity: 0.6 }}
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span
                      className="font-serif text-4xl font-light text-white/90 text-center px-4"
                      style={{ textShadow: '0 2px 20px rgba(0,0,0,0.6)' }}
                    >
                      {brand.name}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-16">
            <p className="font-sans text-sm mb-6" style={{ color: 'var(--kj-muted)' }}>
              Kommen Sie in unser Geschäft und entdecken Sie unsere aktuelle Uhren-Kollektion persönlich.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/#termin" className="btn-gold">Beratung anfragen</Link>
              <a href="tel:+4917663284312" className="btn-outline-gold">Jetzt anrufen</a>
            </div>
          </div>
        </div>
      </section>

      {/* Appointment */}
      <section className="py-24" style={{ backgroundColor: 'var(--kj-surface)' }} id="termin">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="section-subtitle mb-3">Persönliche Beratung</p>
            <h2 className="section-title mb-3">Uhren-Termin buchen</h2>
            <div className="divider-gold mx-auto mb-4" />
            <p className="font-sans text-sm" style={{ color: 'var(--kj-muted)' }}>
              Kommen Sie in unser Atelier in Bielefeld – wir beraten Sie zu unserer gesamten Uhren-Kollektion.
            </p>
          </div>
          <div className="p-8" style={{ background: 'var(--kj-card)', border: '1px solid var(--kj-border)' }}>
            <AppointmentForm />
          </div>
        </div>
      </section>
    </>
  );
}
