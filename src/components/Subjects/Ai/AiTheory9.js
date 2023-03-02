import React from 'react'

export default function AiTheory9() {
  return (
    <div>
        <p>This program implements an "environmentally responsible" solution to the water jugs problem. Rather than filling and spilling from an infinite water resource, we conserve a finite initial charge with a third jug: (reservoir). This approach is simpler than the traditional method, because there are only two actions; it is more flexible than the traditional method, because it can solve problems that are constrained by a limited supply from the reservoir. To simulate the infinite version, we use a filled reservoir with a capacity greater than the combined capacities of the jugs, so that the reservoir can never be emptied.</p>
        <p><b>Entry Point</b></p>
        <p>The water jugs solution is derived by a simple, breadth-first, state-space search; and translated into a readable format by a DCG.</p>
        <p>water_jugs:-</p>
        <p>Small Capacity = 3,</p>
        <p>Large Capacity = 4,</p>
        <p>Reservoir is SmallCapacity + LargeCapacity + 1,</p>
        <p>volume( small, Capacities, SmallCapacity),</p>
        <p>volume( large, Capacities, LargeCapacity),</p>
        <p>volume( reservoir, Capacities, Reservoir),</p>
        <p>volume(small, Start, 0).</p>
        <p>volume(large, Start, 0).</p>
        <p>volume(reservoir, Start, Reservoir),</p>
        <p>volume(large, End, 2),</p>
        <p>water jugs_solution( Start, Capacities, End, Solution),</p>
        <p>phrase( narrative(Solution, Capacities, End), Chars),</p>
        <p>put_chars(Chars).</p>
        <p><i>water_jugs_solution( +Start, +Capacities. +End, ?Solution)</i> holds when <i>Solution</i> is the terminal 'node' in a state-space search-beginning with a 'start state' in which the water-jugs have <i> Capacities</i> and contain the <i>Start </i>volumes. The terminal node is reached when the water- jugs contain the End volumes.</p>
        <p>water_jugs_solution( Start, Capacities, End, Solution) :-</p>
        <p>solve_jugs([start(Start)], Capacities, [], End, Solution).</p>
        <p>solve_jugs( +Nodes, +Capacities, +Visited, +End, ?Solution ) holds when <i>Solution</i> is the terminal 'node' in a state-space search, beginning with a first 'open' node in <i>Nodes</i>, and terminating when the water-jugs contain the <i>End</i> volumes. <i>Capacities</i> define the capacities of the water-jugs, while <i>Visited</i> is a list of expanded ('closed') node states.</p>
        <p>The 'breadth-first' operation of solve_jugs is due to the 'existing' <i>Nodes</i> being appended to the 'new' nodes. (If the 'new' nodes were appended to the 'existing' nodes, the operation would be 'depth-first'.)</p>
        <p>solve_jugs([Node|Nodes], Capacities, Visited, End, Solution) :-</p>
        <p>node_state(Node, State), </p>
        <p>(State = End -{">"} Solution = Node ;</p>
        <p>otherwise -{">"} findall(Successor,successor(Node, Capacities, Visited, Successor),Successors),</p>
        <p>append(Nodes, Successors, NewNodes),solve_jugs( NewNodes, Capacities, [State|Visited], End, Solution)),</p>
        <p><i>successor( +Node, +Capacities, Visited, ?Successor) Successor</i> is a successor of <i>Node</i>, for water-jugs with <i>Capacities</i>, if there is a legal 'transition' from <i>Node's </i>state to <i>Successor's state</i>, and <i>Successor's state</i> is not a member of the <i>Visited</i> states.</p>
        <p>Successor( Node, Capacities, Visited, Successor ) :-</p>
        <p> node_state( Node, State),</p>
        <p>Successor node(Action,State 1,Node),</p>
        <p> jug_transition( State, Capacities, Action, Statel),</p>
        <p>\+  member(State 1, Visited).</p>
        <p><i>jug_transition( +State, +Capacities, ?Action. ?SuccessorState)</i> holds when <i>Action</i>describes a valid transition, from <i>State</i> to <i>SuccessorState</i>, for water-jugs with <i>Capacities.</i></p>
        <p><b>There are 2 sorts of <i>Action:</i></b></p>
        <li>empty_into(Source, Target): valid if <i>Source</i> is not already empty and the combined contents from<i> Source</i> and <i>Target,</i> (in <i>State</i>), are not greater than the capacity of the <i>Target</i> jug. In<i> Successor State:</i> Source becomes empty, while the <i>Target</i> jug acquires the combined contents of <i>Source</i> and <i>Target</i> in State.</li>
        <li>fill from(Source, Target): valid if <i>Source</i> is not already empty and the combined contents from <i>Source</i> and <i>Target</i>, (in <i>State</i>), are greater than the capacity of the <i>Target</i> jug. In <i>SuccessorState:</i> the <i>Target</i> jug becomes full, while <i>Source</i> retains the difference between the combined contents of <i>Source</i> and <i>Target,</i> in <i>State,</i> and the capacity of the <i>Target</i> jug.</li>
        <p><b>In either case, the contents of the unused jug are unchanged.</b></p>
        <p>jug_transition( Stateo, Capacities, empty_into(Source, Target), State1 ) :- </p>
        <p>volume( Source, State0, Content0),</p>
        <p>Content0{">"}0,</p>
        <p>jug_permutation( Source, Target, Unused),</p>
        <p>volume( Target, State0, Content1),</p>
        <p>volume(Target, Capacities, Capacity).</p>
        <p>Content0+Content={"<"}Capacity</p>
        <p>volume( Source, Statel, 0), </p>
        <p>volume(Target, Statel, Content2),</p>
        <p>Content2 is Content0+ Content 1,</p>
        <p>volume(Unused, State0, Unchanged), </p>
        <p>volume( Unused, State 1, Unchanged).</p>
        <p>jug_transition( State0, Capacities, fill_from(Source,Target), Statel) :-</p>
        <p>volume( Source, State0, Content0),</p>
        <p>Content0{">"}0.</p>
        <p>jug permutation( Source, Target, Unused).</p>
        <p>volume( Target, State0, Content1),</p>
        <p>volume(Target, Capacities, Capacity).</p>
        <p>Content1{"<"}Capacity,</p>
        <p>Content0+Content1{">"}Capacity</p>
        <p>volume( Source, State1, Content2),</p>
        <p>volume(Target, State1, Capacity),</p>
        <p>Content2 is Content0 + Content 1 - Capacity,</p>
        <p>volume(Unused, State0, Unchanged), </p>
        <p>volume( Unused, State 1, Unchanged).</p>
        <p><b>Data Abstraction</b></p>
        <p>volume( ?Jug, ?State, ?Volume) holds when Jug ('large', 'small' or 'reservoir') has Volume in State.</p>
        <p>volume(small, jugs(Small,_Large. _Reservoir), Small).</p>
        <p>volume(large, jugs (_Small, Large, _Reservoir), Large).</p>
        <p>volume(reservoir, jugs( _Small, _Large, Reservoir), Reservoir).</p>
        <p>jug permutation(?Source, ?Target, ?Unused) holds when Source, Target and Unused are a permutation of 'small', 'large' and 'reservoir'.</p>
        <p>jug permutation( Source, Target, Unused) :-</p>
        <p>select( Source, [small, large, reservoir], Residue ),</p>
        <p>select(Target, Residue, [Unused] ),</p>
        <p>node_state("Node, ?State) holds when the contents of the water-jugs at Node are described by State.</p>
        <p>node state(start(State), State).</p>
        <p>node_state( node(Transition, State, Predecessor), State).</p>
        <p>Definite Clause Grammar</p>
        <p>narrative/5 is a DCG presenting water-jugs solutions in a readable format. The grammar is 'head-recursive', because the 'nodes list, describing the solution, has the last node outermost.</p>
        <p>narrative(start(Start), Capacities, End) -{">"}</p>
        <p>"Given three jugs with capacities of:", newline,</p>
        <p>literal_volumes( Capacities),</p>
        <p>"To obtain the result:", newline,</p>
        <p>literal_volumes(End),</p>
        <p>"Starting with:", newline,</p>
        <p>literal_volumes(Start),</p>
        <p>"Do the following: ", newline.</p>
        <p>narrative(node(Transition, Result, Predecessor), Capacities, End) :-</p>
        <p>narrative( Predecessor, Capacities, End),</p>
        <p>literal_action( Transition, Result).</p>
        <p>literal volumes( Volumes ) --{">"}</p>
        <p>indent, literal( Volumes ), ":", newline.</p>
        <p>literal_action( Transition, Result) -{">"}</p>
        <p>indent, "-", literal( Transition), "giving:", newline.</p>
        <p>indent, indent, literal( Result), newline.</p>
        <p>literal( empty_into(From,To)) --{">"} </p>
        <p>"Empty the ", literal(From)," into the",</p>
        <p>literal(To).</p>
        <p>literal (fill_from(From, To))--{">"} </p>
        <p>"Fill the ", literal( To), "from the "</p>
        <p>literal(From).</p>
        <p>literal (jugs(Small,Large, Reservoir))-{">"}</p>
        <p>literal_number(Small ), "gallons in the small jug,",</p>
        <p>literal_number (Large )," gallons in the large jog and",</p>
        <p>literal_number( Reservoir)," gallons in the reservoir.</p>
        <p>literal (small)-{">"} "small jug".</p>
        <p>literal (large)-{">"} "large jug".</p>
        <p>literal( reservoir)--{">"}reservoir.</p>
        <p>literal_number( Number, Plus, Minus):- </p>
        <p>number (Number),</p>
        <p>number_chars(Number, Chars ),</p>
        <p>append( Chars, Minus, Plus).</p>
        <p>indent --{">"} " ".</p>
        <p>newline --{">"}" ".</p>
        <p><b>Utility Predicates</b></p>
        <p>Load a small library of <i>puzzle utilities.</i></p>
        <p>:- ensure_loaded(misc).</p>
        <p><b>Output</b></p>
        <p>The output of the program is:?- water jugs.</p>
        <p><b>Given three jugs with capacities of:</b></p>
        <p>3 gallons in the small jug, 4 gallons in the large jug and 8 gallons in the reservoir;</p>
        <p>To obtain the result:</p>
        <p>0 gallons in the small jug, 2 gallons in the large jog and 6 gallons in the reservoir;</p>
        <p>Starting with:</p>
        <p>0 gallons in the small jug. 0 gallons in the large jug and 8 gallons in the reservoir;</p>
        <p>Do the following:</p>
        <p><b> Fill the small jug from the reservoir giving:</b></p>
        <p>3 gallons in the small jug. 0 gallons in the large jug and 5 gallons in the reservoir</p>
        <p>-Empty the small jug into the large jug giving:</p>
        <p>0 gallons in the small jug, 3 gallons in the large jug and 5 gallons in the reservoir</p>
        <p>Fill the small jug from the reservoir giving:</p>
        <p>3 gallons in the small jug, 3 gallons in the large jug and 2 gallons in the reservoir</p>
        <p>-Fill the large jug from the small jug giving:</p>
        <p> 2 gallons in the small jug, 4 gallons in the large jug and 2 gallons in the reservoir</p>
        <p>-Empty the large jug into the reservoir giving:</p>
        <p>2 gallons in the small jug. 0 gallons in the large jug and 6 gallons in the reservoir</p>
        <p>-Empty the small jug into the large jug giving: </p>
        <p>0 gallons in the small jug, 2 gallons in the large jug and 6 gallons in the reservoir</p>






        </div>
  )
}
