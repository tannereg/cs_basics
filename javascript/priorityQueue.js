
class Node {
    constructor(val, priority) {
        this.val = val
        this.priority = priority
    }
}

class PriorityQueue {
    constructor() {
        this.values = []
    }
    swap(arr, idx1, idx2) {
        [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]
    }
    give(arr) {
        this.values = arr
    }
    enqueue(node) {
        this.values.push(node)
        console.log(this.values)
        this.bubble_up()
    }
    bubble_up() {
        let index = this.values.length - 1
        while (index > 0) {
            let parentIndex = Math.floor((index - 1) / 2)
            if (this.values[index].priority >= this.values[parentIndex].priority) break
            this.swap(this.values, index, parentIndex)
            index = parentIndex
        }
    }
    dequeue() {
        this.swap(this.values, 0, this.values.length - 1)
        this.values.pop()
        if (this.values.length === 0) {
            return false
        }
        return this.bubble_down()
    }
    bubble_down() {
        let index = 0
        let length = this.values.length
        while (2 * index + 1 < length) {
            let index2 = index
            let child1 = 2 * index + 1
            let child2 = child1 + 1
            if (child2 < length) {
                if (this.values[child2].priority < this.values[child1].priority) {
                    index = this.compare(child2, index)
                } else {
                    index = this.compare(child1, index)
                }
            } else {
                index = this.compare(child1, index)
            }
            if (index2 === index) {
                break
            }
        }
        return this.values[0].priority
    }
    compare(child, parent) {
        if (this.values[child].priority < this.values[parent].priority) {
            this.swap(this.values, child, parent)
            return child
        } else {
            return parent
        }
    }
}

let er = new PriorityQueue()
er.enqueue(new Node("cold", 10))
console.log(er.values)
er.enqueue(new Node("gun", 1))
console.log(er.values)
er.enqueue(new Node("surgery", 4))
console.log(er.values)
er.enqueue(new Node("fever", 8))
console.log(er.values)
er.dequeue()
console.log(er.values)