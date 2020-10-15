var profileArr = [];
var Profiles = /** @class */ (function () {
    function Profiles(quote, img, name, age, location, hobbies, favMusic) {
        this.quote = "";
        this.quote = quote;
        this.img = img;
        this.name = name;
        this.age = age;
        this.location = location;
        this.hobbies = hobbies;
        this.favMusic = favMusic;
        profileArr.push(this);
    }
    Profiles.prototype.render = function (i) {
        return "\n            <div class=\"card col-3\" id=\"favCard" + i + "\" style=\"width: 18rem;\">\n                <img src=\"" + this.img + "\" class=\"card-img-top\" alt=\"...\">\n                <div class=\"card-body myClass" + i + "\">\n                    <p class=\"card-text removeP" + i + "\">" + this.quote + "</p>\n                </div>\n            </div>";
    };
    Profiles.prototype.render2 = function () {
        return "\n        <p>Name: " + this.name + "</p>\n        <p>Age: " + this.age + "</p>\n        <p>Location: " + this.location + "</p>\n        <p>Hobbies: " + this.hobbies + "</p>\n        <p>Favourite Music: " + this.favMusic + "</p>\n        ";
    };
    return Profiles;
}());
// Profile Creation: quote, img, name, age, location, hobbies, favMusic
new Profiles("See you next Beer", 'https://w7.pngwing.com/pngs/384/123/png-transparent-pewdiepie-funny-face-youtuber-youtube-face-head-hair.png', "Hans", 30, 'Sweden', 'PC Games', 'Rock');
// "Hans", 30, 'Sweden', 'PC Games', 'Rock'
new Profiles("Have yourself an erratic day", 'https://lefunny.net/wp-content/uploads/2014/08/funny-people-pics.jpg', "Horst", 35, 'AZ', 'Hair Styling', 'Hip Hop');
new Profiles("Be extravagant", 'https://image.shutterstock.com/image-photo/funny-portrait-hero-260nw-410898763.jpg', "Heribert", 45, 'Austria', 'Photography', 'All');
new Profiles("Dads will soon spread immortality", 'https://i.ytimg.com/vi/7__ZbrF58kI/hqdefault.jpg', "Olaf", 28, 'Japan', 'Photography', 'Metal');
new Profiles("Always investigate a kick in the groin", 'https://4.bp.blogspot.com/-8va7RpZNSF8/UpIZdO988PI/AAAAAAAAFG4/s63zq2d9eQw/s1600/new+funny+girls.jpg', "Eins", 23, 'Austria', 'Travel', 'Pop');
new Profiles("The answer to world hunger is nihilism", 'https://www.askideas.com/media/17/Carrie-Underwood-With-Upside-Down-Head-Funny-Photoshopped-Image.png', "Zwei", 32, 'NV', 'Electronics', 'Country');
new Profiles("Respect a fraud", 'https://images.unsplash.com/photo-1583802625550-f9f11adcbe35?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80', "Drei", 21, 'South Africa', 'Travel', 'Rock');
new Profiles("Fears are nice", 'https://images.unsplash.com/photo-1601705776515-b55faf59eb09?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80', "Vier", 92, 'Austria', 'Photography', 'All');
console.table(profileArr);
for (var i in profileArr) {
    $('#result').append(profileArr[i].render(i));
}
var _loop_1 = function (i) {
    $("#favCard" + i).on("click", function () {
        $(".removeP" + i).remove(".removeP" + i);
        $(".myClass" + i).html(profileArr[i].render2());
    });
};
for (var i in profileArr) {
    _loop_1(i);
}
var _loop_2 = function (i) {
    $("#favCard" + i).one("dblclick", function () {
        $(".favourite").append(profileArr[i].render(i));
        $(".removeP" + i).remove(".removeP" + i);
        $(".myClass" + i).html(profileArr[i].render2(i));
    });
};
for (var i in profileArr) {
    _loop_2(i);
}
