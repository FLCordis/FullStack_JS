let baralho = ["Ás de Paus", "3 de Ouros", "7 de Espadas", "Rei de Copas"];
let opt = "";

do {

    let cartas = "";
    opt = prompt("Baralho de Cartas! \nQuantidade de Cartas: " + baralho.length

    + "\n\n1. Adicionar cartas"
    + "\n2. Puxar uma carta"
    + "\n3. Ver as cartas"
    + "\n4. Sair"
    + "\n\nEscolha uma opção: ")

    switch(opt){
        case "1":
            const carta = prompt('Qual carta será adicionada? ');
            baralho.push(carta);
            break
        case "2":
            const puxarCarta = baralho.pop();
            if(!puxarCarta){
                alert('Não existe cartas no baralho!')
            }else{
                alert('A carta puxada foi: ' + puxarCarta);
            }
            break
        case "3":
            baralho.forEach((e, indice) => {
                cartas += baralho[indice] + "\n";
            });
            alert(cartas);
            break
        case "4":
            alert('Até mais!')
            break
        default:
            alert('Opção inválida!')
    }

} while (opt !== "4");