class HashTable {
    constructor(size = 53) {
        this.keyMap = new Array(size)
    }
    _hash(key) {
        let total = 0
        let primeNum = 31
        for (let i = 0; i < Math.min(key.length, 100); i++) {
            let value = key[i].charCodeAt(0) - 96
            total = (total * primeNum + value) % this.keyMap.length
        }
        return total
    }
    set(key, value) {
        let hashVal = this.keyMap[this._hash(key)]
        if (!hashVal) {
            hashVal = []
        }
        hashVal.push([key, value])
    }
    get(key) {
        let hashVal = this.keyMap[this._hash(key)]
        if (hashVal) {
            for (let i = 0; i < hashVal.length; i++) {
                if (key === hashVal[i][0]) {
                    return hashVal[i]
                }
            }
        }
        console.log("Not found")
        return undefined
    }
    keys() {
        let valuesArr = []
        for (let i = 0; i < this.keyMap.length; i++) {
            if (this.keyMap[i]) {
                for (let j = 0; j < this.keyMap[i].length; j++) {
                    if (valuesArr.includes(this.keyMap[i][j][0])) valuesArr.push(this.keyMap[i][j][0])
                }
            }
        }
    }
    values() {
        let valuesArr = []
        for (let i = 0; i < this.keyMap.length; i++) {
            if (this.keyMap[i]) {
                for (let j = 0; j < this.keyMap[i].length; j++) {
                    if (valuesArr.includes(this.keyMap[i][j][1])) valuesArr.push(this.keyMap[i][j][1])
                }
            }
        }
    }
}
