const a = 0; //False

const b = null; //False

const c = "Teste"; //True

console.log(a || b || c);

console.log(a ?? b ?? c); //Não aceita null e undefined, logo verifica até outro.
console.log(b ?? c);

///////////////////////////////////////////

let n1 = 0;

let n2 = a || 42;

console.log({a, b});

b = a ?? 21;

console.log({a, b});