import Image from 'next/image';
import Link from 'next/link';
import Reviews from '@/components/Reviews';
import GoogleMap from '@/components/GoogleMap';
import AppointmentForm from '@/components/AppointmentForm';
import JewelryCarousel from '@/components/JewelryCarousel';

const categories = [
  { title: 'Ringe & Brillantringe', desc: 'Goldringe, Verlobungs- und Brillantringe in 585 Gold.',          href: '/ringe',         img: '/images/ringe.jpg' },
  { title: 'Trauringe',             desc: 'Cilor Trauringe – Made in Germany, individuelle Anfertigung.',    href: '/trauringe',      img: '/images/brillantringe.jpg' },
  { title: 'Ohrringe',              desc: 'Ohrstecker und Creolen in 585 Gelbgold und Weißgold.',            href: '/ohrringe',       img: '/images/ohrstecker.jpg' },
  { title: 'Halsketten & Kreuze',   desc: 'Goldketten mit Anhängern, Kreuz- und Medaillenanhänger.',        href: '/halsketten',     img: '/images/halsketten.jpg' },
  { title: 'Armreifen',             desc: 'Elegante Armreifen und Armbänder in exklusiver Qualität.',        href: '/armreifen',      img: '/images/armreifen.jpg' },
  { title: 'Uhren',                 desc: 'Tommy Hilfiger, Hugo Boss, Festina, Boccia & 5 weitere Marken.', href: '/uhren',          img: '/images/creolen.jpg' },
  { title: 'Goldankauf',            desc: 'Fairer und transparenter Goldankauf zum Tagespreis.',             href: '/goldankauf',     img: '/images/goldankauf.jpg' },
  { title: 'Labor Diamanten',       desc: 'Ethisch. Strahlend. Erschwinglich. Diamantschmuck der Zukunft.', href: '/labordiamanten', img: '/images/brillantringe.jpg' },
];

const whyKenju = [
  { icon: '✓', title: 'Meisterbetrieb',        desc: 'Zertifizierte Goldschmiede-Qualität mit über 20 Jahren Erfahrung und Leidenschaft für das Handwerk.' },
  { icon: '✓', title: 'Faire Preise',           desc: 'Keine versteckten Aufschläge – transparente Preisgestaltung beim Kauf und beim Goldankauf.' },
  { icon: '✓', title: 'Individuelle Beratung',  desc: 'Wir nehmen uns Zeit für Ihre Wünsche und begleiten Sie persönlich von der Auswahl bis zur Fertigstellung.' },
  { icon: '✓', title: 'Sofortige Auszahlung',   desc: 'Goldankauf zum Tagespreis – sofort in bar, diskret, transparent und professionell bewertet.' },
  { icon: '✓', title: '585 Gold & Brillanten',  desc: 'Gelbgold, Weißgold und Roségold in höchster Legierungsqualität – mit oder ohne Edelsteinbesatz.' },
  { icon: '✓', title: 'Labor Diamanten',        desc: 'Ethisch erzeugte Diamanten mit identischer physischer Brillanz – zum fairen Preis, mit Zertifikat.' },
];

