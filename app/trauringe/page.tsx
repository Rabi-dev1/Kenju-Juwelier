import type { Metadata } from 'next';
import Link from 'next/link';
import CategoryHero from '@/components/CategoryHero';
import AppointmentForm from '@/components/AppointmentForm';

export const metadata: Metadata = {
  title: 'Trauringe – Cilor Trauringspezialisten | KenJu Juwelier Bielefeld',
  description: 'Trauringe und Eheringe von Cilor bei KenJu Juwelier Bielefeld. Made in Germany, individuelle Anfertigung, höchste Handarbeit. Ihr persönlicher Trauring nach Maß.',
  keywords: ['Trauringe', 'Eheringe', 'Cilor Trauringe', 'Trauringe Made in Germany', 'Trauring Bielefeld', 'individuelle Trauringe'],
  alternates: { canonical: 'https://kenju-juwelier.de/trauringe' },
};

const cilorVorteile = [
  {
    icon: '◈',
    title: 'Made in Germany',
    desc: 'Cilor Trauringe werden ausschließlich in Deutschland gefertigt – von Meisterhand, mit höchsten Qualitätsstandards und unter fairen Arbeitsbedingungen.',
  },
  {
    icon: '⋆',
    title: 'Echte Handarbeit',
    desc: 'Jeder Ring ist ein Unikat. Erfahrene Goldschmiede fertigen Ihre Trauringe von Hand – mit der Sorgfalt und Liebe zum Detail, die dieser besondere Moment verdient.',
  },
  {
    icon: '◯',
    title: 'Jahrzehntelange Tradition',
    desc: 'Cilor steht seit Generationen für Trauringkultur in Deutschland. Diese Tradition fließt in jeden einzelnen Ring – als Versprechen von Beständigkeit.',
  },
  {
    icon: '⬡',
    title: 'Individuelle Anfertigung',
    desc: 'Ihr Trauring entsteht genau nach Ihren Vorstellungen: Legierung, Oberfläche, Breite, Gravur und Stein – alles individuell wählbar nach Ihrem Wunsch.',
  },
];

const materialien = [
  { name: '585 Gelbgold',   desc: 'Der Klassiker – warmer Goldton, zeitlos und traditionell.' },
  { name: '585 Weißgold',   desc: 'Elegant und modern, rhodiniert für bleibenden Glanz.' },
  { name: '585 Roségold',   desc: 'Romantisch und einzigartig – zarter Rosaton für besondere Momente.' },
  { name: '950 Platin',     desc: 'Das edelste Metall – selten, dauerhaft, unverwechselbar.' },
  { name: '750 Gold',       desc: '18 Karat – maximale Reinheit für höchste Ansprüche.' },
  { name: 'Bicolor',        desc: 'Gelb- und Weißgold kombiniert – zwei Töne, ein Ring.' },
];

const processSteps = [
  {
    step: '01',
    title: 'Beratungstermin',
    desc: 'Kommen Sie zu uns ins Atelier – wir nehmen uns Zeit und zeigen Ihnen die gesamte Cilor-Kollektion in Ruhe.',
  },
  {
    step: '02',
    title: 'Individuelle Gestaltung',
    desc: 'Wählen Sie Material, Breite, Oberfläche, Gravur und optionale Steine ganz nach Ihrem persönlichen Geschmack.',
  },
  {
    step: '03',
    title: 'Handgefertigte Produktion',
    desc: 'Cilor fertigt Ihren Trauring in Deutschland von Hand – mit größter Sorgfalt und der Präzision, die ein Versprechen verdient.',
  },
  {
    step: '04',
    title: 'Übergabe',
    desc: 'Wir übergeben Ihnen Ihr persönliches Versprechen in einer stilvollen Verpackung – bereit für Ihren großen Tag.',
  },
];

