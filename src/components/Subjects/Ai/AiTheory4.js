import React from 'react'

export default function AiTheory4() {
  return (
    <div>
      <p>Imagine a room containing a monkey,chair and some bananas. That have been
        hanged from the centre of ceiling. If the monkey is clever enough he can reach the bananas by placing the 
        chair directly below the bananas and climb on the chair. The problem is to prove the monkey
        can reach the bananas. The monkey wants it, but cannot jump high enough from the floor. At the window of the
         room there is a box that the monkey can use. The monkey can perform the following actions:-
      </p>
      <ol type="1" > 
      <li>Walk on the floor.</li>
      <li>Clim the box.</li>
      <li>Push the box around (if it is beside the box).</li>
      <li>Grasp the banana if it is standing on the box directly under the banana.</li>
      </ol>
      <p>Production Rules can_reach clever, close get_on: can_climb, under inroom, in_room,in_room,can_climb. Close get_on,under tall</p>
      <h3>PARSE TREE</h3>
      <>IMG</>
      <p>Clauses:</p>
      <p>in_room(bananas).</p>
      <p>in_room(chair).</p>
      <p>in_room(monkey).</p>
      <p>clever(monkey).</p>
      <p>can_climb(monkey,chair).</p>
      <p>tall(chair).</p>
      <p>can_move(monkey,chair,bananas).</p>
      <p>can_reach(X,Y):-</p>
      <p>clever(X),close(X,Y).</p>
      <p>get_on(X,Y):- can_climb(X,Y).</p>
      <p>under(Y,Z):-</p>
      <p>in_room(X),in_room(Y),in_room(Z),can_(Y),
        in_room(Z),can_climb(X,Y,Z).</p>
        <p>close(X,Z):-get_on(X,Y),under(Y,Z);</p>
        <p>under(Y,Z);</p>
        <p>tall(Y).</p>
        <p>Output:</p>
        <p>Queries:</p>
        <p>?- can_reach(A,B).</p>
        <p>A = monkey.</p>
        <p>B = banana.</p>
        <p>?- can_reach(monkey,banana).</p>
        <p>Yes</p>
    </div>
  )
}
