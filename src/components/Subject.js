import React from 'react';
import {Link} from 'react-router-dom'
import "../styles/subject.css"

function Subject() {
  return (
    <div>
      <h1>Subjects</h1>
      <Link className="sub" to="/sub/chem">Chemistry Lab</Link><br/><br/>
      <Link className="sub" to="/sub/ai">Artificial Intelligence Lab</Link><br/><br/>
      <Link className="sub" to="/sub/ds">Data Structures Lab</Link><br/><br/>
      <Link className="sub" to="/sub/daa">Design and Analisys of Algorithms Lab</Link><br/><br/>
      <Link className="sub" to="/sub/py">Python Programming Lab</Link><br/><br/>
      <Link className="sub" to="/sub/ps">Problem Solving Lab</Link><br/><br/>
    </div>
  );
}

export default Subject;
