import React from 'react'
import { Link } from 'react-router-dom'

function exp8() {
  return (
    <nav>
        <Link className="pyexp8" to="/sub/py/loe/exp8/aim">Aim</Link><br/><br/>
        <Link className="pyexp8" to="/sub/py/loe/exp8/theory">Theory</Link><br/><br/>
        <Link className="pyexp8" to="/sub/py/loe/exp8/objective">Objective</Link><br/><br/>
        <Link className="pyexp8" to="/sub/py/loe/exp8/pretest">Pretest</Link><br/><br/>
        <Link className="pyexp8" to="/sub/py/loe/exp8/procedure">procedure</Link><br/><br/>
        <Link className="pyexp8" to="/sub/py/loe/exp8/simulation">simulation</Link><br/><br/>
        <Link className="pyexp8" to="/sub/py/loe/exp8/reference">references</Link><br/><br/>
        </nav>
  )
}
export default exp8