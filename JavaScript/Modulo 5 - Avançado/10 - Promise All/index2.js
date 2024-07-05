numbers = [2, 4, 9, 14, 22, 40]

function asyncSquare(x){
    return new Promise((resolve, reject) => {
        if(typeof x !== "number"){
            reject("The input must be a number!")
        } else {
            resolve(x * x)
        }
    })
}

// Qualquer resultado que dê erro na promise vai fazer a operação toda ser cancelada.
Promise.all(numbers.map(number => asyncSquare(number))).then(squares => {
    console.log(squares)
}).catch(err => {
    console.log(err)
})