export default function HomePage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-ladenfront.jpg"
            alt="KenJu Juwelier Laden Bielefeld"
            fill
            sizes="100vw"
            className="object-cover"
            priority
            style={{ opacity: 0.35 }}
          />
          <div
            className="absolute inset-0"
            style={{ background: 'linear-gradient(to bottom, rgba(15,13,10,0.82) 0%, rgba(15,13,10,0.65) 45%, rgba(15,13,10,0.97) 100%)' }}
          />
        </div>

        {/* Decorative side lines */}
        <div className="absolute top-1/3 left-0 w-40 h-px" style={{ background: 'linear-gradient(to right, transparent, rgba(201,168,76,0.3), transparent)' }} />
        <div className="absolute bottom-1/3 right-0 w-40 h-px" style={{ background: 'linear-gradient(to left, transparent, rgba(201,168,76,0.3), transparent)' }} />

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Brand mark – compact, not dominant */}
          <div className="mb-8 animate-fade-in">
            <span className="font-serif text-5xl md:text-6xl font-light leading-none text-white">
              <span className="gold-text">Ken</span>Ju
            </span>
            <p className="font-sans text-[0.65rem] tracking-[0.45em] uppercase mt-1.5" style={{ color: 'var(--kj-gold)', opacity: 0.85 }}>
              Juwelier · Bielefeld
            </p>
          </div>

          {/* Gold separator */}
          <div className="divider-gold mx-auto mb-10" />

          {/* Primary headline – the real H1 */}
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-light leading-tight mb-8 animate-slide-up text-white">
            Meisterbetrieb für exklusiven Schmuck,<br className="hidden md:block" />
            <span className="gold-text"> Trauringe &amp; Goldankauf</span>
            <br className="hidden md:block" /> in Bielefeld
          </h1>

          <p className="font-sans text-base max-w-xl mx-auto leading-relaxed mb-12 animate-fade-in" style={{ color: 'rgba(245,240,232,0.62)' }}>
            Brillantringe, Labor Diamanten, individuelle Anfertigungen und fairer Goldankauf –
            seit über 20 Jahren Ihr Juwelier mit Meisterqualität.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-14 animate-fade-in">
            <Link href="/#kollektionen" className="btn-gold">
              Kollektionen entdecken
            </Link>
            <Link
              href="/#termin"
              className="btn-outline-gold"
              style={{ borderColor: 'rgba(255,255,255,0.35)', color: 'rgba(255,255,255,0.82)' }}
            >
              Termin buchen
            </Link>
          </div>

          {/* Inline trust signals */}
          <div
            className="inline-flex flex-wrap justify-center gap-x-8 gap-y-3 px-8 py-4 animate-fade-in"
            style={{ border: '1px solid rgba(201,168,76,0.2)', background: 'rgba(15,13,10,0.5)' }}
          >
            {[
              '20+ Jahre Erfahrung',
              'Persönliche Meisterberatung',
              'Transparente Preise',
              'Handgefertigte Qualität',
            ].map((t) => (
              <span key={t} className="font-sans text-xs tracking-wider" style={{ color: 'rgba(201,168,76,0.8)' }}>
                ✦ {t}
              </span>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
          <div className="w-px h-12" style={{ background: 'linear-gradient(to bottom, rgba(201,168,76,0.55), transparent)' }} />
        </div>
      </section>

      {/* ── USP Stats ────────────────────────────────────── */}
      <section
        className="py-14"
        style={{ backgroundColor: 'var(--kj-surface)', borderTop: '1px solid var(--kj-border)', borderBottom: '1px solid var(--kj-border)' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 text-center">
            {[
              { value: '20+',    label: 'Jahre Erfahrung',       sub: 'Meisterbetrieb seit über zwei Jahrzehnten' },
              { value: '5.000+', label: 'Zufriedene Kunden',     sub: '5-Sterne-Bewertungen auf Google' },
              { value: '100%',   label: 'Transparenz',           sub: 'Faire Preise ohne versteckte Kosten' },
              { value: 'Sofort', label: 'Bargeld-Auszahlung',    sub: 'Beim Goldankauf noch am selben Tag' },
            ].map((s) => (
              <div key={s.label} className="group">
                <p className="font-serif text-4xl font-light mb-1 gold-text">{s.value}</p>
                <p className="font-sans text-xs tracking-widest uppercase mb-2" style={{ color: 'var(--kj-text)' }}>{s.label}</p>
                <p className="font-sans text-xs leading-snug" style={{ color: 'var(--kj-muted)' }}>{s.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Über KenJu ───────────────────────────────────── */}
      <section className="py-32" style={{ backgroundColor: 'var(--kj-bg)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

            {/* Image with editorial caption */}
            <div className="relative h-96 lg:h-[560px] overflow-hidden gold-border">
              <Image
                src="/images/brillant-set-luxus.jpg"
                alt="KenJu Juwelier Bielefeld – Schmuck & Beratung"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                style={{ opacity: 0.9 }}
              />
              <div className="img-caption">
                <p className="font-serif text-xl text-white">Persönlich. Erfahren. Zuverlässig.</p>
                <p className="font-sans text-xs mt-1 text-white/55">Ihr Juwelier des Vertrauens in Bielefeld seit 20+ Jahren</p>
              </div>
              {/* Decorative gold accent tag */}
              <div
                className="absolute top-5 right-5 px-4 py-3"
                style={{ background: 'rgba(8,8,15,0.78)', border: '1px solid rgba(154,120,24,0.4)' }}
              >
                <p className="font-sans text-xs tracking-widest uppercase" style={{ color: 'var(--kj-gold)' }}>Meisterbetrieb</p>
                <p className="font-serif text-sm text-white mt-0.5">Bielefeld · NRW</p>
              </div>
            </div>

            {/* Text */}
            <div>
              <p className="section-subtitle mb-5">Über KenJu</p>
              <h2 className="font-serif text-4xl md:text-5xl font-light leading-tight mb-6" style={{ color: 'var(--kj-text)' }}>
                Schmuck mit Geschichte,<br />Handwerk &amp; Seele
              </h2>
              <div className="divider-gold mb-8" />
              <div className="space-y-5 font-sans text-sm leading-relaxed" style={{ color: 'var(--kj-muted)' }}>
                <p>
                  Seit über <strong style={{ color: 'var(--kj-text)' }}>20 Jahren</strong> steht KenJu Juwelier
                  in Bielefeld für handgefertigten Schmuck höchster Güte. Ob klassische Goldringe,
                  filigrane Ohrringe, Kreuzanhänger, elegante Armreifen oder exklusive Brillantringe –
                  unser Sortiment umfasst alles in 585 Gelbgold, Weißgold und Roségold.
                </p>
                <p>
                  Unser Team kombiniert <strong style={{ color: 'var(--kj-text)' }}>jahrhundertealtes Handwerk</strong> mit
                  modernem Designverständnis. Jedes Stück entsteht mit Liebe zum Detail und dem Anspruch
                  an absolute Perfektion – ob aus unserer Kollektion oder als individuelle Anfertigung
                  nach Ihren persönlichen Wünschen.
                </p>
                <p>
                  Neu in unserem Sortiment: <strong style={{ color: 'var(--kj-gold)' }}>Labor Diamanten</strong> –
                  ethisch erzeugte Brillanten mit identischer physischer und optischer Qualität zu einem
                  fairen Preis. Die perfekte Wahl für Verlobungsringe, Trauringe und besondere Anlässe.
                </p>
              </div>
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <Link href="/#termin" className="btn-dark">Beratungsgespräch buchen</Link>
                <Link href="/goldankauf" className="btn-outline-gold">Goldankauf</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Schmuck Karussell ────────────────────────────── */}
      <JewelryCarousel />

      {/* ── Key-Bild + Instagram Teaser ──────────────────── */}
      <section className="py-32" style={{ backgroundColor: 'var(--kj-bg)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            {/* Ausgewähltes Key-Bild */}
            <div className="relative h-96 lg:h-[560px] overflow-hidden gold-border">
              <Image
                src="/images/brillantringe.jpg"
                alt="Exklusiver Schmuck KenJu Juwelier Bielefeld"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                style={{ opacity: 0.88 }}
              />
              <div className="img-caption">
                <p className="font-serif text-xl text-white">Schmuck für unvergessliche Momente</p>
                <p className="font-sans text-xs mt-1" style={{ color: 'rgba(255,255,255,0.55)' }}>
                  585 Gold · Weißgold · Roségold · Nach Maß
                </p>
              </div>
            </div>
            {/* Text + Instagram */}
            <div>
              <p className="section-subtitle mb-5">Handwerk & Leidenschaft</p>
              <h2 className="font-serif text-4xl md:text-5xl font-light leading-tight mb-6" style={{ color: 'var(--kj-text)' }}>
                Jedes Stück erzählt<br />eine Geschichte
              </h2>
              <div className="divider-gold mb-8" />
              <p className="font-sans text-sm leading-relaxed mb-5" style={{ color: 'var(--kj-muted)' }}>
                Bei KenJu Juwelier in Bielefeld entstehen Schmuckstücke, die Generationen überdauern.
                Ob ein Verlobungsring als Symbol ewiger Verbundenheit, ein Taufkreuz als erstes Geschenk
                oder ein Brillantring zur Hochzeit – jedes Stück wird mit dem gleichen handwerklichen
                Anspruch und derselben Leidenschaft gefertigt.
              </p>
              <p className="font-sans text-sm leading-relaxed mb-10" style={{ color: 'var(--kj-muted)' }}>
                Wir setzen auf hochwertige Materialien: ausschließlich{' '}
                <strong style={{ color: 'var(--kj-text)' }}>585 Gelbgold, Weißgold und Roségold</strong>,
                kombiniert mit echten Edelsteinen oder Labor Diamanten. Handgefertigt in Bielefeld,
                mit einem Blick für Details, den man sieht – und spürt.
              </p>
              {/* Instagram CTA Box */}
              <div
                className="flex flex-col sm:flex-row items-start sm:items-center gap-5 p-6"
                style={{ border: '1px solid var(--kj-border)', background: 'var(--kj-card)' }}
              >
                <div className="shrink-0 w-12 h-12 flex items-center justify-center" style={{ background: 'var(--kj-surface)', border: '1px solid var(--kj-border)' }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" style={{ color: 'var(--kj-gold)' }}>
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                  </svg>
                </div>
                <div className="flex-1">
                  <p className="font-sans text-sm leading-relaxed" style={{ color: 'var(--kj-muted)' }}>
                    Entdecken Sie weitere exklusive Stücke und aktuelle Kollektionen auf unserem{' '}
                    <strong style={{ color: 'var(--kj-text)' }}>Instagram-Profil</strong> –
                    für tägliche Schmuckinspirations aus Bielefeld.
                  </p>
                  <a
                    href="https://www.instagram.com/juwelier_kenju/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-3 font-sans text-xs tracking-widest uppercase transition-all hover:opacity-75"
                    style={{ color: 'var(--kj-gold)' }}
                  >
                    Jetzt folgen: @juwelier_kenju →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Reviews ──────────────────────────────────────── */}
      <Reviews />

      {/* ── Warum KenJu ─────────────────────────────────── */}
      <section className="py-32" style={{ backgroundColor: 'var(--kj-bg)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <p className="section-subtitle mb-5">Ihr Vorteil</p>
            <h2 className="font-serif text-4xl md:text-5xl font-light mb-6" style={{ color: 'var(--kj-text)' }}>
              Warum KenJu Juwelier?
            </h2>
            <div className="divider-gold mx-auto mb-6" />
            <p className="font-sans text-sm max-w-xl mx-auto leading-relaxed" style={{ color: 'var(--kj-muted)' }}>
              Als zertifizierter Meisterbetrieb mit über zwei Jahrzehnten Erfahrung bieten wir Ihnen
              nicht nur Schmuck – sondern ein vollständiges Juwelier-Erlebnis.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {whyKenju.map((item) => (
              <div
                key={item.title}
                className="flex gap-5 p-7 transition-all duration-300 hover:shadow-md"
                style={{ background: 'var(--kj-card)', border: '1px solid var(--kj-border)' }}
              >
                <span
                  className="flex-shrink-0 w-9 h-9 flex items-center justify-center font-serif text-lg font-bold mt-0.5"
                  style={{ color: 'var(--kj-gold)', border: '1px solid var(--kj-border)' }}
                >
                  {item.icon}
                </span>
                <div>
                  <h3 className="font-serif text-xl mb-2" style={{ color: 'var(--kj-text)' }}>{item.title}</h3>
                  <p className="font-sans text-sm leading-relaxed" style={{ color: 'var(--kj-muted)' }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-14 flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+4917663284312" className="btn-dark">Jetzt anrufen</a>
            <Link href="/#termin" className="btn-outline-gold">Termin vereinbaren</Link>
          </div>
        </div>
      </section>

      {/* ── Kollektionen ─────────────────────────────────── */}
      <section className="py-32" style={{ backgroundColor: 'var(--kj-surface)' }} id="kollektionen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <p className="section-subtitle mb-5">Unsere Kollektionen</p>
            <h2 className="font-serif text-4xl md:text-5xl font-light mb-6" style={{ color: 'var(--kj-text)' }}>
              Entdecken Sie Schmuck<br />der Extraklasse
            </h2>
            <div className="divider-gold mx-auto" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((cat) => (
              <Link key={cat.href} href={cat.href} className="group">
                <article
                  className="overflow-hidden transition-all duration-350 hover:shadow-xl"
                  style={{ background: 'var(--kj-card)', border: '1px solid var(--kj-border)' }}
                >
                  <div className="relative h-56 overflow-hidden category-img-placeholder">
                    <Image
                      src={cat.img}
                      alt={cat.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      style={{ opacity: 0.88 }}
                    />
                    <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(8,8,15,0.68), transparent 65%)' }} />
                  </div>
                  <div className="p-6">
                    <h3 className="font-serif text-xl mb-2 transition-colors" style={{ color: 'var(--kj-text)' }}>
                      {cat.title}
                    </h3>
                    <p className="font-sans text-xs leading-relaxed mb-4" style={{ color: 'var(--kj-muted)' }}>
                      {cat.desc}
                    </p>
                    <span className="font-sans text-xs tracking-widest uppercase flex items-center gap-2" style={{ color: 'var(--kj-gold)' }}>
                      Mehr entdecken <span>→</span>
                    </span>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Goldankauf Banner ────────────────────────────── */}
      <section className="relative py-36 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/goldankauf.jpg"
            alt="Goldankauf Bielefeld – KenJu Juwelier"
            fill
            sizes="100vw"
            className="object-cover"
            style={{ opacity: 0.22 }}
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(8,8,15,0.97), rgba(8,8,15,0.72), rgba(8,8,15,0.97))' }} />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="section-subtitle mb-5">Jetzt verkaufen</p>
              <h2 className="font-serif text-4xl md:text-5xl font-light mb-6 text-white">
                Fairer <span className="gold-text">Goldankauf</span><br />in Bielefeld
              </h2>
              <div className="divider-gold mb-8" />
              <p className="font-sans text-white/60 text-sm leading-relaxed mb-4">
                Wir kaufen Gold, Silber, Platin, Uhren und Brillanten zum tagesaktuellen Marktpreis.
                Sofortige Auszahlung in bar – diskret, fair und professionell bewertet.
              </p>
              <p className="font-sans text-white/60 text-sm leading-relaxed mb-10">
                Bei Altgold-Verkauf besteht zusätzlich die Möglichkeit, durch die Verrechnung mit einem
                <strong className="text-white/85"> Einkaufsgutschein</strong> einen exklusiven Mehrwert
                zu erhalten – und neuen Schmuck zu besonders attraktiven Konditionen zu erwerben.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/goldankauf" className="btn-gold">Mehr zum Goldankauf</Link>
                <a href="tel:+4917663284312" className="btn-outline-gold" style={{ borderColor: 'rgba(255,255,255,0.35)', color: 'rgba(255,255,255,0.8)' }}>
                  +49 176 63284312
                </a>
              </div>
            </div>
            {/* Info boxes */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { val: 'Sofort', label: 'Auszahlung in bar' },
                { val: '100%', label: 'Kostenlose Bewertung' },
                { val: 'Fair', label: 'Tagesaktueller Kurs' },
                { val: '+Wert', label: 'Gutschein-Option' },
              ].map((box) => (
                <div
                  key={box.label}
                  className="p-5 text-center"
                  style={{ border: '1px solid rgba(154,120,24,0.3)', background: 'rgba(154,120,24,0.06)' }}
                >
                  <p className="font-serif text-2xl gold-text mb-1">{box.val}</p>
                  <p className="font-sans text-xs text-white/55 tracking-wider">{box.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Labor Diamanten Teaser ───────────────────────── */}
      <section className="py-32" style={{ backgroundColor: 'var(--kj-bg)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            {/* Text */}
            <div>
              <p className="section-subtitle mb-5">Neu im Sortiment</p>
              <h2 className="font-serif text-4xl md:text-5xl font-light leading-tight mb-6" style={{ color: 'var(--kj-text)' }}>
                Labor Diamanten –<br />Ethisch. Strahlend.<br />Erschwinglich.
              </h2>
              <div className="divider-gold mb-8" />
              <p className="font-sans text-sm leading-relaxed mb-5" style={{ color: 'var(--kj-muted)' }}>
                Labor Diamanten sind <strong style={{ color: 'var(--kj-text)' }}>physisch und chemisch identisch</strong> mit
                natürlichen Diamanten – mit demselben brillanten Feuer und derselben Härte. Der einzige Unterschied:
                Sie entstehen unter kontrollierten Bedingungen, ohne Bergbau und ohne ethische Kompromisse.
              </p>
              <p className="font-sans text-sm leading-relaxed mb-5" style={{ color: 'var(--kj-muted)' }}>
                Bei KenJu Juwelier erhalten Sie Labor Diamanten mit offiziellem Zertifikat – eingesetzt
                in hochwertige Verlobungsringe, Trauringe, Anhänger und Ohrringe in 585 Gelbgold oder Weißgold.
              </p>
              <p className="font-sans text-sm leading-relaxed mb-10" style={{ color: 'var(--kj-muted)' }}>
                Gleiche Brillanz. Fairer Preis. Reines Gewissen.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/labordiamanten" className="btn-dark">Mehr erfahren</Link>
                <Link href="/#termin" className="btn-outline-gold">Beratung anfragen</Link>
              </div>
            </div>
            {/* Image with caption */}
            <div className="relative h-96 lg:h-[520px] overflow-hidden gold-border">
              <Image
                src="/images/brillant-set-luxus.jpg"
                alt="Labor Diamanten KenJu Juwelier Bielefeld"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                style={{ opacity: 0.85 }}
              />
              <div className="img-caption">
                <p className="font-serif text-xl text-white">Identische Brillanz</p>
                <p className="font-sans text-xs mt-1 text-white/55">Ethisch · Zertifiziert · 585 Gold & Weißgold</p>
              </div>
              <div
                className="absolute top-5 left-5 px-4 py-3"
                style={{ background: 'rgba(8,8,15,0.82)', border: '1px solid rgba(154,120,24,0.4)' }}
              >
                <p className="font-sans text-xs tracking-widest uppercase" style={{ color: 'var(--kj-gold)' }}>Labor Diamanten</p>
                <p className="font-serif text-sm text-white mt-0.5">Mit Zertifikat</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Termin ───────────────────────────────────────── */}
      <section className="py-32" style={{ backgroundColor: 'var(--kj-surface)' }} id="termin">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="section-subtitle mb-5">Persönliche Beratung</p>
            <h2 className="font-serif text-4xl md:text-5xl font-light mb-6" style={{ color: 'var(--kj-text)' }}>
              Termin vereinbaren
            </h2>
            <div className="divider-gold mx-auto mb-6" />
            <p className="font-sans text-sm max-w-md mx-auto leading-relaxed" style={{ color: 'var(--kj-muted)' }}>
              Vereinbaren Sie ein kostenloses und unverbindliches Beratungsgespräch in unserem Geschäft –
              Bahnhofstraße 28, 33602 Bielefeld.
            </p>
          </div>
          <div className="p-8 md:p-12" style={{ background: 'var(--kj-card)', border: '1px solid var(--kj-border)' }}>
            <AppointmentForm />
          </div>
        </div>
      </section>

      {/* ── Map ──────────────────────────────────────────── */}
      <GoogleMap />

      {/* ── SEO Content ──────────────────────────────────── */}
      <section className="py-20" style={{ backgroundColor: 'var(--kj-surface)', borderTop: '1px solid var(--kj-border)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                title: 'Juwelier – Qualität ohne Kompromisse',
                text: 'Als Juwelier in Bielefeld bieten wir exklusiven Schmuck in 585 Gelbgold, Weißgold und Roségold. Von Brillantringen und Verlobungsringen über Creolen bis zu individuellen Sonderwünschen – bei KenJu Juwelier wird jeder Traum Wirklichkeit. Unser erfahrenes Team begleitet Sie persönlich und sorgt für ein Ergebnis, das Sie begeistert.',
              },
              {
                title: 'Labor Diamanten & Brillantringe',
                text: 'Unser Spezialgebiet sind Brillantringe und Labor Diamant Schmuck für Verlobung und Hochzeit. Ethisch erzeugte Diamanten mit identischer Brillanz – in 585 Gold oder Weißgold, nach Ihrem Wunsch handgefertigt. Jeder Labor Diamant ist zertifiziert und garantiert konfliktfrei. Besuchen Sie uns für eine unverbindliche Beratung.',
              },
              {
                title: 'Goldankauf – Fair, Transparent & Sofort',
                text: 'Sie möchten Gold, Schmuck oder Edelmetalle verkaufen? Wir bieten Ihnen den tagesaktuellen Marktpreis. Keine versteckten Gebühren, sofortige Auszahlung. Bei Altgold-Verkauf profitieren Sie zusätzlich von unserer exklusiven Gutschein-Option – und erhalten beim Neukauf von Schmuck einen attraktiven Mehrwert.',
              },
            ].map((block) => (
              <div key={block.title}>
                <h3 className="font-serif text-2xl mb-5" style={{ color: 'var(--kj-text)' }}>{block.title}</h3>
                <div className="divider-gold mb-5" />
                <p className="font-sans text-sm leading-relaxed" style={{ color: 'var(--kj-muted)' }}>{block.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
