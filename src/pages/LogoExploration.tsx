import React from 'react'

function WegMark({ size = 80, color = '#C4FF47' }: { size?: number; color?: string }) {
  const h = Math.round(size * 1.12)
  return (
    <svg width={size} height={h} viewBox="0 0 100 112" fill="none" aria-hidden="true">
      <polygon points="2,3 34,3 50,56 66,3 98,3 64,64 64,109 36,109 36,64" fill={color} />
    </svg>
  )
}

// ── Core wordmark: [mark]ONDER ───────────────────────────────────
// The mark IS the Y. One element, reads as YONDER.
function Wordmark({
  markSize = 72,
  markColor = '#C4FF47',
  textColor = '#EDEDF2',
  gap,
}: {
  markSize?: number
  markColor?: string
  textColor?: string
  gap?: number
}) {
  const markH = Math.round(markSize * 1.12)
  // Optical baseline: mark's visual baseline is near bottom of stem (≈97% of height)
  const markBaseline = Math.round(markH * 0.97)
  // Font size to match mark cap-height visually
  const fs = Math.round(markSize * 1.04)
  const g = gap ?? Math.round(markSize * 0.06)

  return (
    <div style={{ display: 'flex', alignItems: 'flex-end', gap: g }}>
      {/* Mark — optically bottom-aligned with text */}
      <div style={{ flexShrink: 0, lineHeight: 0 }}>
        <WegMark size={markSize} color={markColor} />
      </div>
      {/* ONDER — baseline-aligned with mark stem */}
      <span style={{
        fontFamily: "'Bricolage Grotesque', sans-serif",
        fontWeight: 800,
        fontSize: fs,
        lineHeight: 1,
        letterSpacing: '-0.04em',
        color: textColor,
        paddingBottom: Math.round(markH - markBaseline),
      }}>
        ONDER
      </span>
    </div>
  )
}

// ── Full signature: wordmark + tagline ───────────────────────────
function Signature({
  markSize = 60,
  markColor = '#C4FF47',
  textColor = '#EDEDF2',
  taglineColor,
}: {
  markSize?: number
  markColor?: string
  textColor?: string
  taglineColor?: string
}) {
  const tl = taglineColor ?? (textColor === '#EDEDF2' ? 'rgba(237,237,242,0.32)' : 'rgba(6,6,10,0.32)')
  const fs = Math.round(markSize * 0.13)

  return (
    <div>
      <Wordmark markSize={markSize} markColor={markColor} textColor={textColor} />
      <div style={{
        marginTop: Math.round(markSize * 0.22),
        paddingTop: Math.round(markSize * 0.14),
        borderTop: `1px solid ${tl}`,
        display: 'flex',
        alignItems: 'center',
        gap: 10,
      }}>
        <span style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 400, fontSize: fs, color: tl, letterSpacing: '0.22em' }}>
          FIND YOUR PACE
        </span>
        <span style={{ color: tl, fontSize: fs }}>—</span>
        <span style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 400, fontSize: fs, color: tl, letterSpacing: '0.22em' }}>
          BEYOND NUMBERS.
        </span>
      </div>
    </div>
  )
}

// ── Tile ─────────────────────────────────────────────────────────
function Tile({ bg, children, minH = 300 }: { bg: string; children: React.ReactNode; minH?: number }) {
  return (
    <div style={{ backgroundColor: bg, minHeight: minH, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '52px 64px' }}>
      {children}
    </div>
  )
}

