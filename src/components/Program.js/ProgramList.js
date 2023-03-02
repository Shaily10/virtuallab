import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProgramList = () => {
  const [programs, setPrograms] = useState([]);

  useEffect(() => {
    axios.get('/api/programs')
      .then(res => setPrograms(res.data))
      .catch(err => console.log(err));
  }, []);

  const handleEdit = (id, name) => {
    const newName = prompt('Enter a new name:', name);
    if (newName) {
      axios.put(`/api/programs/${id}`, { name: newName })
        .then(res => {
          const updatedPrograms = programs.map(program => {
            if (program._id === id) {
              program.name = newName;
            }
            return program;
          });
          setPrograms(updatedPrograms);
        })
        .catch(err => console.log(err));
    }
  };

  const handleDelete = id => {
    if (window.confirm('Are you sure you want to delete this program?')) {
      axios.delete(`/api/programs/${id}`)
        .then(res => {
          const updatedPrograms = programs.filter(program => program._id !== id);
          setPrograms(updatedPrograms);
        })
        .catch(err => console.log(err));
    }
  };

  return (
    <div>
      <h1>Programs</h1>
      <ul>
        {programs.map(program => (
          <li key={program._id}>
            {program.name}
            <button onClick={() => handleEdit(program._id, program.name)}>Edit</button>
            <button onClick={() => handleDelete(program._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProgramList;

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const ProgramList = () => {
//   const [programs, setPrograms] = useState([]);

//   useEffect(() => {
//     axios.get('/api/programs')
//       .then(res => setPrograms(res.data))
//       .catch(err => console.log(err));
//   }, []);

//   const handleEdit = (id, name) => {
//     const newName = prompt('Enter a new name:', name);
//     if (newName) {
//       axios.put(`/api/programs/${id}`, { name: newName })
//         .then(res => {
//           const updatedPrograms = programs.map(program => {
//             if (program._id === id) {
//               program.name = newName;
//             }
//             return program;
//           });
//           setPrograms(updatedPrograms);
//         })
//         .catch(err => console.log(err));
//     }
//   };

//   const handleDelete = id => {
//     if (window.confirm('Are you sure you want to delete this program?')) {
//       axios.delete(`/api/programs/${id}`)
//         .then(res => {
//           const updatedPrograms = programs.filter(program => program._id !== id);
//           setPrograms(updatedPrograms);
//         })
//         .catch(err => console.log(err));
//     }
//   };

//   return (
//     <div>
//       <h1>Programs</h1>
//       <ul>
//         {programs.map(program => (
//           <li key={program._id}>
//             {program.name}
//             <button onClick={() => handleEdit(program._id, program.name)}>Edit</button>
//             <button onClick={() => handleDelete(program._id)}>Delete</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default ProgramList;
