import { useState } from 'react'
import SectionLabel from '../components/SectionLabel'

const display = "'Bricolage Grotesque', sans-serif"
const sans    = "'DM Sans', sans-serif"
const lime    = '#C4FF47'
const white   = '#EDEDF2'
const dim1    = 'rgba(237,237,242,0.55)'
const dim2    = 'rgba(237,237,242,0.22)'
const bg      = '#06060A'
const panel   = '#0D0D12'

const TOPICS = [
  'Grenzen verschieben – nicht um jeden Preis',
  'Was Ausdauersport über Resilienz lehrt',
  'Fokus auf das, was wirklich zählt',
  'Leistung ohne Leistungsdruck',
  'Mentale Stärke im Alltag',
  'Gewohnheiten, die bleiben',
  'Erfolg ohne Selbstoptimierungswahn',
  'Vom Sport ins Leben',
]

const SERVICES = [
  { n: '01', title: 'Coaching',            sub: 'Individuell auf und neben dem Rad', body: 'Persönliche Begleitung auf deinem Weg — angepasst an dein Leben, deine Ziele und dein Tempo.' },
  { n: '02', title: 'Leistungsdiagnostik', sub: 'Orientierung statt Druck',          body: 'Verstehe deinen Körper. Trainiere gezielt. Ohne Zahlen zum Selbstzweck.' },
  { n: '03', title: 'Fahrtechnik',         sub: 'Sicherheit & Selbstvertrauen',       body: 'Vom Umgang mit dem Bike bis zur Abfahrtstechnik — mehr Freude durch mehr Können.' },
  { n: '04', title: 'Bike Fitting',        sub: 'Mensch und Rad im Einklang',         body: 'Ein Rad, das wirklich passt, verändert alles. Komfort, Effizienz, Verletzungsfreiheit.' },
]