// ── Page ─────────────────────────────────────────────────────────
export default function LogoExploration() {
  return (
    <div style={{ backgroundColor: '#06060A', minHeight: '100vh', paddingTop: 72 }}>

      {/* Intro note */}
      <div style={{ maxWidth: 980, margin: '0 auto', padding: '64px 32px 52px' }}>
        <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 10, color: '#C4FF47', letterSpacing: '0.3em', marginBottom: 12 }}>
          YONDER WORDMARK
        </p>
        <p style={{
          fontFamily: "'Bricolage Grotesque', sans-serif",
          fontWeight: 800,
          fontSize: 'clamp(24px, 3vw, 40px)',
          letterSpacing: '-0.035em',
          lineHeight: 1.15,
          color: '#EDEDF2',
          maxWidth: 560,
        }}>
          Das Mark ersetzt den Buchstaben Y.<br />
          <span style={{ color: 'rgba(237,237,242,0.22)' }}>Ein Zeichen, ein Wort.</span>
        </p>
      </div>

      {/* ── 01 Wordmark Farbvarianten ────────────────── */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 1, backgroundColor: 'rgba(255,255,255,0.05)' }}>
        <Tile bg="#06060A" minH={340}>
          <Wordmark markSize={92} markColor="#C4FF47" textColor="#EDEDF2" />
        </Tile>
        <Tile bg="#EDEDF2" minH={340}>
          <Wordmark markSize={92} markColor="#06060A" textColor="#06060A" />
        </Tile>
        <Tile bg="#C4FF47" minH={280}>
          <Wordmark markSize={80} markColor="#06060A" textColor="#06060A" />
        </Tile>
        <Tile bg="#111116" minH={280}>
          <Wordmark markSize={80} markColor="rgba(237,237,242,0.85)" textColor="rgba(237,237,242,0.55)" />
        </Tile>
      </div>

      {/* Divider */}
      <div style={{ maxWidth: 980, margin: '64px auto 0', padding: '0 32px' }}>
        <div style={{ height: 1, backgroundColor: 'rgba(255,255,255,0.07)' }} />
      </div>

      {/* ── 02 Markensignatur ───────────────────────── */}
      <div style={{ maxWidth: 980, margin: '0 auto', padding: '52px 32px 0' }}>
        <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 10, color: 'rgba(237,237,242,0.22)', letterSpacing: '0.26em', marginBottom: 32 }}>
          MIT TAGLINE
        </p>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 1, backgroundColor: 'rgba(255,255,255,0.05)' }}>
        <Tile bg="#06060A" minH={320}>
          <Signature markSize={72} markColor="#C4FF47" textColor="#EDEDF2" />
        </Tile>
        <Tile bg="#EDEDF2" minH={320}>
          <Signature markSize={72} markColor="#06060A" textColor="#06060A" taglineColor="rgba(6,6,10,0.28)" />
        </Tile>
      </div>
      <Tile bg="#C4FF47" minH={300}>
        <Signature markSize={68} markColor="#06060A" textColor="#06060A" taglineColor="rgba(6,6,10,0.3)" />
      </Tile>

      {/* Divider */}
      <div style={{ maxWidth: 980, margin: '64px auto 0', padding: '0 32px' }}>
        <div style={{ height: 1, backgroundColor: 'rgba(255,255,255,0.07)' }} />
      </div>

      {/* ── 03 Skalierung ───────────────────────────── */}
      <div style={{ maxWidth: 980, margin: '0 auto', padding: '52px 32px 0' }}>
        <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 10, color: 'rgba(237,237,242,0.22)', letterSpacing: '0.26em', marginBottom: 32 }}>
          SKALIERUNG
        </p>
      </div>
      <div style={{ maxWidth: 980, margin: '0 auto', padding: '0 32px 96px', display: 'flex', flexDirection: 'column', gap: 40 }}>
        {[
          { size: 32,  label: 'Nav / App-Icon' },
          { size: 56,  label: 'Footer / Kleinformat' },
          { size: 100, label: 'Hero / Plakat' },
        ].map(({ size, label }) => (
          <div key={size} style={{ display: 'flex', alignItems: 'center', gap: 32 }}>
            <Wordmark markSize={size} markColor="#C4FF47" textColor="#EDEDF2" />
            <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 10, color: 'rgba(237,237,242,0.18)', letterSpacing: '0.18em' }}>{label}</span>
          </div>
        ))}
      </div>

    </div>
  )
}
