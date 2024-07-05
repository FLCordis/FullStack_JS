async function asyncSum(a, b){
    if(typeof a !== "number" || typeof b !== "number"){
        return Promise.reject('Arguments must be of type number')
    } else
    return a + b
}

async function asyncSub(a, b){
    if(typeof a !== "number" || typeof b !== "number"){
        return Promise.reject('Arguments must be of type number')
    }
    return a - b
}

const sumResult = asyncSum(33,77)
const subResult = asyncSub(77,33)

Promise.all([sumResult,subResult]).then(results => {
    console.log(results)
}).catch(err => {
    console.log(err)
})