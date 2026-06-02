import Image from 'next/image';
import Link from 'next/link';
import Reviews from '@/components/Reviews';
import GoogleMap from '@/components/GoogleMap';
import AppointmentForm from '@/components/AppointmentForm';

const categories = [
  {
    title: 'Schmuck',
    desc: 'Ringe, Halsketten, Ohrringe & Brillantschmuck',
    href: '/ringe',
    img: '/images/brillant-set-luxus.jpg',
    sub: ['Ringe & Brillantringe', 'Halsketten', 'Ohrringe', 'Labor Diamanten'],
  },
  {
    title: 'Trauringe',
    desc: 'Individuelle Anfertigung in Bielefeld',
    href: '/trauringe',
    img: '/images/brillantringe.jpg',
    sub: [],
  },
  {
    title: 'Uhren',
    desc: 'Tommy Hilfiger, Hugo Boss, Police & mehr',
    href: '/uhren',
    img: '/images/uhrhero.jpg',
    sub: [],
  },
  {
    title: 'Goldankauf',
    desc: 'Fairer Preis, sofortige Auszahlung',
    href: '/goldankauf',
    img: '/images/goldankauf.jpg',
    sub: [],
  },
];

const usps = [
  { nr: '01', title: 'Meisterbetrieb', desc: 'Zertifizierte Goldschmiede-Qualität – über 20 Jahre Erfahrung.' },
  { nr: '02', title: 'Faire Preise',   desc: 'Keine versteckten Aufschläge – transparent beim Kauf und Goldankauf.' },
  { nr: '03', title: 'Persönlich',     desc: 'Von der Auswahl bis zur individuellen Anfertigung nehmen wir uns Zeit.' },
];

