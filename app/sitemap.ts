import type { MetadataRoute } from 'next';

const BASE = 'https://kenju-juwelier.de';
const LAST_UPDATE = new Date('2026-07-04');

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: BASE,                    lastModified: LAST_UPDATE, changeFrequency: 'weekly',  priority: 1.0 },
    { url: `${BASE}/goldankauf`,    lastModified: LAST_UPDATE, changeFrequency: 'weekly',  priority: 0.95 },
    { url: `${BASE}/ringe`,         lastModified: LAST_UPDATE, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/trauringe`,     lastModified: LAST_UPDATE, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/uhren`,         lastModified: LAST_UPDATE, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${BASE}/service`,       lastModified: LAST_UPDATE, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${BASE}/labordiamanten`, lastModified: LAST_UPDATE, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/ohrringe`,      lastModified: LAST_UPDATE, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE}/halsketten`,    lastModified: LAST_UPDATE, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE}/armreifen`,     lastModified: LAST_UPDATE, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${BASE}/impressum`,     lastModified: LAST_UPDATE, changeFrequency: 'yearly',  priority: 0.1 },
    { url: `${BASE}/datenschutz`,   lastModified: LAST_UPDATE, changeFrequency: 'yearly',  priority: 0.1 },
    { url: `${BASE}/agb`,           lastModified: LAST_UPDATE, changeFrequency: 'yearly',  priority: 0.1 },
  ];
}
