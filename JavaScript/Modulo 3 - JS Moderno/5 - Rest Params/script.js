function sum(...numbers){
    return numbers.reduce((accum, num) => accum + num, 0);
}

console.log(sum(55,123,789,921)); //Não tem limite de parâmetros.