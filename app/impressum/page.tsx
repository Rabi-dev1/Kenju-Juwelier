import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Impressum | KenJu Juwelier Bielefeld',
  robots: { index: false },
};

export default function ImpressumPage() {
  return (
    <div className="min-h-screen pt-32 pb-24 bg-kenju-black">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="section-subtitle mb-3">Rechtliches</p>
        <h1 className="font-serif text-5xl text-kenju-cream mb-4">Impressum</h1>
        <div className="divider-gold mb-10" />

        <div className="space-y-8 font-sans text-sm text-kenju-muted leading-relaxed">
          <section>
            <h2 className="font-serif text-2xl text-kenju-cream mb-3">Angaben gemäß § 5 TMG</h2>
            <p>
              KenJu Juwelier<br />
              Bahnhofstraße 28, Loom 1. OG<br />
              33602 Bielefeld<br />
              Deutschland<br /><br />
              Zweigstelle:<br />
              Lange Straße 29<br />
              59555 Lippstadt
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-kenju-cream mb-3">Kontakt</h2>
            <p>
              <strong className="text-kenju-cream">Bielefeld</strong><br />
              Telefon: <a href="tel:+4952177075050" className="text-kenju-gold hover:underline">0521 77075050</a><br />
              Mobil: <a href="tel:+4917663284312" className="text-kenju-gold hover:underline">0176 63284312</a>
            </p>
            <p className="mt-4">
              <strong className="text-kenju-cream">Lippstadt</strong><br />
              Telefon: <a href="tel:+4929419889114" className="text-kenju-gold hover:underline">02941 9889114</a><br />
              Mobil: <a href="tel:+4915157610382" className="text-kenju-gold hover:underline">0151 57610382</a>
            </p>
            <p className="mt-4">
              E-Mail: <a href="mailto:info@kenju.de" className="text-kenju-gold hover:underline">info@kenju.de</a>
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-kenju-cream mb-3">Öffnungszeiten</h2>
            <p>
              <strong className="text-kenju-cream">Bielefeld:</strong> Mo – Sa 10:00 – 19:30 Uhr<br />
              <strong className="text-kenju-cream">Lippstadt:</strong> Mo – Fr 10:00 – 18:00 Uhr, Sa 10:00 – 16:00 Uhr
            </p>
          </section>

          {/*
            TODO – vom Kunden anfordern und hier einsetzen:
            · Rechtsform (Einzelunternehmen / GbR / GmbH / UG) und vollständiger Firmenname laut Gewerbeanmeldung
            · Inhaber bzw. Geschäftsführer (Vor- und Nachname) – Pflichtangabe
            · Handelsregister + Registernummer (nur falls eingetragen)
            · Umsatzsteuer-ID (DE…) oder Steuernummer
            Erfundene Beispieldaten wurden bewusst entfernt: Falsche Registerangaben
            im Impressum sind abmahnfähig – fehlende Angaben sind das kleinere Risiko.
          */}

          <section>
            <h2 className="font-serif text-2xl text-kenju-cream mb-3">Verantwortlich für den Inhalt</h2>
            <p>Gemäß § 18 Abs. 2 MStV: KenJu Juwelier, Bahnhofstraße 28, 33602 Bielefeld</p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-kenju-cream mb-3">Verbraucherstreitbeilegung</h2>
            <p>
              Wir sind nicht bereit und nicht verpflichtet, an Streitbeilegungsverfahren vor einer
              Verbraucherschlichtungsstelle teilzunehmen (§ 36 VSBG).
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-kenju-cream mb-3">EU-Streitschlichtung</h2>
            <p>
              Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{' '}
              <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer" className="text-kenju-gold hover:underline">
                https://ec.europa.eu/consumers/odr
              </a>
              .<br />
              Unsere E-Mail-Adresse finden Sie oben im Impressum.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-kenju-cream mb-3">Haftung für Inhalte</h2>
            <p>
              Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen
              Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet,
              übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen,
              die auf eine rechtswidrige Tätigkeit hinweisen.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
