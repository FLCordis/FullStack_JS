function imc(weight, height){
    return new Promise((resolve, reject) => {
        if(typeof weight !== "number" || typeof height !== "number"){
            reject('O parâmetro precisa ser número!')
        } else {
            resolve(weight/(Math.pow(height, 2)))
        }
    })
}

function showResults(weight, height){
    imc(weight, height).then((result) => {
        console.log(`\nO resultado foi de ${result}`)

        if (result < 18.5) {
            console.log('Situação: MAGREZA\n')
        } else if (result < 25) {
            console.log('Situação: NORMAL\n')
        } else if (result < 30) {
            console.log('Situação: SOBREPESO\n')
        } else if (result < 40) {
            console.log('Situação: OBESIDADE\n')
        } else {
            console.log('Situação: OBESIDADE MORBIDA\n')
        }
    }).catch((err) => {
        console.log(err)
    })
    console.log(`Calculando o IMC de peso '${weight}' e altura '${height}'...`)
}

showResults(95, 1.93)
showResults("texto", 1.80)
showResults(40, 1.50)
showResults(65, 1.43)