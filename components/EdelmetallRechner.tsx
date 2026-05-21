'use client';

import { useState, useCallback } from 'react';

const TROY_OZ_IN_GRAMS = 31.1035;

interface Metal {
  name: string;
  defaultSpot: number;
  defaultFeinheit: number;
}

const metals: Metal[] = [
  { name: 'Gold',      defaultSpot: 3300, defaultFeinheit: 999.0 },
  { name: 'Silber',    defaultSpot: 33,   defaultFeinheit: 999.0 },
  { name: 'Palladium', defaultSpot: 1050, defaultFeinheit: 999.5 },
  { name: 'Platin',    defaultSpot: 980,  defaultFeinheit: 999.5 },
];

const units = ['Gramm (g)', 'Kilogramm (kg)', 'Unze (oz)'];

const toGrams = (value: number, unit: string): number => {
  if (unit === 'Kilogramm (kg)') return value * 1000;
  if (unit === 'Unze (oz)')      return value * TROY_OZ_IN_GRAMS;
  return value;
};

interface Result {
  eur: number;
  usd: number;
  chf: number;
  eurPerGram: number;
}

const inputStyle: React.CSSProperties = {
  background: 'var(--kj-surface)',
  border: '1px solid var(--kj-border)',
  color: 'var(--kj-text)',
  padding: '0.875rem 1rem',
  fontFamily: 'var(--font-inter), system-ui, sans-serif',
  fontSize: '0.95rem',
  width: '100%',
  outline: 'none',
  transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
};

const labelStyle: React.CSSProperties = {
  display: 'block',
  fontFamily: 'var(--font-inter), system-ui, sans-serif',
  fontSize: '0.68rem',
  letterSpacing: '0.2em',
  textTransform: 'uppercase' as const,
  color: 'var(--kj-muted)',
  marginBottom: '0.5rem',
};

