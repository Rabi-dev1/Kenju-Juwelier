import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import AppointmentForm from '@/components/AppointmentForm';
import EdelmetallRechner from '@/components/EdelmetallRechner';

export const metadata: Metadata = {
  title: 'Goldankauf Bielefeld – Fairer Goldpreis Sofort | KenJu Juwelier',
  description: 'Goldankauf in Bielefeld zum Tagespreis. Wir kaufen Gold, Silber, Platin, Brillanten und Schmuck. Sofortige Auszahlung in bar. Keine versteckten Kosten. KenJu Juwelier.',
  keywords: ['Goldankauf Bielefeld', 'Gold verkaufen Bielefeld', 'Goldpreis', 'Schmuck verkaufen', 'Edelmetall Ankauf'],
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
    { '@type': 'Question', name: 'Was brauche ich beim Goldankauf?', acceptedAnswer: { '@type': 'Answer', text: 'Sie benötigen lediglich einen gültigen Personalausweis oder Reisepass. Alle weiteren Schritte erledigen wir gemeinsam.' } },
    { '@type': 'Question', name: 'Wie wird der Goldpreis berechnet?', acceptedAnswer: { '@type': 'Answer', text: 'Der Ankaufspreis richtet sich nach dem tagesaktuellen Goldkurs (LBMA Fix). Wir bieten Ihnen den transparenten Marktpreis ohne versteckte Abzüge.' } },
    { '@type': 'Question', name: 'Welche Arten von Gold kaufen Sie an?', acceptedAnswer: { '@type': 'Answer', text: 'Wir kaufen alle Arten von Gold und Edelmetallen an: Goldschmuck (585er und 750er), Goldmünzen, Zahngold, Silber, Platin sowie Brillanten.' } },
    { '@type': 'Question', name: 'Wie schnell erhalte ich mein Geld?', acceptedAnswer: { '@type': 'Answer', text: 'Bei Einigung zahlen wir sofort in bar aus – noch am selben Tag.' } },
    { '@type': 'Question', name: 'Ist die Bewertung kostenlos?', acceptedAnswer: { '@type': 'Answer', text: 'Ja, die Bewertung ist vollständig kostenlos und unverbindlich.' } },
    { '@type': 'Question', name: 'Was ist die Gutschein-Option?', acceptedAnswer: { '@type': 'Answer', text: 'Statt Barauszahlung können Sie einen Einkaufsgutschein wählen, der einen Mehrwert bietet – ideal für neuen Schmuck zu besseren Konditionen.' } },
  ],
};

const steps = [
  { step: '01', title: 'Termin vereinbaren',  desc: 'Kostenloser Beratungstermin in Bielefeld.' },
  { step: '02', title: 'Kostenlose Bewertung', desc: 'Experten bewerten Ihr Gold unverbindlich.' },
  { step: '03', title: 'Faires Angebot',       desc: 'Transparenter Marktpreis, ohne versteckte Abzüge.' },
  { step: '04', title: 'Sofortige Auszahlung', desc: 'Bargeld noch am selben Tag.' },
];

const ankaufKategorien = [
  { title: 'Gold',         img: '/images/goldankauf.jpg',             tags: ['Goldschmuck', 'Goldbarren', 'Goldmünzen', 'Zahngold'] },
  { title: 'Silber',       img: '/images/armreifen.jpg',              tags: ['Silberschmuck', 'Silberbarren', 'Silbermünzen'] },
  { title: 'Münzen',       img: '/images/silbermuenzen.jpg',          tags: ['Goldmünzen', 'Silbermünzen', 'Sammlermünzen'] },
  { title: 'Diamanten',    img: '/images/brillant-set-luxus.jpg',     tags: ['Lose Diamanten', 'Brillanten', 'Diamantschmuck'] },
  { title: 'Platin',       img: '/images/brillantring-halo-weiss.jpg', tags: ['Platinringe', 'Platinschmuck', 'Platinbarren'] },
  { title: 'Zahngold',     img: '/images/brillantringe.jpg',          tags: ['Kronen', 'Brücken', 'Dentalgold'] },
  { title: 'Silberbesteck', img: '/images/silberbesteck.jpg',         tags: ['Tafelsilber', 'Antikes Besteck', '800er / 925er Silber'] },
  { title: 'Altschmuck',   img: '/images/altschmuck.jpg',             tags: ['Ringe', 'Ketten', 'Anhänger'] },
];

