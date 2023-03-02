import React from 'react'
import { Link } from 'react-router-dom'

function exp1() {
  return (
    <nav>
        <Link className="pyexp1" to="/sub/py/loe/exp1/aim">Aim</Link><br/><br/>
        <Link className="pyexp1" to="/sub/py/loe/exp1/theory">Theory</Link><br/><br/>
        <Link className="pyexp1" to="/sub/py/loe/exp1/objective">Objective</Link><br/><br/>
        <Link className="pyexp1" to="/sub/py/loe/exp1/pretest">Pretest</Link><br/><br/>
        <Link className="pyexp1" to="/sub/py/loe/exp1/procedure">procedure</Link><br/><br/>
        <Link className="pyexp1" to="/sub/py/loe/exp1/simulation">simulation</Link><br/><br/>
        <Link className="pyexp1" to="/sub/py/loe/exp1/references">references</Link><br/><br/>
        </nav>
  )
}
export default exp1