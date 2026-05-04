import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt    = 'KenJu Juwelier Bielefeld – Brillantringe, Goldankauf & Exklusiver Schmuck';
export const size   = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #08080F 0%, #12122A 50%, #0d1a10 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
        }}
      >
        {/* Gold border frame */}
        <div style={{ position: 'absolute', inset: 24, border: '1px solid rgba(201,168,76,0.3)', display: 'flex' }} />

        {/* Top label */}
        <div style={{ fontFamily: 'sans-serif', fontSize: 14, letterSpacing: '0.5em', color: '#C9A84C', marginBottom: 24, textTransform: 'uppercase' }}>
          Meisterbetrieb · Bielefeld
        </div>

        {/* Logo */}
        <div style={{ fontFamily: 'Georgia, serif', fontSize: 110, fontWeight: 300, color: '#C9A84C', lineHeight: 1, marginBottom: 8 }}>
          KenJu
        </div>
        <div style={{ fontFamily: 'sans-serif', fontSize: 18, letterSpacing: '0.6em', color: '#8888A8', textTransform: 'uppercase', marginBottom: 32 }}>
          Juwelier
        </div>

        {/* Gold divider */}
        <div style={{ width: 120, height: 1, background: 'linear-gradient(90deg, transparent, #C9A84C, transparent)', marginBottom: 32 }} />

        {/* Tagline */}
        <div style={{ fontFamily: 'sans-serif', fontSize: 22, color: '#F5F0E8', letterSpacing: '0.05em', textAlign: 'center' }}>
          Brillantringe · Goldankauf · Exklusiver Schmuck
        </div>

        {/* Bottom categories */}
        <div style={{ display: 'flex', gap: 16, marginTop: 40 }}>
          {['Kreuze', 'Ringe', 'Creolen', 'Halsketten', 'Armreifen'].map((cat) => (
            <div key={cat} style={{ fontFamily: 'sans-serif', fontSize: 12, color: '#8888A8', letterSpacing: '0.3em', textTransform: 'uppercase' }}>
              {cat}
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size }
  );
}
