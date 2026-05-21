import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import AppointmentForm from '@/components/AppointmentForm';
import EdelmetallRechner from '@/components/EdelmetallRechner';

export const metadata: Metadata = {
  title: 'Goldankauf Bielefeld – Fairer Goldpreis Sofort | KenJu Juwelier',
  description: 'Goldankauf in Bielefeld zum Tagespreis. Wir kaufen Gold, Silber, Platin, Brillanten und Schmuck. Sofortige Auszahlung in bar. Keine versteckten Kosten. KenJu Juwelier.',
  keywords: ['Goldankauf Bielefeld', 'Gold verkaufen Bielefeld', 'Goldpreis', 'Schmuck verkaufen', 'Edelmetall Ankauf', 'Juwelier Bielefeld'],
  alternates: { canonical: 'https://kenju-juwelier.de/goldankauf' },
};

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Goldankauf',
  description: 'Fairer Goldankauf zum Tagespreis. Wir kaufen Gold, Silber, Platin, Brillanten und Schmuck.',
  provider: { '@type': 'JewelryStore', name: 'KenJu Juwelier' },
  serviceType: 'Goldankauf',
  areaServed: { '@type': 'City', name: 'Bielefeld' },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Was brauche ich beim Goldankauf?',
      acceptedAnswer: { '@type': 'Answer', text: 'Sie benötigen lediglich einen gültigen Personalausweis oder Reisepass. Alle weiteren Schritte erledigen wir gemeinsam.' },
    },
    {
      '@type': 'Question',
      name: 'Wie wird der Goldpreis berechnet?',
      acceptedAnswer: { '@type': 'Answer', text: 'Der Ankaufspreis richtet sich nach dem tagesaktuellen Goldkurs (LBMA Fix). Wir bieten Ihnen den transparenten Marktpreis ohne versteckte Abzüge.' },
    },
    {
      '@type': 'Question',
      name: 'Welche Arten von Gold kaufen Sie an?',
      acceptedAnswer: { '@type': 'Answer', text: 'Wir kaufen alle Arten von Gold und Edelmetallen an: Goldschmuck (585er und 750er), Goldmünzen (Krügerrand, Maple Leaf), Zahngold, Silber, Platin sowie Brillanten und Uhren.' },
    },
    {
      '@type': 'Question',
      name: 'Wie schnell erhalte ich mein Geld?',
      acceptedAnswer: { '@type': 'Answer', text: 'Bei Einigung zahlen wir sofort in bar aus – noch am selben Tag. Es gibt keine Wartezeiten oder Überweisungen.' },
    },
    {
      '@type': 'Question',
      name: 'Ist die Bewertung kostenlos?',
      acceptedAnswer: { '@type': 'Answer', text: 'Ja, die Bewertung Ihres Schmucks oder Ihrer Edelmetalle ist vollständig kostenlos und unverbindlich.' },
    },
    {
      '@type': 'Question',
      name: 'Was ist die Gutschein-Option beim Altgold-Verkauf?',
      acceptedAnswer: { '@type': 'Answer', text: 'Beim Verkauf von Altgold können Sie statt einer Barauszahlung einen Einkaufsgutschein wählen, der einen Mehrwert gegenüber der Barrate bietet. Mit diesem Gutschein kaufen Sie bei KenJu Juwelier neuen Schmuck zu einem noch besseren Preis.' },
    },
  ],
};

const steps = [
  { step: '01', title: 'Termin vereinbaren', desc: 'Buchen Sie einen kostenlosen Beratungstermin in unserem Geschäft in Bielefeld.' },
  { step: '02', title: 'Kostenlose Bewertung', desc: 'Unsere Experten bewerten Ihren Schmuck, Ihr Gold oder Ihre Edelmetalle kostenlos und unverbindlich.' },
  { step: '03', title: 'Faires Angebot', desc: 'Sie erhalten ein transparentes Angebot auf Basis des tagesaktuellen Marktpreises.' },
  { step: '04', title: 'Sofortige Auszahlung', desc: 'Bei Einigung zahlen wir sofort in bar aus. Kein Warten, keine versteckten Gebühren.' },
];

