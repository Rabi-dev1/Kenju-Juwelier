import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import AppointmentForm from '@/components/AppointmentForm';

export const metadata: Metadata = {
  title: 'Schmuck- & Uhrenreparatur Bielefeld & Lippstadt | KenJu Juwelier',
  description: 'Schmuckreparatur & Uhrenreparatur in Bielefeld und Lippstadt – Ringgrößenänderung, Gravuren, Batteriewechsel, Glaswechsel. Ihr Goldschmied & Uhrmacher.',
  keywords: ['Schmuckreparatur Bielefeld', 'Uhrenreparatur Bielefeld', 'Uhrmacher Bielefeld', 'Schmuckreparatur Lippstadt', 'Uhrenreparatur Lippstadt', 'Ringgrößenänderung Bielefeld', 'Goldschmied Bielefeld', 'Batteriewechsel Uhr Bielefeld', 'Gravur Bielefeld', 'Kettenreparatur Bielefeld'],
  alternates: { canonical: 'https://kenju-juwelier.de/service' },
};

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Schmuck- & Uhrenservice Bielefeld und Lippstadt',
  description: 'Schmuckreparatur, Uhrenreparatur, Ringgrößenänderung, Gravuren und mehr bei KenJu Juwelier – Bahnhofstraße 28 (Loom, 1. OG), 33602 Bielefeld und Lange Straße 29, 59555 Lippstadt.',
  provider: {
    '@type': 'JewelryStore',
    name: 'KenJu Juwelier',
    address: { '@type': 'PostalAddress', streetAddress: 'Bahnhofstraße 28', addressLocality: 'Bielefeld', postalCode: '33602', addressCountry: 'DE' },
    telephone: '+4952177075050',
    email: 'info@kenju.de',
    url: 'https://kenju-juwelier.de',
  },
  areaServed: [
    { '@type': 'City', name: 'Bielefeld' },
    { '@type': 'City', name: 'Lippstadt' },
  ],
};

const trustBoxes = [
  { val: '10+',    title: 'Jahre Erfahrung',                sub: 'Bielefeld & Lippstadt' },
  { val: '◈',     title: 'Zertifizierte Handwerksqualität', sub: 'Geprüfte Fachkräfte' },
  { val: 'Sofort', title: 'Batteriewechsel',                sub: 'Oft am selben Tag fertig' },
  { val: '⬡',     title: 'Fachwerkstatt',                  sub: 'Für Schmuck & Uhren' },
];

const processSteps = [
  { nr: '01', title: 'Schmuck oder Uhr vorbeibringen',  desc: 'Bielefeld: Bahnhofstraße 28 (Loom, 1. OG) · Lippstadt: Lange Straße 29.' },
  { nr: '02', title: 'Kostenlose Einschätzung',          desc: 'Wir prüfen den Zustand transparent und unverbindlich.' },
  { nr: '03', title: 'Transparente Preisangabe',         desc: 'Klares Angebot – keine versteckten Kosten.' },
  { nr: '04', title: 'Fachgerechte Reparatur',           desc: 'Präzise Ausführung durch unsere erfahrenen Experten.' },
  { nr: '05', title: 'Abholen und wieder tragen',        desc: 'Ihr Stück erstrahlt in neuem Glanz.' },
];

const schmuckServices = [
  { name: 'Ringgrößenänderung',           desc: 'Fachgerecht weiten oder enger machen – schnell und präzise.' },
  { name: 'Kettenreparaturen',            desc: 'Verschlüsse, Glieder, Lotarbeiten – sauber und dauerhaft.' },
  { name: 'Steinersatz',                  desc: 'Verlorene Steine neu setzen – Brillanten, Edelsteine, Zirkonia.' },
  { name: 'Gravuren',                     desc: 'Namen, Daten, Initialen – individuell in Ringe, Anhänger & Armreifen.' },
  { name: 'Rhodinierung',                 desc: 'Weißgold auffrischen – brillanter, silbrig-weißer Glanz.' },
  { name: 'Politur & Reinigung',          desc: 'Hochglanzpolitur und Ultraschallreinigung – wie neu.' },
  { name: 'Umarbeitung alter Schmuckstücke', desc: 'Erbstücken ein modernes zweites Leben geben.' },
];

const uhrenServices = [
  { name: 'Batteriewechsel',            desc: 'Sicher, wasserdicht abgedichtet – oft noch am selben Tag.' },
  { name: 'Glaswechsel',                desc: 'Mineral- und Saphirglas für alle Modelle.' },
  { name: 'Armbandservice',             desc: 'Kürzen, verlängern oder austauschen.' },
  { name: 'Druckprüfung & Abdichtung',  desc: 'Wasserdichtigkeitstest und Neuabdichtung.' },
  { name: 'Gehäusereinigung',           desc: 'Professionelle Reinigung und Politur.' },
  { name: 'Gangkontrolle',              desc: 'Ganggenauigkeit bei Quarz- und Automatikuhren prüfen.' },
  { name: 'Wasserdichtigkeit prüfen',   desc: 'Zuverlässiger Schutz nach Norm.' },
  { name: 'Metallarmbänder kürzen',     desc: 'Perfekter Sitz am Handgelenk.' },
];

