import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import AppointmentForm from '@/components/AppointmentForm';

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
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sie benötigen lediglich einen gültigen Personalausweis oder Reisepass. Alle weiteren Schritte erledigen wir gemeinsam.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wie wird der Goldpreis berechnet?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Der Ankaufspreis richtet sich nach dem tagesaktuellen Goldkurs (LBMA Fix). Wir bieten Ihnen den transparenten Marktpreis ohne versteckte Abzüge.',
      },
    },
    {
      '@type': 'Question',
      name: 'Welche Arten von Gold kaufen Sie an?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Wir kaufen alle Arten von Gold und Edelmetallen an: Goldschmuck (585er und 750er), Goldmünzen (Krügerrand, Maple Leaf), Zahngold, Silber, Platin sowie Brillanten und Uhren.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wie schnell erhalte ich mein Geld?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Bei Einigung zahlen wir sofort in bar aus – noch am selben Tag. Es gibt keine Wartezeiten oder Überweisungen.',
      },
    },
    {
      '@type': 'Question',
      name: 'Ist die Bewertung kostenlos?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja, die Bewertung Ihres Schmucks oder Ihrer Edelmetalle ist vollständig kostenlos und unverbindlich.',
      },
    },
    {
      '@type': 'Question',
      name: 'Was ist die Gutschein-Option beim Altgold-Verkauf?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Beim Verkauf von Altgold können Sie statt einer Barauszahlung einen Einkaufsgutschein wählen, der einen Mehrwert gegenüber der Barrate bietet. Mit diesem Gutschein kaufen Sie bei KenJu Juwelier neuen Schmuck zu einem noch besseren Preis.',
      },
    },
  ],
};

const steps = [
  { step: '01', title: 'Termin vereinbaren', desc: 'Buchen Sie einen kostenlosen Beratungstermin in unserem Geschäft in Bielefeld.' },
  { step: '02', title: 'Kostenlose Bewertung', desc: 'Unsere Experten bewerten Ihren Schmuck, Ihr Gold oder Ihre Edelmetalle kostenlos und unverbindlich.' },
  { step: '03', title: 'Faires Angebot', desc: 'Sie erhalten ein transparentes Angebot auf Basis des tagesaktuellen Marktpreises.' },
  { step: '04', title: 'Sofortige Auszahlung', desc: 'Bei Einigung zahlen wir sofort in bar aus. Kein Warten, keine versteckten Gebühren.' },
];

const materials = [
  { name: 'Goldschmuck',          items: '585er (14K), 750er (18K), 999er (24K)' },
  { name: 'Silberschmuck',        items: '925er Sterlingsilber, 999er Feinsilber' },
  { name: 'Platin',               items: 'Alle Legierungen, Platinschmuck' },
  { name: 'Brillanten & Diamanten', items: 'Lose und gefasste Steine' },
  { name: 'Goldmünzen',           items: 'Krügerrand, Maple Leaf, Wiener Philharmoniker' },
  { name: 'Uhren',                items: 'Rolex, Patek Philippe, Omega und mehr' },
  { name: 'Zahngold',             items: 'Goldkronen, Brücken und Prothesen' },
  { name: 'Altgold',              items: 'Gebrochener Schmuck, alle alten Stücke' },
];

