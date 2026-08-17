import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import AppointmentForm from '@/components/AppointmentForm';
import EdelmetallRechner from '@/components/EdelmetallRechner';

export const metadata: Metadata = {
  title: 'Goldankauf Bielefeld & Lippstadt | Faire Preise & Auszahlung | KenJu',
  description: 'Goldankauf in Bielefeld und Lippstadt zum tagesaktuellen Marktpreis. Kostenlose Bewertung, faire Ankaufspreise, Auszahlung in bar oder per Echtzeitüberweisung.',
  keywords: ['Goldankauf Bielefeld', 'Gold verkaufen Bielefeld', 'Zahngold verkaufen Bielefeld', 'Silber verkaufen Bielefeld', 'Schmuck verkaufen Bielefeld', 'Edelmetall Ankauf Bielefeld', 'Altschmuck verkaufen', 'Goldankauf Lippstadt', 'Goldmünzen kaufen Bielefeld', 'Goldbarren kaufen Bielefeld', 'Investmentgold Bielefeld', 'Gold als Anlage'],
  alternates: { canonical: 'https://kenju-juwelier.de/goldankauf' },
  openGraph: {
    title: 'Goldankauf Bielefeld & Lippstadt – Fairer Preis, sofortige Auszahlung',
    description: 'Kostenlose Bewertung, tagesaktueller Goldpreis, Auszahlung noch am selben Tag. KenJu Juwelier – Bielefeld und Lippstadt.',
    url: 'https://kenju-juwelier.de/goldankauf',
    type: 'website',
  },
};

const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'JewelryStore',
  name: 'KenJu Juwelier',
  url: 'https://kenju-juwelier.de',
  telephone: '+4952177075050',
  email: 'info@kenju.de',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Bahnhofstraße 28',
    addressLocality: 'Bielefeld',
    postalCode: '33602',
    addressCountry: 'DE',
  },
  openingHoursSpecification: [
    { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'], opens: '10:00', closes: '19:30' },
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Goldankauf Bielefeld und Lippstadt',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Goldankauf', description: 'Fairer Goldankauf zum tagesaktuellen Marktpreis in Bielefeld und Lippstadt.' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Silberankauf', description: 'Silber verkaufen in Bielefeld und Lippstadt – kostenlose Bewertung.' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Diamanten Ankauf', description: 'Brillanten und lose Diamanten ankaufen in Bielefeld und Lippstadt.' } },
    ],
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Wie läuft ein Goldankauf bei KenJu ab?',
      acceptedAnswer: { '@type': 'Answer', text: 'Sie bringen Ihr Gold, Silber oder Ihren Schmuck in eines unserer Ateliers – Loom Bielefeld (1. OG) oder Lange Straße 29 in Lippstadt. Wir bewerten Ihre Stücke kostenlos und unverbindlich, erstellen ein faires Angebot und zahlen bei Einigung sofort in bar oder per Echtzeitüberweisung aus.' },
    },
    {
      '@type': 'Question',
      name: 'Wie wird der Goldpreis berechnet?',
      acceptedAnswer: { '@type': 'Answer', text: 'Der Ankaufspreis richtet sich nach dem tagesaktuellen Goldkurs (LBMA Fix). Wir bieten Ihnen den transparenten Marktpreis ohne versteckte Abzüge.' },
    },
    {
      '@type': 'Question',
      name: 'Kann ich Zahngold verkaufen?',
      acceptedAnswer: { '@type': 'Answer', text: 'Ja, wir kaufen Zahngold in jeder Form an – Zahnkronen, Brücken und Dentallegierungen. Bringen Sie einfach Ihr Zahngold vorbei, wir bewerten es kostenlos vor Ort.' },
    },
    {
      '@type': 'Question',
      name: 'Kaufen Sie auch Silber an?',
      acceptedAnswer: { '@type': 'Answer', text: 'Ja. Wir kaufen Silberschmuck, Silberbarren, Silbermünzen und Silberbesteck an – zum tagesaktuellen Silberpreis. Kostenlose Bewertung direkt in unseren Geschäften in Bielefeld und Lippstadt.' },
    },
    {
      '@type': 'Question',
      name: 'Muss ich einen Termin vereinbaren?',
      acceptedAnswer: { '@type': 'Answer', text: 'Nein, Sie können auch ohne Termin vorbeikommen. Für eine stressfreie Beratung empfehlen wir jedoch einen kurzen Termin – einfach online buchen oder anrufen.' },
    },
    {
      '@type': 'Question',
      name: 'Wie schnell bekomme ich mein Geld?',
      acceptedAnswer: { '@type': 'Answer', text: 'Bei einer Einigung zahlen wir den Betrag entweder sofort in bar aus oder per Echtzeitüberweisung – ganz nach Ihrem Wunsch, noch am selben Tag.' },
    },
    {
      '@type': 'Question',
      name: 'Ist die Bewertung kostenlos?',
      acceptedAnswer: { '@type': 'Answer', text: 'Ja, die Bewertung Ihres Schmucks oder Ihrer Edelmetalle ist vollständig kostenlos und unverbindlich.' },
    },
    {
      '@type': 'Question',
      name: 'Benötige ich einen Ausweis?',
      acceptedAnswer: { '@type': 'Answer', text: 'Ja, bitte bringen Sie einen gültigen Personalausweis oder Reisepass mit. Dies ist gesetzlich vorgeschrieben.' },
    },
  ],
};

