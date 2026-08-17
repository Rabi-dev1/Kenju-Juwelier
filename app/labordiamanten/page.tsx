import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import AppointmentForm from '@/components/AppointmentForm';

export const metadata: Metadata = {
  title: 'Labor Diamanten Bielefeld & Lippstadt – Ethisch & Zertifiziert | KenJu',
  description: 'Labor Diamanten bei KenJu Juwelier in Bielefeld und Lippstadt. Ethisch erzeugte Diamanten mit identischer Brillanz zu einem fairen Preis – ideal für Verlobungsringe.',
  keywords: ['Labor Diamanten Bielefeld', 'Labor Diamanten Lippstadt', 'Lab Grown Diamonds', 'synthetische Diamanten', 'Verlobungsring Labor Diamant', 'ethische Diamanten'],
  alternates: { canonical: 'https://kenju-juwelier.de/labordiamanten' },
};

const productJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'Labor Diamant Schmuck',
  description: 'Ethisch erzeugte Labor Diamanten mit identischer chemischer, physikalischer und optischer Struktur wie Naturdiamanten.',
  brand: { '@type': 'Brand', name: 'KenJu Juwelier' },
  category: 'Jewelry',
};

const benefits = [
  { icon: '◈', title: 'Identische Brillanz',   desc: 'Chemisch und optisch identisch mit Naturdiamanten.' },
  { icon: '◉', title: 'Ethisch & Nachhaltig',   desc: 'Kein Bergbau – verantwortungsvoll im Labor hergestellt.' },
  { icon: '⬡', title: 'Fairer Preis',            desc: 'Bis zu 70 % günstiger als vergleichbare Naturdiamanten.' },
  { icon: '◯', title: 'Zertifiziert',            desc: 'Alle Steine mit IGI / GIA Zertifikat.' },
];

const collections = [
  { title: 'Verlobungsringe',   desc: 'Solitär, Halo oder Pavé – individuell gefertigt.',       img: '/images/ringe.jpg' },
  { title: 'Ohrringe & Creolen', desc: '585 Gelbgold, Weißgold oder Roségold.',                  img: '/images/ohrstecker.jpg' },
  { title: 'Anhänger & Colliers', desc: 'Klassisch oder modern – zeitlos schön.',                img: '/images/halsketten.jpg' },
  { title: 'Tennis-Armbänder',  desc: 'Funkelnde Steine, elegant am Handgelenk.',                img: '/images/armband-rose.jpg' },
];

const faq = [
  {
    q: 'Was ist ein Labor Diamant?',
    a: 'Ein Labor Diamant ist ein echter Diamant – chemisch, physikalisch und optisch identisch mit einem Naturdiamanten. Er entsteht im Labor unter denselben Bedingungen wie in der Natur, nur kontrolliert und ohne Bergbau.',
  },
  {
    q: 'Kann man Labor Diamanten von Naturdiamanten unterscheiden?',
    a: 'Mit bloßem Auge ist kein Unterschied erkennbar. Nur mit speziellen Gemmologen-Geräten kann der Ursprung festgestellt werden. Beide haben dieselbe Härte (10 Mohs), denselben Brechungsindex und dieselbe Brillanz.',
  },
  {
    q: 'Sind Labor Diamanten wirklich günstiger?',
    a: 'Ja – Labor Diamanten kosten typischerweise 40–70 % weniger als vergleichbare Naturdiamanten. Das bedeutet: Sie bekommen deutlich mehr Karat und Qualität für Ihr Budget.',
  },
  {
    q: 'Werden Labor Diamanten zertifiziert?',
    a: 'Ja. Alle unsere Labor Diamanten kommen mit einem Zertifikat von unabhängigen Gemmologie-Instituten (z.B. IGI oder GIA), das Schliff, Farbe, Reinheit und Karatgewicht bescheinigt.',
  },
  {
    q: 'Kann ich meinen Labor Diamant Ring individuell anfertigen lassen?',
    a: 'Ja, selbstverständlich. Bei KenJu Juwelier beraten wir Sie persönlich und fertigen Ihren Ring nach Ihren genauen Wünschen an – in Ihrer gewünschten Gold-Legierung, Fassung und Ringgröße.',
  },
];

