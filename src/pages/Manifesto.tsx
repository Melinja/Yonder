import communityImg from '../imports/image-4.png'

const ROAD_IMG    = 'https://images.unsplash.com/photo-1542242476-5a3565835a38?w=1600&h=900&fit=crop&auto=format'
const SOLO_IMG    = 'https://images.unsplash.com/photo-1615845522846-02f89af04c2e?w=1400&h=900&fit=crop&auto=format'
const MOUNTAIN_IMG = 'https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=1400&h=900&fit=crop&auto=format'

// ── Full-bleed editorial image moment ─────────────────────────
function ImageStatement({
  img,
  alt,
  statement,
  dim = 0.55,
}: {
  img: string
  alt: string
  statement: string
  dim?: number
}) {
  return (
    <section
      className="relative flex items-end overflow-hidden"
      style={{ minHeight: '92vh' }}
    >
      <div className="absolute inset-0">
        <img src={img} alt={alt} className="w-full h-full object-cover" style={{ opacity: dim }} />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to top, rgba(6,6,10,0.92) 0%, rgba(6,6,10,0.1) 60%)' }}
        />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 pb-20">
        <p
          style={{
            fontFamily: "'Bricolage Grotesque', sans-serif",
            fontWeight: 700,
            fontSize: 'clamp(28px, 4vw, 58px)',
            letterSpacing: '-0.03em',
            lineHeight: 1.15,
            color: '#EDEDF2',
            maxWidth: 720,
          }}
        >
          {statement}
        </p>
      </div>
    </section>
  )
}