const steps = [
  { step: '01', title: 'Termin vereinbaren',  desc: 'Online buchen oder vorbeikommen – Bielefeld (Loom, 1. OG) oder Lippstadt.' },
  { step: '02', title: 'Kostenlose Bewertung', desc: 'Unsere Experten bewerten Ihr Gold, Silber oder Ihren Schmuck kostenlos und unverbindlich.' },
  { step: '03', title: 'Faires Angebot',       desc: 'Transparenter Ankaufspreis auf Basis des tagesaktuellen Goldkurses.' },
  { step: '04', title: 'Sofortige Auszahlung', desc: 'Bar oder per Echtzeitüberweisung – noch am selben Tag.' },
];

const ankaufKategorien = [
  { title: 'Gold',         img: '/images/gold.jpg',          alt: 'Gold verkaufen Bielefeld – Goldschmuck und Goldbarren',        tags: ['Goldschmuck', 'Goldbarren', 'Goldmünzen', 'Zahngold'] },
  { title: 'Silber',       img: '/images/silber.jpg',         alt: 'Silber verkaufen Bielefeld – Silberschmuck und Silberbarren',  tags: ['Silberschmuck', 'Silberbarren', 'Silbermünzen'] },
  { title: 'Münzen',       img: '/images/munzen.jpg',         alt: 'Goldmünzen verkaufen Bielefeld – Sammlermünzen Ankauf',        tags: ['Goldmünzen', 'Silbermünzen', 'Sammlermünzen'] },
  { title: 'Diamanten',    img: '/images/diamant.jpg',        alt: 'Diamanten bewerten lassen Bielefeld – Brillanten Ankauf',      tags: ['Lose Diamanten', 'Brillanten', 'Diamantschmuck'] },
  { title: 'Zahngold',     img: '/images/brillantringe.jpg',  alt: 'Zahngold Ankauf – fachgerechte Bewertung bei KenJu Juwelier',  tags: ['Kronen', 'Brücken', 'Dentalgold'] },
  { title: 'Silberbesteck', img: '/images/silberbesteck.jpg', alt: 'Silberbesteck verkaufen Bielefeld – Tafelsilber Ankauf',       tags: ['Tafelsilber', 'Antikes Besteck', '800er / 925er'] },
  { title: 'Altschmuck',   img: '/images/altschmuck.jpg',     alt: 'Altschmuck verkaufen Bielefeld – Schmuck Ankauf KenJu',        tags: ['Ringe', 'Ketten', 'Anhänger'] },
];

