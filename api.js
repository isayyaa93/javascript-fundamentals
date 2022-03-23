//create a function called request.

const request = () => {
    fetch('https://raw.githubusercontent.com/isayyaa93/javascript-fundamentals/main/user.json')
    .then((res) => {
        return res.json()
    })
    .then((data) => {
        console.log('Data returned is', data)
    })
}