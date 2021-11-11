
class MaxHeap {
    constructor() {
        this.values = []
    }
    swap(arr, idx1, idx2) {
        [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]
    }
    insert(val) {
        this.values.push(val)
        this.bubble_up()
    }
    bubble_up() {
        let index = this.values.length-1
        while (index > 0) {
            let parentIndex = Math.floor((index-1)/2)
            if (this.values[index] <= this.values[parentIndex]) break
            this.swap(this.values, index, parentIndex)
            index = parentIndex
        }
    }
}