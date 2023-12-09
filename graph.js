class Graph {
    constructor(vertices) {
        this.vertices = vertices;
        this.adjList = new Map();
        for (let i = 1; i <= vertices; i++) {
            this.adjList.set(i, []);
        }
    }

    addEdge(v, w) {
        if (v > this.vertices || w > this.vertices) {
            throw new Error('Vertex does not exist');
        }
        this.adjList.get(v).push(w);
        this.adjList.get(w).push(v); // Since the graph is undirected
    }

    removeEdge(v, w) {
        if (v > this.vertices || w > this.vertices) {
            throw new Error('Vertex does not exist');
        }
        this.adjList.set(v, this.adjList.get(v).filter(vertex => vertex !== w));
        this.adjList.set(w, this.adjList.get(w).filter(vertex => vertex !== v));
    }

    getNeighbors(v) {
        return this.adjList.get(v);
    }
}

module.exports = {
    Graph
};
