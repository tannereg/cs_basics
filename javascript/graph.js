

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
        const visited = {}
        const results = []
        const dictionary = this.adjacencyList
        function dfs_recursive(vertex) {
            console.log(dictionary)
            if (!vertex) {
                return null
            }
            console.log(dictionary[vertex])
            visited[vertex] = true
            results.push(vertex)
            // dictionary[vertex].forEach((neighbor) => {
            //     if (!visited[vertex]) {
            //         return dfs_recursive(neighbor)
            //     }
            // })
            // debugger
            for (let i = 0; i < dictionary[vertex].length; i++) {
                if (!visited[dictionary[vertex][i]]) {
                    dfs_recursive(dictionary[vertex][i])
                }
            }
        }
        dfs_recursive(vertex)
        return results
    }

    dfs2(vertex) {
        let stack = []
        let visited = {}
        let results = []
        stack.push(vertex)
        debugger
        while (stack.length != 0) {
            vertex = stack.pop()
            if (!visited[vertex]) {
                visited[vertex] = true
                results.push(vertex)
                for (let i = 0; i < this.adjacencyList[vertex].length; i++) {
                    stack.push(this.adjacencyList[vertex][i])
                }
            }
        }
        return results
    }

    bfs(vertex) {
        let q = []
        let visited = {}
        let results = []
        q.push(vertex)
        debugger
        while (q.length != 0) {
            vertex = q.shift()
            if (!visited[vertex]) {
                visited[vertex] = true
                results.push(vertex)
                for (let i = 0; i < this.adjacencyList[vertex].length; i++) {
                    q.push(this.adjacencyList[vertex][i])
                }
            }
        }
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
console.log(g.bfs("A"))
console.log(g.dfs2("A"))