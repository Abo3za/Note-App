import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Note from "./Components/Note";
import SavedNotes from "./Components/SavedNote";
import "./styles.css";

export default function App() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    // Retrieve notes from localStorage when component mounts
    const savedNotes = JSON.parse(localStorage.getItem("notes")) || [];
    setNotes(savedNotes);
  }, []);

  const saveNote = (newNote) => {
    const updatedNotes = [...notes, newNote];
    setNotes(updatedNotes);
    localStorage.setItem("notes", JSON.stringify(updatedNotes));
  };

  const deleteNote = (indexToDelete) => {
    const updatedNotes = notes.filter((_, index) => index !== indexToDelete);
    setNotes(updatedNotes);
    localStorage.setItem("notes", JSON.stringify(updatedNotes));
  };

  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Note saveNote={saveNote} />} />
          <Route
            path="/saved"
            element={<SavedNotes notes={notes} onDelete={deleteNote} />}
          />
        </Routes>
      </div>
    </Router>
  );
}
