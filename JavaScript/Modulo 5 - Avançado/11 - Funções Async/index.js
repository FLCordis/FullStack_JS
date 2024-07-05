async function asyncSum(a, b){
    return a + b
}

function asyncSub(a, b){
    return a - b
}

const sumResult = asyncSum(33,77)
const subResult = asyncSub(77,33)

Promise.all([sumResult,subResult]).then(results => {
    console.log(results)
}).catch(err => {
    console.log(err)
})

// numbers = [2, 4, 9, 14, 22, 40]

// async function asyncSquare(x){
//     return x * x
// }

// Promise.all(numbers.map(number => asyncSquare(number))).then(squares => {
//     console.log(squares)
// }).catch(err => {
//     console.log(err)
// })