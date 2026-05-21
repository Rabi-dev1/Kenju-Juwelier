import type { MetadataRoute } from 'next';

const BASE = 'https://kenju-juwelier.de';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: BASE,
      lastModified: new Date('2026-05-20'),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${BASE}/goldankauf`,
      lastModified: new Date('2026-05-15'),
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    {
      url: `${BASE}/ringe`,
      lastModified: new Date('2026-04-10'),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${BASE}/labordiamanten`,
      lastModified: new Date('2026-04-01'),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${BASE}/trauringe`,
      lastModified: new Date('2026-03-20'),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${BASE}/ohrringe`,
      lastModified: new Date('2026-03-01'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE}/halsketten`,
      lastModified: new Date('2026-03-01'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE}/armreifen`,
      lastModified: new Date('2026-03-01'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE}/uhren`,
      lastModified: new Date('2026-02-15'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE}/service`,
      lastModified: new Date('2026-02-01'),
      changeFrequency: 'monthly',
      priority: 0.75,
    },
    {
      url: `${BASE}/impressum`,
      lastModified: new Date('2025-01-01'),
      changeFrequency: 'yearly',
      priority: 0.1,
    },
    {
      url: `${BASE}/datenschutz`,
      lastModified: new Date('2025-01-01'),
      changeFrequency: 'yearly',
      priority: 0.1,
    },
    {
      url: `${BASE}/agb`,
      lastModified: new Date('2025-01-01'),
      changeFrequency: 'yearly',
      priority: 0.1,
    },
  ];
}
