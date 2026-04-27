import { NotesList } from './NotesList'
import './NotesPage.css'

export function NotesPageTemplate() {
  return (
    <main className="notes-page">
      <header className="notes-page__header">
      </header>

      <NotesList />
    </main>
  )
}
