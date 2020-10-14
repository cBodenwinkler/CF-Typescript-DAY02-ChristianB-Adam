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

var person1 = new Person('Chris', 29, 'WebDev');
console.log(person1.returnString());
