class Person {
    name = "";
    age = "";
    jobTitle = "";
constructor(name, age, jobTitle) {
    this.name = name;
    this.age = age;
    this.jobTitle = jobTitle;
}
    returnString() {
        return `Hello there, My name is ${this.name} and I am ${this.age} years old, and I am a ${this.jobTitle}`;
    }
}

// var person1 = new Person('Chris', 29, 'WebDev');
// console.log(person1.returnString());


//_____Basic2
class extending extends Person{
    salary;
    jobLocation;

    constructor(name,age,jobTitle,salary,jobLocation){
        super(name, age, jobTitle);
        this.salary= salary;
        this.jobLocation= jobLocation;
    }
    returnString() {
        return `Hello there, My name is ${this.name} and I am ${this.age} years old, and I am a ${this.jobTitle} and i get ${this.salary} every month, and i work in ${this.jobLocation}`;
    }
}
let person2= new extending("Adam", 24, "webDev", 3000, "Vienna");
console.log(person2.returnString());