import { NextResponse } from 'next/server';

// Fallback-Kurse falls APIs nicht erreichbar (Stand: Oktober 2026)
const FALLBACK = {
  metals: { gold: 4130, silver: 59, platinum: 1662, palladium: 1159 },
  fx:     { eurUsd: 1.12, chfEur: 0.938 },
};

/** Spot-Preis eines Edelmetalls in USD/Unze – api.gold-api.com, kein Key nötig */
async function spotPreis(symbol: 'XAU' | 'XAG' | 'XPT' | 'XPD'): Promise<number | null> {
  try {
    const res = await fetch(`https://api.gold-api.com/price/${symbol}`, {
      next: { revalidate: 1800 }, // 30 min Server-Cache
      headers: { Accept: 'application/json' },
    });
    if (!res.ok) return null;
    const data = await res.json();
    const preis = Number(data?.price);
    return Number.isFinite(preis) && preis > 0 ? Math.round(preis * 100) / 100 : null;
  } catch {
    return null;
  }
}

export async function GET() {
  let gold      = FALLBACK.metals.gold;
  let silver    = FALLBACK.metals.silver;
  let platinum  = FALLBACK.metals.platinum;
  let palladium = FALLBACK.metals.palladium;
  let eurUsd    = FALLBACK.fx.eurUsd;
  let chfEur    = FALLBACK.fx.chfEur;
  let liveMetals = false;
  let liveFx     = false;

  // ── Spot-Preise (USD / Troy Oz) ──────────────────────────────────
  const [au, ag, pt, pd] = await Promise.all([
    spotPreis('XAU'),
    spotPreis('XAG'),
    spotPreis('XPT'),
    spotPreis('XPD'),
  ]);

  if (au !== null) gold      = au;
  if (ag !== null) silver    = ag;
  if (pt !== null) platinum  = pt;
  if (pd !== null) palladium = pd;

  // "live" nur, wenn mindestens Gold und Silber abgerufen werden konnten
  liveMetals = au !== null && ag !== null;

  // ── Währungskurse ────────────────────────────────────────────────
  // open.er-api: Basis USD → rates.EUR = Anzahl EUR pro 1 USD
  try {
    const res = await fetch('https://open.er-api.com/v6/latest/USD', {
      next: { revalidate: 3600 }, // 1h server cache
      headers: { Accept: 'application/json' },
    });
    if (res.ok) {
      const data = await res.json();
      const rates = data?.rates ?? {};
      if (rates.EUR && rates.EUR > 0) {
        // eurUsd = Anzahl USD pro 1 EUR
        eurUsd = Math.round((1 / rates.EUR) * 10000) / 10000;
      }
      if (rates.CHF && rates.EUR && rates.EUR > 0) {
        // chfEur = Anzahl CHF pro 1 EUR
        chfEur = Math.round((rates.CHF / rates.EUR) * 10000) / 10000;
      }
      liveFx = true;
    }
  } catch {
    // Fallback bleibt aktiv
  }

  return NextResponse.json(
    {
      live: liveMetals || liveFx,
      liveMetals,
      liveFx,
      updatedAt: new Date().toISOString(),
      metals: { gold, silver, platinum, palladium },
      fx:     { eurUsd, chfEur },
    },
    {
      headers: {
        // Browser darf 5 min cachen, CDN 30 min
        'Cache-Control': 'public, s-maxage=1800, stale-while-revalidate=3600',
      },
    },
  );
}
