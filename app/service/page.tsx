import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import AppointmentForm from '@/components/AppointmentForm';

export const metadata: Metadata = {
  title: 'Service – Schmuck & Uhrenreparaturen Bielefeld | KenJu Juwelier',
  description: 'Professionelle Schmuck- und Uhrenreparaturen bei KenJu Juwelier Bielefeld. Ringgrößenanpassung, Kettenverschlüsse, Batteriewechsel, Glaswechsel, Gravuren und mehr.',
  keywords: ['Schmuckreparatur Bielefeld', 'Uhrenreparatur Bielefeld', 'Ringgrößenanpassung', 'Batteriewechsel Uhr', 'Gravur Bielefeld', 'Juwelier Service Bielefeld'],
  alternates: { canonical: 'https://kenju-juwelier.de/service' },
};

const schmuckServices = [
  { name: 'Ringgrößenanpassung',   desc: 'Wir passen Ihren Ring fachgerecht auf Ihre Wunschgröße an – egal ob weiten oder enger. Schnell und präzise.' },
  { name: 'Kettenverschlüsse',     desc: 'Reparatur und Ersatz von Karabinerverschlüssen, Federringen und Kastenverschlüssen aller Art.' },
  { name: 'Lotarbeiten',           desc: 'Professionelles Verlöten gebrochener Ketten, Ringe oder anderer Schmuckstücke – unsichtbar und dauerhaft.' },
  { name: 'Steinbearbeitung',      desc: 'Neubesetzen verlorener Steine, Nachschliff und Politur von Brillanten, Edelsteinen und Zirkonias.' },
  { name: 'Rhodinierung',          desc: 'Auffrischen von Weißgoldschmuck durch Rhodinierung – für dauerhaft brillanten, silbrig-weißen Glanz.' },
  { name: 'Politur & Reinigung',   desc: 'Professionelle Hochglanzpolitur und Ultraschallreinigung – Ihr Schmuck erstrahlt wieder wie neu.' },
  { name: 'Gravuren',              desc: 'Individuelle Gravuren mit Datum, Namen oder Initialen – in Ringe, Armreifen und Anhänger.' },
  { name: 'Umarbeitung',           desc: 'Wir arbeiten alten Schmuck zu neuen Stücken um – geben Erbstücken ein modernes zweites Leben.' },
];

const uhrenServices = [
  { name: 'Batteriewechsel',        desc: 'Schneller und sicherer Batteriewechsel – wasserdicht abgedichtet, sofort am gleichen Tag fertig.' },
  { name: 'Glaswechsel',            desc: 'Ersatz von gekratzten oder zerbrochenen Uhrengläsern – Mineralglas und Saphirglas für alle Modelle.' },
  { name: 'Armbandreparatur',       desc: 'Kürzen, Verlängern oder Austauschen von Metallbändern, Lederbändern und Kunststoffarmbändern.' },
  { name: 'Gehäusereinigung',       desc: 'Professionelle Reinigung und Politur von Uhrengehäusen und -bändern für frischen Glanz.' },
  { name: 'Drucküberprüfung',       desc: 'Wasserdichtigkeitstest und Neuabdichtung für wasserdichte Uhren – zuverlässiger Schutz.' },
  { name: 'Gangüberprüfung',        desc: 'Überprüfung der Ganggenauigkeit bei Quarz- und mechanischen Uhren – Einstellung auf Anfrage.' },
];

