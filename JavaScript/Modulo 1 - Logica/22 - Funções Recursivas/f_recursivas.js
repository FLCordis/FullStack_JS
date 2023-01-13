function dividir(num){ // Entra um valor
    console.log(num); // Ele printa no console
    if(num % 2 === 0) { // Se ele é par, ele dividi por 2 e chama denovo a função, repetindo as etapas a cima.
        dividir (num/2);
    } else{ // Se ele não é par, ele retorna o número e termina.
        return num;
    }
}

// Tudo meio que funciona em uma pilha, ele executa a primeira, depois se tiver uma outra dentro, ele para e chama
// a outra função que está dentro, e assim vai, depois ele vai voltando.
// Primeira função --> Segunda função (dentro da primeira) --> Terceira que está dentro da segunda.
// Terceira terminando --> Volta para a Segunda, terminando --> Volta pra primeira e termina.
// É uma pilha, a primeira a entrar é a última a sair.