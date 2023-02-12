const civs = ['Francos', 'Bisantinos', 'Vikings', 'Portugueses', 'Espanhois', 'Maias', 'Aztecas'];

console.log(civs);
console.log(...civs);
console.log(...civs[0]);

//Copiando o Array antigo, porém ele copia o endereço.
const civsCopy = civs;

civsCopy.pop();
civsCopy.pop();
civsCopy.push('Árabes');
console.log({civs, civsCopy});



//Uso do Spread para clonar o Array e assim criar outro array novo.
const civsClone = [...civs];
civsClone.push('Espanhois');
console.log({civs, civsCopy, civsClone});


const civObject = {...civs};
const civObjectClone = {...civObject}

civObjectClone.test = "Testando";

console.log({civObject, civObjectClone});