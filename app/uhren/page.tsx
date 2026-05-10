import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import CategoryHero from '@/components/CategoryHero';
import AppointmentForm from '@/components/AppointmentForm';

export const metadata: Metadata = {
  title: 'Uhren – Citizen & Pierre Junod | KenJu Juwelier Bielefeld',
  description: 'Exklusive Uhren bei KenJu Juwelier Bielefeld. Citizen Eco-Drive (Solar, Funk, Super Titanium) und Pierre Junod – präzise Schweizer und japanische Uhrmacherkunst.',
  keywords: ['Uhren Bielefeld', 'Citizen Eco-Drive', 'Citizen Funkuhr', 'Citizen Super Titanium', 'Pierre Junod', 'Juwelier Bielefeld'],
  alternates: { canonical: 'https://kenju-juwelier.de/uhren' },
};

const citizenLines = [
  {
    name: 'Eco-Drive Solar',
    desc: 'Angetrieben durch jede Lichtquelle – nie wieder Batteriewechsel. Die bahnbrechende Solartechnologie von Citizen wandelt Licht in Energie um und speichert sie für Monate.',
    icon: '☀',
  },
  {
    name: 'Eco-Drive Funk',
    desc: 'Präzision auf die Sekunde genau: Die Citizen Funkuhren synchronisieren sich automatisch mit dem Atomzeitsignal – bis zu 6 Mal täglich, in über 40 Ländern.',
    icon: '📡',
  },
  {
    name: 'Super Titanium™',
    desc: 'Fünfmal härter als Edelstahl, ultraleicht und hypoallergen. Das exklusive Duratect-Oberflächenverfahren von Citizen macht Super Titanium kratzresistenter als jedes andere Uhrenmaterial.',
    icon: '⬡',
  },
  {
    name: 'Promaster',
    desc: 'Tauchen, Fliegen, Bergsteigen – die Promaster-Serie ist für extreme Bedingungen konzipiert. Wasserdicht, schockresistent und mit professionellen Funktionen für jeden Einsatz.',
    icon: '◈',
  },
];

