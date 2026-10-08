import type { Metadata } from 'next';
import { EMAIL } from '@/lib/standorte';

export const metadata: Metadata = {
  title: 'Datenschutzerklärung | KenJu Juwelier Bielefeld & Lippstadt',
  robots: { index: false },
};

export default function DatenschutzPage() {
  return (
    <div className="min-h-screen pt-32 pb-24" style={{ backgroundColor: 'var(--kj-bg)' }}>
      <div className="max-w-3xl mx-auto px-6 sm:px-8 lg:px-8">
        <p className="section-subtitle mb-3">Rechtliches</p>
        <h1
          className="font-serif font-light mb-4"
          style={{ color: 'var(--kj-text)', fontSize: 'clamp(2rem, 6vw, 3rem)', lineHeight: 1.15 }}
        >
          Datenschutzerklärung
        </h1>
        <div className="divider-gold mb-10" style={{ marginLeft: 0 }} />

        <div className="space-y-8 font-sans text-sm leading-relaxed" style={{ color: 'var(--kj-muted)' }}>

          <section>
            <h2 className="font-serif text-2xl mb-3" style={{ color: 'var(--kj-text)' }}>
              1. Datenschutz auf einen Blick
            </h2>
            <p>
              Die folgenden Hinweise geben einen Überblick darüber, was mit Ihren personenbezogenen Daten passiert,
              wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich
              identifiziert werden können.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl mb-3" style={{ color: 'var(--kj-text)' }}>
              2. Verantwortlicher
            </h2>
            <p>
              Verantwortlich für die Datenverarbeitung auf dieser Website ist:
            </p>
            <p className="mt-3">
              <strong style={{ color: 'var(--kj-text)' }}>Juwelier KenJu</strong><br />
              Inhaber: Kenan Gülünay<br />
              Bahnhofstraße 28 (Loom, 1. OG), 33602 Bielefeld<br />
              Zweigstelle: Lange Straße 29, 59555 Lippstadt<br />
              Telefon:{' '}
              <a href="tel:+4952177075050" style={{ color: 'var(--kj-gold)' }} className="hover:underline">
                0521 77075050
              </a>
              <br />
              E-Mail:{' '}
              <a href={`mailto:${EMAIL}`} style={{ color: 'var(--kj-gold)' }} className="hover:underline">
                {EMAIL}
              </a>
            </p>
            <p className="mt-3">
              Verantwortlicher ist die natürliche oder juristische Person, die allein oder gemeinsam mit anderen über
              die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten entscheidet.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl mb-3" style={{ color: 'var(--kj-text)' }}>
              3. Datenerfassung auf dieser Website
            </h2>

            <h3 className="font-sans text-base mb-2" style={{ color: 'var(--kj-text)' }}>Server-Log-Dateien</h3>
            <p>
              Der Provider dieser Seiten erhebt und speichert automatisch Informationen in sogenannten
              Server-Log-Dateien, die Ihr Browser automatisch übermittelt (Browsertyp und -version, verwendetes
              Betriebssystem, Referrer-URL, Hostname des zugreifenden Rechners, Uhrzeit der Serveranfrage,
              IP-Adresse). Diese Daten werden nicht mit anderen Datenquellen zusammengeführt. Die Erfassung
              erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO zur technisch fehlerfreien Darstellung und
              Optimierung der Website.
            </p>

            <h3 className="font-sans text-base mb-2 mt-6" style={{ color: 'var(--kj-text)' }}>
              Cookies und lokale Speicherung
            </h3>
            <p>
              Diese Website setzt <strong style={{ color: 'var(--kj-text)' }}>keine Cookies</strong> und verwendet
              keinerlei Tracking-, Analyse- oder Werbedienste. Es findet keine Auswertung Ihres Nutzungsverhaltens statt.
            </p>
            <p className="mt-3">
              Lediglich zwei technisch notwendige Einträge werden im lokalen Speicher Ihres Browsers
              („localStorage&quot;) abgelegt: Ihre Auswahl zwischen heller und dunkler Darstellung sowie die
              Information, dass Sie den Hinweis zur Datenverarbeitung bereits gesehen haben. Diese Angaben verbleiben
              ausschließlich auf Ihrem Endgerät, werden nicht an uns übertragen und können jederzeit über die
              Einstellungen Ihres Browsers gelöscht werden. Rechtsgrundlage ist § 25 Abs. 2 Nr. 2 TTDSG.
            </p>

            <h3 className="font-sans text-base mb-2 mt-6" style={{ color: 'var(--kj-text)' }}>Schriftarten</h3>
            <p>
              Zur einheitlichen Darstellung verwenden wir Schriftarten, die direkt von unserem Server geladen werden.
              Eine Verbindung zu Servern von Google oder anderen Anbietern findet dabei nicht statt.
            </p>

            <h3 className="font-sans text-base mb-2 mt-6" style={{ color: 'var(--kj-text)' }}>Edelmetall-Preisrechner</h3>
            <p>
              Für den Preisrechner rufen wir tagesaktuelle Edelmetallkurse ab. Die Abfrage erfolgt ausschließlich über
              unseren eigenen Server – Ihr Browser baut dabei keine Verbindung zu Drittanbietern auf und es werden
              keine personenbezogenen Daten übermittelt. Die von Ihnen eingegebenen Gewichtsangaben werden nicht
              gespeichert.
            </p>

            <h3 className="font-sans text-base mb-2 mt-6" style={{ color: 'var(--kj-text)' }}>
              Terminanfrage-Formular
            </h3>
            <p>
              Wenn Sie unser Terminformular ausfüllen, werden die eingegebenen Daten nicht auf dieser Website
              gespeichert und nicht an unseren Server übertragen. Beim Absenden wird lediglich eine vorbereitete
              Nachricht in WhatsApp bzw. in Ihrem E-Mail-Programm geöffnet. Der Versand erfolgt erst durch Ihre
              ausdrückliche Bestätigung in der jeweiligen App. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO
              (Durchführung vorvertraglicher Maßnahmen).
            </p>

            <h3 className="font-sans text-base mb-2 mt-6" style={{ color: 'var(--kj-text)' }}>WhatsApp</h3>
            <p>
              Für die Übermittlung von Terminanfragen bieten wir WhatsApp an. Anbieter ist die WhatsApp Ireland
              Limited, 4 Grand Canal Square, Grand Canal Harbour, Dublin 2, Irland. Wenn Sie uns über WhatsApp
              kontaktieren, gelten zusätzlich die Datenschutzbestimmungen von WhatsApp. Ihre Daten werden dabei
              gegebenenfalls auch außerhalb der Europäischen Union verarbeitet. Sie können uns alternativ jederzeit
              per E-Mail oder telefonisch erreichen.
            </p>

            <h3 className="font-sans text-base mb-2 mt-6" style={{ color: 'var(--kj-text)' }}>
              Anfrage per E-Mail oder Telefon
            </h3>
            <p>
              Wenn Sie uns per E-Mail oder Telefon kontaktieren, wird Ihre Anfrage inklusive aller daraus
              hervorgehenden personenbezogenen Daten zum Zwecke der Bearbeitung Ihres Anliegens bei uns gespeichert
              und verarbeitet. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl mb-3" style={{ color: 'var(--kj-text)' }}>
              4. Datenverarbeitung beim Ankauf von Edelmetallen
            </h2>
            <p>
              Beim An- und Verkauf von Edelmetallen sind wir gesetzlich verpflichtet, Ihre Identität anhand eines
              gültigen Personalausweises oder Reisepasses zu überprüfen und die Daten aufzuzeichnen. Rechtsgrundlage
              ist Art. 6 Abs. 1 lit. c DSGVO in Verbindung mit den Vorgaben des Geldwäschegesetzes (GwG). Diese Daten
              werden entsprechend den gesetzlichen Aufbewahrungsfristen gespeichert und ausschließlich zu diesem
              Zweck verwendet.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl mb-3" style={{ color: 'var(--kj-text)' }}>5. Hosting</h2>
            <p>
              Diese Website wird gehostet von der <strong style={{ color: 'var(--kj-text)' }}>Vercel Inc.</strong>,
              340 S Lemon Ave #4133, Walnut, CA 91789, USA. Beim Aufruf unserer Website werden technische Daten wie
              Ihre IP-Adresse auf den Servern des Anbieters verarbeitet. Der Anbieter verarbeitet diese Daten
              ausschließlich zur Erfüllung seiner Leistungspflichten und nach unseren Weisungen. Rechtsgrundlage ist
              Art. 6 Abs. 1 lit. f DSGVO im Interesse einer sicheren und effizienten Bereitstellung unseres
              Onlineangebots.
            </p>
            <p className="mt-3">
              Die Datenverarbeitung kann dabei auch in den USA erfolgen. Grundlage der Übermittlung sind
              Standardvertragsklauseln der EU-Kommission gemäß Art. 46 Abs. 2 lit. c DSGVO sowie die Zertifizierung
              des Anbieters unter dem EU-US Data Privacy Framework. Wir haben mit dem Anbieter einen Vertrag zur
              Auftragsverarbeitung nach Art. 28 DSGVO geschlossen.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl mb-3" style={{ color: 'var(--kj-text)' }}>6. Google Maps</h2>
            <p>
              Auf dieser Website ist kein Kartendienst eingebettet. Unsere Adressen sind lediglich als Link zu Google
              Maps hinterlegt. Erst wenn Sie einen dieser Links aktiv anklicken, werden Sie zu Google weitergeleitet
              und es können Daten an die Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland
              übertragen werden. Ohne Klick auf den Link findet keine Datenübertragung an Google statt.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl mb-3" style={{ color: 'var(--kj-text)' }}>
              7. Social-Media-Profile
            </h2>
            <p>
              Im Fußbereich unserer Website verlinken wir auf unsere Profile bei Instagram und Facebook. Es handelt
              sich um einfache Textlinks – es werden keine Inhalte dieser Netzwerke eingebunden und beim bloßen
              Aufruf unserer Website keine Daten an die Betreiber übertragen. Erst wenn Sie einen dieser Links aktiv
              anklicken, gelangen Sie auf die Seiten der jeweiligen Anbieter, für die deren eigene
              Datenschutzbestimmungen gelten.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl mb-3" style={{ color: 'var(--kj-text)' }}>8. Speicherdauer</h2>
            <p>
              Soweit in dieser Erklärung keine speziellere Speicherdauer genannt wurde, verbleiben Ihre
              personenbezogenen Daten bei uns, bis der Zweck für die Datenverarbeitung entfällt. Wenn Sie ein
              berechtigtes Löschersuchen geltend machen oder eine Einwilligung widerrufen, werden Ihre Daten
              gelöscht, sofern wir keine anderen rechtlich zulässigen Gründe für die Speicherung haben – etwa
              handels- oder steuerrechtliche Aufbewahrungsfristen von 6 bzw. 10 Jahren oder Aufzeichnungspflichten
              nach dem Geldwäschegesetz.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl mb-3" style={{ color: 'var(--kj-text)' }}>
              9. Widerspruchsrecht nach Art. 21 DSGVO
            </h2>
            <p>
              Wenn die Datenverarbeitung auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO erfolgt, haben Sie jederzeit
              das Recht, aus Gründen, die sich aus Ihrer besonderen Situation ergeben, gegen die Verarbeitung Ihrer
              personenbezogenen Daten Widerspruch einzulegen. Wir verarbeiten die betreffenden Daten dann nicht mehr,
              es sei denn, wir können zwingende schutzwürdige Gründe für die Verarbeitung nachweisen, die Ihre
              Interessen, Rechte und Freiheiten überwiegen.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl mb-3" style={{ color: 'var(--kj-text)' }}>10. Ihre Rechte</h2>
            <p>Sie haben jederzeit das Recht:</p>
            <ul className="list-disc list-inside space-y-1 mt-2">
              <li>unentgeltlich Auskunft über Ihre bei uns gespeicherten personenbezogenen Daten zu erhalten</li>
              <li>eine Berichtigung oder Löschung dieser Daten zu verlangen</li>
              <li>die Verarbeitung einschränken zu lassen</li>
              <li>der Verarbeitung zu widersprechen</li>
              <li>Datenübertragbarkeit zu verlangen</li>
              <li>eine erteilte Einwilligung jederzeit zu widerrufen</li>
            </ul>
            <p className="mt-3">
              Außerdem haben Sie das Recht, sich bei einer Datenschutz-Aufsichtsbehörde über die Verarbeitung Ihrer
              personenbezogenen Daten durch uns zu beschweren. Zuständig ist die Landesbeauftragte für Datenschutz
              und Informationsfreiheit Nordrhein-Westfalen.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl mb-3" style={{ color: 'var(--kj-text)' }}>11. SSL-Verschlüsselung</h2>
            <p>
              Diese Seite nutzt aus Sicherheitsgründen eine SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte
              Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von „http://" auf „https://" wechselt
              und am Schloss-Symbol in Ihrer Browserzeile.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl mb-3" style={{ color: 'var(--kj-text)' }}>12. Kontakt</h2>
            <p>
              Bei Fragen zur Erhebung, Verarbeitung oder Nutzung Ihrer personenbezogenen Daten wenden Sie sich bitte an:{' '}
              <a href={`mailto:${EMAIL}`} style={{ color: 'var(--kj-gold)' }} className="hover:underline">
                {EMAIL}
              </a>
            </p>
          </section>

          <p className="text-xs pt-4" style={{ borderTop: '1px solid var(--kj-border)', opacity: 0.7 }}>
            Stand: August 2026
          </p>
        </div>
      </div>
    </div>
  );
}
