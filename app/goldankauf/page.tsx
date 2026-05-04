import type { Metadata } from 'next';
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
  ],
};

const steps = [
  { step: '01', title: 'Termin vereinbaren', desc: 'Buchen Sie einen kostenlosen Beratungstermin in unserem Geschäft in Bielefeld.' },
  { step: '02', title: 'Kostenlose Bewertung', desc: 'Unsere Experten bewerten Ihren Schmuck, Ihr Gold oder Ihre Edelmetalle kostenlos und unverbindlich.' },
  { step: '03', title: 'Faires Angebot', desc: 'Sie erhalten ein transparentes Angebot auf Basis des tagesaktuellen Marktpreises.' },
  { step: '04', title: 'Sofortige Auszahlung', desc: 'Bei Einigung zahlen wir sofort in bar aus. Kein Warten, keine versteckten Gebühren.' },
];

const materials = [
  { name: 'Goldschmuck', items: '585er (14K), 750er (18K), 999er (24K)' },
  { name: 'Silberschmuck', items: '925er Sterlingsilber, 999er Feinsilber' },
  { name: 'Platin', items: 'Alle Legierungen, Platinschmuck' },
  { name: 'Brillanten & Diamanten', items: 'Lose und gefasste Steine' },
  { name: 'Goldmünzen', items: 'Krügerrand, Maple Leaf, Wiener Philharmoniker' },
  { name: 'Uhren', items: 'Rolex, Patek Philippe, Omega und mehr' },
  { name: 'Zahngold', items: 'Goldkronen, Brücken und Prothesen' },
  { name: 'Altgold', items: 'Gebrochener Schmuck, alte Stücke' },
];

export default function GoldankaufPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      {/* Hero */}
      <section className="relative pt-36 pb-20 overflow-hidden bg-hero-gradient">
        <div
          className="absolute inset-0 opacity-5"
          style={{ backgroundImage: `radial-gradient(circle at 2px 2px, #C9A84C 1px, transparent 0)`, backgroundSize: '40px 40px' }}
        />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="section-subtitle mb-4">Diskret & Professionell</p>
          <h1 className="font-serif text-6xl md:text-7xl font-light mb-6">
            <span className="gold-text">Gold</span>
            <span className="text-kenju-cream">ankauf</span>
          </h1>
          <div className="divider-gold mx-auto mb-6" />
          <p className="font-sans text-kenju-muted text-lg max-w-xl mx-auto leading-relaxed mb-10">
            Wir kaufen Gold, Silber, Platin und Brillanten zum <strong className="text-kenju-gold">tagesaktuellen Marktpreis</strong>.
            Kostenlose Bewertung, sofortige Auszahlung in bar – fair und transparent.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="#termin-goldankauf" className="btn-gold">Jetzt Termin buchen</Link>
            <a href="tel:+4917663284312" className="btn-outline-gold">+49 176 63284312</a>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-kenju-navy border-y border-kenju-border">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { val: '20+', label: 'Jahre Erfahrung' },
              { val: '5.000+', label: 'Zufriedene Kunden' },
              { val: '100%', label: 'Transparenz' },
              { val: 'Sofort', label: 'Bargeld-Auszahlung' },
            ].map((s) => (
              <div key={s.label}>
                <p className="font-serif text-4xl gold-text mb-1">{s.val}</p>
                <p className="font-sans text-xs tracking-widest uppercase text-kenju-muted">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-24 bg-kenju-black">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="section-subtitle mb-3">Einfach & Transparent</p>
            <h2 className="section-title">So funktioniert der Goldankauf</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((s) => (
              <div key={s.step} className="relative">
                <span className="font-serif text-6xl font-light gold-text opacity-30 block mb-4">{s.step}</span>
                <h3 className="font-serif text-xl text-kenju-cream mb-3">{s.title}</h3>
                <p className="font-sans text-sm text-kenju-muted leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What we buy */}
      <section className="py-24 bg-kenju-navy">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="section-subtitle mb-3">Was wir ankaufen</p>
            <h2 className="section-title">Alle Edelmetalle & Schmuck</h2>
            <div className="divider-gold mx-auto mt-4" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {materials.map((m) => (
              <div key={m.name} className="card-dark p-5">
                <h3 className="font-serif text-lg text-kenju-gold mb-2">{m.name}</h3>
                <p className="font-sans text-xs text-kenju-muted">{m.items}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 p-6 border border-kenju-gold/20 bg-kenju-black/50">
            <p className="font-sans text-sm text-kenju-muted text-center">
              <strong className="text-kenju-gold">Wichtiger Hinweis:</strong> Der Ankaufspreis richtet sich nach dem tagesaktuellen Goldkurs (LBMA Fix).
              Alle Bewertungen sind kostenlos und unverbindlich. Bringen Sie Ihren Personalausweis mit.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-kenju-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="section-subtitle mb-3">Häufige Fragen</p>
            <h2 className="section-title">FAQ – Goldankauf</h2>
            <div className="divider-gold mx-auto mt-4" />
          </div>
          <div className="space-y-4">
            {faqJsonLd.mainEntity.map((faq, i) => (
              <details key={i} className="card-dark p-5 group">
                <summary className="font-serif text-lg text-kenju-cream cursor-pointer list-none flex items-center justify-between gap-4">
                  {faq.name}
                  <span className="text-kenju-gold shrink-0 text-xl">+</span>
                </summary>
                <p className="font-sans text-sm text-kenju-muted mt-4 leading-relaxed">{faq.acceptedAnswer.text}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Appointment */}
      <section className="py-24 bg-kenju-navy" id="termin-goldankauf">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="section-subtitle mb-3">Kostenlose Bewertung</p>
            <h2 className="section-title mb-4">Goldankauf-Termin buchen</h2>
            <div className="divider-gold mx-auto mb-4" />
            <p className="font-sans text-kenju-muted">Buchen Sie jetzt einen Termin für Ihre kostenlose und unverbindliche Bewertung.</p>
          </div>
          <div className="card-dark p-8"><AppointmentForm /></div>
        </div>
      </section>

      {/* SEO Text */}
      <section className="py-16 bg-kenju-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl text-kenju-cream mb-6">Goldankauf Bielefeld – Ihr vertrauensvoller Partner</h2>
          <div className="divider-gold mb-8" />
          <div className="prose prose-invert font-sans text-sm text-kenju-muted leading-relaxed space-y-4">
            <p>
              KenJu Juwelier ist seit über 20 Jahren der vertrauenswürdige Ansprechpartner für <strong className="text-kenju-cream">Goldankauf in Bielefeld</strong>.
              Wir kaufen sämtliche Edelmetalle und Schmuckstücke – vom alten Erbschmuck bis zur Goldmünze – zu fairen Marktpreisen an.
            </p>
            <p>
              Der Preis für <strong className="text-kenju-cream">Gold</strong> schwankt täglich. Bei uns erhalten Sie garantiert den aktuellen Tagespreis,
              keine manipulierten Waagen und keine versteckten Abzüge. Vollständige Transparenz ist unser Versprechen.
            </p>
            <p>
              Für den Goldankauf benötigen Sie lediglich einen gültigen Personalausweis. Alle weiteren Schritte erledigen wir gemeinsam
              in einem persönlichen Gespräch – diskret, schnell und professionell in unserem Atelier in Bielefeld.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