export default function Manifesto() {
  return (
    <div style={{ backgroundColor: '#06060A' }}>

      {/* ── 01 HERO — full bleed, huge type ─────────────── */}
      <section
        className="relative flex items-end overflow-hidden"
        style={{ minHeight: '100svh' }}
      >
        <div className="absolute inset-0">
          <img
            src={ROAD_IMG}
            alt="Mountain road"
            className="w-full h-full object-cover"
            style={{ opacity: 0.45 }}
          />
          <div
            className="absolute inset-0"
            style={{ background: 'linear-gradient(160deg, rgba(6,6,10,0.15) 0%, rgba(6,6,10,0.7) 60%, rgba(6,6,10,0.98) 100%)' }}
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto w-full px-6 pb-20 pt-40">
          <p
            className="text-xs mb-8"
            style={{ color: '#C4FF47', fontFamily: "'DM Sans', sans-serif", letterSpacing: '0.32em' }}
          >
            YONDER MANIFEST
          </p>
          <h1
            style={{
              fontFamily: "'Bricolage Grotesque', sans-serif",
              fontSize: 'clamp(72px, 13vw, 180px)',
              fontWeight: 800,
              letterSpacing: '-0.045em',
              lineHeight: 0.88,
              color: '#EDEDF2',
            }}
          >
            BEYOND
            <br />
            <span style={{ color: 'rgba(237,237,242,0.2)' }}>NUMBERS.</span>
          </h1>
        </div>
      </section>

      {/* ── 02 STATEMENT — 100vh, one sentence ──────────── */}
      <section
        className="flex items-center justify-center"
        style={{ minHeight: '100vh', backgroundColor: '#06060A' }}
      >
        <p
          style={{
            fontFamily: "'Bricolage Grotesque', sans-serif",
            fontWeight: 800,
            fontSize: 'clamp(36px, 6vw, 88px)',
            letterSpacing: '-0.04em',
            lineHeight: 1.08,
            color: '#EDEDF2',
            maxWidth: 900,
            padding: '0 32px',
            textAlign: 'center',
          }}
        >
          Nicht alles, was zählt,{' '}
          <span style={{ color: 'rgba(237,237,242,0.22)' }}>lässt sich messen.</span>
        </p>
      </section>

      {/* ── 03 OPENING POEM ─────────────────────────────── */}
      <section
        className="border-t"
        style={{ backgroundColor: '#0A0A10', borderColor: 'rgba(255,255,255,0.06)', padding: 'clamp(80px, 12vw, 160px) 0' }}
      >
        <div style={{ maxWidth: 860, margin: '0 auto', padding: '0 32px' }}>
          {[
            { text: 'Es war nie nur eine Zahl.',                    w: 700, c: '#EDEDF2',                   s: 'clamp(30px, 4vw, 56px)', gap: false },
            { text: 'Nicht die Wattwerte.',                         w: 300, c: 'rgba(237,237,242,0.3)',     s: 'clamp(22px, 3vw, 40px)', gap: false },
            { text: 'Nicht die Durchschnittsgeschwindigkeit.',       w: 300, c: 'rgba(237,237,242,0.22)',    s: 'clamp(22px, 3vw, 40px)', gap: false },
            { text: 'Nicht die Platzierung in der Rangliste.',       w: 300, c: 'rgba(237,237,242,0.16)',    s: 'clamp(22px, 3vw, 40px)', gap: true  },
            { text: 'Es sind die Geschichten hinter jeder Fahrt.',   w: 600, c: '#EDEDF2',                   s: 'clamp(28px, 3.8vw, 52px)', gap: false },
            { text: 'Die Wege, die wir entdecken.',                   w: 400, c: 'rgba(237,237,242,0.6)',     s: 'clamp(22px, 3vw, 40px)', gap: false },
            { text: 'Die Menschen, die wir treffen.',                 w: 400, c: 'rgba(237,237,242,0.6)',     s: 'clamp(22px, 3vw, 40px)', gap: false },
            { text: 'Und die Erinnerungen, die bleiben.',             w: 400, c: 'rgba(237,237,242,0.6)',     s: 'clamp(22px, 3vw, 40px)', gap: true  },
            { text: 'Darum gehen wir weiter.',                        w: 800, c: '#EDEDF2',                   s: 'clamp(30px, 4vw, 56px)', gap: false },
            { text: 'Beyond Numbers.',                                w: 800, c: '#C4FF47',                   s: 'clamp(30px, 4vw, 56px)', gap: false },
          ].map(({ text, w, c, s, gap }, i) => (
            <p
              key={i}
              style={{
                fontFamily: "'Bricolage Grotesque', sans-serif",
                fontSize: s,
                fontWeight: w,
                letterSpacing: '-0.025em',
                lineHeight: 1.2,
                color: c,
                marginBottom: gap ? '1.6em' : '0.18em',
              }}
            >
              {text}
            </p>
          ))}
        </div>
      </section>

      {/* ── 04 FULL-BLEED COMMUNITY PHOTO ───────────────── */}
      <div style={{ width: '100%', overflow: 'hidden', lineHeight: 0 }}>
        <img
          src={communityImg}
          alt="YONDER Community"
          style={{ width: '100%', height: 'clamp(460px, 65vh, 820px)', objectFit: 'cover', display: 'block', filter: 'grayscale(8%)' }}
        />
      </div>

      {/* ── 05 WAS WIR VERGESSEN HABEN — editorial scroll ─ */}
      <section style={{ backgroundColor: '#06060A' }}>
        <div
          style={{ maxWidth: 1100, margin: '0 auto', padding: 'clamp(80px, 10vw, 130px) 32px 0' }}
        >
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 10, color: '#C4FF47', letterSpacing: '0.3em', marginBottom: 6 }}>01</p>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 10, color: 'rgba(237,237,242,0.25)', letterSpacing: '0.22em', marginBottom: 0 }}>WAS WIR VERGESSEN HABEN</p>
        </div>

        <ImageStatement
          img={SOLO_IMG}
          alt="Cyclist on open road"
          statement="Das Gefühl von Freiheit. Die erste lange Ausfahrt."
          dim={0.6}
        />

        <div style={{ maxWidth: 680, margin: '0 auto', padding: 'clamp(60px, 8vw, 100px) 32px' }}>
          <p style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: 18,
            color: 'rgba(237,237,242,0.55)',
            lineHeight: 1.9,
          }}>
            Dabei gerät oft in Vergessenheit, warum wir überhaupt angefangen haben. Es ist nicht
            der FTP-Wert, der uns um 5 Uhr morgens aus dem Bett treibt. Es ist etwas anderes.
            Etwas, das sich nicht in Zahlen ausdrücken lässt.
          </p>
        </div>

        <ImageStatement
          img={communityImg as string}
          alt="YONDER Community"
          statement="Die Gespräche im Windschatten. Neue Freundschaften."
          dim={0.7}
        />

        <div style={{ maxWidth: 680, margin: '0 auto', padding: 'clamp(60px, 8vw, 100px) 32px' }}>
          <p style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: 18,
            color: 'rgba(237,237,242,0.55)',
            lineHeight: 1.9,
          }}>
            Die besten Gespräche passieren auf langen Ausfahrten. Menschen, die gemeinsam wachsen
            — auf dem Rad und darüber hinaus. Diese Verbindungen entstehen nicht im Fitnessstudio.
            Sie entstehen draußen, wenn es wehtut und man trotzdem weiterfährt.
          </p>
        </div>

        <ImageStatement
          img={MOUNTAIN_IMG}
          alt="Mountain road adventure"
          statement="Sonnenaufgänge in den Bergen. Die Abenteuer hinter der nächsten Kurve."
          dim={0.5}
        />
      </section>

      {/* ── 06 UNSERE HALTUNG — magazine pull quotes ────── */}
      <section style={{ backgroundColor: '#06060A', padding: 'clamp(100px, 14vw, 180px) 0' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 32px' }}>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 10, color: '#C4FF47', letterSpacing: '0.3em', marginBottom: 6 }}>02</p>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 10, color: 'rgba(237,237,242,0.25)', letterSpacing: '0.22em', marginBottom: 'clamp(60px, 10vw, 120px)' }}>UNSERE HALTUNG</p>

          {[
            {
              headline: 'Nicht gegen Leistung.',
              body: 'Wir sind nicht gegen Watt, FTP-Tests oder Trainingsplanung. YONDER ist für Menschen, die Leistung wollen — aber wissen, dass die besten Rides mehr sind als eine PR auf Strava.',
            },
            {
              headline: 'Für Leistung mit Sinn.',
              body: 'Für Fortschritt, der mehr bedeutet als ein höherer FTP-Wert. Für Erlebnisse, die bleiben. Für Menschen, die gemeinsam wachsen — auf dem Rad und darüber hinaus.',
            },
            {
              headline: 'Für das, was bleibt.',
              body: 'In zehn Jahren wirst du dich nicht an deinen besten Wattwert erinnern. Du wirst dich an den Sonnenaufgang erinnern. An die Abfahrt, die sich anfühlte wie Fliegen. An die Freunde, die genauso verrückt waren wie du.',
            },
          ].map(({ headline, body }, i) => (
            <div
              key={i}
              style={{
                borderTop: '1px solid rgba(255,255,255,0.07)',
                paddingTop: 'clamp(48px, 7vw, 88px)',
                paddingBottom: 'clamp(48px, 7vw, 88px)',
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: 'clamp(32px, 6vw, 96px)',
                alignItems: 'start',
              }}
            >
              <h3
                style={{
                  fontFamily: "'Bricolage Grotesque', sans-serif",
                  fontWeight: 800,
                  fontSize: 'clamp(32px, 4.5vw, 64px)',
                  letterSpacing: '-0.035em',
                  lineHeight: 1.05,
                  color: i === 2 ? '#C4FF47' : '#EDEDF2',
                }}
              >
                {headline}
              </h3>
              <p
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: 17,
                  color: 'rgba(237,237,242,0.5)',
                  lineHeight: 1.85,
                  paddingTop: 8,
                }}
              >
                {body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── 07 CLOSING ──────────────────────────────────── */}
      <section
        className="flex items-center justify-center border-t"
        style={{ minHeight: '60vh', backgroundColor: '#0A0A10', borderColor: 'rgba(255,255,255,0.06)' }}
      >
        <div style={{ textAlign: 'center', padding: '80px 32px' }}>
          <p
            style={{
              fontFamily: "'Bricolage Grotesque', sans-serif",
              fontWeight: 800,
              fontSize: 'clamp(28px, 4.5vw, 64px)',
              letterSpacing: '-0.04em',
              lineHeight: 1.1,
              color: '#EDEDF2',
              marginBottom: 32,
            }}
          >
            Jeder Tritt bewegt mehr<br />
            <span style={{ color: 'rgba(237,237,242,0.22)' }}>als nur dein Bike.</span>
          </p>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 16 }}>
            <div style={{ width: 40, height: 1, backgroundColor: '#C4FF47' }} />
            <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 10, color: '#C4FF47', letterSpacing: '0.3em' }}>YONDER</span>
            <div style={{ width: 40, height: 1, backgroundColor: '#C4FF47' }} />
          </div>
        </div>
      </section>

    </div>
  )
}
