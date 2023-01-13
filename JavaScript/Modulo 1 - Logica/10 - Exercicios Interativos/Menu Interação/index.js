alert("Exercício do Menu Interativo!")
let opt = ""

do{
    opt = prompt(
    "Bem vindo(a) ao menu!\n\n"+   
    "Opção 1: Checar Saldo\n" +
    "Opção 2: Transferir\n" +
    "Opção 3: Pedir Empréstimo\n" + 
    "Opção 4: Outras opções\n" +
    "Opção 5: Sair.\n")

    switch(opt){
        case "1":
            alert("Você escolheu a opção " + opt)
            break
        case "2":
            alert("Você escolheu a opção " + opt)
            break
        case "3":
            alert("Você escolheu a opção " + opt)
            break
        case "4":
            alert("Você escolheu a opção " + opt)
            break
        case "5":
            alert("Você escolheu a opção " + opt)
            alert("Encerrando...")
            break
        default:
            alert("Opção errada!")
    }

}while (opt !== "5")