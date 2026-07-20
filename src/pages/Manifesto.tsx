import communityImg from '../imports/image-5.png'

const ROAD_IMG = 'https://images.unsplash.com/photo-1542242476-5a3565835a38?w=1600&h=900&fit=crop&auto=format'

const T: React.CSSProperties = {
  fontFamily: "'Bricolage Grotesque', sans-serif",
}
const BODY: React.CSSProperties = {
  fontFamily: "'DM Sans', sans-serif",
}

import React from 'react'

// ── Typographic helpers ──────────────────────────────────────────
function Overline({ children }: { children: string }) {
  return (
    <p style={{ ...BODY, fontSize: 10, color: '#C4FF47', letterSpacing: '0.32em', marginBottom: 0 }}>
      {children}
    </p>
  )
}

function Divider() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 16, margin: 'clamp(60px, 8vw, 100px) 0' }}>
      <div style={{ flex: 1, height: 1, backgroundColor: 'rgba(255,255,255,0.07)' }} />
      <span style={{ ...BODY, fontSize: 9, color: 'rgba(196,255,71,0.4)', letterSpacing: '0.3em' }}>YONDER</span>
      <div style={{ flex: 1, height: 1, backgroundColor: 'rgba(255,255,255,0.07)' }} />
    </div>
  )
}