export default function ServicePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-end pb-24 pt-36 overflow-hidden" style={{ background: '#08080F' }}>
        <div className="absolute inset-0">
          <Image
            src="/images/creolen.jpg"
            alt="Schmuck & Uhrenreparatur KenJu Juwelier Bielefeld"
            fill
            sizes="100vw"
            className="object-cover"
            priority
            style={{ opacity: 0.25 }}
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(8,8,15,1) 0%, rgba(8,8,15,0.6) 50%, rgba(8,8,15,0.3) 100%)' }} />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="section-subtitle mb-5">Meisterbetrieb · Bielefeld</p>
          <h1 className="font-serif text-5xl md:text-7xl font-light mb-6 text-white">
            <span className="gold-text">Schmuck</span> &amp; Uhren<br className="hidden sm:block" />reparaturen
          </h1>
          <div className="divider-gold mb-6" />
          <p className="font-sans text-white/55 max-w-xl leading-relaxed text-sm">
            Zeigt ein Lieblingsstück Gebrauchsspuren? Wir bringen es zurück in Bestform –
            fachgerecht, schnell und mit viel Erfahrung.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-32" style={{ backgroundColor: 'var(--kj-bg)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <p className="section-subtitle mb-5">Ihr Servicebetrieb</p>
              <h2 className="font-serif text-4xl md:text-5xl font-light leading-tight mb-6" style={{ color: 'var(--kj-text)' }}>
                Reparatur &amp; Pflege –<br />mit Liebe zum Detail
              </h2>
              <div className="divider-gold mb-8" />
              <p className="font-sans text-sm max-w-xl leading-relaxed mb-5" style={{ color: 'var(--kj-muted)' }}>
                Zeigt ein Lieblingsstück kleine Gebrauchsspuren oder größere Schäden, ist es Zeit für eine
                fachkundige Aufarbeitung. Bei <strong style={{ color: 'var(--kj-text)' }}>KenJu Juwelier</strong> in
                Bielefeld kümmern wir uns zuverlässig um die{' '}
                <strong style={{ color: 'var(--kj-text)' }}>Reparatur und Pflege</strong> von Schmuck und Uhren,
                damit Sie Ihre Stücke wieder mit Freude tragen können.
              </p>
              <p className="font-sans text-sm max-w-xl leading-relaxed mb-10" style={{ color: 'var(--kj-muted)' }}>
                Wir prüfen den Zustand sorgfältig, beraten Sie transparent und finden die passende Lösung –
                schnell, fachgerecht und mit viel Erfahrung. Ob Batteriewechsel, Ringgrößenanpassung oder
                aufwendige Gravur – alles aus einer Hand in Bielefeld.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="#termin-service" className="btn-dark">Jetzt kontaktieren</Link>
                <a href="tel:+4917663284312" className="btn-outline-gold">Jetzt anrufen</a>
              </div>
            </div>
            {/* Stats column */}
            <div className="grid grid-cols-2 gap-5">
              {[
                { val: '20+', label: 'Jahre Erfahrung', desc: 'Im Handwerk tätig' },
                { val: 'Sofort', label: 'Batteriewechsel', desc: 'Noch am selben Tag' },
                { val: 'Fair', label: 'Preisgestaltung', desc: 'Transparent & ehrlich' },
                { val: '100%', label: 'Qualitätsarbeit', desc: 'Zertifizierter Betrieb' },
              ].map((s) => (
                <div
                  key={s.label}
                  className="p-6 text-center"
                  style={{ background: 'var(--kj-card)', border: '1px solid var(--kj-border)' }}
                >
                  <p className="font-serif text-3xl gold-text mb-1">{s.val}</p>
                  <p className="font-sans text-xs font-medium mb-1 tracking-wider" style={{ color: 'var(--kj-text)' }}>{s.label}</p>
                  <p className="font-sans text-xs" style={{ color: 'var(--kj-muted)' }}>{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Schmuck Reparaturen */}
      <section className="py-12 pb-28" style={{ backgroundColor: 'var(--kj-surface)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 overflow-hidden" style={{ border: '1px solid var(--kj-border)' }}>
            {/* Image */}
            <div className="relative min-h-[320px] lg:min-h-[520px]" style={{ background: 'var(--kj-surface)' }}>
              <Image
                src="/images/ringe.jpg"
                alt="Schmuckreparatur bei KenJu Juwelier Bielefeld"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                style={{ opacity: 0.78 }}
              />
              <div className="img-caption">
                <p className="font-serif text-lg text-white">Präzise Handarbeit</p>
                <p className="font-sans text-xs text-white/55 mt-1">Zertifizierter Meisterbetrieb · Bielefeld</p>
              </div>
            </div>
            {/* Text */}
            <div className="p-8 lg:p-14 flex flex-col justify-center" style={{ background: 'var(--kj-card)' }}>
              <p className="section-subtitle mb-4">Schmuckreparaturen</p>
              <h2 className="font-serif text-3xl mb-5" style={{ color: 'var(--kj-text)' }}>
                Zuverlässiger Service<br />für Ihre Lieblingsstücke
              </h2>
              <div className="divider-gold mb-7" />
              <p className="font-sans text-sm leading-relaxed mb-7" style={{ color: 'var(--kj-muted)' }}>
                Unsere Werkstatt übernimmt Reparaturen aller Art –{' '}
                <strong style={{ color: 'var(--kj-text)' }}>Ringgrößenanpassungen</strong>,
                das Ersetzen von Kettenverschlüssen, Neufassen von Steinen, individuelle Gravuren
                und die Umarbeitung alter Schmuckstücke zu etwas Neuem. So sind Ihre Stücke bei uns
                in den besten Händen.
              </p>
              <div className="grid grid-cols-1 gap-0 mb-8">
                {schmuckServices.map((s) => (
                  <div key={s.name} className="flex gap-4 py-3.5" style={{ borderBottom: '1px solid var(--kj-border)' }}>
                    <span className="font-serif text-base mt-0.5 shrink-0" style={{ color: 'var(--kj-gold)' }}>✓</span>
                    <div>
                      <p className="font-sans text-sm font-medium" style={{ color: 'var(--kj-text)' }}>{s.name}</p>
                      <p className="font-sans text-xs mt-0.5 leading-snug" style={{ color: 'var(--kj-muted)' }}>{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="#termin-service" className="btn-dark">Jetzt kontaktieren</Link>
                <a href="tel:+4917663284312" className="btn-outline-gold">Jetzt anrufen</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Uhren Reparaturen */}
      <section className="py-12 pb-28" style={{ backgroundColor: 'var(--kj-bg)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 overflow-hidden" style={{ border: '1px solid var(--kj-border)' }}>
            {/* Text */}
            <div className="p-8 lg:p-14 flex flex-col justify-center lg:order-1" style={{ background: 'var(--kj-card)' }}>
              <p className="section-subtitle mb-4">Uhrenservice</p>
              <h2 className="font-serif text-3xl mb-5" style={{ color: 'var(--kj-text)' }}>
                Ihr Uhrmacher<br />in Bielefeld
              </h2>
              <div className="divider-gold mb-7" />
              <p className="font-sans text-sm leading-relaxed mb-7" style={{ color: 'var(--kj-muted)' }}>
                Ob{' '}
                <strong style={{ color: 'var(--kj-text)' }}>Batteriewechsel</strong>,{' '}
                <strong style={{ color: 'var(--kj-text)' }}>Glaswechsel</strong> oder Armbandreparatur –
                unser Uhrmachermeister kümmert sich mit Präzision und Sorgfalt um Ihre Uhr.
                Auch Markenuhren wie Tommy Hilfiger, Hugo Boss, Police und Festina profitieren
                von unserer Expertise und präzisen Handarbeit.
              </p>
              <div className="grid grid-cols-1 gap-0 mb-8">
                {uhrenServices.map((s) => (
                  <div key={s.name} className="flex gap-4 py-3.5" style={{ borderBottom: '1px solid var(--kj-border)' }}>
                    <span className="font-serif text-base mt-0.5 shrink-0" style={{ color: 'var(--kj-gold)' }}>✓</span>
                    <div>
                      <p className="font-sans text-sm font-medium" style={{ color: 'var(--kj-text)' }}>{s.name}</p>
                      <p className="font-sans text-xs mt-0.5 leading-snug" style={{ color: 'var(--kj-muted)' }}>{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="#termin-service" className="btn-dark">Jetzt kontaktieren</Link>
                <a href="tel:+4917663284312" className="btn-outline-gold">Jetzt anrufen</a>
              </div>
            </div>
            {/* Image */}
            <div className="relative min-h-[320px] lg:min-h-[520px] lg:order-2" style={{ background: 'var(--kj-surface)' }}>
              <Image
                src="/images/creolen.jpg"
                alt="Uhrenreparatur bei KenJu Juwelier Bielefeld"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                style={{ opacity: 0.68 }}
              />
              <div className="img-caption">
                <p className="font-serif text-lg text-white">Uhrmacherkunst mit Präzision</p>
                <p className="font-sans text-xs text-white/55 mt-1">Schnell · Zuverlässig · Transparent</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-28" style={{ backgroundColor: 'var(--kj-surface)', borderTop: '1px solid var(--kj-border)', borderBottom: '1px solid var(--kj-border)' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="section-subtitle mb-5">Kommen Sie vorbei</p>
          <h2 className="font-serif text-4xl md:text-5xl font-light mb-5" style={{ color: 'var(--kj-text)' }}>
            Ihr Lieblingsstück<br />verdient das Beste.
          </h2>
          <div className="divider-gold mx-auto mb-8" />
          <p className="font-sans text-sm max-w-lg mx-auto mb-10 leading-relaxed" style={{ color: 'var(--kj-muted)' }}>
            In der Bahnhofstraße 28 in Bielefeld erwartet Sie persönliche Beratung, fachkundige
            Reparatur und ein stilvolles Angebot an Schmuck, Uhren und Services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="#termin-service" className="btn-dark">Termin vereinbaren</Link>
            <a href="tel:+4917663284312" className="btn-outline-gold">Jetzt anrufen</a>
          </div>
        </div>
      </section>

      {/* Appointment */}
      <section className="py-28" style={{ backgroundColor: 'var(--kj-bg)' }} id="termin-service">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="section-subtitle mb-3">Reparatur anfragen</p>
            <h2 className="section-title mb-5">Service-Termin buchen</h2>
            <div className="divider-gold mx-auto mb-5" />
            <p className="font-sans text-sm" style={{ color: 'var(--kj-muted)' }}>
              Senden Sie uns eine Anfrage – wir melden uns innerhalb von 24 Stunden bei Ihnen.
            </p>
          </div>
          <div className="p-8" style={{ background: 'var(--kj-card)', border: '1px solid var(--kj-border)' }}>
            <AppointmentForm />
          </div>
        </div>
      </section>
    </>
  );
}
