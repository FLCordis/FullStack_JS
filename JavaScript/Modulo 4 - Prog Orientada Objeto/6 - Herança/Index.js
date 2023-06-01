class Property{
    constructor(area, price){
        this.area = area;
        this.price = price;
    }

    getPricePerMeter(){
        return this.price / this.area;
    }
}

class House extends Property{
    constructor(area, price, owner, rooms){
        super(area, price);
        this.owner = owner;
        this.rooms = rooms;
    }
}

class Apartment extends Property{
    constructor(number, area, price){
        super(area, price);
        this.number = number;
    }

    getFloor(){
        return this.number.slice(0, -2);
    }
}

const land = new Property(200, 50000);
const flavioHouse = new House(250, 300000, "Flavio", 4);
const apt = new Apartment("201", 150, 150000)

console.log(land);
console.log(flavioHouse);
console.log(flavioHouse.getPricePerMeter())
console.log(apt);
console.log("Apartment Floor: " + apt.getFloor())