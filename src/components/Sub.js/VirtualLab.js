import React, { useState, useEffect } from 'react';
import axios from 'axios';

const VirtualLab = () => {
  const [subjects, setSubjects] = useState([]);
  const [subjectForm, setSubjectForm] = useState({ name: '', branch: '' });
  const [isEditing, setIsEditing] = useState(false);
  const [editingSubjectId, setEditingSubjectId] = useState(null);

  useEffect(() => {
    fetchSubjects();
  }, []);

  const fetchSubjects = async () => {
    try {
      const res = await axios.get('/api/subjects');
      setSubjects(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSubjectForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const handleAddSubject = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/subjects', subjectForm);
      setSubjectForm({ name: '', branch: '' });
      fetchSubjects();
    } catch (err) {
      console.log(err);
    }
  };

  const handleViewSubject = async (id) => {
    try {
      const res = await axios.get(`/api/subjects/${id}`);
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleEditSubject = async (id) => {
    setIsEditing(true);
    setEditingSubjectId(id);
    try {
      const res = await axios.get(`/api/subjects/${id}`);
      setSubjectForm(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleUpdateSubject = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`/api/subjects/${editingSubjectId}`, subjectForm);
      setSubjectForm({ name: '', branch: '' });
      setIsEditing(false);
      setEditingSubjectId(null);
      fetchSubjects();
    } catch (err) {
      console.log(err);
    }
  };

  const handleDeleteSubject = async (id) => {
    try {
      await axios.delete(`/api/subjects/${id}`);
      fetchSubjects();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <h1>Virtual Lab</h1>
      <form onSubmit={isEditing ? handleUpdateSubject : handleAddSubject}>
        <label>
          Subject Name:
          <input
            type="text"
            name="name"
            value={subjectForm.name}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Branch:
          <input
            type="text"
            name="branch"
            value={subjectForm.branch}
            onChange={handleInputChange}
          />
        </label>
        <button type="submit">{isEditing ? 'Update' : 'Add'}</button>
      </form>
      <ul>
        {subjects.map((subject) => (
          <li key={subject._id}>
            {subject.name} ({subject.branch})
            <button onClick={() => handleViewSubject(subject._id)}>View</button>
            <button onClick={() => handleEditSubject(subject._id)}>Edit</button>
            <button onClick={() => handleDeleteSubject(subject._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default VirtualLab;