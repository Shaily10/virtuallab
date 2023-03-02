import React from 'react'

function PyTheory2() {
  return (
    <div>
        <h1>Built-in-Funstions</h1>
        An executable program in a programming language contains multiple lines. To simplify this code, various functions are used. They can be built-in functions or user defined functions.A function is basically a chunk or module of code that takes in some input from the user and may or may not give any output. The function may provide some alterations to the input values.
        <h3>'id' function :</h3>
        This function returns the identity of an object. A identity has to be unique and constant for a particular object during the lifetime.<br></br>
        Syntax : id(object)
        <h3>Program:</h3>
        str1 = "Hello"<br></br>
        print(id(str))<br></br>
        <h3>Output:</h3>
        1750812191152
        <h3>Program:</h3>
        str1 = "Hello"
        str2 = "World"
        print(id(str1) == id(str2))
        <h3>Output:</h3>
        False
        <h3>'Type' function :</h3>
        This function returns the data type of an object. It returns the following data types :<br></br>
        i. Integer<br></br>
        ii. String<br></br>
        iii. Float<br></br>
        type() method returns class type of the argument(object) passed as parameter. type() function is mostly used for debugging purposes.<br></br>

        Syntax : type(object)
        <h3>Program:</h3>
        <img src="img3.PNG" alt="python program"></img>
        <h4>Output:</h4>
        {'<'} class 'dict'{'>'}
        <h4>Program:</h4>   
        <img src="img4.PNG" alt="python program"></img>
        <h4>Output:</h4>
       {'<'}class 'float'{'>'}<br></br>
       {'<'}class 'str'{'>'}<br></br>
       {'<'}class 'int'{'>'}<br></br>

        </div>
  )
}

export default PyTheory2