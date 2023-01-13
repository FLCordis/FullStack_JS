function somar(a, b) {
    return a + b;
}

let operacao = somar; // Operação é igual a função somar, se for operacao = somar(); ai ele chamaria a função.

console.log(operacao(4,5));


const subtrair = function subtracao(a,b){   //Função nomeada
    return a - b;
}


operacao = function (a,b){ //Função anônima, só pode existir DENTRO DA VARIÁVEL, e se for chamado por (), deve ser depois dela ser criada;
    return a * b;
}

console.log(operacao(4,5));

// Seu uso principal é a flexibilidade de seu uso durante o programa, mudando oque as variáveis fazem no decorrer do programa.