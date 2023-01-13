const idade = prompt("Informe sua idade: ")

if (idade >= 18){
    alert("Você é maior de idade!")
} else if (idade <= 18){
    alert("Você é menor de idade!")
} else{
    alert("Idade invalida!")
}

const numero = prompt("Digite um número para ver se é positivo ou negativo: ")
const resultado = (numero > 0) ? "Positivo" : "Negativo"

alert(resultado)