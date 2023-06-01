const App = require("./App");

App.createUser("snake@email.com", "John Doe 'Snake'");
App.createUser("ocelot@email.com", "Revolver Ocelot");
App.createUser("flavio@email.com", "Flavio Cordis");

App.deposit("flavio@email.com", 100);

App.transfer("flavio@email.com", "snake@email.com", 20);

App.changeLoanFee(10);
App.takeLoan("ocelot@email.com", 2000, 24);

console.log(App.findUser("flavio@email.com"));
console.log(App.findUser("flavio@email.com").account);
console.log(App.findUser("snake@email.com"));
console.log(App.findUser("snake@email.com").account);
console.log(App.findUser("ocelot@email.com"));
console.log(App.findUser("ocelot@email.com").account);
console.log(App.findUser("ocelot@email.com").account.loans[0].installments);