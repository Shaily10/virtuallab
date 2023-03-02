import React from 'react'
import { Link } from 'react-router-dom'

function DaaNavbar() {
  return (
    <nav>
        <Link className="ainav" to="/sub/daa/intro">Introduction</Link><br/><br/>
        <Link className="ainav" to="/sub/daa/obj">Objective</Link><br/><br/>
        <Link className="ainav" to="/sub/daa/loe">List of Experiment</Link><br/><br/>
        <Link className="ainav" to="/sub/daa/ca">Course Alignment</Link><br/><br/>
        <Link className="ainav" to="/sub/daa/ta">Target Audience</Link><br/><br/>
        <Link className="ainav" to="/sub/daa/fb">Feedback</Link><br/><br/>
    </nav>
  )
}

export default DaaNavbar