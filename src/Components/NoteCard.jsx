import { StatusPill } from '../StatusPill'
import { IconCircle } from '../IconCircle'
import { NoteMeta } from './NoteMeta'

export function NoteCard({ title, description, status, updatedAt, code, variant, accent }) {
  return (
    <article className={`note-card note-card--${variant}`}>
      <div className="note-card__head">
        <IconCircle text="1" />
        <StatusPill label={status} variant={variant} />
      </div>
      <div className="note-card__body">
        <NoteMeta code={code} updatedAt={updatedAt} />
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <div className="note-card__footer">
        <span>Last Updated</span>
        <strong>{updatedAt}</strong>
      </div>
    </article>
  )
}
