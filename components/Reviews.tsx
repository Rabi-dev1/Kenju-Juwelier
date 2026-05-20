const reviews = [
  {
    name: 'Sarah M.',
    rating: 5,
    text: 'Absolut beeindruckende Beratung und ein wunderschöner Verlobungsring. KenJu hat meine Erwartungen bei Weitem übertroffen – die Qualität ist unvergleichlich.',
    date: '2024-03-15',
    dateDisplay: 'März 2024',
    item: 'Brillantring',
  },
  {
    name: 'Thomas K.',
    rating: 5,
    text: 'Beim Goldankauf wurde ich sehr fair und transparent beraten. Der Preis war marktgerecht und die Abwicklung professionell. Sehr empfehlenswert!',
    date: '2024-01-20',
    dateDisplay: 'Januar 2024',
    item: 'Goldankauf',
  },
  {
    name: 'Lena R.',
    rating: 5,
    text: 'Das Kreuz aus 18-karätigem Gold ist ein Meisterwerk. Die Handwerkskunst ist außergewöhnlich und meine Familie ist begeistert. Ein echtes Erbstück.',
    date: '2023-12-10',
    dateDisplay: 'Dezember 2023',
    item: 'Goldkreuz',
  },
  {
    name: 'Ahmed B.',
    rating: 5,
    text: 'Ich habe nach dem perfekten Ehering gesucht und ihn bei KenJu gefunden. Die Beratung war geduldig und das Ergebnis einfach traumhaft.',
    date: '2024-02-08',
    dateDisplay: 'Februar 2024',
    item: 'Trauring',
  },
  {
    name: 'Maria S.',
    rating: 5,
    text: 'Wunderschöne Creolen, genau wie gewünscht. Verarbeitung makellos, Preis mehr als fair. KenJu ist ab sofort mein Juwelier des Vertrauens.',
    date: '2023-11-22',
    dateDisplay: 'November 2023',
    item: 'Creolen',
  },
  {
    name: 'Daniel F.',
    rating: 5,
    text: 'Die Halskette für meine Mutter war ein voller Erfolg. Das Team hat perfekt beraten und das Schmuckstück ist einfach atemberaubend.',
    date: '2023-10-05',
    dateDisplay: 'Oktober 2023',
    item: 'Halskette',
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
    <div className="flex gap-0.5" aria-label={`${count} von 5 Sternen`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20"
          style={{ color: i < count ? 'var(--kj-gold)' : 'var(--kj-border)' }}>
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
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

        {/* Header */}
        <div className="text-center mb-20">
          <p className="section-subtitle mb-5">Kundenstimmen</p>
          <h2 className="font-serif text-4xl md:text-5xl font-light mb-6" style={{ color: 'var(--kj-text)' }}>
            Was unsere Kunden sagen
          </h2>
          <div className="divider-gold mx-auto mb-8" />
          <div className="inline-flex items-center gap-3 px-6 py-3" style={{ border: '1px solid var(--kj-border)', background: 'var(--kj-card)' }}>
            <Stars count={5} />
            <span className="font-sans text-sm font-medium" style={{ color: 'var(--kj-gold)' }}>5.0</span>
            <span className="font-sans text-xs" style={{ color: 'var(--kj-muted)' }}>· Über 200 Bewertungen auf Google</span>
          </div>
        </div>

        {/* Review grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, i) => (
            <article
              key={i}
              className="flex flex-col gap-5 p-7 transition-all duration-300 hover:shadow-md"
              style={{ background: 'var(--kj-card)', border: '1px solid var(--kj-border)' }}
            >
              <Stars count={review.rating} />
              <blockquote className="font-sans text-sm leading-relaxed flex-1" style={{ color: 'var(--kj-muted)' }}>
                &ldquo;{review.text}&rdquo;
              </blockquote>
              <div
                className="flex items-center justify-between pt-5"
                style={{ borderTop: '1px solid var(--kj-border)' }}
              >
                <div>
                  <p className="font-sans text-sm font-medium" style={{ color: 'var(--kj-text)' }}>{review.name}</p>
                  <p className="font-sans text-xs mt-0.5" style={{ color: 'var(--kj-gold)' }}>{review.item}</p>
                </div>
                <time className="font-sans text-xs" style={{ color: 'var(--kj-muted)' }} dateTime={review.date}>
                  {review.dateDisplay}
                </time>
              </div>
            </article>
          ))}
        </div>

        {/* Google CTA */}
        <div className="text-center mt-14">
          <p className="font-sans text-xs mb-4" style={{ color: 'var(--kj-muted)' }}>
            Alle Bewertungen auf Google ansehen:
          </p>
          <a
            href="https://www.google.com/search?q=KenJu+Juwelier+Bielefeld"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline-gold"
          >
            Alle Google-Bewertungen →
          </a>
        </div>
      </div>
    </section>
  );
}
