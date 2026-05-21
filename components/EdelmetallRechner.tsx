'use client';

import { useState, useCallback } from 'react';

const TROY_OZ_IN_GRAMS = 31.1035;

const metals = [
  { name: 'Gold',      symbol: 'Au', defaultSpot: 3300, defaultFeinheit: 999.0 },
  { name: 'Silber',    symbol: 'Ag', defaultSpot: 33,   defaultFeinheit: 999.0 },
  { name: 'Palladium', symbol: 'Pd', defaultSpot: 1050, defaultFeinheit: 999.5 },
  { name: 'Platin',    symbol: 'Pt', defaultSpot: 980,  defaultFeinheit: 999.5 },
];

const units = [
  { label: 'Gramm (g)',        value: 'g'  },
  { label: 'Kilogramm (kg)',   value: 'kg' },
  { label: 'Unze Troy (oz)',   value: 'oz' },
];

const feinheitPresets = [
  { label: '999 – Feingold/Feinsilber', value: 999.0 },
  { label: '750 – 18 Karat',            value: 750.0 },
  { label: '585 – 14 Karat',            value: 585.0 },
  { label: '925 – Sterlingsilber',       value: 925.0 },
  { label: '333 – 8 Karat',             value: 333.0 },
];

const toGrams = (value: number, unit: string): number => {
  if (unit === 'kg') return value * 1000;
  if (unit === 'oz') return value * TROY_OZ_IN_GRAMS;
  return value;
};

interface Result {
  eur: number;
  usd: number;
  chf: number;
  eurPerGram: number;
  grams: number;
}

const baseInput: React.CSSProperties = {
  background: 'var(--kj-surface)',
  border: '1px solid var(--kj-border)',
  color: 'var(--kj-text)',
  padding: '0.875rem 1rem',
  fontFamily: 'var(--font-inter), system-ui, sans-serif',
  fontSize: '1rem',           /* no iOS zoom */
  width: '100%',
  outline: 'none',
  transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
  WebkitAppearance: 'none',
  borderRadius: 0,
};

const focusedInput: React.CSSProperties = {
  ...baseInput,
  borderColor: 'var(--kj-gold)',
  boxShadow: '0 0 0 2px rgba(201,168,76,0.18)',
};

const lbl: React.CSSProperties = {
  display: 'block',
  fontFamily: 'var(--font-inter), system-ui, sans-serif',
  fontSize: '0.68rem',
  letterSpacing: '0.2em',
  textTransform: 'uppercase' as const,
  color: 'var(--kj-muted)',
  marginBottom: '0.5rem',
};

const fmt = (n: number, dec = 2) =>
  n.toLocaleString('de-DE', { minimumFractionDigits: dec, maximumFractionDigits: dec });

