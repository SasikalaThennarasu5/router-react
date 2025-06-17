// Mini Project 2: Simple Note App
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Project2 = () => {
  const [note, setNote] = useState('');
  const notes = useSelector((state) => state.notes);
  const dispatch = useDispatch();

  const addNote = () => {
    dispatch({ type: 'ADD_NOTE', payload: note });
    setNote('');
  };

  const deleteNote = (index) => {
    dispatch({ type: 'DELETE_NOTE', payload: index });
  };

  return (
    <div>
      <h2>Mini Project 2: Simple Note App</h2>
      <input value={note} onChange={(e) => setNote(e.target.value)} placeholder="Type note" />
      <button onClick={addNote}>Add Note</button>
      <ul>
        {notes.map((n, i) => (
          <li key={i}>{n} <button onClick={() => deleteNote(i)}>Delete</button></li>
        ))}
      </ul>
    </div>
  );
};

export default Project2;