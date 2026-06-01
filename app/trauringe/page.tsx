import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import AppointmentForm from '@/components/AppointmentForm';

export const metadata: Metadata = {
  title: 'Trauringe in Bielefeld – Individuelle Anfertigung | KenJu Juwelier',
  description: 'Trauringe in Bielefeld bei KenJu Juwelier. Persönliche Beratung, individuelle Anfertigung in Gelbgold, Weißgold und Roségold. Kostenloser Beratungstermin.',
  keywords: ['Trauringe Bielefeld', 'Eheringe Bielefeld', 'Trauringe individuell', 'Trauring Gelbgold'],
  alternates: { canonical: 'https://kenju-juwelier.de/trauringe' },
};

const vorteile = [
  { nr: '01', title: 'Individuelle Gestaltung',     desc: 'Breite, Legierung und Edelsteine nach Ihren Wünschen.' },
  { nr: '02', title: 'Handgefertigt in Deutschland', desc: 'Höchste Qualität und Tradition aus Meisterhand.' },
  { nr: '03', title: 'Kostenlose Beratung',          desc: 'Wir nehmen uns ausgiebig Zeit für Sie in Bielefeld.' },
  { nr: '04', title: 'Gravur nach Wunsch',           desc: 'Ihre persönliche Botschaft – kostenlos im Ring.' },
];

const materialien = [
  {
    name: '585 Gelbgold',
    desc: 'Der Klassiker – warmer Goldton, zeitlos.',
    gradient: 'linear-gradient(135deg, #c8a84b 0%, #f5d98a 40%, #b8932a 70%, #e8c56a 100%)',
  },
  {
    name: '585 Weißgold',
    desc: 'Modern & rhodiniert für bleibenden Glanz.',
    gradient: 'linear-gradient(135deg, #b0b8c1 0%, #e8edf2 40%, #8a9299 70%, #d4dde5 100%)',
  },
  {
    name: '585 Roségold',
    desc: 'Romantisch – zarter Rosaton für besondere Momente.',
    gradient: 'linear-gradient(135deg, #c9826a 0%, #edb89a 40%, #b06a52 70%, #e0a080 100%)',
  },
];

const kollektion = [
  {
    img: '/images/stonering.jpg',
    alt: 'Klassischer Solitärring 585 Gelbgold KenJu Bielefeld',
    title: 'Klassischer Solitärring',
    desc: '585 Gelbgold mit zeitlosem Design.',
  },
  {
    img: '/images/bigring.jpg',
    alt: 'Bicolor Designring 585 Gelbgold KenJu Bielefeld',
    title: 'Bicolor Designring',
    desc: '585 Gelbgold & Bicolor mit besonderer Struktur.',
  },
  {
    img: '/images/doppelring.jpg',
    alt: 'Trauring-Set 585 Gelbgold KenJu Bielefeld',
    title: 'Trauring-Set',
    desc: '585 Gelbgold für Paare mit klassischem Geschmack.',
  },
];

const bewertungen = [
  {
    name: 'Anna Moshage',
    text: 'Bester Juwelier in Bielefeld. Sehr liebe und kompetente Beratung. Es wird sich sehr viel Zeit genommen und die Auswahl ist sehr gut. Kann ich zu 100% weiterempfehlen.',
  },
  {
    name: 'Olga Mierau',
    text: 'Ich bin mit der Bedienung und Beratung sehr zufrieden. Herzlicher Empfang und jede Frage wurde ernst genommen und beraten. Danke.',
  },
  {
    name: 'Alexander Schäuble',
    text: 'Seriös, sehr freundliches und kompetentes Personal vor Ort. Der Schmuck ist qualitativ perfekt, habe da nie Probleme gehabt. Auf jeden Fall weiterzuempfehlen 👍🏼',
  },
];

const trustItems = [
  '✓ Individuelle Maßanfertigung',
  '✓ Kostenlose Gravur',
  '✓ Persönliche Beratung',
  '✓ Atelier in Bielefeld',
];

