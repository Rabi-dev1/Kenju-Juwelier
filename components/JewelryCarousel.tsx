'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const slides = [
  { img: '/images/ringe.jpg',            label: 'Goldringe',           caption: 'Klassische Goldringe in 585 Gelbgold',              href: '/ringe' },
  { img: '/images/brillant-set-luxus.jpg', label: 'Brillantringe',    caption: 'Exklusive Brillant- & Verlobungsringe',             href: '/ringe' },
  { img: '/images/ohrstecker.jpg',       label: 'Ohrstecker',          caption: 'Kugel-Ohrstecker in verschiedenen Größen',          href: '/ohrringe' },
  { img: '/images/creolen.jpg',          label: 'Creolen',             caption: 'Filigrane & gedrehte Creolen in 585 Gold',          href: '/ohrringe' },
  { img: '/images/halsketten.jpg',       label: 'Halsketten',          caption: 'Goldketten mit Anhängern & Kreuzanhänger',          href: '/halsketten' },
  { img: '/images/armreifen.jpg',        label: 'Armreifen',           caption: 'Elegante Bangles & Armbänder in Gold',              href: '/armreifen' },
  { img: '/images/brillantringe.jpg',    label: 'Trauringe',           caption: 'Cilor Trauringe – Made in Germany',                 href: '/trauringe' },
  { img: '/images/brillant-set-luxus.jpg', label: 'Labor Diamanten',  caption: 'Ethisch. Strahlend. Erschwinglich.',                href: '/labordiamanten' },
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
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  const maxIndex = slides.length - visible;

  const prev = useCallback(() =>
    setCurrent((c) => (c <= 0 ? maxIndex : c - 1)),
  [maxIndex]);

  const next = useCallback(() =>
    setCurrent((c) => (c >= maxIndex ? 0 : c + 1)),
  [maxIndex]);

  // Auto-advance
  useEffect(() => {
    const id = setInterval(next, 4500);
    return () => clearInterval(id);
  }, [next]);

  return (
    <section className="py-20" style={{ backgroundColor: 'var(--kj-bg)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="section-subtitle mb-3">Einblicke in unsere Kollektion</p>
          <h2 className="font-serif text-4xl md:text-5xl font-light mb-4" style={{ color: 'var(--kj-text)' }}>
            Ist etwas für Sie dabei?
          </h2>
          <div className="divider-gold mx-auto" />
        </div>

        {/* Carousel wrapper */}
        <div className="relative">
          {/* Prev arrow */}
          <button
            onClick={prev}
            aria-label="Zurück"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-3 z-10 w-10 h-10 flex items-center justify-center shadow-md transition-all hover:scale-110 hidden sm:flex"
            style={{ background: 'var(--kj-text)', color: 'var(--kj-bg)' }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6"/>
            </svg>
          </button>

          {/* Track */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${current * (100 / visible)}%)` }}
            >
              {slides.map((slide, i) => (
                <div
                  key={i}
                  className="shrink-0 px-2"
                  style={{ width: `${100 / visible}%` }}
                >
                  <Link href={slide.href} className="group block">
                    <div
                      className="overflow-hidden transition-all duration-300 hover:shadow-lg"
                      style={{ border: '1px solid var(--kj-border)', background: 'var(--kj-card)' }}
                    >
                      {/* Image */}
                      <div className="relative overflow-hidden category-img-placeholder" style={{ paddingBottom: '115%' }}>
                        <Image
                          src={slide.img}
                          alt={slide.label}
                          fill
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                          className="object-cover transition-transform duration-700 group-hover:scale-108"
                          style={{ opacity: 0.88 }}
                        />
                        <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(8,8,15,0.5) 0%, transparent 60%)' }} />
                      </div>
                      {/* Text below */}
                      <div className="p-4">
                        <h3 className="font-serif text-lg mb-1 transition-colors" style={{ color: 'var(--kj-text)' }}>
                          {slide.label}
                        </h3>
                        <p className="font-sans text-xs" style={{ color: 'var(--kj-muted)' }}>
                          {slide.caption}
                        </p>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Next arrow */}
          <button
            onClick={next}
            aria-label="Weiter"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 z-10 w-10 h-10 flex items-center justify-center shadow-md transition-all hover:scale-110 hidden sm:flex"
            style={{ background: 'var(--kj-text)', color: 'var(--kj-bg)' }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
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
                width: i === current ? '24px' : '8px',
                height: '8px',
                background: i === current ? 'var(--kj-gold)' : 'var(--kj-border)',
                borderRadius: '4px',
              }}
            />
          ))}
        </div>

        <div className="text-center mt-8">
          <Link href="/#kollektionen" className="btn-outline-gold">
            Alle Kollektionen entdecken
          </Link>
        </div>
      </div>
    </section>
  );
}
