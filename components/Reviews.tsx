const reviews = [
  {
    name: 'Anna Moshage',
    initials: 'AM',
    rating: 5,
    text: 'Bester Juwelier in Bielefeld. Sehr liebe und kompetente Beratung. Es wird sich sehr viel Zeit genommen und die Auswahl ist sehr gut. Kann ich zu 100% weiterempfehlen.',
    dateRelative: 'vor 2 Monaten',
    date: '2026-05-01',
    item: 'Beratung & Auswahl',
    verified: true,
  },
  {
    name: 'Olga Mierau',
    initials: 'OM',
    rating: 5,
    text: 'Ich bin mit der Bedienung und Beratung sehr zufrieden. Herzlicher Empfang und jede Frage wurde ernst genommen und beraten. Danke.',
    dateRelative: 'vor 3 Monaten',
    date: '2026-04-02',
    item: 'Persönliche Beratung',
    verified: true,
  },
  {
    name: 'Alexander Schäuble',
    initials: 'AS',
    rating: 5,
    text: 'Seriös, sehr freundliches und kompetentes Personal vor Ort. Der Schmuck ist qualitativ perfekt, habe da nie Probleme gehabt. Auf jeden Fall weiterzuempfehlen 👍🏼',
    dateRelative: 'vor 4 Monaten',
    date: '2026-03-05',
    item: 'Schmuckqualität',
    verified: true,
  },
];

const reviewJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'JewelryStore',
  name: 'KenJu Juwelier',
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5.0',
    reviewCount: '133',
    bestRating: '5',
    worstRating: '1',
  },
  review: reviews.map((r) => ({
    '@type': 'Review',
    author: { '@type': 'Person', name: r.name },
    reviewRating: { '@type': 'Rating', ratingValue: r.rating, bestRating: 5 },
    reviewBody: r.text,
    datePublished: r.date,
    name: r.item,
  })),
};

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${count} von 5 Sternen`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className="w-4 h-4"
          fill="currentColor"
          viewBox="0 0 20 20"
          style={{ color: i < count ? '#FBBC05' : 'var(--kj-border)' }}
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

/* Inline Google G logo — no external request */
function GoogleG() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" style={{ flexShrink: 0 }}>
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
    </svg>
  );
}

export default function Reviews() {
  return (
    <section className="py-32" style={{ backgroundColor: 'var(--kj-surface)' }} id="bewertungen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewJsonLd) }} />

      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16">

        {/* Header + prominent Google badge */}
        <div className="text-center mb-20">
          <p className="section-subtitle mb-5">Kundenrezensionen</p>
          <h2 className="section-title mb-6">Was unsere Kunden sagen</h2>
          <div className="divider-gold mx-auto mb-10" />

          {/* Google Rating badge */}
          <a
            href="https://www.google.com/search?q=KenJu+Juwelier+Bielefeld+Bewertungen"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-5 px-8 py-5 transition-all hover:shadow-lg hover:-translate-y-0.5"
            style={{ background: 'var(--kj-card)', border: '1px solid var(--kj-border)' }}
          >
            {/* Google G – large */}
            <svg width="28" height="28" viewBox="0 0 24 24" aria-hidden="true" style={{ flexShrink: 0 }}>
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>

            <div className="text-left">
              <div className="flex items-center gap-2.5 mb-1">
                <Stars count={5} />
                <span className="font-serif text-2xl font-light" style={{ color: 'var(--kj-gold)' }}>5,0</span>
              </div>
              <p className="font-sans text-xs" style={{ color: 'var(--kj-muted)' }}>
                133 Bewertungen zufriedener Kunden auf Google
              </p>
            </div>

            <span className="font-sans text-xs tracking-widest uppercase ml-4 hidden sm:block" style={{ color: 'var(--kj-gold)' }}>
              Alle ansehen →
            </span>
          </a>
        </div>

        {/* 3 Review cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {reviews.map((review, i) => (
            <article
              key={i}
              className="flex flex-col gap-5 p-7 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl"
              style={{ background: 'var(--kj-card)', border: '1px solid var(--kj-border)' }}
            >
              {/* Top: stars + Google badge */}
              <div className="flex items-start justify-between gap-3">
                <Stars count={review.rating} />
                <div
                  className="flex items-center gap-1.5 px-2.5 py-1"
                  style={{ background: 'var(--kj-surface)', border: '1px solid var(--kj-border)' }}
                  title="Verifizierte Google-Bewertung"
                >
                  <GoogleG />
                  <span className="font-sans text-[0.6rem] tracking-wide" style={{ color: 'var(--kj-muted)' }}>
                    Google
                  </span>
                </div>
              </div>

              <blockquote
                className="font-sans text-sm leading-relaxed flex-1"
                style={{ color: 'var(--kj-muted)', fontStyle: 'normal' }}
              >
                &ldquo;{review.text}&rdquo;
              </blockquote>

              {/* Author row */}
              <div className="flex items-center gap-3 pt-5" style={{ borderTop: '1px solid var(--kj-border)' }}>
                {/* Initials avatar */}
                <div
                  className="w-10 h-10 flex-shrink-0 flex items-center justify-center font-sans font-semibold text-sm"
                  style={{
                    background: 'linear-gradient(135deg, var(--kj-gold) 0%, var(--kj-gold-dark) 100%)',
                    color: '#fff',
                  }}
                >
                  {review.initials}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-sans text-sm font-semibold leading-tight" style={{ color: 'var(--kj-text)' }}>
                    {review.name}
                  </p>
                  <p className="font-sans text-[0.68rem] mt-0.5 flex items-center gap-1.5" style={{ color: 'var(--kj-muted)' }}>
                    <span style={{ color: 'var(--kj-gold)' }}>{review.item}</span>
                    <span style={{ opacity: 0.4 }}>·</span>
                    <time dateTime={review.date}>{review.dateRelative}</time>
                  </p>
                </div>
              </div>

              {/* Verified label */}
              <p className="font-sans text-[0.6rem] tracking-wide uppercase flex items-center gap-1.5" style={{ color: 'var(--kj-muted)', opacity: 0.7 }}>
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                  <polyline points="22 4 12 14.01 9 11.01"/>
                </svg>
                Verifizierte Bewertung
              </p>
            </article>
          ))}
        </div>

        {/* CTA below */}
        <div className="text-center mt-12">
          <a
            href="https://www.google.com/search?q=KenJu+Juwelier+Bielefeld+Bewertungen"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline-gold inline-flex items-center gap-2"
          >
            <GoogleG />
            Alle Google-Bewertungen lesen
          </a>
        </div>
      </div>
    </section>
  );
}
