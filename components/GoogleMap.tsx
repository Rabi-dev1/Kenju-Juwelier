'use client';

const standorte = [
  {
    name: 'Bielefeld',
    adresse: (
      <>
        Loom Bielefeld · 1. OG<br />
        Bahnhofstraße 28<br />
        33602 Bielefeld
      </>
    ),
    zeiten: 'Mo – Sa: 09:30 – 20:00 Uhr',
    telefon: { label: '0521 77075050', href: 'tel:+4952177075050' },
    mobil: { label: '0176 63284312', href: 'tel:+4917663284312' },
  },
  {
    name: 'Lippstadt',
    adresse: (
      <>
        Lange Straße 29<br />
        59555 Lippstadt
      </>
    ),
    zeiten: (
      <>
        Mo – Fr: 10:00 – 18:00 Uhr<br />
        Sa: 10:00 – 16:00 Uhr
      </>
    ),
    telefon: { label: '02941 9889114', href: 'tel:+4929419889114' },
    mobil: { label: '0176 63284312', href: 'tel:+4917663284312' },
  },
];

export default function GoogleMap() {
  return (
    <section className="py-24" style={{ backgroundColor: 'var(--kj-bg)' }} id="standort">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="section-subtitle mb-4">Unsere Standorte</p>
          <h2 className="section-title mb-4">Besuchen Sie uns</h2>
          <div className="divider-gold mx-auto" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Standort-Karten */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {standorte.map((s) => (
              <div
                key={s.name}
                className="p-7 flex flex-col gap-5"
                style={{ background: 'var(--kj-card)', border: '1px solid var(--kj-border)' }}
              >
                <h3 className="font-serif text-2xl font-light" style={{ color: 'var(--kj-gold)' }}>
                  {s.name}
                </h3>

                <div>
                  <p className="font-sans text-xs tracking-widest uppercase mb-1.5" style={{ color: 'var(--kj-gold)', opacity: 0.8 }}>Adresse</p>
                  <p className="font-sans text-sm leading-relaxed" style={{ color: 'var(--kj-text)' }}>{s.adresse}</p>
                </div>

                <div>
                  <p className="font-sans text-xs tracking-widest uppercase mb-1.5" style={{ color: 'var(--kj-gold)', opacity: 0.8 }}>Öffnungszeiten</p>
                  <p className="font-sans text-sm leading-relaxed" style={{ color: 'var(--kj-text)' }}>{s.zeiten}</p>
                </div>

                <div>
                  <p className="font-sans text-xs tracking-widest uppercase mb-1.5" style={{ color: 'var(--kj-gold)', opacity: 0.8 }}>Telefon</p>
                  <p className="font-sans text-sm leading-relaxed" style={{ color: 'var(--kj-text)' }}>
                    <a href={s.telefon.href} className="transition-opacity hover:opacity-80">{s.telefon.label}</a><br />
                    <a href={s.mobil.href} className="transition-opacity hover:opacity-80">Mobil: {s.mobil.label}</a>
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Map (Bielefeld) */}
          <div className="relative h-80 lg:h-full lg:min-h-[420px] overflow-hidden gold-border">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2446.8!2d8.5333!3d52.0253!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47ba3d8b2e2e2e2f%3A0x0!2sBahnhofstra%C3%9Fe%2028%2C%2033602%20Bielefeld!5e0!3m2!1sde!2sde!4v1680000000000!5m2!1sde!2sde"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '320px' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="KenJu Juwelier Standort Bielefeld – Loom, Bahnhofstraße 28, 33602 Bielefeld"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
