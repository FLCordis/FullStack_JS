const entrada1 = prompt("Primeiro número: ")
const entrada2 = prompt("Segundo número: ")

const x = parseFloat(entrada1)
const y = parseFloat(entrada2)

const soma = x + y
const sub = x - y
const div = x / y
const multi = x * y

alert(
    "Soma: " + soma +
    "\nSubtração: " + sub +
    "\nDivisão: " + div +
    "\nMultiplicação: " + multi
)