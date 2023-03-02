import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Branches = () => {
  const [branches, setBranches] = useState([]);
  const [newBranchName, setNewBranchName] = useState('');
  const [editBranchName, setEditBranchName] = useState('');
  const [editBranchId, setEditBranchId] = useState('');

  useEffect(() => {
    axios.get('/api/branches')
      .then(response => {
        setBranches(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const handleNewBranchNameChange = (event) => {
    setNewBranchName(event.target.value);
  };

  const handleEditBranchNameChange = (event) => {
    setEditBranchName(event.target.value);
  };

  const handleAddBranch = () => {
    axios.post('/api/branches', { name: newBranchName })
      .then(response => {
        setBranches([...branches, response.data]);
        setNewBranchName('');
      })
      .catch(error => {
        console.log(error);
      });
  };

  const handleEditBranch = (id) => {
    axios.patch(`/api/branches/${id}`, { name: editBranchName })
      .then(response => {
        const updatedBranches = branches.map(branch => {
          if (branch._id === id) {
            branch.name = response.data.name;
          }
          return branch;
        });
        setBranches(updatedBranches);
        setEditBranchId('');
        setEditBranchName('');
      })
      .catch(error => {
        console.log(error);
      });
  };

  const handleDeleteBranch = (id) => {
    axios.delete(`/api/branches/${id}`)
      .then(response => {
        const updatedBranches = branches.filter(branch => branch._id !== id);
        setBranches(updatedBranches);
      })
      .catch(error => {
        console.log(error);
      });
  };

  const handleEditButtonClick = (id, name) => {
    setEditBranchId(id);
    setEditBranchName(name);
  };

  const handleCancelEdit = () => {
    setEditBranchId('');
    setEditBranchName('');
  };

  return (
    <div>
      <h1>Branches</h1>
      <ul>
        {branches.map(branch => (
          <li key={branch._id}>
            {editBranchId === branch._id ? (
              <>
                <input
                  type="text"
                  value={editBranchName}
                  onChange={handleEditBranchNameChange}
                />
                <button onClick={() => handleEditBranch(branch._id)}>Save</button>
                <button onClick={handleCancelEdit}>Cancel</button>
              </>
            ) : (
              <>
                {branch.name}
                <button onClick={() => handleEditButtonClick(branch._id, branch.name)}>Edit</button>
                <button onClick={() => handleDeleteBranch(branch._id)}>Delete</button>
              </>
            )}
          </li>
        ))}
      </ul>
      <div>
        <input
          type="text"
          value={newBranchName}
          onChange={handleNewBranchNameChange}
        />
        <button onClick={handleAddBranch}>Add</button>
      </div>
    </div>
  );
};

export default Branches;
