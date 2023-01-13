let numero = prompt('Olá, digite um número para a tabuada!');
let resultado = '';

if (numero != null) {
    for (let tabuada = 1; tabuada <= 10; tabuada++) {
        resultado += "-> " + numero + " * " + tabuada + " = " + (numero*tabuada) + "\n";
    }
} else {
    alert('Número inválido!');
}

alert("Resultado da tabuada do nº" + numero + ":\n\n" + resultado);