export default function HomePage() {
  return (
    <>
      {/* ── 1. HERO ──────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/hero-ladenfront.jpg" alt="KenJu Juwelier Bielefeld" fill sizes="100vw" className="object-cover img-zoom" priority style={{ opacity: 0.5 }} />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(15,13,10,0.68) 0%, rgba(15,13,10,0.45) 40%, rgba(15,13,10,0.92) 100%)' }} />
        </div>
        <div className="absolute top-1/3 left-0 w-32 h-px" style={{ background: 'linear-gradient(to right, transparent, rgba(201,168,76,0.25))' }} />
        <div className="absolute bottom-1/3 right-0 w-32 h-px" style={{ background: 'linear-gradient(to left, transparent, rgba(201,168,76,0.25))' }} />

        <div className="relative w-full max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16 text-center">
          <div className="mb-8 animate-fade-in">
            <span className="font-serif text-5xl md:text-6xl font-light text-white leading-none">
              <span className="gold-text">Ken</span>Ju
            </span>
            <p className="font-sans text-[0.6rem] tracking-[0.5em] uppercase mt-2" style={{ color: 'var(--kj-gold)', opacity: 0.8 }}>Juwelier · Bielefeld</p>
          </div>
          <div className="divider-gold mx-auto mb-10" />
          <h1 className="font-serif font-light text-white animate-slide-up" style={{ fontSize: 'clamp(1.75rem, 5vw, 5rem)', lineHeight: 1.1, marginBottom: '2rem' }}>
            Meisterbetrieb für exklusiven Schmuck,<br className="hidden sm:block" />
            <span className="gold-text"> Trauringe &amp; Goldankauf</span>
            <br className="hidden sm:block" /> in Bielefeld
          </h1>
          <p className="font-sans text-lg max-w-2xl mx-auto leading-relaxed mb-14 animate-fade-in" style={{ color: 'rgba(245,240,232,0.6)' }}>
            Brillantringe, Labor Diamanten, individuelle Anfertigungen und fairer Goldankauf –
            seit über 20 Jahren Ihr Juwelier mit Meisterqualität.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-in">
            <Link href="/#kollektionen" className="btn-gold" style={{ fontSize: '0.75rem', letterSpacing: '0.14em', padding: '1rem 2.5rem' }}>
              Kollektionen entdecken
            </Link>
            <Link href="/#termin" className="btn-outline-gold" style={{ fontSize: '0.75rem', letterSpacing: '0.14em', padding: '1rem 2.5rem', borderColor: 'rgba(255,255,255,0.3)', color: 'rgba(255,255,255,0.82)' }}>
              Termin buchen
            </Link>
          </div>
          <div className="inline-flex flex-wrap justify-center gap-x-8 gap-y-3 px-10 py-4 animate-fade-in" style={{ border: '1px solid rgba(201,168,76,0.18)', background: 'rgba(15,13,10,0.45)', backdropFilter: 'blur(8px)' }}>
            {['20+ Jahre Erfahrung', 'Persönliche Meisterberatung', 'Transparente Preise', 'Handgefertigte Qualität'].map((t) => (
              <span key={t} className="font-sans text-xs tracking-wider" style={{ color: 'rgba(201,168,76,0.75)' }}>✦ {t}</span>
            ))}
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
          <div className="w-px h-14" style={{ background: 'linear-gradient(to bottom, rgba(201,168,76,0.5), transparent)' }} />
        </div>
      </section>

      {/* ── 2. STATS ─────────────────────────────────────── */}
      <section className="py-14" style={{ backgroundColor: 'var(--kj-surface)', borderTop: '1px solid var(--kj-border)', borderBottom: '1px solid var(--kj-border)' }}>
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { value: '20+',    label: 'Jahre Erfahrung',    sub: 'Meisterbetrieb' },
              { value: '5.000+', label: 'Zufriedene Kunden',  sub: '5-Sterne Google' },
              { value: '100%',   label: 'Transparenz',        sub: 'Faire Preise' },
              { value: 'Sofort', label: 'Bargeld-Auszahlung', sub: 'Goldankauf' },
            ].map((s) => (
              <div key={s.label}>
                <p className="font-serif text-4xl font-light mb-1 gold-text">{s.value}</p>
                <p className="font-sans text-xs tracking-widest uppercase mb-0.5" style={{ color: 'var(--kj-text)' }}>{s.label}</p>
                <p className="font-sans text-xs" style={{ color: 'var(--kj-muted)' }}>{s.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. ÜBER KENJU + USPs ─────────────────────────── */}
      <section className="py-24" style={{ backgroundColor: 'var(--kj-bg)' }}>
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            <div className="relative h-[380px] lg:h-[520px] overflow-hidden gold-border">
              <Image src="/images/brillant-set-luxus.jpg" alt="KenJu Juwelier Bielefeld – Schmuck & Beratung" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover img-zoom" style={{ opacity: 0.9 }} />
              <div className="img-caption">
                <p className="font-serif text-xl text-white">Persönlich. Erfahren. Zuverlässig.</p>
              </div>
            </div>

            <div>
              <p className="section-subtitle mb-4">Über KenJu</p>
              <h2 className="font-serif font-light leading-tight mb-6" style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', color: 'var(--kj-text)' }}>
                Schmuck mit Handwerk &amp; Seele
              </h2>
              <div className="divider-gold mb-8" />
              <p className="font-sans text-base leading-relaxed mb-10" style={{ color: 'var(--kj-muted)', maxWidth: '48ch' }}>
                Seit über <strong style={{ color: 'var(--kj-text)' }}>20 Jahren</strong> steht KenJu Juwelier in Bielefeld für handgefertigten Schmuck höchster Güte – von Goldringe über Brillantringe bis hin zu individuellen Trauringen und fairem Goldankauf.
              </p>

              <div className="space-y-6">
                {usps.map((u) => (
                  <div key={u.nr} className="flex items-start gap-5">
                    <span className="font-serif text-2xl font-light shrink-0 leading-none mt-0.5" style={{ color: 'var(--kj-gold)', opacity: 0.7 }}>{u.nr}</span>
                    <div>
                      <h3 className="font-sans text-sm font-semibold tracking-wide mb-1" style={{ color: 'var(--kj-text)' }}>{u.title}</h3>
                      <p className="font-sans text-sm leading-relaxed" style={{ color: 'var(--kj-muted)' }}>{u.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. KOLLEKTIONEN ──────────────────────────────── */}
      <section className="py-24" style={{ backgroundColor: 'var(--kj-surface)' }} id="kollektionen">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="text-center mb-14">
            <p className="section-subtitle mb-4">Unsere Kollektionen</p>
            <h2 className="section-title mb-4">Entdecken Sie Schmuck der Extraklasse</h2>
            <div className="divider-gold mx-auto" />
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
            {categories.map((cat) => (
              <Link key={cat.href} href={cat.href} className="group">
                <article className="overflow-hidden transition-all duration-400 hover:shadow-2xl hover:-translate-y-1" style={{ background: 'var(--kj-card)', border: '1px solid var(--kj-border)' }}>
                  <div className="relative overflow-hidden" style={{ height: '200px' }}>
                    <Image src={cat.img} alt={cat.title} fill sizes="(max-width: 640px) 50vw, 25vw" className="object-cover img-zoom" style={{ opacity: 0.9 }} />
                    <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(15,13,10,0.7), transparent 60%)' }} />
                  </div>
                  <div className="p-4 md:p-5">
                    <h3 className="font-serif text-xl mb-1 transition-colors" style={{ color: 'var(--kj-text)' }}>{cat.title}</h3>
                    <p className="font-sans text-xs leading-snug mb-3" style={{ color: 'var(--kj-muted)' }}>{cat.desc}</p>
                    {cat.sub.length > 0 && (
                      <div className="flex flex-wrap gap-1.5">
                        {cat.sub.map((s) => (
                          <span key={s} className="font-sans text-[0.62rem] px-2 py-0.5 tracking-wide" style={{ background: 'var(--kj-surface)', color: 'var(--kj-muted)' }}>{s}</span>
                        ))}
                      </div>
                    )}
                    {cat.sub.length === 0 && (
                      <span className="font-sans text-xs tracking-widest uppercase flex items-center gap-2 transition-all group-hover:gap-3" style={{ color: 'var(--kj-gold)' }}>
                        Mehr entdecken <span>→</span>
                      </span>
                    )}
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. REVIEWS ───────────────────────────────────── */}
      <Reviews />

      {/* ── 6. GOLDANKAUF BANNER ─────────────────────────── */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/goldankauf.jpg" alt="Goldankauf Bielefeld – KenJu Juwelier" fill sizes="100vw" className="object-cover img-zoom" style={{ opacity: 0.22 }} />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(15,13,10,0.97), rgba(15,13,10,0.7) 50%, rgba(15,13,10,0.97))' }} />
        </div>
        <div className="relative max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16 text-center">
          <p className="section-subtitle mb-4">Jetzt verkaufen</p>
          <h2 className="font-serif font-light text-white mb-5" style={{ fontSize: 'clamp(1.8rem, 4vw, 3.5rem)', lineHeight: 1.15 }}>
            Fairer <span className="gold-text">Goldankauf</span> in Bielefeld –<br className="hidden sm:block" /> kostenlose Bewertung, sofortige Auszahlung.
          </h2>
          <div className="divider-gold mx-auto mb-8" />
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {['Sofortige Auszahlung', 'Kostenlose Bewertung', 'Tagesaktueller Kurs', 'Gutschein-Option'].map((badge) => (
              <span key={badge} className="font-sans text-xs px-4 py-1.5 tracking-wide" style={{ border: '1px solid rgba(201,168,76,0.35)', color: 'rgba(201,168,76,0.85)', background: 'rgba(201,168,76,0.06)' }}>
                ✦ {badge}
              </span>
            ))}
          </div>
          <Link href="/goldankauf" className="btn-gold" style={{ fontSize: '0.75rem', letterSpacing: '0.14em', padding: '1rem 2.5rem' }}>
            Mehr zum Goldankauf
          </Link>
        </div>
      </section>

      {/* ── 7. TERMIN + MAP ──────────────────────────────── */}
      <section className="py-24" style={{ backgroundColor: 'var(--kj-surface)' }} id="termin">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="text-center mb-14">
            <p className="section-subtitle mb-4">Persönliche Beratung</p>
            <h2 className="section-title mb-4">Termin vereinbaren</h2>
            <div className="divider-gold mx-auto mb-5" />
            <p className="font-sans text-base max-w-lg mx-auto leading-relaxed" style={{ color: 'var(--kj-muted)' }}>
              Kostenloses Beratungsgespräch in unserem Atelier –<br />Bahnhofstraße 28, 33602 Bielefeld.
            </p>
          </div>
          <div className="max-w-3xl mx-auto p-8 md:p-12" style={{ background: 'var(--kj-card)', border: '1px solid var(--kj-border)' }}>
            <AppointmentForm />
          </div>
        </div>
      </section>

      <GoogleMap />
    </>
  );
}
