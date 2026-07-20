import { useState } from 'react'
import SectionLabel from '../components/SectionLabel'

const RACE_IMG =
  'https://images.unsplash.com/photo-1517649763962-0c623066013b?w=1400&h=700&fit=crop&auto=format'

type EventType = 'Alle' | 'Gruppenausfahrt' | 'Renncamp' | 'Social'

const EVENTS = [
  {
    id: 1,
    date: '02. AUG 2026',
    day: 'SO',
    title: 'YONDER Sunday Ride — München',
    type: 'Gruppenausfahrt' as EventType,
    location: 'München, Bayern',
    distance: '95 km',
    elevation: '1 200 hm',
    spots: 18,
    total: 25,
    description:
      'Die klassische Sonntagsrunde durch das Isartal, raus nach Wolfratshausen und zurück über Grünwald. Gemütliches Tempo, Kaffeestopp inklusive.',
  },
  {
    id: 2,
    date: '09.–13. AUG 2026',
    day: '5 TAGE',
    title: 'YONDER Alpen Camp — Ötztal',
    type: 'Renncamp' as EventType,
    location: 'Sölden, Tirol',
    distance: '5 × 80–120 km',
    elevation: '18 000 hm gesamt',
    spots: 3,
    total: 20,
    description:
      'Fünf Tage, fünf Pässe. Das jährliche YONDER Alpencamp mit professioneller Begleitung, Videoleaks aus dem Peloton und unvergesslichen Abenden.',
  },
  {
    id: 3,
    date: '23. AUG 2026',
    day: 'SO',
    title: 'Gravel Xperience — Schwarzwald',
    type: 'Gruppenausfahrt' as EventType,
    location: 'Freiburg im Breisgau',
    distance: '110 km',
    elevation: '2 400 hm',
    spots: 12,
    total: 15,
    description:
      'Unverhärte Wege, Kiefernduft und der beste Aussichtspunkt im Hochschwarzwald. Gravel-Bikes empfohlen — Hardtails willkommen.',
  },
  {
    id: 4,
    date: '06. SEP 2026',
    day: 'SO',
    title: 'Season Closer — Berlin',
    type: 'Social' as EventType,
    location: 'Berlin Mitte',
    distance: '50 km + Party',
    elevation: '200 hm',
    spots: 40,
    total: 80,
    description:
      'Der gemütliche Abschluss der Saison. Kurze Runde durch Berlin, dann gemeinsames Grillen und die Highlights des Jahres. Alle Levels.',
  },
  {
    id: 5,
    date: '20. SEP 2026',
    day: 'SA',
    title: 'YONDER Racing Day — Nürburgring',
    type: 'Renncamp' as EventType,
    location: 'Nürburg, Rheinland-Pfalz',
    distance: '3 × 25 km',
    elevation: '900 hm',
    spots: 0,
    total: 30,
    description:
      'Drei Wertungsläufe auf dem Nürburgring-GP-Kurs. Professionelle Zeitmessung, Coaching und Analyse. Ausgebucht — Warteliste möglich.',
  },
  {
    id: 6,
    date: '04. OKT 2026',
    day: 'SO',
    title: 'Herbstklassiker — Wien',
    type: 'Gruppenausfahrt' as EventType,
    location: 'Wien, Österreich',
    distance: '130 km',
    elevation: '1 800 hm',
    spots: 22,
    total: 30,
    description:
      'Der Herbstklassiker durch den Wienerwald und die Weinberge um Klosterneuburg. Goldene Stunden, rote Blätter, guter Wein danach.',
  },
]

const FILTERS: EventType[] = ['Alle', 'Gruppenausfahrt', 'Renncamp', 'Social']

const TYPE_COLORS: Record<EventType, string> = {
  Alle: '#C4FF47',
  Gruppenausfahrt: '#C4FF47',
  Renncamp: '#FF6B47',
  Social: '#47C4FF',
}

