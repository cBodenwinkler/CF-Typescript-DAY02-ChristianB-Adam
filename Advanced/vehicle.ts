// Super Class-----------------------------------------------------------------:
class Vehicles {
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
    printer() {
        return `
            Model: ${this.model}<br>
            Construction Year: ${this.year}<br>
            Color: ${this.color}<br>
            Hp: ${this.hp}<br>
        `
    }

    calculation() {
        let calc = (+this.year * +this.hp) / 10;
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
    printer() {
        return `
            ${super.printer()}
            Fuel Type: ${this.fuelType}<br>
            Km Left: ${this.kmLeft}<br>
            Number Of Seats: ${this.numSeats}<br>
        `

        //Return values from above


    }
    calculation() {
        let calc = (+this.year * +this.hp) / 50;
        return `The price for this vehicle will be: ${calc}€`;
    }
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
    printer() {
        return `
            ${super.printer()}
            Fuel Type: ${this.fuelType}<br>
            Km Left: ${this.kmLeft}<br>
            Number Of Seats: ${this.numSeats}<br>
        `
    }
    calculation() {
        let calc = (+this.year * +this.hp) / 5;
        return `The price for this vehicle will be: ${calc}€`;
    }
}



// ADDING VEHICLES, MOTORCYCLES, TRUCKS-----------------------------------------:
let vehicle1 = new Vehicles("BMW", 2016, "black", 200);
let vehicle2 = new Vehicles("Tesla", 2020, "red", 450);
let motorbike = new Motorbikes("Honda", 2019, "gray", 210, "petrol", 1500, 1);
let truck = new Trucks("Scania", 2015, "green", 500, "diesel", 20000, 2);


console.log(vehicle1.printer());
console.log(vehicle1.calculation());


let arra = [vehicle1, vehicle2, motorbike, truck];
for (let i = 0; i < arra.length; i++) {

    $(`#result${i + 1}`).html(arra[i].printer());
    $(`#btn${i + 1}`).on("click", function () {

        $(`#price${i + 1}`).html(arra[i].calculation())
    })

}