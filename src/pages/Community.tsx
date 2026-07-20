import { useState } from 'react'

import SectionLabel from '../components/SectionLabel'
import YonderMark from '../components/YonderMark'

const GROUP_IMG =
  'https://images.unsplash.com/photo-1517649763962-0c623066013b?w=1400&h=800&fit=crop&auto=format'
const PELOTON_IMG =
  'https://images.unsplash.com/photo-1510766528597-60f9f1c154b6?w=900&h=600&fit=crop&auto=format'
const SOLO_IMG =
  'https://images.unsplash.com/photo-1723691074669-3ef7e3673213?w=600&h=900&fit=crop&auto=format'

const MEMBERS = [
  {
    name: 'Mara Steinberg',
    location: 'München',
    quote: 'Ich bin nicht schneller geworden — ich bin glücklicher geworden.',
    rides: 312,
    km: 18400,
  },
  {
    name: 'Jonas Reuther',
    location: 'Berlin',
    quote: 'Meine besten Freunde kenne ich aus dem Sattel heraus.',
    rides: 508,
    km: 31200,
  },
  {
    name: 'Leonie Kraft',
    location: 'Innsbruck',
    quote: 'Jeder Berg ist ein neues Kapitel.',
    rides: 241,
    km: 14700,
  },
]

const STATS = [
  { value: '4 200+', label: 'Mitglieder' },
  { value: '38', label: 'Länder' },
  { value: '2.1 Mio', label: 'Gemeinsame Kilometer' },
  { value: '∞', label: 'Gute Gespräche' },
]

