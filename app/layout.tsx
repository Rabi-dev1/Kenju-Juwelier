import type { Metadata } from 'next';
import { Cormorant_Garamond, Inter } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CookieBanner from '@/components/CookieBanner';
import FloatingButtons from '@/components/FloatingButtons';
import MobileCtaBar from '@/components/MobileCtaBar';
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
    default: 'Juwelier in Bielefeld | Trauringe, Schmuck & Goldankauf | KenJu',
    template: '%s | KenJu Juwelier Bielefeld',
  },
  description:
    'KenJu Juwelier – Trauringe, Brillantringe, Labor Diamanten und fairer Goldankauf in Bielefeld und Lippstadt. Persönliche Beratung im Loom Bielefeld, 1. OG.',
  keywords: [
    'Juwelier Bielefeld', 'Goldankauf Bielefeld', 'Brillantringe Bielefeld', 'Verlobungsringe Bielefeld',
    'Goldschmuck', 'Labor Diamanten Bielefeld', 'Trauringe Bielefeld', 'Ohrringe Gold',
    'Halsketten Gold', 'Armreifen Gold', 'KenJu Juwelier', 'Schmuck Bielefeld',
    'Edelmetallankauf', 'Silberankauf', 'Goldpreis', 'Juwelier Bahnhofstrasse Bielefeld',
  ],
  authors: [{ name: 'KenJu Juwelier', url: 'https://kenju-juwelier.de' }],
  creator: 'KenJu Juwelier Bielefeld',
  publisher: 'KenJu Juwelier',
  category: 'Juweliere & Goldschmiede',
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    url: 'https://kenju-juwelier.de',
    siteName: 'KenJu Juwelier',
    title: 'Juwelier in Bielefeld | Trauringe, Schmuck & Goldankauf | KenJu',
    description: 'Trauringe, Brillantringe und fairer Goldankauf in Bielefeld und Lippstadt. Persönliche Beratung, handgefertigte Qualität seit über 10 Jahren.',
    images: [
      {
        url: '/images/hero-ladenfront.jpg',
        width: 1200,
        height: 630,
        alt: 'KenJu Juwelier – Schmuck, Trauringe & Goldankauf in Bielefeld und Lippstadt',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Juwelier in Bielefeld | Trauringe, Schmuck & Goldankauf | KenJu',
    description: 'Trauringe, Brillantringe und fairer Goldankauf in Bielefeld und Lippstadt. 10+ Jahre Erfahrung · 5,0 ★ Google · Loom Bielefeld, 1. OG.',
    images: ['/images/hero-ladenfront.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  alternates: { canonical: 'https://kenju-juwelier.de' },
  verification: {
    google: 'kenju-google-site-verification',
  },
  other: {
    'geo.region': 'DE-NW',
    'geo.placename': 'Bielefeld',
    'geo.position': '52.0302;8.5325',
    'ICBM': '52.0302, 8.5325',
    'DC.title': 'KenJu Juwelier Bielefeld',
    'DC.description': 'Exklusiver Juwelier in Bielefeld – Brillantringe, Goldankauf, Labor Diamanten',
    'DC.language': 'de',
    'DC.coverage': 'Bielefeld, NRW, Deutschland',
  },
};

const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'KenJu Juwelier',
  url: 'https://kenju-juwelier.de',
  inLanguage: 'de-DE',
  potentialAction: {
    '@type': 'SearchAction',
    target: 'https://kenju-juwelier.de/?s={search_term_string}',
    'query-input': 'required name=search_term_string',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'JewelryStore',
  '@id': 'https://kenju-juwelier.de/#jewelry-store',
  name: 'KenJu Juwelier',
  legalName: 'KenJu Juwelier',
  description: 'Exklusiver Juwelier in Bielefeld und Lippstadt – Brillantringe, Labor Diamanten, Goldankauf, Anhänger, Armbänder, Trauringe und mehr. Im Loom Bielefeld, 1. OG.',
  url: 'https://kenju-juwelier.de',
  logo: 'https://kenju-juwelier.de/favicon.svg',
  image: 'https://kenju-juwelier.de/images/og-image.jpg',
  telephone: '+4952177075050',
  email: 'info@kenju.de',
  foundingDate: '2010',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Bahnhofstraße 28',
    addressLocality: 'Bielefeld',
    postalCode: '33602',
    addressRegion: 'Nordrhein-Westfalen',
    addressCountry: 'DE',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 52.0302,
    longitude: 8.5325,
  },
  hasMap: 'https://maps.google.com/?q=KenJu+Juwelier+Bahnhofstra%C3%9Fe+28+Bielefeld',
  openingHoursSpecification: [
    { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'], opens: '10:00', closes: '19:30' },
  ],
  department: [
    {
      '@type': 'JewelryStore',
      name: 'KenJu Juwelier Lippstadt',
      telephone: '+4929419889114',
      email: 'info@kenju.de',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Lange Straße 29',
        addressLocality: 'Lippstadt',
        postalCode: '59555',
        addressCountry: 'DE',
      },
      openingHoursSpecification: [
        { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '10:00', closes: '18:00' },
        { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Saturday', opens: '10:00', closes: '16:00' },
      ],
    },
  ],
  priceRange: '€€€',
  currenciesAccepted: 'EUR',
  paymentAccepted: 'Cash, Credit Card, Debit Card',
  areaServed: [
    { '@type': 'City', name: 'Bielefeld' },
    { '@type': 'AdministrativeArea', name: 'Nordrhein-Westfalen' },
  ],
  knowsLanguage: ['de', 'en', 'ar', 'tr'],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5.0',
    reviewCount: '120',
    bestRating: '5',
    worstRating: '1',
  },
  sameAs: [
    'https://www.instagram.com/juwelier_kenju/',
    'https://www.facebook.com/people/Juwelier-KenJu-Bielefeld/100029105127054/',
    'https://www.google.com/maps/search/KenJu+Juwelier+Bielefeld',
  ],
  makesOffer: [
    {
      '@type': 'Offer',
      itemOffered: { '@type': 'Product', name: 'Brillantringe & Verlobungsringe', category: 'Jewelry' },
    },
    {
      '@type': 'Offer',
      itemOffered: { '@type': 'Product', name: 'Trauringe & Eheringe', category: 'Jewelry' },
    },
    {
      '@type': 'Offer',
      itemOffered: { '@type': 'Product', name: 'Labor Diamanten', category: 'Gemstones' },
    },
    {
      '@type': 'Offer',
      itemOffered: { '@type': 'Service', name: 'Goldankauf & Edelmetallankauf', serviceType: 'Precious Metal Buying' },
    },
    {
      '@type': 'Offer',
      itemOffered: { '@type': 'Service', name: 'Uhrenservice & Batteriewechsel', serviceType: 'Watch Repair' },
    },
  ],
};

/* Prevents FOUC – defaults to LIGHT; dark only if user explicitly chose it */
const themeScript = `(function(){try{if(localStorage.getItem('kenju-theme')==='dark'){document.documentElement.classList.add('dark');}}catch(e){}})();`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" className={`${cormorant.variable} ${inter.variable}`}>
      <head>
        {/* eslint-disable-next-line @next/next/no-sync-scripts */}
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="manifest" href="/manifest.webmanifest" />
        <meta name="theme-color" content="#9A7818" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="KenJu Juwelier" />
      </head>
      <body>
        <Header />
        {/* pb-16 on mobile to avoid content hiding behind MobileCtaBar */}
        <main className="pb-16 lg:pb-0">{children}</main>
        <Footer />
        <FloatingButtons />
        <MobileCtaBar />
        <CookieBanner />
      </body>
    </html>
  );
}
