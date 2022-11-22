alert("Conversor de Medidas de metro para a desejada.")

const valueSelected = prompt("Digite o valor em metros: ")
let valueConverted = 0

const measureSelected = prompt("Escolha uma medida para converter: " + 
"\n\n1) milímetro (mm)" +
"\n2) centímetro (cm)" +
"\n3) decímetro (dm)" +
"\n4) decâmetro (dam)" +
"\n5) hectômetro (hm)" +
"\n6) quilômetro (km)")

switch(measureSelected){
    case "1":
        valueConverted = valueSelected * 1000
        alert("O valor de " + valueSelected + " metros = " + valueConverted + " é em milímetros.")
        break
    case "2":
        valueConverted = valueSelected * 100
        alert("O valor de " + valueSelected + " metros = " + valueConverted + " é em centímetros.")
        break
    case "3":
        valueConverted = valueSelected * 10
        alert("O valor de " + valueSelected + " metros = " + valueConverted + " é em decímetros.")
        break
    case "4":
        valueConverted = valueSelected / 10
        alert("O valor de " + valueSelected + " metros = " + valueConverted + " é em decâmetros.")
        break
    case "5":
        valueConverted = valueSelected / 100
        alert("O valor de " + valueSelected + " metros = " + valueConverted + " é em hectômetros.")
        break
    case "6":
        valueConverted = valueSelected / 1000
        alert("O valor de " + valueSelected + " metros = " + valueConverted + " é em quilômetros.")
        break
    default:
        alert("Opção inválida!")
}