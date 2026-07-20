import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import YonderMark from './YonderMark'

const NAV_LINKS = [
  { label: 'MANIFESTO', to: '/manifesto' },
  { label: 'COMMUNITY', to: '/community' },
  { label: 'EVENTS', to: '/events' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        backgroundColor: scrolled || open ? 'rgba(6,6,10,0.95)' : 'transparent',
        backdropFilter: scrolled || open ? 'blur(14px)' : 'none',
        borderBottom: scrolled || open ? '1px solid rgba(255,255,255,0.06)' : 'none',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between" style={{ height: 72 }}>
        <Link to="/" className="flex items-center gap-3">
          <YonderMark size={26} />
          <span
            className="text-white text-sm font-bold"
            style={{ fontFamily: "'Bricolage Grotesque', sans-serif", letterSpacing: '0.28em' }}
          >
            YONDER
          </span>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map(({ label, to }) => (
            <NavLink
              key={to}
              to={to}
              className="text-xs transition-colors duration-200"
              style={({ isActive }) => ({
                color: isActive ? '#C4FF47' : 'rgba(237,237,242,0.5)',
                letterSpacing: '0.14em',
                fontFamily: "'DM Sans', sans-serif",
              })}
            >
              {label}
            </NavLink>
          ))}
          <Link
            to="/community"
            className="text-xs px-5 py-2.5 transition-all duration-200"
            style={{
              border: '1px solid #C4FF47',
              color: '#C4FF47',
              letterSpacing: '0.14em',
              fontFamily: "'DM Sans', sans-serif",
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
            JOIN NOW
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setOpen((v) => !v)}
          aria-label="Menü öffnen"
        >
          <span
            className="block h-px w-6 transition-all duration-300"
            style={{
              backgroundColor: '#C4FF47',
              transform: open ? 'rotate(45deg) translate(3px, 3px)' : 'none',
            }}
          />
          <span
            className="block h-px w-6 transition-all duration-300"
            style={{
              backgroundColor: '#C4FF47',
              opacity: open ? 0 : 1,
            }}
          />
          <span
            className="block h-px w-6 transition-all duration-300"
            style={{
              backgroundColor: '#C4FF47',
              transform: open ? 'rotate(-45deg) translate(3px, -3px)' : 'none',
            }}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          className="md:hidden px-6 pb-8 flex flex-col gap-6 border-t"
          style={{ borderColor: 'rgba(255,255,255,0.06)' }}
        >
          {NAV_LINKS.map(({ label, to }) => (
            <NavLink
              key={to}
              to={to}
              onClick={() => setOpen(false)}
              className="text-sm py-2"
              style={({ isActive }) => ({
                color: isActive ? '#C4FF47' : 'rgba(237,237,242,0.65)',
                letterSpacing: '0.18em',
                fontFamily: "'DM Sans', sans-serif",
              })}
            >
              {label}
            </NavLink>
          ))}
          <Link
            to="/community"
            onClick={() => setOpen(false)}
            className="text-xs px-5 py-3 text-center w-full transition-all duration-200"
            style={{
              border: '1px solid #C4FF47',
              color: '#C4FF47',
              letterSpacing: '0.14em',
              fontFamily: "'DM Sans', sans-serif",
            }}
          >
            JOIN NOW
          </Link>
        </div>
      )}
    </nav>
  )
}