export default function Events() {
  const [filter, setFilter] = useState<EventType>('Alle')

  const filtered = filter === 'Alle' ? EVENTS : EVENTS.filter((e) => e.type === filter)

  return (
    <div style={{ backgroundColor: '#06060A' }}>
      {/* ── Page hero ──────────────────────────────── */}
      <section
        className="relative flex items-end overflow-hidden"
        style={{ minHeight: '50vh', backgroundColor: '#06060A' }}
      >
        <div className="absolute inset-0">
          <img
            src={RACE_IMG}
            alt="Group of cyclists riding together on asphalt"
            className="w-full h-full object-cover"
            style={{ opacity: 0.35 }}
          />
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(to bottom, rgba(6,6,10,0.3) 0%, rgba(6,6,10,0.97) 100%)',
            }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto w-full px-6 pb-20 pt-36">
          <p
            className="text-xs mb-6"
            style={{
              color: '#C4FF47',
              fontFamily: "'DM Sans', sans-serif",
              letterSpacing: '0.32em',
            }}
          >
            YONDER EVENTS
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
            RIDES &
            <br />
            <span style={{ color: '#C4FF47' }}>ABENTEUER.</span>
          </h1>
        </div>
      </section>

      {/* ── Filter + Events ────────────────────────── */}
      <section className="py-24 md:py-36">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-16">
            <SectionLabel num="01" label={`${filtered.length} EVENTS`} />

            <div className="flex gap-2 flex-wrap">
              {FILTERS.map((f) => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className="text-xs px-4 py-2 transition-all duration-200"
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    letterSpacing: '0.12em',
                    border: `1px solid ${filter === f ? TYPE_COLORS[f] : 'rgba(255,255,255,0.12)'}`,
                    color: filter === f ? TYPE_COLORS[f] : 'rgba(237,237,242,0.45)',
                    backgroundColor: filter === f ? `${TYPE_COLORS[f]}14` : 'transparent',
                  }}
                >
                  {f.toUpperCase()}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-px" style={{ backgroundColor: 'rgba(255,255,255,0.06)' }}>
            {filtered.map((event) => {
              const sold = event.spots === 0
              const almostFull = event.spots > 0 && event.spots <= 5
              const accentColor = TYPE_COLORS[event.type]

              return (
                <div
                  key={event.id}
                  className="grid grid-cols-12 gap-6 p-8 transition-colors duration-200 cursor-pointer"
                  style={{ backgroundColor: '#06060A' }}
                  onMouseEnter={(e) => {
                    ;(e.currentTarget as HTMLDivElement).style.backgroundColor = '#0E0E14'
                  }}
                  onMouseLeave={(e) => {
                    ;(e.currentTarget as HTMLDivElement).style.backgroundColor = '#06060A'
                  }}
                >
                  {/* Date */}
                  <div className="col-span-2 md:col-span-1 flex flex-col items-start">
                    <p
                      className="font-bold text-2xl leading-none"
                      style={{
                        fontFamily: "'Bricolage Grotesque', sans-serif",
                        color: accentColor,
                        letterSpacing: '-0.02em',
                      }}
                    >
                      {event.day}
                    </p>
                    <p
                      className="text-xs mt-1"
                      style={{
                        color: 'rgba(237,237,242,0.3)',
                        fontFamily: "'DM Sans', sans-serif",
                        letterSpacing: '0.08em',
                        whiteSpace: 'nowrap',
                      }}
                    >
                      {event.date}
                    </p>
                  </div>

                  {/* Type badge */}
                  <div className="hidden md:flex col-span-2 items-start pt-1">
                    <span
                      className="text-xs px-2.5 py-1"
                      style={{
                        border: `1px solid ${accentColor}40`,
                        color: accentColor,
                        fontFamily: "'DM Sans', sans-serif",
                        letterSpacing: '0.12em',
                        whiteSpace: 'nowrap',
                      }}
                    >
                      {event.type.toUpperCase()}
                    </span>
                  </div>

                  {/* Main content */}
                  <div className="col-span-10 md:col-span-6">
                    <h3
                      className="font-bold mb-2"
                      style={{
                        fontFamily: "'Bricolage Grotesque', sans-serif",
                        fontSize: 'clamp(16px, 1.8vw, 22px)',
                        fontWeight: 700,
                        letterSpacing: '-0.02em',
                        color: '#EDEDF2',
                      }}
                    >
                      {event.title}
                    </h3>
                    <p
                      className="text-sm mb-3"
                      style={{
                        color: 'rgba(237,237,242,0.4)',
                        fontFamily: "'DM Sans', sans-serif",
                      }}
                    >
                      {event.location}
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
                      {event.description}
                    </p>
                  </div>

                  {/* Stats + CTA */}
                  <div className="col-span-12 md:col-span-3 flex flex-col justify-between gap-4">
                    <div className="flex gap-6 md:flex-col md:gap-2">
                      <div>
                        <p
                          className="text-xs"
                          style={{ color: 'rgba(237,237,242,0.3)', fontFamily: "'DM Sans', sans-serif", letterSpacing: '0.1em' }}
                        >
                          DISTANZ
                        </p>
                        <p
                          className="text-sm font-semibold"
                          style={{ color: '#EDEDF2', fontFamily: "'DM Sans', sans-serif" }}
                        >
                          {event.distance}
                        </p>
                      </div>
                      <div>
                        <p
                          className="text-xs"
                          style={{ color: 'rgba(237,237,242,0.3)', fontFamily: "'DM Sans', sans-serif", letterSpacing: '0.1em' }}
                        >
                          HÖHENMETER
                        </p>
                        <p
                          className="text-sm font-semibold"
                          style={{ color: '#EDEDF2', fontFamily: "'DM Sans', sans-serif" }}
                        >
                          {event.elevation}
                        </p>
                      </div>
                    </div>

                    <div>
                      {sold ? (
                        <span
                          className="text-xs px-4 py-2.5 block text-center"
                          style={{
                            border: '1px solid rgba(255,255,255,0.12)',
                            color: 'rgba(237,237,242,0.3)',
                            fontFamily: "'DM Sans', sans-serif",
                            letterSpacing: '0.12em',
                          }}
                        >
                          AUSGEBUCHT
                        </span>
                      ) : (
                        <button
                          className="text-xs px-4 py-2.5 w-full transition-all duration-200"
                          style={{
                            backgroundColor: almostFull ? accentColor : 'transparent',
                            border: `1px solid ${accentColor}`,
                            color: almostFull ? '#06060A' : accentColor,
                            fontFamily: "'DM Sans', sans-serif",
                            letterSpacing: '0.12em',
                            fontWeight: almostFull ? 700 : 400,
                          }}
                          onMouseEnter={(e) => {
                            if (!almostFull) {
                              e.currentTarget.style.backgroundColor = accentColor
                              e.currentTarget.style.color = '#06060A'
                            }
                          }}
                          onMouseLeave={(e) => {
                            if (!almostFull) {
                              e.currentTarget.style.backgroundColor = 'transparent'
                              e.currentTarget.style.color = accentColor
                            }
                          }}
                        >
                          {almostFull
                            ? `NUR NOCH ${event.spots} PLÄTZE`
                            : `ANMELDEN (${event.spots})`}
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── Own event CTA ──────────────────────────── */}
      <section
        className="py-24 border-t"
        style={{ borderColor: 'rgba(255,255,255,0.06)', backgroundColor: '#0E0E14' }}
      >
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <p
              className="font-bold mb-2"
              style={{
                fontFamily: "'Bricolage Grotesque', sans-serif",
                fontSize: 'clamp(22px, 2.5vw, 32px)',
                fontWeight: 700,
                letterSpacing: '-0.02em',
                color: '#EDEDF2',
              }}
            >
              Du willst ein YONDER Event in deiner Stadt?
            </p>
            <p
              className="text-sm"
              style={{
                color: 'rgba(237,237,242,0.45)',
                fontFamily: "'DM Sans', sans-serif",
                lineHeight: 1.7,
              }}
            >
              Wir helfen dir bei Planung, Kommunikation und Ausrüstung.
            </p>
          </div>
          <a
            href="mailto:events@yonder.cc"
            className="shrink-0 text-xs px-8 py-4 transition-all duration-200"
            style={{
              border: '1px solid #C4FF47',
              color: '#C4FF47',
              letterSpacing: '0.14em',
              fontFamily: "'DM Sans', sans-serif",
              whiteSpace: 'nowrap',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#C4FF47'
              e.currentTarget.style.color = '#06060A'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent'
              e.currentTarget.style.color = '#C4FF47'
            }}
          >
            EVENT EINREICHEN →
          </a>
        </div>
      </section>
    </div>
  )
}
