import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'KenJu Juwelier Bielefeld',
    short_name: 'KenJu',
    description: 'Exklusiver Juwelier in Bielefeld – Brillantringe, Goldankauf, Labor Diamanten & mehr.',
    start_url: '/',
    display: 'standalone',
    background_color: '#FFFFFF',
    theme_color: '#9A7818',
    orientation: 'portrait',
    lang: 'de',
    categories: ['shopping', 'lifestyle'],
    icons: [
      {
        src: '/favicon.svg',
        sizes: 'any',
        type: 'image/svg+xml',
        purpose: 'any',
      },
    ],
    screenshots: [],
  };
}
