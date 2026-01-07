function NoteItem({ note, onEdit, onDelete }) {
  const formatDate = (timestamp) => {
    const date = new Date(timestamp);
    const now = new Date();
    const diffInHours = (now - date) / (1000 * 60 * 60);
    
    if (diffInHours < 24) {
      return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    } else if (diffInHours < 24 * 7) {
      return date.toLocaleDateString([], { weekday: 'short', hour: '2-digit', minute: '2-digit' });
    } else {
      return date.toLocaleDateString([], { month: 'short', day: 'numeric', year: 'numeric' });
    }
  };

  const truncateContent = (content, maxLength = 150) => {
    if (!content || content.length <= maxLength) return content;
    return content.substring(0, maxLength).trim() + '...';
  };

  return (
    <div className="note-item">
      <div className="note-header">
        <h3 className="note-title">{note.title || 'Untitled Note'}</h3>
        <div className="note-actions">
          <button 
            className="btn btn-secondary"
            onClick={() => onEdit(note)}
            title="Edit note"
          >
            ✏️ Edit
          </button>
          <button 
            className="btn btn-danger"
            onClick={() => onDelete(note.id)}
            title="Delete note"
          >
            🗑️ Delete
          </button>
        </div>
      </div>
      
      {note.content && (
        <div className="note-content">
          <p>{truncateContent(note.content)}</p>
        </div>
      )}
      
      <div className="note-meta">
        <small>
          {note.updatedAt && note.updatedAt !== note.createdAt && (
            <>Updated: {formatDate(note.updatedAt)}</>
          )}
          {(!note.updatedAt || note.updatedAt === note.createdAt) && (
            <>Created: {formatDate(note.createdAt || note.id)}</>
          )}
        </small>
      </div>
    </div>
  );
}

export default NoteItem;