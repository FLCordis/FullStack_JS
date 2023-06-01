class Product{
    constructor(name, description, price, inStock){
        this.name = name;
        this.description = description;
        this.price = price;
        this.inStock = inStock;
    }
    addToStock(quantity){
        this.inStock += quantity;
    }
    calculateDiscount(percent){
        return this.price = this.price * ((100-percent)/100);
    }
}

const snickers = new Product("Snickers", "Barra de chocolate com amendoin", 2.50, 10)
console.log(snickers)

snickers.addToStock(15)
console.log(`Adicionando ${snickers.inStock} ${snickers.name} no estoque!`);

snickers.calculateDiscount(20)
console.log(`Aplicando desconto no valor do ${snickers.name} = R$${snickers.price}.`);

console.log(snickers);