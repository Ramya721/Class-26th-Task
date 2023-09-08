import React, { useState } from 'react';

const StudentForm = ({ addStudent }) => {
  const [name, setName] = useState('');
  const [grade, setGrade] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addStudent({ name, grade });
    setName('');
    setGrade('');
  };

  return (
    <div>
      <h2>Add Student</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </label>
        <label>
          Grade:
          <input type="text" value={grade} onChange={(e) => setGrade(e.target.value)} required />
        </label>
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default StudentForm;
