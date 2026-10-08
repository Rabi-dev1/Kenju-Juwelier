import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import AppointmentForm from '@/components/AppointmentForm';

export const metadata: Metadata = {
  title: 'Trauringe & Verlobungsringe Bielefeld',
  description: 'Trauringe, Verlobungsringe und Partnerringe in Bielefeld und Lippstadt. Gold, Platin, Titan und mehr – persönliche Beratung und Anfertigung nach Maß.',
  keywords: ['Trauringe Bielefeld', 'Verlobungsringe Bielefeld', 'Trauringe Lippstadt', 'Verlobungsringe Lippstadt', 'Eheringe Bielefeld', 'Partnerringe', 'Trauringe Platin', 'Trauringe Titan', 'Trauring Gelbgold'],
  alternates: { canonical: 'https://kenju.de/trauringe' },
};

const vorteile = [
  { nr: '01', title: 'Individuelle Gestaltung',     desc: 'Breite, Legierung und Edelsteine nach Ihren Wünschen.' },
  { nr: '02', title: 'Handgefertigt in Deutschland', desc: 'Höchste Qualität und Tradition aus Meisterhand.' },
  { nr: '03', title: 'Kostenlose Beratung',          desc: 'Wir nehmen uns Zeit für Sie – in Bielefeld und Lippstadt.' },
  { nr: '04', title: 'Gravur nach Wunsch',           desc: 'Ihre persönliche Botschaft dauerhaft im Ring.' },
];

const materialien = [
  {
    name: 'Gelbgold',
    desc: 'Klassisch & zeitlos.',
    gradient: 'linear-gradient(135deg, #c8a84b 0%, #f5d98a 40%, #b8932a 70%, #e8c56a 100%)',
  },
  {
    name: 'Weißgold',
    desc: 'Modern & elegant.',
    gradient: 'linear-gradient(135deg, #b0b8c1 0%, #e8edf2 40%, #8a9299 70%, #d4dde5 100%)',
  },
  {
    name: 'Roségold',
    desc: 'Warm & romantisch.',
    gradient: 'linear-gradient(135deg, #c9826a 0%, #edb89a 40%, #b06a52 70%, #e0a080 100%)',
  },
];

/* Goldlegierungen in Karat */
const legierungen = ['333', '375', '585', '750'];

/* Weitere Materialien für Trauringe */
const weitereMaterialien = [
  'Platin',
  'Palladium',
  'Titan',
  'Tungsten',
  'Keramik',
  'Silber',
  'Edelstahl',
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
  '✓ Gravur auf Wunsch',
  '✓ Persönliche Beratung',
  '✓ Bielefeld & Lippstadt',
];

