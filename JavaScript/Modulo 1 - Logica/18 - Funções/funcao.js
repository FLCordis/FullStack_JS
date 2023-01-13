function oi(){
    console.log("Olá!");
}

oi();

// Parâmetros

function dobrarValor(valor){
    let dobro = valor * 2 ;
    alert('O dobro de ' + valor + ' é ' + dobro);
}

dobrarValor(2);

// Retorno

function somar(a, b){
    return a + b;
}

// Objeto como Parâmetro

function criarUsuario (usuario){
    alert('Seu nome é: ' + usuario.nome +
    'Seu e-mail é: ' + usuario.email +
    'Idade: ' + usuario.idade +
    'Endereço: ' + usuario.endereco )
};

const DadosUsuarios = {
    nome: "Flávio Cordis\n",
    email: "flavio@email.com\n",
    idade: "20 anos\n",
    endereco: "Aquela rua ali, 123."
};

criarUsuario(DadosUsuarios);

// Criar produto com parâmetro e retorno.

function criarProduto (nome, preco){
    const produto = {
        nome,   // Isso é igual fazer nome: nome
        preco,
        estoque: 1
    }
    return produto;
}

const notebook = criarProduto("Notebook i7 16GB 256GB-SSD", 4500);
console.log(notebook);  // ou jogar o criarProduto dentro do console.log
// console.log(criarProduto("Notebook i7 16GB 256GB-SSD", 4500));