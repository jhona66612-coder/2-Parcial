import { NoteCard } from './NoteCard'

const notes = [
  {
    title: 'Agenda/Topic',
    description: 'Description of what is done here',
    variant: 'active',
    updatedAt: '3/8/2020',
    code: 'SAAS-0000',
      },
  {
    title: 'Agenda/Topic',
    description: 'Description of what is done here',
    variant: 'future',
    updatedAt: '3/8/2020',
    code: 'SAAS-0000',
    
  },
  {
    title: 'Agenda/Topic',
    description: 'Description of what is done here',
    variant: 'completed',
    updatedAt: '3/8/2020',
    code: 'SAAS-0000',
    
  },
]

export function NotesList() {
  return (
    <div className="notes-grid">
      {notes.map((note, index) => (
        <div key={`${note.variant}-${index}`}>
          <p className="helper-label">{note.helperLabel}</p>
          <NoteCard {...note} />
        </div>
      ))}
    </div>
  )
}
