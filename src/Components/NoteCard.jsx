import { IconCircle } from './IconCircle'

export function NoteCard({ title, description, updatedAt, code, variant }) {
  return (
    <article className={`note-card note-card--${variant}`}>
      <div className={`note-card__header note-card__header--${variant}`}>
        <div className="note-card__header-left">
          <IconCircle text="1" variant={variant} />
          <span className="note-card__title">{title}</span>
        </div>
        <div className="note-card__header-right">
          <span className="note-card__code">{code}</span>
          <span className="note-card__diamond">◆</span>
        </div>
      </div>
      <div className="note-card__body">
        <p className="note-card__description">{description}</p>
        <div className="note-card__footer">
          <span className="note-card__footer-label">Last Updated</span>
          <span className="note-card__footer-date">{updatedAt}</span>
        </div>
      </div>
    </article>
  )
}
