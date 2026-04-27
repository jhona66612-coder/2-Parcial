import { NotesList } from '../NotesList'
import '../NotesPage.css'

export function NotesPageTemplate() {
  return (
    <main className="notes-page">
      <header className="notes-page__header">
        <div>
          <p className="eyebrow">Dashboard</p>
          <h1>Notes overview</h1>
          <p className="notes-page__subtitle">
            Reusable atomic and molecular components make this layout scalable.
          </p>
        </div>
      </header>

      <NotesList />
    </main>
  )
}
