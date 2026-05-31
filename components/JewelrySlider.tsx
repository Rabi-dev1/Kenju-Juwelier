'use client';

import Image from 'next/image';

export interface SliderImage {
  src: string;
  alt: string;
  name?: string;
  desc?: string;
}

interface Props {
  images: SliderImage[];
  showLabels?: boolean;   // nur bei Labor Diamanten true
  speedSeconds?: number;  // Geschwindigkeit (default 40s für einen Durchlauf)
  heightClass?: string;
}

export default function JewelrySlider({
  images,
  showLabels = false,
  speedSeconds = 40,
  heightClass = 'h-72 sm:h-80 md:h-96 lg:h-[420px]',
}: Props) {
  // Duplizieren für nahtlosen Loop
  const track = [...images, ...images];

  return (
    <div className="overflow-hidden relative w-full">
      <style>{`
        @keyframes kj-marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .kj-marquee {
          display: flex;
          width: max-content;
          animation: kj-marquee ${speedSeconds}s linear infinite;
          will-change: transform;
        }
        .kj-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="kj-marquee">
        {track.map((img, i) => (
          <div
            key={`${img.src}-${i}`}
            className={`relative flex-shrink-0 overflow-hidden ${heightClass}`}
            style={{ width: 'clamp(200px, 28vw, 380px)', marginRight: '8px' }}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              sizes="(max-width: 640px) 60vw, (max-width: 1024px) 35vw, 28vw"
              className="object-cover transition-transform duration-700 hover:scale-105"
              style={{ opacity: 0.92 }}
            />

            {/* Subtle gold shimmer on hover */}
            <div
              className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-500"
              style={{ background: 'linear-gradient(135deg, rgba(201,168,76,0.08) 0%, transparent 60%)' }}
            />

            {/* Labels nur wenn explizit aktiviert */}
            {showLabels && img.name && (
              <div
                className="absolute bottom-0 left-0 right-0 p-4"
                style={{ background: 'linear-gradient(to top, rgba(15,13,10,0.92) 0%, rgba(15,13,10,0.4) 60%, transparent 100%)' }}
              >
                <p className="font-serif text-white text-base leading-tight">{img.name}</p>
                {img.desc && (
                  <p className="font-sans text-xs mt-1" style={{ color: 'rgba(255,255,255,0.6)' }}>{img.desc}</p>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
