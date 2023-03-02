import React from 'react'

function AiTheory() {
  return (
    <div>
        <h1>Experiment No 1</h1>
        PROLOG PROGRAMMING IN LOGIC PROLOG stands for Programming. In Logic-an idea that emerged in the early 1970's to use logic as programming language. The early developers of this idea included Robert Kowaiski at Edinburgh (on the theoretical side), Marrten van Emden at Edinburgh (experimental demonstration) and Alian Colmerauer at Marseilles (implementation). <br></br>
        David D.H Warren's efficient implementation at Edinburgh in the mid 1970's greatly contributed to the popularity of PROLOG. PROLOG is a programming language centred around a small set of basic mechanisms, Including pattern matching, tree based data structuring and automatic backtracking. This Small set constitutes a surprisingly powerful and flexible programming framework. PROLOG is especially well suited for problems that involve objects- in particular, structured objects- and relations between them. SYMBOLIC LANGUAGE PROLOG is a programming language for symbolic non-numeric computation. It is especially well suited for solving problems that involve objects and relations between objects. For example, it is an easy exercise in prolog to express spatial relationship between objects, such as the blue sphere is behind the green one. It is also easy to state a more general rule: if object X is closer to the observer than object Y, and object Y is closer than Z, then X must be closer than Z. PROLOG can reason about the spatial relationships and their consistency with respect to the general rule.<br></br>
        Features like this make PROLOG a powerful language for (Artificial Language A1) and non-numerical programming. There are well-known examples of symbolic computation whose implementation in other standard languages took tens of pages of indigestible code, when the same algorithms were implemented in PROLOG, the result was a crystal-clear programm easily fitting on one page. FACTS, RULES AND QUERIES<br></br>
        Progmmming in PROLOG is accomplished by creating a database of facts and rules about objects, their properties, and their relationships to other objects. Queries then can be posed about the objects and valid conclusions will be determined and returned by the program. Responses to user queries are determined through a form of inference control known as resolution.<br></br> 
        FOR EXAMPLE:<br></br>
        <h3> (a) FACTS</h3>: Some facts about family relationships could be written as sister (sue,bill) parent( ann.sam) male(jo) female( riya)<br></br>
        <h3>(b) RULES</h3>: To represent the general rule for grandfather, we write: grand father(X2) parent(X,Y) parent(Y,Z) male(X) <br></br>
        <h3>(c) QUERIES</h3>: Given a database of facts and rules such as that above, we may make queries by typing after a query a symbol'?' statements such as: ?-parent(X.sam) Xann ?grandfather(X,Y) X=jo, Y=sam<br></br>
    </div>
  )
}

export default AiTheory