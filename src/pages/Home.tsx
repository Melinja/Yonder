import { useState } from 'react'
import { Link } from 'react-router-dom'
import SectionLabel from '../components/SectionLabel'
import YonderMark from '../components/YonderMark'

const HERO_IMG =
  'https://images.unsplash.com/photo-1615845522846-02f89af04c2e?w=1920&h=1080&fit=crop&auto=format'
const MANIFESTO_IMG =
  'https://images.unsplash.com/photo-1542242476-5a3565835a38?w=800&h=600&fit=crop&auto=format'
const GALLERY_1 =
  'https://images.unsplash.com/photo-1615845522103-82f98cd2a9de?w=800&h=1000&fit=crop&auto=format'
const GALLERY_2 =
  'https://images.unsplash.com/photo-1769293191463-e0d620e71860?w=1200&h=700&fit=crop&auto=format'
const GALLERY_3 =
  'https://images.unsplash.com/photo-1774013433121-a29683a59214?w=1200&h=700&fit=crop&auto=format'

const VALUES = [
  {
    num: '01',
    title: 'EXPLORE',
    statement: 'Mehr als der nächste Kilometer.',
    lines: ['Wir fahren, um zu entdecken.', 'Neue Wege. Neue Perspektiven.', 'Neue Möglichkeiten.'],
    body: 'Weil jede Ausfahrt das Potenzial hat, mehr zu sein als nur Training.',
  },
  {
    num: '02',
    title: 'CONNECT',
    statement: 'Die besten Geschichten erlebt man zusammen.',
    lines: ['Gespräche werden zu Freundschaften.', 'Freundschaften werden zu Erinnerungen.'],
    body: 'Weil Menschen Menschen bewegen.',
  },
  {
    num: '03',
    title: 'EVOLVE',
    statement: 'Nicht um perfekt zu werden. Um zu wachsen.',
    lines: ['Jede Herausforderung hinterlässt etwas.', 'Mehr Erfahrung. Mehr Selbstvertrauen.'],
    body: 'Weil Fortschritt bedeutet, mehr von dem zu entdecken, was du bereits bist.',
  },
]


