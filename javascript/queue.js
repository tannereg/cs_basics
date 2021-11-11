
class Node {
    constructor (val) {
        this.val = val
        this.next = null
    }
}

class Queue {
    constructor() {
        this.first = null
        this.last = null
        this.size = 0
    }
    enqueue(val) {
         let newNode = new Node(val)
         if (this.size === 0) {
             this.first = newNode
             this.last = newNode
        } else {
            this.last.next = newNode
            this.last = newNode
         }
         return ++this.size
    }
    dequeue() {
        if (this.size == 0) {
            return null
        } else if (this.size === 1) {
            this.last = null
            this.first = null
        } else {
            let temp = this.first
            this.first = this.first.next
            temp.next = null
            this.size --
            return temp
        }
    }
}