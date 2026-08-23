import type { Metadata } from 'next';
import { EMAIL } from '@/lib/standorte';

export const metadata: Metadata = {
  title: 'AGB – Allgemeine Geschäftsbedingungen | KenJu Juwelier',
  robots: { index: false },
};

export default function AGBPage() {
  return (
    <div className="min-h-screen pt-32 pb-24" style={{ backgroundColor: 'var(--kj-bg)' }}>
      <div className="max-w-3xl mx-auto px-6 sm:px-8 lg:px-8">
        <p className="section-subtitle mb-3">Rechtliches</p>
        <h1
          className="font-serif font-light mb-4"
          style={{ color: 'var(--kj-text)', fontSize: 'clamp(1.9rem, 6vw, 3rem)', lineHeight: 1.15 }}
        >
          Allgemeine<br className="sm:hidden" /> Geschäftsbedingungen
        </h1>
        <div className="divider-gold mb-10" style={{ marginLeft: 0 }} />

        <div className="space-y-8 font-sans text-sm leading-relaxed" style={{ color: 'var(--kj-muted)' }}>

          <section>
            <h2 className="font-serif text-2xl mb-3" style={{ color: 'var(--kj-text)' }}>§ 1 Geltungsbereich</h2>
            <p>
              Diese Allgemeinen Geschäftsbedingungen gelten für alle Verträge zwischen{' '}
              <strong style={{ color: 'var(--kj-text)' }}>Juwelier KenJu, Inhaber Kenan Gülünay</strong>,
              Bahnhofstraße 28 (Loom, 1. OG), 33602 Bielefeld – Zweigstelle Lange Straße 29, 59555 Lippstadt –
              (nachfolgend „KenJu&quot;) und dem Kunden. Abweichende Bedingungen des Kunden werden nicht anerkannt,
              es sei denn, KenJu stimmt ihrer Geltung ausdrücklich schriftlich zu.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl mb-3" style={{ color: 'var(--kj-text)' }}>§ 2 Vertragsschluss</h2>
            <p>
              Die Präsentation unserer Leistungen und Produkte stellt kein rechtlich verbindliches Angebot dar,
              sondern eine Aufforderung zur Abgabe eines Angebots. Mit der Bestellung bzw. der Terminanfrage gibt der
              Kunde ein verbindliches Angebot ab. KenJu kann dieses Angebot innerhalb von 5 Werktagen durch eine
              ausdrückliche Bestätigung annehmen.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl mb-3" style={{ color: 'var(--kj-text)' }}>§ 3 Preise und Zahlung</h2>
            <p>
              Alle Preise verstehen sich in Euro inklusive der gesetzlichen Mehrwertsteuer. Zahlungen sind sofort und
              ohne Abzug fällig. Bei Anfertigungen nach Maß und Sonderbestellungen ist eine Anzahlung von 50 % des
              vereinbarten Kaufpreises bei Auftragserteilung zu leisten. Der Restbetrag wird bei Übergabe fällig.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl mb-3" style={{ color: 'var(--kj-text)' }}>§ 4 Lieferung und Versand</h2>
            <p>
              Schmuckstücke werden nach Vereinbarung in unseren Geschäften in Bielefeld oder Lippstadt übergeben oder
              auf Wunsch per versichertem Paket versendet. Die Versandkosten werden vor Vertragsschluss mitgeteilt.
              Die Gefahr des zufälligen Untergangs geht bei Verbrauchern erst mit Übergabe der Ware auf den Kunden
              über. Lieferzeiten für Sonderanfertigungen sind individuell und werden bei Auftragserteilung vereinbart.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl mb-3" style={{ color: 'var(--kj-text)' }}>§ 5 Widerrufsrecht</h2>
            <p>
              Verbrauchern steht bei Fernabsatzverträgen – also bei Bestellungen, die ohne persönliche Anwesenheit
              im Ladengeschäft zustande kommen und versendet werden – ein gesetzliches Widerrufsrecht zu.
            </p>

            <h3 className="font-sans text-base mb-2 mt-5" style={{ color: 'var(--kj-text)' }}>Widerrufsbelehrung</h3>
            <p>
              Sie haben das Recht, binnen vierzehn Tagen ohne Angabe von Gründen diesen Vertrag zu widerrufen.
              Die Widerrufsfrist beträgt vierzehn Tage ab dem Tag, an dem Sie oder ein von Ihnen benannter Dritter,
              der nicht der Beförderer ist, die Ware in Besitz genommen haben bzw. hat.
            </p>
            <p className="mt-3">
              Um Ihr Widerrufsrecht auszuüben, müssen Sie uns – Juwelier KenJu, Inhaber Kenan Gülünay,
              Bahnhofstraße 28, 33602 Bielefeld, Telefon 0521 77075050, E-Mail {EMAIL} – mittels einer eindeutigen
              Erklärung (z. B. per Post versandter Brief oder E-Mail) über Ihren Entschluss, diesen Vertrag zu
              widerrufen, informieren. Zur Wahrung der Widerrufsfrist reicht es aus, dass Sie die Mitteilung über die
              Ausübung des Widerrufsrechts vor Ablauf der Widerrufsfrist absenden.
            </p>

            <h3 className="font-sans text-base mb-2 mt-5" style={{ color: 'var(--kj-text)' }}>Folgen des Widerrufs</h3>
            <p>
              Wenn Sie diesen Vertrag widerrufen, haben wir Ihnen alle Zahlungen, die wir von Ihnen erhalten haben,
              einschließlich der Lieferkosten (mit Ausnahme der zusätzlichen Kosten, die sich daraus ergeben, dass Sie
              eine andere Art der Lieferung als die von uns angebotene günstigste Standardlieferung gewählt haben),
              unverzüglich und spätestens binnen vierzehn Tagen ab dem Tag zurückzuzahlen, an dem die Mitteilung über
              Ihren Widerruf dieses Vertrags bei uns eingegangen ist. Wir können die Rückzahlung verweigern, bis wir
              die Waren wieder zurückerhalten haben oder bis Sie den Nachweis erbracht haben, dass Sie die Waren
              zurückgesandt haben, je nachdem, welches der frühere Zeitpunkt ist.
            </p>
            <p className="mt-3">
              Sie tragen die unmittelbaren Kosten der Rücksendung der Waren. Sie müssen für einen etwaigen Wertverlust
              der Waren nur aufkommen, wenn dieser Wertverlust auf einen zur Prüfung der Beschaffenheit, Eigenschaften
              und Funktionsweise der Waren nicht notwendigen Umgang mit ihnen zurückzuführen ist.
            </p>

            <h3 className="font-sans text-base mb-2 mt-5" style={{ color: 'var(--kj-text)' }}>
              Ausschluss des Widerrufsrechts
            </h3>
            <p>
              Das Widerrufsrecht besteht nicht bei Verträgen zur Lieferung von Waren, die nicht vorgefertigt sind und
              für deren Herstellung eine individuelle Auswahl oder Bestimmung durch den Verbraucher maßgeblich ist
              oder die eindeutig auf die persönlichen Bedürfnisse des Verbrauchers zugeschnitten sind – dies betrifft
              insbesondere Sonderanfertigungen und Gravuren. Ebenfalls ausgeschlossen ist das Widerrufsrecht bei
              Waren, deren Preis von Schwankungen auf dem Finanzmarkt abhängt, auf die wir keinen Einfluss haben und
              die innerhalb der Widerrufsfrist auftreten können (§ 312g Abs. 2 Nr. 8 BGB) – dies betrifft
              insbesondere Anlagegold sowie den An- und Verkauf von Edelmetallen.
            </p>
            <p className="mt-3">
              Bei Käufen, die direkt in unseren Ladengeschäften in Bielefeld oder Lippstadt getätigt werden, besteht
              kein gesetzliches Widerrufsrecht.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl mb-3" style={{ color: 'var(--kj-text)' }}>§ 6 Goldankauf</h2>
            <p>
              Beim Goldankauf gilt: Die Bewertung ist kostenlos und unverbindlich. Der endgültige Ankaufspreis wird
              auf Basis des Edelmetallkurses am Tag der Übergabe berechnet. Nach Einigung und Übergabe der Ware ist
              der Ankauf für beide Parteien bindend. Die Auszahlung erfolgt wahlweise in bar oder per
              Echtzeitüberweisung. Für den Ankauf ist ein gültiger Personalausweis oder Reisepass vorzulegen; wir sind
              gesetzlich zur Identitätsprüfung und Aufzeichnung verpflichtet. Der Kunde versichert, dass er
              Eigentümer der angebotenen Ware und uneingeschränkt verfügungsberechtigt ist.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl mb-3" style={{ color: 'var(--kj-text)' }}>§ 7 Einkaufsgutschein</h2>
            <p>
              Beim Verkauf von Altgold kann anstelle der Barauszahlung ein Einkaufsgutschein mit Mehrwert gewählt
              werden. Der Gutschein ist <strong style={{ color: 'var(--kj-text)' }}>unbefristet gültig</strong> und
              kann beim Kauf eines Schmuckstücks oder einer Uhr verrechnet werden. Eine Verrechnung beim Kauf von
              Anlagegold (Goldbarren, Goldmünzen und sonstiges Investmentgold) ist ausgeschlossen. Eine Barauszahlung
              des Gutscheinwertes ist nicht möglich. Der Gutschein ist übertragbar.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl mb-3" style={{ color: 'var(--kj-text)' }}>
              § 8 Reparaturen und Serviceleistungen
            </h2>
            <p>
              Vor Beginn einer Reparatur erhalten Sie eine unverbindliche Einschätzung und eine transparente
              Preisangabe. Die Ausführung erfolgt erst nach Ihrer Freigabe. Nach Fertigstellung benachrichtigen wir
              Sie telefonisch – bei Nichterreichen wiederholt. Fertige Reparaturen bewahren wir{' '}
              <strong style={{ color: 'var(--kj-text)' }}>6 Monate</strong> ab der ersten Benachrichtigung für Sie
              auf. Nach Ablauf dieser Frist und nach mehrfacher erfolgloser Kontaktaufnahme behalten wir uns vor,
              angemessene Lagerkosten zu berechnen.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl mb-3" style={{ color: 'var(--kj-text)' }}>§ 9 Gewährleistung</h2>
            <p>
              Es gelten die gesetzlichen Gewährleistungsrechte. Die Gewährleistungsfrist beträgt 2 Jahre ab Übergabe
              des Schmuckstücks. Ausgeschlossen sind Schäden durch normale Abnutzung, unsachgemäße Behandlung oder
              externe Einflüsse. Bei Edelmetallen sind geringfügige Abweichungen in Farbe und Struktur
              materialtypisch und stellen keinen Mangel dar.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl mb-3" style={{ color: 'var(--kj-text)' }}>§ 10 Haftungsbeschränkung</h2>
            <p>
              KenJu haftet nur für Schäden, die auf vorsätzlichem oder grob fahrlässigem Verhalten beruhen. Die
              Haftung für leichte Fahrlässigkeit ist – soweit gesetzlich zulässig – ausgeschlossen. Unberührt bleibt
              die Haftung für Schäden aus der Verletzung des Lebens, des Körpers oder der Gesundheit sowie bei
              Verletzung wesentlicher Vertragspflichten.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl mb-3" style={{ color: 'var(--kj-text)' }}>§ 11 Schlussbestimmungen</h2>
            <p>
              Es gilt das Recht der Bundesrepublik Deutschland unter Ausschluss des UN-Kaufrechts. Gerichtsstand ist
              Bielefeld, sofern der Kunde Kaufmann, juristische Person des öffentlichen Rechts oder
              öffentlich-rechtliches Sondervermögen ist. Sollten einzelne Bestimmungen unwirksam sein, bleibt die
              Wirksamkeit der übrigen Bestimmungen unberührt.
            </p>
          </section>

          <p className="text-xs pt-4" style={{ borderTop: '1px solid var(--kj-border)', opacity: 0.7 }}>
            Stand: August 2026 | Juwelier KenJu, Inhaber Kenan Gülünay, Bahnhofstraße 28, 33602 Bielefeld | {EMAIL}
          </p>
        </div>
      </div>
    </div>
  );
}
