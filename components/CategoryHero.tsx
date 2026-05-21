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
    <section
      className="relative min-h-[70vh] flex items-end pb-20 pt-36 overflow-hidden"
      style={{ background: '#0F0D0A' }}
    >
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
          className="object-cover img-zoom"
          priority
          style={{ opacity: 0.55 }}
        />
        {/* Lighter overlay so image breathes */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to top, rgba(15,13,10,0.97) 0%, rgba(15,13,10,0.55) 55%, rgba(15,13,10,0.25) 100%)',
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Breadcrumb */}
        <nav
          aria-label="Brotkrumen"
          className="flex items-center gap-2 font-sans text-xs mb-8 tracking-widest uppercase"
          style={{ color: 'rgba(245,240,232,0.45)' }}
        >
          <Link href="/" className="transition-opacity hover:opacity-80" style={{ color: 'rgba(245,240,232,0.45)' }}>
            Startseite
          </Link>
          <span aria-hidden="true" style={{ opacity: 0.4 }}>›</span>
          <span style={{ color: 'var(--kj-gold)' }}>{breadcrumb}</span>
        </nav>

        <p className="section-subtitle mb-5">{subtitle}</p>

        <h1 className="font-serif text-6xl md:text-8xl font-light mb-8 text-white" style={{ lineHeight: 1.05 }}>
          {title}
        </h1>

        <div className="divider-gold mb-8" />

        <p
          className="font-sans text-lg max-w-2xl leading-relaxed"
          style={{ color: 'rgba(245,240,232,0.65)' }}
        >
          {description}
        </p>
      </div>
    </section>
  );
}
