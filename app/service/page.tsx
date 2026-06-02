import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import AppointmentForm from '@/components/AppointmentForm';

export const metadata: Metadata = {
  title: 'Schmuck- & Uhrenreparatur Bielefeld | Meisterbetrieb | KenJu Juwelier',
  description: 'Professioneller Schmuck- und Uhrenservice in Bielefeld. Ringgrößenanpassung, Gravuren, Batteriewechsel, Glaswechsel und mehr – zuverlässig beim Meisterbetrieb KenJu Juwelier.',
  keywords: ['Schmuckreparatur Bielefeld', 'Uhrenreparatur Bielefeld', 'Ringgrößenanpassung Bielefeld', 'Batteriewechsel Uhr Bielefeld', 'Gravur Bielefeld', 'Juwelier Service Bielefeld', 'Uhrmacher Bielefeld'],
  alternates: { canonical: 'https://kenju-juwelier.de/service' },
};

const trustBoxes = [
  { val: '20+',  title: 'Jahre Erfahrung',               sub: 'Meisterbetrieb Bielefeld' },
  { val: '◈',    title: 'Zertifizierte Handwerksqualität', sub: 'Geprüfte Fachkräfte' },
  { val: 'Sofort', title: 'Batteriewechsel',              sub: 'Oft am selben Tag fertig' },
  { val: '⬡',    title: 'Fachwerkstatt',                 sub: 'Für Schmuck & Uhren' },
];

const processSteps = [
  { nr: '01', title: 'Schmuck oder Uhr vorbeibringen',  desc: 'Kommen Sie einfach in unser Atelier – Bahnhofstraße 28, Bielefeld.' },
  { nr: '02', title: 'Kostenlose Einschätzung',          desc: 'Wir prüfen den Zustand und beraten Sie transparent und unverbindlich.' },
  { nr: '03', title: 'Transparente Preisangabe',         desc: 'Sie erhalten ein klares Angebot – keine versteckten Kosten.' },
  { nr: '04', title: 'Fachgerechte Reparatur',           desc: 'Unsere Experten arbeiten mit Präzision und Sorgfalt.' },
  { nr: '05', title: 'Abholen und wieder tragen',        desc: 'Ihr Stück erstrahlt in neuem Glanz – fertig zur Abholung.' },
];

const schmuckServices = [
  { name: 'Ringgrößenanpassung',              desc: 'Fachgerecht weiten oder enger machen – schnell und präzise.' },
  { name: 'Kettenreparaturen',                desc: 'Verschlüsse, Glieder, Lotarbeiten – sauber und dauerhaft.' },
  { name: 'Steinersatz',                      desc: 'Verlorene Steine neu setzen – Brillanten, Edelsteine, Zirkonia.' },
  { name: 'Gravuren',                         desc: 'Namen, Daten, Initialen – individuell in Ringe, Anhänger & Armreifen.' },
  { name: 'Rhodinierung',                     desc: 'Weißgold auffrischen – brillanter, silbrig-weißer Glanz.' },
  { name: 'Politur & Reinigung',              desc: 'Hochglanzpolitur und Ultraschallreinigung – wie neu.' },
  { name: 'Umarbeitung alter Schmuckstücke',  desc: 'Erbstücken ein modernes zweites Leben geben.' },
];

const uhrenServices = [
  { name: 'Batteriewechsel',              desc: 'Sicher, wasserdicht abgedichtet – oft noch am selben Tag.' },
  { name: 'Glaswechsel',                  desc: 'Mineral- und Saphirglas für alle Modelle.' },
  { name: 'Armbandservice',               desc: 'Kürzen, verlängern oder austauschen – Metall, Leder, Kunststoff.' },
  { name: 'Druckprüfung & Abdichtung',    desc: 'Wasserdichtigkeitstest und Neuabdichtung.' },
  { name: 'Gehäusereinigung',             desc: 'Professionelle Reinigung und Politur – frischer Glanz.' },
  { name: 'Gangkontrolle',                desc: 'Ganggenauigkeit prüfen bei Quarz- und Automatik-Uhren.' },
  { name: 'Wasserdichtigkeit prüfen',     desc: 'Zuverlässiger Schutz nach Norm.' },
  { name: 'Kürzen von Metallarmbändern',  desc: 'Perfekter Sitz am Handgelenk.' },
];

