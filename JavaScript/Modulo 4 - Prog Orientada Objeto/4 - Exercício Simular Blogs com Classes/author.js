class Author{
    constructor(name, bornDate){
        this.name = name;
        this.bornDate = bornDate;
        this.posts = [];
    }

    writeAPost(title, body){
        const post = new Post(title, body, this);
        this.posts.push(post);
        return post;
    }

}

module.exports = Author;