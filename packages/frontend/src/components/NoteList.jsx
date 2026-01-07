import NoteItem from "./NoteItems";

function NotesList({ notes, onEdit, onDelete, searchTerm }) {
  if (notes.length === 0) {
    return (
      <div className="no-notes">
        {searchTerm ? (
          <>
            <p>No notes found for "{searchTerm}"</p>
            <p>Try adjusting your search terms</p>
          </>
        ) : (
          <>
            <p>No notes yet. Create your first note!</p>
            <p>Start by adding a title and content above</p>
          </>
        )}
      </div>
    );
  }

  return (
    <div className="notes-list">
      <h2 className="notes-list-title">
        {searchTerm ? (
          <>Found {notes.length} note{notes.length !== 1 ? 's' : ''} for "{searchTerm}"</>
        ) : (
          <>Your Notes ({notes.length})</>
        )}
      </h2>
      <div className="notes-grid">
        {notes.map((note) => (
          <NoteItem
            key={note.id}
            note={note}
            onEdit={onEdit}
            onDelete={onDelete}
          />
        ))}
      </div>
    </div>
  );
}

export default NotesList;