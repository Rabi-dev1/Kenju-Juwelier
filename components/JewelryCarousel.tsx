'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const slides = [
  { img: '/images/ringe.jpg',              label: 'Goldringe',        caption: '585 Gelbgold · Handgefertigt',          href: '/ringe' },
  { img: '/images/brillant-set-luxus.jpg', label: 'Brillantringe',    caption: 'Exklusive Brillant- & Verlobungsringe', href: '/ringe' },
  { img: '/images/ohrstecker.jpg',          label: 'Ohrstecker',       caption: 'Kugel-Ohrstecker in feinstem Gold',     href: '/ohrringe' },
  { img: '/images/creolen.jpg',             label: 'Creolen',          caption: 'Filigrane Creolen in 585 Gold',         href: '/ohrringe' },
  { img: '/images/halsketten.jpg',          label: 'Halsketten',       caption: 'Goldketten & Kreuzanhänger',            href: '/halsketten' },
  { img: '/images/armreifen.jpg',           label: 'Armreifen',        caption: 'Elegante Bangles in Gelbgold',          href: '/armreifen' },
  { img: '/images/brillantringe.jpg',       label: 'Trauringe',        caption: 'Cilor Trauringe – Made in Germany',     href: '/trauringe' },
  { img: '/images/brillant-set-luxus.jpg',  label: 'Labor Diamanten',  caption: 'Ethisch · Strahlend · Erschwinglich',  href: '/labordiamanten' },
];

const VISIBLE_DESKTOP = 4;
const VISIBLE_TABLET  = 2;
const VISIBLE_MOBILE  = 1;

export default function JewelryCarousel() {
  const [current, setCurrent] = useState(0);
  const [visible, setVisible] = useState(VISIBLE_DESKTOP);

  useEffect(() => {
    const update = () => {
      if (window.innerWidth < 640)       setVisible(VISIBLE_MOBILE);
      else if (window.innerWidth < 1024) setVisible(VISIBLE_TABLET);
      else                               setVisible(VISIBLE_DESKTOP);
    };
    update();
    window.addEventListener('resize', update, { passive: true });
    return () => window.removeEventListener('resize', update);
  }, []);

  const maxIndex = slides.length - visible;

  const prev = useCallback(() => setCurrent((c) => (c <= 0 ? maxIndex : c - 1)), [maxIndex]);
  const next = useCallback(() => setCurrent((c) => (c >= maxIndex ? 0 : c + 1)), [maxIndex]);

  useEffect(() => {
    const id = setInterval(next, 5000);
    return () => clearInterval(id);
  }, [next]);

  return (
    <section className="py-32" style={{ backgroundColor: 'var(--kj-surface)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <p className="section-subtitle mb-4">Unsere Kollektionen</p>
          <h2 className="font-serif text-4xl md:text-5xl font-light mb-5" style={{ color: 'var(--kj-text)' }}>
            Entdecken Sie exklusive<br />Schmuckstücke
          </h2>
          <div className="divider-gold mx-auto" />
        </div>

        {/* Carousel */}
        <div className="relative">
          {/* Prev */}
          <button
            onClick={prev}
            aria-label="Zurück"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-11 h-11 flex items-center justify-center shadow-md transition-all hover:scale-110 hidden sm:flex"
            style={{ background: 'var(--kj-text)', color: 'var(--kj-bg)' }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6"/>
            </svg>
          </button>

          {/* Track */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-600 ease-in-out"
              style={{ transform: `translateX(-${current * (100 / visible)}%)` }}
            >
              {slides.map((slide, i) => (
                <div key={i} className="shrink-0 px-2.5" style={{ width: `${100 / visible}%` }}>
                  <Link href={slide.href} className="group block">
                    {/* Pure image – no card box */}
                    <div className="relative overflow-hidden" style={{ paddingBottom: '125%' }}>
                      <Image
                        src={slide.img}
                        alt={slide.label}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                        style={{ opacity: 0.9 }}
                      />
                      {/* Subtle gradient overlay */}
                      <div
                        className="absolute inset-0"
                        style={{ background: 'linear-gradient(to top, rgba(8,8,15,0.62) 0%, transparent 55%)' }}
                      />
                      {/* Label overlay on image bottom */}
                      <div className="absolute bottom-0 left-0 right-0 p-4">
                        <p className="font-serif text-lg text-white leading-tight">{slide.label}</p>
                        <p className="font-sans text-xs mt-0.5" style={{ color: 'rgba(255,255,255,0.6)' }}>
                          {slide.caption}
                        </p>
                      </div>
                      {/* Hover: gold border reveal */}
                      <div
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                        style={{ border: '2px solid rgba(154,120,24,0.6)' }}
                      />
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Next */}
          <button
            onClick={next}
            aria-label="Weiter"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-11 h-11 flex items-center justify-center shadow-md transition-all hover:scale-110 hidden sm:flex"
            style={{ background: 'var(--kj-text)', color: 'var(--kj-bg)' }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6"/>
            </svg>
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              aria-label={`Slide ${i + 1}`}
              className="transition-all duration-300"
              style={{
                width: i === current ? '28px' : '8px',
                height: '4px',
                background: i === current ? 'var(--kj-gold)' : 'var(--kj-border)',
                borderRadius: '2px',
              }}
            />
          ))}
        </div>

        {/* Instagram CTA */}
        <div
          className="mt-14 flex flex-col sm:flex-row items-center justify-between gap-6 px-8 py-6"
          style={{ border: '1px solid var(--kj-border)', background: 'var(--kj-card)' }}
        >
          <p className="font-sans text-sm text-center sm:text-left" style={{ color: 'var(--kj-muted)' }}>
            Entdecken Sie weitere exklusive Stücke und aktuelle Kollektionen auf unserem{' '}
            <strong style={{ color: 'var(--kj-text)' }}>Instagram-Profil</strong>.
          </p>
          <a
            href="https://www.instagram.com/juwelier_kenju/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 shrink-0 btn-outline-gold"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
            </svg>
            @juwelier_kenju
          </a>
        </div>
      </div>
    </section>
  );
}
