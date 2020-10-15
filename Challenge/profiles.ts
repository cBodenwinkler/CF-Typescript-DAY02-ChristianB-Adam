const profileArr:Array<any>=[];
class Profiles{
    quote = "";
    img?:string;
    name: "";
    age: "";
    location: "";
    hobbies: "";
    favMusic: "";
    constructor(quote,img,name,age,location,hobbies,favMusic) {
        this.quote = quote;
        this.img = img;
        this.name = name;
        this.age = age;
        this.location = location;
        this.hobbies = hobbies;
        this.favMusic = favMusic;
        profileArr.push(this);
    }
    render(i) {
        return `
            <div class="card col-3" id="favCard${i}" style="width: 18rem;">
                <img src="${this.img}" class="card-img-top" alt="...">
                <div class="card-body myClass${i}">
                    <p class="card-text removeP${i}">${this.quote}</p>
                </div>
            </div>`
    }

    render2() {
        return `
        <p>Name: ${this.name}</p>
        <p>Age: ${this.age}</p>
        <p>Location: ${this.location}</p>
        <p>Hobbies: ${this.hobbies}</p>
        <p>Favourite Music: ${this.favMusic}</p>
        `
    }

}


// Profile Creation: quote, img, name, age, location, hobbies, favMusic
new Profiles ("See you next Beer", 'https://w7.pngwing.com/pngs/384/123/png-transparent-pewdiepie-funny-face-youtuber-youtube-face-head-hair.png', "Hans", 30, 'Sweden', 'PC Games', 'Rock');

// "Hans", 30, 'Sweden', 'PC Games', 'Rock'

new Profiles("Have yourself an erratic day", 'https://lefunny.net/wp-content/uploads/2014/08/funny-people-pics.jpg', "Horst", 35, 'AZ', 'Hair Styling', 'Hip Hop');

new Profiles("Be extravagant", 'https://image.shutterstock.com/image-photo/funny-portrait-hero-260nw-410898763.jpg', "Heribert", 45, 'Austria', 'Photography', 'All');

new Profiles("Dads will soon spread immortality", 'https://i.ytimg.com/vi/7__ZbrF58kI/hqdefault.jpg', "Olaf", 28, 'Japan', 'Photography', 'Metal');

new Profiles("Always investigate a kick in the groin", 'https://4.bp.blogspot.com/-8va7RpZNSF8/UpIZdO988PI/AAAAAAAAFG4/s63zq2d9eQw/s1600/new+funny+girls.jpg', "Eins", 23, 'Austria', 'Travel', 'Pop');

new Profiles("The answer to world hunger is nihilism", 'https://www.askideas.com/media/17/Carrie-Underwood-With-Upside-Down-Head-Funny-Photoshopped-Image.png', "Zwei", 32, 'NV', 'Electronics', 'Country');

new Profiles("Respect a fraud", 'https://images.unsplash.com/photo-1583802625550-f9f11adcbe35?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80', "Drei", 21, 'South Africa', 'Travel', 'Rock');

new Profiles("Fears are nice", 'https://images.unsplash.com/photo-1601705776515-b55faf59eb09?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80', "Vier", 92, 'Austria', 'Photography', 'All');


console.table(profileArr);

for (let i in profileArr) {
    $('#result').append(profileArr[i].render(i));
}



for (let i in profileArr) {
    $(`#favCard${i}`).on("click",function(){
        $(`.removeP${i}`).remove(`.removeP${i}`);
        $(`.myClass${i}`).html(profileArr[i].render2())
    });
}

for (let i in profileArr) {
    $(`#favCard${i}`).one("dblclick",function(){
        $(`.favourite`).append(profileArr[i].render(i));
        $(`.removeP${i}`).remove(`.removeP${i}`);
        $(`.myClass${i}`).html(profileArr[i].render2(i));
    });
    
}





