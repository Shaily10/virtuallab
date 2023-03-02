import React from 'react'
import { Link } from 'react-router-dom'

function DsNavbar() {
  return (
    <nav>
        <Link className="ainav" to="/sub/ds/intro">Introduction</Link><br/><br/>
        <Link className="ainav" to="/sub/ds/obj">Objective</Link><br/><br/>
        <Link className="ainav" to="/sub/ds/loe">List of Experiment</Link><br/><br/>
        <Link className="ainav" to="/sub/ds/ca">Course Alignment</Link><br/><br/>
        <Link className="ainav" to="/sub/ds/ta">Target Audience</Link><br/><br/>
        <Link className="ainav" to="/sub/ds/fb">Feedback</Link><br/><br/>
    </nav>
  )
}

export default DsNavbar