export default function LaborDiamantenPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }} />

      {/* Hero */}
      <section className="relative pt-36 pb-24 overflow-hidden" style={{ background: '#0F0D0A' }}>
        <div className="absolute inset-0">
          <Image
            src="/images/brillant-set-luxus.jpg"
            alt="Labor Diamant Schmuck KenJu Juwelier Bielefeld"
            fill
            sizes="100vw"
            className="object-cover"
            priority
            style={{ opacity: 0.3 }}
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(15,13,10,0.7) 0%, rgba(15,13,10,0.5) 50%, rgba(15,13,10,1) 100%)' }} />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="section-subtitle mb-4">Zukunft des Schmucks</p>
          <h1 className="font-serif text-6xl md:text-7xl font-light mb-6 text-white">
            <span className="gold-text">Labor</span> Diamanten
          </h1>
          <div className="divider-gold mx-auto mb-6" />
          <p className="font-sans text-white/60 text-lg max-w-2xl mx-auto leading-relaxed mb-4">
            Ethisch erzeugt. Identische Brillanz. Fairer Preis.
          </p>
          <p className="font-sans text-white/50 text-base max-w-xl mx-auto leading-relaxed mb-10">
            Labor Diamanten sind echte Diamanten – hergestellt ohne Bergbau, mit voller Zertifizierung
            und bis zu 70 % günstiger als Naturdiamanten.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="#termin-labor" className="btn-gold">Jetzt beraten lassen</Link>
            <a href="tel:+4917663284312" className="btn-outline-gold" style={{ borderColor: 'rgba(255,255,255,0.4)', color: 'white' }}>
              +49 176 63284312
            </a>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24" style={{ backgroundColor: 'var(--kj-bg)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="section-subtitle mb-4">Ihre Vorteile</p>
            <h2 className="section-title mb-4">Warum Labor Diamanten?</h2>
            <div className="divider-gold mx-auto mb-6" />
            <p className="font-sans text-sm max-w-2xl mx-auto leading-relaxed" style={{ color: 'var(--kj-muted)' }}>
              Labor Diamanten sind keine Imitate – sie sind echte Diamanten, die im Labor unter denselben
              geologischen Bedingungen wie in der Natur entstehen.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((b) => (
              <div
                key={b.title}
                className="p-6 text-center transition-all duration-300 hover:shadow-lg"
                style={{ background: 'var(--kj-card)', border: '1px solid var(--kj-border)' }}
              >
                <span className="text-4xl gold-text block mb-4">{b.icon}</span>
                <h3 className="font-serif text-xl mb-3" style={{ color: 'var(--kj-text)' }}>{b.title}</h3>
                <p className="font-sans text-sm leading-relaxed" style={{ color: 'var(--kj-muted)' }}>{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-24" style={{ backgroundColor: 'var(--kj-surface)' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="section-subtitle mb-4">Transparenz</p>
            <h2 className="section-title mb-4">Labor vs. Natur – Der direkte Vergleich</h2>
            <div className="divider-gold mx-auto mb-6" />
          </div>
          <div
            className="overflow-x-auto"
            style={{ border: '1px solid var(--kj-border)', background: 'var(--kj-card)' }}
          >
            <table className="w-full font-sans text-sm">
              <thead>
                <tr style={{ borderBottom: '2px solid var(--kj-border)' }}>
                  <th
                    className="text-left py-5 px-8 font-medium tracking-widest uppercase"
                    style={{ color: 'var(--kj-muted)', fontSize: '0.7rem' }}
                  >
                    Eigenschaft
                  </th>
                  <th
                    className="text-center py-5 px-8 font-medium tracking-widest uppercase"
                    style={{ color: 'var(--kj-gold)', fontSize: '0.7rem', background: 'rgba(201,168,76,0.06)' }}
                  >
                    ✦ Labor Diamant
                  </th>
                  <th
                    className="text-center py-5 px-8 font-medium tracking-widest uppercase"
                    style={{ color: 'var(--kj-muted)', fontSize: '0.7rem' }}
                  >
                    Naturdiamant
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Chemische Zusammensetzung', '100 % Kohlenstoff', '100 % Kohlenstoff'],
                  ['Härte (Mohs-Skala)', '10 – Höchste Härte', '10 – Höchste Härte'],
                  ['Brillanz & Feuer', 'Identisch', 'Identisch'],
                  ['Unabhängige Zertifizierung', 'IGI / GIA zertifiziert', 'IGI / GIA zertifiziert'],
                  ['Ethik & Umwelt', '✓ Kein Bergbau erforderlich', '— Bergbau notwendig'],
                  ['Preisvorteil', 'Bis zu 70 % günstiger', 'Referenzpreis'],
                  ['Verfügbarkeit & Auswahl', 'Große, flexible Auswahl', 'Begrenzt & aufwendig'],
                ].map(([prop, lab, nat], i) => (
                  <tr
                    key={prop}
                    style={{
                      borderBottom: '1px solid var(--kj-border)',
                      background: i % 2 === 0 ? 'transparent' : 'rgba(0,0,0,0.03)',
                    }}
                  >
                    <td className="py-5 px-8 font-medium text-sm" style={{ color: 'var(--kj-text)' }}>{prop}</td>
                    <td
                      className="py-5 px-8 text-center text-sm font-medium"
                      style={{ color: 'var(--kj-gold)', background: 'rgba(201,168,76,0.04)' }}
                    >
                      {lab}
                    </td>
                    <td className="py-5 px-8 text-center text-sm" style={{ color: 'var(--kj-muted)' }}>{nat}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="font-sans text-xs text-center mt-5" style={{ color: 'var(--kj-muted)', opacity: 0.7 }}>
            Alle Angaben nach aktuellem gemmologischen Stand (IGI/GIA). Labor Diamanten haben dasselbe Zertifizierungssystem wie Naturdiamanten.
          </p>
        </div>
      </section>

      {/* Collections */}
      <section className="py-24" style={{ backgroundColor: 'var(--kj-bg)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="section-subtitle mb-4">Unsere Kollektion</p>
            <h2 className="section-title mb-4">Labor Diamant Schmuck</h2>
            <div className="divider-gold mx-auto" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {collections.map((col) => (
              <div
                key={col.title}
                className="overflow-hidden transition-all duration-300 hover:shadow-lg"
                style={{ background: 'var(--kj-card)', border: '1px solid var(--kj-border)' }}
              >
                <div className="relative h-52 category-img-placeholder overflow-hidden">
                  <Image
                    src={col.img}
                    alt={`Labor Diamant ${col.title} – KenJu Juwelier Bielefeld`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-500 hover:scale-105"
                    style={{ opacity: 0.8 }}
                  />
                  <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(8,8,15,0.6), transparent)' }} />
                </div>
                <div className="p-5">
                  <h3 className="font-serif text-xl mb-2" style={{ color: 'var(--kj-text)' }}>{col.title}</h3>
                  <p className="font-sans text-sm leading-relaxed mb-4" style={{ color: 'var(--kj-muted)' }}>{col.desc}</p>
                  <span className="font-sans text-xs tracking-widest uppercase flex items-center gap-2" style={{ color: 'var(--kj-gold)' }}>
                    Anfragen <span>→</span>
                  </span>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="#termin-labor" className="btn-gold">Individuelle Anfertigung anfragen</Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24" style={{ backgroundColor: 'var(--kj-surface)' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="section-subtitle mb-3">Häufige Fragen</p>
            <h2 className="section-title">FAQ – Labor Diamanten</h2>
            <div className="divider-gold mx-auto mt-4" />
          </div>
          <div className="space-y-4">
            {faq.map((item) => (
              <details
                key={item.q}
                className="p-5 transition-all"
                style={{ background: 'var(--kj-card)', border: '1px solid var(--kj-border)' }}
              >
                <summary
                  className="font-serif text-lg cursor-pointer list-none flex items-center justify-between gap-4"
                  style={{ color: 'var(--kj-text)' }}
                >
                  {item.q}
                  <span className="shrink-0 text-xl" style={{ color: 'var(--kj-gold)' }}>+</span>
                </summary>
                <p className="font-sans text-sm mt-4 leading-relaxed" style={{ color: 'var(--kj-muted)' }}>
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Appointment */}
      <section className="py-24" style={{ backgroundColor: 'var(--kj-bg)' }} id="termin-labor">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="section-subtitle mb-3">Kostenlose Beratung</p>
            <h2 className="section-title mb-3">Labor Diamant Beratung</h2>
            <div className="divider-gold mx-auto mb-4" />
            <p className="font-sans text-sm" style={{ color: 'var(--kj-muted)' }}>
              Lassen Sie sich in unseren Geschäften in Bielefeld und Lippstadt persönlich zu Labor Diamanten beraten –
              kostenlos und unverbindlich.
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
