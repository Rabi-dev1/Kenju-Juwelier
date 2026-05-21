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
              Bahnhofstraße 28, 33602 Bielefeld<br />
              Telefon: +49 176 63284312<br />
              E-Mail: info@kenju-juwelier.de
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
              Einige Cookies sind &ldquo;Session-Cookies.&rdquo; Solche Cookies werden nach Ende Ihrer Browser-Sitzung von selbst gelöscht.
              Hingegen bleiben andere Cookies auf Ihrem Endgerät bestehen, bis Sie diese selbst löschen.
            </p>

            <h3 className="font-sans text-base text-kenju-platinum mb-2 mt-6">Kontaktformular</h3>
            <p>
              Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive
              der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen
              bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
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
              Diese Seite nutzt den Kartendienst Google Maps. Anbieter ist die Google Ireland Limited, Gordon House, Barrow Street,
              Dublin 4, Irland. Zur Nutzung der Funktionen von Google Maps ist es notwendig, Ihre IP-Adresse zu speichern.
              Diese Informationen werden in der Regel an einen Server von Google in den USA übertragen und dort gespeichert.
              Der Anbieter dieser Seite hat keinen Einfluss auf diese Datenübertragung.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-kenju-cream mb-3">6. Kontakt</h2>
            <p>
              Bei Fragen zur Erhebung, Verarbeitung oder Nutzung Ihrer personenbezogenen Daten wenden Sie sich an:<br />
              <a href="mailto:datenschutz@kenju-juwelier.de" className="text-kenju-gold hover:underline">
                datenschutz@kenju-juwelier.de
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
