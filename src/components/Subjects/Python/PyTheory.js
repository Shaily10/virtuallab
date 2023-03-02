import React from 'react'

function PyTheory() {
  return (
    <>
    <h1>Arithemetic Operations</h1>
    <div>An operator is a symbol that tells the compiler that either a mathematical or a logical manipulation has to be done. In this lab you will be studying about the Arithmetic Operations.
They are of the following types :</div>

    <h3>Addition Operator (+)</h3>
    <div>The addition operator is used to add two numbers. It is placed between two numbers that are to be added.<br></br>
    Syntax : number1 + number2<br></br>
    <h4>Program:</h4>
    x = 3<br></br>
    y = 2<br></br>
    print('x + y =',x + y)<br></br>
   <h4>Output:</h4>
   x + y = 5<br></br>
    </div>
    <div>
        <h3>Subtraction Operator (-)</h3>
        The subtraction operator is used to subtract two numbers. It is placed between two numbers that are to be subtracted. The right placed number is subtracted from the one that is placed at left.<br></br>
        Syntax : number1 - number2
        <h4>Program:</h4>
        x = 3<br></br>
        y = 2<br></br>
        print ('x - y =',x - y)<br></br>
        <h4>Output:</h4>
        x - y = 1
    </div>
    <div>
        <h3>Multiplication Operator ( * )</h3>
        The multiplication operator is used to multiply two numbers. It is also placed between the two numbers that are to be operated.<br></br>
        Syntax : number1 * number2
        <h4>Program:</h4>
        x = 30
        y = 10
        print ('x * y=',x * y)
        <h4>Output:</h4>
        x * y = 300
    </div>
    <div>
        <h3>Division Operator ( / )</h3>
        The division operator is used to divide two numbers. It is used between the numbers that are to be operated.<br></br>
        Syntax : number1 / number2<br></br>
        It has some different rules that have to be kept in mind before operating the numbers. Python2 operates the division operator by taking the integral value.<br></br>
        Example : 6 / 4<br></br>
        Answer : This operation will be solved in Python2 by taking the integral value i.e 1. Therefore, the answer of 6 / 4 = 1
        This problem can be taken care by Type Casting. Type Casting is used to convert the output in a desired form.
        To get the correct answer of the above example, we will type cast it using float data type.
        <h4>Program:</h4>
        x = 30
        y = 10
        print ('x / y=',x / y)
        <h4>Output</h4>
        x / y = 3.0<br></br>
        Example : float(6 / 4)<br></br>
        Answer : Now, the output will be changed into float type and the answer will be 1.5.<br></br>
        float(6 / 4) = 1.5<br></br>
        There's another way of solving such problem. By using one float type input, we can get the desired answer.<br></br>
        Example : 6.0 / 4<br></br>
        Answer : 1.5<br></br>
    </div>
    <div>
        <h3>Modulus Operation ( % )</h3>
        It is used to give out the remainder of a division operation. It is also placed between numbers. The right placed number divides the one on the left and the remainder is given as output.<br></br>
        Syntax : number1 % number2
        <h4>Program:</h4>
        x = 6
        y = 4
        print('x % y =',x % y)
        <h4>Output:</h4>
        x % y = 2
    </div>
    <div>
        <h3>Exponent Operation ( ** )</h3>
        It is used to perform exponential calculations. The right placed number acts as the power.<br></br>
        Syntax : number1* *number2
        <h4>Program:</h4>
        x = 2
        y = 3
        print ('x ** y =',x ** y)
        <h4>Output:</h4>
        x ** y =8
    </div>
    <div>
        <h3>Floor Division Operator ( // )</h3>
        It is used to perform floor division. This gives the result in int format.<br></br>
        Syntax : number1 // number2
        <h4>Program:</h4>
        x = 2
        y = 3
        print ('x // y =',x // y)
        <h4>Output:</h4>
        x // y = 0
        45 / 9 will give 5.0 where as 45 // 9 will give 5
    </div>
    
    
    </>
  )
}

export default PyTheory