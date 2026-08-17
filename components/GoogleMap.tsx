import { standorte, EMAIL } from '@/lib/standorte';

const PinIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const ClockIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const PhoneIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
);

export default function GoogleMap() {
  return (
    <section className="py-24" style={{ backgroundColor: 'var(--kj-bg)' }} id="standort">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16">
        <div className="text-center mb-14">
          <p className="section-subtitle mb-4">Unsere Standorte</p>
          <h2 className="section-title mb-4">Besuchen Sie uns</h2>
          <div className="divider-gold mx-auto mb-5" />
          <p className="font-sans text-sm max-w-lg mx-auto" style={{ color: 'var(--kj-muted)' }}>
            Zwei Standorte in Nordrhein-Westfalen – persönliche Beratung in Bielefeld und Lippstadt.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {standorte.map((s) => (
            <div
              key={s.id}
              className="flex flex-col gap-6 p-8"
              style={{ background: 'var(--kj-card)', border: '1px solid var(--kj-border)' }}
            >
              <div>
                <h3 className="font-serif text-3xl font-light mb-1" style={{ color: 'var(--kj-gold)' }}>
                  {s.stadt}
                </h3>
                <div className="divider-gold" style={{ marginLeft: 0 }} />
              </div>

              {/* Adresse – klickbar, öffnet Google Maps */}
              <div className="flex gap-4">
                <span className="shrink-0 mt-0.5" style={{ color: 'var(--kj-gold)' }}><PinIcon /></span>
                <div>
                  <p className="font-sans text-xs tracking-widest uppercase mb-1.5" style={{ color: 'var(--kj-gold)', opacity: 0.8 }}>
                    Adresse
                  </p>
                  <a
                    href={s.maps}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-sans text-sm leading-relaxed inline-flex flex-col transition-opacity hover:opacity-75"
                    style={{ color: 'var(--kj-text)' }}
                  >
                    {s.zusatz && <span style={{ color: 'var(--kj-gold)' }}>{s.zusatz}</span>}
                    <span>{s.strasse}</span>
                    <span>{s.plz} {s.stadt}</span>
                    <span className="font-sans text-xs mt-1.5 tracking-wide" style={{ color: 'var(--kj-gold)' }}>
                      In Google Maps öffnen →
                    </span>
                  </a>
                </div>
              </div>

              {/* Öffnungszeiten */}
              <div className="flex gap-4">
                <span className="shrink-0 mt-0.5" style={{ color: 'var(--kj-gold)' }}><ClockIcon /></span>
                <div>
                  <p className="font-sans text-xs tracking-widest uppercase mb-1.5" style={{ color: 'var(--kj-gold)', opacity: 0.8 }}>
                    Öffnungszeiten
                  </p>
                  <table className="font-sans text-sm" style={{ color: 'var(--kj-text)' }}>
                    <tbody>
                      {s.zeiten.map((z) => (
                        <tr key={z.tage}>
                          <td className="pr-4 py-0.5 align-top" style={{ color: 'var(--kj-muted)' }}>{z.tage}</td>
                          <td className="py-0.5">{z.zeit}</td>
                        </tr>
                      ))}
                      <tr>
                        <td className="pr-4 py-0.5" style={{ color: 'var(--kj-muted)' }}>Sonntag</td>
                        <td className="py-0.5" style={{ color: 'var(--kj-muted)' }}>Geschlossen</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Telefon */}
              <div className="flex gap-4">
                <span className="shrink-0 mt-0.5" style={{ color: 'var(--kj-gold)' }}><PhoneIcon /></span>
                <div>
                  <p className="font-sans text-xs tracking-widest uppercase mb-1.5" style={{ color: 'var(--kj-gold)', opacity: 0.8 }}>
                    Telefon
                  </p>
                  <p className="font-sans text-sm leading-relaxed" style={{ color: 'var(--kj-text)' }}>
                    <a href={s.telefon.href} className="transition-opacity hover:opacity-75">{s.telefon.label}</a><br />
                    <span style={{ color: 'var(--kj-muted)' }}>Mobil: </span>
                    <a href={s.mobil.href} className="transition-opacity hover:opacity-75">{s.mobil.label}</a>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center font-sans text-sm mt-10" style={{ color: 'var(--kj-muted)' }}>
          Oder schreiben Sie uns:{' '}
          <a href={`mailto:${EMAIL}`} style={{ color: 'var(--kj-gold)' }} className="transition-opacity hover:opacity-75">
            {EMAIL}
          </a>
        </p>
      </div>
    </section>
  );
}
