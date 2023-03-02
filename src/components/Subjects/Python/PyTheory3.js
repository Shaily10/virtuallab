import React from 'react'

function PyTheory3() {
  return (
    <div>
        <h1>Loops</h1>
        The execution of programming language codes is done by a compiler. A compiler is given a set of codes or rather a sequence of codes that perform a desired task. The task may or may not be repetitive but the compiler is smart enough to process it. Such repetitive code is known as a 'loop'<br></br>
        Loop is a sequential set of instructions which gets executed multiple times to reduce minimize the repetition of code.<br></br>
        In Python, we have two types of loops :<br></br>
        i. for loop<br></br>
        ii. while loop<br></br>

        To understand the functioning and flow of a loop, you must get familiar with the term 'block'. A block is the smallest unit in a loop which performs one particular task.<br></br>  
        <h3>'For' loop :</h3>
        <h5>Syntax :</h5>
        for object in range(initialization, limit, update ):<br></br>
        statements<br></br>
        The above given syntax is of for loop where we put the object name after 'for' and the limit inside 'range( )'.<br></br>
        <h4>Program:</h4>
        <img src = "img3(1)" alt ="python program" ></img> 
        <h4>Output:</h4>
        0<br></br>
        1<br></br>
        2<br></br>
        3<br></br>
        4<br></br>
        <h3>'While' Loop</h3>
        <h5>Syntax:</h5>
        while expression:<br></br>
        statements<br></br>
        The above statement is for while loop, where the testing condition is placed after while and it is followed by the statements placed in the loop body.
        <h4>Program:</h4>
        <img src = "img 1" alt ="python program" ></img>
        <h4>Output:</h4>
        Hello people<br></br>
        Hello people<br></br>
        Hello people<br></br>
        <h4>Program:</h4>
        <img src = "img 2" alt ="python program" ></img>
        <h4>Output</h4>
        hello geek
        hello geek
        ..........   
        <h3>Nested loops</h3>
        A nested loop is an inner loop in the loop body of the outer loop. The inner or outer loop can be any type, such as a while loop or for loop. For example, the outer for loop can contain a while loop and vice versa
        <h4>Program:</h4>
        <img src = "img 4(2)" alt ="python program" ></img>
        <h4>Output:</h4>
        1<br></br>
        2 2<br></br>
        3 3 3<br></br>
        4 4 4 4<br></br>
        <h4>Program:</h4>
        <img src = "img 5" alt ="python program" ></img>
        <h4>Output:</h4>
        1 Outer loop is executed only once<br></br>
        1 Inner loop is executed until to completion<br></br>
        2 Inner loop is executed until to completion<br></br>
        2 Outer loop is executed only once<br></br>
        1 Inner loop is executed until to completion<br></br>
        2 Inner loop is executed until to completion<br></br>
      </div>
  )
}

export default PyTheory3