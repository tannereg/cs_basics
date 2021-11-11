import Queue from "queue.js"

class Node {
    constructor(val) {
        this.val = val
        this.left = null
        this.right = null
    }
}

class BST {
    constructor() {
        this.root = null
    }

    insert(val) {
        let newNode = new Node(val)
        if (!this.root) {
            this.root = newNode
            return this
        } 
        let testNode = this.root
        while (true) {
            if (testNode.val === val) {
                console.log("No repeats!")
                return this
            }
            else if (testNode.val > val) {
                if (!testNode.left) {
                    testNode.left = newNode
                    return this
                }
                testNode = testNode.left
            }
            else if (testNode.val < val) {
                if (!testNode.right) {
                    testNode.right = newNode
                    return this
                }
                testNode = testNode.right
            }
        }
    }
    find(val) {
        if (!this.root) {
            return false
        }
        let testNode = this.root
        while (testNode) {
            if (testNode.val > val) {
                testNode = testNode.left
            }
            else if (testNode.val < val) {
                testNode = testNode.right
            } else {
                return current
            }
        }
        return false
    }
    bfs() {
        let q = new Queue()
        let visited = []
        if (!this.root) {
            return null
        }
        let current = this.root
        q.queue(current)
        while (queue.size) {
            current = q.dequeue()
            visited.push(current.val)
            if (current.left) q.queue(current.left)
            if (current.right) q.queue(current.right)
        }
        return visited
    }
    dfs_pre() {
        let visited = []
        function helper(node) {
            visited.push(node.val)
            if (node.left) helper(node.left)
            if (node.right) helper(node.right)
        }
        helper(this.root)
        return visited
    }
    dfs_post() {
        let visited = []
        function helper(node) {
            if (node.left) helper(node.left)
            if (node.right) helper(node.right)
            visited.push(node.val)
        }
        helper(this.root)
        return visited
    }
    dfs_in() {
        let visited = []
        function helper(node) {
            if (node.left) helper(node.left)
            visited.push(node.val)
            if (node.right) helper(node.right)
        }
        helper(this.root)
        return visited
    }
}

let node = new Node(10)
node = node.left
if (!node) {
    console.log("!node")
} else {
    console.log("else !node")
}
if (node === null) {
    console.log("node === null")
} else {
    console.log("else node === null")
}