import React from 'react'

export default function AiTheory6() {
  return (
    <div>
        <p>Program:</p>
        <p>Factorial:</p>
        <p>factorial(0,1).</p>
        <p>factorial(N,F):-</p>
        {/* <p>N>0,</p> */}
        <p>N1 IS N-1,</p>
        <p>factorial(N1,F1),</p>
        <p>F is N*F1.</p>
        <p>Output:</p>
        <p>Goal:</p>
        <p>?- factorial(4,X).</p>
        <p>X=24</p>
        <p>Fibonacci:</p>
        <p>fib(0,0),</p>
        <p>fib(X,Y) :- X{">"}0,fib(X,Y,_).</p>
        <p>fib(1,1,0).</p>
        <p>(X,Y1,Y2) :-</p>
        <p>X {">"} 1,</p>
        <p>X1 is X - 1,</p>
        <p>fib(X1,Y2,Y3),</p>
        <p>Y1 is Y2 + Y3.</p>
        <p>Output :</p>
        <p>Goal :</p>
        <p>?-fib(10,X).</p>
        <p>X = 55</p>
    </div>
  )
}
