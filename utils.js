// utils.js

/**
 * This utility module will provide helper functions for the main algorithm.
 */

/**
 * Removes cursed roads from the list of all roads.
 * @param {Array} roads - The array of all roads.
 * @param {Array} cursedRoads - The array of cursed roads to be removed.
 * @returns {Array} - The array of roads after removing the cursed roads.
 */
function removeCursedRoads(roads, cursedRoads) {
  const cursedRoadsSet = new Set(cursedRoads.map(road => road.join(',')));
  return roads.filter(road => !cursedRoadsSet.has(road.join(',')));
}

/**
 * Converts a list of roads into an adjacency list representation of the graph.
 * @param {number} n - The number of buildings.
 * @param {Array} roads - The array of roads.
 * @returns {Object} - The adjacency list representation of the graph.
 */
function convertToAdjacencyList(n, roads) {
  const adjacencyList = {};
  for (let i = 1; i <= n; i++) {
    adjacencyList[i] = [];
  }
  roads.forEach(([a, b]) => {
    adjacencyList[a].push(b);
    adjacencyList[b].push(a);
  });
  return adjacencyList;
}

module.exports = {
  removeCursedRoads,
  convertToAdjacencyList
};
