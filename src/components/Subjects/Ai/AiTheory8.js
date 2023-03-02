import React from 'react'

export default function AiTheory8() {
  return (
    <div>
        <p>A traveling salesman has to travel through a bunch of cities, in such a way that the expenses on traveling are minimized. This is the infamous Traveling Salesman Problem (aka TSP) problem it belongs to a family of problems, called NP-complete problem. It is conjectured that all those problems requires exponential time to solve them. In our case, this means that to find the optimal solution you have to go through all possible routes, and the numbers of routes increases exponential with the numbers of cities.<i> Formal Definition </i>We are given a complete undirected graph G that has a nonnegative integer cost (weight) associated with each edge, and we must find a Hamiltonian cycle (a tour that passes through all the vertices) of G with minimum cost.</p>
        <p><b>Theory:</b> If you want to get a notion of what numbers we are talking about look at this: the number of routes with 50 cities is (50-2)!, which is</p>
        <p>12,413,915,592,536,072,670,862,289,047,373,375,038,521,486,354,677,760,000,000,000</p>
        <p>An alternative approach would be to compute a solution which is not optimal. but is guaranteed to be close the optimal solution. We present here an applet that implements such an approximation algorithm for the Euclidean TSP problem. In our case we have points in the plane (i.c. cities) and the cost of the traveling between two points is the distance between them. In other words, we have a map with cities, any two of which are connected by a direct straight road and we want to find a shortest tour for our poor traveling salesman, who "wants" to visit every city.</p>
        <p><i><b>Description of Algorithms :</b></i></p>
        <p><b>x2 Algorithm:</b></p>
        <li>Minimum Spanning Tree (MST).</li>
        <li>Perform preorder tree walk on MST, and construct a list of the vertices as we encounter them. (i.e. each vertex will appear only one corresponding to its first encounter).</li>
        <li>The output tour is hamiltonian cycle that visits the vertices in order of this list. The running time of this algorithm is O (n2log (n)) time; since the input is a complete graph (n is the number of inserted points). The Find length of the resulting tour is at most twice of the optimal tour, since its length is at most twice that of the MST, and the optimal tour is longer than the MST.</li>
        <li><b>X1.5 Algorithm: </b></li>
        <p>Find Minimum Spanning Tree (MST).</p>
        <p>Find minimum weighted matching between odd vertices of MST.</p>
        <p>Find an Euler tour in resulting graph and create list of vertices that represents it.</p>
        <p>Find Hamilton cycle (which is in fact TSP tour) by visiting vertices in order of created list when only first appearance of vertex in list is encountered and any other appearance is skipped.</p>
        <p>The approximation ratio bound is 1.5, although the argument here is a bit more complicated.</p>
        <p>Iterative Algorithm:</p>
        <p>We generated an arbitrary initial solution, by visiting all points in order they were inserted. Then in each iteration:</p>
        <ol type="1">
             <li>Select two random cities.</li>
             <li>Interchange the two cities predecessors.</li>
             <li>Calculate the weight of resulting tour.</li>
             <li>If new weight is smaller than old one - if so, replace the old tour by the new tour, else undo (2).</li>
        </ol>
        <p><b>Removing Intersections Scheme:</b></p>
        <p>This algorithm is applied on already computed TSP tour. It performs a loop which stops only after all intersections have been removed (which must happen after at most n2times). Each loop goes through all the pairs of edges in the tour ad checks if they intersect. - If so then two new edges will replace them. New edges created by interchanging the original edge's endpoints. To preserve TSP tour completeness the path between the original edges is reversed.</p>
        <p><b>Result:</b>The traveling salesman problem is implemented.</p>


    </div>
  )
}
