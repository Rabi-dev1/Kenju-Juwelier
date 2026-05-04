import type { Metadata } from 'next';
import { Cormorant_Garamond, Inter } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CookieBanner from '@/components/CookieBanner';
import FloatingButtons from '@/components/FloatingButtons';
import './globals.css';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://kenju-juwelier.de'),
  title: {
    default: 'KenJu Juwelier Bielefeld – Brillantringe, Goldankauf & Exklusiver Schmuck',
    template: '%s | KenJu Juwelier Bielefeld',
  },
  description:
    'KenJu Juwelier Bielefeld – Ihr Spezialist für Brillantringe, Goldankauf, Kreuze, Ringe, Creolen, Armreifen und Halsketten. Meisterbetrieb mit höchster Qualität.',
  keywords: [
    'Juwelier Bielefeld', 'Goldankauf Bielefeld', 'Brillantringe', 'Verlobungsringe',
    'Goldschmuck', 'Kreuze Gold', 'Creolen Juwelier', 'Armreifen Gold',
    'Halsketten Platin', 'Ohrstecker Brillant', 'KenJu', 'Schmuck Bielefeld',
  ],
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    url: 'https://kenju-juwelier.de',
    siteName: 'KenJu Juwelier',
    title: 'KenJu Juwelier Bielefeld – Brillantringe & Goldankauf',
    description: 'Exklusiver Schmuck, Brillantringe und fairer Goldankauf in Bielefeld. Meisterbetrieb mit Tradition.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'KenJu Juwelier Bielefeld – Brillantringe & Goldankauf',
    description: 'Exklusiver Schmuck, Brillantringe und fairer Goldankauf in Bielefeld. Meisterbetrieb mit Tradition.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
  alternates: { canonical: 'https://kenju-juwelier.de' },
};

const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'KenJu Juwelier',
  url: 'https://kenju-juwelier.de',
  potentialAction: {
    '@type': 'SearchAction',
    target: 'https://kenju-juwelier.de/?s={search_term_string}',
    'query-input': 'required name=search_term_string',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'JewelryStore',
  name: 'KenJu Juwelier',
  description: 'Exklusiver Juwelier in Bielefeld – Brillantringe, Goldankauf, Kreuze, Ringe, Creolen und mehr.',
  url: 'https://kenju-juwelier.de',
  telephone: '+4917663284312',
  email: 'info@kenju-juwelier.de',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Bahnhofstraße 28',
    addressLocality: 'Bielefeld',
    postalCode: '33602',
    addressRegion: 'NRW',
    addressCountry: 'DE',
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
  sameAs: [
    'https://www.instagram.com/juwelier_kenju/',
    'https://www.facebook.com/people/Juwelier-KenJu-Bielefeld/100029105127054/',
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" className={`${cormorant.variable} ${inter.variable}`}>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingButtons />
        <CookieBanner />
      </body>
    </html>
  );
}
