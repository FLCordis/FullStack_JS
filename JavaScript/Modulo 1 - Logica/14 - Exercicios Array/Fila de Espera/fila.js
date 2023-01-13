let opt = "";
let fila = [];
let indice = 0;
alert('Fila de Consultório Médico - Selecione uma opção válida!')

do {
    let pacientes = "";

    for (let i = 0; i < fila.length; i++) {;
        pacientes += (i + 1) + "º - " + fila[i] + "\n"
    }

    opt = prompt('Menu interativo!\nFila atual: \n' +
    pacientes +
    "\n\n1) Novo paciente" +
    "\n2) Consultar próximo paciente" +
    "\n3) Sair");
    
    switch(opt){
        case '1':
            const paciente = prompt('Digite o nome do paciente para adicionar a fila: ');
            fila.push(paciente);
            break
        case '2':
            const proximoPaciente = fila.shift();
            // Se colocar apenas a variável dentro do if, ele vai converter para valor booleano, e qualquer valor é TRUE, logo usa o '!' para verificar se é FALSE.
            // Pode colocar tbm fila.length < 0
            if(!proximoPaciente){
                prompt("Não existe pacientes na fila!")
            }else{
                alert('O próximo paciente é: ' + proximoPaciente);
            }
            break
        case '3':
            alert('Até mais!');
            break
        default:
            alert('Opção inválida!');
    }

} while (opt !== '3');