import React from 'react'
import bgImg from '../imports/image-7.png'

// ── Type scale ───────────────────────────────────────────────────
// XL  96px  — Hero, Closing
// L   32px  — Section headlines
// M   20px  — Sub-headlines, pull quotes
// S   16px  — Body
// XS  10px  — Overlines

const display = "'Bricolage Grotesque', sans-serif"
const sans    = "'DM Sans', sans-serif"
const lime    = '#C4FF47'
const white   = '#EDEDF2'
const dim1    = 'rgba(237,237,242,0.55)'
const dim2    = 'rgba(237,237,242,0.28)'
const dim3    = 'rgba(237,237,242,0.14)'
const bg      = '#06060A'
const panel   = '#0D0D12'

function Overline({ children, large }: { children: string; large?: boolean }) {
  return (
    <p style={{ fontFamily: sans, fontSize: large ? 14 : 10, fontWeight: large ? 600 : 400, color: lime, letterSpacing: '0.22em', marginBottom: large ? 36 : 28 }}>
      {children}
    </p>
  )
}

function Rule() {
  return <div style={{ height: 1, backgroundColor: 'rgba(255,255,255,0.07)', margin: '56px 0' }} />
}

export default function Manifesto() {
  return (
    <div style={{ backgroundColor: bg }}>

      {/* ── HERO — pure type, no image ───────────────────── */}
      <section style={{ minHeight: '100svh', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: '120px 48px 64px', maxWidth: 1200, margin: '0 auto', width: '100%' }}>
        <Overline>YONDER MANIFEST</Overline>
        <h1 style={{ fontFamily: display, fontSize: 'clamp(52px, 7vw, 96px)', fontWeight: 800, letterSpacing: '-0.045em', lineHeight: 0.9, color: white }}>
          BEYOND<br />
          <span style={{ color: dim3 }}>NUMBERS.</span>
        </h1>
      </section>

      {/* YONDER belief */}
      <section style={{ padding: '72px 48px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', maxWidth: 760 }}>
          <p style={{ fontFamily: display, fontSize: 32, fontWeight: 700, letterSpacing: '-0.03em', lineHeight: 1.15, color: white, marginBottom: 32 }}>
            YONDER glaubt an einen Radsport, der Menschen verbindet.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            {[
              [lime,  'An Abenteuer statt Algorithmen.'],
              [dim1,  'An Erinnerungen statt Rankings.'],
              [dim2,  'An Gemeinschaft statt Vergleich.'],
            ].map(([c, t]) => (
              <p key={t as string} style={{ fontFamily: display, fontSize: 20, fontWeight: 600, letterSpacing: '-0.02em', lineHeight: 1.45, color: c as string }}>{t as string}</p>
            ))}
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: panel, padding: '72px 48px' }}>
        <div style={{ maxWidth: 760, margin: '0 auto' }}>
          <p style={{ fontFamily: display, fontSize: 32, fontWeight: 700, letterSpacing: '-0.03em', lineHeight: 1.15, color: white, marginBottom: 8 }}>
            Nicht gegen Leistung.
          </p>
          <p style={{ fontFamily: display, fontSize: 32, fontWeight: 700, letterSpacing: '-0.03em', lineHeight: 1.15, color: lime, marginBottom: 40 }}>
            Aber für Leistung, die Bedeutung hat.
          </p>
          <div style={{ borderLeft: '1px solid rgba(196,255,71,0.3)', paddingLeft: 28, display: 'flex', flexDirection: 'column', gap: 2 }}>
            {[
              'Für Erlebnisse, die bleiben.',
              'Für Geschichten, die weitererzählt werden.',
              'Für Menschen, die gemeinsam wachsen.',
            ].map(l => (
              <p key={l} style={{ fontFamily: sans, fontSize: 16, fontWeight: 400, lineHeight: 1.75, color: dim1 }}>{l}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Full-bleed moment */}
      <div style={{ lineHeight: 0, position: 'relative' }}>
        <img
          src="https://images.unsplash.com/photo-1768264260571-f33c3d457587?w=1600&h=900&fit=crop&auto=format"
          alt="Zwei Fahrer auf verschneiter Bergstraße"
          style={{ width: '100%', height: '70vh', objectFit: 'cover', objectPosition: 'center', display: 'block' }}
        />
        <div style={{ position: 'absolute', bottom: 32, left: 48, right: 48 }}>
          <p style={{ fontFamily: sans, fontSize: 10, color: 'rgba(196,255,71,0.7)', letterSpacing: '0.28em' }}>
            ERLEBNISSE, DIE BLEIBEN.
          </p>
        </div>
      </div>

      {/* ── AKT II ───────────────────────────────────────── */}
      <section style={{ position: 'relative', padding: '72px 48px' }}>
        <div style={{ position: 'absolute', inset: 0, overflow: 'hidden' }}>
          <img src={bgImg} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 30%', opacity: 0.12 }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(6,6,10,0.6) 0%, rgba(6,6,10,0.85) 100%)' }} />
        </div>
        <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <Overline large>GENAU HIER BEGINNT YONDER</Overline>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px 64px', maxWidth: 900 }}>
            <div>
              <p style={{ fontFamily: display, fontSize: 20, fontWeight: 700, letterSpacing: '-0.025em', lineHeight: 1.2, color: white, marginBottom: 8 }}>
                Wir glauben, dass Leistung und Freude kein Widerspruch sind.
              </p>
              <p style={{ fontFamily: sans, fontSize: 16, color: dim1, lineHeight: 1.8 }}>
                Dass Fortschritt nicht bedeutet, immer mehr zu machen. Sondern die richtigen
                Voraussetzungen zu schaffen, damit Bewegung leichtfällt.
              </p>
            </div>
            <div>
              <p style={{ fontFamily: display, fontSize: 20, fontWeight: 600, letterSpacing: '-0.025em', lineHeight: 1.2, color: white, marginBottom: 8 }}>
                Deshalb begleiten wir Menschen auf ihrem individuellen Weg.
              </p>
              <p style={{ fontFamily: sans, fontSize: 16, color: dim1, lineHeight: 1.8 }}>
                Mit Coaching auf und neben dem Rad. Mit Leistungsdiagnostik, die Orientierung
                schafft statt Druck erzeugt.
              </p>
            </div>
          </div>

          <Rule />

          {/* Services */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 1, backgroundColor: 'rgba(255,255,255,0.05)' }}>
            {[
              { n: '01', title: 'Coaching',            sub: 'auf und neben dem Rad' },
              { n: '02', title: 'Leistungsdiagnostik', sub: 'Orientierung statt Druck' },
              { n: '03', title: 'Fahrtechnik',          sub: 'Sicherheit & Selbstvertrauen' },
              { n: '04', title: 'Bike Fitting',         sub: 'Mensch und Rad im Einklang' },
            ].map(({ n, title, sub }) => (
              <div key={n} style={{ backgroundColor: bg, padding: '32px 28px' }}>
                <p style={{ fontFamily: sans, fontSize: 9, color: 'rgba(196,255,71,0.4)', letterSpacing: '0.28em', marginBottom: 12 }}>{n}</p>
                <p style={{ fontFamily: display, fontSize: 20, fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1.1, color: white, marginBottom: 6 }}>{title}</p>
                <p style={{ fontFamily: sans, fontSize: 12, color: dim2, lineHeight: 1.5 }}>{sub}</p>
              </div>
            ))}
          </div>

          <Rule />

          <p style={{ fontFamily: sans, fontSize: 16, color: dim1, lineHeight: 1.85, maxWidth: 600 }}>
            Wer langfristig im Sport wachsen möchte, braucht mehr als Motivation. Es braucht ein
            Rad, das wirklich passt. Ein Training, das zum Leben passt. Und die richtigen Werkzeuge,
            um sich gesund und nachhaltig weiterzuentwickeln.
          </p>
        </div>
      </section>

      {/* ── AKT III ──────────────────────────────────────── */}
      <section style={{ backgroundColor: panel, borderTop: '1px solid rgba(255,255,255,0.07)', padding: '72px 48px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <Overline large>WIR GLAUBEN AN FORTSCHRITT</Overline>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 2, marginBottom: 40 }}>
            {[
              [dim3, 'Nicht um jeden Preis.'],
              [dim2, 'Nicht für Rankings.'],
              [dim2, 'Nicht für Vergleiche.'],
            ].map(([c, t]) => (
              <p key={t as string} style={{ fontFamily: display, fontSize: 32, fontWeight: 700, letterSpacing: '-0.035em', lineHeight: 1.1, color: c as string }}>{t as string}</p>
            ))}
          </div>
          <p style={{ fontFamily: display, fontSize: 32, fontWeight: 700, letterSpacing: '-0.035em', lineHeight: 1.1, color: white, marginBottom: 40 }}>
            Sondern für das gute Gefühl, stärker zu werden.
          </p>
          <div style={{ borderLeft: `2px solid ${lime}`, paddingLeft: 28, display: 'flex', flexDirection: 'column', gap: 2, marginBottom: 48 }}>
            {[
              'Mehr Freiheit.',
              'Mehr Selbstvertrauen.',
              'Und für all die Momente, die außerhalb der Komfortzone entstehen.',
            ].map(l => (
              <p key={l} style={{ fontFamily: display, fontSize: 20, fontWeight: 400, letterSpacing: '-0.02em', lineHeight: 1.45, color: dim1 }}>{l}</p>
            ))}
          </div>
          <p style={{ fontFamily: sans, fontSize: 16, color: dim1, lineHeight: 1.85, maxWidth: 580 }}>
            Denn am Ende geht es nicht darum, wie viele Zahlen du gesammelt hast. Sondern darum, was du erlebt hast.
          </p>
        </div>
      </section>

      {/* ── CLOSING ──────────────────────────────────────── */}
      <section style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '80px 48px', borderTop: '1px solid rgba(255,255,255,0.07)' }}>
        <div style={{ textAlign: 'center' }}>
          <p style={{ fontFamily: display, fontSize: 20, fontWeight: 400, letterSpacing: '-0.02em', color: dim1, marginBottom: 8 }}>
            Darum fahren wir weiter.
          </p>
          <p style={{ fontFamily: display, fontSize: 'clamp(52px, 7vw, 96px)', fontWeight: 800, letterSpacing: '-0.045em', lineHeight: 0.9, color: lime }}>
            BEYOND<br />NUMBERS.
          </p>
        </div>
      </section>

    </div>
  )
}
