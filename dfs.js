/**
 * Performs a depth-first search on the graph from a given starting node.
 * @param {Graph} graph - The graph to perform DFS on.
 * @param {number} start - The starting node for DFS.
 * @param {Array<boolean>} visited - An array to keep track of visited nodes.
 */
function depthFirstSearch(graph, start, visited) {
    // Mark the start node as visited
    visited[start] = true;

    // Get all neighbors of the start node
    const neighbors = graph.getNeighbors(start);

    // Visit all the neighbors that have not been visited yet
    for (const neighbor of neighbors) {
        if (!visited[neighbor]) {
            depthFirstSearch(graph, neighbor, visited);
        }
    }
}

module.exports = {
    depthFirstSearch
};
