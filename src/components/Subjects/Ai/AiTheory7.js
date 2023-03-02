import React from 'react'

export default function AiTheory7() {
  return (
    <div>
        <p>Program:</p>
        <p>In the 4 Queens problem the object is to place 4 queens on a chessboard in such a way that no queens can capture a piece. This means that no two queens may be placed on the same row, column, or diagonal.</p>
        <p>img</p>
        <p>STEP 1: Represent the board positions as 8*8 vector, i.e.. [1.2.3.4.5.6.7.8]. Store the set of queens in the list 'Q'.</p>
        <p>STEP 2: Calculate the permutation of the above eight numbers stored in set P.</p>
        <p> STEP 3: Let the position where the first queen to be placed be (1,Y), for second be (2,Y1) and so on and store the positions in Q.</p>
        <p>STEP 4: Check for the safety of the queens through the predicate, 'noattack ()'.</p>
        <p> STEP 5: Calculate Y1-Y and Y-Y1. If both are not equal to Xdist, which is the X- distance between the first queen and others, then go to Step 6 else go to Step 7.</p>
        <p>STEP 6: Increment Xdist by 1.</p>
        <p>STEP 7: Repeat above for the rest of the queens, until the end of the list is reached.</p>
        <p>STEP 8: Print Q as answer.</p>
        <p>STEP 9: Exit.</p>
        <p>Write a program for 8-queen problem</p>
        <p>Domains</p>
        <p>H-integer</p>
        <p>T=integer*</p>
        <p>predicates safe(T) solution(T) permutation(T,T) del(H,T,T) noattack(H,T,H) clauses del(I,[I | L],L). /*to take a position from the permutation of list"/ del(I,[F|L],[F|LI]):- del(I,L,L1). permutation([][]). /*to find the possible positions*/permutation([H|T],PL):- permutation(T,PT),\del(H,PL,PT).</p>
        <p>solution(Q):-/final solution is stored in Q*/</p>
        <p>permutation([1,2,3,4,5,6,7,8],Q), safe(Q).</p>
        <p>safe([])./*Q is safe such that no queens attack each other*/ safe([Q|others]):-</p>
        <p>safe(others), noattack(Q,others, 1). noattack(_,[],_).</p>
        <p>/* to find if the queens are in same row, column or diagonal*/ noattack(Y,[YLIYdist],Xdist):-</p>
        <p>Y1-Y{"<>"}Xdist, Y-Y1{"<>"}Xdist, dist 1=Xdist, noattack(Y, Ydist,dist1). Output goal: -solution(Q). Q=["3","8","4","7","1","6"2","5"]</p>
    </div>
  )
}
