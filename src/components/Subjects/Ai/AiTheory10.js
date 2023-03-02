import React from 'react'

export default function AiTheory10() {
  return (
    <div>
        <p> <b>Introduction:</b>In computer science, hill climbing is a mathematical optimization technique which belongs to the family of local search. It is relatively simple to implement, making it a popular first choice. Although more advanced algorithms may give better results, in some situations hill climbing works just as well. Hill climbing can be used to solve problems that have many solutions, some of which are better than others. It starts with a random (potentially poor) solution, and iteratively makes small changes to the solution, ench time improving it a little, When the algorithm cannot see any improvement anymore, it terminates. Ideally, at that point the current solution is close to optimal, but it is not guaranteed that hill climbing will ever come close to the optimal solution.</p>
        <p><b>For example,</b> hill climbing can be applied to the traveling salesman problem. It is easy to find a solution that visits all the cities but will be very poor compared to the optimal solution. The algorithm starts with such a solution and makes small improvements to it, such as switching the order in which two cities are visited. Eventually, a much better route is obtained.</p>
        <p>Hill climbing is used widely in artificial intelligence, for reaching a goal state from a starting node. Choice of next nicide and starting node can be varied to give a list of related algorithms.</p>
        <p><b>Mathematical description:</b> Hill climbing attempts to maximize (or minimize) a function Jux), where x are discrete states. These states are typically represented by vertices in a graph, where edges in the graph encode nearness or similarity of a graph. Hill climbing will follow the graph from vertex to vertex, always locally increasing (or decreasing) the value of f, until a local maximum (or local minimum) is reached. Hill climbing can also operate on a continuous space: in that case, the algorithm is called gradient ascent (or gradient descent if the function is minimized).*.</p>
        <p>img</p>
        <p><b>Variants :</b>in simple hill climbing, the first closer node is chosen, whereas in steepest ascent hill climbing all successors are compared and the closest to the solution is chosen, Both forms fail if there is no closer node, which may happen if there are local maximu in the search space which are not solutions.</p>
        <p>Steepest ascent hill climbing is similar to best-first search, which tries all possible extensions of the current path instead of only one. Stochastic hill climbing does not examine all neighbors before deciding how to move. Rather, it selects a neighbor at random, and decides (based on the amount of improvement in that neighbor) whether to move to that neighbor or to examine another.</p>
        <p><b>Random-restart hill climbing</b> is a meta-algorithm built on top of the hill climbing algorithm. It is also known as Shotgun hill climbing. It iteratively does hill-climbing, each time with a random initial condition ). The best am is kept: if a new run of hill climbing produces a better on than the stored state, it replaces the stored state. Random-restart hill climbing is a surprisingly effective algorithm in many cases. It turns out that it is often better to spend CPU time exploring the space, than carefully optimizing from an initial condition. </p>
        <p><b>Problems:</b></p>
        <p><b>Local maxima :</b>A problem with hill climbing is that it will find only local maxima. Unless the heuristic il convex, it may not reach a global maximum. Other local search ulgorithms try to overcome this problem such as stochastic hill climbing, random walks and simulated annealing. This problem of hill climbing can be solved by using random hill climbing search technique.</p>
        <p><b>Ridges :</b> A ridge is a curve in the search place that leads to a maximum, but the orientation of the ridge compared to the available moves that are used to climb is such that each move will lead to a smaller point. In other words, each point on a ridge looks to the algorithm like a local maximum, even though the point is part of a curve leading to a better optimum.</p>
        <p> <b>Plateau :</b> Another problem with hill climbing is that of a plateau, which occurs when we get to a "flat" part of the search space, i.e we have a path where the heuristics are all very close together. This kind of flatness can cause the algorithm to cease progress and wander aimlessly.</p>
        <p>Pseudocode: </p>
        <p>Hill Climbing Algorithm: </p>
        <p>currentNode = startNode;</p>
        <p>loop do</p>
        <p>L = NEIGHBORS(currentNode);</p>
        <p>nextEval=-INF;</p>
        <p>nextNode = NULL;</p>
        <p>for all x in L</p>
        <p>if (EVAL(x){">"}nextEval) </p>
        <p>nextNode = x;</p>
        <p>nextEval = EVAL(x);</p>
        <p>if nextEval {"<"}= EVAL(currentNode)</p>
        <p>/ / Return current node since no better neighbors exist return currentNode;</p>
        <p> currentNode = nextNode;</p>
        <p><b>Result:</b> The Hill Climbing algorithm is implemented. The algorithm terminates when goal state is reached from the starting node.</p>

    </div>
  )
}
