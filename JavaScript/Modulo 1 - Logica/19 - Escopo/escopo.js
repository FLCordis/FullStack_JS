let pokemon = "Charmander";

function evoluir(){
    pokemon = "Charmeleon";
    let evolucao = "Nivel 2";
}

console.log(pokemon);
evoluir();
console(pokemon);

console.log(evolucao);

// Criação de variáveis
console.log('Criação de variáveis');

console.log(nome); // undefined
// console.log(sobrenome); // error

var nome = 'Flavio'; // O var faz com que ele pega a variável e joga ele lá pro topo do arquivo mas sem valor, ou seja, undefined.
let sobrenome = 'Cordis'; // Não faz o mesmo, assim vai dar um erro depois.

console.log(nome);
console.log(sobrenome);
