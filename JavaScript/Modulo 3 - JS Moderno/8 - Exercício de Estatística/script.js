const mediaAritSimples = (...numeros) => {
    return numeros.reduce((acumulador, numeroAtual) => acumulador + numeroAtual, 0) / numeros.length;
};
console.log(`Média Aritmética Simples: ${mediaAritSimples(1,2,4,5)}`);



const mediaAritPond = (...valores) => {
    const sum = valores.reduce((acumulador, {num, peso}) => acumulador + (num * (peso ?? 1)), 0);
    const weightSum = valores.reduce((acumulador, entrada) => acumulador + (entrada.peso ?? 1), 0);
    return sum / weightSum;
}
console.log(`Média Ponderada: ${mediaAritPond(
    {num: 9, peso: 3},
    {num: 7, peso: 1},
    {num: 10, peso: 1},
)}`);



const mediana = (...numeros) => {
    const numerosOrd = [...numeros].sort((a,b) => a - b)
    const meioArray = Math.floor(numerosOrd.length/2);
    if (numerosOrd.length % 2 !== 0) {
        return numerosOrd[meioArray];
    }
    // 1, [2, 3], 4.
    // 4 dividido por 2 = 2. (O array começa no 0, então ele pega a pos 2 e 1 [no total de 0, 1, 2, 3]).
    const primeiroNumMeio = numerosOrd[meioArray - 1];
    const segundoNumMeio = numerosOrd[meioArray];
    return mediaAritSimples(primeiroNumMeio, segundoNumMeio);
}
console.log(`Mediana: ${mediana(2, 5, 10, 4, 7, 42)}`);



const moda = (...numeros) => {
    // [ [n, qtd], [n, qtd], [n, qtd]]
    const quantidades = numeros.map(num => [
        num,
        numeros.filter(n => num === n).length
    ]);
    quantidades.sort((a, b) => b[1] - a[1]);
    return quantidades[0][0];
}
console.log(`Moda: ${moda(1, 1, 23, 42, 42, 42, 5, 4, 90, 4, 2, 4, 10,4)}`);