export default function GoldankaufPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="relative pt-36 pb-24 overflow-hidden" style={{ background: '#0F0D0A' }}>
        <div className="absolute inset-0">
          <Image src="/images/goldankauf.jpg" alt="Goldankauf KenJu Juwelier Bielefeld" fill sizes="100vw" className="object-cover" priority style={{ opacity: 0.35 }} />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(15,13,10,0.7) 0%, rgba(15,13,10,0.5) 50%, rgba(15,13,10,1) 100%)' }} />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="section-subtitle mb-5">Diskret &amp; Professionell</p>
          <h1 className="font-serif font-light mb-6 text-white" style={{ fontSize: 'clamp(2.2rem, 7vw, 5.5rem)', lineHeight: 1.05 }}>
            <span className="gold-text">Gold</span>ankauf
          </h1>
          <div className="divider-gold mx-auto mb-6" />
          <p className="font-sans text-lg max-w-xl mx-auto leading-relaxed mb-10" style={{ color: 'rgba(245,240,232,0.6)' }}>
            Wir kaufen Gold, Silber, Platin und Brillanten zum{' '}
            <strong className="gold-text">tagesaktuellen Marktpreis</strong>. Kostenlose Bewertung, sofortige Auszahlung in bar.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="#termin-goldankauf" className="btn-gold">Jetzt Termin buchen</Link>
            <a href="tel:+4917663284312" className="btn-outline-gold" style={{ borderColor: 'rgba(255,255,255,0.35)', color: 'rgba(255,255,255,0.85)' }}>+49 176 63284312</a>
          </div>
        </div>
      </section>

      {/* ── STATS ────────────────────────────────────────── */}
      <section className="py-12" style={{ backgroundColor: 'var(--kj-surface)', borderTop: '1px solid var(--kj-border)', borderBottom: '1px solid var(--kj-border)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

      {/* ── PRODUKTE ─────────────────────────────────────── */}
      <section className="py-20" style={{ backgroundColor: 'var(--kj-bg)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="section-subtitle mb-4">Was wir ankaufen</p>
            <h2 className="section-title mb-4">Folgende Produkte kaufen wir an</h2>
            <div className="divider-gold mx-auto" />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {ankaufKategorien.map((kat) => (
              <div key={kat.title} className="group overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5" style={{ background: 'var(--kj-card)', border: '1px solid var(--kj-border)' }}>
                <div className="relative h-40 overflow-hidden">
                  <Image src={kat.img} alt={`${kat.title} Ankauf`} fill sizes="(max-width: 640px) 50vw, 25vw" className="object-cover img-zoom" style={{ opacity: 0.85 }} />
                  <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(15,13,10,0.5), transparent 70%)' }} />
                </div>
                <div className="p-4">
                  <h3 className="font-serif text-lg mb-2" style={{ color: 'var(--kj-text)' }}>{kat.title}</h3>
                  <p className="font-sans text-xs leading-relaxed" style={{ color: 'var(--kj-muted)' }}>
                    {kat.tags.join(' · ')}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 p-5 text-center" style={{ border: '1px solid rgba(201,168,76,0.2)', background: 'var(--kj-card)' }}>
            <p className="font-sans text-sm" style={{ color: 'var(--kj-muted)' }}>
              <strong style={{ color: 'var(--kj-gold)' }}>Einfach vorbeikommen:</strong>{' '}
              Kostenlose, unverbindliche Bewertung – Personalausweis mitbringen.
            </p>
          </div>
        </div>
      </section>

      {/* ── RECHNER ──────────────────────────────────────── */}
      <section className="py-20" style={{ backgroundColor: 'var(--kj-surface)', borderTop: '1px solid var(--kj-border)' }} id="rechner">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="section-subtitle mb-4">Transparenz</p>
            <h2 className="section-title mb-4">Edelmetall-Preisrechner</h2>
            <div className="divider-gold mx-auto mb-5" />
            <p className="font-sans text-sm max-w-xl mx-auto" style={{ color: 'var(--kj-muted)' }}>
              Erhalten Sie einen ersten Orientierungswert auf Basis des aktuellen Spot-Kurses.
            </p>
          </div>
          <EdelmetallRechner />

          {/* CTA unter Rechner */}
          <div className="mt-10 p-8 text-center" style={{ background: 'var(--kj-card)', border: '1px solid var(--kj-border)' }}>
            <p className="font-serif text-xl mb-2" style={{ color: 'var(--kj-text)' }}>Sie möchten eine genaue Bewertung?</p>
            <p className="font-sans text-sm mb-6" style={{ color: 'var(--kj-muted)' }}>
              Der Preisrechner liefert einen ersten Orientierungswert. Für eine exakte Bewertung prüfen wir Ihr Gold kostenlos direkt vor Ort.
            </p>
            <Link href="#termin-goldankauf" className="btn-gold">Kostenlosen Termin vereinbaren</Link>
          </div>
        </div>
      </section>

      {/* ── SO FUNKTIONIERT'S ────────────────────────────── */}
      <section className="py-20" style={{ backgroundColor: 'var(--kj-bg)', borderTop: '1px solid var(--kj-border)' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="section-subtitle mb-4">Einfach &amp; Transparent</p>
            <h2 className="section-title">So funktioniert der Goldankauf</h2>
            <div className="divider-gold mx-auto mt-4" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((s) => (
              <div key={s.step}>
                <span className="font-serif font-light gold-text block mb-4" style={{ fontSize: '3.5rem', opacity: 0.35, lineHeight: 1 }}>{s.step}</span>
                <h3 className="font-serif text-xl mb-2" style={{ color: 'var(--kj-text)' }}>{s.title}</h3>
                <p className="font-sans text-sm leading-relaxed" style={{ color: 'var(--kj-muted)' }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── GUTSCHEIN ────────────────────────────────────── */}
      <section className="py-16" style={{ backgroundColor: 'var(--kj-surface)', borderTop: '1px solid var(--kj-border)' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 overflow-hidden" style={{ border: '1px solid var(--kj-border)' }}>
            <div className="p-8 lg:p-12 flex flex-col justify-center" style={{ background: 'var(--kj-card)' }}>
              <p className="section-subtitle mb-3">Exklusiver Vorteil</p>
              <h2 className="font-serif font-light mb-4" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', color: 'var(--kj-text)', lineHeight: 1.2 }}>
                Altgold verkaufen &amp; mehr erhalten
              </h2>
              <div className="divider-gold mb-6" />
              <ul className="space-y-3 mb-7">
                {['Mehr Wert als Barauszahlung', 'Für das gesamte Sortiment einlösbar', 'Ideal für neuen Schmuck oder Trauringe', 'Keine Mindestbestellmenge'].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <span className="font-serif font-bold" style={{ color: 'var(--kj-gold)' }}>✓</span>
                    <span className="font-sans text-sm" style={{ color: 'var(--kj-muted)' }}>{item}</span>
                  </li>
                ))}
              </ul>
              <Link href="#termin-goldankauf" className="btn-gold self-start">Jetzt Termin vereinbaren</Link>
            </div>
            <div className="relative min-h-[260px] lg:min-h-0" style={{ background: 'var(--kj-card-deep)' }}>
              <Image src="/images/goldankauf.jpg" alt="Altgold Gutschein – KenJu Juwelier" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" style={{ opacity: 0.45 }} />
              <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
                <div className="p-8 max-w-xs" style={{ background: 'rgba(15,13,10,0.85)', border: '1px solid rgba(201,168,76,0.4)' }}>
                  <p className="font-serif text-5xl font-light mb-2 gold-text">+</p>
                  <p className="section-subtitle mb-2">Mehrwert</p>
                  <p className="font-serif text-xl text-white">Gutschein-Option</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TERMIN ───────────────────────────────────────── */}
      <section className="py-28" style={{ backgroundColor: 'var(--kj-bg)' }} id="termin-goldankauf">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="section-subtitle mb-4">Kostenlose Bewertung</p>
            <h2 className="section-title mb-4">Goldankauf-Termin buchen</h2>
            <div className="divider-gold mx-auto mb-5" />
            <p className="font-sans text-sm max-w-lg mx-auto" style={{ color: 'var(--kj-muted)' }}>
              Vereinbaren Sie jetzt Ihren kostenlosen und unverbindlichen Bewertungstermin.
            </p>
            <p className="font-sans text-xs mt-2" style={{ color: 'var(--kj-muted)', opacity: 0.65 }}>
              Bahnhofstraße 28, 33602 Bielefeld
            </p>
          </div>
          <div className="p-10 md:p-12" style={{ background: 'var(--kj-card)', border: '1px solid var(--kj-border)' }}>
            <AppointmentForm />
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────── */}
      <section className="py-20" style={{ backgroundColor: 'var(--kj-surface)', borderTop: '1px solid var(--kj-border)' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="section-subtitle mb-4">Häufige Fragen</p>
            <h2 className="section-title">FAQ – Goldankauf</h2>
            <div className="divider-gold mx-auto mt-4" />
          </div>
          <div className="space-y-3">
            {faqJsonLd.mainEntity.map((faq, i) => (
              <details key={i} className="transition-all" style={{ background: 'var(--kj-card)', border: '1px solid var(--kj-border)' }}>
                <summary className="font-serif text-lg cursor-pointer list-none flex items-center justify-between gap-4 px-6 py-4" style={{ color: 'var(--kj-text)' }}>
                  {faq.name}
                  <span className="shrink-0 text-xl font-light" style={{ color: 'var(--kj-gold)' }}>+</span>
                </summary>
                <p className="font-sans text-sm px-6 pb-5 leading-relaxed" style={{ color: 'var(--kj-muted)' }}>{faq.acceptedAnswer.text}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
