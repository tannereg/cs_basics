function swap(arr, idx1, idx2) {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]
}

function merge(arr1, arr2) {
    let newArr = []
    let i = 0
    let j = 0
    let counter = 0
    while (true) {
        counter++
        if (counter > 100) {
            console.log('broken')
            break
        }
        if (i === arr1.length && j === arr2.length) {
            break
        }
        else if (i === arr1.length) {
            newArr.pushh(arr2[j])
        }
        else if (j === arr2.length) {

        }
        if (arr1[i] < arr2[j]) {
            newArr.push(arr1[i])
            if (i != arr1.length - 1) {
                i++
            }
        } else {
            newArr.push(arr2[j])
            if (j != arr2.length - 1) {
                j++
            }
        }
    }
    return newArr
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

let newArr = [0, 6, 4, 8, 3, 9, 2, 20, 15, 17, 48, 1]

let arr1 = [1, 2, 5, 7, 8]
let arr2 = [3, 4, 6]
console.log(merge(arr1, arr2))
// console.log(insertionSort(newArr))
// bubbleSort(newArr)