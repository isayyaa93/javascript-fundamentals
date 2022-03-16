
//the differnet syntaxes change the lexical meaning of the keyword 'this'.


const print = () => {
    console.log('I love to print text!')
}

const functionA = () => {
    console.log('FUNCTION A HAS BEEN CALLED!')

}

const functionB = () => {
    console.log('FUNCTION B HAS BEEN CALLED!')
}

const greet = (person) => {
    console.log('Hello', person)
}

const blender = (string) => {
    return string.split('')
}

const square = (num, message) => {
    console.log('Message:', message)
    return num * num;
    
}