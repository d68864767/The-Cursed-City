const graph = require('./graph');
const dfs = require('./dfs');
const utils = require('./utils');
const config = require('./config');

/**
 * Determines if the city is still connected after some roads disappear at night.
 * @param {number} n - The number of buildings in the city.
 * @param {Array<Array<number>>} roads - The list of roads that connect the buildings.
 * @param {Array<Array<number>>} cursedRoads - The list of roads that disappear at night.
 * @returns {boolean} - True if the city is connected, false otherwise.
 */
function isCityConnected(n, roads, cursedRoads) {
    // Create a graph with the given number of nodes (buildings)
    const cityGraph = new graph.Graph(n);

    // Add each road to the graph
    roads.forEach(road => {
        cityGraph.addEdge(road[0], road[1]);
    });

    // Remove the cursed roads from the graph
    cursedRoads.forEach(cursedRoad => {
        cityGraph.removeEdge(cursedRoad[0], cursedRoad[1]);
    });

    // Perform a DFS from the first building to check connectivity
    const visited = new Array(n + 1).fill(false);
    dfs.depthFirstSearch(cityGraph, 1, visited);

    // If all buildings are visited, the city is connected
    return visited.slice(1).every(v => v === true);
}

// Export the function to be available for other modules
module.exports = {
    isCityConnected
};

// Example usage:
// const connected = isCityConnected(5, [[1, 2], [2, 3], [3, 4], [4, 5]], [[2, 3]]);
// console.log(connected); // Should output: false
