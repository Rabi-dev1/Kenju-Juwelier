import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import CategoryHero from '@/components/CategoryHero';
import AppointmentForm from '@/components/AppointmentForm';

export const metadata: Metadata = {
  title: 'Uhren – Tommy Hilfiger, Hugo Boss, Festina & mehr | KenJu Juwelier Bielefeld',
  description: 'Exklusive Markenuhren bei KenJu Juwelier Bielefeld: Tommy Hilfiger, Hugo Boss, Police, Regent, Swiss Military, Festina, Boccia, Certus und Sector. Persönliche Beratung vor Ort.',
  keywords: ['Uhren Bielefeld', 'Tommy Hilfiger', 'Hugo Boss', 'Festina', 'Boccia', 'Police', 'Regent', 'Swiss Military', 'Certus', 'Sector', 'Juwelier Bielefeld'],
  alternates: { canonical: 'https://kenju-juwelier.de/uhren' },
};

const allBrands = [
  'Tommy Hilfiger', 'Hugo Boss', 'Police', 'Regent',
  'Swiss Military', 'Festina', 'Boccia', 'Certus', 'Sector',
];

const brands = [
  {
    name: 'Tommy Hilfiger',
    subtitle: 'American Classic Style',
    desc: 'Tommy Hilfiger Uhren verbinden den ikonischen amerikanischen Preppy-Stil mit moderner Uhrmacherkunst. Klare Linien, hochwertige Edelstahlgehäuse und zeitloses Design machen diese Uhren zum perfekten Alltagsbegleiter – von der eleganten Business-Uhr bis zum lässigen Freizeitmodell. Das charakteristische Hilfiger-Design ist auf jedem Zifferblatt unverwechselbar.',
    tags: ['Casual', 'Business', 'Fashion'],
  },
  {
    name: 'Hugo Boss',
    subtitle: 'Deutscher Designanspruch',
    desc: 'Hugo Boss steht für unverwechselbaren deutschen Stil und höchste Verarbeitungsqualität. Die Uhrenkollektion überzeugt durch reduziertes, elegantes Design mit präziser Quarz-Mechanik. Saphirgläser, hochwertige Armbänder aus echtem Leder oder Edelstahl und das markante Boss-Branding machen jede Uhr zu einem Statement – ideal für den modernen Mann, der Klasse und Stil lebt.',
    tags: ['Elegant', 'Business', 'Premium'],
  },
  {
    name: 'Police',
    subtitle: 'Italienischer Urban Style',
    desc: 'Police Uhren sind mutig, urban und absolut unverwechselbar. Die italienische Modemarke bringt avantgardistisches Design und einen starken Charakter ans Handgelenk – asymmetrische Gehäuse, dunkle Zifferblätter und markante Kronenpositionen setzen Akzente. Für alle, die einen unkonventionellen Zeitmesser suchen, ohne dabei auf Qualität zu verzichten.',
    tags: ['Urban', 'Trendy', 'Fashion'],
  },
  {
    name: 'Regent',
    subtitle: 'Klassische Eleganz zum fairen Preis',
    desc: 'Regent steht für zeitlose Eleganz zu einem fairen Preis. Die Uhren überzeugen mit klassischen Designs, zuverlässiger Quarz-Mechanik und hochwertiger Verarbeitung. Ob schlichtes Herrenzifferblatt, feminines Damenmodell oder klassische Edelstahlkombination – Regent bietet eine breite Auswahl für jeden Stil und Anlass, ohne das Budget zu strapazieren.',
    tags: ['Klassisch', 'Damen & Herren', 'Alltagstauglich'],
  },
  {
    name: 'Swiss Military',
    subtitle: 'Schweizer Präzision & Robustheit',
    desc: 'Swiss Military Uhren vereinen Schweizer Uhrmachertradition mit militärischer Robustheit. Kratzfeste Mineralgläser, wasserdichte Gehäuse bis 10 ATM und zuverlässige Schweizer Quarzwerke machen diese Uhren zum verlässlichen Begleiter in jeder Situation – ob im Büro, auf Reisen oder beim Outdoor-Abenteuer. Qualität, auf die man sich jederzeit verlassen kann.',
    tags: ['Robust', 'Wasserdicht', 'Swiss Made'],
  },
  {
    name: 'Festina',
    subtitle: 'Spanische Uhrmacherkunst seit 1902',
    desc: 'Festina ist eine der traditionsreichsten europäischen Uhrenmarken und seit 1902 für Präzision und Design bekannt. Als offizieller Zeitnehmer der Tour de France steht Festina für Sportlichkeit und Ausdauer. Die Kollektion umfasst sportliche Chronographen, elegante Damenuhrwerke und robuste Herrenuhr-Klassiker – für jeden Geschmack das richtige Modell.',
    tags: ['Sport', 'Klassisch', 'Chronograph'],
  },
  {
    name: 'Boccia',
    subtitle: 'Leicht. Innovativ. Titanium.',
    desc: 'Boccia ist bekannt für außergewöhnlich leichte Titaniumuhren, die höchste Hautverträglichkeit mit elegantem Design verbinden. Das hypoallergene Titangehäuse ist ideal für Menschen mit empfindlicher Haut. Minimalistisches Formendesign, flache Profile und eine bemerkenswerte Robustheit machen Boccia-Uhren zu einer der klügsten Wahl für Allergiker und Designliebhaber gleichermaßen.',
    tags: ['Titanium', 'Allergikerfreundlich', 'Minimalistisch'],
  },
  {
    name: 'Certus',
    subtitle: 'Wertbeständige Klassiker',
    desc: 'Certus verbindet klassisches Uhrendesign mit zeitgemäßer Verarbeitungsqualität. Die Modelle bestechen durch klare Zifferblätter, fein polierte Gehäuse und elegante Leder- oder Metallbänder. Certus-Uhren sind darauf ausgerichtet, über Jahre hinweg zu begeistern – Qualitätsuhrwerke, die zuverlässig und stilvoll durch den Alltag begleiten.',
    tags: ['Klassisch', 'Qualität', 'Zeitlos'],
  },
  {
    name: 'Sector',
    subtitle: 'Italian Sports Watch',
    desc: 'Sector steht für italienisches Sportdesign, das Stil und Funktion vereint. Die Marke ist tief in der Motorsportwelt verwurzelt und bringt diesen Enthusiasmus in jede Uhr ein: markante Chronographen, robuste Gehäuseformen und eine mutige Farbgebung. Für aktive Menschen, die an ihrem Handgelenk eine Geschichte von Leidenschaft und Geschwindigkeit tragen möchten.',
    tags: ['Sport', 'Motorsport', 'Chronograph'],
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

      {/* ── Intro & Markenleiste ─────────────────────────── */}
      <section className="py-28" style={{ backgroundColor: 'var(--kj-bg)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Section header */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-20">
            <div>
              <p className="section-subtitle mb-4">Unser Sortiment</p>
              <h2 className="font-serif text-4xl md:text-5xl font-light leading-tight mb-6" style={{ color: 'var(--kj-text)' }}>
                Markenuhren für<br />jeden Geschmack
              </h2>
              <div className="divider-gold mb-8" />
              <p className="font-sans text-sm leading-relaxed mb-4" style={{ color: 'var(--kj-muted)' }}>
                Bei <strong style={{ color: 'var(--kj-text)' }}>KenJu Juwelier</strong> in Bielefeld führen
                wir eine handverlesene Auswahl renommierter Uhrenmarken – von klassisch-eleganten Zeitmessern
                über sportliche Chronographen bis zu innovativen Titaniummodellen. Unser Sortiment umfasst
                neun der bekanntesten und beliebtesten Marken weltweit.
              </p>
              <p className="font-sans text-sm leading-relaxed mb-8" style={{ color: 'var(--kj-muted)' }}>
                Kommen Sie vorbei und lassen Sie sich persönlich beraten – wir nehmen uns Zeit für Ihre
                Wünsche und helfen Ihnen, die Uhr zu finden, die perfekt zu Ihnen passt.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="#termin" className="btn-dark">Beratung anfragen</Link>
                <a href="tel:+4917663284312" className="btn-outline-gold">Jetzt anrufen</a>
              </div>
            </div>
            {/* Image with caption */}
            <div className="relative h-72 lg:h-96 overflow-hidden gold-border">
              <Image
                src="/images/creolen.jpg"
                alt="Uhren bei KenJu Juwelier Bielefeld"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                style={{ opacity: 0.82 }}
              />
              <div className="img-caption">
                <p className="font-serif text-base text-white leading-snug">9 Premiummarken · Persönliche Beratung</p>
                <p className="font-sans text-xs mt-1" style={{ color: 'rgba(255,255,255,0.55)' }}>
                  Bahnhofstraße 28 · Bielefeld
                </p>
              </div>
            </div>
          </div>

          {/* ── Markenleiste ── */}
          <div className="mb-6">
            <p className="section-subtitle text-center mb-8">Unsere Markenpartner</p>
            <div className="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-9 gap-3">
              {allBrands.map((brand) => (
                <div
                  key={brand}
                  className="flex items-center justify-center py-4 px-2 text-center transition-all duration-200 hover:border-yellow-600"
                  style={{
                    border: '1px solid var(--kj-border)',
                    background: 'var(--kj-surface)',
                  }}
                >
                  <span className="font-serif text-sm leading-tight" style={{ color: 'var(--kj-text)' }}>
                    {brand}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Brand Details ────────────────────────────────── */}
      <section className="py-8 pb-28" style={{ backgroundColor: 'var(--kj-surface)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="section-subtitle mb-3">Jede Marke im Detail</p>
            <h2 className="font-serif text-4xl font-light mb-4" style={{ color: 'var(--kj-text)' }}>
              Qualität, die man spürt
            </h2>
            <div className="divider-gold mx-auto" />
          </div>

          <div className="space-y-6">
            {brands.map((brand, i) => (
              <div
                key={brand.name}
                className="grid grid-cols-1 lg:grid-cols-2 gap-0 overflow-hidden"
                style={{ border: '1px solid var(--kj-border)' }}
              >
                {/* Text */}
                <div
                  className={`p-8 lg:p-10 flex flex-col justify-center ${i % 2 === 1 ? 'lg:order-2' : ''}`}
                  style={{ background: 'var(--kj-card)' }}
                >
                  <p className="section-subtitle mb-2">{brand.subtitle}</p>
                  <h3 className="font-serif text-3xl mb-4" style={{ color: 'var(--kj-text)' }}>{brand.name}</h3>
                  <div className="divider-gold mb-5" />
                  <p className="font-sans text-sm leading-relaxed mb-6" style={{ color: 'var(--kj-muted)' }}>
                    {brand.desc}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {brand.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-sans text-xs tracking-wider uppercase px-3 py-1.5"
                        style={{ background: 'var(--kj-surface)', border: '1px solid var(--kj-border)', color: 'var(--kj-muted)' }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                {/* Image */}
                <div
                  className={`relative h-56 lg:h-auto min-h-[240px] ${i % 2 === 1 ? 'lg:order-1' : ''}`}
                  style={{ background: 'var(--kj-surface)' }}
                >
                  <Image
                    src="/images/creolen.jpg"
                    alt={`${brand.name} Uhren bei KenJu Juwelier Bielefeld`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                    style={{ opacity: 0.55 }}
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span
                      className="font-serif text-3xl font-light text-white/90 text-center px-6"
                      style={{ textShadow: '0 2px 20px rgba(0,0,0,0.65)' }}
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
              <Link href="#termin" className="btn-gold">Beratung anfragen</Link>
              <a href="tel:+4917663284312" className="btn-outline-gold">Jetzt anrufen</a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Appointment ─────────────────────────────────── */}
      <section className="py-28" style={{ backgroundColor: 'var(--kj-bg)' }} id="termin">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="section-subtitle mb-3">Persönliche Beratung</p>
            <h2 className="section-title mb-4">Uhren-Termin buchen</h2>
            <div className="divider-gold mx-auto mb-4" />
            <p className="font-sans text-sm" style={{ color: 'var(--kj-muted)' }}>
              Kommen Sie in unser Atelier in der Bahnhofstraße 28 in Bielefeld –
              wir beraten Sie ausführlich zu unserer gesamten Uhren-Kollektion.
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
