let palavra = prompt('Digite uma palavra para testar se ela é ou não Palíndromo!');
let palavraInvertida = '';
palavra = palavra.toLowerCase(); //Deixar a primeira letra em minúsculo para comparação.

for(let i = palavra.length - 1; i >= 0; i--){
    palavraInvertida += palavra[i];
}

if (palavra == palavraInvertida){
    palavra = palavra.charAt(0).toUpperCase() + palavra.slice(1).toLowerCase(); //Apenas para deixar a primeira Letra em maiúsculo.
    alert(palavra + ' é um Palíndromo!')
    i = 1;
} else{
    alert(palavra + ' não é um Palíndromo! \n\n' + palavra + " != " + palavraInvertida)
}