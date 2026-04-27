export function StatusPill({ label, variant }) {
  const variants = {
    active: { background: 'rgba(255, 255, 255, 0.22)', color: '#ffffff' },
    future: { background: 'rgba(255, 255, 255, 0.18)', color: '#ffffff' },
    completed: { background: 'rgba(15, 23, 42, 0.08)', color: '#111827' },
  }

  const style = variants[variant] ?? variants.completed

  return (
    <span className="status-pill" style={style}>
      {label}
    </span>
  )
}
