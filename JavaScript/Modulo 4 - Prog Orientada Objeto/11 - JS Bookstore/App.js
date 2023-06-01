const Database = require("./Database");
const Author = require("./Entities/Author");
const Book = require("./Entities/Book");
const Order = require("./Entities/Order");
const Poster = require("./Entities/Poster");
const User = require("./Entities/User");

module.exports = class App {
    static #database = new Database();

    createUser(name, email, password){
        const user = new User(name, email, password);
        App.#database.saveUser(user);
    }

    getUsers(){
        return App.#database.find('users');
    }

    createAuthor(name, nationality, bio){
        const author = new Author(name, nationality, bio);
        App.#database.saveAuthor(author);
    }

    getAuthors(){
        return App.#database.find('authors')
    }

    //Criando os métodos para criar livros e adicionar no estoque.
    createBook(title, synopsis, genre, pages, author, description, price, inStock){
        const book = new Book(title, synopsis, genre, pages, author, description, price, inStock);
        App.#database.saveBook(book);
    }

    addBook(bookName, quantity){
        App.#database.addBooksToStock(bookName, quantity)
    }

    getBooks(){
        return App.#database.find('books');
    }


    //Criando os mesmos métodos para os posters
    createPoster(name, description, height, width, price, inStock){
        const poster = new Poster(name, description, height, width, price, inStock);
        App.#database.savePoster(poster);
    }

    addPoster(posterName, quantity){
        App.#database.addPosterToStock(posterName, quantity)
    }

    getPosters(){
        return App.#database.find('posters');
    }

    //Aqui usamos o product como genérico, e cada tipo de instância criada, tem que
    //adicionar uma verificação 'if', podendo ser solucionada usando o DesignPattern, generalizando
    //mas como é algo mais simples, esse é o jeito mais rápido.
    createOrder(items, user){
        const order = new Order(items, user)
        App.#database.saveOrder(order);
        order.data.items.forEach(({product, quantity }) => {
            if (product instanceof Book){
                App.#database.removeBooksFromStock(product.name, quantity);
            } else if (product instanceof Poster){
                App.#database.removePostersFromStock(product.name, quantity);
            }
        })
    }

    getOrders(){
        return App.#database.find('orders');
    }

    showDatabase(){
        App.#database.showStorage();
    }
}