export default function Coachings() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async () => {
    if (!form.name || !form.email.includes('@') || !form.message) return
    setLoading(true)
    setError('')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) setSubmitted(true)
      else setError('Etwas ist schiefgelaufen. Bitte versuche es nochmal.')
    } catch {
      setError('Etwas ist schiefgelaufen. Bitte versuche es nochmal.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div style={{ backgroundColor: bg }}>

      {/* ── Hero ─────────────────────────────────────────── */}
      <section style={{ minHeight: '60vh', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: '140px 48px 64px', maxWidth: 1200, margin: '0 auto', width: '100%' }}>
        <p style={{ fontFamily: sans, fontSize: 10, color: lime, letterSpacing: '0.3em', marginBottom: 20 }}>
          YONDER COACHINGS
        </p>
        <h1 style={{ fontFamily: display, fontSize: 'clamp(52px, 7vw, 96px)', fontWeight: 800, letterSpacing: '-0.045em', lineHeight: 0.9, color: white, marginBottom: 28 }}>
          Auf und abseits<br />
          <span style={{ color: dim2 }}>des Rads.</span>
        </h1>
        <p style={{ fontFamily: sans, fontSize: 18, color: dim1, lineHeight: 1.8, maxWidth: 540 }}>
          Die Fähigkeiten, die wir im Sport entwickeln, helfen uns weit über das Training hinaus.
          Fokus. Resilienz. Selbstvertrauen. YONDER verbindet sportliche Entwicklung mit
          persönlichem Wachstum – auf dem Rad, im Beruf und im Alltag.
        </p>
      </section>

      {/* ── Services ─────────────────────────────────────── */}
      <section style={{ borderTop: '1px solid rgba(255,255,255,0.07)', padding: '72px 48px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <SectionLabel num="01" label="ANGEBOTE" />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 1, backgroundColor: 'rgba(255,255,255,0.05)', marginTop: 48 }}>
            {SERVICES.map(({ n, title, sub, body }) => (
              <div key={n} style={{ backgroundColor: bg, padding: '40px 32px' }}
                onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#0D0D12')}
                onMouseLeave={e => (e.currentTarget.style.backgroundColor = bg)}
              >
                <p style={{ fontFamily: sans, fontSize: 9, color: 'rgba(196,255,71,0.45)', letterSpacing: '0.28em', marginBottom: 16 }}>{n}</p>
                <p style={{ fontFamily: display, fontSize: 24, fontWeight: 700, letterSpacing: '-0.025em', lineHeight: 1.1, color: white, marginBottom: 6 }}>{title}</p>
                <p style={{ fontFamily: sans, fontSize: 12, color: lime, letterSpacing: '0.08em', marginBottom: 16 }}>{sub}</p>
                <p style={{ fontFamily: sans, fontSize: 14, color: dim1, lineHeight: 1.75 }}>{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Vorträge & Workshops ─────────────────────────── */}
      <section style={{ backgroundColor: panel, borderTop: '1px solid rgba(255,255,255,0.07)', padding: '72px 48px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px 80px', alignItems: 'start' }}>
          <div>
            <SectionLabel num="02" label="VORTRÄGE & WORKSHOPS" />
            <h2 style={{ fontFamily: display, fontSize: 'clamp(28px, 3.5vw, 44px)', fontWeight: 700, letterSpacing: '-0.03em', lineHeight: 1.15, color: white, marginTop: 32, marginBottom: 20 }}>
              Vorträge & Workshops
            </h2>
            <p style={{ fontFamily: sans, fontSize: 16, color: dim1, lineHeight: 1.85, maxWidth: 420 }}>
              Was der Sport über das Leben lehrt — in Vorträgen und Workshops für Teams,
              Führungskräfte und alle, die persönlich wachsen wollen.
            </p>
          </div>
          <ul style={{ marginTop: 0, paddingTop: 8 }}>
            {TOPICS.map((topic, i) => (
              <li key={i} style={{ display: 'flex', alignItems: 'center', gap: 16, padding: '14px 0', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                <span style={{ fontFamily: sans, fontSize: 10, color: 'rgba(196,255,71,0.4)', letterSpacing: '0.2em', minWidth: 22 }}>
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span style={{ fontFamily: sans, fontSize: 15, color: dim1, lineHeight: 1.5 }}>{topic}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Kontakt ──────────────────────────────────────── */}
      <section style={{ padding: '80px 48px', borderTop: '1px solid rgba(255,255,255,0.07)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0 80px', alignItems: 'start' }}>
          <div>
            <h2 style={{ fontFamily: display, fontSize: 'clamp(32px, 4vw, 56px)', fontWeight: 800, letterSpacing: '-0.035em', lineHeight: 1.05, color: white, marginBottom: 24 }}>
              Bereit für<br /><span style={{ color: lime }}>etwas anderes?</span>
            </h2>
            <p style={{ fontFamily: sans, fontSize: 17, color: dim1, lineHeight: 1.8, maxWidth: 400 }}>
              Melde dich — wir finden gemeinsam heraus, welches Angebot am besten zu dir passt.
            </p>
          </div>

          <div>
            {submitted ? (
              <div style={{ padding: '40px 0', display: 'flex', flexDirection: 'column', gap: 12 }}>
                <div style={{ width: 32, height: 2, backgroundColor: lime }} />
                <p style={{ fontFamily: sans, fontSize: 13, color: lime, letterSpacing: '0.2em' }}>NACHRICHT GESENDET.</p>
                <p style={{ fontFamily: sans, fontSize: 15, color: dim1, lineHeight: 1.7 }}>Danke — ich melde mich bald bei dir.</p>
              </div>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {[
                  { key: 'name',    placeholder: 'Dein Name',          type: 'text' },
                  { key: 'email',   placeholder: 'deine@email.com',    type: 'email' },
                ].map(({ key, placeholder, type }) => (
                  <input
                    key={key}
                    type={type}
                    placeholder={placeholder}
                    value={form[key as keyof typeof form]}
                    onChange={e => setForm(f => ({ ...f, [key]: e.target.value }))}
                    style={{
                      width: '100%', padding: '14px 18px', backgroundColor: panel,
                      border: '1px solid rgba(255,255,255,0.08)', color: white,
                      fontFamily: sans, fontSize: 14, outline: 'none', boxSizing: 'border-box',
                    }}
                    onFocus={e => (e.currentTarget.style.borderColor = 'rgba(196,255,71,0.4)')}
                    onBlur={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)')}
                  />
                ))}
                <textarea
                  placeholder="Deine Nachricht…"
                  rows={4}
                  value={form.message}
                  onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                  style={{
                    width: '100%', padding: '14px 18px', backgroundColor: panel,
                    border: '1px solid rgba(255,255,255,0.08)', color: white,
                    fontFamily: sans, fontSize: 14, outline: 'none', resize: 'vertical', boxSizing: 'border-box',
                  }}
                  onFocus={e => (e.currentTarget.style.borderColor = 'rgba(196,255,71,0.4)')}
                  onBlur={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)')}
                />
                {error && <p style={{ fontFamily: sans, fontSize: 13, color: '#ff6b6b' }}>{error}</p>}
                <button
                  onClick={handleSubmit}
                  disabled={loading}
                  style={{
                    padding: '14px 32px', backgroundColor: loading ? 'rgba(196,255,71,0.5)' : lime,
                    color: bg, fontFamily: sans, fontSize: 12, fontWeight: 600,
                    letterSpacing: '0.14em', cursor: loading ? 'wait' : 'pointer',
                    border: 'none', alignSelf: 'flex-start',
                  }}
                  onMouseEnter={e => { if (!loading) e.currentTarget.style.backgroundColor = '#d3ff65' }}
                  onMouseLeave={e => { if (!loading) e.currentTarget.style.backgroundColor = lime }}
                >
                  {loading ? '…' : 'SENDEN →'}
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

    </div>
  )
}
