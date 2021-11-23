

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

    dfs(vertex) {
        let visited = {}
        let results = []
        console.log(this.adjacencyList)
        let dictionary = this.adjacencyList
        function dfs_recursive(vertex) {
            console.log(dictionary)
            if (!dictionary[vertex]) {
                return
            }
            console.log(dictionary[vertex])
            visited[vertex] = true
            results.push(vertex)
            for (let i = 0; i < dictionary[vertex].length; i++) {
                if (!visited[vertex]) {
                    dfs_recursive(dictionary[vertex])
                }
            }
        }
        dfs_recursive(vertex)
        return results
    }
}

g = new Graph()
g.add_vertex("A")
g.add_vertex("B")
g.add_vertex("C")
g.add_vertex("D")
g.add_vertex("E")
g.add_vertex("F")

g.add_edge("A", "B")
g.add_edge("A", "C")
g.add_edge("B", "D")
g.add_edge("C", "E")
g.add_edge("D", "E")
g.add_edge("D", "F")
g.add_edge("E", "F")
console.log(g.adjacencyList["A"])
g.dfs("A")