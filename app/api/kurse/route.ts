import { NextResponse } from 'next/server';

// Fallback-Kurse falls APIs nicht erreichbar
const FALLBACK = {
  metals: { gold: 3300, silver: 33, platinum: 980, palladium: 1050 },
  fx:     { eurUsd: 1.12, chfEur: 0.938 },
};

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
  try {
    const res = await fetch('https://api.metals.live/v1/spot', {
      next: { revalidate: 1800 }, // 30 min server cache
      headers: { Accept: 'application/json' },
    });
    if (res.ok) {
      // Response: Array von Einzel-Objekten  →  [{gold:X},{silver:X},...]
      // oder manchmal ein Objekt              →  {gold:X, silver:X, ...}
      const raw = await res.json();
      const data: Record<string, number> = Array.isArray(raw)
        ? Object.assign({}, ...raw)
        : raw;

      if (data.gold)      { gold      = Math.round(data.gold      * 100) / 100; }
      if (data.silver)    { silver    = Math.round(data.silver    * 100) / 100; }
      if (data.platinum)  { platinum  = Math.round(data.platinum  * 100) / 100; }
      if (data.palladium) { palladium = Math.round(data.palladium * 100) / 100; }
      liveMetals = true;
    }
  } catch {
    // Fallback bleibt aktiv
  }

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
