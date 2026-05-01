import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AGB – Allgemeine Geschäftsbedingungen | KenJu Juwelier Berlin',
  robots: { index: false },
};

export default function AGBPage() {
  return (
    <div className="min-h-screen pt-32 pb-24 bg-kenju-black">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="section-subtitle mb-3">Rechtliches</p>
        <h1 className="font-serif text-5xl text-kenju-cream mb-4">Allgemeine Geschäftsbedingungen</h1>
        <div className="divider-gold mb-10" />

        <div className="space-y-8 font-sans text-sm text-kenju-muted leading-relaxed">
          <section>
            <h2 className="font-serif text-2xl text-kenju-cream mb-3">§ 1 Geltungsbereich</h2>
            <p>
              Diese Allgemeinen Geschäftsbedingungen gelten für alle Verträge zwischen KenJu Juwelier GmbH, Musterstraße 12,
              10115 Berlin (nachfolgend „KenJu") und dem Kunden. Abweichende Bedingungen des Kunden werden nicht anerkannt,
              es sei denn, KenJu stimmt ihrer Geltung ausdrücklich schriftlich zu.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-kenju-cream mb-3">§ 2 Vertragsschluss</h2>
            <p>
              Die Präsentation unserer Leistungen und Produkte stellt kein rechtlich verbindliches Angebot dar, sondern eine
              Aufforderung zur Abgabe eines Angebots. Mit der Bestellung bzw. dem Termin-Antrag gibt der Kunde ein verbindliches
              Angebot ab. KenJu kann dieses Angebot innerhalb von 5 Werktagen durch eine ausdrückliche Bestätigung annehmen.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-kenju-cream mb-3">§ 3 Goldankauf</h2>
            <p>
              Beim Goldankauf gilt: Die kostenlose Bewertung ist unverbindlich. Der endgültige Ankaufspreis wird auf Basis
              des Goldkurses am Tag der Übergabe berechnet. Nach Einigung und Übergabe der Ware ist der Ankauf für beide
              Parteien bindend. Widerrufsrechte beim Goldankauf sind gemäß § 312g Abs. 2 Nr. 8 BGB ausgeschlossen.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-kenju-cream mb-3">§ 4 Preise und Zahlung</h2>
            <p>
              Alle Preise verstehen sich in Euro inklusive der gesetzlichen Mehrwertsteuer. Zahlungen sind sofort und ohne
              Abzug fällig. Bei Bestellungen von Schmuckstücken nach Maß ist eine Anzahlung von 50 % bei Auftragserteilung
              zu leisten.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-kenju-cream mb-3">§ 5 Lieferung und Übergabe</h2>
            <p>
              Schmuckstücke werden nach Vereinbarung im Geschäft übergeben oder auf Wunsch per versichertem Paket versendet.
              Lieferzeiten für Sonderanfertigungen sind individuell und werden bei Auftragserteilung vereinbart.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-kenju-cream mb-3">§ 6 Gewährleistung</h2>
            <p>
              Es gelten die gesetzlichen Gewährleistungsrechte. Die Gewährleistungsfrist beträgt 2 Jahre ab Übergabe des
              Schmuckstücks. Ausgeschlossen sind Schäden durch normale Abnutzung, unsachgemäße Behandlung oder externe Einflüsse.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-kenju-cream mb-3">§ 7 Haftungsbeschränkung</h2>
            <p>
              KenJu haftet nur für Schäden, die auf vorsätzlichem oder grob fahrlässigem Verhalten beruhen. Die Haftung für
              leichte Fahrlässigkeit ist – soweit gesetzlich zulässig – ausgeschlossen.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-kenju-cream mb-3">§ 8 Schlussbestimmungen</h2>
            <p>
              Es gilt das Recht der Bundesrepublik Deutschland unter Ausschluss des UN-Kaufrechts. Gerichtsstand ist Berlin,
              sofern der Kunde Kaufmann, juristische Person des öffentlichen Rechts oder öffentlich-rechtliches Sondervermögen ist.
            </p>
          </section>

          <p className="text-kenju-muted/60 text-xs pt-4 border-t border-kenju-border">
            Stand: Januar 2024 | KenJu Juwelier GmbH, Berlin
          </p>
        </div>
      </div>
    </div>
  );
}
