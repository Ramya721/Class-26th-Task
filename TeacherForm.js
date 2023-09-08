import React, { useState } from 'react';

const TeacherForm = ({ addTeacher }) => {
  const [name, setName] = useState('');
  const [subject, setSubject] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addTeacher({ name, subject });
    setName('');
    setSubject('');
  };

  return (
    <div>
      <h2>Add Teacher</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </label>
        <label>
          Subject:
          <input type="text" value={subject} onChange={(e) => setSubject(e.target.value)} required />
        </label>
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default TeacherForm;
