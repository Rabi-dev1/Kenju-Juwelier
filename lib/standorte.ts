/**
 * Zentrale NAP-Daten (Name, Address, Phone) beider Standorte.
 * Jede Seite bezieht Adresse, Telefon und Öffnungszeiten von hier,
 * damit Angaben nirgends auseinanderlaufen (wichtig für Local SEO).
 */

export const EMAIL = 'info@kenju.de';

export const standorte = [
  {
    id: 'bielefeld',
    stadt: 'Bielefeld',
    strasse: 'Bahnhofstraße 28',
    zusatz: 'Loom Bielefeld · 1. OG',
    plz: '33602',
    telefon: { label: '0521 77075050', href: 'tel:+4952177075050' },
    mobil: { label: '0176 63284312', href: 'tel:+4917663284312' },
    zeiten: [
      { tage: 'Mo – Fr', zeit: '10:00 – 19:30 Uhr' },
      { tage: 'Samstag', zeit: '10:00 – 19:30 Uhr' },
    ],
    zeitenKurz: 'Mo – Sa: 10:00 – 19:30 Uhr',
    maps: 'https://www.google.com/maps/search/?api=1&query=KenJu+Juwelier+Bahnhofstra%C3%9Fe+28+33602+Bielefeld',
  },
  {
    id: 'lippstadt',
    stadt: 'Lippstadt',
    strasse: 'Lange Straße 29',
    zusatz: null,
    plz: '59555',
    telefon: { label: '02941 9889114', href: 'tel:+4929419889114' },
    mobil: { label: '0151 57610382', href: 'tel:+4915157610382' },
    zeiten: [
      { tage: 'Mo – Fr', zeit: '10:00 – 18:00 Uhr' },
      { tage: 'Samstag', zeit: '10:00 – 16:00 Uhr' },
    ],
    zeitenKurz: 'Mo – Fr: 10:00 – 18:00 · Sa: 10:00 – 16:00 Uhr',
    maps: 'https://www.google.com/maps/search/?api=1&query=KenJu+Juwelier+Lange+Stra%C3%9Fe+29+59555+Lippstadt',
  },
] as const;

/** Kurzform für Fließtexte: "Bahnhofstraße 28 (Loom, 1. OG), 33602 Bielefeld · Lange Straße 29, 59555 Lippstadt" */
export const adressenInline =
  'Bahnhofstraße 28 (Loom, 1. OG), 33602 Bielefeld · Lange Straße 29, 59555 Lippstadt';
