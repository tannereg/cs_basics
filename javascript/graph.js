

class Graph {
    constructor() {
        this.adjacencyList = {}
    }
    add_vertex(vertex) {
        if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = []
    }

    add_edge(vertex1, vertex2) {
        if (!this.adjacencyList[vertex1]) return `${vertex1} not found`
        if (!this.adjacencyList[vertex2]) return `${vertex2} not found`
        this.adjacencyList[vertex1].push(vertex2)
        this.adjacencyList[vertex2].push(vertex1)
        console.log(this.adjacencyList)
        return `${vertex1} and ${vertex2} connected`
    }
    remove_edge(vertex1, vertex2) {
        if (!this.adjacencyList[vertex1]) return `${vertex1} not found`
        if (!this.adjacencyList[vertex2]) return `${vertex2} not found`
        this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(v => v !== vertex2)
        this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(v => v !== vertex1)
    }
    remove_vertex(vertex) {
        if (!this.adjacencyList[vertex]) return `${vertex} does not exist`
        while (this.adjacencyList[vertex].length) {
            this.remove_edge(vertex, this.adjacencyList[vertex].pop())
        }
        delete this.adjacencyList[vertex]
    }
}

g = new Graph()
g.add_vertex("Tokyo")
g.add_vertex("hong kong")
console.log(g.add_edge('Tokyo', "hong kong"))
console.log(Object.values(g.adjacencyList))
console.log(Object.keys(g.adjacencyList))
console.log(g.adjacencyList)
g.remove_vertex("hong kong")
console.log(g.adjacencyList)