import SectionLabel from '../components/SectionLabel'
import communityImg from '../imports/image-4.png'

const ROAD_IMG =
  'https://images.unsplash.com/photo-1542242476-5a3565835a38?w=1200&h=800&fit=crop&auto=format'
const DAWN_IMG = communityImg

const LINES = [
  'Das Gefühl von Freiheit.',
  'Die erste lange Ausfahrt.',
  'Die Gespräche im Windschatten.',
  'Neue Freundschaften.',
  'Sonnenaufgänge in den Bergen.',
  'Die Momente, in denen du über dich hinauswächst.',
  'Die Abenteuer, die hinter der nächsten Kurve warten.',
]

export default function Manifesto() {
  return (
    <div style={{ backgroundColor: '#06060A' }}>
      {/* ── Page hero ──────────────────────────────── */}
      <section
        className="relative flex items-end overflow-hidden"
        style={{ minHeight: '60vh', backgroundColor: '#06060A' }}
      >
        <div className="absolute inset-0">
          <img
            src={ROAD_IMG}
            alt="Mountain road curving into the distance"
            className="w-full h-full object-cover"
            style={{ opacity: 0.35 }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(to bottom, rgba(6,6,10,0.5) 0%, rgba(6,6,10,0.98) 100%)',
            }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto w-full px-6 pb-20 pt-40">
          <p
            className="text-xs mb-6"
            style={{
              color: '#C4FF47',
              fontFamily: "'DM Sans', sans-serif",
              letterSpacing: '0.32em',
            }}
          >
            YONDER MANIFEST
          </p>
          <h1
            className="font-extrabold leading-none"
            style={{
              fontFamily: "'Bricolage Grotesque', sans-serif",
              fontSize: 'clamp(52px, 8vw, 110px)',
              fontWeight: 800,
              letterSpacing: '-0.04em',
              lineHeight: 0.92,
              color: '#EDEDF2',
            }}
          >
            BEYOND
            <br />
            <span style={{ color: 'rgba(237,237,242,0.25)' }}>NUMBERS.</span>
          </h1>
        </div>
      </section>

      {/* ── Opening ────────────────────────────────── */}
      <section className="py-24 md:py-40" style={{ backgroundColor: '#06060A' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            {[
              { text: 'Es war nie nur eine Zahl.', weight: 700, color: '#EDEDF2', size: 'clamp(28px, 3.8vw, 52px)' },
              { text: 'Nicht die Wattwerte.', weight: 300, color: 'rgba(237,237,242,0.35)', size: 'clamp(22px, 2.8vw, 38px)' },
              { text: 'Nicht die Durchschnittsgeschwindigkeit.', weight: 300, color: 'rgba(237,237,242,0.28)', size: 'clamp(22px, 2.8vw, 38px)' },
              { text: 'Nicht die Platzierung in der Rangliste.', weight: 300, color: 'rgba(237,237,242,0.22)', size: 'clamp(22px, 2.8vw, 38px)' },
              { text: 'Es sind die Geschichten hinter jeder Fahrt.', weight: 600, color: '#EDEDF2', size: 'clamp(26px, 3.4vw, 46px)' },
              { text: 'Die Wege, die wir entdecken.', weight: 400, color: 'rgba(237,237,242,0.65)', size: 'clamp(22px, 2.8vw, 38px)' },
              { text: 'Die Menschen, die wir treffen.', weight: 400, color: 'rgba(237,237,242,0.65)', size: 'clamp(22px, 2.8vw, 38px)' },
              { text: 'Und die Erinnerungen, die bleiben.', weight: 400, color: 'rgba(237,237,242,0.65)', size: 'clamp(22px, 2.8vw, 38px)' },
              { text: 'Darum gehen wir weiter.', weight: 800, color: '#EDEDF2', size: 'clamp(28px, 3.8vw, 52px)' },
              { text: 'Beyond Numbers.', weight: 800, color: '#C4FF47', size: 'clamp(28px, 3.8vw, 52px)' },
            ].map(({ text, weight, color, size }, i) => (
              <p
                key={i}
                style={{
                  fontFamily: "'Bricolage Grotesque', sans-serif",
                  fontSize: size,
                  fontWeight: weight,
                  letterSpacing: '-0.025em',
                  lineHeight: 1.25,
                  color,
                  marginBottom: i === 3 || i === 8 ? '1.4em' : '0.15em',
                }}
              >
                {text}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* ── What we forgot ─────────────────────────── */}
      <section
        className="py-24 md:py-36 border-t"
        style={{ backgroundColor: '#0E0E14', borderColor: 'rgba(255,255,255,0.06)' }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <SectionLabel num="01" label="WAS WIR VERGESSEN HABEN" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-28 mt-20 items-center">
            <div>
              <p
                className="mb-8"
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: 18,
                  color: 'rgba(237,237,242,0.65)',
                  lineHeight: 1.85,
                }}
              >
                Dabei gerät oft in Vergessenheit, warum wir überhaupt angefangen haben.
              </p>
              <ul className="space-y-5">
                {LINES.map((line, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-4 text-base"
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      color: 'rgba(237,237,242,0.7)',
                      lineHeight: 1.6,
                    }}
                  >
                    <span
                      className="mt-2 shrink-0 h-px w-5"
                      style={{ backgroundColor: '#C4FF47' }}
                    />
                    {line}
                  </li>
                ))}
              </ul>
            </div>

            <div className="overflow-hidden" style={{ backgroundColor: '#06060A' }}>
              <img
                src={DAWN_IMG}
                alt="Cyclist on open road"
                className="w-full h-full object-cover"
                style={{ aspectRatio: '3/4', opacity: 0.75, filter: 'grayscale(10%)' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Our stance ─────────────────────────────── */}
      <section
        className="py-24 md:py-36 border-t"
        style={{ backgroundColor: '#06060A', borderColor: 'rgba(255,255,255,0.06)' }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <SectionLabel num="02" label="UNSERE HALTUNG" />

          <div className="mt-20 max-w-4xl space-y-12">
            {[
              {
                title: 'Nicht gegen Leistung.',
                body: 'Wir sind nicht gegen Watt, FTP-Tests oder Trainingsplanung. YONDER ist für Menschen, die Leistung wollen — aber wissen, dass die besten Rides mehr sind als eine PR auf Strava.',
              },
              {
                title: 'Sondern für Leistung mit Sinn.',
                body: 'Für Fortschritt, der mehr bedeutet als ein höherer FTP-Wert. Für Erlebnisse, die bleiben. Für Menschen, die gemeinsam wachsen — auf dem Rad und darüber hinaus.',
              },
              {
                title: 'Für das, was bleibt.',
                body: 'In zehn Jahren wirst du dich nicht an deinen besten Wattwert erinnern. Du wirst dich an den Sonnenaufgang erinnern. An die Abfahrt, die sich anfühlte wie Fliegen. An die Freunde, die genauso verrückt waren wie du.',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12 pt-10 border-t"
                style={{ borderColor: 'rgba(255,255,255,0.07)' }}
              >
                <h3
                  className="font-bold"
                  style={{
                    fontFamily: "'Bricolage Grotesque', sans-serif",
                    fontSize: 'clamp(20px, 2.2vw, 28px)',
                    fontWeight: 700,
                    letterSpacing: '-0.02em',
                    color: '#C4FF47',
                    lineHeight: 1.2,
                  }}
                >
                  {item.title}
                </h3>
                <p
                  className="md:col-span-2 text-base"
                  style={{
                    color: 'rgba(237,237,242,0.6)',
                    fontFamily: "'DM Sans', sans-serif",
                    lineHeight: 1.85,
                  }}
                >
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Closing statement ──────────────────────── */}
      <section
        className="py-36 md:py-52 text-center border-t"
        style={{ backgroundColor: '#0E0E14', borderColor: 'rgba(255,255,255,0.06)' }}
      >
        <div className="max-w-4xl mx-auto px-6">
          <p
            className="font-extrabold leading-tight mb-12"
            style={{
              fontFamily: "'Bricolage Grotesque', sans-serif",
              fontSize: 'clamp(36px, 5vw, 72px)',
              fontWeight: 800,
              letterSpacing: '-0.035em',
              color: '#EDEDF2',
            }}
          >
            Nicht alles, was zählt,{' '}
            <span style={{ color: 'rgba(237,237,242,0.28)' }}>lässt sich messen.</span>
          </p>
          <div className="flex items-center justify-center gap-4">
            <div className="h-px w-12" style={{ backgroundColor: '#C4FF47' }} />
            <span
              className="text-xs"
              style={{ color: '#C4FF47', fontFamily: "'DM Sans', sans-serif", letterSpacing: '0.28em' }}
            >
              YONDER
            </span>
            <div className="h-px w-12" style={{ backgroundColor: '#C4FF47' }} />
          </div>
        </div>
      </section>
    </div>
  )
}
