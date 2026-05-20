import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import CategoryHero from '@/components/CategoryHero';
import AppointmentForm from '@/components/AppointmentForm';

export const metadata: Metadata = {
  title: 'Uhren – Tommy Hilfiger, Hugo Boss, Police & mehr | KenJu Juwelier Bielefeld',
  description: 'Exklusive Markenuhren bei KenJu Juwelier Bielefeld: Tommy Hilfiger, Hugo Boss, Police, Regent und Swiss Military. Persönliche Beratung und fachkundiger Uhrenservice vor Ort.',
  keywords: ['Uhren Bielefeld', 'Tommy Hilfiger Uhren', 'Hugo Boss Uhren', 'Police Uhren', 'Regent Uhren', 'Swiss Military Uhren', 'Juwelier Bielefeld'],
  alternates: { canonical: 'https://kenju-juwelier.de/uhren' },
};

const brands = [
  {
    name: 'Tommy Hilfiger',
    subtitle: 'American Classic Style',
    desc: 'Tommy Hilfiger Uhren verbinden den ikonischen amerikanischen Preppy-Stil mit moderner Uhrmacherkunst. Klare Linien, hochwertige Edelstahlgehäuse und zeitloses Design machen diese Uhren zum perfekten Alltagsbegleiter – vom eleganten Businessmodell bis zur lässigen Freizeitvariante. Das charakteristische Hilfiger-Design ist auf jedem Zifferblatt sofort erkennbar.',
    tags: ['Casual', 'Business', 'Fashion'],
  },
  {
    name: 'Hugo Boss',
    subtitle: 'Deutscher Designanspruch',
    desc: 'Hugo Boss steht für unverwechselbaren Stil und höchste Verarbeitungsqualität. Die Uhrenkollektion überzeugt durch reduziertes, elegantes Design mit präziser Quarz-Mechanik. Saphirgläser, hochwertige Leder- oder Edelstahlarmbänder und das markante Boss-Branding machen jede Uhr zum Statement – ideal für den modernen Mann, dem Klasse und Stil wichtig sind.',
    tags: ['Elegant', 'Business', 'Premium'],
  },
  {
    name: 'Police',
    subtitle: 'Italienischer Urban Style',
    desc: 'Police Uhren sind mutig, urban und absolut unverwechselbar. Die italienische Modemarke bringt avantgardistisches Design und einen starken Charakter ans Handgelenk – asymmetrische Gehäuse, dunkle Zifferblätter und markante Details setzen bewusst Akzente. Für alle, die einen unkonventionellen Zeitmesser suchen, ohne auf Qualität zu verzichten.',
    tags: ['Urban', 'Trendy', 'Statement'],
  },
  {
    name: 'Regent',
    subtitle: 'Zeitlose Eleganz zum fairen Preis',
    desc: 'Regent steht für klassische Eleganz zu einem fairen Preis. Die Modelle überzeugen mit schlichten Designs, zuverlässiger Quarz-Mechanik und hochwertiger Verarbeitung. Ob klassisches Herrenzifferblatt, feminines Damenmodell oder eine schlichte Bicolor-Variante – Regent bietet eine breite Auswahl für alle Anlässe des Alltags.',
    tags: ['Klassisch', 'Damen & Herren', 'Alltagstauglich'],
  },
  {
    name: 'Swiss Military',
    subtitle: 'Schweizer Präzision & Robustheit',
    desc: 'Swiss Military vereint Schweizer Uhrmachertradition mit militärischer Robustheit. Kratzfeste Gläser, wasserdichte Gehäuse und präzise Schweizer Uhrwerke machen diese Modelle zum verlässlichen Begleiter in jeder Situation – ob im Büro, auf Reisen oder beim Outdoor-Abenteuer. Qualität, auf die man sich jederzeit verlassen kann.',
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

      {/* ── Intro: 1 Bild + starker Text ─────────────────── */}
      <section className="py-32" style={{ backgroundColor: 'var(--kj-bg)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

            {/* Das EINE premium Bild der gesamten Seite */}
            <div className="relative h-96 lg:h-[580px] overflow-hidden gold-border">
              <Image
                src="/images/creolen.jpg"
                alt="Markenuhren bei KenJu Juwelier Bielefeld"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                priority
                style={{ opacity: 0.85 }}
              />
              <div className="img-caption">
                <p className="font-serif text-xl text-white">Stil am Handgelenk</p>
                <p className="font-sans text-xs mt-1" style={{ color: 'rgba(255,255,255,0.55)' }}>
                  5 Premiummarken · Persönliche Beratung · Bielefeld
                </p>
              </div>
              <div
                className="absolute top-5 left-5 px-4 py-3"
                style={{ background: 'rgba(8,8,15,0.80)', border: '1px solid rgba(154,120,24,0.4)' }}
              >
                <p className="font-sans text-xs tracking-widest uppercase" style={{ color: 'var(--kj-gold)' }}>Markenuhren</p>
                <p className="font-serif text-sm text-white mt-0.5">KenJu Juwelier</p>
              </div>
            </div>

            {/* Text */}
            <div>
              <p className="section-subtitle mb-5">Unser Sortiment</p>
              <h2 className="font-serif text-4xl md:text-5xl font-light leading-tight mb-6" style={{ color: 'var(--kj-text)' }}>
                Markenuhren für<br />jeden Anlass
              </h2>
              <div className="divider-gold mb-8" />
              <p className="font-sans text-sm leading-relaxed mb-5" style={{ color: 'var(--kj-muted)' }}>
                Bei <strong style={{ color: 'var(--kj-text)' }}>KenJu Juwelier</strong> in Bielefeld führen
                wir eine handverlesene Auswahl renommierter Uhrenmarken – von klassisch-eleganten
                Zeitmessern über sportliche Modelle bis hin zu modernen Designuhren für Sie und Ihn.
              </p>
              <p className="font-sans text-sm leading-relaxed mb-5" style={{ color: 'var(--kj-muted)' }}>
                Jede Uhr in unserem Sortiment wurde sorgfältig ausgewählt: Wir setzen auf Marken,
                die für <strong style={{ color: 'var(--kj-text)' }}>Qualität, Stil und Zuverlässigkeit</strong> stehen.
                Ob als täglicher Begleiter, Geschenk oder besonderes Stück für besondere Momente –
                bei uns finden Sie die passende Uhr.
              </p>
              <p className="font-sans text-sm leading-relaxed mb-10" style={{ color: 'var(--kj-muted)' }}>
                Kommen Sie in unser Geschäft und lassen Sie sich persönlich beraten. Wir nehmen uns
                Zeit für Ihre Wünsche – und helfen Ihnen, den richtigen Zeitmesser zu finden.
              </p>

              {/* Marken-Chips */}
              <div className="flex flex-wrap gap-2 mb-10">
                {brands.map((b) => (
                  <span key={b.name} className="brand-tag">{b.name}</span>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="#termin" className="btn-dark">Beratung anfragen</Link>
                <a href="tel:+4917663284312" className="btn-outline-gold">Jetzt anrufen</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Marken – edle Listenansicht ─────────────────── */}
      <section className="py-28" style={{ backgroundColor: 'var(--kj-surface)' }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="section-subtitle mb-4">Unsere Markenpartner</p>
            <h2 className="font-serif text-4xl font-light mb-5" style={{ color: 'var(--kj-text)' }}>
              Qualität, die man spürt
            </h2>
            <div className="divider-gold mx-auto" />
          </div>

          {/* Clean brand list – Steglitz style */}
          <div className="flex flex-col">
            {brands.map((brand, i) => (
              <div
                key={brand.name}
                className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-6 md:gap-12 py-10 items-start"
                style={{
                  borderTop: i === 0 ? '1px solid var(--kj-border)' : 'none',
                  borderBottom: '1px solid var(--kj-border)',
                }}
              >
                {/* Brand name column */}
                <div className="md:pt-1">
                  <h3 className="font-serif text-2xl mb-1" style={{ color: 'var(--kj-text)' }}>
                    {brand.name}
                  </h3>
                  <p className="section-subtitle" style={{ fontSize: '0.65rem' }}>{brand.subtitle}</p>
                  <div className="flex flex-wrap gap-1.5 mt-4">
                    {brand.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-sans text-xs px-2.5 py-1 tracking-wide"
                        style={{ background: 'var(--kj-card)', border: '1px solid var(--kj-border)', color: 'var(--kj-muted)' }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                {/* Description column */}
                <p className="font-sans text-sm leading-relaxed" style={{ color: 'var(--kj-muted)' }}>
                  {brand.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-14">
            <p className="font-sans text-xs mb-6" style={{ color: 'var(--kj-muted)' }}>
              Kommen Sie vorbei und entdecken Sie unsere aktuelle Uhren-Kollektion persönlich in Bielefeld.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="#termin" className="btn-gold">Beratung anfragen</Link>
              <a href="tel:+4917663284312" className="btn-outline-gold">Jetzt anrufen</a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Uhrenservice Hinweis ─────────────────────────── */}
      <section className="py-20" style={{ backgroundColor: 'var(--kj-bg)', borderTop: '1px solid var(--kj-border)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              { icon: '⟳', title: 'Batteriewechsel', desc: 'Schnell und sicher – noch am selben Tag, wasserdicht abgedichtet.' },
              { icon: '◇', title: 'Glaswechsel', desc: 'Ersatz von Mineralglas und Saphirglas für alle Uhrenmodelle.' },
              { icon: '↔', title: 'Armbandreparatur', desc: 'Kürzen, verlängern oder austauschen – Metall, Leder und Kunststoff.' },
            ].map((s) => (
              <div
                key={s.title}
                className="p-8"
                style={{ border: '1px solid var(--kj-border)', background: 'var(--kj-card)' }}
              >
                <span className="font-serif text-3xl mb-4 block" style={{ color: 'var(--kj-gold)' }}>{s.icon}</span>
                <h3 className="font-serif text-xl mb-3" style={{ color: 'var(--kj-text)' }}>{s.title}</h3>
                <p className="font-sans text-sm leading-relaxed" style={{ color: 'var(--kj-muted)' }}>{s.desc}</p>
              </div>
            ))}
          </div>
          <p className="font-sans text-xs text-center mt-6" style={{ color: 'var(--kj-muted)' }}>
            Alle Uhrenservices auch ohne Termin – einfach vorbeikommen.{' '}
            <Link href="/service" style={{ color: 'var(--kj-gold)' }}>Alle Serviceleistungen →</Link>
          </p>
        </div>
      </section>

      {/* ── Appointment ─────────────────────────────────── */}
      <section className="py-28" style={{ backgroundColor: 'var(--kj-surface)' }} id="termin">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="section-subtitle mb-3">Persönliche Beratung</p>
            <h2 className="section-title mb-4">Uhren-Termin buchen</h2>
            <div className="divider-gold mx-auto mb-5" />
            <p className="font-sans text-sm" style={{ color: 'var(--kj-muted)' }}>
              Kommen Sie in unser Atelier in der Bahnhofstraße 28 – wir beraten Sie ausführlich zu
              unserer gesamten Uhren-Kollektion und zum Uhrenservice.
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
