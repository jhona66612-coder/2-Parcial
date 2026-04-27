export function StatusPill({ label, variant }) {
  const variants = {
    active: { background: 'rgba(239, 68, 68, 0.12)', color: '#b91c1c' },
    future: { background: 'rgba(16, 185, 129, 0.12)', color: '#047857' },
    completed: { background: 'rgba(107, 114, 128, 0.16)', color: '#374151' },
  }

  const style = variants[variant] ?? variants.completed

  return (
    <span className="status-pill" style={style}>
      {label}
    </span>
  )
}
