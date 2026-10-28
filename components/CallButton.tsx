import type { CSSProperties } from 'react';
import { standorte } from '@/lib/standorte';

/**
 * "Jetzt anrufen" für zwei Standorte: Klick öffnet eine kurze Auswahl mit der
 * jeweiligen Festnetznummer. Funktioniert ohne JavaScript (natives <details>).
 */
export default function CallButton({
  label = 'Jetzt anrufen',
  className = 'btn-outline-gold',
  style,
}: {
  label?: string;
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <details className="relative w-full sm:w-auto text-left">
      <summary
        className={`${className} cursor-pointer select-none list-none [&::-webkit-details-marker]:hidden`}
        style={style}
      >
        {label}
      </summary>
      <div
        className="mt-2 sm:absolute sm:left-1/2 sm:-translate-x-1/2 sm:min-w-[17rem] z-10"
        style={{ background: 'var(--kj-card)', border: '1px solid var(--kj-border)' }}
      >
        {standorte.map((s, i) => (
          <a
            key={s.id}
            href={s.telefon.href}
            className="flex items-center justify-between gap-6 px-5 py-4"
            style={i > 0 ? { borderTop: '1px solid var(--kj-border)' } : undefined}
          >
            <span className="font-serif text-lg" style={{ color: 'var(--kj-text)' }}>{s.stadt}</span>
            <span className="font-sans text-sm" style={{ color: 'var(--kj-gold)' }}>{s.telefon.label}</span>
          </a>
        ))}
      </div>
    </details>
  );
}
