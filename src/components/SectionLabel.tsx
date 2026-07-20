export default function SectionLabel({ num, label }: { num: string; label: string }) {
  return (
    <div className="flex items-center gap-4">
      <span
        className="text-xs"
        style={{ color: '#C4FF47', fontFamily: "'DM Sans', sans-serif", letterSpacing: '0.28em' }}
      >
        {num}
      </span>
      <div className="h-px w-14" style={{ backgroundColor: 'rgba(196,255,71,0.35)' }} />
      <span
        className="text-xs"
        style={{
          color: 'rgba(237,237,242,0.3)',
          fontFamily: "'DM Sans', sans-serif",
          letterSpacing: '0.22em',
        }}
      >
        {label}
      </span>
    </div>
  )
}