export default function UhrenPage() {
  return (
    <>
      <CategoryHero
        title="Uhren"
        subtitle="Citizen & Pierre Junod"
        description="Präzision trifft auf Design – bei KenJu Juwelier finden Sie eine ausgewählte Kollektion exklusiver Uhren der Marken Citizen und Pierre Junod."
        imageSrc="/images/creolen.jpg"
        imageAlt="Beleuchtete Schmuckvitrine – Uhren KenJu Juwelier Bielefeld"
        breadcrumb="Uhren"
        pageUrl="https://kenju-juwelier.de/uhren"
      />

      {/* Citizen */}
      <section className="py-24 bg-kenju-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="section-subtitle mb-3">Japanische Uhrmacherkunst</p>
            <h2 className="section-title">Citizen – Eco-Drive Technologie</h2>
            <div className="divider-gold mx-auto mt-4 mb-8" />
            <p className="font-sans text-kenju-muted max-w-2xl mx-auto leading-relaxed">
              Citizen steht seit über 100 Jahren für höchste Präzision und Innovation. Die revolutionäre
              <strong className="text-kenju-gold"> Eco-Drive Technologie</strong> veränderte die Uhrenbranche
              für immer: keine Batterie, keine Kompromisse.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {citizenLines.map((line) => (
              <div key={line.name} className="card-dark p-6 flex flex-col gap-4">
                <span className="text-3xl gold-text">{line.icon}</span>
                <h3 className="font-serif text-xl text-kenju-cream">{line.name}</h3>
                <p className="font-sans text-xs text-kenju-muted leading-relaxed flex-1">{line.desc}</p>
              </div>
            ))}
          </div>

          {/* Citizen USPs */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="relative h-80 gold-border overflow-hidden">
              <Image
                src="/images/creolen.jpg"
                alt="Citizen Uhren Vitrine – KenJu Juwelier Bielefeld"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover opacity-60"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-kenju-black/40 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 bg-kenju-black/80 backdrop-blur border border-kenju-gold/30 p-4">
                <p className="font-serif text-lg gold-text">Citizen – Made in Japan</p>
                <p className="font-sans text-xs text-kenju-muted mt-1">Seit 1918 · Über 100 Jahre Präzision</p>
              </div>
            </div>
            <div>
              <h3 className="font-serif text-3xl text-kenju-cream mb-4">Warum Citizen?</h3>
              <div className="divider-gold mb-6" />
              <ul className="space-y-4 font-sans text-sm text-kenju-muted">
                {[
                  { t: 'Keine Batterie notwendig', d: 'Eco-Drive läuft mit jeder Lichtquelle – Sonne, Kunstlicht oder sogar schwaches Innenlicht.' },
                  { t: 'Super Titanium™', d: '5× härter als Edelstahl durch das Duratect-Verfahren. Leichter, langlebiger, kratzerresistenter.' },
                  { t: 'Atomzeit-Synchronisation', d: 'Funk-Modelle synchronisieren sich automatisch – auf die Sekunde genau, weltweit.' },
                  { t: 'Großes Modellsortiment', d: 'Von sportlichen Promaster bis zu eleganten Dress-Watches – für jeden Stil die richtige Uhr.' },
                ].map((item) => (
                  <li key={item.t} className="flex gap-4">
                    <span className="w-1.5 h-1.5 rounded-full bg-kenju-gold shrink-0 mt-2" />
                    <div>
                      <p className="text-kenju-cream font-medium mb-1">{item.t}</p>
                      <p className="text-kenju-muted">{item.d}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Pierre Junod */}
          <div className="border-t border-kenju-border pt-20">
            <div className="text-center mb-12">
              <p className="section-subtitle mb-3">Schweizer Designkunst</p>
              <h2 className="section-title">Pierre Junod</h2>
              <div className="divider-gold mx-auto mt-4 mb-8" />
              <p className="font-sans text-kenju-muted max-w-2xl mx-auto leading-relaxed">
                Pierre Junod verbindet Schweizer Uhrmachertradition mit avantgardistischem Design.
                Jede Uhr ist ein Kunstwerk – skulptural, unverwechselbar und von höchster handwerklicher Güte.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: 'Avantgardistisches Design', desc: 'Pierre Junod Uhren sind sofort erkennbar – geometrische Formen, ungewöhnliche Zifferblätter und ein unverkennbarer Charakter, der Uhren zu Schmuck macht.' },
                { title: 'Schweizer Qualität', desc: 'Swiss Made – jede Uhr wird mit größter Sorgfalt gefertigt und entspricht den höchsten Schweizer Qualitätsstandards. Präzision ist Pflicht.' },
                { title: 'Limitierte Kollektionen', desc: 'Viele Pierre Junod Modelle sind in limitierter Stückzahl erhältlich – ein Garant für Exklusivität und einen bleibenden Sammlerwert.' },
              ].map((item) => (
                <div key={item.title} className="card-dark p-6">
                  <h3 className="font-serif text-xl text-kenju-gold mb-3">{item.title}</h3>
                  <p className="font-sans text-xs text-kenju-muted leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-12">
            <Link href="/#termin" className="btn-gold">Uhren-Beratung anfragen</Link>
          </div>
        </div>
      </section>

      {/* Appointment */}
      <section className="py-24 bg-kenju-navy" id="termin">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="section-subtitle mb-3">Persönliche Beratung</p>
            <h2 className="section-title mb-3">Uhren-Termin buchen</h2>
            <div className="divider-gold mx-auto mb-4" />
            <p className="font-sans text-kenju-muted">Kommen Sie in unser Atelier in Bielefeld – wir beraten Sie zu unserer gesamten Uhren-Kollektion.</p>
          </div>
          <div className="card-dark p-8"><AppointmentForm /></div>
        </div>
      </section>
    </>
  );
}
