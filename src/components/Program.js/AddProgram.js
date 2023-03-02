import React, { useState } from 'react';
import axios from 'axios';

const AddProgram = () => {
  const [name, setName] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    axios.post('/api/programs', { name })
      .then(res => console.log(res))
      .catch(err => console.log(err));
    setName('');
  };

  return (
    <div>
      <h1>Add Program</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={name} onChange={e => setName(e.target.value)} />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default AddProgram;