export default function GoldankaufPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      {/* Hero */}
      <section className="relative pt-36 pb-20 overflow-hidden" style={{ background: '#08080F' }}>
        <div className="absolute inset-0">
          <Image
            src="/images/goldankauf.jpg"
            alt="Goldankauf KenJu Juwelier Bielefeld"
            fill
            sizes="100vw"
            className="object-cover"
            priority
            style={{ opacity: 0.25 }}
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(8,8,15,0.7) 0%, rgba(8,8,15,0.55) 50%, rgba(8,8,15,1) 100%)' }} />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="section-subtitle mb-4">Diskret &amp; Professionell</p>
          <h1 className="font-serif text-6xl md:text-7xl font-light mb-6 text-white">
            <span className="gold-text">Gold</span>ankauf
          </h1>
          <div className="divider-gold mx-auto mb-6" />
          <p className="font-sans text-white/60 text-lg max-w-xl mx-auto leading-relaxed mb-10">
            Wir kaufen Gold, Silber, Platin und Brillanten zum{' '}
            <strong className="gold-text">tagesaktuellen Marktpreis</strong>.
            Kostenlose Bewertung, sofortige Auszahlung in bar – fair und transparent.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="#termin-goldankauf" className="btn-gold">Jetzt Termin buchen</Link>
            <a href="tel:+4917663284312" className="btn-outline-gold" style={{ borderColor: 'rgba(255,255,255,0.4)', color: 'white' }}>
              +49 176 63284312
            </a>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12" style={{ backgroundColor: 'var(--kj-surface)', borderTop: '1px solid var(--kj-border)', borderBottom: '1px solid var(--kj-border)' }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { val: '20+',    label: 'Jahre Erfahrung' },
              { val: '5.000+', label: 'Zufriedene Kunden' },
              { val: '100%',   label: 'Transparenz' },
              { val: 'Sofort', label: 'Bargeld-Auszahlung' },
            ].map((s) => (
              <div key={s.label}>
                <p className="font-serif text-4xl gold-text mb-1">{s.val}</p>
                <p className="font-sans text-xs tracking-widest uppercase" style={{ color: 'var(--kj-muted)' }}>{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-24" style={{ backgroundColor: 'var(--kj-bg)' }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="section-subtitle mb-3">Einfach &amp; Transparent</p>
            <h2 className="section-title">So funktioniert der Goldankauf</h2>
            <div className="divider-gold mx-auto mt-4" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((s) => (
              <div key={s.step} className="relative">
                <span className="font-serif text-6xl font-light gold-text opacity-30 block mb-4">{s.step}</span>
                <h3 className="font-serif text-xl mb-3" style={{ color: 'var(--kj-text)' }}>{s.title}</h3>
                <p className="font-sans text-sm leading-relaxed" style={{ color: 'var(--kj-muted)' }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gutschein-Option (NEW) */}
      <section className="py-20" style={{ backgroundColor: 'var(--kj-surface)' }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 overflow-hidden" style={{ border: '1px solid var(--kj-border)' }}>
            {/* Gold accent side */}
            <div className="p-10 flex flex-col justify-center" style={{ background: 'var(--kj-card)' }}>
              <p className="section-subtitle mb-3">Exklusiver Vorteil</p>
              <h2 className="section-title mb-4">Altgold verkaufen &amp; mehr erhalten</h2>
              <div className="divider-gold mb-6" />
              <p className="font-sans text-sm leading-relaxed mb-6" style={{ color: 'var(--kj-muted)' }}>
                Beim Verkauf von Altgold bieten wir Ihnen eine besondere Option: Statt der
                regulären Barauszahlung können Sie sich für einen{' '}
                <strong style={{ color: 'var(--kj-gold)' }}>Einkaufsgutschein</strong> entscheiden,
                der Ihnen einen{' '}
                <strong style={{ color: 'var(--kj-gold)' }}>zusätzlichen Mehrwert</strong> gegenüber
                der Barrate bietet.
              </p>
              <p className="font-sans text-sm leading-relaxed mb-8" style={{ color: 'var(--kj-muted)' }}>
                Mit diesem Gutschein erwerben Sie neuen Schmuck bei KenJu Juwelier zu einem noch
                attraktiveren Preis – so holen Sie das Maximale aus Ihrem Altgold heraus und
                investieren direkt in neuen, hochwertigen Schmuck.
              </p>
              <div className="space-y-3">
                {[
                  'Mehr Wert als Barauszahlung',
                  'Direkt einlösbar auf unser gesamtes Sortiment',
                  'Ideal zum Tauschen: Altes Gold gegen neuen Schmuck',
                  'Keine Mindestbestellmenge',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <span className="font-serif text-sm mt-0.5 font-bold" style={{ color: 'var(--kj-gold)' }}>✓</span>
                    <span className="font-sans text-sm" style={{ color: 'var(--kj-muted)' }}>{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Link href="#termin-goldankauf" className="btn-gold">
                  Jetzt Termin vereinbaren
                </Link>
              </div>
            </div>
            {/* Visual side */}
            <div className="relative min-h-[300px] lg:min-h-0" style={{ background: 'var(--kj-card-deep)' }}>
              <Image
                src="/images/goldankauf.jpg"
                alt="Altgold Gutschein – KenJu Juwelier"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                style={{ opacity: 0.4 }}
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
                <div className="p-8 max-w-xs" style={{ background: 'rgba(8,8,15,0.75)', border: '1px solid rgba(180,140,40,0.4)' }}>
                  <p className="font-serif text-5xl font-light mb-2 text-white">+</p>
                  <p className="section-subtitle mb-2">Mehrwert</p>
                  <p className="font-serif text-2xl text-white mb-3">Gutschein-Option</p>
                  <p className="font-sans text-xs text-white/60 leading-relaxed">
                    Altgold → Einkaufsgutschein mit Mehrwert → Neuer Schmuck zu Top-Konditionen
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What we buy */}
      <section className="py-24" style={{ backgroundColor: 'var(--kj-bg)' }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="section-subtitle mb-3">Was wir ankaufen</p>
            <h2 className="section-title">Alle Edelmetalle &amp; Schmuck</h2>
            <div className="divider-gold mx-auto mt-4" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {materials.map((m) => (
              <div key={m.name} className="p-5 transition-all duration-300 hover:shadow-md" style={{ background: 'var(--kj-card)', border: '1px solid var(--kj-border)' }}>
                <h3 className="font-serif text-lg mb-2" style={{ color: 'var(--kj-gold)' }}>{m.name}</h3>
                <p className="font-sans text-xs" style={{ color: 'var(--kj-muted)' }}>{m.items}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 p-6 text-center" style={{ border: '1px solid rgba(180,140,40,0.25)', background: 'var(--kj-card)' }}>
            <p className="font-sans text-sm" style={{ color: 'var(--kj-muted)' }}>
              <strong style={{ color: 'var(--kj-gold)' }}>Wichtiger Hinweis:</strong> Der Ankaufspreis richtet sich nach dem tagesaktuellen Goldkurs (LBMA Fix).
              Alle Bewertungen sind kostenlos und unverbindlich. Bringen Sie Ihren Personalausweis mit.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24" style={{ backgroundColor: 'var(--kj-surface)' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="section-subtitle mb-3">Häufige Fragen</p>
            <h2 className="section-title">FAQ – Goldankauf</h2>
            <div className="divider-gold mx-auto mt-4" />
          </div>
          <div className="space-y-4">
            {faqJsonLd.mainEntity.map((faq, i) => (
              <details
                key={i}
                className="p-5 transition-all"
                style={{ background: 'var(--kj-card)', border: '1px solid var(--kj-border)' }}
              >
                <summary
                  className="font-serif text-lg cursor-pointer list-none flex items-center justify-between gap-4"
                  style={{ color: 'var(--kj-text)' }}
                >
                  {faq.name}
                  <span className="shrink-0 text-xl" style={{ color: 'var(--kj-gold)' }}>+</span>
                </summary>
                <p className="font-sans text-sm mt-4 leading-relaxed" style={{ color: 'var(--kj-muted)' }}>
                  {faq.acceptedAnswer.text}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Appointment */}
      <section className="py-24" style={{ backgroundColor: 'var(--kj-bg)' }} id="termin-goldankauf">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="section-subtitle mb-3">Kostenlose Bewertung</p>
            <h2 className="section-title mb-4">Goldankauf-Termin buchen</h2>
            <div className="divider-gold mx-auto mb-4" />
            <p className="font-sans text-sm" style={{ color: 'var(--kj-muted)' }}>
              Buchen Sie jetzt einen Termin für Ihre kostenlose und unverbindliche Bewertung.
            </p>
          </div>
          <div className="p-8" style={{ background: 'var(--kj-card)', border: '1px solid var(--kj-border)' }}>
            <AppointmentForm />
          </div>
        </div>
      </section>

      {/* SEO Text */}
      <section className="py-16" style={{ backgroundColor: 'var(--kj-surface)' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl mb-6" style={{ color: 'var(--kj-text)' }}>
            Goldankauf Bielefeld – Ihr vertrauensvoller Partner
          </h2>
          <div className="divider-gold mb-8" />
          <div className="space-y-4 font-sans text-sm leading-relaxed" style={{ color: 'var(--kj-muted)' }}>
            <p>
              KenJu Juwelier ist seit über 20 Jahren der vertrauenswürdige Ansprechpartner für{' '}
              <strong style={{ color: 'var(--kj-text)' }}>Goldankauf in Bielefeld</strong>.
              Wir kaufen sämtliche Edelmetalle und Schmuckstücke – vom alten Erbschmuck bis zur Goldmünze – zu fairen Marktpreisen an.
            </p>
            <p>
              Der Preis für <strong style={{ color: 'var(--kj-text)' }}>Gold</strong> schwankt täglich. Bei uns erhalten Sie garantiert den aktuellen
              Tagespreis, keine manipulierten Waagen und keine versteckten Abzüge. Vollständige Transparenz ist unser Versprechen.
            </p>
            <p>
              Besonderer Tipp: Beim Verkauf von <strong style={{ color: 'var(--kj-gold)' }}>Altgold</strong> können Sie statt Bargeld einen
              Einkaufsgutschein wählen und erhalten dadurch einen zusätzlichen Mehrwert – ideal, wenn Sie gleichzeitig
              neuen Schmuck erwerben möchten.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
