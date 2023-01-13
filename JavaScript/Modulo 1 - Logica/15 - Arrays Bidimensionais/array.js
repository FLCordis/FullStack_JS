const arr = [
    "Array",
    "Normal",
    "Não Bidimensional"
]

const arrayBidimensional = [
    "1º Nível",
    ["2º Nível", 42, true],
    [
        ["3º Nível, 1º item", "Olá!"],
        ["3º Nível, 2º item", "Tudo bem?!"]
    ],
    []
]

console.log(arr);
console.log(arrayBidimensional);
console.log(arrayBidimensional[1]);
console.log(arrayBidimensional[1][0]);
console.log(arrayBidimensional[2][0][1]);
console.log(arrayBidimensional[2][1][1]);