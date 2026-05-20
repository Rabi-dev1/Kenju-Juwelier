import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import AppointmentForm from '@/components/AppointmentForm';

export const metadata: Metadata = {
  title: 'Service – Schmuck & Uhrenreparaturen Bielefeld | KenJu Juwelier',
  description: 'Professionelle Schmuck- und Uhrenreparaturen bei KenJu Juwelier Bielefeld. Ringgrößenanpassung, Kettenverschlüsse, Batteriewechsel, Glaswechsel und mehr.',
  keywords: ['Schmuckreparatur Bielefeld', 'Uhrenreparatur Bielefeld', 'Ringgrößenanpassung', 'Batteriewechsel Uhr', 'Juwelier Service Bielefeld'],
  alternates: { canonical: 'https://kenju-juwelier.de/service' },
};

const schmuckServices = [
  { name: 'Ringgrößenanpassung',   desc: 'Wir passen Ihren Ring fachgerecht auf Ihre Wunschgröße an – egal ob weiten oder enger.' },
  { name: 'Kettenverschlüsse',     desc: 'Reparatur und Ersatz von Karabinerverschlüssen, Federringen und Kastenverschlüssen.' },
  { name: 'Lotarbeiten',           desc: 'Professionelles Verlöten gebrochener Ketten, Ringe oder anderer Schmuckstücke.' },
  { name: 'Steinbearbeitung',      desc: 'Neubesetzen verlorener Steine, Nachschliff und Politur von Brillanten und Edelsteinen.' },
  { name: 'Rhodinierung',          desc: 'Auffrischen von Weißgold durch Rhodinierung für dauerhaft brillanten Weißgoldglanz.' },
  { name: 'Politur & Reinigung',   desc: 'Professionelle Hochglanzpolitur und Ultraschallreinigung für neuen Schmuckglanz.' },
];

const uhrenServices = [
  { name: 'Batteriewechsel',       desc: 'Schneller und sicherer Batteriewechsel – wasserdicht abgedichtet, sofort am gleichen Tag.' },
  { name: 'Glaswechsel',           desc: 'Ersatz von gekratzten oder zerbrochenen Uhrengläsern – Mineralglas und Saphirglas.' },
  { name: 'Armbandreparatur',      desc: 'Kürzen, Verlängern oder Austauschen von Metallbändern und Lederbändern.' },
  { name: 'Gehäusereinigung',      desc: 'Professionelle Reinigung und Politur von Uhrengehäusen und -bändern.' },
  { name: 'Drucküberprüfung',      desc: 'Wasserdichtigkeitstest und Neuabdichtung für wasserdichte Uhren.' },
  { name: 'Revision & Einstellung', desc: 'Gangüberprüfung und Grundreinigung des Uhrwerks bei mechanischen Uhren auf Anfrage.' },
];

