const firstName = prompt("Insira seu nome: ")
const secondName = prompt("Insira seu sobrenome: ")
const study = prompt("Insira seu campo de estudo: ")
const birthday = prompt("Insira seu ano de nascimento: ")



alert(
    "Recruta cadastrado com sucesso!\n\n" +
    "Nome Completo: " + firstName + " " + secondName +
    "\nCampo de Estudo: " + study +
    "\nIdade: " + (2022 - birthday)
)
