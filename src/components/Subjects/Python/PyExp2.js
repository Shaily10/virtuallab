import React from 'react'
import { Link } from 'react-router-dom'

function exp2() {
  return (
    <nav>
        <Link className="pyexp2" to="/sub/py/loe/exp2/aim2">Aim</Link><br/><br/>
        <Link className="pyexp2" to="/sub/py/loe/exp2/theory2">Theory</Link><br/><br/>
        <Link className="pyexp2" to="/sub/py/loe/exp2/pretest2">Pretest</Link><br/><br/>
        <Link className="pyexp2" to="/sub/py/loe/exp2/procedure2">procedure</Link><br/><br/>
        <Link className="pyexp2" to="/sub/py/loe/exp2/simulation2">simulation</Link><br/><br/>
        <Link className="pyexp2" to="/sub/py/loe/exp2/references2">references</Link><br/><br/>
        </nav>
  )
}
export default exp2