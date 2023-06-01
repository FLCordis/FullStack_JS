class Reservation {
    constructor(guests, room, days){
        this.guests = guests;
        this.room = room; 
        this.days = days;
        this.total = days * Reservation.standardFee; //Criando um atributo estático com valor.
    }

    static standardFee = 150;

    static showStandardFee(){
        console.log(`The Standard Fee is $${Reservation.standardFee}`);
    }

    static get premiumFee(){
        return Reservation.standardFee * 1.5;
    }
}

//Método Estático para ver o valor.
Reservation.showStandardFee();

const r1 = new Reservation(3, "201", 5);
console.log(r1);

//Troca de valor, vai fazer os próximos calculos mudarem também.
Reservation.standardFee = 200;
Reservation.showStandardFee();

const r2 = new Reservation(5, "405", 10);
console.log(r2);

// Aqui o valor não muda por que ele pegou o primeiro valor.
console.log(`Premium Fee is $${Reservation.premiumFee}`);