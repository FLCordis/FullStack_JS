async function imc(weight, height){
    if(typeof weight !== "number" || typeof height !== "number"){
        return Promise.reject('Arguments must be numbers!')
    } else {
        return (weight/(Math.pow(height, 2)))
    }
}

async function showResults(weight, height){
        try {

            console.log(`Calculando o IMC de ${weight} e ${height}`)
            const result = await imc(weight, height)
            console.log(`\nResultado de IMC: ${result}`)

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
        } catch (err) {
            console.log(err)
        }
}

showResults(80, 1.80)
showResults(120, 2.00)
showResults(75, 1.65)