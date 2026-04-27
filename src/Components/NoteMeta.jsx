export function NoteMeta({ code, updatedAt }) {
  return (
    <div className="note-meta">
      <p className="note-card__meta">{code}</p>
      <span className="note-meta__updated">
        Last Updated <strong>{updatedAt}</strong>
      </span>
    </div>
  )
}
