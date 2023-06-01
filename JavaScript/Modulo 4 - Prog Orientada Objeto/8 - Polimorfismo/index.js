class Vehicle {
    constructor(gear, age, hp, color){
        this.gear = gear;
        this.age = age;
        this.hp = hp;
        this.color = color;
    }
    move(){
        console.log("O veículo está se movendo...");
    }
}

class Car extends Vehicle{
    move(){
       console.log("O carro está se movendo pelas rodas!");
    }
}

class Ship extends Vehicle{
    move(){
        console.log("O navio está navegando pelos mares!");
    }
}

class Aircraft extends Vehicle{
    move(speed){
        console.log(`A aeronave está voando a ${speed} km/h nos ares!`);
    }
}

const shelbyCar = new Car("V8 Hemicat", 1968, 350, "Black");
const blackPearl = new Ship("V30 Supership", 2005, 5000, "White");
const apache = new Aircraft("V12 Military Grade", 2015, 400, "Green");

shelbyCar.move();
blackPearl.move();
apache.move(350);


function start(vehicle){
    console.log("Dando partida no veículo...");
    vehicle.move();
}

console.log('\n\n\n\n');

start(shelbyCar);
start(blackPearl);
start(apache);