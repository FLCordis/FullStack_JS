alert("Controle Financeiro!")

let money = prompt("Quanto de dinheiro você tem? ")
money = parseFloat(money)
let opt = ""

do{
    opt = prompt("Saldo Disponível: R$" + money +
    "\n\nOpção 1 -> Adicionar Dinheiro\n" + 
    "Opção 2 -> Remover Dinheiro\n\n" +
    "Opção 0 -> Sair")

    switch(opt){
        case "1":
            money += parseFloat(prompt("Você tem " + money +", quanto de dinheiro quer adicionar? "))
            break
        case "2":
            money -= prompt("Você tem " + money +", quanto de dinheiro quer remover? ")
            break
        case "0":
            alert("Saindo...")
            break
        default:
            opt = ("Digite uma opção válida!")
    }

}while (opt !== "0")