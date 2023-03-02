import React from 'react'
import { Link } from 'react-router-dom'

function AiNavbar() {
  return (
    <nav>
        <Link className="ainav" to="/sub/ai/intro">Introduction</Link><br/><br/>
        <Link className="ainav" to="/sub/ai/obj">Objective</Link><br/><br/>
        <Link className="ainav" to="/sub/ai/loe">List of Experiment</Link><br/><br/>
        <Link className="ainav" to="/sub/ai/ca">Course Alignment</Link><br/><br/>
        <Link className="ainav" to="/sub/ai/ta">Target Audience</Link><br/><br/>
        <Link className="ainav" to="/sub/ai/fb">Feedback</Link><br/><br/>
    </nav>
  )
}

export default AiNavbar