'use client';

import { useState, useCallback, useEffect, useRef } from 'react';

const TROY_OZ_IN_GRAMS = 31.1035;

const metals = [
  { name: 'Gold',      symbol: 'Au', feinheit: 999.0, key: 'gold'      },
  { name: 'Silber',    symbol: 'Ag', feinheit: 999.0, key: 'silver'    },
  { name: 'Palladium', symbol: 'Pd', feinheit: 999.5, key: 'palladium' },
  { name: 'Platin',    symbol: 'Pt', feinheit: 999.5, key: 'platinum'  },
] as const;

type MetalKey = 'gold' | 'silver' | 'palladium' | 'platinum';

const units = [
  { label: 'Gramm (g)',       value: 'g'  },
  { label: 'Kilogramm (kg)',  value: 'kg' },
  { label: 'Unze Troy (oz)', value: 'oz' },
];

const feinheitPresets = [
  { label: '999',  value: 999.0 },
  { label: '925',  value: 925.0 },
  { label: '750',  value: 750.0 },
  { label: '585',  value: 585.0 },
  { label: '333',  value: 333.0 },
];

const toGrams = (value: number, unit: string) => {
  if (unit === 'kg') return value * 1000;
  if (unit === 'oz') return value * TROY_OZ_IN_GRAMS;
  return value;
};

interface LiveKurse {
  metals: Record<MetalKey, number>;
  fx: { eurUsd: number; chfEur: number };
  updatedAt: string;
  liveMetals: boolean;
  liveFx: boolean;
}

interface Result {
  eur: number; usd: number; chf: number; eurPerGram: number; grams: number;
}

