import type { Metadata } from 'next';
import { EMAIL } from '@/lib/standorte';

export const metadata: Metadata = {
  title: 'AGB – Allgemeine Geschäftsbedingungen | KenJu Juwelier Bielefeld',
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
              Diese Allgemeinen Geschäftsbedingungen gelten für alle Verträge zwischen KenJu Juwelier,
              Bahnhofstraße 28 (Loom, 1. OG), 33602 Bielefeld – Zweigstelle Lange Straße 29, 59555 Lippstadt –
              (nachfolgend „KenJu&quot;) und dem Kunden. Abweichende Bedingungen des Kunden werden nicht anerkannt,
              es sei denn, KenJu stimmt ihrer Geltung ausdrücklich schriftlich zu.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl mb-3" style={{ color: 'var(--kj-text)' }}>§ 2 Vertragsschluss</h2>
            <p>
              Die Präsentation unserer Leistungen und Produkte stellt kein rechtlich verbindliches Angebot dar, sondern eine
              Aufforderung zur Abgabe eines Angebots. Mit der Bestellung bzw. der Terminanfrage gibt der Kunde ein
              verbindliches Angebot ab. KenJu kann dieses Angebot innerhalb von 5 Werktagen durch eine ausdrückliche
              Bestätigung annehmen.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl mb-3" style={{ color: 'var(--kj-text)' }}>§ 3 Goldankauf</h2>
            <p>
              Beim Goldankauf gilt: Die Bewertung ist kostenlos und unverbindlich. Der endgültige Ankaufspreis wird auf Basis
              des Edelmetallkurses am Tag der Übergabe berechnet. Nach Einigung und Übergabe der Ware ist der Ankauf für beide
              Parteien bindend. Die Auszahlung erfolgt wahlweise in bar oder per Echtzeitüberweisung. Für den Ankauf ist ein
              gültiger Personalausweis oder Reisepass vorzulegen. Widerrufsrechte beim Goldankauf sind gemäß § 312g Abs. 2
              Nr. 8 BGB ausgeschlossen.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl mb-3" style={{ color: 'var(--kj-text)' }}>§ 4 Preise und Zahlung</h2>
            <p>
              Alle Preise verstehen sich in Euro inklusive der gesetzlichen Mehrwertsteuer. Zahlungen sind sofort und ohne
              Abzug fällig. Bei Anfertigungen nach Maß ist eine Anzahlung von 50 % bei Auftragserteilung zu leisten.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl mb-3" style={{ color: 'var(--kj-text)' }}>§ 5 Lieferung und Übergabe</h2>
            <p>
              Schmuckstücke werden nach Vereinbarung in unseren Geschäften in Bielefeld oder Lippstadt übergeben oder auf
              Wunsch per versichertem Paket versendet. Lieferzeiten für Sonderanfertigungen sind individuell und werden bei
              Auftragserteilung vereinbart.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl mb-3" style={{ color: 'var(--kj-text)' }}>§ 6 Reparaturen und Serviceleistungen</h2>
            <p>
              Vor Beginn einer Reparatur erhalten Sie eine unverbindliche Einschätzung und eine transparente Preisangabe.
              Die Ausführung erfolgt erst nach Ihrer Freigabe. Für eingelagerte Kundenware gilt eine Aufbewahrungsfrist von
              6 Monaten ab Benachrichtigung über die Fertigstellung.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl mb-3" style={{ color: 'var(--kj-text)' }}>§ 7 Gewährleistung</h2>
            <p>
              Es gelten die gesetzlichen Gewährleistungsrechte. Die Gewährleistungsfrist beträgt 2 Jahre ab Übergabe des
              Schmuckstücks. Ausgeschlossen sind Schäden durch normale Abnutzung, unsachgemäße Behandlung oder externe Einflüsse.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl mb-3" style={{ color: 'var(--kj-text)' }}>§ 8 Haftungsbeschränkung</h2>
            <p>
              KenJu haftet nur für Schäden, die auf vorsätzlichem oder grob fahrlässigem Verhalten beruhen. Die Haftung für
              leichte Fahrlässigkeit ist – soweit gesetzlich zulässig – ausgeschlossen. Unberührt bleibt die Haftung für
              Schäden aus der Verletzung des Lebens, des Körpers oder der Gesundheit.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl mb-3" style={{ color: 'var(--kj-text)' }}>§ 9 Schlussbestimmungen</h2>
            <p>
              Es gilt das Recht der Bundesrepublik Deutschland unter Ausschluss des UN-Kaufrechts. Gerichtsstand ist Bielefeld,
              sofern der Kunde Kaufmann, juristische Person des öffentlichen Rechts oder öffentlich-rechtliches Sondervermögen ist.
              Sollten einzelne Bestimmungen unwirksam sein, bleibt die Wirksamkeit der übrigen Bestimmungen unberührt.
            </p>
          </section>

          <p className="text-xs pt-4" style={{ borderTop: '1px solid var(--kj-border)', color: 'var(--kj-muted)', opacity: 0.7 }}>
            Stand: Juli 2026 | KenJu Juwelier, Bahnhofstraße 28, 33602 Bielefeld | {EMAIL}
          </p>
        </div>
      </div>
    </div>
  );
}
