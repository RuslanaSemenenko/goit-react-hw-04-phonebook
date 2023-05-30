import React, { useState } from 'react';
import {
  TaskEditor,
  TaskEditorLabel,
  TaskEditorInput,
  TaskEditorButton,
} from './ContactForm.module.jsx';

export default function ContactForm({ onAddContact }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = e => {
    const { name, value } = e.target;
    if (name === 'name') {
      setName(value);
    } else if (name === 'number') {
      setNumber(value);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    onAddContact({ name, number });
    setName('');
    setNumber('');
  };

  return (
    <TaskEditor onSubmit={handleSubmit}>
      <TaskEditorLabel>
        Name
        <TaskEditorInput
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
        />
      </TaskEditorLabel>
      <TaskEditorLabel>
        Number
        <TaskEditorInput
          type="text"
          name="number"
          value={number}
          onChange={handleChange}
        />
      </TaskEditorLabel>
      <TaskEditorButton type="submit" onClick={handleSubmit}>
        Add contact
      </TaskEditorButton>
    </TaskEditor>
  );
}