/* ── Styles ─────────────────────────────────────────────────────── */
const baseInput: React.CSSProperties = {
  background: 'var(--kj-surface)',
  border: '1px solid var(--kj-border)',
  color: 'var(--kj-text)',
  padding: '0.875rem 1rem',
  fontFamily: 'var(--font-inter), system-ui, sans-serif',
  fontSize: '1rem',
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

const formatTime = (iso: string) => {
  try {
    return new Date(iso).toLocaleTimeString('de-DE', { hour: '2-digit', minute: '2-digit' });
  } catch { return '—'; }
};

/* ── Component ──────────────────────────────────────────────────── */
export default function EdelmetallRechner() {
  const [metalIdx,   setMetalIdx]   = useState(0);
  const [weight,     setWeight]     = useState('1');
  const [unit,       setUnit]       = useState('g');
  const [feinheit,   setFeinheit]   = useState(metals[0].feinheit.toString());
  const [result,     setResult]     = useState<Result | null>(null);
  const [focused,    setFocused]    = useState('');

  // Live-Kurs state per Metal + FX
  const [spotInputs, setSpotInputs] = useState<Record<MetalKey, string>>({
    gold: '3300', silver: '33', platinum: '980', palladium: '1050',
  });
  const [eurUsd,  setEurUsd]  = useState('1.12');
  const [chfEur,  setChfEur]  = useState('0.938');

  // Live-fetch state
  const [loading,      setLoading]      = useState(true);
  const [liveKurse,    setLiveKurse]    = useState<LiveKurse | null>(null);
  // Track which fields were manually overridden
  const [manualSpot,   setManualSpot]   = useState<Set<MetalKey>>(new Set());
  const [manualEurUsd, setManualEurUsd] = useState(false);
  const [manualChfEur, setManualChfEur] = useState(false);

  const abortRef = useRef<AbortController | null>(null);

  const fetchKurse = useCallback(async (forceOverride = false) => {
    abortRef.current?.abort();
    abortRef.current = new AbortController();
    setLoading(true);
    try {
      const res = await fetch('/api/kurse', { signal: abortRef.current.signal });
      if (!res.ok) throw new Error('fetch failed');
      const data: LiveKurse = await res.json();
      setLiveKurse(data);

      // Nur überschreiben wenn Feld nicht manuell geändert wurde (oder forceOverride)
      setSpotInputs(prev => {
        const next = { ...prev };
        (Object.keys(data.metals) as MetalKey[]).forEach(k => {
          if (forceOverride || !manualSpot.has(k)) {
            next[k] = data.metals[k].toString();
          }
        });
        return next;
      });
      if (forceOverride || !manualEurUsd) {
        setEurUsd(data.fx.eurUsd.toString());
        if (forceOverride) setManualEurUsd(false);
      }
      if (forceOverride || !manualChfEur) {
        setChfEur(data.fx.chfEur.toString());
        if (forceOverride) setManualChfEur(false);
      }
      if (forceOverride) {
        setManualSpot(new Set());
        setResult(null);
      }
    } catch (e: unknown) {
      if (e instanceof Error && e.name !== 'AbortError') {
        // Fallback – statische Werte bleiben
      }
    } finally {
      setLoading(false);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => { fetchKurse(); }, [fetchKurse]);

  const currentMetalKey = metals[metalIdx].key as MetalKey;
  const spotUsd = spotInputs[currentMetalKey];

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
    const eurPerGram = totalEur / g;
    setResult({ eur: totalEur, usd: totalUsd, chf: totalChf, eurPerGram, grams: g });
  }, [weight, unit, feinheit, spotUsd, eurUsd, chfEur]);

  const handleMetal = (i: number) => {
    setMetalIdx(i);
    setFeinheit(metals[i].feinheit.toString());
    setResult(null);
  };

  const handleSpotChange = (val: string) => {
    setSpotInputs(prev => ({ ...prev, [currentMetalKey]: val }));
    setManualSpot(prev => { const s = new Set(prev); s.add(currentMetalKey); return s; });
    setResult(null);
  };

  const resetSpot = () => {
    if (!liveKurse) return;
    setSpotInputs(prev => ({ ...prev, [currentMetalKey]: liveKurse.metals[currentMetalKey].toString() }));
    setManualSpot(prev => { const s = new Set(prev); s.delete(currentMetalKey); return s; });
    setResult(null);
  };

  const inp = (name: string) => (focused === name ? focusedInput : baseInput);

  const spotIsManual   = manualSpot.has(currentMetalKey);
  const eurUsdManual   = manualEurUsd;
  const chfEurManual   = manualChfEur;
  const liveMetals     = liveKurse?.liveMetals ?? false;
  const liveFx         = liveKurse?.liveFx ?? false;
  const updatedAt      = liveKurse?.updatedAt ?? null;

  /* Badge helper */
  const LiveBadge = ({ live, manual }: { live: boolean; manual: boolean }) => (
    <span
      style={{
        display: 'inline-flex', alignItems: 'center', gap: '0.3rem',
        padding: '0.15rem 0.55rem',
        fontSize: '0.6rem', letterSpacing: '0.12em', textTransform: 'uppercase' as const,
        fontFamily: 'var(--font-inter), system-ui, sans-serif',
        border: '1px solid',
        borderColor: manual ? 'var(--kj-border)' : live ? 'rgba(74,222,128,0.4)' : 'var(--kj-border)',
        color:       manual ? 'var(--kj-muted)'  : live ? '#4ade80'              : 'var(--kj-muted)',
        background:  manual ? 'transparent'       : live ? 'rgba(74,222,128,0.08)': 'transparent',
      }}
    >
      <span style={{
        display: 'inline-block', width: '5px', height: '5px', borderRadius: '50%',
        background: manual ? 'var(--kj-muted)' : live ? '#4ade80' : 'var(--kj-muted)',
      }} />
      {manual ? 'Manuell' : live ? 'Live' : 'Fallback'}
    </span>
  );

  return (
    <div style={{ background: 'var(--kj-card)', border: '1px solid var(--kj-border)' }}>

      {/* ── Header ──────────────────────────────────────────────── */}
      <div className="px-6 py-6 sm:px-8 sm:py-7" style={{ borderBottom: '1px solid var(--kj-border)' }}>
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <p className="section-subtitle mb-1.5">Orientierungstool</p>
            <h3 className="font-serif font-light" style={{ fontSize: 'clamp(1.4rem, 4vw, 1.875rem)', color: 'var(--kj-text)' }}>
              Edelmetall Preisrechner
            </h3>
          </div>
          {/* Aktualisieren */}
          <button
            type="button"
            onClick={() => fetchKurse(true)}
            disabled={loading}
            title="Aktuelle Marktpreise laden"
            style={{
              display: 'flex', alignItems: 'center', gap: '0.5rem',
              padding: '0.55rem 1rem',
              border: '1px solid var(--kj-border)',
              background: 'var(--kj-surface)',
              color: loading ? 'var(--kj-muted)' : 'var(--kj-gold)',
              fontFamily: 'var(--font-inter), system-ui, sans-serif',
              fontSize: '0.72rem', letterSpacing: '0.1em', textTransform: 'uppercase' as const,
              cursor: loading ? 'wait' : 'pointer',
              borderRadius: 0,
              transition: 'all 0.2s ease',
              flexShrink: 0,
            }}
          >
            {/* Refresh icon */}
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"
              style={{ animation: loading ? 'spin 1s linear infinite' : 'none' }}
            >
              <polyline points="23 4 23 10 17 10"/>
              <polyline points="1 20 1 14 7 14"/>
              <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/>
            </svg>
            <style>{`@keyframes spin{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}`}</style>
            {loading ? 'Lädt…' : 'Aktualisieren'}
          </button>
        </div>

        <p className="font-sans text-xs mt-3 leading-relaxed" style={{ color: 'var(--kj-muted)' }}>
          Spot-Kurs basierter Orientierungswert. Alle Kurse sind editierbar.
          {updatedAt && !loading && (
            <span style={{ marginLeft: '0.5rem', opacity: 0.65 }}>
              Stand: {formatTime(updatedAt)} Uhr
            </span>
          )}
        </p>
      </div>

      {/* ── Body ─────────────────────────────────────────────────── */}
      <div className="flex flex-col lg:grid lg:grid-cols-2">
        <style>{`@media(min-width:1024px){.rechner-left{border-right:1px solid var(--kj-border)!important;border-bottom:none!important;}}`}</style>

        {/* ── LEFT: Inputs ──────────────────────────────────────── */}
        <div
          className="rechner-left p-6 sm:p-8 flex flex-col gap-6"
          style={{ borderBottom: '1px solid var(--kj-border)' }}
        >

          {/* Metal selector */}
          <div>
            <label style={lbl}>Edelmetall</label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {metals.map((m, i) => (
                <button
                  key={m.name} type="button"
                  onClick={() => handleMetal(i)}
                  style={{
                    padding: '0.875rem 0.5rem',
                    border: '1px solid',
                    borderColor: metalIdx === i ? 'var(--kj-gold)' : 'var(--kj-border)',
                    background:  metalIdx === i ? 'rgba(201,168,76,0.1)' : 'var(--kj-surface)',
                    color:       metalIdx === i ? 'var(--kj-gold)'       : 'var(--kj-muted)',
                    fontFamily:  'var(--font-inter), system-ui, sans-serif',
                    fontWeight:  metalIdx === i ? 600 : 400,
                    fontSize:    '0.9rem',
                    cursor:      'pointer',
                    transition:  'all 0.2s ease',
                    lineHeight:  1.2,
                    textAlign:   'center',
                    borderRadius: 0,
                  }}
                >
                  <span style={{ display: 'block', fontSize: '0.62rem', opacity: 0.65 }}>{m.symbol}</span>
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
                type="number" inputMode="decimal"
                value={weight}
                onChange={e => { setWeight(e.target.value); setResult(null); }}
                onFocus={() => setFocused('weight')} onBlur={() => setFocused('')}
                style={{ ...inp('weight'), flex: '1 1 0', minWidth: 0 }}
                min="0" step="any" placeholder="1"
              />
              <select
                value={unit}
                onChange={e => { setUnit(e.target.value); setResult(null); }}
                style={{ ...baseInput, flex: '0 0 auto', width: 'auto', minWidth: '120px', cursor: 'pointer', paddingRight: '0.75rem' }}
              >
                {units.map(u => <option key={u.value} value={u.value}>{u.label}</option>)}
              </select>
            </div>
          </div>

          {/* Feinheit */}
          <div>
            <label style={lbl}>Feinheit (‰)</label>
            <div className="flex items-center gap-2 mb-2">
              <input
                type="number" inputMode="decimal"
                value={feinheit}
                onChange={e => { setFeinheit(e.target.value); setResult(null); }}
                onFocus={() => setFocused('feinheit')} onBlur={() => setFocused('')}
                style={{ ...inp('feinheit'), flex: 1, minWidth: 0 }}
                step="0.1" min="0" max="999.9" placeholder="999.0"
              />
              <span className="font-sans text-sm shrink-0" style={{ color: 'var(--kj-muted)' }}>/1000</span>
            </div>
            <div className="flex gap-1.5 overflow-x-auto pb-1" style={{ scrollbarWidth: 'none' }}>
              {feinheitPresets.map(p => (
                <button
                  key={p.value} type="button"
                  onClick={() => { setFeinheit(p.value.toString()); setResult(null); }}
                  style={{
                    padding: '0.35rem 0.75rem',
                    border: '1px solid',
                    borderColor: feinheit === p.value.toString() ? 'var(--kj-gold)' : 'var(--kj-border)',
                    background:  feinheit === p.value.toString() ? 'rgba(201,168,76,0.1)' : 'var(--kj-surface)',
                    color:       feinheit === p.value.toString() ? 'var(--kj-gold)'        : 'var(--kj-muted)',
                    fontFamily: 'var(--font-inter), system-ui, sans-serif',
                    fontSize: '0.72rem', whiteSpace: 'nowrap', cursor: 'pointer',
                    borderRadius: 0, flexShrink: 0,
                  }}
                >
                  {p.label}‰
                </button>
              ))}
            </div>
          </div>

          {/* ── Spot-Kurs je Metall ──────────────────────────────── */}
          <div>
            <div className="flex items-center justify-between gap-2 mb-2" style={{ flexWrap: 'wrap' }}>
              <label style={{ ...lbl, marginBottom: 0 }}>
                {metals[metalIdx].name} – Kurs je Unze Troy (USD)
              </label>
              <div className="flex items-center gap-2">
                <LiveBadge live={liveMetals} manual={spotIsManual} />
                {spotIsManual && liveKurse && (
                  <button
                    type="button"
                    onClick={resetSpot}
                    style={{
                      fontFamily: 'var(--font-inter), system-ui, sans-serif',
                      fontSize: '0.6rem', letterSpacing: '0.08em',
                      color: 'var(--kj-gold)', background: 'none',
                      border: 'none', cursor: 'pointer', padding: '0 0.25rem',
                      textDecoration: 'underline',
                    }}
                  >
                    Zurücksetzen
                  </button>
                )}
              </div>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="number" inputMode="decimal"
                value={spotUsd}
                onChange={e => handleSpotChange(e.target.value)}
                onFocus={() => setFocused('spot')} onBlur={() => setFocused('')}
                style={{ ...inp('spot'), flex: 1, minWidth: 0 }}
                step="0.01" min="0"
              />
              <span className="font-sans text-sm font-semibold shrink-0" style={{ color: 'var(--kj-gold)' }}>USD</span>
            </div>

            {/* Alle 4 Metals Übersicht (read-only mini-Tabelle) */}
            {liveKurse && (
              <div className="mt-3 grid grid-cols-2 sm:grid-cols-4 gap-1.5">
                {metals.map((m, i) => {
                  const mk = m.key as MetalKey;
                  const isActive = i === metalIdx;
                  const isManual = manualSpot.has(mk);
                  return (
                    <button
                      key={m.key} type="button"
                      onClick={() => handleMetal(i)}
                      style={{
                        padding: '0.4rem 0.5rem',
                        border: '1px solid',
                        borderColor: isActive ? 'var(--kj-gold)' : 'var(--kj-border)',
                        background: isActive ? 'rgba(201,168,76,0.07)' : 'var(--kj-surface)',
                        textAlign: 'left', cursor: 'pointer', borderRadius: 0,
                        fontFamily: 'var(--font-inter), system-ui, sans-serif',
                      }}
                    >
                      <span style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <span style={{ fontSize: '0.62rem', color: 'var(--kj-muted)' }}>{m.symbol}</span>
                        {isManual && <span style={{ fontSize: '0.55rem', color: 'var(--kj-muted)', opacity: 0.7 }}>✎</span>}
                      </span>
                      <span style={{ fontSize: '0.78rem', color: isActive ? 'var(--kj-gold)' : 'var(--kj-text)', fontWeight: 500 }}>
                        {fmt(parseFloat(spotInputs[mk] || '0'), 2)}
                      </span>
                      <span style={{ fontSize: '0.55rem', color: 'var(--kj-muted)', opacity: 0.6 }}>USD/oz</span>
                    </button>
                  );
                })}
              </div>
            )}
          </div>

          {/* ── FX-Kurse ─────────────────────────────────────────── */}
          <div>
            <label style={{ ...lbl, marginBottom: '0.75rem' }}>Währungskurse</label>
            <div className="grid grid-cols-2 gap-4">
              {/* EUR / USD */}
              <div>
                <div className="flex items-center justify-between mb-1.5" style={{ flexWrap: 'wrap', gap: '0.25rem' }}>
                  <span style={{ ...lbl, marginBottom: 0 }}>EUR / USD</span>
                  <LiveBadge live={liveFx} manual={eurUsdManual} />
                </div>
                <div className="flex items-center gap-1.5">
                  <input
                    type="number" inputMode="decimal"
                    value={eurUsd}
                    onChange={e => { setEurUsd(e.target.value); setManualEurUsd(true); setResult(null); }}
                    onFocus={() => setFocused('eurUsd')} onBlur={() => setFocused('')}
                    style={{ ...inp('eurUsd'), flex: 1, minWidth: 0 }}
                    step="0.0001" min="0"
                  />
                  {eurUsdManual && liveKurse && (
                    <button type="button" onClick={() => { setEurUsd(liveKurse.fx.eurUsd.toString()); setManualEurUsd(false); setResult(null); }}
                      style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--kj-gold)', fontSize: '0.75rem', flexShrink: 0 }}
                      title="Live-Kurs wiederherstellen"
                    >↺</button>
                  )}
                </div>
                <p style={{ fontFamily: 'var(--font-inter)', fontSize: '0.6rem', color: 'var(--kj-muted)', opacity: 0.6, marginTop: '0.3rem' }}>
                  1 EUR = {eurUsd ? fmt(parseFloat(eurUsd), 4) : '—'} USD
                </p>
              </div>

              {/* CHF / EUR */}
              <div>
                <div className="flex items-center justify-between mb-1.5" style={{ flexWrap: 'wrap', gap: '0.25rem' }}>
                  <span style={{ ...lbl, marginBottom: 0 }}>CHF / EUR</span>
                  <LiveBadge live={liveFx} manual={chfEurManual} />
                </div>
                <div className="flex items-center gap-1.5">
                  <input
                    type="number" inputMode="decimal"
                    value={chfEur}
                    onChange={e => { setChfEur(e.target.value); setManualChfEur(true); setResult(null); }}
                    onFocus={() => setFocused('chfEur')} onBlur={() => setFocused('')}
                    style={{ ...inp('chfEur'), flex: 1, minWidth: 0 }}
                    step="0.0001" min="0"
                  />
                  {chfEurManual && liveKurse && (
                    <button type="button" onClick={() => { setChfEur(liveKurse.fx.chfEur.toString()); setManualChfEur(false); setResult(null); }}
                      style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--kj-gold)', fontSize: '0.75rem', flexShrink: 0 }}
                      title="Live-Kurs wiederherstellen"
                    >↺</button>
                  )}
                </div>
                <p style={{ fontFamily: 'var(--font-inter)', fontSize: '0.6rem', color: 'var(--kj-muted)', opacity: 0.6, marginTop: '0.3rem' }}>
                  1 EUR = {chfEur ? fmt(parseFloat(chfEur), 4) : '—'} CHF
                </p>
              </div>
            </div>
          </div>

          {/* Calculate button */}
          <button
            type="button" onClick={calculate}
            style={{
              background: 'linear-gradient(135deg, var(--kj-gold) 0%, var(--kj-gold-light) 50%, var(--kj-gold-dark) 100%)',
              color: '#fff',
              padding: '1rem 2rem',
              fontFamily: 'var(--font-inter), system-ui, sans-serif',
              fontSize: '0.78rem', letterSpacing: '0.14em',
              textTransform: 'uppercase' as const, fontWeight: 500,
              border: 'none', cursor: 'pointer', width: '100%',
              transition: 'opacity 0.2s ease',
            }}
            onMouseEnter={e => (e.currentTarget.style.opacity = '0.88')}
            onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
          >
            Preis berechnen
          </button>
        </div>

        {/* ── RIGHT: Result ─────────────────────────────────────── */}
        <div className="p-6 sm:p-8 flex flex-col justify-center" style={{ background: 'var(--kj-surface)' }}>
          {result ? (
            <div>
              <p className="section-subtitle mb-4">Ergebnis</p>
              <p className="font-sans text-sm mb-6" style={{ color: 'var(--kj-muted)' }}>
                {weight} {units.find(u => u.value === unit)?.label} ·{' '}
                {metals[metalIdx].name} · {feinheit}‰
                {result.grams !== parseFloat(weight) && (
                  <span className="ml-2 opacity-60">= {fmt(result.grams, 4)} g</span>
                )}
              </p>

              {/* Big EUR */}
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
                  { label: 'In US-Dollar',         value: `${fmt(result.usd)} $`        },
                  { label: 'In Schweizer Franken', value: `${fmt(result.chf)} Fr.`      },
                  { label: 'Wert pro Gramm',        value: `${fmt(result.eurPerGram, 4)} €/g` },
                  { label: 'Spot-Kurs verwendet',   value: `${fmt(parseFloat(spotUsd), 2)} USD/oz` },
                ].map(row => (
                  <div key={row.label} className="flex items-center justify-between gap-4">
                    <span className="font-sans text-sm" style={{ color: 'var(--kj-muted)' }}>{row.label}</span>
                    <span className="font-sans text-sm font-medium" style={{ color: 'var(--kj-text)' }}>{row.value}</span>
                  </div>
                ))}
              </div>

              <div className="p-4 font-sans text-xs leading-relaxed"
                style={{ background: 'var(--kj-card)', border: '1px solid var(--kj-border)', color: 'var(--kj-muted)' }}>
                * Orientierungspreis auf Basis des Spot-Kurses. Tatsächlicher Ankaufspreis wird
                kostenlos und individuell bei KenJu Juwelier ermittelt, Bahnhofstraße 28, Bielefeld.
              </div>
            </div>
          ) : (
            <div className="text-center py-8">
              <div
                className="inline-flex items-center justify-center w-20 h-20 mb-5 font-serif text-4xl"
                style={{ border: '1px solid var(--kj-border)', color: loading ? 'var(--kj-border)' : 'var(--kj-gold)' }}
              >
                {loading ? (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"
                    strokeLinecap="round" strokeLinejoin="round"
                    style={{ animation: 'spin 1s linear infinite', color: 'var(--kj-gold)' }}>
                    <path d="M21 12a9 9 0 1 1-6.219-8.56"/>
                  </svg>
                ) : '⬡'}
              </div>
              <p className="font-serif mb-2" style={{ fontSize: '1.4rem', color: 'var(--kj-text)' }}>
                {loading ? 'Kurse werden geladen…' : 'Berechnung starten'}
              </p>
              {!loading && liveKurse?.liveMetals && (
                <p className="font-sans text-xs mb-4 flex items-center justify-center gap-1.5" style={{ color: '#4ade80' }}>
                  <span style={{ display: 'inline-block', width: '6px', height: '6px', borderRadius: '50%', background: '#4ade80' }} />
                  Live-Kurse geladen – Stand {formatTime(liveKurse.updatedAt)} Uhr
                </p>
              )}
              {!loading && (
                <p className="font-sans text-sm leading-relaxed max-w-xs mx-auto" style={{ color: 'var(--kj-muted)' }}>
                  Metall wählen, Gewicht & Feinheit eingeben, dann „Preis berechnen".
                </p>
              )}
              {!loading && (
                <div className="mt-6 text-left space-y-2">
                  {['585 = 14 Karat Gold (Standard)', '750 = 18 Karat Gold (Premium)', '925 = Sterlingsilber (klassisch)'].map(t => (
                    <p key={t} className="font-sans text-xs" style={{ color: 'var(--kj-muted)', opacity: 0.7 }}>✦ {t}</p>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
