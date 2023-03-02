import React from 'react'

function PyTheory6() {
  return (
    <div>
        <h1>Classes and object</h1>
        A class is a user-defined blueprint or prototype from which objects are created. Classes provide a means of bundling data and functionality together. Creating a new class creates a new type of object, allowing new instances of that type to be made<br></br>
        Syntax:<br></br>
        class class_name:<br></br>
        statements<br></br>
        <img src = "img 1(2)" alt ="python program" ></img>
        <h3>How to define class objects</h3>
        An Object is an instance of a Class. A class is like a blueprint while an instance is a copy of the class with actual values.
        An object consists of :<br></br>
        State: It is represented by the attributes of an object. It also reflects the properties of an object.<br></br>
        Behavior: It is represented by the methods of an object. It also reflects the response of an object to other objects.<br></br>
        Identity: It gives a unique name to an object and enables one object to interact with other objects<br></br>
        Syntax:<br></br>
        Object_name.class_name()<br></br>
        <h4>Program:</h4>
        <img src = "img 2(3)" alt ="python program" ></img>
        <h4>Output:</h4>
        graduate<br></br>
        I'm a graduate<br></br>
        I'm a student<br></br>
        <h3>The self method</h3>
        Class methods must have an extra first parameter in the method definition.<br>
        </br> We do not give a value for this parameter when we call the method, Python provides it.
        If we have a method that takes no arguments, then we still have to have one argument.<br></br>
        When we call a method of this object as myobject.method(arg1, arg2), this is automatically converted by Python into MyClass.method(myobject, arg1, arg2)<br></br>
        <h3>init method</h3>
        The init method is similar to constructors in C++ and Java. Constructors are used to initializing the object’s state. It runs as soon as an object of a class is instantiated. The method is useful to do any initialization you want to do with your object.
        <h4>Program:</h4>
        <img src = "img 3(4)" alt ="python program" ></img>
        <h4>Output:</h4>
        Hello, my name is John
        <h3>Class and Instance Variables:</h3>
        Class variables is a variable that is shared by all instances of a class. They are defined within a class but outside any of the class's methods.<br></br>

        Instance Variable is a variable that is defined inside a method and belongs only to the current instance of a class.
        <h4>Program:</h4>
        <img src = "img 4(4)" alt ="python program" ></img>
        <h4>Output:</h4>
        myobj1 details:<br></br>
        myobj1 is a student<br></br>
        name: Harry<br></br>
        subject: Physics<br></br>

        Accessing class variable using class name<br></br>
        student
    </div>
  )
}

export default PyTheory6