export default function ServicePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />

      {/* ── HERO ─────────────────────────────────────────── */}
      <section
        className="relative flex items-end overflow-hidden"
        style={{ background: '#08080F', minHeight: '65vh', paddingTop: '9rem', paddingBottom: '5rem' }}
      >
        <div className="absolute inset-0">
          <Image
            src="/images/service-hero.jpg"
            alt="Uhrmacher Bielefeld – Geöffnete Uhr mit schwarzen Handschuhen bei KenJu Juwelier"
            fill sizes="100vw"
            className="object-cover"
            style={{ objectPosition: 'center 40%', opacity: 0.55 }}
            priority
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(8,8,15,0.97) 0%, rgba(8,8,15,0.52) 55%, rgba(8,8,15,0.28) 100%)' }} />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <nav className="flex items-center gap-2 font-sans text-xs mb-8 tracking-widest uppercase" style={{ color: 'rgba(245,240,232,0.4)' }}>
            <Link href="/" style={{ color: 'rgba(245,240,232,0.4)' }} className="hover:opacity-80 transition-opacity">Startseite</Link>
            <span style={{ opacity: 0.4 }}>›</span>
            <span style={{ color: 'var(--kj-gold)' }}>Service</span>
          </nav>

          <p className="section-subtitle mb-5">Bielefeld · Lippstadt</p>
          <h1 className="font-serif font-light text-white mb-6" style={{ fontSize: 'clamp(2rem, 5.5vw, 5rem)', lineHeight: 1.08 }}>
            Schmuck- &amp; Uhrenservice<br className="hidden sm:block" /> vom Fachbetrieb
          </h1>
          <div className="divider-gold mb-6" />
          <p className="font-sans max-w-xl leading-relaxed mb-8" style={{ color: 'rgba(245,240,232,0.58)', fontSize: '0.95rem' }}>
            Schmuckreparatur und Uhrenreparatur in Bielefeld und Lippstadt – präzise, zuverlässig und mit über 10 Jahren Erfahrung als Goldschmied und Uhrmacher.
          </p>

          <div className="flex flex-row gap-3 mb-8">
            <Link href="#termin-service" className="btn-gold" style={{ fontSize: '0.75rem', letterSpacing: '0.14em', padding: '0.9rem 2rem' }}>
              Reparatur anfragen
            </Link>
            <a href="tel:+4917663284312" className="btn-outline-gold" style={{ fontSize: '0.75rem', letterSpacing: '0.14em', padding: '0.9rem 2rem', borderColor: 'rgba(255,255,255,0.28)', color: 'rgba(255,255,255,0.78)' }}>
              Anrufen
            </a>
          </div>

          <div className="flex flex-wrap gap-x-5 gap-y-2">
            {['Über 10 Jahre Erfahrung', 'Faire Preise', 'Persönliche Beratung', '2 Standorte'].map((item) => (
              <span key={item} className="font-sans text-xs flex items-center gap-1.5" style={{ color: 'rgba(245,240,232,0.48)' }}>
                <span style={{ color: 'var(--kj-gold)' }}>✓</span>{item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── TRUST-KACHELN ────────────────────────────────── */}
      <section className="py-12" style={{ backgroundColor: 'var(--kj-surface)', borderBottom: '1px solid var(--kj-border)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {trustBoxes.map((b) => (
              <div key={b.title} className="p-6 text-center" style={{ background: 'var(--kj-card)', border: '1px solid var(--kj-border)' }}>
                <p className="font-serif text-3xl gold-text mb-2">{b.val}</p>
                <p className="font-sans text-xs font-semibold tracking-wide mb-1" style={{ color: 'var(--kj-text)' }}>{b.title}</p>
                <p className="font-sans text-xs" style={{ color: 'var(--kj-muted)' }}>{b.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABLAUF ───────────────────────────────────────── */}
      <section className="py-20" style={{ backgroundColor: 'var(--kj-bg)' }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="section-subtitle mb-4">Schnell &amp; Unkompliziert</p>
            <h2 className="section-title mb-4">So einfach funktioniert unser Service</h2>
            <div className="divider-gold mx-auto" />
          </div>

          <div className="space-y-0 pl-8 border-l" style={{ borderColor: 'var(--kj-border)' }}>
            {processSteps.map((s, i) => (
              <div key={s.nr} className={`flex gap-6 ${i < processSteps.length - 1 ? 'pb-8' : ''}`}>
                <div
                  className="shrink-0 w-14 h-14 flex items-center justify-center font-serif text-xl font-light -ml-[3.25rem]"
                  style={{ border: '1px solid var(--kj-gold)', color: 'var(--kj-gold)', background: 'var(--kj-bg)', minWidth: '3.5rem' }}
                >
                  {s.nr}
                </div>
                <div className="pt-3">
                  <h3 className="font-serif text-lg mb-1" style={{ color: 'var(--kj-text)' }}>{s.title}</h3>
                  <p className="font-sans text-sm" style={{ color: 'var(--kj-muted)' }}>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SCHMUCK-SERVICES ─────────────────────────────── */}
      <section className="py-20" style={{ backgroundColor: 'var(--kj-surface)', borderTop: '1px solid var(--kj-border)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 overflow-hidden" style={{ border: '1px solid var(--kj-border)' }}>
            <div className="relative min-h-[280px] lg:min-h-0 overflow-hidden" style={{ background: 'var(--kj-bg)' }}>
              <Image
                src="/images/service1.jpg"
                alt="Goldschmied Bielefeld – Schmuckreparatur und Ringgrößenänderung bei KenJu Juwelier"
                fill sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover img-zoom"
                style={{ opacity: 0.88 }}
              />
              <div className="img-caption">
                <p className="font-serif text-lg text-white">Goldschmied · Bielefeld</p>
                <p className="font-sans text-xs mt-1" style={{ color: 'rgba(255,255,255,0.5)' }}>Präzise Handarbeit · Bielefeld & Lippstadt</p>
              </div>
            </div>
            <div className="p-8 lg:p-12 flex flex-col justify-center" style={{ background: 'var(--kj-card)' }}>
              <p className="section-subtitle mb-3">Schmuckreparatur Bielefeld</p>
              <h2 className="font-serif text-2xl md:text-3xl font-light mb-4" style={{ color: 'var(--kj-text)' }}>
                Beliebte Schmuckreparaturen
              </h2>
              <div className="divider-gold mb-6" />
              <p className="font-sans text-sm leading-relaxed mb-6" style={{ color: 'var(--kj-muted)' }}>
                Als erfahrener <strong style={{ color: 'var(--kj-text)' }}>Goldschmied in Bielefeld</strong> übernehmen wir Reparaturen aller Art – von der Ringgrößenänderung bis zur Umarbeitung alter Erbstücke.
              </p>
              <div className="space-y-0">
                {schmuckServices.map((s) => (
                  <div key={s.name} className="flex gap-4 py-3" style={{ borderBottom: '1px solid var(--kj-border)' }}>
                    <span className="shrink-0 mt-0.5" style={{ color: 'var(--kj-gold)', fontSize: '0.7rem' }}>✦</span>
                    <div>
                      <p className="font-sans text-sm font-medium" style={{ color: 'var(--kj-text)' }}>{s.name}</p>
                      <p className="font-sans text-xs mt-0.5" style={{ color: 'var(--kj-muted)' }}>{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── UHREN-SERVICES ───────────────────────────────── */}
      <section className="py-20" style={{ backgroundColor: 'var(--kj-bg)', borderTop: '1px solid var(--kj-border)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 overflow-hidden" style={{ border: '1px solid var(--kj-border)' }}>
            <div className="p-8 lg:p-12 flex flex-col justify-center" style={{ background: 'var(--kj-card)' }}>
              <p className="section-subtitle mb-3">Uhrenreparatur Bielefeld</p>
              <h2 className="font-serif text-2xl md:text-3xl font-light mb-4" style={{ color: 'var(--kj-text)' }}>
                Ihr Uhrmacher in Bielefeld
              </h2>
              <div className="divider-gold mb-6" />
              <p className="font-sans text-sm leading-relaxed mb-6" style={{ color: 'var(--kj-muted)' }}>
                Ob <strong style={{ color: 'var(--kj-text)' }}>Batteriewechsel</strong>, Glaswechsel oder Armbandreparatur – unser <strong style={{ color: 'var(--kj-text)' }}>Uhrmacher in Bielefeld</strong> kümmert sich mit Präzision und Sorgfalt um Ihre Uhr.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-0">
                {uhrenServices.map((s) => (
                  <div key={s.name} className="flex gap-3 py-3 pr-4" style={{ borderBottom: '1px solid var(--kj-border)' }}>
                    <span className="shrink-0 mt-0.5" style={{ color: 'var(--kj-gold)', fontSize: '0.7rem' }}>✦</span>
                    <div>
                      <p className="font-sans text-sm font-medium" style={{ color: 'var(--kj-text)' }}>{s.name}</p>
                      <p className="font-sans text-xs mt-0.5" style={{ color: 'var(--kj-muted)' }}>{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative min-h-[280px] lg:min-h-0 overflow-hidden" style={{ background: 'var(--kj-surface)' }}>
              <Image
                src="/images/service2.jpg"
                alt="Uhrmacher Bielefeld – Uhrenreparatur und Batteriewechsel bei KenJu Juwelier"
                fill sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover img-zoom"
                style={{ opacity: 0.88 }}
              />
              <div className="img-caption">
                <p className="font-serif text-lg text-white">Uhrmacherkunst · Präzision</p>
                <p className="font-sans text-xs mt-1" style={{ color: 'rgba(255,255,255,0.5)' }}>Uhrenreparatur Bielefeld</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── UHRENMARKEN ──────────────────────────────────── */}
      <section className="py-16" style={{ backgroundColor: 'var(--kj-surface)', borderTop: '1px solid var(--kj-border)' }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="section-subtitle mb-3">Unser Sortiment</p>
            <h2 className="section-title mb-4">Verfügbare Uhrenmarken</h2>
            <div className="divider-gold mx-auto mb-5" />
            <p className="font-sans text-sm leading-relaxed max-w-xl mx-auto" style={{ color: 'var(--kj-muted)' }}>
              Bei KenJu finden Sie ausgewählte Modelle von <strong style={{ color: 'var(--kj-text)' }}>Tommy Hilfiger, Hugo Boss, Police, Regent</strong> und <strong style={{ color: 'var(--kj-text)' }}>Swiss Military</strong>.
            </p>
          </div>

          <div className="grid grid-cols-3 sm:grid-cols-5 gap-3 mb-8">
            {['Tommy Hilfiger', 'Hugo Boss', 'Police', 'Regent', 'Swiss Military'].map((brand) => (
              <div key={brand} className="p-4 text-center" style={{ background: 'var(--kj-card)', border: '1px solid var(--kj-border)' }}>
                <p className="font-serif text-sm" style={{ color: 'var(--kj-text)' }}>{brand}</p>
              </div>
            ))}
          </div>

          <div className="p-6 flex items-start gap-4" style={{ background: 'var(--kj-card)', border: '1px solid rgba(201,168,76,0.3)' }}>
            <span style={{ color: 'var(--kj-gold)', fontSize: '1.2rem', lineHeight: 1 }}>◈</span>
            <div>
              <p className="font-sans text-sm font-semibold mb-1" style={{ color: 'var(--kj-text)' }}>Reparaturservice für alle Marken</p>
              <p className="font-sans text-xs leading-relaxed" style={{ color: 'var(--kj-muted)' }}>
                Unser Uhrmacher-Service in Bielefeld steht selbstverständlich auch für Uhren anderer Hersteller zur Verfügung – bringen Sie Ihre Uhr einfach vorbei.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── ABSCHLUSS-CTA ────────────────────────────────── */}
      <section className="py-20" style={{ backgroundColor: 'var(--kj-bg)', borderTop: '1px solid var(--kj-border)' }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="section-subtitle mb-4">Kommen Sie vorbei</p>
          <h2 className="font-serif text-3xl md:text-4xl font-light mb-5" style={{ color: 'var(--kj-text)' }}>
            Ihr Lieblingsstück verdient das Beste.
          </h2>
          <div className="divider-gold mx-auto mb-6" />
          <p className="font-sans text-sm max-w-lg mx-auto leading-relaxed mb-8" style={{ color: 'var(--kj-muted)' }}>
            Persönliche Beratung, transparente Preise und fachgerechte Ausführung – in unseren Ateliers:<br /><strong style={{ color: 'var(--kj-text)' }}>Bahnhofstraße 28 (Loom, 1. OG), 33602 Bielefeld</strong> · <strong style={{ color: 'var(--kj-text)' }}>Lange Straße 29, 59555 Lippstadt</strong>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="#termin-service" className="btn-gold">Reparatur anfragen</Link>
            <a href="tel:+4917663284312" className="btn-outline-gold">Jetzt anrufen</a>
          </div>
        </div>
      </section>

      {/* ── FORMULAR ─────────────────────────────────────── */}
      <section className="py-24" style={{ backgroundColor: 'var(--kj-surface)' }} id="termin-service">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="section-subtitle mb-3">Reparatur anfragen</p>
            <h2 className="section-title mb-4">Service-Termin buchen</h2>
            <div className="divider-gold mx-auto mb-4" />
            <p className="font-sans text-sm" style={{ color: 'var(--kj-muted)' }}>
              Bielefeld: Bahnhofstraße 28 (Loom, 1. OG), 33602 · Lippstadt: Lange Straße 29, 59555 · Wir antworten innerhalb von 24 Stunden.
            </p>
          </div>
          <div className="p-8 md:p-10" style={{ background: 'var(--kj-card)', border: '1px solid var(--kj-border)' }}>
            <AppointmentForm />
          </div>
        </div>
      </section>
    </>
  );
}
