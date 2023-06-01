class Book{
    constructor(title){
        this.title = title;
        this.published = false;
    }

    publish(){
        this.published = true;
    }
}

const lor = new Book("Lord of the Rings");

console.log(lor);

lor.publish();

console.log(lor);

console.log(lor instanceof Book);