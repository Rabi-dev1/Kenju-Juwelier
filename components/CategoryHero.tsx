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
    <section className="relative min-h-[60vh] flex items-end pb-20 pt-36 overflow-hidden" style={{ background: '#08080F' }}>
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
          className="object-cover"
          priority
          style={{ opacity: 0.3 }}
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(8,8,15,1) 0%, rgba(8,8,15,0.65) 50%, rgba(8,8,15,0.35) 100%)' }} />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav aria-label="Brotkrumen" className="flex items-center gap-2 font-sans text-xs mb-6 tracking-widest uppercase" style={{ color: 'var(--kj-muted)' }}>
          <Link href="/" className="transition-colors hover:opacity-80" style={{ color: 'var(--kj-muted)' }}>
            Startseite
          </Link>
          <span aria-hidden="true" style={{ color: 'var(--kj-border)' }}>›</span>
          <span style={{ color: 'var(--kj-gold)' }}>{breadcrumb}</span>
        </nav>
        <p className="section-subtitle mb-4">{subtitle}</p>
        <h1 className="font-serif text-5xl md:text-7xl font-light mb-6 text-white">{title}</h1>
        <div className="divider-gold mb-6" />
        <p className="font-sans max-w-xl leading-relaxed text-white/60">{description}</p>
      </div>
    </section>
  );
}