export default function TrauringePage() {
  return (
    <>
      <CategoryHero
        title="Trauringe"
        subtitle="Cilor – Made in Germany"
        description="Ihr Trauring ist mehr als ein Ring – er ist ein Versprechen für die Ewigkeit. Bei KenJu Juwelier beraten wir Sie mit der exklusiven Cilor-Kollektion und fertigen Ihren Ring individuell nach Maß."
        imageSrc="/images/brillantringe.jpg"
        imageAlt="Trauringe Beratung – KenJu Juwelier Bielefeld"
        breadcrumb="Trauringe"
        pageUrl="https://kenju-juwelier.de/trauringe"
      />

      {/* ── Emotional Intro ──────────────────────────────── */}
      <section className="py-32" style={{ backgroundColor: 'var(--kj-bg)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-20">
            <p className="section-subtitle mb-4">Ein Moment für die Ewigkeit</p>
            <h2 className="section-title mb-6">
              Der Ring, der alles bedeutet
            </h2>
            <div className="divider-gold mx-auto mb-8" />
            <p className="font-sans text-base leading-relaxed mb-6" style={{ color: 'var(--kj-muted)' }}>
              Ein Trauring ist das Symbol schlechthin – für Vertrauen, Zusammenhalt und die
              Entscheidung, das Leben gemeinsam zu gestalten. Deshalb verdient er höchste
              Sorgfalt bei der Auswahl. Unser Trauringpartner{' '}
              <strong style={{ color: 'var(--kj-gold)' }}>Cilor</strong> steht seit Generationen
              für dieses Versprechen: Made in Germany, von Meisterhand, für Menschen, die
              wissen, was ihnen wichtig ist.
            </p>
            <p className="font-sans text-base leading-relaxed" style={{ color: 'var(--kj-muted)' }}>
              Bei KenJu Juwelier in Bielefeld nehmen wir uns die Zeit, die dieser Moment
              verdient. Kein Druck, kein Massengeschäft – sondern persönliche Beratung, mit
              Blick auf Ihre Geschichte und Ihren Stil.
            </p>
          </div>

          {/* Cilor Vorteile */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
            {cilorVorteile.map((v) => (
              <div
                key={v.title}
                className="p-7 flex flex-col gap-4 transition-all duration-300"
                style={{ background: 'var(--kj-card)', border: '1px solid var(--kj-border)' }}
              >
                <span className="text-3xl gold-text">{v.icon}</span>
                <h3 className="font-serif text-xl" style={{ color: 'var(--kj-text)' }}>{v.title}</h3>
                <p className="font-sans text-sm leading-relaxed" style={{ color: 'var(--kj-muted)' }}>{v.desc}</p>
              </div>
            ))}
          </div>

          {/* Materialien */}
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <p className="section-subtitle mb-4">Ihre Wahl</p>
              <h2 className="section-title mb-4">Materialien &amp; Legierungen</h2>
              <div className="divider-gold mx-auto" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {materialien.map((m) => (
                <div
                  key={m.name}
                  className="p-5 flex gap-4 items-start transition-all duration-300"
                  style={{ background: 'var(--kj-card)', border: '1px solid var(--kj-border)' }}
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full shrink-0 mt-2.5"
                    style={{ background: 'var(--kj-gold)' }}
                  />
                  <div>
                    <p className="font-serif text-lg gold-text mb-1">{m.name}</p>
                    <p className="font-sans text-sm" style={{ color: 'var(--kj-muted)' }}>{m.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Process Timeline ─────────────────────────────── */}
      <section className="py-28" style={{ backgroundColor: 'var(--kj-surface)', borderTop: '1px solid var(--kj-border)' }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="section-subtitle mb-4">Schritt für Schritt</p>
            <h2 className="section-title mb-4">Ihr Weg zum perfekten Trauring</h2>
            <div className="divider-gold mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-0 relative">
            {/* Connecting line on desktop */}
            <div
              className="hidden md:block absolute top-8 left-[12.5%] right-[12.5%] h-px"
              style={{ background: 'linear-gradient(to right, transparent, var(--kj-gold), transparent)', opacity: 0.3 }}
            />

            {processSteps.map((s, i) => (
              <div key={s.step} className="relative text-center px-6 py-8">
                {/* Step number */}
                <div
                  className="inline-flex items-center justify-center w-16 h-16 mb-6 font-serif text-2xl font-light relative z-10"
                  style={{
                    border: '1px solid var(--kj-gold)',
                    color: 'var(--kj-gold)',
                    background: 'var(--kj-surface)',
                  }}
                >
                  {s.step}
                </div>
                <h4 className="font-serif text-xl mb-3" style={{ color: 'var(--kj-text)' }}>
                  {s.title}
                </h4>
                <p className="font-sans text-sm leading-relaxed" style={{ color: 'var(--kj-muted)' }}>
                  {s.desc}
                </p>
                {/* Mobile connector */}
                {i < processSteps.length - 1 && (
                  <div
                    className="md:hidden w-px h-8 mx-auto mt-6"
                    style={{ background: 'linear-gradient(to bottom, var(--kj-gold), transparent)', opacity: 0.4 }}
                  />
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="#termin" className="btn-gold">Trauringberatung buchen</Link>
          </div>
        </div>
      </section>

      {/* ── Appointment ──────────────────────────────────── */}
      <section className="py-32" style={{ backgroundColor: 'var(--kj-bg)' }} id="termin">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="section-subtitle mb-4">Ihr besonderer Moment</p>
            <h2 className="section-title mb-4">Trauring-Beratung buchen</h2>
            <div className="divider-gold mx-auto mb-6" />
            <p className="font-sans text-base" style={{ color: 'var(--kj-muted)' }}>
              Kostenlose und unverbindliche Beratung in unserem Atelier in Bielefeld.<br />
              Wir nehmen uns die Zeit, die Ihr Versprechen verdient.
            </p>
          </div>
          <div
            className="p-8 md:p-12"
            style={{ background: 'var(--kj-card)', border: '1px solid var(--kj-border)' }}
          >
            <AppointmentForm />
          </div>
        </div>
      </section>
    </>
  );
}
