import React from 'react'
import { Link } from 'react-router-dom'

function ChemNavbar() {
  return (
    <nav>
        <Link className="ainav" to="/sub/chem/intro">Introduction</Link><br/><br/>
        <Link className="ainav" to="/sub/chem/obj">Objective</Link><br/><br/>
        <Link className="ainav" to="/sub/chem/loe">List of Experiment</Link><br/><br/>
        <Link className="ainav" to="/sub/chem/ca">Course Alignment</Link><br/><br/>
        <Link className="ainav" to="/sub/chem/ta">Target Audience</Link><br/><br/>
        <Link className="ainav" to="/sub/chem/fb">Feedback</Link><br/><br/>
    </nav>
  )
}

export default ChemNavbar