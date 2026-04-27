export function IconCircle({ text, variant }) {
  return (
    <div className={`icon-circle icon-circle--${variant}`} aria-hidden="true">
      {text}
    </div>
  )
}
