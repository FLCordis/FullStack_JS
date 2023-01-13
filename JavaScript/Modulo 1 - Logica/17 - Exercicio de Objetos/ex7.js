let opt = "";
let garagem = []

do {
    opt = prompt('Bem-vindo a Garagem FC!\nA quantidade de carros no momento é de: ' + garagem.length 
    + '\n\nOpções disponíveis:'
    + '\n1. Adicionar um carro'
    + '\n2. Listar os carros'
    + '\n3. Remover um carro'
    + '\n4. Sair'
    + '\n\n-> Escolha uma opção <-');

    switch (opt) {
        case '1':
            const carro = {};

            carro.nome = prompt('Qual é o nome do carro?');
            carro.fabricante = prompt('Qual é o fabricante?');
            carro.modelo = prompt('Qual é o modelo?');
            carro.ano = prompt('Qual é o ano do carro?');
            carro.cor = prompt('Qual é a cor dele?');

            const confirmacao = confirm(
                "Salvar esse carro e seus dados?\n" +
                "\nCarro: " + carro.nome +
                "\nFabricante: " + carro.fabricante +
                "\nModelo: " + carro.modelo +
                "\nAno: " + carro.ano +
                "\nCor: " + carro.cor
            );

            if (confirmacao){
                garagem.push(carro);
            }

            break;
        case '2':
            for (let i = 0; i < garagem.length; i++) {
                alert(
                    "\nCarro " + (i+1) +
                    "\nNome: " + garagem[i].nome +
                    "\nFabricante: " + garagem[i].fabricante +
                    "\nModelo: " + garagem[i].modelo +
                    "\nAno: " + garagem[i].ano +
                    "\nCor: " + garagem[i].cor
                )
            }
            break;
        case '3':
            let removerCarro = prompt('Qual posição do carro para ser removido?')
            removerCarro =+ 1;
            const carroRemovido = garagem.splice(removerCarro, 1);
            break;
        case '4':
            alert('Fechando a garagem...')
            break;
        default:
            alert('Opção inválida!')
            break;
    }

} while (opt !== "4");