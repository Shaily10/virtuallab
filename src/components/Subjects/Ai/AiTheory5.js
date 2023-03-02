import React from 'react'

export default function AiTheory5() {
  return (
    <div>
        <p>The Prolog cut predicate, or '!', eliminates choices is a Prolog derivation tree. To illustrate, first consider a cut in a goal. For example, consider goal ? - p * (X) ,! . for the program P used in section 3.1. </p>
        <p><i>The cut goal succeeds whenever it is the current goal, AND the derivation tree is trimmed of all other choices on the way back to and including the point in the derivation tree where the cut was introduced into the sequence of goals.</i></p>
        <p>For the previous derivation tree, this means that the branches labeled #2 and #3 are eliminated, and hence the entire subtrees below these two edges are also cut off. This then corresponds to only producing the first answer X = a:</p>
        <p>?- p(X),!.</p>
        <p>X=a ;</p>
        <p>no</p>
        <p>Here we tried to get Prolog to find some more answers using ':' but they have already been cut off. Consider also:</p>
        <p>?- r(X),!{"<"}s(Y).</p>
        <p>X=a Y=a ;</p>
        <p>X=a Y=b ;</p>
        <p>X=a Y=c ;</p>
        <p>no</p>
        <p>Note that there is no backtracking into that first goal. Also,</p>
        <p>?- r(X), s(Y), !.</p>
        <p>X=a Y=a ;</p>
        <p>no</p>
        <p>as expected.</p>
        <p>Suppose that a cut occurs in the body of the program. The cut rule (above) still applies That when the cut appears as a called subgoal. The cut is used in the body of a given clause so as to avoid using clauses appearing after the given clause in the program. To illustrate, consider the following program:</p>
        <p>part(a). part(b). part(c).</p>
        <p>red(a). black(b).</p>
        <p>color(P,red) :- red (P),!.</p>
        <p>color(P,black):- black(P),!.</p>
        <p>color(P,unknown).</p>
        <p>The intention is to determine a color for a part based upon specific stored information, or else conclude that the color is 'unknown' otherwise.</p>
        <p>A derivation tree for goal ?- color(a,C) is</p>
        <p>img</p>
        <p>which corresponds with </p>
        <p>?- color (a,C).</p>
        <p>C = red</p>
        <p>and a derivation tree for goal ?- color(c,C) is</p>
        <p>img</p>
        <p>which corresponds with</p>
        <p>?- color(c,C).</p>
        <p>C = unknown</p>
        <p>The Prolog cut is a procedural device for controlling goal satisfaction. The use of cut affects the meanings of programs. For example, in the 'color' program, the following program clause tree says that 'color(a,unknown)' should be a consequence of the program:</p>
        <p>img</p>
        <p>The cut in the program enables Prolog to "avoid" this answer. It would be difficult to modify the program clause tree definition (for program consequences) to reflect the procedural meaning of cut. However, program clause trees can still be useful to diagram answers that could result without the cut.</p>
        <p><i>Exercise 3.2.1 (a)</i> What happens it one were to use the (suspect) program</p>
        <p>max(X,Y,Z) :- Y{">"}X, !.</p>    
        <p>max(X,Y,X).</p>
        <p>What can happen for goal ?-max(1,2,1), for example? Use a clause tree to show that 'max(1,2,1)' is a consequence of the program as it stands. What assumption must one make in order for this Prolog specification to correctly compute the maximum of two numbers?</p>
        <p><i>Exercise 3.2.2</i> Suppose that, in program P of section 3.1, clause #2 is changed so that it reads</p>
        <p>p(X) :- q(X), !, r(X).</p>
        <p>What answers can now be produced by the goal ?-p(X)? Why? Show why using the Prolog derivation tree (modified to suit the new rule).</p>
        <p> The best use of cut is as an efficiency device, to avoid additional computations that are not desired or required in a program. A use of a cut which only improves efficiency is referred to as a green cut. A good example of a green cut is in the definition of the predicate 'is_same-level_as' in section 2.5. Otherwise the use is a red cut. The use of the cut in the 'color' program is red (pun intended), but the cut was used to restrict answers -- that is, block what would otherwise be reported as consequences of the program. Here is another version of 'color', using Prolog's implication '-{">"}':</p>
        <p>color(X,C) :- red(X) -{">"} C = red</p>
        <p>;</p>
        <p>black(X) -{">"} C = black</p>
        <p>;</p>
        <p>C = unknown.</p>
        </div>
  )
}