export default function TrauringePage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────── */}
      <section
        className="on-dark relative flex items-end pb-16 pt-36 overflow-hidden"
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
          <div className="absolute inset-0" style={{ background: 'rgba(0,0,0,0.42)' }} />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <nav className="flex items-center gap-2 font-sans text-xs mb-8 tracking-widest uppercase" style={{ color: 'rgba(245,240,232,0.45)' }}>
            <Link href="/" style={{ color: 'rgba(245,240,232,0.45)' }} className="hover:opacity-80 transition-opacity">Startseite</Link>
            <span style={{ opacity: 0.4 }}>›</span>
            <span style={{ color: 'var(--kj-gold)' }}>Trauringe &amp; Verlobungsringe</span>
          </nav>
          <h1 className="font-serif font-light mb-6 text-white" style={{ fontSize: 'clamp(1.9rem, 5vw, 4.5rem)', lineHeight: 1.08 }}>
            Trauringe &amp; Verlobungsringe<br className="hidden sm:block" /> in Bielefeld &amp; Lippstadt
          </h1>
          <div className="divider-gold mb-6" />
          <p className="font-sans text-lg max-w-2xl leading-relaxed mb-8" style={{ color: 'rgba(245,240,232,0.65)' }}>
            Ihr Ring ist mehr als Schmuck – er ist ein Versprechen für die Ewigkeit. Bei Juwelier KenJu in Bielefeld und Lippstadt beraten wir Sie persönlich zu Trauringen, Verlobungsringen und Partnerringen und fertigen Ihre Ringe individuell nach Maß.
          </p>
          <Link href="#termin" className="btn-gold" style={{ fontSize: '0.75rem', letterSpacing: '0.14em', padding: '1rem 2.5rem' }}>
            Jetzt Beratung vereinbaren
          </Link>

          {/* Trust-Chips unter CTA */}
          <div className="flex flex-col sm:flex-row flex-wrap gap-x-6 gap-y-2 mt-6">
            {['Individuelle Maßanfertigung', 'Gravur auf Wunsch', 'Persönliche Beratung', 'Bielefeld & Lippstadt'].map((item) => (
              <span key={item} className="font-sans text-xs flex items-center gap-1.5" style={{ color: 'rgba(245,240,232,0.6)' }}>
                <span style={{ color: 'var(--kj-gold)' }}>✓</span>{item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── EINFÜHRUNGSTEXT ──────────────────────────────── */}
      <section className="py-20" style={{ backgroundColor: 'var(--kj-bg)' }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="section-subtitle mb-4">Juwelier KenJu</p>
            <h2 className="section-title mb-4">Trau- &amp; Verlobungsringe für besondere Momente</h2>
            <div className="divider-gold mx-auto" />
          </div>

          <div className="space-y-5 font-sans text-base leading-relaxed" style={{ color: 'var(--kj-muted)' }}>
            <p>
              Ein Ring erzählt eine Geschichte – von einem besonderen Versprechen, einem gemeinsamen Weg und einem
              Moment, der für immer bleibt. Bei Juwelier KenJu finden Sie eine sorgfältig ausgewählte Kollektion an
              Trauringen, Verlobungsringen und Partnerringen, die hochwertige Materialien, erstklassige Verarbeitung
              und zeitlose Eleganz vereinen.
            </p>
            <p>
              Ob klassisch und schlicht, modern und stilvoll oder mit funkelnden Diamanten und besonderen Details –
              gemeinsam mit Ihnen finden wir den Ring, der Ihre Persönlichkeit widerspiegelt und Ihre ganz persönliche
              Geschichte erzählt.
            </p>
            <p>
              Bei Juwelier KenJu legen wir großen Wert darauf, dass nicht nur das Design überzeugt. Auch die Passform,
              das Material und die Verarbeitung spielen eine entscheidende Rolle für einen Ring, der Sie im Alltag und
              ein Leben lang begleitet.
            </p>
            <p>
              In einer persönlichen und individuellen Beratung nehmen wir uns Zeit für Ihre Wünsche und zeigen Ihnen
              verschiedene Stilrichtungen, Materialien und Gestaltungsmöglichkeiten. So finden wir gemeinsam den Ring,
              der zu Ihnen passt und Ihren besonderen Moment unvergesslich macht.
            </p>
          </div>
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

          {/* Goldlegierungen */}
          <div className="mt-5 p-6" style={{ background: 'var(--kj-card)', border: '1px solid var(--kj-border)' }}>
            <p className="font-sans text-xs tracking-widest uppercase mb-4" style={{ color: 'var(--kj-gold)' }}>
              Goldlegierungen
            </p>
            <div className="flex flex-wrap gap-3">
              {legierungen.map((l) => (
                <span
                  key={l}
                  className="font-serif text-lg px-5 py-2"
                  style={{ background: 'var(--kj-surface)', border: '1px solid var(--kj-border)', color: 'var(--kj-text)' }}
                >
                  {l}
                </span>
              ))}
            </div>
            <p className="font-sans text-xs mt-4" style={{ color: 'var(--kj-muted)' }}>
              Erhältlich in Gelbgold, Weißgold und Roségold – auch als Bicolor-Kombination.
            </p>
          </div>

          {/* Weitere Materialien */}
          <div className="mt-4 p-6" style={{ background: 'var(--kj-card)', border: '1px solid var(--kj-border)' }}>
            <p className="font-sans text-xs tracking-widest uppercase mb-4" style={{ color: 'var(--kj-gold)' }}>
              Weitere Materialien für Trauringe
            </p>
            <div className="flex flex-wrap gap-2.5">
              {weitereMaterialien.map((m) => (
                <span
                  key={m}
                  className="font-sans text-sm px-4 py-1.5"
                  style={{ background: 'var(--kj-surface)', border: '1px solid var(--kj-border)', color: 'var(--kj-muted)' }}
                >
                  {m}
                </span>
              ))}
            </div>
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
                Bei KenJu Juwelier begleiten wir Sie von der ersten Idee bis zum fertigen Trauring. In unseren Ateliers in Bielefeld und Lippstadt nehmen wir uns Zeit für Ihre Wünsche und beraten Sie persönlich und unverbindlich.
              </p>
              <ul className="space-y-3 mb-8">
                {['Individuelle Beratung', 'Maßanfertigung', 'Gravur auf Wunsch', 'Bielefeld: Bahnhofstraße 28, Loom 1. OG · Lippstadt: Lange Straße 29'].map((item) => (
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
            {/* Trust-Block */}
            <div className="flex items-center justify-center gap-2 mb-4">
              <span style={{ color: 'var(--kj-gold)', letterSpacing: '0.05em', fontSize: '0.9rem' }}>★★★★★</span>
              <span className="font-sans text-sm font-medium" style={{ color: 'var(--kj-gold)' }}>4,7 / 5</span>
              <span className="font-sans text-xs" style={{ color: 'var(--kj-muted)' }}>· Basierend auf unseren Google-Bewertungen</span>
            </div>
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
            <div className="divider-gold mx-auto mb-5" />
            <p className="font-sans text-sm leading-relaxed mx-auto" style={{ color: 'var(--kj-muted)', maxWidth: '650px' }}>
              Kostenlose und unverbindliche Beratung. Wir nehmen uns Zeit für Ihre Wünsche und zeigen Ihnen passende Modelle vor Ort.
            </p>
            <p className="font-sans text-xs mt-2" style={{ color: 'var(--kj-muted)', opacity: 0.65 }}>
              Bielefeld: Bahnhofstraße 28, Loom 1. OG · Lippstadt: Lange Straße 29, 59555
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
