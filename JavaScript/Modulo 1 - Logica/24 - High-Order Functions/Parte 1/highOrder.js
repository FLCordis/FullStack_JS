const personagens = [
    { nivel: 42, nome: "Thrall", raca: "Orc", classe: "Xamã" },
    { nivel: 28, nome: "Garrosh", raca: "Orc", classe: "Guerreiro" },
    { nivel: 35, nome: "Varok", raca: "Orc", classe: "Guerreiro" },
    { nivel: 35, nome: "Uther", raca: "Humano", classe: "Paladino" },
    { nivel: 26, nome: "Jaina", raca: "Humano", classe: "Maga" },
    { nivel: 39, nome: "Tyrande", raca: "Elfo Noturno", classe: "Sacerdotisa" },
    { nivel: 29, nome: "Muradin", raca: "Anão", classe: "Guerreiro" },
];

//Map().
/* --> Jeito de fazer sem usar a função "Map".

const nomes = [];

for (let i=0; i < personagens.length; i++){
    nomes.push(personagens[i].nome);
}
console.log(nomes);

*/

// --> Usando o Map
const nomes = personagens.map(function (personagem){
    return personagem.nome
});


//Filter().

const orcs = personagens.filter(function (personagem){
    return personagem.raca === "Orc"
});

console.log(orcs);


//Reduce().
// Formato -> .reduce(function (valorQueAcumula, valor, indice, array) {lógica}, valorInicialDoReduce)

const nivelTotal = personagens.reduce(function (valorAcumulado, personagem){
    return valorAcumulado + personagem.nivel;
}, 0);

console.log(nivelTotal);

const racas = personagens.reduce(function (valorAcumulado, personagem){
    if(valorAcumulado[personagem.raca]){
        valorAcumulado[personagem.raca].push(personagem);
    } else{
        valorAcumulado[personagem.raca] = [personagem];
    }

    return valorAcumulado;
}, {})

console.log(racas);


// Sort() (esse modifica o array original, diferente dos outros que criavam outros).
// Ordem Crescente
personagens.sort(function (a, b){
    return a.nivel - b.nivel; //Se o nível de A for maior que B, o RETURN é TRUE, assim ele joga o A mais pra frente, e se for FALSE ele mantem a posição do A.
})

console.log(personagens);

// Ordem Decrescente
personagens.sort(function (a, b){
    return b.nivel - a.nivel; //Se o nível de B for maior que A, o RETURN é TRUE, assim ele joga o B mais pra frente, e se for FALSE ele mantem a posição do B.
})

// *--> Para que o SORT não modifique o ARRAY original, é só usar o .slice() antes,
// deste jeito: personagens.slice().sort(....)
// Logo pode armazenar o mesmo em uma variável, ex: const personagensOrd = ...;