export default function TrauringePage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────── */}
      <section
        className="relative flex items-end pb-16 pt-36 overflow-hidden"
        style={{ background: '#0F0D0A', minHeight: '60vh' }}
      >
        <div className="absolute inset-0">
          <Image
            src="/images/trauringehero.jpg"
            alt="Trauringe Beratung – KenJu Juwelier Bielefeld"
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
          <div className="absolute inset-0" style={{ background: 'rgba(0,0,0,0.55)' }} />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <nav className="flex items-center gap-2 font-sans text-xs mb-8 tracking-widest uppercase" style={{ color: 'rgba(245,240,232,0.45)' }}>
            <Link href="/" style={{ color: 'rgba(245,240,232,0.45)' }} className="hover:opacity-80 transition-opacity">Startseite</Link>
            <span style={{ opacity: 0.4 }}>›</span>
            <span style={{ color: 'var(--kj-gold)' }}>Trauringe</span>
          </nav>
          <h1 className="font-serif text-6xl md:text-8xl font-light mb-6 text-white" style={{ lineHeight: 1.05 }}>
            Trauringe in Bielefeld
          </h1>
          <div className="divider-gold mb-6" />
          <p className="font-sans text-lg max-w-2xl leading-relaxed mb-8" style={{ color: 'rgba(245,240,232,0.65)' }}>
            Ihr Trauring ist mehr als ein Ring – er ist ein Versprechen für die Ewigkeit. Bei KenJu Juwelier in Bielefeld beraten wir Sie persönlich zu exklusiven Trauringen aus Gelbgold, Weißgold und Roségold und fertigen Ihre Ringe individuell nach Maß.
          </p>
          <Link href="#termin" className="btn-gold" style={{ fontSize: '0.75rem', letterSpacing: '0.14em', padding: '1rem 2.5rem' }}>
            Jetzt Beratung vereinbaren
          </Link>
        </div>
      </section>

      {/* ── WARUM PAARE KENJU WÄHLEN ─────────────────────── */}
      <section className="py-20" style={{ backgroundColor: 'var(--kj-surface)', borderBottom: '1px solid var(--kj-border)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Trust-Leiste */}
          <div
            className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-12 px-6 py-4"
            style={{ background: 'var(--kj-card)', border: '1px solid var(--kj-border)' }}
          >
            {trustItems.map((item) => (
              <p key={item} className="font-sans text-xs text-center tracking-wide" style={{ color: 'var(--kj-gold)' }}>
                {item}
              </p>
            ))}
          </div>

          <div className="text-center mb-12">
            <p className="section-subtitle mb-4">Ihre Vorteile</p>
            <h2 className="section-title mb-4">Warum Paare KenJu wählen</h2>
            <div className="divider-gold mx-auto" />
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {vorteile.map((v) => (
              <div key={v.nr} className="p-5 flex flex-col gap-3" style={{ background: 'var(--kj-card)', border: '1px solid var(--kj-border)' }}>
                <span className="font-serif text-2xl" style={{ color: 'var(--kj-gold)' }}>{v.nr}</span>
                <h3 className="font-serif text-base" style={{ color: 'var(--kj-text)' }}>{v.title}</h3>
                <p className="font-sans text-xs leading-relaxed" style={{ color: 'var(--kj-muted)' }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MATERIALIEN ──────────────────────────────────── */}
      <section className="py-20" style={{ backgroundColor: 'var(--kj-bg)' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="section-subtitle mb-4">Ihre Wahl</p>
            <h2 className="section-title mb-4">Materialien &amp; Legierungen</h2>
            <div className="divider-gold mx-auto" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {materialien.map((m) => (
              <div key={m.name} className="p-5 flex flex-col gap-3" style={{ background: 'var(--kj-card)', border: '1px solid var(--kj-border)' }}>
                <div className="w-10 h-10 rounded-full" style={{ background: m.gradient, boxShadow: '0 2px 8px rgba(0,0,0,0.3)' }} />
                <p className="font-serif text-lg gold-text">{m.name}</p>
                <p className="font-sans text-xs" style={{ color: 'var(--kj-muted)' }}>{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PERSÖNLICHE BERATUNG ─────────────────────────── */}
      <section className="py-28" style={{ backgroundColor: 'var(--kj-surface)', borderTop: '1px solid var(--kj-border)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 overflow-hidden" style={{ border: '1px solid var(--kj-border)' }}>
            <div className="relative min-h-[360px] lg:min-h-0 overflow-hidden" style={{ background: 'var(--kj-bg)' }}>
              <Image
                src="/images/ringberatung.jpg"
                alt="Trauring Beratung KenJu Juwelier Bielefeld"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover img-zoom"
              />
            </div>
            <div className="p-8 lg:p-12 flex flex-col justify-center" style={{ background: 'var(--kj-card)' }}>
              <p className="section-subtitle mb-4">Ihr Trauring-Partner</p>
              <h2 className="font-serif text-2xl md:text-3xl font-light mb-4" style={{ color: 'var(--kj-text)', lineHeight: 1.2 }}>
                Persönliche Beratung in unserem Atelier
              </h2>
              <div className="divider-gold mb-6" />
              <p className="font-sans text-sm leading-relaxed mb-7" style={{ color: 'var(--kj-muted)' }}>
                Bei KenJu Juwelier begleiten wir Sie von der ersten Idee bis zum fertigen Trauring. In unserem Atelier in Bielefeld nehmen wir uns Zeit für Ihre Wünsche und beraten Sie persönlich und unverbindlich.
              </p>
              <ul className="space-y-3 mb-8">
                {['Individuelle Beratung', 'Maßanfertigung', 'Gravuren kostenlos', 'Bahnhofstraße 28, Bielefeld, Loom 1. OG'].map((item) => (
                  <li key={item} className="flex items-center gap-3 font-sans text-sm" style={{ color: 'var(--kj-text)' }}>
                    <span style={{ color: 'var(--kj-gold)' }}>✓</span>
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="#termin" className="btn-gold self-start">Jetzt Termin buchen</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── TRAURING-KOLLEKTION ───────────────────────────── */}
      <section className="py-28" style={{ backgroundColor: 'var(--kj-bg)', borderTop: '1px solid var(--kj-border)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="section-subtitle mb-4">Ausgewählte Designs</p>
            <h2 className="section-title mb-4">Unsere Trauring-Kollektion</h2>
            <div className="divider-gold mx-auto mb-4" />
            <p className="font-sans text-sm" style={{ color: 'var(--kj-muted)' }}>
              Entdecken Sie ausgewählte Designs aus Gelbgold, Weißgold und Bicolor.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {kollektion.map((k) => (
              <div
                key={k.title}
                className="overflow-hidden group"
                style={{ background: 'var(--kj-card)', border: '1px solid var(--kj-border)' }}
              >
                <div className="relative overflow-hidden" style={{ height: '280px' }}>
                  <Image
                    src={k.img}
                    alt={k.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    style={{ opacity: 0.9 }}
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-serif text-xl mb-1" style={{ color: 'var(--kj-text)' }}>{k.title}</h3>
                  <p className="font-sans text-xs" style={{ color: 'var(--kj-muted)' }}>{k.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="#termin" className="btn-gold">
              Jetzt persönliche Beratung vereinbaren
            </Link>
          </div>
        </div>
      </section>

      {/* ── BEWERTUNGEN ──────────────────────────────────── */}
      <section className="py-16" style={{ backgroundColor: 'var(--kj-surface)', borderTop: '1px solid var(--kj-border)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="section-subtitle mb-3">Kundenstimmen</p>
            <h2 className="section-title">Was unsere Kunden sagen</h2>
            <div className="divider-gold mx-auto mt-4" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {bewertungen.map((b) => (
              <div key={b.name} className="p-6 flex flex-col gap-4" style={{ background: 'var(--kj-card)', border: '1px solid var(--kj-border)' }}>
                <div className="flex gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i} style={{ color: 'var(--kj-gold)', fontSize: '0.85rem' }}>★</span>
                  ))}
                </div>
                <p className="font-sans text-sm leading-relaxed" style={{ color: 'var(--kj-muted)' }}>
                  &ldquo;{b.text}&rdquo;
                </p>
                <p className="font-sans text-xs font-semibold tracking-wider" style={{ color: 'var(--kj-text)' }}>
                  — {b.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FORMULAR ─────────────────────────────────────── */}
      <section className="py-24" style={{ backgroundColor: 'var(--kj-bg)' }} id="termin">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="section-subtitle mb-3">Kostenlos & Unverbindlich</p>
            <h2 className="section-title mb-4">Trauring-Beratung buchen</h2>
            <div className="divider-gold mx-auto mb-4" />
            <p className="font-sans text-sm" style={{ color: 'var(--kj-muted)' }}>
              Bahnhofstraße 28, 33602 Bielefeld · Loom 1. OG
            </p>
          </div>
          <div className="p-8 md:p-12" style={{ background: 'var(--kj-card)', border: '1px solid var(--kj-border)' }}>
            <AppointmentForm />
          </div>
        </div>
      </section>
    </>
  );
}
