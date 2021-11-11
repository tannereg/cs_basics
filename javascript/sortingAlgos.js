function swap(arr, idx1, idx2) {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]
}

function bubbleSort(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        let noSwaps = true
        for (let j = 0; j < i; j++) {
            if (arr[j] > arr[j + 1]) {
                swap(arr, j, j + 1)
                noSwaps = false
            }
        }
        if (noSwaps) {
            break
        }
    }
    return arr
}

function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let min = i
        for (let j = i; j < arr.length; j++) {
            if (arr[j] < arr[min]) {
                min = j
            }
        }
        if (i != min) {
            swap(arr, i, min)
        }
    }
    return arr
}

function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        if (arr[i - 1] > arr[i]) {
            for (let j = i; j > 0; j--) {
                if (arr[j - 1] > arr[j]) {
                    swap(arr, j - 1, j)
                } else {
                    break
                }
            }
        }
    }
    return arr
}

function merge(arr1, arr2) {
    let newArr = []
    let i = 0
    let j = 0
    if (arr1.length === 0) {
        return arr2
    }
    if (arr2.length === 0) {
        return arr1
    }
    while (true) {
        if (i === arr1.length && j === arr2.length) {
            break
        }
        else if (i === arr1.length) {
            newArr.push(arr2[j])
            j++
        }
        else if (j === arr2.length) {
            newArr.push(arr1[i])
            i++
        }
        else if (arr1[i] < arr2[j]) {
            newArr.push(arr1[i])
            i++
        } else {
            newArr.push(arr2[j])
            j++
        }
    }
    return newArr
}

function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr
    } else {
        let midpoint = Math.floor(arr.length / 2)
        let arr1 = arr.slice(0, midpoint)
        let arr2 = arr.slice(midpoint)
        return merge(mergeSort(arr1), mergeSort(arr2))
    }
}

// Could implement where a pivot is anywhere, kind of tricky though
function quickSort(arr, pivot, end) {
    function helper(arr, pivot, end) {
        if (pivot != end) {
            let numVals = 0
            for (let i = pivot; i <= end; i++) {
                if (arr[i] < arr[pivot]) {
                    numVals++
                    swap(arr, i, pivot + numVals)
                }
            }
            swap(arr, pivot, pivot + numVals)
            helper(arr, pivot, pivot + numVals)
            helper(arr, pivot + numVals + 1, end)
        }
    }
    helper(arr, pivot, end)
    return arr
}

function getDigit(num, i) {
    return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10
}

function digitCount(num) {
    if (num === 0) return 1
    return Math.floor(Math.log10(Math.abs(num))) + 1
}

function mostDigits(arr) {
    let maxDigits = 0
    for (let i = 0; i < arr.length; i++) {
        maxDigits = Math.max(maxDigits, digitCount(arr[i]))
    }
    return maxDigits
}

function radixSort(arr) {

    let maxDigits = mostDigits(arr)
    for (let i = 0; i < maxDigits; i++) {
        let buckets = Array.from({ length: 10 }, () => [])
        for (let j = 0; j < arr.length; j++) {
            buckets[getDigit(arr[j], i)].push(arr[j])
        }
        arr = [].concat(...buckets)
    }
    return arr
}

let arr = [0, 6, 4, 8, 3, 3, 1, 9, 23, 2, 1, 41, 18, 1]

let arr1 = [1, 2, 5, 7, 8, 9, 22, 50, 56]
let arr2 = [3, 4, 6, 8, 11, 19, 24]
console.log(radixSort(arr))