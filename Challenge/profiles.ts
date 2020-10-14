class Profiles {
    quote = "";
    constructor(quote) {
        this.quote = quote
    }
}

class Favourite extends Profiles {
    name: "";
    age: "";
    location: "";
    hobbies: "";
    favMusic: "";
    constructor(quote,name,age,location,hobbies,favMusic) {
        super(quote);
        this.name = name;
        this.age = age;
        this.location = location;
        this.hobbies = hobbies;
        this.favMusic = favMusic;
    }
}