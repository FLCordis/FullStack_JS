const user = {
    name: "Flavio Cordis",
    email: "flavio@email.com",
    friends: [{
        name: "Leonardo",
        address: {
            street: "Rua 12",
            number: "50"
        }
    }],
    age: 42,
    phone: {
        countryCode: "+55",
        ddd: "31",
        number: "987654321"
    }
};

// console.log(user.friends[0].phone.ddd); //Uncaught TypeError
console.log(user?.friends[0]?.phone?.ddd); //Funciona!
console.log(user?.brothers?.length);

//Funciona com Arrays também
console.log(user.brothers?.[5].name);