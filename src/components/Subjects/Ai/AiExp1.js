import React from 'react'
import { Link } from 'react-router-dom'

function exp1() {
  return (
    <div>
        <Link className="aiexp1" to="/sub/ai/loe/exp1/aim">Aim</Link><br/><br/>
        <Link className="aiexp1" to="/sub/ai/loe/exp1/theory">Theory</Link><br/><br/>
        <Link className="aiexp1" to="/sub/ai/loe/exp1/assignment">Assignment</Link><br/><br/>
        <Link className="aiexp1" to="/sub/ai/loe/exp1/outcome">Outcome</Link><br/><br/>
        <Link className="aiexp1" to="/sub/ai/loe/exp1/simulation">simulation</Link><br/><br/>
        <Link className="aiexp1" to="/sub/ai/loe/exp1/references">references</Link><br/><br/>
    </div>
  )
}
export default exp1