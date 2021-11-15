
class MaxHeap {
    constructor() {
        this.values = []
    }
    swap(arr, idx1, idx2) {
        [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]
    }
    give(arr) {
        this.values = arr
    }
    insert(val) {
        this.values.push(val)
        this.bubble_up()
    }
    bubble_up() {
        let index = this.values.length - 1
        while (index > 0) {
            let parentIndex = Math.floor((index - 1) / 2)
            if (this.values[index] <= this.values[parentIndex]) break
            this.swap(this.values, index, parentIndex)
            index = parentIndex
        }
    }
    extract_max() {
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
                if (this.values[child2] > this.values[child1]) {
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
        return this.values[0]
    }
    compare(child, parent) {
        if (this.values[child] > this.values[parent]) {
            this.swap(this.values, child, parent)
            return child
        } else {
            return parent
        }
    }
}

class MinHeap {
    constructor() {
        this.values = []
    }
    swap(arr, idx1, idx2) {
        [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]
    }
    give(arr) {
        this.values = arr
    }
    insert(val) {
        this.values.push(val)
        this.bubble_up()
    }
    bubble_up() {
        let index = this.values.length - 1
        while (index > 0) {
            let parentIndex = Math.floor((index - 1) / 2)
            if (this.values[index] >= this.values[parentIndex]) break
            this.swap(this.values, index, parentIndex)
            index = parentIndex
        }
    }
    extract_max() {
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
                if (this.values[child2] < this.values[child1]) {
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
        return this.values[0]
    }
    compare(child, parent) {
        if (this.values[child] < this.values[parent]) {
            this.swap(this.values, child, parent)
            return child
        } else {
            return parent
        }
    }
}

let heap = new MaxHeap()
heap.give([50, 39, 41, 18, 27, 12, 8])
heap.insert(100)
heap.extract_max()
console.log(heap.values)
let h = new MinHeap()
h.give([1, 4, 2, 8, 5, 6, 7])
h.insert(3)
console.log(h.values)