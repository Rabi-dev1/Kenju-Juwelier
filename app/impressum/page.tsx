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
              Bielefeld<br />
              Nordrhein-Westfalen<br />
              Deutschland
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-kenju-cream mb-3">Kontakt</h2>
            <p>
              Telefon: <a href="tel:+4917663284312" className="text-kenju-gold hover:underline">+49 176 63284312</a><br />
              E-Mail: <a href="mailto:info@kenju-juwelier.de" className="text-kenju-gold hover:underline">info@kenju-juwelier.de</a>
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
              Berufsordnung der Goldschmiede<br />
              Meisterbetrieb nach §1 HwO
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
