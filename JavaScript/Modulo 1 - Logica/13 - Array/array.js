/*
const listaCompras = [];
console.log(listaCompras);

listaCompras[0] = "Batata-frita";
listaCompras[1] = "Danone";
listaCompras[2] = "Aveia";
listaCompras[3] = 10;
listaCompras[6] = "Suco de Uva";

console.log(listaCompras);
console.log(listaCompras[2]);
*/

// ----------------------------------------- //

const arr1 = ["Pippin", "Geralt", "Luke", "Yoda", "John", "Castle"];
console.log(arr1);

//Adicionando os elementos no final do array
console.log("\n\nAdicionando os elementos no final do array")
arr1.push("MacTavish");
arr1.push("Simon");
console.log(arr1);

//Adicionando no começo do array
console.log("\n\nAdicionando no começo do array")
arr1.unshift("Mimir");
console.log(arr1);

//Removendo elementos no final
console.log("\n\nRemovendo elementos no final")
const ultimoElemento = arr1.pop();
console.log(arr1);
console.log("O último elemento do array removido foi " + ultimoElemento);

//Removendo o primeiro elemento do array
console.log("\n\nRemovendo o primeiro elemento do array")
const primeiroElemento = arr1.shift();
console.log(arr1);
console.log("O primeiro elemento do array removido foi " + primeiroElemento);

//Pesquisa de elementos, retornando TRUE ou FALSE
console.log("\n\nPesquisa de elementos, retornando TRUE ou FALSE")
const incluso = arr1.includes("Geralt");
console.log("Existe um valor 'Geralt'? " + incluso);

//IndexOf, descobrindo a posição
console.log("\n\nIndexOf, descobrindo a posição")
const pos1 = arr1.indexOf("Castle");
console.log("Posição de Castle: " + pos1);

//Cortar e Concatenar
console.log("\n\nCortar e Concatenar")
const doisPrimeiros = arr1.slice(0,2);
const ultimosDois = arr1.slice(-2);
console.log("Primeiros dois: " + doisPrimeiros);
console.log("Ultimos dois: " + ultimosDois);

//Concat
const somandoArrays = doisPrimeiros.concat(ultimosDois);
console.log("\n\nSomando os dois primeiros e dois últimos: " + somandoArrays);

//Substituição por 'splice'
const elementosRemovidos = somandoArrays.splice(pos1, 1, "Kratos, o Exilado");
console.log("\n\nArray padrão: " + somandoArrays);
console.log("Elemento(s) removido(s): " + elementosRemovidos);

//Iterar os Elementos
console.log("\n\n");
for (let indice = 0; indice < somandoArrays.length; indice++){
    const elemento = somandoArrays[indice];
    console.log(elemento + " se encontra na posição " + indice + " do array.");
}