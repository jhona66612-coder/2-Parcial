import { NoteCard } from '../NoteCard'

const notes = [
  {
    title: 'Agenda/Topic',
    description: 'Description of what is done here',
    status: 'Active',
    variant: 'active',
    updatedAt: '3/8/2020',
    code: 'SAAS-0000',
  },
  {
    title: 'Agenda/Topic',
    description: 'Description of what is done here',
    status: 'Future',
    variant: 'future',
    updatedAt: '3/8/2020',
    code: 'SAAS-0000',
  },
  {
    title: 'Agenda/Topic',
    description: 'Description of what is done here',
    status: 'Completed',
    variant: 'completed',
    updatedAt: '3/8/2020',
    code: 'SAAS-0000',
  },
]

export function NotesList() {
  return (
    <div className="notes-grid">
      {notes.map((note, index) => (
        <NoteCard key={`${note.variant}-${index}`} {...note} />
      ))}
    </div>
  )
}
