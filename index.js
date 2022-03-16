const multiply = (n1,n2) => {
    console.log("Multiplying", n1, "by", n2)
    return n1 * n2
}

const double = (n) => {
    return n*2
}

let array1 = ['a', 'b', 'c', 'd', 'e']
let array2 = ['a', 'b', 'c', 'd', 'e', 'f', 'g']

const determineLength = (arr) => {
    if (arr.length>5) {
        return 'This array is long'

    } else {
        return 'This array is short'
    }
}

const askForString = () => {
    let str = prompt('Enter a string')
    return str;
}

console.log(askForString().split(''))