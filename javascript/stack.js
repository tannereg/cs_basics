
let stack = []
stack.push(10)
stack.pop()
//nuff said

class Node {
    constructor(val) {
        this.val = val
        this.next = null
    }
}

class Stack {
    constructor() {
        this.first = null
        this.last = null
        this.length = 0
    }

    push(val) {
        let newNode = new Node(val)
        if (this.length === 0) {
            this.first = newNode
            this.last = newNode
        } else {
            let temp = this.first
            this.first = newNode
            this.first.next = temp
        }
        this.length++
        return this.length
    }
    pop() {
        let temp = this.first
        if (this.length === 0) {
            return null
        } else if (this.length === 1) {
            this.last = null
            this.first = null
        } else {
            this.first = this.first.next
        }
        this.length--
        return temp.val
    }
}

class Queue {
    constructor() {

    }
}