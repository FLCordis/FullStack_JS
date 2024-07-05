function promiseCreator(){
    return new Promise((resolve, reject) => {    // o parâmetros dentro tem nome padronizado, mas pode colocar qualquer nome!
        console.log('A promise está sendo executada!')
        setTimeout(() => {
            // if (true){
            //     reject(false) // Valor devolvido, pode ser qualquer um.
            // }
            console.log('Resolvendo a promise...')
            resolve(true) // Valor devolvido, pode ser qualquer um.
        }, 2 * 1000)
    
    })

}

const p = promiseCreator()

console.log(p)

setTimeout(() => {
    console.log(p)
}, 3 * 1000) // Caso troque o valor por menos de 2 segundos, o resultado da Promise ficaria {pending} e não {true}!

// O jeito mais normal de usar é dentro de uma função!