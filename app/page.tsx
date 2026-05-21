import Image from 'next/image';
import Link from 'next/link';
import Reviews from '@/components/Reviews';
import GoogleMap from '@/components/GoogleMap';
import AppointmentForm from '@/components/AppointmentForm';

const categories = [
  { title: 'Ringe & Brillantringe', desc: 'Goldringe, Verlobungs- und Brillantringe in 585 Gold.',          href: '/ringe',         img: '/images/ringe.jpg' },
  { title: 'Trauringe',             desc: 'Cilor Trauringe – Made in Germany, individuelle Anfertigung.',    href: '/trauringe',      img: '/images/brillantringe.jpg' },
  { title: 'Ohrringe',              desc: 'Ohrstecker und Creolen in 585 Gelbgold und Weißgold.',            href: '/ohrringe',       img: '/images/ohrstecker.jpg' },
  { title: 'Halsketten & Kreuze',   desc: 'Goldketten mit Anhängern, Kreuz- und Medaillenanhänger.',        href: '/halsketten',     img: '/images/halsketten.jpg' },
  { title: 'Armreifen',             desc: 'Elegante Armreifen und Armbänder in exklusiver Qualität.',        href: '/armreifen',      img: '/images/armreifen.jpg' },
  { title: 'Uhren',                 desc: 'Tommy Hilfiger, Hugo Boss, Police, Regent & Swiss Military.',     href: '/uhren',          img: '/images/creolen.jpg' },
  { title: 'Goldankauf',            desc: 'Fairer und transparenter Goldankauf zum Tagespreis.',             href: '/goldankauf',     img: '/images/goldankauf.jpg' },
  { title: 'Labor Diamanten',       desc: 'Ethisch. Strahlend. Erschwinglich. Diamantschmuck der Zukunft.', href: '/labordiamanten', img: '/images/brillantringe.jpg' },
];

const usps = [
  { icon: '◈', title: 'Meisterbetrieb', desc: 'Zertifizierte Goldschmiede-Qualität, über 20 Jahre Erfahrung.' },
  { icon: '⬡', title: 'Faire Preise',   desc: 'Keine versteckten Aufschläge – transparent beim Kauf und Goldankauf.' },
  { icon: '◯', title: 'Persönlich',     desc: 'Wir nehmen uns Zeit – von der Auswahl bis zur individuellen Anfertigung.' },
];