export default function EdelmetallRechner() {
  const [selectedMetal, setSelectedMetal] = useState(0);
  const [weight, setWeight]         = useState('1');
  const [unit, setUnit]             = useState('Gramm (g)');
  const [feinheit, setFeinheit]     = useState(metals[0].defaultFeinheit.toString());
  const [spotUsd, setSpotUsd]       = useState(metals[0].defaultSpot.toString());
  const [eurUsd, setEurUsd]         = useState('1.12');
  const [chfEur, setChfEur]         = useState('0.938');
  const [result, setResult]         = useState<Result | null>(null);
  const [focused, setFocused]       = useState<string | null>(null);

  const handleMetalChange = (idx: number) => {
    setSelectedMetal(idx);
    setSpotUsd(metals[idx].defaultSpot.toString());
    setFeinheit(metals[idx].defaultFeinheit.toString());
    setResult(null);
  };

  const calculate = useCallback(() => {
    const w    = parseFloat(weight.replace(',', '.'));
    const f    = parseFloat(feinheit.replace(',', '.'));
    const spot = parseFloat(spotUsd.replace(',', '.'));
    const rate = parseFloat(eurUsd.replace(',', '.'));
    const chf  = parseFloat(chfEur.replace(',', '.'));

    if (isNaN(w) || isNaN(f) || isNaN(spot) || isNaN(rate) || w <= 0 || spot <= 0 || rate <= 0) return;

    const grams         = toGrams(w, unit);
    const pricePerGramUsd = spot / TROY_OZ_IN_GRAMS;
    const totalUsd      = pricePerGramUsd * (f / 1000) * grams;
    const totalEur      = totalUsd / rate;
    const totalChf      = totalEur * chf;
    const eurPerGram    = pricePerGramUsd * (f / 1000) / rate;

    setResult({ eur: totalEur, usd: totalUsd, chf: totalChf, eurPerGram });
  }, [weight, unit, feinheit, spotUsd, eurUsd, chfEur]);

  const fmt = (n: number, dec = 2) =>
    n.toLocaleString('de-DE', { minimumFractionDigits: dec, maximumFractionDigits: dec });

  const focusStyle = (name: string): React.CSSProperties =>
    focused === name
      ? { ...inputStyle, borderColor: 'var(--kj-gold)', boxShadow: '0 0 0 2px rgba(201,168,76,0.18)' }
      : inputStyle;

  const metal = metals[selectedMetal];

  return (
    <div style={{ background: 'var(--kj-card)', border: '1px solid var(--kj-border)' }}>
      {/* Header */}
      <div className="px-8 py-7" style={{ borderBottom: '1px solid var(--kj-border)' }}>
        <p className="section-subtitle mb-3">Tool</p>
        <h3 className="font-serif font-light" style={{ fontSize: '1.75rem', color: 'var(--kj-text)' }}>
          Edelmetall Rechner
        </h3>
        <p className="font-sans text-sm mt-2" style={{ color: 'var(--kj-muted)' }}>
          Orientierungspreis auf Basis des aktuellen Spot-Kurses. Der tatsächliche Ankaufspreis
          wird individuell und kostenlos in unserem Geschäft ermittelt.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">

        {/* Left – Inputs */}
        <div className="p-8 flex flex-col gap-6" style={{ borderRight: '1px solid var(--kj-border)' }}>

          {/* Metal selector */}
          <div>
            <label style={labelStyle}>Edelmetall</label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {metals.map((m, i) => (
                <button
                  key={m.name}
                  type="button"
                  onClick={() => handleMetalChange(i)}
                  className="py-2.5 px-3 font-sans text-sm transition-all"
                  style={{
                    border: '1px solid',
                    borderColor: selectedMetal === i ? 'var(--kj-gold)' : 'var(--kj-border)',
                    background: selectedMetal === i ? 'rgba(201,168,76,0.1)' : 'var(--kj-surface)',
                    color: selectedMetal === i ? 'var(--kj-gold)' : 'var(--kj-muted)',
                    fontWeight: selectedMetal === i ? 600 : 400,
                  }}
                >
                  {m.name}
                </button>
              ))}
            </div>
          </div>

          {/* Weight + Unit */}
          <div>
            <label style={labelStyle}>Gewicht</label>
            <div className="flex gap-2">
              <input
                type="number"
                value={weight}
                onChange={(e) => { setWeight(e.target.value); setResult(null); }}
                onFocus={() => setFocused('weight')}
                onBlur={() => setFocused(null)}
                style={{ ...focusStyle('weight'), flex: '1 1 0' }}
                min="0"
                step="any"
                placeholder="1"
              />
              <select
                value={unit}
                onChange={(e) => { setUnit(e.target.value); setResult(null); }}
                style={{ ...inputStyle, flex: '0 0 auto', minWidth: '130px', cursor: 'pointer' }}
              >
                {units.map((u) => <option key={u} value={u}>{u}</option>)}
              </select>
            </div>
          </div>

          {/* Feinheit */}
          <div>
            <label style={labelStyle}>Feinheit (‰)</label>
            <div className="flex items-center gap-2">
              <input
                type="number"
                value={feinheit}
                onChange={(e) => { setFeinheit(e.target.value); setResult(null); }}
                onFocus={() => setFocused('feinheit')}
                onBlur={() => setFocused(null)}
                style={{ ...focusStyle('feinheit'), flex: 1 }}
                step="0.1"
                min="0"
                max="999.9"
                placeholder="999.0"
              />
              <span className="font-sans text-sm shrink-0" style={{ color: 'var(--kj-muted)' }}>/1000</span>
            </div>
            <p className="font-sans text-xs mt-2" style={{ color: 'var(--kj-muted)', opacity: 0.7 }}>
              z.B. 999.0 (Feingold), 750 (18K), 585 (14K), 925 (Silber)
            </p>
          </div>

          {/* Spot Price */}
          <div>
            <label style={labelStyle}>Kurs (je Unze Troy / oz)</label>
            <div className="flex gap-2 items-center">
              <input
                type="number"
                value={spotUsd}
                onChange={(e) => { setSpotUsd(e.target.value); setResult(null); }}
                onFocus={() => setFocused('spot')}
                onBlur={() => setFocused(null)}
                style={{ ...focusStyle('spot'), flex: 1 }}
                step="0.01"
                min="0"
                placeholder={metal.defaultSpot.toString()}
              />
              <span className="font-sans text-sm font-medium shrink-0" style={{ color: 'var(--kj-gold)' }}>USD</span>
            </div>
          </div>

          {/* Exchange Rates */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label style={labelStyle}>Wechselkurs EUR/USD</label>
              <input
                type="number"
                value={eurUsd}
                onChange={(e) => { setEurUsd(e.target.value); setResult(null); }}
                onFocus={() => setFocused('eurUsd')}
                onBlur={() => setFocused(null)}
                style={focusStyle('eurUsd')}
                step="0.0001"
                min="0"
                placeholder="1.12"
              />
            </div>
            <div>
              <label style={labelStyle}>Kurs CHF/EUR</label>
              <input
                type="number"
                value={chfEur}
                onChange={(e) => { setChfEur(e.target.value); setResult(null); }}
                onFocus={() => setFocused('chfEur')}
                onBlur={() => setFocused(null)}
                style={focusStyle('chfEur')}
                step="0.0001"
                min="0"
                placeholder="0.938"
              />
            </div>
          </div>

          <button
            type="button"
            onClick={calculate}
            className="btn-gold w-full"
            style={{ fontSize: '0.78rem', letterSpacing: '0.16em', padding: '1rem' }}
          >
            Preis berechnen
          </button>
        </div>

        {/* Right – Result */}
        <div className="p-8 flex flex-col justify-center" style={{ background: 'var(--kj-surface)' }}>
          {result ? (
            <div>
              <p className="section-subtitle mb-4">Ergebnis</p>
              <p className="font-serif mb-8" style={{ fontSize: '1.1rem', color: 'var(--kj-text)' }}>
                {weight} {unit} · {metal.name} · {feinheit}‰
              </p>

              {/* Main result */}
              <div className="mb-8 pb-8" style={{ borderBottom: '1px solid var(--kj-border)' }}>
                <p className="font-sans text-xs tracking-widest uppercase mb-2" style={{ color: 'var(--kj-muted)' }}>
                  Orientierungswert in Euro
                </p>
                <p className="font-serif" style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', color: 'var(--kj-gold)', lineHeight: 1 }}>
                  {fmt(result.eur)} €
                </p>
              </div>

              {/* Breakdown */}
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="font-sans text-sm" style={{ color: 'var(--kj-muted)' }}>In US-Dollar</span>
                  <span className="font-sans text-base font-medium" style={{ color: 'var(--kj-text)' }}>
                    {fmt(result.usd)} $
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-sans text-sm" style={{ color: 'var(--kj-muted)' }}>In Schweizer Franken</span>
                  <span className="font-sans text-base font-medium" style={{ color: 'var(--kj-text)' }}>
                    {fmt(result.chf)} Fr.
                  </span>
                </div>
                <div
                  className="flex justify-between items-center pt-4"
                  style={{ borderTop: '1px solid var(--kj-border)' }}
                >
                  <span className="font-sans text-sm" style={{ color: 'var(--kj-muted)' }}>Wert pro Gramm</span>
                  <span className="font-sans text-sm" style={{ color: 'var(--kj-gold)' }}>
                    {fmt(result.eurPerGram)} €/g
                  </span>
                </div>
              </div>

              <div
                className="mt-8 p-4 font-sans text-xs leading-relaxed"
                style={{ background: 'var(--kj-card)', border: '1px solid var(--kj-border)', color: 'var(--kj-muted)' }}
              >
                * Orientierungspreis auf Basis des eingegebenen Spot-Kurses. Tatsächlicher Ankaufspreis
                kann abweichen – kostenlose Bewertung bei KenJu Juwelier, Bielefeld.
              </div>
            </div>
          ) : (
            <div className="text-center py-12">
              <div
                className="inline-flex items-center justify-center w-20 h-20 mb-6 font-serif text-4xl"
                style={{ border: '1px solid var(--kj-border)', color: 'var(--kj-gold)' }}
              >
                ⬡
              </div>
              <p className="font-serif text-2xl mb-3" style={{ color: 'var(--kj-text)' }}>
                Berechnung starten
              </p>
              <p className="font-sans text-sm leading-relaxed max-w-xs mx-auto" style={{ color: 'var(--kj-muted)' }}>
                Wählen Sie Ihr Edelmetall, geben Sie Gewicht und Feinheit ein und klicken Sie auf
                „Preis berechnen".
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
