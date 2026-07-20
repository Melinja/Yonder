export default function YonderMark({
  size = 32,
  color = '#C4FF47',
}: {
  size?: number
  color?: string
}) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <path d="M16 2 L30 16 L16 30 L2 16 Z" stroke={color} strokeWidth="1.5" />
      <path d="M16 9 L16 23 M9 16 L23 16" stroke={color} strokeWidth="1.2" strokeLinecap="round" />
      <circle cx="16" cy="16" r="2" fill={color} />
    </svg>
  )
}
