import melinaImg from '../imports/Melina_Borgmann_Foto.jpg'
import raceImg   from '../imports/Evening__27_.jpg'

const D = "'Bricolage Grotesque', sans-serif"
const S = "'DM Sans', sans-serif"
const lime = '#C4FF47'
const white = '#EDEDF2'
const dim1  = 'rgba(237,237,242,0.55)'
const dim2  = 'rgba(237,237,242,0.25)'
const dim3  = 'rgba(237,237,242,0.12)'
const bg    = '#06060A'
const panel = '#0D0D12'

export default function About() {
  return (
    <div style={{ backgroundColor: bg, color: white }}>

      {/* ── HERO — Portrait, full viewport ───────────────── */}
      <section style={{ minHeight: '100svh', display: 'grid', gridTemplateColumns: '1fr 1fr', position: 'relative' }}>

        {/* Left: name + intro */}
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: '140px 56px 64px' }}>
          <p style={{ fontFamily: S, fontSize: 10, color: lime, letterSpacing: '0.3em', marginBottom: 24 }}>
            ÜBER YONDER
          </p>
          <h1 style={{ fontFamily: D, fontSize: 'clamp(48px, 6vw, 84px)', fontWeight: 800, letterSpacing: '-0.04em', lineHeight: 0.95, color: white, marginBottom: 32 }}>
            Melina<br />Borgmann
          </h1>
          <div style={{ width: 40, height: 2, backgroundColor: lime, marginBottom: 24 }} />
          <p style={{ fontFamily: S, fontSize: 15, color: dim1, lineHeight: 1.8, maxWidth: 360 }}>
            Radsportlerin. Coach. Gründerin von YONDER.<br />
            Und jemand, der weiß, was es bedeutet,<br />
            weiterzumachen — wenn alles dagegen spricht.
          </p>
        </div>

        {/* Right: portrait */}
        <div style={{ position: 'relative', overflow: 'hidden' }}>
          <img
            src={melinaImg}
            alt="Melina Borgmann"
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top', display: 'block' }}
          />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(6,6,10,0.4) 0%, transparent 40%)' }} />
        </div>
      </section>

      {/* ── OPENING STATEMENT ────────────────────────────── */}
      <section style={{ minHeight: '70vh', display: 'flex', alignItems: 'center', backgroundColor: panel, borderTop: '1px solid rgba(255,255,255,0.07)', padding: '80px 56px' }}>
        <blockquote style={{ maxWidth: 900, margin: '0 auto' }}>
          <p style={{ fontFamily: D, fontSize: 'clamp(32px, 5vw, 68px)', fontWeight: 700, letterSpacing: '-0.035em', lineHeight: 1.1, color: white }}>
            »Wenn Melina über Resilienz spricht,<br />
            <span style={{ color: lime }}>spricht sie aus Erfahrung.«</span>
          </p>
        </blockquote>
      </section>

      {/* ── BIO ──────────────────────────────────────────── */}
      <section style={{ padding: '96px 56px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '0 80px', alignItems: 'start' }}>
          <div style={{ paddingTop: 6 }}>
            <p style={{ fontFamily: S, fontSize: 10, color: lime, letterSpacing: '0.28em', marginBottom: 16 }}>
              DIE PERSON
            </p>
            <div style={{ width: 24, height: 1, backgroundColor: 'rgba(196,255,71,0.3)' }} />
          </div>
          <div>
            <p style={{ fontFamily: D, fontSize: 'clamp(22px, 2.8vw, 36px)', fontWeight: 700, letterSpacing: '-0.025em', lineHeight: 1.2, color: white, marginBottom: 28 }}>
              Sie ist nicht durch Bücher zur Überzeugung gekommen, dass Leistung Bedeutung braucht.
            </p>
            <p style={{ fontFamily: S, fontSize: 17, color: dim1, lineHeight: 1.9, marginBottom: 20 }}>
              Melina Borgmann hat Tausende Kilometer in den Beinen — auf asphaltierten Pässen,
              auf unbefestigten Schotterpisten und auf Strecken, die auf keiner Trainingskarte stehen.
              Sie hat erlebt, was passiert, wenn der Körper streikt und der Kopf entscheidet.
            </p>
            <p style={{ fontFamily: S, fontSize: 17, color: dim1, lineHeight: 1.9 }}>
              Als Coach bringt sie genau das in ihre Arbeit ein: keine theoretischen Konzepte,
              sondern gelebte Erfahrung. Die Gewissheit, dass Wachstum unbequem ist — und dass
              man trotzdem lachen kann, wenn das Wasser aus dem Helm tropft.
            </p>
          </div>
        </div>
      </section>

      {/* ── TRANS BALKAN — full bleed ────────────────────── */}
      <div style={{ position: 'relative', lineHeight: 0 }}>
        <img
          src={raceImg}
          alt="Trans Balkan Race"
          style={{ width: '100%', height: '80vh', objectFit: 'cover', objectPosition: 'center 40%', display: 'block', filter: 'grayscale(15%)' }}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(6,6,10,0.7) 0%, transparent 50%)' }} />
        <div style={{ position: 'absolute', bottom: 40, left: 56, right: 56, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
          <div>
            <p style={{ fontFamily: D, fontSize: 'clamp(18px, 2.5vw, 32px)', fontWeight: 700, letterSpacing: '-0.025em', color: white, lineHeight: 1.2, marginBottom: 8 }}>
              Trans Balkan Race
            </p>
            <p style={{ fontFamily: S, fontSize: 12, color: 'rgba(237,237,242,0.5)', letterSpacing: '0.12em' }}>
              Eines der härtesten Unsupported-Bikepackingrennen Europas
            </p>
          </div>
          <p style={{ fontFamily: S, fontSize: 10, color: lime, letterSpacing: '0.24em', textAlign: 'right' }}>
            BEYOND NUMBERS.
          </p>
        </div>
      </div>

      {/* ── RACE SECTION ─────────────────────────────────── */}
      <section style={{ backgroundColor: panel, padding: '96px 56px', borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '0 80px', alignItems: 'start' }}>
          <div>
            <p style={{ fontFamily: D, fontSize: 'clamp(22px, 2.8vw, 36px)', fontWeight: 700, letterSpacing: '-0.025em', lineHeight: 1.2, color: white, marginBottom: 28 }}>
              Im Trans Balkan Race lernt man, was wirklich zählt.
            </p>
            <p style={{ fontFamily: S, fontSize: 17, color: dim1, lineHeight: 1.9, marginBottom: 20 }}>
              Nicht die Vorbereitung. Nicht die Ausrüstung. Sondern die Entscheidung,
              weiterzumachen, wenn alles dagegen spricht. Wenn der Körper Pause will,
              die Nacht zu lang ist und das Ziel zu weit.
            </p>
            <p style={{ fontFamily: S, fontSize: 17, color: dim1, lineHeight: 1.9 }}>
              Diese Erfahrungen — die echten, die ungeschönten — sind der Kern von YONDER.
              Nicht als Mythos. Sondern als Methode.
            </p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 32, paddingTop: 8 }}>
            {[
              { num: '1.300', label: 'Kilometer' },
              { num: '30.000', label: 'Höhenmeter' },
              { num: '100 %', label: 'Unsupported' },
            ].map(({ num, label }) => (
              <div key={label} style={{ borderTop: '1px solid rgba(255,255,255,0.07)', paddingTop: 20 }}>
                <p style={{ fontFamily: D, fontSize: 36, fontWeight: 800, letterSpacing: '-0.03em', color: lime, lineHeight: 1, marginBottom: 4 }}>{num}</p>
                <p style={{ fontFamily: S, fontSize: 12, color: dim2, letterSpacing: '0.14em' }}>{label.toUpperCase()}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PULL QUOTE ───────────────────────────────────── */}
      <section style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '80px 56px' }}>
        <blockquote style={{ maxWidth: 820, textAlign: 'center' }}>
          <p style={{ fontFamily: D, fontSize: 'clamp(32px, 5vw, 68px)', fontWeight: 700, letterSpacing: '-0.035em', lineHeight: 1.1, color: white, marginBottom: 24 }}>
            »Leistung darf fordern.<br />
            <span style={{ color: lime }}>Sie sollte begeistern.«</span>
          </p>
          <p style={{ fontFamily: S, fontSize: 13, color: dim2, letterSpacing: '0.2em' }}>
            — MELINA BORGMANN, GRÜNDERIN YONDER
          </p>
        </blockquote>
      </section>

      {/* ── YONDER ORIGIN ────────────────────────────────── */}
      <section style={{ backgroundColor: panel, borderTop: '1px solid rgba(255,255,255,0.07)', padding: '96px 56px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '0 80px', alignItems: 'start' }}>
          <div style={{ paddingTop: 6 }}>
            <p style={{ fontFamily: S, fontSize: 10, color: lime, letterSpacing: '0.28em', marginBottom: 16 }}>
              WARUM YONDER
            </p>
            <div style={{ width: 24, height: 1, backgroundColor: 'rgba(196,255,71,0.3)' }} />
          </div>
          <div>
            <p style={{ fontFamily: D, fontSize: 'clamp(22px, 2.8vw, 36px)', fontWeight: 700, letterSpacing: '-0.025em', lineHeight: 1.2, color: white, marginBottom: 28 }}>
              YONDER ist nicht aus einer Geschäftsidee entstanden. Sondern aus einer Erfahrung.
            </p>
            <p style={{ fontFamily: S, fontSize: 17, color: dim1, lineHeight: 1.9, marginBottom: 20 }}>
              Aus der Überzeugung, dass sportliche Entwicklung und persönliches Wachstum dasselbe
              sind. Dass die Fähigkeiten, die wir uns auf langen Ausfahrten erarbeiten — Fokus,
              Resilienz, die Kunst weiterzumachen — weit über den Sport hinaus wirken.
            </p>
            <p style={{ fontFamily: S, fontSize: 17, color: dim1, lineHeight: 1.9 }}>
              Und dass es möglich ist, Leistung zu wollen und trotzdem nie zu vergessen, warum
              man überhaupt angefangen hat. YONDER ist der Versuch, beides zu leben — und
              andere dabei zu begleiten.
            </p>
          </div>
        </div>
      </section>

      {/* ── CLOSING ──────────────────────────────────────── */}
      <section style={{ padding: '96px 56px', borderTop: '1px solid rgba(255,255,255,0.07)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <p style={{ fontFamily: D, fontSize: 'clamp(36px, 5vw, 72px)', fontWeight: 800, letterSpacing: '-0.04em', lineHeight: 0.95, color: white, marginBottom: 40 }}>
            Find your Pace.<br />
            <span style={{ color: dim3 }}>Beyond Numbers.</span>
          </p>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <div style={{ width: 40, height: 1, backgroundColor: lime }} />
            <span style={{ fontFamily: S, fontSize: 10, color: lime, letterSpacing: '0.28em' }}>YONDER — MELINA BORGMANN</span>
          </div>
        </div>
      </section>

    </div>
  )
}
