function execute(){
    const valor = Math.floor(Math.random() * 101)

    return new Promise((resolve, reject) => {
        console.log('A promise está sendo executada!')
        setTimeout(() => {
            //Adicionando o 'if' para simular um erro!
            if (valor < 50) {
                reject(`O valor ${valor} é menor que 50!`)
            } else {
                resolve(`O valor ${valor} é maior que 50!`)
            }
        }, 2 * 1000)
    
    })

}

execute().then((result) => {
    console.log(`A Promise foi COMPLETA por que: ${result}`)
}).catch((err) => {
    console.log(`A Promise foi REJEITADA por que: ${err}`)
}).finally(() => {
    console.log('A Promise foi finalizada.')
})