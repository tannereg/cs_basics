function binarySearch(arr, val) {
    let begin = 0
    let end = arr.length - 1
    let counter = 0

    function helper(arr, begin, end, val) {
        let index = Math.round((end + begin) / 2)
        if (val === arr[index]) {
            return index
        }
        else if (begin >= end) {
            return -1
        }
        else if (val > arr[index]) {
            begin = index + 1
            return helper(arr, begin, end, val)
        } else {
            end = index - 1
            return helper(arr, begin, end, val)
        }
    }
    return helper(arr, 0, end, val)
    // return Math.round((4 + 3) / 2)
}

console.log(binarySearch([1, 2, 3, 4, 5], 2)) // 1
console.log(binarySearch([1, 2, 3, 4, 5], 3)) // 2
console.log(binarySearch([1, 2, 3, 4, 5], 5)) // 4
console.log(binarySearch([1, 2, 3, 4, 5], 6)) // -1
console.log(binarySearch([
    5, 6, 10, 13, 14, 18, 30, 34, 35, 37,
    40, 44, 64, 79, 84, 86, 95, 96, 98, 99
], 10)) // 2
console.log(binarySearch([
    5, 6, 10, 13, 14, 18, 30, 34, 35, 37,
    40, 44, 64, 79, 84, 86, 95, 96, 98, 99
], 95)) // 16
console.log(binarySearch([
    5, 6, 10, 13, 14, 18, 30, 34, 35, 37,
    40, 44, 64, 79, 84, 86, 95, 96, 98, 99
], 100)) // -1