const resultado = prompt("Insira uma alternativa: \na) \nb) \nc)")

switch(resultado){
    case "a":
        alert("O resultado é o 'a'.")
        break
    case "b":
        alert("O resultado é o 'b'.")
        break
    case "c":
        alert("O resultado é o 'c'.")
        break
    default:
        alert("Pensando...")
}