const ankaufKategorien = [
  {
    title: 'Gold',
    img: '/images/goldankauf.jpg',
    tags: ['Goldbarren', 'Feingoldbarren', 'Goldketten', 'Goldringe', 'Altgold', 'Goldschmuck', 'Bruchgold', 'Zahngold Legierung', 'Zahnkronen'],
  },
  {
    title: 'Luxus Uhren',
    img: '/images/creolen.jpg',
    tags: ['Rolex', 'Patek Philippe', 'Omega', 'IWC', 'Breitling', 'Gold- und Taschenuhren', 'Bewertung nach Marke und Zustand'],
  },
  {
    title: 'Silber',
    img: '/images/armreifen.jpg',
    tags: ['Silberbarren', 'Silberschmuck', 'Besteck', 'Bruchsilber', '925er Sterling', '999er Feinsilber'],
  },
  {
    title: 'Münzen',
    img: '/images/ringe.jpg',
    tags: ['Goldmünzen', 'Silbermünzen', 'Sammlermünzen', 'Krügerrand', 'Maple Leaf', 'Wiener Philharmoniker'],
  },
  {
    title: 'Diamanten',
    img: '/images/brillant-set-luxus.jpg',
    tags: ['Lose Diamanten', 'Gefasste Steine', 'Brillanten', 'Bewertung nach Schliff', 'Reinheit und Karat'],
  },
  {
    title: 'Platin',
    img: '/images/brillantring-halo-weiss.jpg',
    tags: ['Platinringe', 'Platinschmuck', 'Platinbarren', 'Dentalmetalle', 'Präzise Analyse'],
  },
  {
    title: 'Zahngold',
    img: '/images/brillantringe.jpg',
    tags: ['Zahnkronen', 'Brücken', 'Dentallegierungen', 'Fachgerechte Bewertung'],
  },
  {
    title: 'Altschmuck',
    img: '/images/halsketten.jpg',
    tags: ['Erbschmuck', 'Gebrochener Schmuck', 'Alte Ringe', 'Ketten', 'Anhänger', 'Armreifen'],
  },
];

