console.log('Contando até 10s!')

// setTimeout(() => {
//     console.log('3 segundos.')
// }, 3000)

// const semTempo = setTimeout(() => {
//     console.log('5 segundos.')
// }, 3000)

// clearTimeout(semTempo)

let seconds = 0

const intervalID = setInterval(() => {
    seconds += 2
    console.log(`Se passaram ${seconds}s.`)
    if (seconds >= 10) {
        clearInterval(intervalID)
        console.log("Tempo finalizado!")
    }
}, 1000 * 2)