export default function EdelmetallRechner() {
  const [metal, setMetal]       = useState(0);
  const [weight, setWeight]     = useState('1');
  const [unit, setUnit]         = useState('g');
  const [feinheit, setFeinheit] = useState(metals[0].defaultFeinheit.toString());
  const [spotUsd, setSpotUsd]   = useState(metals[0].defaultSpot.toString());
  const [eurUsd, setEurUsd]     = useState('1.12');
  const [chfEur, setChfEur]     = useState('0.938');
  const [result, setResult]     = useState<Result | null>(null);
  const [focused, setFocused]   = useState('');

  const handleMetal = (i: number) => {
    setMetal(i);
    setSpotUsd(metals[i].defaultSpot.toString());
    setFeinheit(metals[i].defaultFeinheit.toString());
    setResult(null);
  };

  const calculate = useCallback(() => {
    const w    = parseFloat(weight.replace(',', '.'));
    const f    = parseFloat(feinheit.replace(',', '.'));
    const spot = parseFloat(spotUsd.replace(',', '.'));
    const rate = parseFloat(eurUsd.replace(',', '.'));
    const chf  = parseFloat(chfEur.replace(',', '.'));
    if ([w, f, spot, rate, chf].some(isNaN) || w <= 0 || spot <= 0 || rate <= 0) return;
    const g          = toGrams(w, unit);
    const usdPerG    = spot / TROY_OZ_IN_GRAMS;
    const totalUsd   = usdPerG * (f / 1000) * g;
    const totalEur   = totalUsd / rate;
    const totalChf   = totalEur * chf;
    const eurPerGram = usdPerG * (f / 1000) / rate;
    setResult({ eur: totalEur, usd: totalUsd, chf: totalChf, eurPerGram, grams: g });
  }, [weight, unit, feinheit, spotUsd, eurUsd, chfEur]);

  const inp = (name: string) => (focused === name ? focusedInput : baseInput);

  return (
    <div style={{ background: 'var(--kj-card)', border: '1px solid var(--kj-border)' }}>

      {/* Header */}
      <div className="px-6 py-6 sm:px-8 sm:py-7" style={{ borderBottom: '1px solid var(--kj-border)' }}>
        <p className="section-subtitle mb-2">Orientierungstool</p>
        <h3 className="font-serif font-light" style={{ fontSize: 'clamp(1.5rem, 4vw, 1.875rem)', color: 'var(--kj-text)' }}>
          Edelmetall Preisrechner
        </h3>
        <p className="font-sans text-sm mt-2 leading-relaxed" style={{ color: 'var(--kj-muted)' }}>
          Spot-Kurs basierter Orientierungswert für Gold, Silber, Palladium und Platin.
          Tatsächlicher Ankaufspreis wird kostenlos und individuell ermittelt.
        </p>
      </div>

      {/* Body – stacks to 1 col on mobile, 2 cols on lg */}
      <div className="flex flex-col lg:grid lg:grid-cols-2">

        {/* ── LEFT: Inputs ──────────────────────────── */}
        <div className="p-6 sm:p-8 flex flex-col gap-6" style={{ borderBottom: '1px solid var(--kj-border)', borderRight: 'none' }}>
          <style>{`@media(min-width:1024px){.rechner-left{border-right:1px solid var(--kj-border);border-bottom:none;}}`}</style>

          {/* Metal buttons */}
          <div>
            <label style={lbl}>Edelmetall</label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {metals.map((m, i) => (
                <button
                  key={m.name}
                  type="button"
                  onClick={() => handleMetal(i)}
                  style={{
                    padding: '0.875rem 0.5rem',
                    border: '1px solid',
                    borderColor: metal === i ? 'var(--kj-gold)' : 'var(--kj-border)',
                    background: metal === i ? 'rgba(201,168,76,0.1)' : 'var(--kj-surface)',
                    color: metal === i ? 'var(--kj-gold)' : 'var(--kj-muted)',
                    fontFamily: 'var(--font-inter), system-ui, sans-serif',
                    fontWeight: metal === i ? 600 : 400,
                    fontSize: '0.9rem',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    lineHeight: 1.2,
                    textAlign: 'center',
                    borderRadius: 0,
                  }}
                >
                  <span style={{ display: 'block', fontSize: '0.65rem', opacity: 0.7 }}>{m.symbol}</span>
                  {m.name}
                </button>
              ))}
            </div>
          </div>

          {/* Weight + Unit */}
          <div>
            <label style={lbl}>Gewicht</label>
            <div className="flex gap-2">
              <input
                type="number"
                inputMode="decimal"
                value={weight}
                onChange={(e) => { setWeight(e.target.value); setResult(null); }}
                onFocus={() => setFocused('weight')}
                onBlur={() => setFocused('')}
                style={{ ...inp('weight'), flex: '1 1 0', minWidth: 0 }}
                min="0" step="any" placeholder="1"
              />
              <select
                value={unit}
                onChange={(e) => { setUnit(e.target.value); setResult(null); }}
                style={{ ...baseInput, flex: '0 0 auto', width: 'auto', minWidth: '120px', cursor: 'pointer', paddingRight: '0.75rem' }}
              >
                {units.map((u) => <option key={u.value} value={u.value}>{u.label}</option>)}
              </select>
            </div>
          </div>

          {/* Feinheit */}
          <div>
            <label style={lbl}>Feinheit (‰)</label>
            <div className="flex items-center gap-2 mb-2">
              <input
                type="number"
                inputMode="decimal"
                value={feinheit}
                onChange={(e) => { setFeinheit(e.target.value); setResult(null); }}
                onFocus={() => setFocused('feinheit')}
                onBlur={() => setFocused('')}
                style={{ ...inp('feinheit'), flex: 1, minWidth: 0 }}
                step="0.1" min="0" max="999.9" placeholder="999.0"
              />
              <span className="font-sans text-sm shrink-0" style={{ color: 'var(--kj-muted)' }}>/1000</span>
            </div>
            {/* Quick presets – scrollable on mobile */}
            <div className="flex gap-1.5 overflow-x-auto pb-1" style={{ scrollbarWidth: 'none' }}>
              {feinheitPresets.map((p) => (
                <button
                  key={p.value}
                  type="button"
                  onClick={() => { setFeinheit(p.value.toString()); setResult(null); }}
                  style={{
                    padding: '0.35rem 0.75rem',
                    border: '1px solid var(--kj-border)',
                    background: feinheit === p.value.toString() ? 'rgba(201,168,76,0.1)' : 'var(--kj-surface)',
                    color: feinheit === p.value.toString() ? 'var(--kj-gold)' : 'var(--kj-muted)',
                    fontFamily: 'var(--font-inter), system-ui, sans-serif',
                    fontSize: '0.72rem',
                    cursor: 'pointer',
                    whiteSpace: 'nowrap',
                    borderRadius: 0,
                    flexShrink: 0,
                  }}
                >
                  {p.value.toFixed(0)}‰
                </button>
              ))}
            </div>
          </div>

          {/* Spot price */}
          <div>
            <label style={lbl}>Kurs je Unze Troy (USD)</label>
            <div className="flex items-center gap-2">
              <input
                type="number"
                inputMode="decimal"
                value={spotUsd}
                onChange={(e) => { setSpotUsd(e.target.value); setResult(null); }}
                onFocus={() => setFocused('spot')}
                onBlur={() => setFocused('')}
                style={{ ...inp('spot'), flex: 1, minWidth: 0 }}
                step="0.01" min="0"
              />
              <span className="font-sans text-sm font-semibold shrink-0" style={{ color: 'var(--kj-gold)' }}>USD</span>
            </div>
            <p className="font-sans text-xs mt-1.5" style={{ color: 'var(--kj-muted)', opacity: 0.6 }}>
              Aktuellen Kurs unter goldpreis.de abrufen
            </p>
          </div>

          {/* Exchange rates */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label style={lbl}>EUR / USD</label>
              <input
                type="number"
                inputMode="decimal"
                value={eurUsd}
                onChange={(e) => { setEurUsd(e.target.value); setResult(null); }}
                onFocus={() => setFocused('eurUsd')}
                onBlur={() => setFocused('')}
                style={inp('eurUsd')}
                step="0.0001" min="0"
              />
            </div>
            <div>
              <label style={lbl}>CHF / EUR</label>
              <input
                type="number"
                inputMode="decimal"
                value={chfEur}
                onChange={(e) => { setChfEur(e.target.value); setResult(null); }}
                onFocus={() => setFocused('chfEur')}
                onBlur={() => setFocused('')}
                style={inp('chfEur')}
                step="0.0001" min="0"
              />
            </div>
          </div>

          <button
            type="button"
            onClick={calculate}
            style={{
              background: 'linear-gradient(135deg, var(--kj-gold) 0%, var(--kj-gold-light) 50%, var(--kj-gold-dark) 100%)',
              color: '#fff',
              padding: '1rem 2rem',
              fontFamily: 'var(--font-inter), system-ui, sans-serif',
              fontSize: '0.78rem',
              letterSpacing: '0.14em',
              textTransform: 'uppercase' as const,
              fontWeight: 500,
              border: 'none',
              cursor: 'pointer',
              width: '100%',
              transition: 'opacity 0.2s ease',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.88')}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
          >
            Preis berechnen
          </button>
        </div>

        {/* ── RIGHT: Result ─────────────────────────── */}
        <div className="p-6 sm:p-8 flex flex-col justify-center" style={{ background: 'var(--kj-surface)' }}>
          {result ? (
            <div>
              <p className="section-subtitle mb-4">Ergebnis</p>

              {/* Label */}
              <p className="font-sans text-sm mb-6" style={{ color: 'var(--kj-muted)' }}>
                {weight} {units.find(u => u.value === unit)?.label} ·{' '}
                {metals[metal].name} · {feinheit}‰
                {result.grams !== parseFloat(weight) && (
                  <span className="ml-2 opacity-60">= {fmt(result.grams, 4)} g</span>
                )}
              </p>

              {/* Big EUR result */}
              <div className="mb-8 pb-8" style={{ borderBottom: '1px solid var(--kj-border)' }}>
                <p className="font-sans text-xs tracking-widest uppercase mb-3" style={{ color: 'var(--kj-muted)' }}>
                  Orientierungswert
                </p>
                <p className="font-serif gold-text" style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', lineHeight: 1 }}>
                  {fmt(result.eur)} €
                </p>
              </div>

              {/* Breakdown */}
              <div className="space-y-4 mb-8">
                {[
                  { label: 'In US-Dollar',          value: `${fmt(result.usd)} $` },
                  { label: 'In Schweizer Franken',  value: `${fmt(result.chf)} Fr.` },
                  { label: 'Wert pro Gramm (EUR)',  value: `${fmt(result.eurPerGram, 4)} €/g` },
                ].map((row) => (
                  <div key={row.label} className="flex items-center justify-between gap-4">
                    <span className="font-sans text-sm" style={{ color: 'var(--kj-muted)' }}>{row.label}</span>
                    <span className="font-sans text-base font-medium" style={{ color: 'var(--kj-text)' }}>{row.value}</span>
                  </div>
                ))}
              </div>

              <div
                className="p-4 font-sans text-xs leading-relaxed"
                style={{ background: 'var(--kj-card)', border: '1px solid var(--kj-border)', color: 'var(--kj-muted)' }}
              >
                * Orientierungspreis auf Basis Ihres eingegebenen Spot-Kurses.
                Kostenlose, genaue Bewertung bei KenJu Juwelier, Bahnhofstraße 28, Bielefeld.
              </div>
            </div>
          ) : (
            <div className="text-center py-10">
              <div
                className="inline-flex items-center justify-center w-20 h-20 mb-5 font-serif text-4xl"
                style={{ border: '1px solid var(--kj-border)', color: 'var(--kj-gold)' }}
              >
                ⬡
              </div>
              <p className="font-serif mb-3" style={{ fontSize: '1.5rem', color: 'var(--kj-text)' }}>
                Berechnung starten
              </p>
              <p className="font-sans text-sm leading-relaxed max-w-xs mx-auto" style={{ color: 'var(--kj-muted)' }}>
                Wählen Sie Ihr Edelmetall, geben Sie Gewicht und Feinheit ein — klicken Sie dann
                auf &ldquo;Preis berechnen&rdquo;.
              </p>
              {/* Quick tips on mobile */}
              <div className="mt-8 text-left space-y-2">
                {['585 = 14 Karat Gold (Standard)', '750 = 18 Karat Gold (Premium)', '925 = Sterlingsilber (klassisch)'].map((t) => (
                  <p key={t} className="font-sans text-xs" style={{ color: 'var(--kj-muted)', opacity: 0.7 }}>
                    ✦ {t}
                  </p>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