export default function ServicePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[55vh] flex items-end pb-20 pt-36 overflow-hidden" style={{ background: '#08080F' }}>
        <div className="absolute inset-0">
          <Image
            src="/images/creolen.jpg"
            alt="Schmuck & Uhrenreparatur KenJu Juwelier Bielefeld"
            fill
            sizes="100vw"
            className="object-cover"
            priority
            style={{ opacity: 0.28 }}
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(8,8,15,1) 0%, rgba(8,8,15,0.6) 50%, rgba(8,8,15,0.3) 100%)' }} />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="section-subtitle mb-4">Meisterbetrieb</p>
          <h1 className="font-serif text-5xl md:text-7xl font-light mb-6 text-white">
            <span className="gold-text">Schmuck</span> &amp; Uhren<br className="hidden sm:block" />reparaturen
          </h1>
          <div className="divider-gold mb-6" />
          <p className="font-sans text-white/60 max-w-xl leading-relaxed">
            Zeigt ein Lieblingsstück Gebrauchsspuren? Wir bringen es zurück in Bestform –
            fachgerecht, transparent und mit viel Erfahrung.
          </p>
        </div>
      </section>

      {/* Intro section */}
      <section className="py-24" style={{ backgroundColor: 'var(--kj-bg)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6">
            <h2 className="font-serif text-3xl md:text-4xl font-light mb-5" style={{ color: 'var(--kj-text)' }}>
              Schmuck- &amp; Uhrenreparaturen in Bielefeld
            </h2>
            <p className="font-sans text-sm max-w-3xl mx-auto leading-relaxed mb-3" style={{ color: 'var(--kj-muted)' }}>
              Zeigt ein Lieblingsstück kleine Gebrauchsspuren oder größere Schäden, ist es Zeit für eine fachkundige
              Aufarbeitung. Bei <strong style={{ color: 'var(--kj-text)' }}>KenJu Juwelier</strong> in Bielefeld kümmern
              wir uns zuverlässig um die <strong style={{ color: 'var(--kj-text)' }}>Reparatur und Pflege</strong> von
              Schmuck und Uhren, damit Sie Ihre Stücke wieder mit Freude tragen können.
            </p>
            <p className="font-sans text-sm max-w-2xl mx-auto leading-relaxed" style={{ color: 'var(--kj-muted)' }}>
              Wir prüfen den Zustand sorgfältig, beraten Sie transparent und finden die passende Lösung –
              schnell, fachgerecht und mit viel Erfahrung.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link href="#termin-service" className="btn-dark">Jetzt kontaktieren</Link>
            <a href="tel:+4917663284312" className="btn-outline-gold">Jetzt anrufen</a>
          </div>
        </div>
      </section>

      {/* Schmuck Reparaturen – image + text */}
      <section className="py-8 pb-24" style={{ backgroundColor: 'var(--kj-bg)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 overflow-hidden" style={{ border: '1px solid var(--kj-border)' }}>
            {/* Image */}
            <div className="relative min-h-[320px] lg:min-h-[480px]" style={{ background: 'var(--kj-surface)' }}>
              <Image
                src="/images/ringe.jpg"
                alt="Schmuckreparatur bei KenJu Juwelier Bielefeld"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                style={{ opacity: 0.75 }}
              />
              <div className="absolute bottom-0 left-0 right-0 p-6" style={{ background: 'linear-gradient(to top, rgba(8,8,15,0.85), transparent)' }}>
                <p className="font-serif text-lg text-white">Präzise Handarbeit</p>
                <p className="font-sans text-xs text-white/60 mt-1">Zertifizierter Meisterbetrieb · Bielefeld</p>
              </div>
            </div>
            {/* Text */}
            <div className="p-8 lg:p-12 flex flex-col justify-center" style={{ background: 'var(--kj-card)' }}>
              <p className="section-subtitle mb-3">Schmuck</p>
              <h2 className="font-serif text-3xl mb-4" style={{ color: 'var(--kj-text)' }}>
                Zuverlässiger Service für Ihre Lieblingsstücke
              </h2>
              <div className="divider-gold mb-6" />
              <p className="font-sans text-sm leading-relaxed mb-6" style={{ color: 'var(--kj-muted)' }}>
                Unsere Werkstatt übernimmt unter anderem Reparaturen,{' '}
                <strong style={{ color: 'var(--kj-text)' }}>Ringgrößenanpassungen</strong>,
                das Ersetzen von Kettenverschlüssen sowie das Neubesetzen von Steinen. So sind Ihre
                Schmuckstücke bei uns in den besten Händen.
              </p>
              <div className="grid grid-cols-1 gap-3 mb-8">
                {schmuckServices.map((s) => (
                  <div key={s.name} className="flex gap-3 py-3" style={{ borderBottom: '1px solid var(--kj-border)' }}>
                    <span className="font-serif text-base mt-0.5 shrink-0" style={{ color: 'var(--kj-gold)' }}>✓</span>
                    <div>
                      <p className="font-sans text-sm font-medium" style={{ color: 'var(--kj-text)' }}>{s.name}</p>
                      <p className="font-sans text-xs mt-0.5" style={{ color: 'var(--kj-muted)' }}>{s.desc}</p>
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

      {/* Uhren Reparaturen – image + text (reversed) */}
      <section className="py-8 pb-24" style={{ backgroundColor: 'var(--kj-surface)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 overflow-hidden" style={{ border: '1px solid var(--kj-border)' }}>
            {/* Text */}
            <div className="p-8 lg:p-12 flex flex-col justify-center lg:order-1" style={{ background: 'var(--kj-card)' }}>
              <p className="section-subtitle mb-3">Uhren</p>
              <h2 className="font-serif text-3xl mb-4" style={{ color: 'var(--kj-text)' }}>
                Ihr Uhrmacher in Bielefeld
              </h2>
              <div className="divider-gold mb-6" />
              <p className="font-sans text-sm leading-relaxed mb-6" style={{ color: 'var(--kj-muted)' }}>
                Ob{' '}
                <strong style={{ color: 'var(--kj-text)' }}>Batteriewechsel</strong>,{' '}
                <strong style={{ color: 'var(--kj-text)' }}>Glaswechsel</strong> oder Armbandreparatur –
                unser Uhrmachermeister kümmert sich mit Präzision und Sorgfalt um Ihre Uhr.
                Auch Markenuhren profitieren von unserem Know-how und der präzisen Arbeit.
              </p>
              <div className="grid grid-cols-1 gap-3 mb-8">
                {uhrenServices.map((s) => (
                  <div key={s.name} className="flex gap-3 py-3" style={{ borderBottom: '1px solid var(--kj-border)' }}>
                    <span className="font-serif text-base mt-0.5 shrink-0" style={{ color: 'var(--kj-gold)' }}>✓</span>
                    <div>
                      <p className="font-sans text-sm font-medium" style={{ color: 'var(--kj-text)' }}>{s.name}</p>
                      <p className="font-sans text-xs mt-0.5" style={{ color: 'var(--kj-muted)' }}>{s.desc}</p>
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
            <div className="relative min-h-[320px] lg:min-h-[480px] lg:order-2" style={{ background: 'var(--kj-surface)' }}>
              <Image
                src="/images/creolen.jpg"
                alt="Uhrenreparatur bei KenJu Juwelier Bielefeld"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                style={{ opacity: 0.65 }}
              />
              <div className="absolute bottom-0 left-0 right-0 p-6" style={{ background: 'linear-gradient(to top, rgba(8,8,15,0.85), transparent)' }}>
                <p className="font-serif text-lg text-white">Uhrmacherkunst mit Präzision</p>
                <p className="font-sans text-xs text-white/60 mt-1">Schnell · Zuverlässig · Transparent</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20" style={{ backgroundColor: 'var(--kj-bg)' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="section-subtitle mb-4">Kommen Sie vorbei</p>
          <h2 className="font-serif text-4xl mb-4" style={{ color: 'var(--kj-text)' }}>
            Ihr neues Lieblingsstück wartet.
          </h2>
          <p className="font-sans text-sm max-w-lg mx-auto mb-8 leading-relaxed" style={{ color: 'var(--kj-muted)' }}>
            In der Bahnhofstraße 28 in Bielefeld erwartet Sie persönliche Beratung und eine stilvolle
            Auswahl an Schmuck, Uhren und Services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="#termin-service" className="btn-dark">Termin vereinbaren</Link>
            <a href="tel:+4917663284312" className="btn-outline-gold">Jetzt anrufen</a>
          </div>
        </div>
      </section>

      {/* Appointment */}
      <section className="py-24" style={{ backgroundColor: 'var(--kj-surface)' }} id="termin-service">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="section-subtitle mb-3">Reparatur anfragen</p>
            <h2 className="section-title mb-3">Service-Termin buchen</h2>
            <div className="divider-gold mx-auto mb-4" />
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
