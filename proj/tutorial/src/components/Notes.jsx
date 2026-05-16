
function Notes() {
  return (
    <div className="notes-section">
      <h2>Programming Notes</h2>

      {notesData.map((note) => (
        <div className="note-box" key={note.id}>
          <h3>{note.title}</h3>
          <p>{note.notes}</p>
        </div>
      ))}
    </div>
  )
}

export default Notes