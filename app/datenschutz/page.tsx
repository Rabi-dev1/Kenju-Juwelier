import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Datenschutzerklärung | KenJu Juwelier Bielefeld',
  robots: { index: false },
};

export default function DatenschutzPage() {
  return (
    <div className="min-h-screen pt-32 pb-24 bg-kenju-black">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="section-subtitle mb-3">Rechtliches</p>
        <h1 className="font-serif text-5xl text-kenju-cream mb-4">Datenschutzerklärung</h1>
        <div className="divider-gold mb-10" />

        <div className="space-y-8 font-sans text-sm text-kenju-muted leading-relaxed">
          <section>
            <h2 className="font-serif text-2xl text-kenju-cream mb-3">1. Datenschutz auf einen Blick</h2>
            <h3 className="font-sans text-base text-kenju-platinum mb-2">Allgemeine Hinweise</h3>
            <p>
              Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert,
              wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert
              werden können.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-kenju-cream mb-3">2. Verantwortlicher</h2>
            <p>
              KenJu Juwelier<br />
              Bahnhofstraße 28 (Loom, 1. OG), 33602 Bielefeld<br />
              Zweigstelle: Lange Straße 29, 59555 Lippstadt<br />
              Telefon: 0521 77075050 · Mobil: 0176 63284312<br />
              E-Mail: info@kenju.de
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-kenju-cream mb-3">3. Datenerfassung auf dieser Website</h2>
            <h3 className="font-sans text-base text-kenju-platinum mb-2">Cookies</h3>
            <p>
              Unsere Website verwendet Cookies. Das sind kleine Textdateien, die Ihr Webbrowser auf Ihrem Endgerät speichert.
              Cookies helfen uns dabei, unser Angebot nutzerfreundlicher, effektiver und sicherer zu machen.
            </p>
            <p className="mt-3">
              Einige Cookies sind „Session-Cookies." Solche Cookies werden nach Ende Ihrer Browser-Sitzung von selbst gelöscht.
              Hingegen bleiben andere Cookies auf Ihrem Endgerät bestehen, bis Sie diese selbst löschen.
            </p>

            <h3 className="font-sans text-base text-kenju-platinum mb-2 mt-6">Terminanfrage-Formular</h3>
            <p>
              Wenn Sie unser Terminformular ausfüllen, werden die eingegebenen Daten nicht auf dieser Website gespeichert.
              Beim Absenden wird lediglich eine vorbereitete Nachricht in WhatsApp bzw. in Ihrem E-Mail-Programm geöffnet.
              Der Versand erfolgt erst durch Ihre ausdrückliche Bestätigung in der jeweiligen App.
            </p>

            <h3 className="font-sans text-base text-kenju-platinum mb-2 mt-6">WhatsApp</h3>
            <p>
              Für die Übermittlung von Terminanfragen bieten wir WhatsApp an (Anbieter: WhatsApp Ireland Limited,
              4 Grand Canal Square, Dublin 2, Irland). Wenn Sie uns über WhatsApp kontaktieren, gelten zusätzlich die
              Datenschutzbestimmungen von WhatsApp. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b bzw. f DSGVO.
              Sie können uns alternativ jederzeit per E-Mail oder telefonisch erreichen.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-kenju-cream mb-3">4. Ihre Rechte</h2>
            <p>Sie haben jederzeit das Recht:</p>
            <ul className="list-disc list-inside space-y-1 mt-2">
              <li>unentgeltlich Auskunft über Ihre bei uns gespeicherten personenbezogenen Daten zu erhalten</li>
              <li>eine Berichtigung oder Löschung zu verlangen</li>
              <li>die Verarbeitung einzuschränken</li>
              <li>der Verarbeitung zu widersprechen</li>
              <li>Datenübertragbarkeit zu verlangen</li>
            </ul>
            <p className="mt-3">
              Außerdem haben Sie das Recht, sich bei einer Datenschutz-Aufsichtsbehörde über die Verarbeitung Ihrer
              personenbezogenen Daten durch uns zu beschweren.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-kenju-cream mb-3">5. Google Maps</h2>
            <p>
              Auf dieser Website ist kein Kartendienst eingebettet. Unsere Adressen sind lediglich als Link zu Google Maps
              hinterlegt. Erst wenn Sie einen dieser Links aktiv anklicken, werden Sie zu Google weitergeleitet und es können
              Daten an die Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland übertragen werden.
              Ohne Klick auf den Link findet keine Datenübertragung an Google statt.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-kenju-cream mb-3">6. Kontakt</h2>
            <p>
              Bei Fragen zur Erhebung, Verarbeitung oder Nutzung Ihrer personenbezogenen Daten wenden Sie sich an:<br />
              <a href="mailto:info@kenju.de" className="text-kenju-gold hover:underline">
                info@kenju.de
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