export default function ServicePage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────── */}
      <section
        className="relative flex items-end overflow-hidden"
        style={{ background: '#08080F', minHeight: '65vh', paddingTop: '9rem', paddingBottom: '5rem' }}
      >
        <div className="absolute inset-0">
          <Image
            src="/images/service-hero.jpg"
            alt="Uhrenservice und Schmuckreparatur bei KenJu Juwelier Bielefeld – Meisterbetrieb"
            fill sizes="100vw"
            className="object-cover"
            style={{ objectPosition: 'center 35%', opacity: 0.5 }}
            priority
          />
          <div
            className="absolute inset-0"
            style={{ background: 'linear-gradient(to top, rgba(8,8,15,0.97) 0%, rgba(8,8,15,0.55) 55%, rgba(8,8,15,0.3) 100%)' }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 font-sans text-xs mb-8 tracking-widest uppercase" style={{ color: 'rgba(245,240,232,0.4)' }}>
            <Link href="/" style={{ color: 'rgba(245,240,232,0.4)' }} className="hover:opacity-80 transition-opacity">Startseite</Link>
            <span style={{ opacity: 0.4 }}>›</span>
            <span style={{ color: 'var(--kj-gold)' }}>Service</span>
          </nav>

          <p className="section-subtitle mb-5">Meisterbetrieb · Bielefeld</p>

          <h1 className="font-serif font-light text-white mb-6" style={{ fontSize: 'clamp(2rem, 5.5vw, 5rem)', lineHeight: 1.08 }}>
            Schmuck- &amp; Uhrenservice<br className="hidden sm:block" /> vom Fachbetrieb
          </h1>
          <div className="divider-gold mb-6" />
          <p className="font-sans max-w-xl leading-relaxed mb-8" style={{ color: 'rgba(245,240,232,0.58)', fontSize: '0.95rem' }}>
            Reparaturen, Aufarbeitung, Gravuren und Uhrmacher-Service – präzise, zuverlässig und mit über 20 Jahren Erfahrung.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 mb-8">
            <Link href="#termin-service" className="btn-gold" style={{ fontSize: '0.75rem', letterSpacing: '0.14em', padding: '0.9rem 2rem' }}>
              Termin vereinbaren
            </Link>
            <a href="tel:+4917663284312" className="btn-outline-gold" style={{ fontSize: '0.75rem', letterSpacing: '0.14em', padding: '0.9rem 2rem', borderColor: 'rgba(255,255,255,0.28)', color: 'rgba(255,255,255,0.78)' }}>
              Jetzt anrufen
            </a>
          </div>

          {/* Trust-Leiste */}
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            {['Meisterbetrieb', 'Über 20 Jahre Erfahrung', 'Faire Preise', 'Persönliche Beratung'].map((item) => (
              <span key={item} className="font-sans text-xs flex items-center gap-1.5" style={{ color: 'rgba(245,240,232,0.5)' }}>
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
            <p className="section-subtitle mb-4">Schnell & Unkompliziert</p>
            <h2 className="section-title mb-4">So einfach funktioniert unser Service</h2>
            <div className="divider-gold mx-auto" />
          </div>

          <div className="relative">
            {/* Vertikale Linie auf Desktop */}
            <div className="hidden lg:block absolute left-[1.75rem] top-0 bottom-0 w-px" style={{ background: 'linear-gradient(to bottom, var(--kj-gold), transparent)', opacity: 0.2 }} />

            <div className="space-y-0">
              {processSteps.map((s, i) => (
                <div key={s.nr} className="flex gap-6 pb-8" style={i < processSteps.length - 1 ? { borderLeft: '1px solid var(--kj-border)', paddingLeft: '2rem', marginLeft: '1.75rem' } : { paddingLeft: '2rem', marginLeft: '1.75rem' }}>
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

          <div className="text-center mt-10">
            <Link href="#termin-service" className="btn-gold">Jetzt Termin buchen</Link>
          </div>
        </div>
      </section>

      {/* ── SCHMUCK-SERVICES ─────────────────────────────── */}
      <section className="py-20" style={{ backgroundColor: 'var(--kj-surface)', borderTop: '1px solid var(--kj-border)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 overflow-hidden" style={{ border: '1px solid var(--kj-border)' }}>
            {/* Bild */}
            <div className="relative min-h-[280px] lg:min-h-0 overflow-hidden" style={{ background: 'var(--kj-bg)' }}>
              <Image
                src="/images/ringe.jpg"
                alt="Schmuckreparatur Bielefeld – Ringgrößenanpassung und Gravur bei KenJu Juwelier"
                fill sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover img-zoom"
                style={{ opacity: 0.82 }}
              />
              <div className="img-caption">
                <p className="font-serif text-lg text-white">Präzise Handarbeit</p>
                <p className="font-sans text-xs mt-1" style={{ color: 'rgba(255,255,255,0.5)' }}>Meisterbetrieb · Bielefeld</p>
              </div>
            </div>

            {/* Services */}
            <div className="p-8 lg:p-12 flex flex-col justify-center" style={{ background: 'var(--kj-card)' }}>
              <p className="section-subtitle mb-3">Schmuckreparaturen</p>
              <h2 className="font-serif text-2xl md:text-3xl font-light mb-4" style={{ color: 'var(--kj-text)' }}>
                Beliebte Schmuckreparaturen
              </h2>
              <div className="divider-gold mb-6" />
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
              <Link href="#termin-service" className="btn-dark mt-7 self-start">Termin vereinbaren</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── UHREN-SERVICES ───────────────────────────────── */}
      <section className="py-20" style={{ backgroundColor: 'var(--kj-bg)', borderTop: '1px solid var(--kj-border)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 overflow-hidden" style={{ border: '1px solid var(--kj-border)' }}>
            {/* Services */}
            <div className="p-8 lg:p-12 flex flex-col justify-center" style={{ background: 'var(--kj-card)' }}>
              <p className="section-subtitle mb-3">Uhrmacher-Service</p>
              <h2 className="font-serif text-2xl md:text-3xl font-light mb-4" style={{ color: 'var(--kj-text)' }}>
                Ihr Uhrmacher in Bielefeld
              </h2>
              <div className="divider-gold mb-6" />
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
              <Link href="#termin-service" className="btn-dark mt-7 self-start">Termin vereinbaren</Link>
            </div>

            {/* Bild */}
            <div className="relative min-h-[280px] lg:min-h-0 overflow-hidden" style={{ background: 'var(--kj-surface)' }}>
              <Image
                src="/images/uhrzeig.jpg"
                alt="Uhrmacher Bielefeld – Batteriewechsel und Uhrenreparatur bei KenJu Juwelier"
                fill sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover img-zoom"
                style={{ opacity: 0.82 }}
              />
              <div className="img-caption">
                <p className="font-serif text-lg text-white">Uhrmacherkunst mit Präzision</p>
                <p className="font-sans text-xs mt-1" style={{ color: 'rgba(255,255,255,0.5)' }}>Schnell · Zuverlässig · Transparent</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FORMULAR ─────────────────────────────────────── */}
      <section className="py-24" style={{ backgroundColor: 'var(--kj-surface)', borderTop: '1px solid var(--kj-border)' }} id="termin-service">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="section-subtitle mb-3">Reparatur anfragen</p>
            <h2 className="section-title mb-4">Service-Termin buchen</h2>
            <div className="divider-gold mx-auto mb-4" />
            <p className="font-sans text-sm" style={{ color: 'var(--kj-muted)' }}>
              Bahnhofstraße 28, 33602 Bielefeld · Wir antworten innerhalb von 24 Stunden.
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
