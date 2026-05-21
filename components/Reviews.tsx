const reviews = [
  {
    name: 'Sarah M.',
    initials: 'SM',
    rating: 5,
    text: 'Absolut beeindruckende Beratung und ein wunderschöner Verlobungsring. KenJu hat meine Erwartungen bei Weitem übertroffen – die Qualität ist unvergleichlich.',
    date: '2024-03-15',
    dateDisplay: 'März 2024',
    item: 'Brillantring',
  },
  {
    name: 'Ahmed B.',
    initials: 'AB',
    rating: 5,
    text: 'Ich habe nach dem perfekten Ehering gesucht und ihn bei KenJu gefunden. Die Beratung war geduldig, persönlich und das Ergebnis einfach traumhaft.',
    date: '2024-02-08',
    dateDisplay: 'Februar 2024',
    item: 'Trauring',
  },
  {
    name: 'Lena R.',
    initials: 'LR',
    rating: 5,
    text: 'Das Kreuz aus 18-karätigem Gold ist ein Meisterwerk. Die Handwerkskunst ist außergewöhnlich und meine Familie ist begeistert. Ein echtes Erbstück.',
    date: '2023-12-10',
    dateDisplay: 'Dezember 2023',
    item: 'Goldkreuz 18K',
  },
];

const reviewJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'JewelryStore',
  name: 'KenJu Juwelier',
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5.0',
    reviewCount: '200',
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
    <div className="flex gap-1" aria-label={`${count} von 5 Sternen`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className="w-4 h-4"
          fill="currentColor"
          viewBox="0 0 20 20"
          style={{ color: i < count ? 'var(--kj-gold)' : 'var(--kj-border)' }}
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Reviews() {
  return (
    <section className="py-32" style={{ backgroundColor: 'var(--kj-surface)' }} id="bewertungen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewJsonLd) }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header + prominent Google badge */}
        <div className="text-center mb-20">
          <p className="section-subtitle mb-5">Kundenstimmen</p>
          <h2 className="section-title mb-6">
            Was unsere Kunden sagen
          </h2>
          <div className="divider-gold mx-auto mb-10" />

          {/* Google Rating — prominent */}
          <a
            href="https://www.google.com/search?q=KenJu+Juwelier+Bielefeld"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-4 px-8 py-5 transition-all hover:shadow-lg"
            style={{
              background: 'var(--kj-card)',
              border: '1px solid var(--kj-border)',
            }}
          >
            {/* Google G */}
            <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>

            <div className="text-left">
              <div className="flex items-center gap-2 mb-1">
                <Stars count={5} />
                <span className="font-serif text-2xl font-light" style={{ color: 'var(--kj-gold)' }}>5.0</span>
              </div>
              <p className="font-sans text-sm" style={{ color: 'var(--kj-muted)' }}>
                Über 200 Bewertungen auf Google
              </p>
            </div>

            <span className="font-sans text-xs tracking-widest uppercase ml-2" style={{ color: 'var(--kj-gold)' }}>
              Alle ansehen →
            </span>
          </a>
        </div>

        {/* 3 Review cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, i) => (
            <article
              key={i}
              className="flex flex-col gap-6 p-8 transition-all duration-300"
              style={{ background: 'var(--kj-card)', border: '1px solid var(--kj-border)' }}
            >
              <Stars count={review.rating} />

              <blockquote
                className="font-sans text-base leading-relaxed flex-1"
                style={{ color: 'var(--kj-muted)' }}
              >
                &ldquo;{review.text}&rdquo;
              </blockquote>

              <div className="flex items-center gap-4 pt-6" style={{ borderTop: '1px solid var(--kj-border)' }}>
                {/* Initials avatar */}
                <div
                  className="w-11 h-11 flex-shrink-0 flex items-center justify-center font-sans font-semibold text-sm"
                  style={{
                    background: 'linear-gradient(135deg, var(--kj-gold) 0%, var(--kj-gold-dark) 100%)',
                    color: '#fff',
                  }}
                >
                  {review.initials}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-sans text-sm font-medium" style={{ color: 'var(--kj-text)' }}>
                    {review.name}
                  </p>
                  <p className="font-sans text-xs mt-0.5" style={{ color: 'var(--kj-gold)' }}>
                    {review.item}
                  </p>
                </div>
                <time className="font-sans text-xs shrink-0" style={{ color: 'var(--kj-muted)' }} dateTime={review.date}>
                  {review.dateDisplay}
                </time>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
