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
var Profiles = /** @class */ (function () {
    function Profiles(quote) {
        this.quote = "";
        this.quote = quote;
    }
    return Profiles;
}());
var Favourite = /** @class */ (function (_super) {
    __extends(Favourite, _super);
    function Favourite(quote, name, age, location, hobbies, favMusic) {
        var _this = _super.call(this, quote) || this;
        _this.name = name;
        _this.age = age;
        _this.location = location;
        _this.hobbies = hobbies;
        _this.favMusic = favMusic;
        return _this;
    }
    return Favourite;
}(Profiles));
