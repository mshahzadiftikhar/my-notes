import { useState, useMemo } from "react";
import "./App.css";
import NoteForm from "./components/NoteForm";
import NotesList from "./components/NoteList";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";

function App() {
  const [notes, setNotes] = useState([]);
  const [editingNote, setEditingNote] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("newest"); // newest, oldest, title
  
  // Authentication state
  const [user, setUser] = useState(null);
  const [authMode, setAuthMode] = useState('signin'); // 'signin' or 'signup'

  // Authentication functions
  const handleSignIn = (email) => {
    setUser({ email });
  };

  const handleSignUp = (email) => {
    setUser({ email });
  };

  const handleSignOut = () => {
    setUser(null);
    setNotes([]);
    setEditingNote(null);
    setSearchTerm("");
  };

  function saveNote(note) {
    setNotes((prev) => {
      const exists = prev.find((n) => n.id === note.id);
      return exists
        ? prev.map((n) => (n.id === note.id ? { ...note, updatedAt: Date.now() } : n))
        : [...prev, { ...note, createdAt: Date.now(), updatedAt: Date.now() }];
    });
    setEditingNote(null);
  }

  function deleteNote(id) {
    if (window.confirm("Are you sure you want to delete this note?")) {
      setNotes((prev) => prev.filter((n) => n.id !== id));
      if (editingNote && editingNote.id === id) {
        setEditingNote(null);
      }
    }
  }

  // Filter and sort notes
  const filteredAndSortedNotes = useMemo(() => {
    let filtered = notes.filter(
      (note) =>
        note.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        note.content.toLowerCase().includes(searchTerm.toLowerCase())
    );

    switch (sortBy) {
      case "oldest":
        return filtered.sort((a, b) => (a.createdAt || a.id) - (b.createdAt || b.id));
      case "title":
        return filtered.sort((a, b) => a.title.localeCompare(b.title));
      case "newest":
      default:
        return filtered.sort((a, b) => (b.updatedAt || b.id) - (a.updatedAt || a.id));
    }
  }, [notes, searchTerm, sortBy]);

  // Show authentication forms if user is not logged in
  if (!user) {
    if (authMode === 'signin') {
      return (
        <SignIn 
          onSignIn={handleSignIn}
          switchToSignUp={() => setAuthMode('signup')}
        />
      );
    } else {
      return (
        <SignUp 
          onSignUp={handleSignUp}
          switchToSignIn={() => setAuthMode('signin')}
        />
      );
    }
  }

  return (
    <div className="app">
      <header className="app-header">
        <div className="header-content">
          <div>
            <h1 className="app-title">My Notes</h1>
            <p className="app-subtitle">Organize your thoughts and ideas</p>
          </div>
          <div className="user-info">
            <span className="user-email">Welcome, {user.email}</span>
            <button onClick={handleSignOut} className="sign-out-button">
              Sign Out
            </button>
          </div>
        </div>
      </header>

      <main>
        <NoteForm
          onSave={saveNote}
          noteToEdit={editingNote}
          onCancel={() => setEditingNote(null)}
        />

        {notes.length > 0 && (
          <div className="notes-controls">
            <div className="search-container">
              <input
                type="text"
                className="search-input"
                placeholder="Search notes..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <div className="sort-container">
              <select
                className="sort-select"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="newest">Newest First</option>
                <option value="oldest">Oldest First</option>
                <option value="title">By Title</option>
              </select>
            </div>
          </div>
        )}

        <NotesList
          notes={filteredAndSortedNotes}
          onEdit={setEditingNote}
          onDelete={deleteNote}
          searchTerm={searchTerm}
        />
      </main>
    </div>
  );
}

export default App;