export default function GoldankaufPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="relative pt-36 pb-24 overflow-hidden" style={{ background: '#0F0D0A' }}>
        <div className="absolute inset-0">
          <Image
            src="/images/goldankauf.jpg"
            alt="Goldankauf KenJu Juwelier Bielefeld"
            fill
            sizes="100vw"
            className="object-cover"
            priority
            style={{ opacity: 0.35 }}
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(15,13,10,0.7) 0%, rgba(15,13,10,0.5) 50%, rgba(15,13,10,1) 100%)' }} />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="section-subtitle mb-5">Diskret &amp; Professionell</p>
          <h1 className="font-serif font-light mb-6 text-white" style={{ fontSize: 'clamp(2.2rem, 7vw, 5.5rem)', lineHeight: 1.05 }}>
            <span className="gold-text">Gold</span>ankauf
          </h1>
          <div className="divider-gold mx-auto mb-8" />
          <p className="font-sans text-lg max-w-xl mx-auto leading-relaxed mb-12" style={{ color: 'rgba(245,240,232,0.6)' }}>
            Wir kaufen Gold, Silber, Platin und Brillanten zum{' '}
            <strong className="gold-text">tagesaktuellen Marktpreis</strong>.
            Kostenlose Bewertung, sofortige Auszahlung in bar.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="#termin-goldankauf" className="btn-gold">Jetzt Termin buchen</Link>
            <a href="tel:+4917663284312" className="btn-outline-gold" style={{ borderColor: 'rgba(255,255,255,0.35)', color: 'rgba(255,255,255,0.85)' }}>
              +49 176 63284312
            </a>
          </div>
        </div>
      </section>

      {/* ── Stats ────────────────────────────────────────── */}
      <section
        className="py-14"
        style={{ backgroundColor: 'var(--kj-surface)', borderTop: '1px solid var(--kj-border)', borderBottom: '1px solid var(--kj-border)' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
            {[
              { val: '20+',    label: 'Jahre Erfahrung' },
              { val: '5.000+', label: 'Zufriedene Kunden' },
              { val: '100%',   label: 'Transparenz' },
              { val: 'Sofort', label: 'Bargeld-Auszahlung' },
            ].map((s) => (
              <div key={s.label}>
                <p className="font-serif text-5xl gold-text mb-2">{s.val}</p>
                <p className="font-sans text-xs tracking-widest uppercase" style={{ color: 'var(--kj-muted)' }}>{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Was wir ankaufen – Produktkarten ─────────────── */}
      <section className="py-28" style={{ backgroundColor: 'var(--kj-bg)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="section-subtitle mb-5">Was wir ankaufen</p>
            <h2 className="section-title mb-4">Folgende Produkte kaufen wir an</h2>
            <div className="divider-gold mx-auto" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
            {ankaufKategorien.map((kat) => (
              <div
                key={kat.title}
                className="group overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5"
                style={{ background: 'var(--kj-card)', border: '1px solid var(--kj-border)' }}
              >
                {/* Image */}
                <div className="relative h-48 sm:h-44 overflow-hidden">
                  <Image
                    src={kat.img}
                    alt={`${kat.title} Ankauf – KenJu Juwelier Bielefeld`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover img-zoom"
                    style={{ opacity: 0.85 }}
                  />
                  <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(15,13,10,0.5), transparent 70%)' }} />
                </div>

                {/* Content */}
                <div className="p-4 sm:p-5">
                  <h3 className="font-serif text-xl sm:text-2xl mb-2.5" style={{ color: 'var(--kj-text)' }}>
                    {kat.title}
                  </h3>
                  <p className="font-sans text-xs leading-relaxed" style={{ color: 'var(--kj-muted)' }}>
                    {kat.tags.map((tag, idx) => (
                      <span key={tag}>
                        <span style={{ color: 'var(--kj-gold)' }}>{tag}</span>
                        {idx < kat.tags.length - 1 && (
                          <span style={{ color: 'var(--kj-border)', margin: '0 4px' }}>·</span>
                        )}
                      </span>
                    ))}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div
            className="mt-10 p-6 text-center"
            style={{ border: '1px solid rgba(201,168,76,0.2)', background: 'var(--kj-card)' }}
          >
            <p className="font-sans text-sm" style={{ color: 'var(--kj-muted)' }}>
              <strong style={{ color: 'var(--kj-gold)' }}>Bringen Sie einfach vorbei:</strong>{' '}
              Der Ankaufspreis richtet sich nach dem tagesaktuellen Kurs (LBMA Fix).
              Alle Bewertungen sind kostenlos und unverbindlich. Personalausweis mitbringen.
            </p>
          </div>
        </div>
      </section>

      {/* ── So funktioniert's ────────────────────────────── */}
      <section className="py-24" style={{ backgroundColor: 'var(--kj-surface)', borderTop: '1px solid var(--kj-border)' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="section-subtitle mb-4">Einfach &amp; Transparent</p>
            <h2 className="section-title">So funktioniert der Goldankauf</h2>
            <div className="divider-gold mx-auto mt-4" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {steps.map((s) => (
              <div key={s.step}>
                <span className="font-serif font-light gold-text block mb-5" style={{ fontSize: '4.5rem', opacity: 0.35, lineHeight: 1 }}>
                  {s.step}
                </span>
                <h3 className="font-serif text-2xl mb-3" style={{ color: 'var(--kj-text)' }}>{s.title}</h3>
                <p className="font-sans text-base leading-relaxed" style={{ color: 'var(--kj-muted)' }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Gutschein-Option ─────────────────────────────── */}
      <section className="py-24" style={{ backgroundColor: 'var(--kj-bg)' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 overflow-hidden" style={{ border: '1px solid var(--kj-border)' }}>
            <div className="p-10 md:p-14 flex flex-col justify-center" style={{ background: 'var(--kj-card)' }}>
              <p className="section-subtitle mb-4">Exklusiver Vorteil</p>
              <h2 className="font-serif font-light mb-6" style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', color: 'var(--kj-text)', lineHeight: 1.15 }}>
                Altgold verkaufen &amp;<br />mehr erhalten
              </h2>
              <div className="divider-gold mb-8" />
              <p className="font-sans text-base leading-relaxed mb-5" style={{ color: 'var(--kj-muted)' }}>
                Statt der regulären Barauszahlung können Sie sich für einen{' '}
                <strong style={{ color: 'var(--kj-gold)' }}>Einkaufsgutschein</strong> entscheiden,
                der Ihnen einen <strong style={{ color: 'var(--kj-gold)' }}>zusätzlichen Mehrwert</strong> bietet.
              </p>
              <p className="font-sans text-base leading-relaxed mb-10" style={{ color: 'var(--kj-muted)' }}>
                Investieren Sie Ihr Altgold direkt in neuen, hochwertigen Schmuck bei KenJu – zu
                besonders attraktiven Konditionen.
              </p>
              <div className="space-y-4 mb-10">
                {[
                  'Mehr Wert als Barauszahlung',
                  'Einlösbar auf das gesamte Sortiment',
                  'Ideal: Altes Gold gegen neuen Schmuck tauschen',
                  'Keine Mindestbestellmenge',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <span className="font-serif font-bold text-base" style={{ color: 'var(--kj-gold)' }}>✓</span>
                    <span className="font-sans text-base" style={{ color: 'var(--kj-muted)' }}>{item}</span>
                  </div>
                ))}
              </div>
              <Link href="#termin-goldankauf" className="btn-gold self-start">
                Jetzt Termin vereinbaren
              </Link>
            </div>
            <div className="relative min-h-[300px] lg:min-h-0" style={{ background: 'var(--kj-card-deep)' }}>
              <Image
                src="/images/goldankauf.jpg"
                alt="Altgold Gutschein – KenJu Juwelier"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                style={{ opacity: 0.45 }}
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
                <div className="p-10 max-w-xs" style={{ background: 'rgba(15,13,10,0.85)', border: '1px solid rgba(201,168,76,0.4)' }}>
                  <p className="font-serif text-6xl font-light mb-3 gold-text">+</p>
                  <p className="section-subtitle mb-3">Mehrwert</p>
                  <p className="font-serif text-2xl text-white mb-4">Gutschein-Option</p>
                  <p className="font-sans text-sm leading-relaxed" style={{ color: 'rgba(245,240,232,0.55)' }}>
                    Altgold → Gutschein mit Mehrwert → Neuer Schmuck zu Top-Konditionen
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Edelmetall Rechner ───────────────────────────── */}
      <section className="py-28" style={{ backgroundColor: 'var(--kj-surface)', borderTop: '1px solid var(--kj-border)' }} id="rechner">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="section-subtitle mb-4">Transparenz</p>
            <h2 className="section-title mb-4">Edelmetall-Preisrechner</h2>
            <div className="divider-gold mx-auto mb-6" />
            <p className="font-sans text-base max-w-xl mx-auto leading-relaxed" style={{ color: 'var(--kj-muted)' }}>
              Berechnen Sie einen ersten Orientierungswert für Ihr Gold, Silber, Palladium oder Platin –
              auf Basis des aktuellen Spot-Kurses. Der genaue Ankaufspreis wird kostenlos in unserem Geschäft ermittelt.
            </p>
          </div>
          <EdelmetallRechner />
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────── */}
      <section className="py-24" style={{ backgroundColor: 'var(--kj-bg)' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="section-subtitle mb-4">Häufige Fragen</p>
            <h2 className="section-title">FAQ – Goldankauf</h2>
            <div className="divider-gold mx-auto mt-4" />
          </div>
          <div className="space-y-3">
            {faqJsonLd.mainEntity.map((faq, i) => (
              <details
                key={i}
                className="transition-all"
                style={{ background: 'var(--kj-card)', border: '1px solid var(--kj-border)' }}
              >
                <summary
                  className="font-serif text-xl cursor-pointer list-none flex items-center justify-between gap-4 px-7 py-5"
                  style={{ color: 'var(--kj-text)' }}
                >
                  {faq.name}
                  <span className="shrink-0 text-2xl font-light" style={{ color: 'var(--kj-gold)' }}>+</span>
                </summary>
                <p className="font-sans text-base px-7 pb-6 leading-relaxed" style={{ color: 'var(--kj-muted)' }}>
                  {faq.acceptedAnswer.text}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── Appointment ──────────────────────────────────── */}
      <section className="py-28" style={{ backgroundColor: 'var(--kj-surface)' }} id="termin-goldankauf">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="section-subtitle mb-4">Kostenlose Bewertung</p>
            <h2 className="section-title mb-4">Goldankauf-Termin buchen</h2>
            <div className="divider-gold mx-auto mb-6" />
            <p className="font-sans text-base" style={{ color: 'var(--kj-muted)' }}>
              Buchen Sie Ihre kostenlose und unverbindliche Bewertung –<br />
              Bahnhofstraße 28, 33602 Bielefeld.
            </p>
          </div>
          <div className="p-10 md:p-14" style={{ background: 'var(--kj-card)', border: '1px solid var(--kj-border)' }}>
            <AppointmentForm />
          </div>
        </div>
      </section>
    </>
  );
}
