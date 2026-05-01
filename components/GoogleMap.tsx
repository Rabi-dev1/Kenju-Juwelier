export default function GoogleMap() {
  return (
    <section className="py-24 bg-kenju-black" id="standort">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Info */}
          <div>
            <p className="section-subtitle mb-4">Unser Standort</p>
            <h2 className="section-title mb-4">Besuchen Sie uns</h2>
            <div className="divider-gold mb-8" />

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="shrink-0 w-10 h-10 border border-kenju-gold/40 flex items-center justify-center">
                  <svg className="w-5 h-5 text-kenju-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="font-sans text-xs tracking-widest uppercase text-kenju-gold mb-1">Adresse</p>
                  <p className="font-sans text-sm text-kenju-cream">Musterstraße 12<br />10115 Berlin</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="shrink-0 w-10 h-10 border border-kenju-gold/40 flex items-center justify-center">
                  <svg className="w-5 h-5 text-kenju-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="font-sans text-xs tracking-widest uppercase text-kenju-gold mb-1">Öffnungszeiten</p>
                  <p className="font-sans text-sm text-kenju-cream">
                    Mo – Fr: 10:00 – 18:30 Uhr<br />
                    Sa: 10:00 – 16:00 Uhr<br />
                    So: Geschlossen
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="shrink-0 w-10 h-10 border border-kenju-gold/40 flex items-center justify-center">
                  <svg className="w-5 h-5 text-kenju-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="font-sans text-xs tracking-widest uppercase text-kenju-gold mb-1">Telefon</p>
                  <a href="tel:+49301234567" className="font-sans text-sm text-kenju-cream hover:text-kenju-gold transition-colors">
                    +49 30 123 456 7
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Map embed placeholder – replace src with your Google Maps embed URL */}
          <div className="relative h-80 lg:h-96 gold-border overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2427.847899897673!2d13.404953715783548!3d52.51916637981345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a84e195b6f2a87%3A0xbcfb3f6c51b32a41!2sBerlin%20Mitte!5e0!3m2!1sde!2sde!4v1620000000000!5m2!1sde!2sde"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg)' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="KenJu Juwelier Standort"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
