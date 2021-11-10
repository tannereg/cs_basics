
class Node {
    constructor(val) {
        this.val = val
        this.prev = null
        this.next = null
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null
        this.tail = null
        this.length = 0
    }
    push(val) {
        let node = new Node(val)
        if (this.length === 0) {
            this.head = node
            this.tail = node
        } else {
            this.tail.next = node
            node.prev = this.tail
            this.tail = node
        }
        this.length ++
        return this
    }
    pop() {
        if (this.length === 0) {
            return null
        } else if (this.length === 1) {
            this.head = null
            this.tail = null
        }
        let node = this.tail
        this.tail = node.prev
        node.prev = null
        this.tail.next = null
        this.length --
        return node
    }
    shift() {
        if (this.length === 0) return undefined
        let temp = this.head
        if (this.length === 1) {
            this.head = null
            this.tail = null
        }
        this.head = temp.next
        this.head.prev = null
        temp.next = null
        this.length --
        return temp
    }
    unshift(val) {
        let node = new Node(val)
        if (this.length === 0) {
            this.head = node
            this.tail = node
        } else {
            this.head.prev = node
            node.next = this.head
            this.head = node
        }
        this.length ++
        return this
    }
    get(index) {
        let node
        if (index < 0 || index > this.length) {
            return null
        }
        if (index > this.length/2) {
            index = this.length - 1 - index
            node = this.tail
            while(index != 0) {
                node = node.next
                index --
            }
        } else {
            node = this.head
            while(index != 0) {
                node = node.next
                index --
            }
        }
        return node
    }
    set(index, val) {
        let node = this.get(index)
        if (node) {
            node.val = val
            return true
        }
        return false
    }
    insert(index, val) {
        if (index < 0 || index > this.length) {
            return false
        } else if (index === 0) {
            this.unshift(val)
        } else if (index === this.length) {
            this.push(val)
        } else {
            let prev = this.get(index - 1)
            let next = prev.next
            let newNode = new Node(val)
            prev.next = newNode
            newNode.prev = prev
            newNode.next = next
            next.prev = newNode
            this.length ++
        }
        return true
    }
    remove(index) {
        if (index < 0 || index >= this.length) {
            return null
        } else if (index === 0) {
            return this.shift()
        } else if (index === this.length - 1) {
            return this.pop()
        } else {
            let prev = this.get(index - 1)
            let next = prev.next.next
            let temp = prev.next
            prev.next = next
            next.prev = prev
            temp.next = null
            temp.prev = null
            this.length --
            return temp
        }
    }
    reverse() {
        if (this.length <= 1) {
            return this
        }
        let cur = this.head
        this.head = this.tail
        this.tail = cur
        let prev = null
        let next
        for (let i = 0; i < this.length; i++) {
            next = cur.next
            cur.next = prev
            if (prev != null) {
                prev.prev = cur
            }
            prev = cur
            cur = next
        }
        return this
    }
    print() {
        let node = this.head
        let arr = []
        for (let i=0;i<this.length;i++) {
            arr.push(node.val)
            node = node.next
        }
        console.log(arr)
    }
}

let l = new DoublyLinkedList()

l.push(40)
l.push(50)
l.unshift(100)
l.unshift(60)
l.print()
console.log(l.get(2))
l.print()
console.log(l.reverse())
l.print()