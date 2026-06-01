import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import AppointmentForm from '@/components/AppointmentForm';

export const metadata: Metadata = {
  title: 'Trauringe in Bielefeld – Individuelle Anfertigung | KenJu Juwelier',
  description: 'Trauringe in Bielefeld bei KenJu Juwelier. Persönliche Beratung, individuelle Anfertigung in Gelbgold, Weißgold und Roségold. Kostenloser Beratungstermin.',
  keywords: ['Trauringe Bielefeld', 'Eheringe Bielefeld', 'Trauringe individuell', 'Trauring Gelbgold', 'Trauring Weißgold', 'Trauring Roségold'],
  alternates: { canonical: 'https://kenju-juwelier.de/trauringe' },
};

const vorteile = [
  {
    nr: '01',
    title: 'Individuelle Gestaltung',
    desc: 'Breite, Legierung und Edelsteine perfekt nach Ihren Wünschen.',
  },
  {
    nr: '02',
    title: 'Handgefertigt in Deutschland',
    desc: 'Höchste Qualität, Präzision und Tradition aus Meisterhand.',
  },
  {
    nr: '03',
    title: 'Kostenlose Beratung',
    desc: 'Wir nehmen uns in unserem Bielefelder Atelier ausgiebig Zeit für Sie.',
  },
  {
    nr: '04',
    title: 'Gravur nach Wunsch',
    desc: 'Ihre persönliche Botschaft als ewige, kostenlose Erinnerung im Ring.',
  },
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

const processSteps = [
  { step: '01', title: 'Beratungstermin',           desc: 'Wir zeigen Ihnen die gesamte Kollektion in Ruhe.' },
  { step: '02', title: 'Individuelle Gestaltung',    desc: 'Material, Breite, Oberfläche, Gravur – ganz nach Ihrem Geschmack.' },
  { step: '03', title: 'Handgefertigte Produktion',  desc: 'Jeder Ring wird von Hand mit größter Sorgfalt gefertigt.' },
  { step: '04', title: 'Übergabe',                   desc: 'Ihr persönliches Versprechen – bereit für Ihren großen Tag.' },
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
            src="/images/brillantringe.jpg"
            alt="Trauringe Bielefeld – KenJu Juwelier"
            fill
            sizes="100vw"
            className="object-cover img-zoom"
            priority
            style={{ opacity: 0.55 }}
          />
          <div
            className="absolute inset-0"
            style={{ background: 'linear-gradient(to top, rgba(15,13,10,0.97) 0%, rgba(15,13,10,0.55) 55%, rgba(15,13,10,0.25) 100%)' }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <nav
            aria-label="Brotkrumen"
            className="flex items-center gap-2 font-sans text-xs mb-8 tracking-widest uppercase"
            style={{ color: 'rgba(245,240,232,0.45)' }}
          >
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

      {/* ── SEO-TEXTBLOCK ────────────────────────────────── */}
      <section className="py-16" style={{ backgroundColor: 'var(--kj-surface)', borderBottom: '1px solid var(--kj-border)' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="section-subtitle mb-4">Ihr Juwelier in Bielefeld</p>
          <h2 className="font-serif text-3xl md:text-4xl font-light mb-5" style={{ color: 'var(--kj-text)' }}>
            Persönliche Trauring-Beratung in Bielefeld
          </h2>
          <div className="divider-gold mx-auto mb-6" />
          <p className="font-sans text-base leading-relaxed max-w-3xl mx-auto" style={{ color: 'var(--kj-muted)' }}>
            Gemeinsam finden wir die Trauringe, die perfekt zu Ihnen passen. Ob klassisches Gelbgold, modernes Weißgold oder romantisches Roségold – wir begleiten Sie von der ersten Beratung bis zum fertigen Ring. In unserem Atelier in Bielefeld nehmen wir uns Zeit für Ihre Wünsche und gestalten Trauringe, die Ihre persönliche Geschichte erzählen.
          </p>
        </div>
      </section>

      {/* ── WARUM PAARE KENJU WÄHLEN ─────────────────────── */}
      <section className="py-24" style={{ backgroundColor: 'var(--kj-bg)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="section-subtitle mb-4">Ihre Vorteile</p>
            <h2 className="section-title mb-4">Warum Paare KenJu wählen</h2>
            <div className="divider-gold mx-auto" />
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {vorteile.map((v) => (
              <div
                key={v.nr}
                className="p-5 flex flex-col gap-3 transition-all duration-300"
                style={{ background: 'var(--kj-card)', border: '1px solid var(--kj-border)' }}
              >
                <span className="font-serif text-2xl" style={{ color: 'var(--kj-gold)' }}>{v.nr}</span>
                <h3 className="font-serif text-base" style={{ color: 'var(--kj-text)' }}>{v.title}</h3>
                <p className="font-sans text-xs leading-relaxed" style={{ color: 'var(--kj-muted)' }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MATERIALIEN ──────────────────────────────────── */}
      <section className="py-20" style={{ backgroundColor: 'var(--kj-surface)', borderTop: '1px solid var(--kj-border)' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="section-subtitle mb-4">Ihre Wahl</p>
            <h2 className="section-title mb-4">Materialien &amp; Legierungen</h2>
            <div className="divider-gold mx-auto" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {materialien.map((m) => (
              <div
                key={m.name}
                className="p-5 flex flex-col gap-3 transition-all duration-300"
                style={{ background: 'var(--kj-card)', border: '1px solid var(--kj-border)' }}
              >
                <div
                  className="w-10 h-10 rounded-full shrink-0"
                  style={{ background: m.gradient, boxShadow: '0 2px 8px rgba(0,0,0,0.3)' }}
                />
                <p className="font-serif text-lg gold-text">{m.name}</p>
                <p className="font-sans text-xs" style={{ color: 'var(--kj-muted)' }}>{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROZESS ──────────────────────────────────────── */}
      <section className="py-24" style={{ backgroundColor: 'var(--kj-bg)', borderTop: '1px solid var(--kj-border)' }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="section-subtitle mb-4">Schritt für Schritt</p>
            <h2 className="section-title mb-4">Ihr Weg zum perfekten Trauring</h2>
            <div className="divider-gold mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-0 relative">
            <div
              className="hidden md:block absolute top-8 left-[12.5%] right-[12.5%] h-px"
              style={{ background: 'linear-gradient(to right, transparent, var(--kj-gold), transparent)', opacity: 0.3 }}
            />
            {processSteps.map((s, i) => (
              <div key={s.step} className="relative text-center px-6 py-8">
                <div
                  className="inline-flex items-center justify-center w-16 h-16 mb-6 font-serif text-2xl font-light relative z-10"
                  style={{ border: '1px solid var(--kj-gold)', color: 'var(--kj-gold)', background: 'var(--kj-bg)' }}
                >
                  {s.step}
                </div>
                <h4 className="font-serif text-lg mb-2" style={{ color: 'var(--kj-text)' }}>{s.title}</h4>
                <p className="font-sans text-xs leading-relaxed" style={{ color: 'var(--kj-muted)' }}>{s.desc}</p>
                {i < processSteps.length - 1 && (
                  <div
                    className="md:hidden w-px h-8 mx-auto mt-6"
                    style={{ background: 'linear-gradient(to bottom, var(--kj-gold), transparent)', opacity: 0.4 }}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── VERTRAUENSSEKTION ────────────────────────────── */}
      <section className="py-16" style={{ backgroundColor: 'var(--kj-surface)', borderTop: '1px solid var(--kj-border)' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="section-subtitle mb-4">Ihr Trauring-Partner</p>
          <h2 className="font-serif text-2xl md:text-3xl font-light mb-5" style={{ color: 'var(--kj-text)' }}>
            Persönliche Beratung in unserem Atelier in Bielefeld
          </h2>
          <div className="divider-gold mx-auto mb-6" />
          <p className="font-sans text-sm leading-relaxed max-w-2xl mx-auto mb-8" style={{ color: 'var(--kj-muted)' }}>
            Wir begleiten Sie von der ersten Idee bis zum fertigen Trauring. In unserem Atelier in Bielefeld nehmen wir uns Zeit für Ihre Wünsche und beraten Sie persönlich und unverbindlich.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl mx-auto">
            {[
              { icon: '◎', label: 'Bahnhofstraße 28, Bielefeld' },
              { icon: '◈', label: 'Individuelle Beratung' },
              { icon: '⬡', label: 'Maßanfertigung' },
              { icon: '✦', label: 'Gravuren kostenlos' },
            ].map((item) => (
              <div key={item.label} className="flex flex-col items-center gap-2 py-4 px-3"
                style={{ background: 'var(--kj-card)', border: '1px solid var(--kj-border)' }}>
                <span className="text-xl gold-text">{item.icon}</span>
                <p className="font-sans text-xs text-center leading-snug" style={{ color: 'var(--kj-muted)' }}>{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── APPOINTMENT ──────────────────────────────────── */}
      <section className="py-28" style={{ backgroundColor: 'var(--kj-bg)' }} id="termin">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="section-subtitle mb-4">Ihr besonderer Moment</p>
            <h2 className="section-title mb-4">Trauring-Beratung buchen</h2>
            <div className="divider-gold mx-auto mb-5" />
            <p className="font-sans text-sm" style={{ color: 'var(--kj-muted)' }}>
              Kostenlose und unverbindliche Beratung in unserem Atelier – Bahnhofstraße 28, 33602 Bielefeld.
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
