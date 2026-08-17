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

          <section>
            <h2 className="font-serif text-2xl text-kenju-cream mb-3">Handelsregister</h2>
            <p>
              Registergericht: Amtsgericht Bielefeld<br />
              Registernummer: HRB 123456 B
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-kenju-cream mb-3">Umsatzsteuer-ID</h2>
            <p>Umsatzsteuer-Identifikationsnummer gemäß § 27a UStG:<br />DE 123 456 789</p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-kenju-cream mb-3">Geschäftsführung</h2>
            <p>[Name des Geschäftsführers]</p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-kenju-cream mb-3">Berufsrechtliche Regelungen</h2>
            <p>
              Goldschmiede-Innung Ostwestfalen-Lippe<br />
              Berufsordnung der Goldschmiede
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
