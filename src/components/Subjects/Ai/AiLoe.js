import React from 'react'
import { Link } from 'react-router-dom'
import "../../../styles/ai/AiLoe.css";

function loe() {
  return (
    <div className="container">
        <Link className="loe" to="/sub/ai/loe/exp1">Experiment 1-Study of PROLOG Programming language and its functions.</Link><br/><br/>
        <Link className="loe" to="/sub/ai/loe/exp2">Experiment 2-Write simple fact for the statements using PROLOG.</Link><br/><br/>
        <Link className="loe" to="/sub/ai/loe/exp3">Experiment 3-Write predicates One converts centigrade temperatures to Fahrenheit, the other checks if a temperature is below freezing.</Link><br/><br/>
        <Link className="loe" to="/sub/ai/loe/exp4">Experiment 4-Write a program to solve the Monkey Banana problem using PROLOG.</Link><br/><br/>
        <Link className="loe" to="/sub/ai/loe/exp5">Experiment 5-Write a program in turbo prolog for medical diagnosis and show the advantage and disadvantage of green and red cuts.</Link><br/><br/>
        <Link className="loe" to="/sub/ai/loe/exp6">Experiment 6-Write a program to implement Factorial, Fibonacci of a given number using Prolog.</Link><br/><br/>
        <Link className="loe" to="/sub/ai/loe/exp7">Experiment 7-Write a program to solve 4-Queen problem using Prolog.</Link><br/><br/>
        <Link className="loe" to="/sub/ai/loe/exp8">Experiment 8-Write a Programs to implement Traveling Salesman Problem using Prolog.</Link><br/><br/>
        <Link className="loe" to="/sub/ai/loe/exp9">Experiment 9-Write a program to solve water jug problem using LISP.</Link><br/><br/>
        <Link className="loe" to="/sub/ai/loe/exp10">Experiment 10- Write a program to implement Hill climbing Algorithim.</Link><br/><br/>
    </div>
  )
}

export default loe