import React from 'react'

function PyTheory4() {
  return (
    <div>
        <h1>Data Types</h1>
        Before starting with arrays you must know the concept of mutability. An object may be classified into two categories :<br></br>
        i. Mutable<br></br>
        ii. Immutable<br></br>
        Mutable are those objects whose value can be altered after assigning a particular value. Immutable are those objects whose value can not be altered after assigning of a value.<br></br>
        List And Dictionary are Mutable.<br></br>
        Tuples are Immutable.<br></br>
        <h3>Data Type Character</h3>
        i.List Mutable<br></br>
        ii.Tuple Immutable<br></br>
        iii.Dictionary Mutable<br></br>
        <h3>List</h3>
        It is a collection of data in which date is stored in ordered form.<br></br>
        Syntax : object_name = [ elements ]<br></br>
        The above mentioned syntax is of list where the elements are mentioned in square brackets.<br></br>
        <h4>Program:</h4>
        <img src = "img 2(1)" alt ="python program" ></img>
        <h4>Output:</h4>
        ['apple', 'banana', 'cherry']
        <h3>Tuple</h3>
        A tuple is a collection of data which is mostly similar to a list except that it is immutable i.e. the value once stored in a tuple cannot be changed. Though tuple allows concatenation. Syntax : object_name = ( elements )<br></br>
        This is the syntax of a tuple, where elements are placed under parenthesis.
        <h4>Program:</h4>
        <img src = "img 3(2)" alt ="python program" ></img>
        <h4>Output:</h4>
        ('apple', 'banana', 'cherry')<br></br>

        Tuples allow duplicate values:
        <h4>Program:</h4>
        <img src = "img 4(2)" alt ="python program" ></img>
        <h4>Output:</h4>
        ('apple', 'banana', 'cherry','apple')
        <h3>Dictionary</h3>
        Dictionary is a collection of data which is not sequential like a list, thus indexing is not possible. It consists of a key and its value.<br></br>
        Example : dict1 = {'{'}1 : "Red", 2 : "Blue", 3 : "Green"{'}'}<br></br>
        The above syntax is for a dictionary where the elements are placed under curly brackets.
        <h4>Program:</h4>
        <img src = "img 5(1)" alt ="python program" ></img>
        <h4>Output:</h4>
       {'{'}'brand': 'Ford', 'model': 'Mustang', 'year': 1964{'}'}<br></br>

        Duplicates are not allowed in dictionary.
        <h4>Program:</h4>
        <img src = "img 6" alt ="python program" ></img>
        <h4>Output:</h4>
        {'{'}brand': 'Ford', 'model': 'Mustang', 'year': 2020{'}'}<br></br>

        Duplicate values will overwrite existing values.
 </div>
  )
}

export default PyTheory4