// Super Class-----------------------------------------------------------------:
class Vehicles{
    model = "";
    year = "";
    color = "";
    hp = "";
    constructor(model, year, color, hp) {
        this.model = model;
        this.year = year;
        this.color = color;
        this.hp = hp;
    }
    //Place for Methods:
    print() {
        return `
            Model: ${this.model}
            Construction Year: ${this.year}
            Color: ${this.color}
            Hp: ${this.hp}
        `
    }

    calculation() {
        let calc = (this.year * this.hp) / 10;
        return `The price for this vehicle will be: ${calc}€`; 
    }

}

//Child Classes----------------------------------------------------------------:
//Motorbikes
class Motorbikes extends Vehicles {
    fuelType;
    kmLeft;
    numSeats;
    constructor(model, year, color, hp, fuelType, kmLeft, numSeats) {
        super(model, year, color, hp);
        this.fuelType = fuelType;
        this.kmLeft = kmLeft;
        this.numSeats = numSeats;
    }
    //Place for Methods:
    print() {
        return `
            ${super.print()}    Fuel Type: ${this.fuelType}
            Km Left: ${this.kmLeft}
            Number Of Seats: ${this.numSeats}
        `

    //Return values from above


}

//Trucks
class Trucks extends Vehicles {
    fuelType;
    kmLeft;
    numSeats;
    constructor(model, year, color, hp, fuelType, kmLeft, numSeats) {
        super(model, year, color, hp);
        this.fuelType = fuelType;
        this.kmLeft = kmLeft;
        this.numSeats = numSeats;
    }
    //Place for Methods:
    print() {
        return `
            ${super.print()}    Fuel Type: ${this.fuelType}
            Km Left: ${this.kmLeft}
            Number Of Seats: ${this.numSeats}
        `
}




// ADDING VEHICLES, MOTORCYCLES, TRUCKS-----------------------------------------:
let vehicle1 = new Vehicles("BMW", 2016, "black", 200);
let vehicle2 = new Vehicles("Tesla", 2020, "red", 450);
let motorbike = new Motorbikes("Honda", 2019, "gray", 210, "petrol", 1500, 1);
let truck = new Trucks("Scania", 2015, "green", 500, "diesel", 20000, 2);


console.log(vehicle1.print());
console.log(vehicle1.calculation());