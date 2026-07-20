import { Link } from 'react-router-dom'
import YonderMark from './YonderMark'

const LINKS = [
  { label: 'Über uns', to: '/manifesto' },
  { label: 'Community', to: '/community' },
  { label: 'Events', to: '/events' },
  { label: 'Kontakt', to: '/community' },
]

export default function Footer() {
  return (
    <footer
      className="py-10 border-t"
      style={{ backgroundColor: '#06060A', borderColor: 'rgba(255,255,255,0.06)' }}
    >
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <Link to="/" className="flex items-center gap-3">
          <YonderMark size={20} />
          <span
            className="text-xs font-bold"
            style={{
              color: 'rgba(237,237,242,0.35)',
              fontFamily: "'Bricolage Grotesque', sans-serif",
              letterSpacing: '0.26em',
            }}
          >
            YONDER
          </span>
        </Link>

        <div className="flex flex-wrap gap-6">
          {LINKS.map(({ label, to }) => (
            <Link
              key={label}
              to={to}
              className="text-xs transition-colors duration-200"
              style={{
                color: 'rgba(237,237,242,0.25)',
                fontFamily: "'DM Sans', sans-serif",
                letterSpacing: '0.12em',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = 'rgba(237,237,242,0.65)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'rgba(237,237,242,0.25)'
              }}
            >
              {label.toUpperCase()}
            </Link>
          ))}
        </div>

        <p
          className="text-xs"
          style={{ color: 'rgba(237,237,242,0.2)', fontFamily: "'DM Sans', sans-serif" }}
        >
          © 2026 YONDER. Find your Pace.
        </p>
      </div>
    </footer>
  )
}
