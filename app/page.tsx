import Image from 'next/image';
import Link from 'next/link';
import Reviews from '@/components/Reviews';
import GoogleMap from '@/components/GoogleMap';
import AppointmentForm from '@/components/AppointmentForm';

const categories = [
  { title: 'Kreuze',        desc: 'Goldene und silberne Kreuze in höchster Handwerkskunst.',      href: '/kreuze',        img: '/images/image_0.png', icon: '✝' },
  { title: 'Ringe',         desc: 'Eheringe, Siegelringe und individuelle Unikate.',               href: '/ringe',         img: '/images/image_1.png', icon: '◉' },
  { title: 'Ohrstecker',    desc: 'Brillant- und Edelsteinohrstecker für jeden Anlass.',           href: '/ohrstecker',    img: '/images/image_2.png', icon: '◆' },
  { title: 'Creolen',       desc: 'Klassische und moderne Creolen in Gold und Platin.',            href: '/creolen',       img: '/images/image_3.png', icon: '◯' },
  { title: 'Armreifen',     desc: 'Elegante Armreifen und Armbänder in exklusiver Qualität.',     href: '/armreifen',     img: '/images/image_4.png', icon: '⌀' },
  { title: 'Halsketten',    desc: 'Feine Ketten in Gold, Silber und Platin.',                      href: '/halsketten',    img: '/images/image_5.png', icon: '◎' },
  { title: 'Brillantringe', desc: 'Verlobungs- und Brillantringe nach Ihrem Wunsch.',             href: '/brillantringe', img: '/images/image_6.png', icon: '◈' },
  { title: 'Goldankauf',    desc: 'Fairer und transparenter Goldankauf zum Tagespreis.',           href: '/goldankauf',    img: '/images/image_8.png', icon: '⬡' },
];

