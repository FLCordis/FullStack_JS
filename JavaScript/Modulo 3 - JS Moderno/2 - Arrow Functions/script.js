function somaNormal(a,b){
    return a+ b;
}

console.log(`Soma normal: ${somaNormal(2, 2)}`);


const anonymousFunc = function(a, b){
    return a + b;
}

console.log(`Soma anônima: ${anonymousFunc(2, 2)}`);


const arrowSum = (a, b) =>{
    return a + b;
}

console.log(`Soma Arrow Func: ${arrowSum(2, 2)}`);


const arrowSub = (a, b) => a - b;
console.log(`Subtração Arrow Resumida: ${arrowSub(2, 2)}`);

const arrowDouble = n => `O dobro de ${n} é ${n * 2}`;
console.log(arrowDouble(20));

const towns = ['Zeleno', 'Pasco' , 'Strawberry', 'Lincon'];

const startWithZ = towns.filter(town => town[0] === 'Z');
console.log(startWithZ);


