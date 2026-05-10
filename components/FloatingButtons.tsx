'use client';

import { useState } from 'react';

const IG_URL = 'https://www.instagram.com/juwelier_kenju/';
const FB_URL = 'https://www.facebook.com/people/Juwelier-KenJu-Bielefeld/100029105127054/';

export default function FloatingButtons() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <div
      className="fixed bottom-5 right-3 sm:bottom-6 sm:right-4 z-50 flex flex-col gap-2"
      role="navigation"
      aria-label="Social Media"
    >
      {/* Instagram */}
      <a
        href={IG_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="KenJu Juwelier auf Instagram folgen – @juwelier_kenju"
        title="Instagram: @juwelier_kenju"
        onMouseEnter={() => setHovered('ig')}
        onMouseLeave={() => setHovered(null)}
        className="relative flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 rounded-full shadow-lg shadow-black/30 hover:scale-110 active:scale-95 transition-transform duration-200"
        style={{ background: 'radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)' }}
      >
        <svg className="w-5 h-5 sm:w-6 sm:h-6 fill-white" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
        </svg>
        {hovered === 'ig' && (
          <span className="absolute right-14 whitespace-nowrap bg-kenju-black/90 text-kenju-cream text-xs px-2.5 py-1 rounded pointer-events-none shadow">
            Instagram
          </span>
        )}
      </a>

      {/* Facebook */}
      <a
        href={FB_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="KenJu Juwelier auf Facebook besuchen – Juwelier KenJu Bielefeld"
        title="Facebook: Juwelier KenJu Bielefeld"
        onMouseEnter={() => setHovered('fb')}
        onMouseLeave={() => setHovered(null)}
        className="relative flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#1877F2] shadow-lg shadow-black/30 hover:scale-110 active:scale-95 transition-transform duration-200"
      >
        <svg className="w-5 h-5 sm:w-6 sm:h-6 fill-white" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
        {hovered === 'fb' && (
          <span className="absolute right-14 whitespace-nowrap bg-kenju-black/90 text-kenju-cream text-xs px-2.5 py-1 rounded pointer-events-none shadow">
            Facebook
          </span>
        )}
      </a>
    </div>
  );
}
