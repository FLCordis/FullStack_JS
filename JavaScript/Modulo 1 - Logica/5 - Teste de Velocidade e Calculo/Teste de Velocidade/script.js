const vehicleName1 = prompt("Insira o nome do Veículo 1: ")
const vehicleSpeed1 = parseFloat(prompt("Insira a velocidade do Veículo 1: "))

const vehicleName2 = prompt("Insira o nome do Veículo 2: ")
const vehicleSpeed2 = parseFloat(prompt("Insira a velocidade do Veículo 2: "))

if(vehicleSpeed1 > vehicleSpeed2){
    alert(vehicleName1 + " é o mais rápido!")
} else if(vehicleSpeed2 > vehicleSpeed1){
    alert(vehicleName2 + " é o mais rápido!")
} else if(vehicleSpeed1 == vehicleSpeed2){
    alert("Ambos tem a mesma velocidade!")
} else{
    alert("Algo não está certo :(")
}