export default function Community() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async () => {
    if (!email.includes('@')) return
    setLoading(true)
    setError('')
    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })
      if (res.ok) {
        setSubmitted(true)
      } else {
        setError('Etwas ist schiefgelaufen. Bitte versuche es nochmal.')
      }
    } catch {
      setError('Etwas ist schiefgelaufen. Bitte versuche es nochmal.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div style={{ backgroundColor: '#06060A' }}>
      {/* ── Page hero ──────────────────────────────── */}
      <section
        className="relative flex items-end overflow-hidden"
        style={{ minHeight: '60vh', backgroundColor: '#06060A' }}
      >
        <div className="absolute inset-0">
          <img
            src={GROUP_IMG}
            alt="Group of cyclists riding together on a road"
            className="w-full h-full object-cover"
            style={{ opacity: 0.4 }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(to bottom, rgba(6,6,10,0.4) 0%, rgba(6,6,10,0.97) 100%)',
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
            YONDER COMMUNITY
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
            GEMEINSAM
            <br />
            <span style={{ color: '#C4FF47' }}>WACHSEN.</span>
          </h1>
        </div>
      </section>

      {/* ── Stats ──────────────────────────────────── */}
      <section
        className="border-t border-b"
        style={{ borderColor: 'rgba(255,255,255,0.06)', backgroundColor: '#0E0E14' }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div
            className="grid grid-cols-2 md:grid-cols-4"
            style={{ borderLeft: '1px solid rgba(255,255,255,0.06)' }}
          >
            {STATS.map((s) => (
              <div
                key={s.label}
                className="px-8 py-12 border-r border-b md:border-b-0"
                style={{ borderColor: 'rgba(255,255,255,0.06)' }}
              >
                <p
                  className="font-extrabold mb-2"
                  style={{
                    fontFamily: "'Bricolage Grotesque', sans-serif",
                    fontSize: 'clamp(32px, 4vw, 52px)',
                    fontWeight: 800,
                    letterSpacing: '-0.03em',
                    color: '#C4FF47',
                  }}
                >
                  {s.value}
                </p>
                <p
                  className="text-xs"
                  style={{
                    color: 'rgba(237,237,242,0.4)',
                    fontFamily: "'DM Sans', sans-serif",
                    letterSpacing: '0.18em',
                  }}
                >
                  {s.label.toUpperCase()}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── About the community ────────────────────── */}
      <section className="py-32 md:py-44">
        <div className="max-w-7xl mx-auto px-6">
          <SectionLabel num="01" label="WER WIR SIND" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-28 mt-20 items-start">
            <div>
              <h2
                className="font-extrabold leading-none mb-10"
                style={{
                  fontFamily: "'Bricolage Grotesque', sans-serif",
                  fontSize: 'clamp(36px, 4.5vw, 60px)',
                  fontWeight: 800,
                  letterSpacing: '-0.035em',
                  lineHeight: 1.0,
                  color: '#EDEDF2',
                }}
              >
                Menschen,<br />
                die mehr<br />
                <span style={{ color: 'rgba(237,237,242,0.28)' }}>wollen.</span>
              </h2>
              <p
                className="text-base"
                style={{
                  color: 'rgba(237,237,242,0.55)',
                  fontFamily: "'DM Sans', sans-serif",
                  lineHeight: 1.9,
                }}
              >
                YONDER ist kein Club mit Mitgliedsnummer. Es ist eine Bewegung für alle, die das
                Rad als Weg verstehen — nicht nur als Sport. Anfänger und Profis. Rennfahrer und
                Gravel-Entdecker. Alle willkommen, solange die Haltung stimmt.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="overflow-hidden" style={{ backgroundColor: '#0E0E14', gridRow: 'span 2' }}>
                <img
                  src={SOLO_IMG}
                  alt="Cyclist riding through city"
                  className="w-full h-full object-cover"
                  style={{ opacity: 0.8 }}
                />
              </div>
              <div className="overflow-hidden" style={{ backgroundColor: '#0E0E14' }}>
                <img
                  src={PELOTON_IMG}
                  alt="Group of riders in peloton"
                  className="w-full h-full object-cover"
                  style={{ aspectRatio: '4/3', opacity: 0.8 }}
                />
              </div>
              <div
                className="p-6 flex flex-col justify-between"
                style={{ backgroundColor: '#0E0E14', aspectRatio: '4/3' }}
              >
                <p
                  className="text-xs"
                  style={{
                    color: '#C4FF47',
                    fontFamily: "'DM Sans', sans-serif",
                    letterSpacing: '0.2em',
                  }}
                >
                  FIND YOUR TRIBE
                </p>
                <p
                  className="text-sm"
                  style={{
                    color: 'rgba(237,237,242,0.5)',
                    fontFamily: "'DM Sans', sans-serif",
                    lineHeight: 1.7,
                    fontSize: 13,
                  }}
                >
                  Lokale Gruppen in über 38 Ländern. Ride-Meetings, gemeinsame Touren, digitale
                  Challenges.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Members ────────────────────────────────── */}
      <section
        className="py-32 md:py-44 border-t"
        style={{ backgroundColor: '#0E0E14', borderColor: 'rgba(255,255,255,0.06)' }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <SectionLabel num="02" label="STIMMEN" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px mt-20" style={{ backgroundColor: 'rgba(255,255,255,0.06)' }}>
            {MEMBERS.map((m) => (
              <div
                key={m.name}
                className="p-10 transition-colors duration-300"
                style={{ backgroundColor: '#0E0E14' }}
                onMouseEnter={(e) => {
                  ;(e.currentTarget as HTMLDivElement).style.backgroundColor = '#131318'
                }}
                onMouseLeave={(e) => {
                  ;(e.currentTarget as HTMLDivElement).style.backgroundColor = '#0E0E14'
                }}
              >
                <div className="flex items-center gap-3 mb-8">
                  <div
                    className="w-10 h-10 flex items-center justify-center"
                    style={{ backgroundColor: 'rgba(196,255,71,0.1)', border: '1px solid rgba(196,255,71,0.2)' }}
                  >
                    <YonderMark size={16} />
                  </div>
                  <div>
                    <p
                      className="text-sm font-semibold"
                      style={{ color: '#EDEDF2', fontFamily: "'DM Sans', sans-serif" }}
                    >
                      {m.name}
                    </p>
                    <p
                      className="text-xs"
                      style={{ color: 'rgba(237,237,242,0.35)', fontFamily: "'DM Sans', sans-serif" }}
                    >
                      {m.location}
                    </p>
                  </div>
                </div>

                <p
                  className="text-base mb-8 leading-relaxed"
                  style={{
                    color: 'rgba(237,237,242,0.7)',
                    fontFamily: "'Bricolage Grotesque', sans-serif",
                    fontStyle: 'italic',
                    lineHeight: 1.6,
                  }}
                >
                  "{m.quote}"
                </p>

                <div className="flex gap-8 pt-6 border-t" style={{ borderColor: 'rgba(255,255,255,0.07)' }}>
                  <div>
                    <p
                      className="font-bold"
                      style={{ color: '#C4FF47', fontFamily: "'Bricolage Grotesque', sans-serif", fontSize: 20 }}
                    >
                      {m.rides}
                    </p>
                    <p
                      className="text-xs"
                      style={{ color: 'rgba(237,237,242,0.3)', fontFamily: "'DM Sans', sans-serif", letterSpacing: '0.12em' }}
                    >
                      RIDES
                    </p>
                  </div>
                  <div>
                    <p
                      className="font-bold"
                      style={{ color: '#C4FF47', fontFamily: "'Bricolage Grotesque', sans-serif", fontSize: 20 }}
                    >
                      {m.km.toLocaleString('de-DE')}
                    </p>
                    <p
                      className="text-xs"
                      style={{ color: 'rgba(237,237,242,0.3)', fontFamily: "'DM Sans', sans-serif", letterSpacing: '0.12em' }}
                    >
                      KILOMETER
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Join CTA ───────────────────────────────── */}
      <section className="py-32 md:py-48">
        <div className="max-w-7xl mx-auto px-6 max-w-2xl">
          <h2
            className="font-extrabold leading-none mb-6"
            style={{
              fontFamily: "'Bricolage Grotesque', sans-serif",
              fontSize: 'clamp(40px, 6vw, 76px)',
              fontWeight: 800,
              letterSpacing: '-0.035em',
              lineHeight: 0.95,
              color: '#EDEDF2',
            }}
          >
            Dein Platz<br />
            <span style={{ color: '#C4FF47' }}>wartet.</span>
          </h2>
          <p
            className="text-lg mb-10"
            style={{
              color: 'rgba(237,237,242,0.5)',
              fontFamily: "'DM Sans', sans-serif",
              lineHeight: 1.8,
              fontWeight: 300,
              maxWidth: 400,
            }}
          >
            Trage dich ein und wir melden uns mit allem, was du wissen musst.
          </p>

          {error && (
            <p style={{ color: '#ff6b6b', fontFamily: "'DM Sans', sans-serif", fontSize: 13, marginBottom: 12 }}>
              {error}
            </p>
          )}
          {submitted ? (
            <div className="flex items-center gap-4">
              <YonderMark size={20} />
              <p
                className="text-xs"
                style={{ color: '#C4FF47', fontFamily: "'DM Sans', sans-serif", letterSpacing: '0.18em' }}
              >
                WILLKOMMEN. WIR MELDEN UNS.
              </p>
            </div>
          ) : (
            <div className="flex max-w-lg">
              <input
                type="email"
                placeholder="deine@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
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
                onClick={handleSubmit}
                disabled={loading}
                className="px-6 py-4 text-xs font-semibold transition-colors duration-200"
                style={{
                  backgroundColor: loading ? 'rgba(196,255,71,0.5)' : '#C4FF47',
                  color: '#06060A',
                  letterSpacing: '0.14em',
                  fontFamily: "'DM Sans', sans-serif",
                  whiteSpace: 'nowrap',
                  cursor: loading ? 'wait' : 'pointer',
                }}
                onMouseEnter={(e) => { if (!loading) e.currentTarget.style.backgroundColor = '#d3ff65' }}
                onMouseLeave={(e) => { if (!loading) e.currentTarget.style.backgroundColor = '#C4FF47' }}
              >
                {loading ? '...' : 'JOIN NOW'}
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
