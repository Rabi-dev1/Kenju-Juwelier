import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CookieBanner from '@/components/CookieBanner';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://kenju-juwelier.de'),
  title: {
    default: 'KenJu Juwelier Berlin – Brillantringe, Goldankauf & Exklusiver Schmuck',
    template: '%s | KenJu Juwelier Berlin',
  },
  description:
    'KenJu Juwelier Berlin – Ihr Spezialist für Brillantringe, Goldankauf, Kreuze, Ringe, Creolen, Armreifen und Halsketten. Meisterbetrieb mit höchster Qualität.',
  keywords: [
    'Juwelier Berlin', 'Goldankauf Berlin', 'Brillantringe', 'Verlobungsringe',
    'Goldschmuck', 'Kreuze Gold', 'Creolen Juwelier', 'Armreifen Gold',
    'Halsketten Platin', 'Ohrstecker Brillant', 'KenJu', 'Schmuck Berlin',
  ],
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    url: 'https://kenju-juwelier.de',
    siteName: 'KenJu Juwelier',
    title: 'KenJu Juwelier Berlin – Brillantringe & Goldankauf',
    description: 'Exklusiver Schmuck, Brillantringe und fairer Goldankauf in Berlin. Meisterbetrieb mit Tradition.',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'KenJu Juwelier Berlin' }],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
  alternates: { canonical: 'https://kenju-juwelier.de' },
  verification: { google: 'YOUR_GOOGLE_VERIFICATION_CODE' },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'JewelryStore',
  name: 'KenJu Juwelier',
  description: 'Exklusiver Juwelier in Berlin – Brillantringe, Goldankauf, Kreuze, Ringe, Creolen und mehr.',
  url: 'https://kenju-juwelier.de',
  telephone: '+49301234567',
  email: 'info@kenju-juwelier.de',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Musterstraße 12',
    addressLocality: 'Berlin',
    postalCode: '10115',
    addressCountry: 'DE',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 52.5192,
    longitude: 13.4050,
  },
  openingHoursSpecification: [
    { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday'], opens: '10:00', closes: '18:30' },
    { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Saturday'], opens: '10:00', closes: '16:00' },
  ],
  priceRange: '€€€',
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5.0',
    reviewCount: '200',
    bestRating: '5',
  },
  sameAs: [],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
