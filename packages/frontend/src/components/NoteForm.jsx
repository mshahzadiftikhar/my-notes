import { useState, useEffect } from "react";

function NoteForm({ onSave, noteToEdit, onCancel }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    if (noteToEdit) {
      setTitle(noteToEdit.title);
      setContent(noteToEdit.content);
    } else {
      setTitle("");
      setContent("");
    }
  }, [noteToEdit]);

  function handleSubmit(e) {
    e.preventDefault();

    if (!title.trim()) {
      alert("Please enter a title for your note");
      return;
    }

    onSave({
      id: noteToEdit ? noteToEdit.id : Date.now(),
      title: title.trim(),
      content: content.trim(),
    });

    // Reset form if creating new note
    if (!noteToEdit) {
      setTitle("");
      setContent("");
    }
  }

  return (
    <form className="note-form" onSubmit={handleSubmit}>
      <h2>{noteToEdit ? "Edit Note" : "Create New Note"}</h2>

      <div className="form-group">
        <input
          type="text"
          placeholder="Enter note title..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>

      <div className="form-group">
        <textarea
          placeholder="Write your note content here..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </div>

      <div className="form-actions">
        <button type="submit" className="btn btn-primary">
          {noteToEdit ? "Update Note" : "Add Note"}
        </button>

        {noteToEdit && (
          <button type="button" className="btn btn-secondary" onClick={onCancel}>
            Cancel
          </button>
        )}
      </div>
    </form>
  );
}

export default NoteForm;