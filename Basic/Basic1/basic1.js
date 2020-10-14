var Person = /** @class */ (function () {
    function Person(name, age, jobTitle) {
        this.name = "";
        this.age = "";
        this.jobTitle = "";
        this.name = name;
        this.age = age;
        this.jobTitle = jobTitle;
    }
    Person.prototype.returnString = function () {
        return "Hello there, My name is " + this.name + ", I am " + this.age + " years old and I am a " + this.jobTitle + ".";
    };
    return Person;
}());
var person1 = new Person('Christian', 29, 'WebDev');
console.log(person1.returnString());