// ── Page ────────────────────────────────────────────────────────
export default function Manifesto() {
  return (
    <div style={{ backgroundColor: '#06060A', color: '#EDEDF2' }}>

      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="relative flex items-end overflow-hidden" style={{ minHeight: '100svh' }}>
        <div className="absolute inset-0">
          <img src={ROAD_IMG} alt="Mountain road" className="w-full h-full object-cover" style={{ opacity: 0.4 }} />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(160deg, rgba(6,6,10,0.1) 0%, rgba(6,6,10,0.65) 55%, rgba(6,6,10,0.98) 100%)' }} />
        </div>
        <div className="relative z-10" style={{ maxWidth: 1200, margin: '0 auto', width: '100%', padding: 'clamp(120px, 16vw, 200px) 32px clamp(60px, 8vw, 100px)' }}>
          <Overline>YONDER MANIFEST</Overline>
          <h1 style={{ ...T, fontSize: 'clamp(80px, 14vw, 200px)', fontWeight: 800, letterSpacing: '-0.045em', lineHeight: 0.87, marginTop: 20 }}>
            BEYOND<br />
            <span style={{ color: 'rgba(237,237,242,0.18)' }}>NUMBERS.</span>
          </h1>
        </div>
      </section>

      {/* ── AKT I: DER KONFLIKT ──────────────────────────── */}

      {/* Opening statement */}
      <section style={{ padding: 'clamp(80px, 12vw, 160px) 0', backgroundColor: '#06060A' }}>
        <div style={{ maxWidth: 820, margin: '0 auto', padding: '0 32px' }}>
          <p style={{ ...T, fontSize: 'clamp(30px, 4.5vw, 60px)', fontWeight: 700, letterSpacing: '-0.03em', lineHeight: 1.15, color: '#EDEDF2', marginBottom: '0.6em' }}>
            Für fast jede Fahrt gibt es heute eine Zahl.
          </p>
          <p style={{ ...T, fontSize: 'clamp(20px, 2.8vw, 36px)', fontWeight: 300, letterSpacing: '-0.02em', lineHeight: 1.4, color: 'rgba(237,237,242,0.35)' }}>
            Watt. Kilometer. Herzfrequenz. Trainingsbelastung.
          </p>
        </div>
      </section>

      {/* The turn */}
      <section style={{ backgroundColor: '#0A0A10', borderTop: '1px solid rgba(255,255,255,0.05)', borderBottom: '1px solid rgba(255,255,255,0.05)', padding: 'clamp(80px, 12vw, 140px) 0' }}>
        <div style={{ maxWidth: 820, margin: '0 auto', padding: '0 32px' }}>
          <p style={{ ...T, fontSize: 'clamp(26px, 3.8vw, 52px)', fontWeight: 700, letterSpacing: '-0.03em', lineHeight: 1.2, color: '#EDEDF2', marginBottom: 'clamp(40px, 6vw, 72px)' }}>
            Doch die Momente, die uns prägen,<br />hatten nie eine.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.1em', paddingLeft: 'clamp(20px, 4vw, 48px)', borderLeft: '2px solid #C4FF47' }}>
            {[
              'Die erste Ausfahrt bei Sonnenaufgang.',
              'Das Gespräch im Windschatten.',
              'Der Moment, in dem Fremde zu Freunden werden.',
            ].map((line) => (
              <p key={line} style={{ ...T, fontSize: 'clamp(20px, 2.8vw, 38px)', fontWeight: 400, letterSpacing: '-0.02em', lineHeight: 1.45, color: 'rgba(237,237,242,0.7)' }}>
                {line}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Pull quote */}
      <section style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', backgroundColor: '#06060A', padding: 'clamp(60px, 8vw, 100px) 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 32px', textAlign: 'center' }}>
          <p style={{ ...T, fontSize: 'clamp(32px, 5vw, 72px)', fontWeight: 800, letterSpacing: '-0.04em', lineHeight: 1.08, color: '#EDEDF2', marginBottom: '0.3em' }}>
            Wir fahren nicht los,<br />um Daten zu sammeln.
          </p>
          <p style={{ ...T, fontSize: 'clamp(28px, 4vw, 60px)', fontWeight: 800, letterSpacing: '-0.04em', lineHeight: 1.08, color: '#C4FF47' }}>
            Wir fahren los, um etwas zu erleben.
          </p>
        </div>
      </section>

      {/* Full-bleed community photo */}
      <div style={{ lineHeight: 0, overflow: 'hidden' }}>
        <img src={communityImg} alt="YONDER Community" style={{ width: '100%', height: 'clamp(480px, 65vh, 860px)', objectFit: 'cover', objectPosition: 'center 30%', display: 'block' }} />
      </div>

      {/* YONDER belief */}
      <section style={{ backgroundColor: '#06060A', padding: 'clamp(80px, 12vw, 150px) 0' }}>
        <div style={{ maxWidth: 960, margin: '0 auto', padding: '0 32px' }}>
          <p style={{ ...T, fontSize: 'clamp(26px, 3.6vw, 50px)', fontWeight: 700, letterSpacing: '-0.03em', lineHeight: 1.2, color: '#EDEDF2', marginBottom: 'clamp(36px, 5vw, 60px)' }}>
            YONDER glaubt an einen Radsport,<br />der Menschen verbindet.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.05em' }}>
            {[
              ['An Abenteuer statt Algorithmen.', true],
              ['An Erinnerungen statt Rankings.',  false],
              ['An Gemeinschaft statt Vergleich.', false],
            ].map(([line, lime]) => (
              <p key={line as string} style={{ ...T, fontSize: 'clamp(22px, 3vw, 42px)', fontWeight: 600, letterSpacing: '-0.025em', lineHeight: 1.35, color: lime ? '#C4FF47' : 'rgba(237,237,242,0.55)' }}>
                {line as string}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Leistung */}
      <section style={{ backgroundColor: '#0A0A10', borderTop: '1px solid rgba(255,255,255,0.05)', padding: 'clamp(80px, 10vw, 130px) 0' }}>
        <div style={{ maxWidth: 820, margin: '0 auto', padding: '0 32px' }}>
          <p style={{ ...T, fontSize: 'clamp(26px, 3.6vw, 50px)', fontWeight: 700, letterSpacing: '-0.03em', lineHeight: 1.2, color: '#EDEDF2', marginBottom: '0.2em' }}>
            Nicht gegen Leistung.
          </p>
          <p style={{ ...T, fontSize: 'clamp(26px, 3.6vw, 50px)', fontWeight: 700, letterSpacing: '-0.03em', lineHeight: 1.2, color: '#C4FF47', marginBottom: 'clamp(40px, 6vw, 64px)' }}>
            Aber für Leistung, die Bedeutung hat.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.05em', paddingLeft: 'clamp(16px, 3vw, 36px)', borderLeft: '1px solid rgba(196,255,71,0.3)' }}>
            {[
              'Für Erlebnisse, die bleiben.',
              'Für Geschichten, die weitererzählt werden.',
              'Für Menschen, die gemeinsam wachsen.',
            ].map((line) => (
              <p key={line} style={{ ...BODY, fontSize: 'clamp(16px, 2vw, 22px)', fontWeight: 400, lineHeight: 1.7, color: 'rgba(237,237,242,0.5)' }}>
                {line}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* ── AKT II: DAS ANGEBOT ──────────────────────────── */}
      <section style={{ backgroundColor: '#06060A', padding: 'clamp(80px, 12vw, 160px) 0' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 32px' }}>
          <Overline>GENAU HIER BEGINNT YONDER</Overline>
          <Divider />

          <p style={{ ...T, fontSize: 'clamp(26px, 3.6vw, 52px)', fontWeight: 700, letterSpacing: '-0.03em', lineHeight: 1.2, color: '#EDEDF2', maxWidth: 760, marginBottom: 'clamp(40px, 6vw, 64px)' }}>
            Wir glauben, dass Leistung und Freude kein Widerspruch sind.
          </p>
          <p style={{ ...BODY, fontSize: 18, color: 'rgba(237,237,242,0.5)', lineHeight: 1.9, maxWidth: 660, marginBottom: 'clamp(48px, 7vw, 80px)' }}>
            Dass Fortschritt nicht bedeutet, immer mehr zu machen. Sondern die richtigen
            Voraussetzungen zu schaffen, damit Bewegung leichtfällt. Damit Entwicklung möglich wird.
            Damit die Begeisterung bleibt.
          </p>
          <p style={{ ...T, fontSize: 'clamp(20px, 2.6vw, 36px)', fontWeight: 600, letterSpacing: '-0.02em', lineHeight: 1.3, color: 'rgba(237,237,242,0.8)', marginBottom: 'clamp(36px, 5vw, 56px)' }}>
            Deshalb begleiten wir Menschen auf ihrem individuellen Weg.
          </p>

          {/* Services */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 1, backgroundColor: 'rgba(255,255,255,0.05)', marginBottom: 'clamp(48px, 7vw, 80px)' }}>
            {[
              { n: '01', title: 'Coaching',           sub: 'auf und neben dem Rad' },
              { n: '02', title: 'Leistungsdiagnostik', sub: 'Orientierung statt Druck' },
              { n: '03', title: 'Fahrtechnik',         sub: 'Sicherheit & Selbstvertrauen' },
              { n: '04', title: 'Bike Fitting',        sub: 'Mensch und Rad im Einklang' },
            ].map(({ n, title, sub }) => (
              <div key={n} style={{ backgroundColor: '#06060A', padding: 'clamp(28px, 4vw, 44px)' }}>
                <p style={{ ...BODY, fontSize: 9, color: 'rgba(196,255,71,0.45)', letterSpacing: '0.28em', marginBottom: 14 }}>{n}</p>
                <p style={{ ...T, fontSize: 'clamp(18px, 2.2vw, 28px)', fontWeight: 700, letterSpacing: '-0.025em', lineHeight: 1.1, color: '#EDEDF2', marginBottom: 8 }}>{title}</p>
                <p style={{ ...BODY, fontSize: 13, color: 'rgba(237,237,242,0.38)', lineHeight: 1.5 }}>{sub}</p>
              </div>
            ))}
          </div>

          <p style={{ ...BODY, fontSize: 17, color: 'rgba(237,237,242,0.45)', lineHeight: 1.9, maxWidth: 660 }}>
            Wer langfristig im Sport wachsen möchte, braucht mehr als Motivation. Es braucht ein
            Rad, das wirklich passt. Ein Training, das zum Leben passt. Und die richtigen Werkzeuge,
            um sich gesund und nachhaltig weiterzuentwickeln.
          </p>
        </div>
      </section>

      {/* ── AKT III: DIE ÜBERZEUGUNG ─────────────────────── */}
      <section style={{ backgroundColor: '#0A0A10', borderTop: '1px solid rgba(255,255,255,0.05)', padding: 'clamp(80px, 12vw, 160px) 0' }}>
        <div style={{ maxWidth: 820, margin: '0 auto', padding: '0 32px' }}>
          <Overline>WIR GLAUBEN AN FORTSCHRITT</Overline>
          <Divider />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.05em', marginBottom: 'clamp(40px, 6vw, 64px)' }}>
            {[
              ['Nicht um jeden Preis.',   'rgba(237,237,242,0.28)'],
              ['Nicht für Rankings.',     'rgba(237,237,242,0.22)'],
              ['Nicht für Vergleiche.',   'rgba(237,237,242,0.16)'],
            ].map(([text, color]) => (
              <p key={text as string} style={{ ...T, fontSize: 'clamp(24px, 3.4vw, 48px)', fontWeight: 600, letterSpacing: '-0.03em', lineHeight: 1.25, color: color as string }}>
                {text as string}
              </p>
            ))}
          </div>

          <p style={{ ...T, fontSize: 'clamp(26px, 3.6vw, 52px)', fontWeight: 700, letterSpacing: '-0.03em', lineHeight: 1.2, color: '#EDEDF2', marginBottom: 'clamp(40px, 6vw, 64px)' }}>
            Sondern für das gute Gefühl, stärker zu werden.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.05em', paddingLeft: 'clamp(16px, 3vw, 36px)', borderLeft: '2px solid #C4FF47', marginBottom: 'clamp(48px, 7vw, 80px)' }}>
            {[
              'Mehr Freiheit.',
              'Mehr Selbstvertrauen.',
              'Und für all die Momente, die außerhalb der Komfortzone entstehen.',
            ].map((line) => (
              <p key={line} style={{ ...T, fontSize: 'clamp(20px, 2.8vw, 38px)', fontWeight: 400, letterSpacing: '-0.02em', lineHeight: 1.45, color: 'rgba(237,237,242,0.65)' }}>
                {line}
              </p>
            ))}
          </div>

          <p style={{ ...BODY, fontSize: 18, color: 'rgba(237,237,242,0.5)', lineHeight: 1.9, maxWidth: 600 }}>
            Denn am Ende geht es nicht darum, wie viele Zahlen du gesammelt hast.
            Sondern darum, was du erlebt hast.
          </p>
        </div>
      </section>

      {/* ── CLOSING ──────────────────────────────────────── */}
      <section style={{ minHeight: '70vh', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#06060A', borderTop: '1px solid rgba(255,255,255,0.06)', padding: 'clamp(80px, 10vw, 120px) 32px' }}>
        <div style={{ textAlign: 'center' }}>
          <p style={{ ...T, fontSize: 'clamp(22px, 3vw, 40px)', fontWeight: 400, letterSpacing: '-0.02em', lineHeight: 1.3, color: 'rgba(237,237,242,0.4)', marginBottom: '0.3em' }}>
            Darum fahren wir weiter.
          </p>
          <p style={{ ...T, fontSize: 'clamp(52px, 10vw, 140px)', fontWeight: 800, letterSpacing: '-0.045em', lineHeight: 0.9, color: '#C4FF47' }}>
            BEYOND<br />NUMBERS.
          </p>
        </div>
      </section>

    </div>
  )
}
