import type { MetadataRoute } from 'next';

const BASE = 'https://kenju-juwelier.de';

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    { url: BASE,                        priority: 1.0, changeFrequency: 'weekly'  as const },
    { url: `${BASE}/goldankauf`,         priority: 0.9, changeFrequency: 'weekly'  as const },
    { url: `${BASE}/ringe`,              priority: 0.9, changeFrequency: 'weekly'  as const },
    { url: `${BASE}/labordiamanten`,     priority: 0.9, changeFrequency: 'monthly' as const },
    { url: `${BASE}/trauringe`,          priority: 0.9, changeFrequency: 'monthly' as const },
    { url: `${BASE}/ohrringe`,           priority: 0.8, changeFrequency: 'monthly' as const },
    { url: `${BASE}/halsketten`,         priority: 0.8, changeFrequency: 'monthly' as const },
    { url: `${BASE}/armreifen`,          priority: 0.8, changeFrequency: 'monthly' as const },
    { url: `${BASE}/uhren`,              priority: 0.8, changeFrequency: 'monthly' as const },
    { url: `${BASE}/impressum`,          priority: 0.1, changeFrequency: 'yearly'  as const },
    { url: `${BASE}/datenschutz`,        priority: 0.1, changeFrequency: 'yearly'  as const },
    { url: `${BASE}/agb`,                priority: 0.1, changeFrequency: 'yearly'  as const },
  ];

  return pages.map((page) => ({
    url: page.url,
    lastModified: new Date(),
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));
}
