import Link from 'next/link';
import Image from 'next/image';

interface Props {
  title: string;
  subtitle: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  breadcrumb: string;
  pageUrl?: string;
}

export default function CategoryHero({ title, subtitle, description, imageSrc, imageAlt, breadcrumb, pageUrl }: Props) {
  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://kenju-juwelier.de' },
      { '@type': 'ListItem', position: 2, name: breadcrumb, item: pageUrl ?? `https://kenju-juwelier.de/${breadcrumb.toLowerCase()}` },
    ],
  };

  return (
    <section className="relative min-h-[60vh] flex items-end pb-20 pt-36 overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <div className="absolute inset-0">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          sizes="100vw"
          className="object-cover opacity-30"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-kenju-black via-kenju-black/60 to-kenju-black/30" />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav aria-label="Brotkrumen" className="flex items-center gap-2 font-sans text-xs text-kenju-muted mb-6 tracking-widest uppercase">
          <Link href="/" className="hover:text-kenju-gold transition-colors">Startseite</Link>
          <span className="text-kenju-border" aria-hidden="true">›</span>
          <span className="text-kenju-gold">{breadcrumb}</span>
        </nav>
        <p className="section-subtitle mb-4">{subtitle}</p>
        <h1 className="font-serif text-5xl md:text-7xl font-light text-kenju-cream mb-6">{title}</h1>
        <div className="divider-gold mb-6" />
        <p className="font-sans text-kenju-muted max-w-xl leading-relaxed">{description}</p>
      </div>
    </section>
  );
}
