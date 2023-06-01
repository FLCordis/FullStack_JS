const Author = require("./author");

const cowboyGuy = new Author("John Dorie");

const post = cowboyGuy.writeAPost("Old West Novel", "Howdy Partner....");

post.addComment("Flavio Cordis", "Best FTWD character!");
post.addComment("Morgan", "My best friend!");

console.log(cowboyGuy);
console.log(post);