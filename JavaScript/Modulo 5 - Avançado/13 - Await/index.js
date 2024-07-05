async function asyncSum(a, b){
    if(typeof a !== "number" || typeof b !== "number"){
        return Promise.reject('Arguments must be of type number')
    } else
    return a + b
}

// async function execute(){
//     asyncSum(50, 33).then(result => {
//         console.log(result)
//     })
// }

async function execute(){
    try {
        const result = await asyncSum("texto",33)
        console.log(result)
    } catch(err) {
        console.log(err)
    }
}

execute()