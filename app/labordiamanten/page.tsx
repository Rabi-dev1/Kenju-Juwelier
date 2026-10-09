import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { standorte } from '@/lib/standorte';

export const metadata: Metadata = {
  title: 'Labor Diamanten Bielefeld & Lippstadt',
  description:
    'Labor-Diamant-Schmuck in Bielefeld und Lippstadt: elegante Colliers, Ohrringe und Tennis-Armbänder. Persönliche Beratung bei KenJu Juwelier.',
  keywords: [
    'Labor Diamanten Bielefeld',
    'Labor Diamanten Lippstadt',
    'Labordiamant Schmuck',
    'Diamant Collier',
    'Diamant Ohrringe',
    'Tennisarmband Diamanten',
    'Lab Grown Diamonds',
  ],
  alternates: { canonical: 'https://kenju.de/labordiamanten' },
};

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://kenju.de' },
    { '@type': 'ListItem', position: 2, name: 'Labor Diamanten', item: 'https://kenju.de/labordiamanten' },
  ],
};

/* Originalbilder des Kunden – exakte Dateinamen (Groß-/Kleinschreibung zählt auf dem Server) */
const kollektion = [
  {
    titel: 'Anhänger & Colliers',
    text: 'Elegante Diamantketten und Anhänger mit zeitloser Ausstrahlung – für besondere Momente und jeden Tag.',
    bild: '/images/labordiamantkette.jpeg',
    alt: 'Collier mit Labor-Diamanten auf schwarzer Büste – KenJu Juwelier Bielefeld & Lippstadt',
    position: '50% 12%',
  },
  {
    titel: 'Labor-Diamant-Ohrringe',
    text: 'Funkelnde Ohrringe mit moderner Eleganz – stilvolle Begleiter für jeden Anlass.',
    bild: '/images/labordiamantoringe.jpeg',
    alt: 'Ohrringe mit Labor-Diamanten – KenJu Juwelier Bielefeld & Lippstadt',
    position: '50% 55%',
  },
  {
    titel: 'Tennis-Armbänder',
    text: 'Klassische Tennis-Armbänder mit funkelnder Brillanz – zeitlos und ausdrucksstark.',
    bild: '/images/Labordiamanttennisband.jpeg',
    alt: 'Tennis-Armbänder mit Labor-Diamanten in Gelb- und Weißgold – KenJu Juwelier Bielefeld & Lippstadt',
    position: '50% 55%',
  },
];

const vorteile = [
  {
    titel: 'Echte Diamanten',
    text: 'Labor-Diamanten besitzen dieselbe grundlegende chemische Zusammensetzung und Kristallstruktur wie natürlich entstandene Diamanten.',
  },
  {
    titel: 'Moderne Herstellung',
    text: 'Sie entstehen in kontrollierten technischen Verfahren statt über geologische Zeiträume in der Natur.',
  },
  {
    titel: 'Persönliche Auswahl',
    text: 'Wir unterstützen Sie dabei, einen Diamanten und ein Schmuckstück passend zu Ihren Vorstellungen und Ihrem Budget auszuwählen.',
  },
];

const ueberschrift = { fontSize: 'clamp(1.9rem, 5.2vw, 3.4rem)', lineHeight: 1.12, color: 'var(--kj-text)' } as const;

