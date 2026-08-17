/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [],
  },
  compress: true,
  poweredByHeader: false,
  async redirects() {
    return [
      // Alte Einzelkategorien sind in der Sammelseite /ringe (Schmuck) aufgegangen
      { source: '/ohrringe',      destination: '/ringe', permanent: true },
      { source: '/halsketten',    destination: '/ringe', permanent: true },
      { source: '/armreifen',     destination: '/ringe', permanent: true },
      { source: '/ohrstecker',    destination: '/ringe', permanent: true },
      { source: '/creolen',       destination: '/ringe', permanent: true },
      { source: '/brillantringe', destination: '/ringe', permanent: true },
      { source: '/kreuze',        destination: '/ringe', permanent: true },
      { source: '/schmuck',       destination: '/ringe', permanent: true },
    ];
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'X-XSS-Protection', value: '1; mode=block' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