export default function Home() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────── */}
      <section
        className="relative flex flex-col overflow-hidden"
        style={{ minHeight: '100svh', backgroundColor: '#06060A' }}
      >
        <div className="absolute inset-0">
          <img
            src={HERO_IMG}
            alt="Cyclist on mountain road at dawn"
            className="w-full h-full object-cover"
            style={{ opacity: 0.5 }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(160deg, rgba(6,6,10,0.2) 0%, rgba(6,6,10,0.55) 50%, rgba(6,6,10,0.97) 100%)',
            }}
          />
        </div>

        <div className="relative z-10 flex-1 flex flex-col justify-end max-w-7xl mx-auto w-full px-6 pb-16 pt-36">
          <div className="mb-7">
            <span
              className="text-xs font-medium"
              style={{
                color: '#C4FF47',
                letterSpacing: '0.38em',
                fontFamily: "'DM Sans', sans-serif",
              }}
            >
              &nbsp;&nbsp;
            </span>
          </div>

          <h1
            className="leading-none mb-8"
            style={{
              fontFamily: "'Bricolage Grotesque', sans-serif",
              fontSize: 'clamp(60px, 10.5vw, 132px)',
              fontWeight: 800,
              letterSpacing: '-0.035em',
              lineHeight: 0.91,
            }}
          >
            <span className="block text-white">FIND YOUR</span>
            <span className="block" style={{ color: '#C4FF47' }}>
              PACE.
            </span>
          </h1>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <p
              className="text-xl max-w-xs"
              style={{
                color: 'rgba(237,237,242,0.6)',
                fontFamily: "'DM Sans', sans-serif",
                lineHeight: 1.65,
                fontWeight: 300,
              }}
            >
              Jenseits der Zahlen.
              <br />
              Im Moment. Gemeinsam.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/manifesto"
                className="text-xs px-6 py-3.5 transition-all duration-200"
                style={{
                  border: '1px solid rgba(237,237,242,0.25)',
                  color: 'rgba(237,237,242,0.7)',
                  letterSpacing: '0.1em',
                  fontFamily: "'DM Sans', sans-serif",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(237,237,242,0.6)'
                  e.currentTarget.style.color = '#EDEDF2'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(237,237,242,0.25)'
                  e.currentTarget.style.color = 'rgba(237,237,242,0.7)'
                }}
              >
                MEHR ERFAHREN ↓
              </Link>
              <Link
                to="/community"
                className="text-xs px-6 py-3.5 font-semibold transition-all duration-200"
                style={{
                  backgroundColor: '#C4FF47',
                  color: '#06060A',
                  letterSpacing: '0.1em',
                  fontFamily: "'DM Sans', sans-serif",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#d3ff65'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#C4FF47'
                }}
              >
                JOIN THE COMMUNITY →
              </Link>
            </div>
          </div>
        </div>

        <div
          className="relative z-10 overflow-hidden py-3.5 border-t"
          style={{
            borderColor: 'rgba(255,255,255,0.07)',
            backgroundColor: 'rgba(6,6,10,0.75)',
          }}
        >
          <div className="animate-marquee flex whitespace-nowrap" style={{ width: 'max-content' }}>
            {Array.from({ length: 8 }).map((_, i) => (
              <span
                key={i}
                className="text-xs mx-10"
                style={{
                  color: 'rgba(196,255,71,0.55)',
                  fontFamily: "'DM Sans', sans-serif",
                  letterSpacing: '0.28em',
                }}
              >
                BEYOND NUMBERS · FIND YOUR PACE · YONDER · JENSEITS DER ZAHLEN ·
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Manifesto Teaser ─────────────────────────────── */}
      <section className="py-32 md:py-44" style={{ backgroundColor: '#06060A' }}>
        <div className="max-w-7xl mx-auto px-6">
          <SectionLabel num="01" label="MANIFEST" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-28 items-start mt-20">
            <div>
              <h2
                className="font-extrabold leading-none mb-12"
                style={{
                  fontFamily: "'Bricolage Grotesque', sans-serif",
                  fontSize: 'clamp(44px, 5.5vw, 76px)',
                  fontWeight: 800,
                  letterSpacing: '-0.035em',
                  lineHeight: 1.0,
                }}
              >
                <span style={{ color: '#EDEDF2' }}>Der Radsport</span>
                <br />
                <span style={{ color: '#EDEDF2' }}>hat sich</span>
                <br />
                <span style={{ color: 'rgba(237,237,242,0.25)' }}>verändert.</span>
              </h2>

              <div className="overflow-hidden" style={{ aspectRatio: '4/3', backgroundColor: '#0E0E14' }}>
                <img
                  src={MANIFESTO_IMG}
                  alt="Empty curved mountain road"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  style={{ opacity: 0.65, filter: 'grayscale(15%)' }}
                />
              </div>
            </div>

            <div className="md:pt-3">
              <p
                className="text-xs mb-10 tracking-widest"
                style={{
                  color: 'rgba(237,237,242,0.35)',
                  fontFamily: "'DM Sans', sans-serif",
                  letterSpacing: '0.2em',
                }}
              >
                WARUM WIR HIER SIND
              </p>

              <div
                className="space-y-6"
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  color: 'rgba(237,237,242,0.65)',
                  lineHeight: 1.85,
                  fontSize: 16,
                }}
              >
                <p className="text-xl" style={{ color: 'rgba(237,237,242,0.85)', fontWeight: 400 }}>
                  Heute dreht sich vieles nur noch um Zahlen. Mehr Watt. Mehr Kilometer. Noch bessere
                  Ernährung. Noch leichteres Material.
                </p>
                <p>
                  Dabei gerät oft in Vergessenheit, warum wir überhaupt angefangen haben. Das Gefühl
                  von Freiheit. Die erste lange Ausfahrt. Neue Freundschaften. Sonnenaufgänge in den
                  Bergen.
                </p>
              </div>

              <div
                className="mt-12 pt-10 border-t"
                style={{ borderColor: 'rgba(255,255,255,0.07)' }}
              >
                <p
                  className="leading-snug mb-8"
                  style={{
                    fontFamily: "'Bricolage Grotesque', sans-serif",
                    fontSize: 'clamp(20px, 2.2vw, 28px)',
                    fontWeight: 700,
                    letterSpacing: '-0.015em',
                    color: '#EDEDF2',
                  }}
                >
                  YONDER erinnert daran,{' '}
                  <span style={{ color: '#C4FF47' }}>was hinter den Zahlen liegt.</span>
                </p>
                <Link
                  to="/manifesto"
                  className="text-xs transition-colors duration-200"
                  style={{
                    color: '#C4FF47',
                    letterSpacing: '0.18em',
                    fontFamily: "'DM Sans', sans-serif",
                    borderBottom: '1px solid rgba(196,255,71,0.4)',
                    paddingBottom: 3,
                  }}
                >
                  DAS VOLLE MANIFEST LESEN →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Values ───────────────────────────────────────── */}
      <section style={{ backgroundColor: '#06060A', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="max-w-7xl mx-auto px-6 pt-32 md:pt-44 pb-0">
          <SectionLabel num="02" label="VALUES" />
        </div>

        {/* Three-column editorial grid */}
        <div
          className="max-w-7xl mx-auto px-6 mt-20 grid grid-cols-1 md:grid-cols-3"
          style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}
        >
          {VALUES.map((v, i) => (
            <div
              key={v.num}
              className="group cursor-default transition-colors duration-500"
              style={{
                padding: '56px 48px 64px',
                borderRight: i < 2 ? '1px solid rgba(255,255,255,0.07)' : 'none',
              }}
            >
              {/* Index */}
              <p
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: 10,
                  color: 'rgba(196,255,71,0.4)',
                  letterSpacing: '0.3em',
                  marginBottom: 32,
                }}
              >
                {v.num}
              </p>

              {/* Title — dominates the card */}
              <h3
                className="transition-colors duration-400"
                style={{
                  fontFamily: "'Bricolage Grotesque', sans-serif",
                  fontSize: 'clamp(52px, 6.5vw, 88px)',
                  fontWeight: 800,
                  letterSpacing: '-0.04em',
                  lineHeight: 0.92,
                  color: '#EDEDF2',
                  marginBottom: 36,
                  transition: 'color 0.4s',
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = '#C4FF47' }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = '#EDEDF2' }}
              >
                {v.title}
              </h3>

              {/* Divider */}
              <div style={{ width: 32, height: 1, backgroundColor: 'rgba(196,255,71,0.3)', marginBottom: 28 }} />

              {/* Bold statement */}
              <p
                style={{
                  fontFamily: "'Bricolage Grotesque', sans-serif",
                  fontSize: 17,
                  fontWeight: 700,
                  color: '#EDEDF2',
                  lineHeight: 1.45,
                  letterSpacing: '-0.01em',
                  marginBottom: 20,
                }}
              >
                {v.statement}
              </p>

              {/* Lines */}
              <div style={{ marginBottom: 20 }}>
                {v.lines.map((line) => (
                  <p
                    key={line}
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: 14,
                      color: 'rgba(237,237,242,0.45)',
                      lineHeight: 1.8,
                    }}
                  >
                    {line}
                  </p>
                ))}
              </div>

              {/* Body */}
              <p
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: 13,
                  color: 'rgba(237,237,242,0.28)',
                  lineHeight: 1.85,
                  fontStyle: 'italic',
                }}
              >
                {v.body}
              </p>
            </div>
          ))}
        </div>

      </section>

      {/* ── Gallery ──────────────────────────────────────── */}
      <section className="py-32 md:py-44" style={{ backgroundColor: '#06060A' }}>
        <div className="max-w-7xl mx-auto px-6">
          <SectionLabel num="03" label="MOMENTE" />

          <div className="grid grid-cols-12 gap-3 md:gap-4 mt-20">
            <div
              className="col-span-12 md:col-span-5 relative overflow-hidden"
              style={{ backgroundColor: '#0E0E14' }}
            >
              <img
                src={GALLERY_1}
                alt="Cyclist on open road in daylight"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-[1.04]"
                style={{ aspectRatio: '3/4', display: 'block', opacity: 0.8 }}
              />
              <div
                className="absolute bottom-0 left-0 right-0 p-6"
                style={{
                  background: 'linear-gradient(to top, rgba(6,6,10,0.85), transparent)',
                }}
              >
                <p
                  className="text-xs tracking-widest"
                  style={{ color: '#C4FF47', fontFamily: "'DM Sans', sans-serif", letterSpacing: '0.22em' }}
                >
                  DER MOMENT
                </p>
              </div>
            </div>

            <div className="col-span-12 md:col-span-7 flex flex-col gap-3 md:gap-4">
              <div className="relative overflow-hidden" style={{ backgroundColor: '#0E0E14' }}>
                <img
                  src={GALLERY_2}
                  alt="Two cyclists on a grassy hill"
                  className="w-full object-cover transition-transform duration-700 hover:scale-[1.04]"
                  style={{ aspectRatio: '16/9', display: 'block', opacity: 0.8 }}
                />
                <div
                  className="absolute bottom-0 left-0 right-0 p-6"
                  style={{
                    background: 'linear-gradient(to top, rgba(6,6,10,0.85), transparent)',
                  }}
                >
                  <p
                    className="text-xs tracking-widest"
                    style={{ color: '#C4FF47', fontFamily: "'DM Sans', sans-serif", letterSpacing: '0.22em' }}
                  >
                    DIE GEMEINSCHAFT
                  </p>
                </div>
              </div>

              <div className="relative overflow-hidden" style={{ backgroundColor: '#0E0E14' }}>
                <img
                  src={GALLERY_3}
                  alt="Lone cyclist on a winding road"
                  className="w-full object-cover transition-transform duration-700 hover:scale-[1.04]"
                  style={{ aspectRatio: '16/9', display: 'block', opacity: 0.8 }}
                />
                <div
                  className="absolute bottom-0 left-0 right-0 p-6"
                  style={{
                    background: 'linear-gradient(to top, rgba(6,6,10,0.85), transparent)',
                  }}
                >
                  <p
                    className="text-xs tracking-widest"
                    style={{ color: '#C4FF47', fontFamily: "'DM Sans', sans-serif", letterSpacing: '0.22em' }}
                  >
                    DAS ABENTEUER
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Big Quote ────────────────────────────────────── */}
      <section
        className="py-36 md:py-52"
        style={{
          backgroundColor: '#0E0E14',
          borderTop: '1px solid rgba(255,255,255,0.06)',
          borderBottom: '1px solid rgba(255,255,255,0.06)',
        }}
      >
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p
            className="font-extrabold leading-none mb-10"
            style={{
              fontFamily: "'Bricolage Grotesque', sans-serif",
              fontSize: 'clamp(34px, 5.5vw, 76px)',
              fontWeight: 800,
              letterSpacing: '-0.035em',
              lineHeight: 1.06,
            }}
          >
            <span style={{ color: '#EDEDF2' }}>"Nicht alles, was zählt,</span>
            <br />
            <span style={{ color: 'rgba(237,237,242,0.28)' }}>lässt sich messen."</span>
          </p>
          <div className="flex items-center justify-center gap-4">
            <div className="h-px w-12" style={{ backgroundColor: '#C4FF47' }} />
            <span
              className="text-xs tracking-widest"
              style={{ color: '#C4FF47', fontFamily: "'DM Sans', sans-serif", letterSpacing: '0.28em' }}
            >
              YONDER
            </span>
            <div className="h-px w-12" style={{ backgroundColor: '#C4FF47' }} />
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────── */}
      <section id="cta" className="py-32 md:py-48" style={{ backgroundColor: '#06060A' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-2xl">
            <span
              className="text-xs tracking-widest block mb-8"
              style={{
                color: '#C4FF47',
                fontFamily: "'DM Sans', sans-serif",
                letterSpacing: '0.32em',
              }}
            >
              JOIN YONDER
            </span>
            <h2
              className="font-extrabold leading-none mb-6"
              style={{
                fontFamily: "'Bricolage Grotesque', sans-serif",
                fontSize: 'clamp(40px, 6vw, 80px)',
                fontWeight: 800,
                letterSpacing: '-0.035em',
                lineHeight: 0.95,
              }}
            >
              <span style={{ color: '#EDEDF2' }}>Bereit für</span>
              <br />
              <span style={{ color: '#C4FF47' }}>etwas anderes?</span>
            </h2>
            <p
              className="text-lg mb-12 max-w-md"
              style={{
                color: 'rgba(237,237,242,0.5)',
                fontFamily: "'DM Sans', sans-serif",
                lineHeight: 1.8,
                fontWeight: 300,
              }}
            >
              Werde Teil der YONDER Community. Für Fortschritt, der mehr bedeutet als ein höherer
              FTP-Wert.
            </p>

            {submitted ? (
              <div className="flex items-center gap-4 py-4">
                <YonderMark size={22} />
                <p
                  className="text-xs"
                  style={{
                    color: '#C4FF47',
                    fontFamily: "'DM Sans', sans-serif",
                    letterSpacing: '0.18em',
                  }}
                >
                  WILLKOMMEN BEI YONDER. WIR MELDEN UNS BALD.
                </p>
              </div>
            ) : (
              <div className="flex max-w-lg">
                <input
                  type="email"
                  placeholder="deine@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && email.includes('@') && setSubmitted(true)}
                  className="flex-1 px-5 py-4 text-sm outline-none"
                  style={{
                    backgroundColor: '#0E0E14',
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRight: 'none',
                    color: '#EDEDF2',
                    fontFamily: "'DM Sans', sans-serif",
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(196,255,71,0.5)'
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'
                  }}
                />
                <button
                  onClick={() => email.includes('@') && setSubmitted(true)}
                  className="px-6 py-4 text-xs font-semibold transition-colors duration-200"
                  style={{
                    backgroundColor: '#C4FF47',
                    color: '#06060A',
                    letterSpacing: '0.14em',
                    fontFamily: "'DM Sans', sans-serif",
                    whiteSpace: 'nowrap',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#d3ff65'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#C4FF47'
                  }}
                >
                  JOIN NOW
                </button>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  )
}
