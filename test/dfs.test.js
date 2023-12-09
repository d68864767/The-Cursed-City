const { Graph } = require('../graph');
const dfs = require('../dfs');
const assert = require('assert').strict;

describe('DFS', function() {
    describe('#depthFirstSearch()', function() {
        it('should visit all nodes in a connected graph', function() {
            const graph = new Graph(5);
            graph.addEdge(1, 2);
            graph.addEdge(2, 3);
            graph.addEdge(3, 4);
            graph.addEdge(4, 5);

            const visited = new Array(6).fill(false);
            dfs.depthFirstSearch(graph, 1, visited);

            // Since the graph is connected, all nodes should be visited
            assert.deepEqual(visited.slice(1), [true, true, true, true, true]);
        });

        it('should not visit disconnected nodes', function() {
            const graph = new Graph(5);
            graph.addEdge(1, 2);
            graph.addEdge(2, 3);
            // Node 4 and 5 are disconnected

            const visited = new Array(6).fill(false);
            dfs.depthFirstSearch(graph, 1, visited);

            // Nodes 4 and 5 should not be visited
            assert.deepEqual(visited.slice(1), [true, true, true, false, false]);
        });

        it('should handle graphs with cycles correctly', function() {
            const graph = new Graph(4);
            graph.addEdge(1, 2);
            graph.addEdge(2, 3);
            graph.addEdge(3, 4);
            graph.addEdge(4, 1); // Adding a cycle

            const visited = new Array(5).fill(false);
            dfs.depthFirstSearch(graph, 1, visited);

            // All nodes should be visited despite the cycle
            assert.deepEqual(visited.slice(1), [true, true, true, true]);
        });

        it('should throw an error when starting from a non-existent node', function() {
            const graph = new Graph(3);
            const visited = new Array(4).fill(false);
            assert.throws(() => dfs.depthFirstSearch(graph, 4, visited), Error);
        });
    });
});