export default function HomePage() {
  return (
    <>
      {/* ── Hero ───────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-hero-gradient" />

        {/* Background pattern */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, #C9A84C 1px, transparent 0)`,
            backgroundSize: '48px 48px',
          }}
        />

        {/* Decorative gold lines */}
        <div className="absolute top-1/4 left-0 w-64 h-px bg-gradient-to-r from-transparent via-kenju-gold/40 to-transparent" />
        <div className="absolute bottom-1/4 right-0 w-64 h-px bg-gradient-to-l from-transparent via-kenju-gold/40 to-transparent" />

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="section-subtitle mb-8 animate-fade-in">Meisterbetrieb · Berlin</p>

          <h1 className="font-serif text-7xl sm:text-8xl md:text-9xl font-light leading-none mb-4 animate-slide-up">
            <span className="gold-text">Ken</span>
            <span className="text-kenju-cream">Ju</span>
          </h1>

          <p className="font-serif text-xl md:text-2xl font-light text-kenju-platinum tracking-widest mb-8 animate-fade-in">
            Juwelier
          </p>

          <div className="divider-gold mx-auto mb-10" />

          <p className="font-sans text-kenju-muted text-lg max-w-xl mx-auto leading-relaxed mb-12 animate-fade-in">
            Exklusiver Schmuck, Brillantringe &amp; fairer Goldankauf. Handgefertigt in Berlin
            mit Leidenschaft für Perfektion.
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

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <div className="w-px h-12 bg-gradient-to-b from-kenju-gold/60 to-transparent" />
        </div>
      </section>

      {/* ── USPs ───────────────────────────────────────────── */}
      <section className="py-16 bg-kenju-navy border-y border-kenju-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: '⋆', label: 'Meisterbetrieb', desc: 'Zertifizierte Goldschmiede-Qualität' },
              { icon: '◈', label: 'Brillant-Expertise', desc: 'IGI- & GIA-zertifizierte Steine' },
              { icon: '⬡', label: 'Goldankauf', desc: 'Fairer Tagespreis, sofort Bargeld' },
              { icon: '◯', label: 'Seit 2005', desc: 'Über 20 Jahre Erfahrung in Berlin' },
            ].map((item) => (
              <div key={item.label} className="flex flex-col items-center text-center gap-3">
                <span className="text-3xl gold-text">{item.icon}</span>
                <h3 className="font-serif text-xl text-kenju-cream">{item.label}</h3>
                <p className="font-sans text-sm text-kenju-muted">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Categories ─────────────────────────────────────── */}
      <section className="py-24 bg-kenju-black" id="kollektionen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="section-subtitle mb-4">Unsere Kollektionen</p>
            <h2 className="section-title mb-4">Entdecken Sie Schmuck der Extraklasse</h2>
            <div className="divider-gold mx-auto" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((cat) => (
              <Link key={cat.href} href={cat.href} className="group">
                <article className="card-dark overflow-hidden">
                  <div className="relative h-52 category-img-placeholder overflow-hidden">
                    <Image
                      src={cat.img}
                      alt={cat.title}
                      fill
                      className="object-cover opacity-70 group-hover:opacity-90 group-hover:scale-105 transition-all duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-kenju-black/80 to-transparent" />
                    <span className="absolute top-4 right-4 text-2xl opacity-60">{cat.icon}</span>
                  </div>
                  <div className="p-5">
                    <h3 className="font-serif text-xl text-kenju-cream mb-2 group-hover:text-kenju-gold transition-colors">
                      {cat.title}
                    </h3>
                    <p className="font-sans text-xs text-kenju-muted leading-relaxed mb-4">{cat.desc}</p>
                    <span className="font-sans text-xs tracking-widest uppercase text-kenju-gold group-hover:gap-3 flex items-center gap-2 transition-all">
                      Mehr entdecken <span>→</span>
                    </span>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── About / Story ──────────────────────────────────── */}
      <section className="py-24 bg-kenju-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative h-96 lg:h-[500px] gold-border overflow-hidden">
              <Image
                src="/images/image_7.png"
                alt="KenJu Juwelier Werkstatt"
                fill
                className="object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-kenju-black/30 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-kenju-black/80 backdrop-blur border border-kenju-gold/30 p-4">
                  <p className="font-serif text-xl gold-text">Meisterbetrieb seit 2005</p>
                  <p className="font-sans text-xs text-kenju-muted mt-1">Berlin Mitte</p>
                </div>
              </div>
            </div>
            <div>
              <p className="section-subtitle mb-4">Über KenJu</p>
              <h2 className="section-title mb-4">Schmuck mit Geschichte &amp; Seele</h2>
              <div className="divider-gold mb-8" />
              <div className="space-y-5 font-sans text-kenju-muted leading-relaxed">
                <p>
                  Seit 2005 steht KenJu Juwelier in Berlin für handgefertigten Schmuck der
                  höchsten Güte. Was als kleines Familiengeschäft begann, ist heute eine der
                  renommiertesten Adressen für Brillantringe, Goldankauf und exklusiven
                  Schmuck in der Hauptstadt.
                </p>
                <p>
                  Unser Team zertifizierter Goldschmiede kombiniert jahrhundertealtes
                  Handwerk mit modernem Design. Jedes Stück – ob Verlobungsring, Kreuz
                  oder Armreifen – entsteht mit Liebe zum Detail und dem Anspruch an
                  Perfektion.
                </p>
                <p>
                  Beim <strong className="text-kenju-gold">Goldankauf</strong> setzen wir auf
                  Fairness: Sie erhalten den tagesaktuellen Marktpreis – transparent und
                  sofort in bar.
                </p>
              </div>
              <div className="mt-8 flex gap-4">
                <Link href="/#termin" className="btn-gold">Beratungsgespräch</Link>
                <Link href="/goldankauf" className="btn-outline-gold">Goldankauf</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Goldankauf Banner ─────────────────────────────── */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gold-gradient opacity-10" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="section-subtitle mb-4">Jetzt verkaufen</p>
          <h2 className="font-serif text-4xl md:text-5xl text-kenju-cream mb-4">
            Fairer <span className="gold-text">Goldankauf</span> in Berlin
          </h2>
          <p className="font-sans text-kenju-muted max-w-lg mx-auto mb-8">
            Wir kaufen Gold, Silber, Platin, Uhren und Brillanten zum tagesaktuellen
            Marktpreis. Sofortige Auszahlung in bar – diskret und professionell.
          </p>
          <Link href="/goldankauf" className="btn-gold inline-flex">
            Mehr zum Goldankauf
          </Link>
        </div>
      </section>

      {/* ── Reviews ───────────────────────────────────────── */}
      <Reviews />

      {/* ── Appointment ───────────────────────────────────── */}
      <section className="py-24 bg-kenju-black" id="termin">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="section-subtitle mb-4">Persönliche Beratung</p>
            <h2 className="section-title mb-4">Termin vereinbaren</h2>
            <div className="divider-gold mx-auto mb-6" />
            <p className="font-sans text-kenju-muted max-w-md mx-auto">
              Vereinbaren Sie ein kostenloses Beratungsgespräch in unserem Atelier in Berlin Mitte.
            </p>
          </div>
          <div className="card-dark p-8 md:p-12">
            <AppointmentForm />
          </div>
        </div>
      </section>

      {/* ── Map ───────────────────────────────────────────── */}
      <GoogleMap />

      {/* ── SEO Content ───────────────────────────────────── */}
      <section className="py-16 bg-kenju-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Juwelier Berlin – Qualität ohne Kompromisse',
                text: 'Als führender Juwelier in Berlin bieten wir Ihnen exklusiven Schmuck, handgefertigt von zertifizierten Goldschmieden. Von Brillantringen über Creolen bis hin zu individuellen Sonderwünschen – bei KenJu wird jeder Traum Wirklichkeit.',
              },
              {
                title: 'Brillantringe nach Maß',
                text: 'Unser Spezialgebiet sind Brillantringe für Verlobung und Hochzeit. IGI- und GIA-zertifizierte Diamanten, gefasst in Gold oder Platin nach Ihrem Wunsch. Lassen Sie sich von unseren Experten individuell beraten.',
              },
              {
                title: 'Goldankauf Berlin – Fair & Transparent',
                text: 'Sie möchten Gold, Schmuck oder Edelmetalle verkaufen? Wir bieten Ihnen den tagesaktuellen Marktpreis für Ihr Gold. Keine versteckten Gebühren, sofortige Auszahlung. KenJu ist Berlins vertrauenswürdigste Adresse für Goldankauf.',
              },
            ].map((block) => (
              <div key={block.title}>
                <h3 className="font-serif text-2xl text-kenju-cream mb-4">{block.title}</h3>
                <div className="divider-gold mb-4" />
                <p className="font-sans text-sm text-kenju-muted leading-relaxed">{block.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
