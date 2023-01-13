let pessoa = {
    nome: "Flavio",
    idade: "21",
    dizerOla(){
        console.log("Olá, " + this.nome+'!');
    }
}

console.log(pessoa);

pessoa.dizerOla();