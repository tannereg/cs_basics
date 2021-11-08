
function validAnagram(array1, array2) {
    if (array1.length != array2.length) {
        return false
    }
    let code = {}
    for (let char in array1) {
        code[array1[char]] = (code[array1[char]] || 0) + 1
        // console.log(code[array1[char]])
    }
    for (let char in array2) {
        // console.log(code[array2[char]], array2[char])
        // console.log('\n')
        if (!code[array2[char]]) {
            return false
        } else {
            code[array2[char]]--
        }
    }
    return true
}

console.log(validAnagram('', ''))
console.log(validAnagram('aaz', 'zza'))
console.log(validAnagram('anagram', 'nagaram'))
console.log(validAnagram('car', 'rat'))
console.log(validAnagram('awesom', 'awesome'))
console.log(validAnagram('acanalmanplanpamana', 'amanaplanacanalpanama'))
console.log(validAnagram('qeywrt', 'qwerty'))
console.log(validAnagram('timetwisttext', 'texttwisttime'))
