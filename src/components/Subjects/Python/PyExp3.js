import React from 'react'
import { Link } from 'react-router-dom'

function exp3() {
  return (
    <nav>
        <Link className="pyexp3" to="/sub/py/loe/exp3/aim3">Aim</Link><br/><br/>
        <Link className="pyexp3" to="/sub/py/loe/exp3/theory3">Theory</Link><br/><br/>
        <Link className="pyexp3" to="/sub/py/loe/exp3/pretest3">Pretest</Link><br/><br/>
        <Link className="pyexp3" to="/sub/py/loe/exp3/procedure3">procedure</Link><br/><br/>
        <Link className="pyexp3" to="/sub/py/loe/exp3/simulation3">simulation</Link><br/><br/>
        <Link className="pyexp3" to="/sub/py/loe/exp3/references3">references</Link><br/><br/>
        </nav>
  )
}
export default exp3