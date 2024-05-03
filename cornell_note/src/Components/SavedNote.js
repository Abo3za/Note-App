import React, { useState } from "react";

const SavedNotes = ({ notes, onDelete }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedNote, setSelectedNote] = useState(null);

  const openModal = (note) => {
    setSelectedNote(note);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedNote(null);
  };

  return (
    <div className="saved-notes-container">
      <h2>Saved Notes</h2>
      <div className="notes-list">
        {notes.map((note, index) => (
          <div
            className="note-card"
            key={index}
            onClick={() => openModal(note)}
          >
            <h3>{note.topicObjective}</h3>
            <p>
              <strong>Date:</strong> {note.date}
            </p>
          </div>
        ))}
      </div>

      {modalOpen && (
        <div className="modal-background" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-modal" onClick={closeModal}>
              X
            </button>
            <h3>{selectedNote.topicObjective}</h3>
            <p>
              <strong>Date:</strong> {selectedNote.date}
            </p>
            <p>
              <strong>Class/Period:</strong> {selectedNote.classPeriod}
            </p>
            <p>
              <strong>Essential Question:</strong>{" "}
              {selectedNote.essentialQuestion}
            </p>
            <div className="notes-section">
              <p>
                <strong>Questions & Cues:</strong> {selectedNote.cues}
              </p>
              <p>
                <strong>Notes:</strong> {selectedNote.notes}
              </p>
              <p>
                <strong>Summary:</strong> {selectedNote.summary}
              </p>{" "}
              {/* Display summary */}
            </div>
            <button onClick={() => onDelete(notes.indexOf(selectedNote))}>
              Delete Note
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SavedNotes;