export default function GoldankaufPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="relative pt-36 pb-24 overflow-hidden" style={{ background: '#0F0D0A' }}>
        <div className="absolute inset-0">
          <Image
            src="/images/goldankauf.jpg"
            alt="Goldankauf Bielefeld bei KenJu Juwelier – faire Preise und sofortige Auszahlung"
            fill sizes="100vw" className="object-cover" priority style={{ opacity: 0.35 }}
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(15,13,10,0.7) 0%, rgba(15,13,10,0.5) 50%, rgba(15,13,10,1) 100%)' }} />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="section-subtitle mb-5">Diskret &amp; Professionell</p>
          <h1 className="font-serif font-light mb-6 text-white" style={{ fontSize: 'clamp(2.2rem, 7vw, 5.5rem)', lineHeight: 1.05 }}>
            Gold verkaufen in <span className="gold-text">Bielefeld</span><br className="hidden sm:block" /> &amp; Lippstadt
          </h1>
          <div className="divider-gold mx-auto mb-6" />
          <p className="font-sans text-lg max-w-xl mx-auto leading-relaxed mb-10" style={{ color: 'rgba(245,240,232,0.65)' }}>
            Goldankauf zum tagesaktuellen Marktpreis – kostenlose Bewertung, faire Ankaufspreise und sofortige Auszahlung in bar oder per Echtzeitüberweisung.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="#termin-goldankauf" className="btn-gold">Jetzt Termin buchen</Link>
            <a href="tel:+4917663284312" className="btn-outline-gold" style={{ borderColor: 'rgba(255,255,255,0.35)', color: 'rgba(255,255,255,0.85)' }}>+49 176 63284312</a>
          </div>
        </div>
      </section>

      {/* ── STATS ────────────────────────────────────────── */}
      <section className="py-10" style={{ backgroundColor: 'var(--kj-surface)', borderTop: '1px solid var(--kj-border)', borderBottom: '1px solid var(--kj-border)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { val: '10+',    label: 'Jahre Erfahrung' },
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

      {/* ── PRODUKTE ─────────────────────────────────────── */}
      <section className="py-18" style={{ backgroundColor: 'var(--kj-bg)', paddingTop: '4.5rem', paddingBottom: '4.5rem' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="section-subtitle mb-3">Was wir ankaufen</p>
            <h2 className="section-title mb-4">Folgende Produkte kaufen wir an</h2>
            <div className="divider-gold mx-auto" />
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {ankaufKategorien.map((kat) => (
              <div key={kat.title} className="group overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5" style={{ background: 'var(--kj-card)', border: '1px solid var(--kj-border)' }}>
                <div className="relative h-40 overflow-hidden">
                  <Image src={kat.img} alt={kat.alt} fill sizes="(max-width: 640px) 50vw, 25vw" className="object-cover img-zoom" style={{ opacity: 0.85 }} />
                  <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(15,13,10,0.5), transparent 70%)' }} />
                </div>
                <div className="p-4">
                  <h3 className="font-serif text-lg mb-1.5" style={{ color: 'var(--kj-text)' }}>{kat.title}</h3>
                  <p className="font-sans text-xs leading-relaxed" style={{ color: 'var(--kj-muted)' }}>{kat.tags.join(' · ')}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 p-4 text-center" style={{ border: '1px solid rgba(201,168,76,0.2)', background: 'var(--kj-card)' }}>
            <p className="font-sans text-sm" style={{ color: 'var(--kj-muted)' }}>
              <strong style={{ color: 'var(--kj-gold)' }}>Einfach vorbeikommen:</strong>{' '}
              Kostenlose, unverbindliche Bewertung – Personalausweis mitbringen. Loom Bielefeld (1. OG) · Lange Straße 29, Lippstadt.
            </p>
          </div>

          {/* Investmentgold */}
          <div className="mt-4 p-5 flex items-start gap-4" style={{ border: '1px solid rgba(201,168,76,0.3)', background: 'var(--kj-card)' }}>
            <span style={{ color: 'var(--kj-gold)', fontSize: '1.2rem', lineHeight: 1 }}>◈</span>
            <div>
              <p className="font-sans text-sm font-semibold mb-1" style={{ color: 'var(--kj-text)' }}>Gold als Anlage – Investmentgold bei KenJu</p>
              <p className="font-sans text-xs leading-relaxed" style={{ color: 'var(--kj-muted)' }}>
                Neben dem Ankauf bieten wir auch <strong style={{ color: 'var(--kj-text)' }}>Goldmünzen und Goldbarren als Wertanlage</strong> an. Lassen Sie sich persönlich zu Investmentgold beraten – transparent und zum tagesaktuellen Kurs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── RECHNER ──────────────────────────────────────── */}
      <section className="py-18" style={{ backgroundColor: 'var(--kj-surface)', borderTop: '1px solid var(--kj-border)', paddingTop: '4.5rem', paddingBottom: '4.5rem' }} id="rechner">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="section-subtitle mb-3">Transparenz</p>
            <h2 className="section-title mb-3">Edelmetall-Preisrechner</h2>
            <div className="divider-gold mx-auto mb-4" />
            <p className="font-sans text-sm max-w-xl mx-auto" style={{ color: 'var(--kj-muted)' }}>
              Erhalten Sie einen ersten Orientierungswert für Ihren Goldpreis – auf Basis des aktuellen Spot-Kurses.
            </p>
          </div>
          <EdelmetallRechner />

          {/* Trust-CTA unter Rechner */}
          <div className="mt-8 p-7 text-center" style={{ background: 'var(--kj-card)', border: '1px solid var(--kj-border)' }}>
            <p className="font-serif text-xl mb-2" style={{ color: 'var(--kj-text)' }}>Sie möchten eine genaue Bewertung?</p>
            <p className="font-sans text-sm mb-5" style={{ color: 'var(--kj-muted)' }}>
              Der Preisrechner liefert einen ersten Orientierungswert. Für eine exakte Bewertung prüfen wir Ihr Gold kostenlos direkt vor Ort in Bielefeld oder Lippstadt.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-6">
              {['Kostenlose Bewertung', 'Unverbindlich', 'Sofortige Auszahlung'].map((item) => (
                <span key={item} className="font-sans text-xs flex items-center gap-1.5" style={{ color: 'var(--kj-muted)' }}>
                  <span style={{ color: 'var(--kj-gold)' }}>✓</span>{item}
                </span>
              ))}
            </div>
            <Link href="#termin-goldankauf" className="btn-gold">Kostenlosen Termin vereinbaren</Link>
          </div>
        </div>
      </section>

      {/* ── SO FUNKTIONIERT'S ────────────────────────────── */}
      <section className="py-18" style={{ backgroundColor: 'var(--kj-bg)', borderTop: '1px solid var(--kj-border)', paddingTop: '4.5rem', paddingBottom: '4.5rem' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="section-subtitle mb-3">Einfach &amp; Transparent</p>
            <h2 className="section-title">So funktioniert der Goldankauf</h2>
            <div className="divider-gold mx-auto mt-4" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((s) => (
              <div key={s.step}>
                <span className="font-serif font-light gold-text block mb-3" style={{ fontSize: '3rem', opacity: 0.3, lineHeight: 1 }}>{s.step}</span>
                <h3 className="font-serif text-xl mb-2" style={{ color: 'var(--kj-text)' }}>{s.title}</h3>
                <p className="font-sans text-sm leading-relaxed" style={{ color: 'var(--kj-muted)' }}>{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="#termin-goldankauf" className="btn-gold">Jetzt Termin buchen</Link>
          </div>
        </div>
      </section>

      {/* ── GUTSCHEIN (Zusatzvorteil) ─────────────────────── */}
      <section className="py-12" style={{ backgroundColor: 'var(--kj-surface)', borderTop: '1px solid var(--kj-border)' }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 overflow-hidden" style={{ border: '1px solid var(--kj-border)' }}>
            <div className="p-7 lg:p-10 flex flex-col justify-center" style={{ background: 'var(--kj-card)' }}>
              <p className="section-subtitle mb-2">Zusätzlicher Vorteil</p>
              <h2 className="font-serif text-xl md:text-2xl font-light mb-3" style={{ color: 'var(--kj-text)', lineHeight: 1.2 }}>
                Optional mehr Wert erhalten
              </h2>
              <div className="divider-gold mb-5" />
              <p className="font-sans text-sm leading-relaxed mb-5" style={{ color: 'var(--kj-muted)' }}>
                Statt der Barauszahlung können Sie einen <strong style={{ color: 'var(--kj-gold)' }}>Einkaufsgutschein</strong> mit Mehrwert wählen – ideal wenn Sie neuen Schmuck oder Trauringe bei KenJu erwerben möchten.
              </p>
              <ul className="space-y-2 mb-6">
                {['Mehr Wert als Barauszahlung', 'Für das gesamte Sortiment einlösbar', 'Ideal für neuen Schmuck oder Trauringe', 'Kein Mindestankaufswert'].map((item) => (
                  <li key={item} className="flex items-center gap-2.5">
                    <span style={{ color: 'var(--kj-gold)', fontSize: '0.75rem' }}>✓</span>
                    <span className="font-sans text-xs" style={{ color: 'var(--kj-muted)' }}>{item}</span>
                  </li>
                ))}
              </ul>
              <Link href="#termin-goldankauf" className="btn-outline-gold self-start" style={{ fontSize: '0.7rem' }}>Mehr erfahren beim Termin</Link>
            </div>
            <div className="relative min-h-[220px] lg:min-h-0" style={{ background: 'var(--kj-card-deep)' }}>
              <Image src="/images/goldankauf.jpg" alt="Gutschein-Option beim Goldankauf – KenJu Juwelier Bielefeld" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" style={{ opacity: 0.4 }} />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="p-6 text-center" style={{ background: 'rgba(15,13,10,0.85)', border: '1px solid rgba(201,168,76,0.4)' }}>
                  <p className="font-serif text-4xl font-light gold-text mb-1">+</p>
                  <p className="font-sans text-xs tracking-widest uppercase mb-1" style={{ color: 'var(--kj-gold)' }}>Mehrwert</p>
                  <p className="font-serif text-lg text-white">Gutschein-Option</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TERMIN ───────────────────────────────────────── */}
      <section className="py-24" style={{ backgroundColor: 'var(--kj-bg)' }} id="termin-goldankauf">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="section-subtitle mb-3">Kostenlose Bewertung</p>
            <h2 className="section-title mb-4">Goldankauf-Termin buchen</h2>
            <div className="divider-gold mx-auto mb-5" />
            <p className="font-sans text-sm max-w-lg mx-auto mb-5" style={{ color: 'var(--kj-muted)' }}>
              Vereinbaren Sie jetzt Ihren kostenlosen und unverbindlichen Bewertungstermin für Ihren Goldankauf in Bielefeld oder Lippstadt.
            </p>
            <div className="flex flex-wrap justify-center gap-5 mb-2">
              {['Kostenlose Bewertung', 'Unverbindliches Angebot', 'Sofortige Barauszahlung', 'Diskrete Beratung'].map((item) => (
                <span key={item} className="font-sans text-xs flex items-center gap-1.5" style={{ color: 'var(--kj-muted)' }}>
                  <span style={{ color: 'var(--kj-gold)' }}>✓</span>{item}
                </span>
              ))}
            </div>
            <p className="font-sans text-xs mt-3" style={{ color: 'var(--kj-muted)', opacity: 0.6 }}>
              Bielefeld: Bahnhofstraße 28 (Loom, 1. OG), 33602 · Lippstadt: Lange Straße 29, 59555
            </p>
          </div>
          <div className="p-8 md:p-12" style={{ background: 'var(--kj-card)', border: '1px solid var(--kj-border)' }}>
            <AppointmentForm />
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────── */}
      <section className="py-18" style={{ backgroundColor: 'var(--kj-surface)', borderTop: '1px solid var(--kj-border)', paddingTop: '4.5rem', paddingBottom: '4.5rem' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="section-subtitle mb-3">Häufige Fragen</p>
            <h2 className="section-title">FAQ – Goldankauf</h2>
            <div className="divider-gold mx-auto mt-4" />
          </div>
          <div className="space-y-2.5">
            {faqJsonLd.mainEntity.map((faq, i) => (
              <details key={i} className="transition-all" style={{ background: 'var(--kj-card)', border: '1px solid var(--kj-border)' }}>
                <summary className="font-serif text-base cursor-pointer list-none flex items-center justify-between gap-4 px-6 py-4" style={{ color: 'var(--kj-text)' }}>
                  {faq.name}
                  <span className="shrink-0 text-lg font-light" style={{ color: 'var(--kj-gold)' }}>+</span>
                </summary>
                <p className="font-sans text-sm px-6 pb-5 leading-relaxed" style={{ color: 'var(--kj-muted)' }}>{faq.acceptedAnswer.text}</p>
              </details>
            ))}
          </div>

          {/* Internes Linking */}
          <div className="mt-10 pt-8" style={{ borderTop: '1px solid var(--kj-border)' }}>
            <p className="font-sans text-xs text-center mb-4 tracking-widest uppercase" style={{ color: 'var(--kj-muted)' }}>Weitere Angebote bei KenJu Juwelier</p>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                { href: '/ringe', label: 'Schmuck' },
                { href: '/trauringe', label: 'Trauringe' },
                { href: '/uhren', label: 'Uhren' },
                { href: '/service', label: 'Service' },
              ].map((link) => (
                <Link key={link.href} href={link.href} className="font-sans text-xs px-4 py-2 transition-colors hover:opacity-80" style={{ border: '1px solid var(--kj-border)', color: 'var(--kj-muted)', background: 'var(--kj-card)' }}>
                  {link.label} →
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