export default function LaborDiamantenPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      {/* ── A · HERO ─────────────────────────────────────── */}
      <section
        className="on-dark relative flex items-end overflow-hidden"
        style={{ background: '#0F0D0A', minHeight: 'min(86svh, 780px)' }}
      >
        <div className="absolute inset-0">
          <Image
            src="/images/labordiamantkette.jpeg"
            alt="Collier mit Labor-Diamanten – KenJu Juwelier Bielefeld & Lippstadt"
            fill
            priority
            sizes="100vw"
            className="object-cover"
            style={{ objectPosition: '50% 30%', opacity: 0.8 }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(to top, rgba(15,13,10,0.96) 0%, rgba(15,13,10,0.78) 38%, rgba(15,13,10,0.35) 100%)',
            }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-40 pb-16 md:pb-24">
          <p className="section-subtitle mb-5">Labor-Diamanten</p>
          <h1
            className="font-serif font-light text-white mb-4 max-w-3xl"
            style={{ fontSize: 'clamp(2.1rem, 6.4vw, 4.6rem)', lineHeight: 1.06 }}
          >
            Labor-Diamanten in Bielefeld &amp; Lippstadt
          </h1>
          <p className="font-serif italic mb-6" style={{ fontSize: 'clamp(1.2rem, 3vw, 1.7rem)', color: 'var(--kj-gold)' }}>
            Echte Diamanten. Zeitlose Brillanz.
          </p>
          <div className="divider-gold mb-6" style={{ marginLeft: 0 }} />
          <p className="font-sans leading-relaxed max-w-xl mb-9" style={{ color: 'rgba(245,240,232,0.78)', fontSize: '1rem' }}>
            Entdecken Sie ausgewählten Schmuck mit im Labor gewachsenen Diamanten. Ob elegante Colliers,
            ausdrucksstarke Ohrringe oder klassische Tennis-Armbänder – wir beraten Sie persönlich bei der
            Auswahl Ihres Schmuckstücks.
          </p>
          <Link href="/#termin" className="btn-gold">
            Persönliche Beratung anfragen
          </Link>
        </div>
      </section>

      {/* ── B · KOLLEKTION ───────────────────────────────── */}
      <section className="py-24 md:py-32" style={{ backgroundColor: 'var(--kj-bg)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <header className="text-center max-w-2xl mx-auto mb-14 md:mb-20">
            <p className="section-subtitle mb-4">Die Kollektion</p>
            <h2 className="font-serif font-light" style={ueberschrift}>
              Besondere Stücke. Für besondere Momente.
            </h2>
            <div className="divider-gold mx-auto my-6" />
            <p className="font-sans text-base leading-relaxed" style={{ color: 'var(--kj-muted)' }}>
              Drei Beispiele aus unserer Auswahl – im Geschäft zeigen wir Ihnen gerne weitere Modelle.
            </p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-6 lg:gap-10">
            {kollektion.map((k) => (
              <article key={k.titel} className="group">
                <div
                  className="relative overflow-hidden"
                  style={{ aspectRatio: '4 / 5', background: 'var(--kj-surface)', border: '1px solid var(--kj-border)' }}
                >
                  <Image
                    src={k.bild}
                    alt={k.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-[1400ms] ease-out md:group-hover:scale-[1.035] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                    style={{ objectPosition: k.position }}
                  />
                </div>
                <div className="pt-6 text-center md:text-left">
                  <h3 className="font-serif font-light text-2xl md:text-[1.7rem] mb-2" style={{ color: 'var(--kj-text)' }}>
                    {k.titel}
                  </h3>
                  <p className="font-sans text-sm leading-relaxed" style={{ color: 'var(--kj-muted)' }}>
                    {k.text}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── C · WARUM LABOR-DIAMANTEN ────────────────────── */}
      <section
        className="py-24 md:py-28"
        style={{ backgroundColor: 'var(--kj-surface)', borderTop: '1px solid var(--kj-border)' }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <header className="text-center max-w-2xl mx-auto mb-14 md:mb-16">
            <p className="section-subtitle mb-4">Warum Labor-Diamanten?</p>
            <h2 className="font-serif font-light" style={ueberschrift}>
              Brillanz, die überzeugt.
            </h2>
            <div className="divider-gold mx-auto mt-6" />
          </header>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
            {vorteile.map((v) => (
              <div key={v.titel} className="pt-6" style={{ borderTop: '1px solid var(--kj-gold)' }}>
                <h3 className="font-serif font-light text-2xl mb-3" style={{ color: 'var(--kj-text)' }}>
                  {v.titel}
                </h3>
                <p className="font-sans text-sm leading-relaxed" style={{ color: 'var(--kj-muted)' }}>
                  {v.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── D · PERSÖNLICHE BERATUNG ─────────────────────── */}
      <section
        className="py-24 md:py-32"
        style={{ backgroundColor: 'var(--kj-bg)', borderTop: '1px solid var(--kj-border)' }}
      >
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="section-subtitle mb-4">Persönliche Beratung</p>
          <h2 className="font-serif font-light" style={ueberschrift}>
            Finden Sie Ihren Lieblingsdiamanten.
          </h2>
          <div className="divider-gold mx-auto my-6" />
          <p className="font-sans text-base leading-relaxed mb-10" style={{ color: 'var(--kj-muted)' }}>
            Sie möchten Labor-Diamant-Schmuck persönlich entdecken oder sich zu einem bestimmten Schmuckstück
            beraten lassen? Wir freuen uns auf Ihren Besuch bei KenJu in Bielefeld oder Lippstadt.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-stretch sm:items-start">
            <Link href="/#termin" className="btn-gold">
              Termin vereinbaren
            </Link>

            {/* Jetzt anrufen: zwei Standorte, daher kurze Auswahl – funktioniert ohne JavaScript */}
            <details className="relative w-full sm:w-auto text-left">
              <summary className="btn-outline-gold cursor-pointer select-none list-none [&::-webkit-details-marker]:hidden">
                Jetzt anrufen
              </summary>
              <div
                className="mt-2 sm:absolute sm:left-1/2 sm:-translate-x-1/2 sm:min-w-[17rem] z-10"
                style={{ background: 'var(--kj-card)', border: '1px solid var(--kj-border)' }}
              >
                {standorte.map((s, i) => (
                  <a
                    key={s.id}
                    href={s.telefon.href}
                    className="flex items-center justify-between gap-6 px-5 py-4"
                    style={i > 0 ? { borderTop: '1px solid var(--kj-border)' } : undefined}
                  >
                    <span className="font-serif text-lg" style={{ color: 'var(--kj-text)' }}>{s.stadt}</span>
                    <span className="font-sans text-sm" style={{ color: 'var(--kj-gold)' }}>{s.telefon.label}</span>
                  </a>
                ))}
              </div>
            </details>
          </div>
        </div>
      </section>
    </>
  );
}
