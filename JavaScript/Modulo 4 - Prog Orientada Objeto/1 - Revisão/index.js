/* const book = {
    title: "Norse Gods",
    pages: 304,
    published: true,
    inStock: 10,
    tags: ["mithology","fantasy","norse"],
    author: {
        name: "Neil Gaiman",
        age: 62
    },
    addOnStock(quantity){
        this.inStock += quantity;
    }
} */

function Book(title, pages, tags, author) {
    this.title = title;
    this.pages = pages;
    this.tags = tags;
    this.author = author;
    this.published = false;
    this.inStock = 0;
    this.addOnStock = function addOnStock(quantity) {
        this.inStock += quantity;
    }
    this.save = function() {
        //salvar no bd
    }
}

const author = {name: "Neil Gaiman"}
const tags = ["mithology","fantasy","norse"];

const norseGods = new Book("Norse Gods", 304, tags, author);
console.log(norseGods);

const tags2 = ["mithology","fantasy","america"];
const americanGods = new Book("American Gods", 576, tags2, author);
console.log(americanGods);