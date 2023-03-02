import React from 'react'
import { Link } from 'react-router-dom'

function PsNavbar() {
  return (
    <nav>
        <Link className="ainav" to="/sub/ps/intro">Introduction</Link><br/><br/>
        <Link className="ainav" to="/sub/ps/obj">Objective</Link><br/><br/>
        <Link className="ainav" to="/sub/ps/loe">List of Experiment</Link><br/><br/>
        <Link className="ainav" to="/sub/ps/ca">Course Alignment</Link><br/><br/>
        <Link className="ainav" to="/sub/ps/ta">Target Audience</Link><br/><br/>
        <Link className="ainav" to="/sub/ps/fb">Feedback</Link><br/><br/>
    </nav>
  )
}

export default PsNavbar