const { Graph } = require('../graph');
const assert = require('assert').strict;

describe('Graph', function() {
    describe('#addEdge()', function() {
        it('should add edges correctly for an undirected graph', function() {
            const graph = new Graph(5);
            graph.addEdge(1, 2);
            graph.addEdge(1, 3);
            assert.deepEqual(graph.getNeighbors(1), [2, 3]);
            assert.deepEqual(graph.getNeighbors(2), [1]);
            assert.deepEqual(graph.getNeighbors(3), [1]);
        });

        it('should throw an error when adding an edge with non-existent vertices', function() {
            const graph = new Graph(3);
            assert.throws(() => graph.addEdge(4, 5), Error);
        });
    });

    describe('#removeEdge()', function() {
        it('should remove edges correctly for an undirected graph', function() {
            const graph = new Graph(5);
            graph.addEdge(1, 2);
            graph.addEdge(1, 3);
            graph.removeEdge(1, 2);
            assert.deepEqual(graph.getNeighbors(1), [3]);
            assert.deepEqual(graph.getNeighbors(2), []);
        });

        it('should throw an error when removing an edge with non-existent vertices', function() {
            const graph = new Graph(3);
            assert.throws(() => graph.removeEdge(4, 5), Error);
        });
    });

    describe('#getNeighbors()', function() {
        it('should return the correct neighbors of a vertex', function() {
            const graph = new Graph(5);
            graph.addEdge(1, 2);
            graph.addEdge(1, 3);
            graph.addEdge(2, 3);
            graph.addEdge(2, 4);
            assert.deepEqual(graph.getNeighbors(2), [1, 3, 4]);
        });
    });
});

// Run the tests with a test runner to see the results