export default function HomePage() {
  return (
    <>
      {/* ── 1. HERO ──────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-ladenfront.jpg"
            alt="KenJu Juwelier Laden Bielefeld"
            fill
            sizes="100vw"
            className="object-cover img-zoom"
            priority
            style={{ opacity: 0.5 }}
          />
          {/* Lighter overlay – show more of the image */}
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(to bottom, rgba(15,13,10,0.68) 0%, rgba(15,13,10,0.45) 40%, rgba(15,13,10,0.92) 100%)',
            }}
          />
        </div>

        {/* Subtle decorative lines */}
        <div className="absolute top-1/3 left-0 w-32 h-px" style={{ background: 'linear-gradient(to right, transparent, rgba(201,168,76,0.25))' }} />
        <div className="absolute bottom-1/3 right-0 w-32 h-px" style={{ background: 'linear-gradient(to left, transparent, rgba(201,168,76,0.25))' }} />

        <div className="relative w-full max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16 text-center">
          {/* Brand mark */}
          <div className="mb-8 animate-fade-in">
            <span className="font-serif text-5xl md:text-6xl font-light text-white leading-none">
              <span className="gold-text">Ken</span>Ju
            </span>
            <p className="font-sans text-[0.6rem] tracking-[0.5em] uppercase mt-2" style={{ color: 'var(--kj-gold)', opacity: 0.8 }}>
              Juwelier · Bielefeld
            </p>
          </div>

          <div className="divider-gold mx-auto mb-10" />

          {/* Primary H1 */}
          <h1 className="font-serif font-light text-white animate-slide-up" style={{ fontSize: 'clamp(2.4rem, 6vw, 5rem)', lineHeight: 1.08, marginBottom: '2rem' }}>
            Meisterbetrieb für exklusiven Schmuck,<br className="hidden sm:block" />
            <span className="gold-text"> Trauringe &amp; Goldankauf</span>
            <br className="hidden sm:block" /> in Bielefeld
          </h1>

          <p
            className="font-sans text-lg max-w-2xl mx-auto leading-relaxed mb-14 animate-fade-in"
            style={{ color: 'rgba(245,240,232,0.6)' }}
          >
            Brillantringe, Labor Diamanten, individuelle Anfertigungen und fairer Goldankauf –
            seit über 20 Jahren Ihr Juwelier mit Meisterqualität.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-in">
            <Link href="/#kollektionen" className="btn-gold" style={{ fontSize: '0.75rem', letterSpacing: '0.14em', padding: '1rem 2.5rem' }}>
              Kollektionen entdecken
            </Link>
            <Link
              href="/#termin"
              className="btn-outline-gold"
              style={{ fontSize: '0.75rem', letterSpacing: '0.14em', padding: '1rem 2.5rem', borderColor: 'rgba(255,255,255,0.3)', color: 'rgba(255,255,255,0.82)' }}
            >
              Termin buchen
            </Link>
          </div>

          {/* Trust bar */}
          <div
            className="inline-flex flex-wrap justify-center gap-x-8 gap-y-3 px-10 py-4 animate-fade-in"
            style={{ border: '1px solid rgba(201,168,76,0.18)', background: 'rgba(15,13,10,0.45)', backdropFilter: 'blur(8px)' }}
          >
            {['20+ Jahre Erfahrung', 'Persönliche Meisterberatung', 'Transparente Preise', 'Handgefertigte Qualität'].map((t) => (
              <span key={t} className="font-sans text-xs tracking-wider" style={{ color: 'rgba(201,168,76,0.75)' }}>
                ✦ {t}
              </span>
            ))}
          </div>
        </div>

        {/* Scroll line */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
          <div className="w-px h-14" style={{ background: 'linear-gradient(to bottom, rgba(201,168,76,0.5), transparent)' }} />
        </div>
      </section>

      {/* ── 2. USP STATS ─────────────────────────────────── */}
      <section
        className="py-16"
        style={{ backgroundColor: 'var(--kj-surface)', borderTop: '1px solid var(--kj-border)', borderBottom: '1px solid var(--kj-border)' }}
      >
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 text-center">
            {[
              { value: '20+',    label: 'Jahre Erfahrung',    sub: 'Meisterbetrieb seit über zwei Jahrzehnten' },
              { value: '5.000+', label: 'Zufriedene Kunden',  sub: '5-Sterne-Bewertungen auf Google' },
              { value: '100%',   label: 'Transparenz',        sub: 'Faire Preise ohne versteckte Kosten' },
              { value: 'Sofort', label: 'Bargeld-Auszahlung', sub: 'Beim Goldankauf noch am selben Tag' },
            ].map((s) => (
              <div key={s.label}>
                <p className="font-serif text-5xl font-light mb-2 gold-text">{s.value}</p>
                <p className="font-sans text-xs tracking-widest uppercase mb-2" style={{ color: 'var(--kj-text)' }}>{s.label}</p>
                <p className="font-sans text-sm leading-snug" style={{ color: 'var(--kj-muted)' }}>{s.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. ÜBER KENJU ────────────────────────────────── */}
      <section className="py-36" style={{ backgroundColor: 'var(--kj-bg)' }}>
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">

            {/* Image */}
            <div className="relative h-[480px] lg:h-[640px] overflow-hidden gold-border group">
              <Image
                src="/images/brillant-set-luxus.jpg"
                alt="KenJu Juwelier Bielefeld – Schmuck & Beratung"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover img-zoom"
                style={{ opacity: 0.9 }}
              />
              <div className="img-caption">
                <p className="font-serif text-2xl text-white">Persönlich. Erfahren. Zuverlässig.</p>
                <p className="font-sans text-sm mt-1" style={{ color: 'rgba(255,255,255,0.55)' }}>
                  Ihr Juwelier des Vertrauens in Bielefeld seit 20+ Jahren
                </p>
              </div>
              <div
                className="absolute top-6 right-6 px-5 py-4"
                style={{ background: 'rgba(15,13,10,0.82)', border: '1px solid rgba(201,168,76,0.35)' }}
              >
                <p className="font-sans text-xs tracking-widest uppercase" style={{ color: 'var(--kj-gold)' }}>Meisterbetrieb</p>
                <p className="font-serif text-base text-white mt-0.5">Bielefeld · NRW</p>
              </div>
            </div>

            {/* Text */}
            <div>
              <p className="section-subtitle mb-5">Über KenJu</p>
              <h2 className="font-serif font-light leading-tight mb-8" style={{ fontSize: 'clamp(2.2rem, 4vw, 3.5rem)', color: 'var(--kj-text)' }}>
                Schmuck mit Geschichte,<br />Handwerk &amp; Seele
              </h2>
              <div className="divider-gold mb-10" />
              <div className="space-y-5 font-sans text-base leading-relaxed" style={{ color: 'var(--kj-muted)', maxWidth: '52ch' }}>
                <p>
                  Seit über <strong style={{ color: 'var(--kj-text)' }}>20 Jahren</strong> steht KenJu Juwelier
                  in Bielefeld für handgefertigten Schmuck höchster Güte – Goldringe, Brillantringe,
                  Trauringe, Creolen, Armreifen und individuelle Anfertigungen in 585 Gelbgold,
                  Weißgold und Roségold.
                </p>
                <p>
                  Unser Team kombiniert <strong style={{ color: 'var(--kj-text)' }}>jahrhundertealtes Handwerk</strong> mit
                  modernem Designverständnis. Jedes Stück entsteht mit Liebe zum Detail – aus unserer
                  Kollektion oder ganz nach Ihrem persönlichen Wunsch.
                </p>
                <p>
                  Neu: <strong style={{ color: 'var(--kj-gold)' }}>Labor Diamanten</strong> – ethisch
                  erzeugte Brillanten mit identischer Brillanz, fairen Preisen und voller Zertifizierung.
                </p>
              </div>

              {/* 3 compact USPs */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mt-12 mb-12">
                {usps.map((u) => (
                  <div key={u.title} className="flex flex-col gap-2">
                    <span className="font-serif text-2xl gold-text">{u.icon}</span>
                    <h3 className="font-sans text-sm font-semibold tracking-wide" style={{ color: 'var(--kj-text)' }}>{u.title}</h3>
                    <p className="font-sans text-sm leading-relaxed" style={{ color: 'var(--kj-muted)' }}>{u.desc}</p>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/#termin" className="btn-dark">Beratungsgespräch buchen</Link>
                <Link href="/goldankauf" className="btn-outline-gold">Goldankauf</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. KOLLEKTIONEN ──────────────────────────────── */}
      <section className="py-36" style={{ backgroundColor: 'var(--kj-surface)' }} id="kollektionen">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="text-center mb-20">
            <p className="section-subtitle mb-5">Unsere Kollektionen</p>
            <h2 className="section-title mb-4">
              Entdecken Sie Schmuck<br />der Extraklasse
            </h2>
            <div className="divider-gold mx-auto" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((cat) => (
              <Link key={cat.href} href={cat.href} className="group">
                <article
                  className="overflow-hidden transition-all duration-400 hover:shadow-2xl hover:-translate-y-1"
                  style={{ background: 'var(--kj-card)', border: '1px solid var(--kj-border)' }}
                >
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={cat.img}
                      alt={cat.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover img-zoom"
                      style={{ opacity: 0.9 }}
                    />
                    <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(15,13,10,0.65), transparent 60%)' }} />
                  </div>
                  <div className="p-6">
                    <h3 className="font-serif text-2xl mb-2 transition-colors" style={{ color: 'var(--kj-text)' }}>
                      {cat.title}
                    </h3>
                    <p className="font-sans text-sm leading-relaxed mb-4" style={{ color: 'var(--kj-muted)' }}>
                      {cat.desc}
                    </p>
                    <span
                      className="font-sans text-xs tracking-widest uppercase flex items-center gap-2 transition-all group-hover:gap-3"
                      style={{ color: 'var(--kj-gold)' }}
                    >
                      Mehr entdecken <span>→</span>
                    </span>
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
      <section className="relative py-40 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/goldankauf.jpg"
            alt="Goldankauf Bielefeld – KenJu Juwelier"
            fill
            sizes="100vw"
            className="object-cover img-zoom"
            style={{ opacity: 0.28 }}
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(15,13,10,0.97), rgba(15,13,10,0.7) 50%, rgba(15,13,10,0.97))' }} />
        </div>
        <div className="relative max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <p className="section-subtitle mb-5">Jetzt verkaufen</p>
              <h2 className="font-serif font-light text-white mb-6" style={{ fontSize: 'clamp(2.4rem, 5vw, 4rem)', lineHeight: 1.1 }}>
                Fairer <span className="gold-text">Goldankauf</span><br />in Bielefeld
              </h2>
              <div className="divider-gold mb-10" />
              <p className="font-sans text-base leading-relaxed mb-5" style={{ color: 'rgba(245,240,232,0.6)' }}>
                Wir kaufen Gold, Silber, Platin, Uhren und Brillanten zum tagesaktuellen Marktpreis.
                Sofortige Auszahlung in bar – diskret, fair, professionell bewertet.
              </p>
              <p className="font-sans text-base leading-relaxed mb-12" style={{ color: 'rgba(245,240,232,0.6)' }}>
                Bei Altgold-Verkauf besteht zusätzlich die Möglichkeit, durch einen{' '}
                <strong style={{ color: 'rgba(245,240,232,0.85)' }}>Einkaufsgutschein</strong> einen exklusiven
                Mehrwert zu erhalten und neuen Schmuck zu attraktiven Konditionen zu erwerben.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/goldankauf" className="btn-gold">Mehr zum Goldankauf</Link>
                <a
                  href="tel:+4917663284312"
                  className="btn-outline-gold"
                  style={{ borderColor: 'rgba(255,255,255,0.3)', color: 'rgba(255,255,255,0.8)' }}
                >
                  +49 176 63284312
                </a>
              </div>
            </div>
            {/* Info boxes */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { val: 'Sofort', label: 'Auszahlung in bar' },
                { val: '100%',   label: 'Kostenlose Bewertung' },
                { val: 'Fair',   label: 'Tagesaktueller Kurs' },
                { val: '+Wert',  label: 'Gutschein-Option' },
              ].map((box) => (
                <div
                  key={box.label}
                  className="p-7 text-center"
                  style={{ border: '1px solid rgba(201,168,76,0.25)', background: 'rgba(201,168,76,0.05)' }}
                >
                  <p className="font-serif text-3xl gold-text mb-2">{box.val}</p>
                  <p className="font-sans text-sm tracking-wider" style={{ color: 'rgba(245,240,232,0.5)' }}>{box.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 7. TERMIN + MAP ──────────────────────────────── */}
      <section className="py-36" style={{ backgroundColor: 'var(--kj-surface)' }} id="termin">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="text-center mb-16">
            <p className="section-subtitle mb-5">Persönliche Beratung</p>
            <h2 className="section-title mb-4">Termin vereinbaren</h2>
            <div className="divider-gold mx-auto mb-6" />
            <p className="font-sans text-base max-w-lg mx-auto leading-relaxed" style={{ color: 'var(--kj-muted)' }}>
              Kostenloses Beratungsgespräch in unserem Atelier –<br />
              Bahnhofstraße 28, 33602 Bielefeld.
            </p>
          </div>
          <div
            className="max-w-3xl mx-auto p-10 md:p-14"
            style={{ background: 'var(--kj-card)', border: '1px solid var(--kj-border)' }}
          >
            <AppointmentForm />
          </div>
        </div>
      </section>

      <GoogleMap />
    </>
  );
}
