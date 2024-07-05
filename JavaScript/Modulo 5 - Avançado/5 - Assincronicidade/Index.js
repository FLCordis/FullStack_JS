function secondStep(){
    console.log('Passo 02')
}

console.log('Passo 01')
secondStep()
console.log('Passo 03')

console.log('Passo 04')
setTimeout(() => {
    console.log('Passo 05')
}, 2000)
console.log('Passo 06')