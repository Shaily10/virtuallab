import React from 'react'
import { Link } from 'react-router-dom'

function PyNavbar() {
  return (
    <nav>
        <Link className="ainav" to="/sub/py/intro">Introduction</Link><br/><br/>
        <Link className="ainav" to="/sub/py/obj">Objective</Link><br/><br/>
        <Link className="ainav" to="/sub/py/loe">List of Experiment</Link><br/><br/>
        <Link className="ainav" to="/sub/py/ca">Course Alignment</Link><br/><br/>
        <Link className="ainav" to="/sub/py/ta">Target Audience</Link><br/><br/>
        <Link className="ainav" to="/sub/py/fb">Feedback</Link><br/><br/>
    </nav>
  )
}

export default PyNavbar