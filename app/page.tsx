import Image from 'next/image';
import Link from 'next/link';
import Reviews from '@/components/Reviews';
import GoogleMap from '@/components/GoogleMap';
import AppointmentForm from '@/components/AppointmentForm';
import JewelryCarousel from '@/components/JewelryCarousel';

const categories = [
  { title: 'Ringe & Brillantringe', desc: 'Goldringe, Verlobungs- und Brillantringe in 585 Gold.',         href: '/ringe',          img: '/images/ringe.jpg' },
  { title: 'Trauringe',             desc: 'Cilor Trauringe – Made in Germany, individuelle Anfertigung.',   href: '/trauringe',       img: '/images/brillantringe.jpg' },
  { title: 'Ohrringe',              desc: 'Ohrstecker und Creolen in 585 Gelbgold.',                        href: '/ohrringe',        img: '/images/ohrstecker.jpg' },
  { title: 'Halsketten & Kreuze',   desc: 'Goldketten mit Anhängern und Kreuzanhänger.',                   href: '/halsketten',      img: '/images/halsketten.jpg' },
  { title: 'Armreifen',             desc: 'Elegante Armreifen und Armbänder in exklusiver Qualität.',       href: '/armreifen',       img: '/images/armreifen.jpg' },
  { title: 'Uhren',                 desc: 'Tommy Hilfiger, Hugo Boss, Police & mehr – Stil am Handgelenk.', href: '/uhren',           img: '/images/creolen.jpg' },
  { title: 'Goldankauf',            desc: 'Fairer und transparenter Goldankauf zum Tagespreis.',            href: '/goldankauf',      img: '/images/goldankauf.jpg' },
  { title: 'Labor Diamanten',       desc: 'Ethisch. Strahlend. Erschwinglich. Diamantschmuck der Zukunft.', href: '/labordiamanten',  img: '/images/brillantringe.jpg' },
];

