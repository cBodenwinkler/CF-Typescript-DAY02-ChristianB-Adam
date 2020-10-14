var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Super Class-----------------------------------------------------------------:
var Vehicles = /** @class */ (function () {
    function Vehicles(model, year, color, hp) {
        this.model = "";
        this.year = "";
        this.color = "";
        this.hp = "";
        this.model = model;
        this.year = year;
        this.color = color;
        this.hp = hp;
    }
    //Place for Methods:
    Vehicles.prototype.printer = function () {
        return "\n            Model: " + this.model + "<br>\n            Construction Year: " + this.year + "<br>\n            Color: " + this.color + "<br>\n            Hp: " + this.hp + "<br>\n        ";
    };
    Vehicles.prototype.calculation = function () {
        var calc = (+this.year * +this.hp) / 10;
        return "The price for this vehicle will be: " + calc + "\u20AC";
    };
    return Vehicles;
}());
//Child Classes----------------------------------------------------------------:
//Motorbikes
var Motorbikes = /** @class */ (function (_super) {
    __extends(Motorbikes, _super);
    function Motorbikes(model, year, color, hp, fuelType, kmLeft, numSeats) {
        var _this = _super.call(this, model, year, color, hp) || this;
        _this.fuelType = fuelType;
        _this.kmLeft = kmLeft;
        _this.numSeats = numSeats;
        return _this;
    }
    //Place for Methods:
    Motorbikes.prototype.printer = function () {
        return "\n            " + _super.prototype.printer.call(this) + "\n            Fuel Type: " + this.fuelType + "<br>\n            Km Left: " + this.kmLeft + "<br>\n            Number Of Seats: " + this.numSeats + "<br>\n        ";
        //Return values from above
    };
    Motorbikes.prototype.calculation = function () {
        var calc = (+this.year * +this.hp) / 50;
        return "The price for this vehicle will be: " + calc + "\u20AC";
    };
    return Motorbikes;
}(Vehicles));
//Trucks
var Trucks = /** @class */ (function (_super) {
    __extends(Trucks, _super);
    function Trucks(model, year, color, hp, fuelType, kmLeft, numSeats) {
        var _this = _super.call(this, model, year, color, hp) || this;
        _this.fuelType = fuelType;
        _this.kmLeft = kmLeft;
        _this.numSeats = numSeats;
        return _this;
    }
    //Place for Methods:
    Trucks.prototype.printer = function () {
        return "\n            " + _super.prototype.printer.call(this) + "\n            Fuel Type: " + this.fuelType + "<br>\n            Km Left: " + this.kmLeft + "<br>\n            Number Of Seats: " + this.numSeats + "<br>\n        ";
    };
    Trucks.prototype.calculation = function () {
        var calc = (+this.year * +this.hp) / 5;
        return "The price for this vehicle will be: " + calc + "\u20AC";
    };
    return Trucks;
}(Vehicles));
// ADDING VEHICLES, MOTORCYCLES, TRUCKS-----------------------------------------:
var vehicle1 = new Vehicles("BMW", 2016, "black", 200);
var vehicle2 = new Vehicles("Tesla", 2020, "red", 450);
var motorbike = new Motorbikes("Honda", 2019, "gray", 210, "petrol", 1500, 1);
var truck = new Trucks("Scania", 2015, "green", 500, "diesel", 20000, 2);
console.log(vehicle1.printer());
console.log(vehicle1.calculation());
var arra = [vehicle1, vehicle2, motorbike, truck];
var _loop_1 = function (i) {
    $("#result" + (i + 1)).html(arra[i].printer());
    $("#btn" + (i + 1)).on("click", function () {
        $("#price" + (i + 1)).html(arra[i].calculation());
    });
};
for (var i = 0; i < arra.length; i++) {
    _loop_1(i);
}
