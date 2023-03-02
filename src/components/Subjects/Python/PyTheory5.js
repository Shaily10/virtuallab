import React from 'react'

function PyTheory5() {
  return (
    <div>
        <h1>String</h1>
        We can access a string using indexing. In a string each character is assigned with a unique index value which starts from 0. <br></br> 
        A string can be written in both single quotes and double quotes.<br></br>
        Example : 'Hello World'<br></br>
       "Hello World"
       <h4>Program:</h4>
       <img src = "img 1(1)" alt ="python program" ></img>
       <h4>Output:</h4>
       Hello<br></br>
       Hello<br></br>
       <h4>Program:</h4>
       <img src = "img 2(2)" alt ="python program" ></img>
       <h4>Output:</h4>
       Hello
       <h4>Program:</h4>
       <img src = "img 3(3)" alt ="python program" ></img>
       <h4>Output</h4>
       Lorem ipsum dolor sit amet,<br></br>
       consectetur adipiscing elit,<br></br>
       sed do eiusmod tempor incididunt<br></br>
       ut labore et dolore magna aliqua.<br></br>
       Python allows negative indexing as well.<br></br>
       Example : -1, -3, -5.<br></br>
       Where -1 refers to the last index, -2 refers to second last index and so on.<br></br>
       Printing here can be done by placing the string in single or double quotes after print.<br></br>

       print("Hello World")
       <h3>Concatenation</h3>
       A string in python is immutable i.e. it can not be changed once defined. But concatenation is still possible
       <h4>Program:</h4>
       <img src = "img 4(3)" alt ="python program" ></img>
       <h4>Output:</h4>
       Hello World Example<br></br>

       Using Join() method also we can concatenate string
       <h4>Program:</h4>
       <img src = "img 5(2)" alt ="python program" ></img>
       <h4>Output:</h4>
       HelloWorld
       <h4>program:</h4>
       <img src = "img 6(1)" alt ="python program" ></img>
       <h4>Output:</h4>
       HelloWorld
       <h3>Repetition</h3>
       This is a unique property of strings in Python programming language.<br></br>
       When a string is multiplied with an integer, the characters of string are multiplied the same number of times.<br></br>
       Syntax : string * integer
       <h4>Program:</h4>
       <img src = "img 7" alt ="python program" ></img>
       <h4>Output:</h4>
       kkkkk
       <h3>Slicing</h3>
       Slicing is done in Python to select or display the desired number of characters in a string. It is done with the help of symbol ':'<br></br>

       Syntax : String[ index: ]
       <h4>Program:</h4>
       <img src = "img 8" alt ="python program" ></img>
       <h4>Solution:</h4>
       llo World<br></br>

       All the characters from and after second index is selected
       <h4>Program:</h4>
       <img src = "img 9" alt ="python program" ></img>
       <h4>Output:</h4>
       ello Wo<br></br>

    Characters between index number 1 and 8 are selected<br></br>

    Length of a string can be calculated using the len function.<br></br>
    Syntax : len("string")<br></br>
    len("Hello World")<br></br>
    It will return 11.<br></br>
    <h4>Deleting / updating from a String:</h4>
    In Python, Updation or deletion of characters from a String is not allowed. This will cause an error because item assignment or item deletion from a String is not supported
    <h4>Program:</h4>
    <img src = "img 10" alt ="python program" ></img>
    <h4>Output:</h4>
    Initial String:<br></br>
    Hello, I'm a coder<br></br>
    Traceback (most recent call last):<br></br>
    File "e:\VLAB\python\programs\a.py", line 51, in<br></br>
    String1[2] = 'p'<br></br>
    TypeError: 'str' object does not support item assignment<br></br>
    </div>
  )
}

export default PyTheory5