const whyKenju = [
  { icon: '✓', title: 'Meisterbetrieb',        desc: 'Zertifizierte Goldschmiede-Qualität mit über 20 Jahren Erfahrung.' },
  { icon: '✓', title: 'Faire Preise',           desc: 'Keine versteckten Aufschläge – transparente Preisgestaltung.' },
  { icon: '✓', title: 'Individuelle Beratung',  desc: 'Wir nehmen uns Zeit für Ihre Wünsche – persönlich und kompetent.' },
  { icon: '✓', title: 'Sofortige Auszahlung',   desc: 'Goldankauf zum Tagespreis – sofort in bar, diskret und fair.' },
  { icon: '✓', title: '585 Gold & Brillanten',  desc: 'Gelbgold, Weißgold und Roségold in höchster Legierungsqualität.' },
  { icon: '✓', title: 'Labor Diamanten',        desc: 'Ethisch erzeugte Diamanten – identische Brillanz, fairer Preis.' },
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
            style={{
              background: 'linear-gradient(to bottom, rgba(8,8,15,0.75) 0%, rgba(8,8,15,0.65) 50%, rgba(8,8,15,0.92) 100%)',
            }}
          />
        </div>

        {/* Decorative lines */}
        <div className="absolute top-1/4 left-0 w-48 h-px" style={{ background: 'linear-gradient(to right, transparent, rgba(180,140,40,0.4), transparent)' }} />
        <div className="absolute bottom-1/4 right-0 w-48 h-px" style={{ background: 'linear-gradient(to left, transparent, rgba(180,140,40,0.4), transparent)' }} />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="font-sans text-xs tracking-[0.35em] uppercase mb-8 animate-fade-in" style={{ color: 'var(--kj-gold)' }}>
            Meisterbetrieb · Juwelier · Bielefeld
          </p>

          <h1 className="font-serif text-7xl sm:text-8xl md:text-9xl font-light leading-none mb-4 animate-slide-up text-white">
            <span className="gold-text">Ken</span>Ju
          </h1>

          <p className="font-serif text-xl md:text-2xl font-light tracking-widest mb-8 animate-fade-in text-white/80">
            Juwelier
          </p>

          <div className="divider-gold mx-auto mb-10" />

          <p className="font-sans text-white/70 text-lg max-w-xl mx-auto leading-relaxed mb-12 animate-fade-in">
            Exklusiver Schmuck in 585 Gelbgold, Weißgold &amp; Roségold.
            Brillantringe, Labor Diamanten, Goldankauf und individuelle Anfertigungen.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
            <Link href="/#kollektionen" className="btn-gold">
              Kollektionen entdecken
            </Link>
            <Link href="/#termin" className="btn-outline-gold">
              Termin buchen
            </Link>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <div className="w-px h-12" style={{ background: 'linear-gradient(to bottom, rgba(180,140,40,0.6), transparent)' }} />
        </div>
      </section>

      {/* ── USP Stats ────────────────────────────────────── */}
      <section className="py-14" style={{ backgroundColor: 'var(--kj-surface)', borderTop: '1px solid var(--kj-border)', borderBottom: '1px solid var(--kj-border)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { value: '20+',    label: 'Jahre Erfahrung' },
              { value: '5.000+', label: 'Zufriedene Kunden' },
              { value: '100%',   label: 'Transparenz' },
              { value: 'Sofort', label: 'Bargeld-Auszahlung' },
            ].map((s) => (
              <div key={s.label}>
                <p className="font-serif text-4xl font-light mb-1 gold-text">{s.value}</p>
                <p className="font-sans text-xs tracking-widest uppercase" style={{ color: 'var(--kj-muted)' }}>{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── About / Story ────────────────────────────────── */}
      <section className="py-24" style={{ backgroundColor: 'var(--kj-bg)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative h-96 lg:h-[520px] overflow-hidden gold-border">
              <Image
                src="/images/brillant-set-luxus.jpg"
                alt="KenJu Juwelier Bielefeld – Schmuck & Beratung"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom right, rgba(8,8,15,0.2), transparent)' }} />
              <div className="absolute bottom-0 left-0 right-0 p-6" style={{ background: 'linear-gradient(to top, rgba(8,8,15,0.85), transparent)' }}>
                <p className="font-serif text-xl text-white">Persönlich. Erfahren. Zuverlässig.</p>
                <p className="font-sans text-xs mt-1 text-white/60">Ihr Juwelier des Vertrauens in Bielefeld</p>
              </div>
            </div>

            <div>
              <p className="section-subtitle mb-4">Über KenJu</p>
              <h2 className="section-title mb-4">Schmuck mit Geschichte &amp; Seele</h2>
              <div className="divider-gold mb-8" />
              <div className="space-y-5 font-sans text-sm leading-relaxed" style={{ color: 'var(--kj-muted)' }}>
                <p>
                  Seit über 20 Jahren steht KenJu Juwelier in Bielefeld für handgefertigten Schmuck
                  der höchsten Güte. Ob Ringe, Ohrringe, Kreuzanhänger, Armreifen oder exklusive
                  Brillantringe – unser Sortiment umfasst alles in 585 Gold.
                </p>
                <p>
                  Unser Team zertifizierter Goldschmiede kombiniert jahrhundertealtes Handwerk mit
                  modernem Design. Jedes Stück entsteht mit Liebe zum Detail und dem Anspruch an
                  absolute Perfektion.
                </p>
                <p>
                  Neu im Sortiment: <strong style={{ color: 'var(--kj-gold)' }}>Labor Diamanten</strong> –
                  ethisch erzeugte Diamanten mit identischer Brillanz zu einem fairen Preis. Ideal für
                  Verlobungsringe und besondere Anlässe.
                </p>
              </div>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Link href="/#termin" className="btn-dark">Beratungsgespräch</Link>
                <Link href="/goldankauf" className="btn-outline-gold">Goldankauf</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Reviews ──────────────────────────────────────── */}
      <Reviews />

      {/* ── Warum KenJu ─────────────────────────────────── */}
      <section className="py-24" style={{ backgroundColor: 'var(--kj-bg)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="section-subtitle mb-4">Ihr Vorteil</p>
            <h2 className="section-title mb-4">Warum KenJu Juwelier?</h2>
            <div className="divider-gold mx-auto" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyKenju.map((item) => (
              <div
                key={item.title}
                className="flex gap-4 p-6 transition-all duration-300 hover:shadow-md"
                style={{ background: 'var(--kj-card)', border: '1px solid var(--kj-border)' }}
              >
                <span
                  className="flex-shrink-0 w-8 h-8 flex items-center justify-center font-serif text-lg font-bold mt-0.5"
                  style={{ color: 'var(--kj-gold)' }}
                >
                  {item.icon}
                </span>
                <div>
                  <h3 className="font-serif text-lg mb-1.5" style={{ color: 'var(--kj-text)' }}>{item.title}</h3>
                  <p className="font-sans text-sm leading-relaxed" style={{ color: 'var(--kj-muted)' }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12 flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+4917663284312" className="btn-dark">
              Jetzt anrufen
            </a>
            <Link href="/#termin" className="btn-outline-gold">
              Termin vereinbaren
            </Link>
          </div>
        </div>
      </section>

      {/* ── Jewelry Carousel ─────────────────────────────── */}
      <JewelryCarousel />

      {/* ── Kollektionen ─────────────────────────────────── */}
      <section className="py-24" style={{ backgroundColor: 'var(--kj-surface)' }} id="kollektionen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="section-subtitle mb-4">Unsere Kollektionen</p>
            <h2 className="section-title mb-4">Entdecken Sie Schmuck der Extraklasse</h2>
            <div className="divider-gold mx-auto" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((cat) => (
              <Link key={cat.href} href={cat.href} className="group">
                <article
                  className="overflow-hidden transition-all duration-300 hover:shadow-lg"
                  style={{ background: 'var(--kj-card)', border: '1px solid var(--kj-border)' }}
                >
                  <div className="relative h-52 overflow-hidden category-img-placeholder">
                    <Image
                      src={cat.img}
                      alt={cat.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      style={{ opacity: 0.85 }}
                    />
                    <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(8,8,15,0.7), transparent)' }} />
                  </div>
                  <div className="p-5">
                    <h3
                      className="font-serif text-xl mb-2 transition-colors"
                      style={{ color: 'var(--kj-text)' }}
                    >
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
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/goldankauf.jpg"
            alt="Goldankauf Bielefeld – KenJu Juwelier"
            fill
            sizes="100vw"
            className="object-cover"
            style={{ opacity: 0.25 }}
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(8,8,15,0.95), rgba(8,8,15,0.7), rgba(8,8,15,0.95))' }} />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="section-subtitle mb-4">Jetzt verkaufen</p>
          <h2 className="font-serif text-4xl md:text-5xl mb-4 text-white">
            Fairer <span className="gold-text">Goldankauf</span>
          </h2>
          <p className="font-sans text-white/60 max-w-lg mx-auto mb-8">
            Wir kaufen Gold, Silber, Platin, Uhren und Brillanten zum tagesaktuellen
            Marktpreis. Sofortige Auszahlung in bar – diskret und professionell.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/goldankauf" className="btn-gold inline-flex">
              Mehr zum Goldankauf
            </Link>
            <a href="tel:+4917663284312" className="btn-outline-gold inline-flex" style={{ borderColor: 'rgba(255,255,255,0.4)', color: 'white' }}>
              +49 176 63284312
            </a>
          </div>
        </div>
      </section>

      {/* ── Termin ───────────────────────────────────────── */}
      <section className="py-24" style={{ backgroundColor: 'var(--kj-bg)' }} id="termin">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="section-subtitle mb-4">Persönliche Beratung</p>
            <h2 className="section-title mb-4">Termin vereinbaren</h2>
            <div className="divider-gold mx-auto mb-6" />
            <p className="font-sans text-sm max-w-md mx-auto" style={{ color: 'var(--kj-muted)' }}>
              Vereinbaren Sie ein kostenloses Beratungsgespräch in unserem Geschäft –
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
      <section className="py-16" style={{ backgroundColor: 'var(--kj-surface)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Juwelier – Qualität ohne Kompromisse',
                text: 'Als Juwelier in Bielefeld bieten wir exklusiven Schmuck in 585 Gelbgold, Weißgold und Roségold. Von Brillantringen über Creolen bis zu individuellen Sonderwünschen – bei KenJu wird jeder Traum Wirklichkeit.',
              },
              {
                title: 'Labor Diamanten & Brillantringe',
                text: 'Unser Spezialgebiet sind Brillantringe und Labor Diamant Schmuck für Verlobung und Hochzeit. Ethisch erzeugte Diamanten mit identischer Brillanz – in 585 Gold oder Weißgold, nach Ihrem Wunsch handgefertigt.',
              },
              {
                title: 'Goldankauf – Fair & Transparent',
                text: 'Sie möchten Gold, Schmuck oder Edelmetalle verkaufen? Wir bieten Ihnen den tagesaktuellen Marktpreis. Keine versteckten Gebühren, sofortige Auszahlung. Bei Altgold-Verkauf profitieren Sie zusätzlich von unserer Gutschein-Option.',
              },
            ].map((block) => (
              <div key={block.title}>
                <h3 className="font-serif text-2xl mb-4" style={{ color: 'var(--kj-text)' }}>{block.title}</h3>
                <div className="divider-gold mb-4" />
                <p className="font-sans text-sm leading-relaxed" style={{ color: 'var(--kj-muted)' }}>{block.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
