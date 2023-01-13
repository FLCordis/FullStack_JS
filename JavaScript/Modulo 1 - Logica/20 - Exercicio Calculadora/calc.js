function areaTriangulo() {
    const base = prompt('Digite o valor da base do Triângulo: ');
    const altura = prompt('Digite o valor da altura do Triângulo: ');
    return (base * altura) / 2;
}

function areaRetangulo() {
    const base = prompt('Digite o valor da base do Retângulo: ');
    const altura = prompt('Digite o valor da altura do Retângulo: ');
    return base * altura;
}

function areaQuadrado() {
    const lado = prompt('Digite o valor do lado do Quadrado: ');
    return lado ** 2;
}

function areaTrapezio() {
    const baseMaior = prompt('Digite o valor da base Maior do Trapézio: ');
    const baseMenor = prompt('Digite o valor da base Menor do Trapézio: ');
    const altura = prompt('Digite o valor da altura do Trapézio: ');
    return (baseMaior + baseMenor) * altura / 2;
}

function areaCirculo() {
    const raio = prompt('Digite o valor do raio do Círculo: ');
    const pi = 3.14;
    return pi * (raio ** 2);
}

function exibirMenu() {
    return prompt('Calculadora Geométrica\nEscolha umas das opções a seguir:\n\n'
    + '1. Área do triângulo\n'
    + '2. Área do retângulo\n'
    + '3. Área do quadrado\n'
    + '4. Área do trapézio\n'
    + '5. Área do círculo\n'
    + '0. Sair');
}

function executar() {
    let opt = '';
    
    do {
    
        opt = exibirMenu();
        let resultado;

        switch (opt) {
            case "1":
                resultado = areaTriangulo();
                break;
            case "2":
                resultado = areaRetangulo();
                break;
            case "3":
                resultado = areaQuadrado();
                break;
            case "4":
                resultado = areaTrapezio();
                break;
            case "5":
                resultado = areaCirculo();
                break;
            case "0":
                alert('Finalizando...');
                break;
            default:
                alert('Opção errada!');
                break;
        }

        if (resultado){
            alert('O Resultado deu: ' + resultado);
        }

    } while (opt !== "0");
}

executar();