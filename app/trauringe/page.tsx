import type { Metadata } from 'next';
import Link from 'next/link';
import CategoryHero from '@/components/CategoryHero';
import AppointmentForm from '@/components/AppointmentForm';

export const metadata: Metadata = {
  title: 'Trauringe – Cilor Trauringspezialisten | KenJu Juwelier Bielefeld',
  description: 'Trauringe und Eheringe von Cilor bei KenJu Juwelier Bielefeld. Made in Germany, individuelle Anfertigung, höchste Handarbeit. Ihr persönlicher Trauring nach Maß.',
  keywords: ['Trauringe', 'Eheringe', 'Cilor Trauringe', 'Trauringe Made in Germany', 'Trauringberatung Bielefeld', 'individuelle Trauringe'],
  alternates: { canonical: 'https://kenju-juwelier.de/trauringe' },
};

const cilorVorteile = [
  { icon: '◈', title: 'Made in Germany', desc: 'Cilor Trauringe werden ausschließlich in Deutschland gefertigt – von Meisterhand, mit höchsten Qualitätsstandards und unter fairen Arbeitsbedingungen.' },
  { icon: '⋆', title: 'Echte Handarbeit', desc: 'Jeder Ring ist ein Unikat. Erfahrene Goldschmiede fertigen Ihre Trauringe von Hand – mit der Sorgfalt und Liebe zum Detail, die dieser besondere Moment verdient.' },
  { icon: '◯', title: 'Jahrzehntelange Tradition', desc: 'Cilor steht seit Generationen für Trauringkultur in Deutschland. Diese Tradition fließt in jeden einzelnen Ring – als Versprechen von Beständigkeit.' },
  { icon: '⬡', title: 'Individuelle Anfertigung', desc: 'Ihr Trauring entsteht genau nach Ihren Vorstellungen: Legierung, Oberfläche, Breite, Gravur und Stein – alles individuell wählbar nach Ihrem Wunsch.' },
];

const materialien = [
  { name: '585 Gelbgold', desc: 'Der Klassiker – warmer Goldton, zeitlos und traditionell.' },
  { name: '585 Weißgold', desc: 'Elegant und modern, rhodiniert für bleibenden Glanz.' },
  { name: '585 Roségold', desc: 'Romantisch und einzigartig – zarter Rosaton für besondere Momente.' },
  { name: '950 Platin', desc: 'Das edelste Metall – selten, dauerhaft, unverwechselbar.' },
  { name: '750 Gold', desc: '18 Karat – maximale Reinheit für höchste Ansprüche.' },
  { name: 'Bicolor', desc: 'Gelb- und Weißgold kombiniert – zwei Töne, ein Ring.' },
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

      {/* Cilor Intro */}
      <section className="py-24 bg-kenju-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="section-subtitle mb-3">Unser Trauringpartner</p>
            <h2 className="section-title">Cilor – Trauringe mit Tradition</h2>
            <div className="divider-gold mx-auto mt-4 mb-8" />
            <p className="font-sans text-kenju-muted max-w-2xl mx-auto leading-relaxed">
              Cilor ist einer der renommiertesten deutschen Trauringhersteller – bekannt für kompromisslose
              Qualität, echte Handarbeit und die Überzeugung, dass jeder Trauring ein Unikat sein sollte.
              <strong className="text-kenju-gold"> Made in Germany</strong> ist dabei kein Marketing, sondern Versprechen.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {cilorVorteile.map((v) => (
              <div key={v.title} className="card-dark p-6 flex flex-col gap-4">
                <span className="text-3xl gold-text">{v.icon}</span>
                <h3 className="font-serif text-xl text-kenju-cream">{v.title}</h3>
                <p className="font-sans text-xs text-kenju-muted leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>

          {/* Materialien */}
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <p className="section-subtitle mb-3">Ihre Wahl</p>
              <h2 className="section-title">Materialien & Legierungen</h2>
              <div className="divider-gold mx-auto mt-4" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
              {materialien.map((m) => (
                <div key={m.name} className="card-dark p-5 flex gap-4 items-start">
                  <span className="w-1.5 h-1.5 rounded-full bg-kenju-gold shrink-0 mt-2" />
                  <div>
                    <p className="font-serif text-lg gold-text mb-1">{m.name}</p>
                    <p className="font-sans text-xs text-kenju-muted">{m.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Process */}
            <div className="bg-kenju-navy border border-kenju-border p-8 md:p-12">
              <h3 className="font-serif text-2xl text-kenju-cream mb-6 text-center">Ihr Weg zum perfekten Trauring</h3>
              <div className="divider-gold mx-auto mb-8" />
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {[
                  { step: '01', title: 'Beratungstermin', desc: 'Kommen Sie zu uns ins Atelier – wir nehmen uns Zeit und zeigen Ihnen die gesamte Cilor-Kollektion.' },
                  { step: '02', title: 'Individuelle Gestaltung', desc: 'Wählen Sie Material, Breite, Oberfläche, Gravur und optionale Steine nach Ihrem Wunsch.' },
                  { step: '03', title: 'Handgefertigte Produktion', desc: 'Cilor fertigt Ihren Trauring in Deutschland von Hand – mit größter Sorgfalt und Präzision.' },
                  { step: '04', title: 'Übergabe', desc: 'Wir übergeben Ihnen Ihr persönliches Versprechen – in einer stilvollen Verpackung, bereit für Ihren großen Tag.' },
                ].map((s) => (
                  <div key={s.step} className="text-center">
                    <span className="font-serif text-5xl gold-text opacity-30 block mb-3">{s.step}</span>
                    <h4 className="font-serif text-lg text-kenju-cream mb-2">{s.title}</h4>
                    <p className="font-sans text-xs text-kenju-muted leading-relaxed">{s.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link href="#termin" className="btn-gold">Trauringberatung buchen</Link>
          </div>
        </div>
      </section>

      {/* Appointment */}
      <section className="py-24 bg-kenju-black" id="termin">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="section-subtitle mb-3">Ihr besonderer Moment</p>
            <h2 className="section-title mb-3">Trauring-Beratung buchen</h2>
            <div className="divider-gold mx-auto mb-4" />
            <p className="font-sans text-kenju-muted">Kostenlose und unverbindliche Beratung in unserem Atelier in Bielefeld – wir nehmen uns Zeit für Sie.</p>
          </div>
          <div className="card-dark p-8"><AppointmentForm /></div>
        </div>
      </section>
    </>
  );
}
