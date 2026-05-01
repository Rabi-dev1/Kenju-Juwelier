'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem('kenju-cookies');
    if (!accepted) setVisible(true);
  }, []);

  const accept = () => {
    localStorage.setItem('kenju-cookies', 'accepted');
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem('kenju-cookies', 'declined');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="cookie-banner fixed bottom-0 left-0 right-0 z-50 bg-kenju-navy/98 backdrop-blur border-t border-kenju-border p-4 md:p-6">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex-1">
          <p className="font-sans text-sm text-kenju-cream">
            Wir verwenden Cookies, um Ihre Erfahrung auf unserer Website zu verbessern.{' '}
            <Link href="/datenschutz" className="text-kenju-gold underline hover:no-underline">
              Datenschutzerklärung
            </Link>
          </p>
        </div>
        <div className="flex gap-3 shrink-0">
          <button onClick={decline} className="btn-outline-gold text-xs px-5 py-2.5">
            Ablehnen
          </button>
          <button onClick={accept} className="btn-gold text-xs px-5 py-2.5">
            Akzeptieren
          </button>
        </div>
      </div>
    </div>
  );
}
