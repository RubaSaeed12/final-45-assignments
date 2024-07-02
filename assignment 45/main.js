function make_car(manufacturer, model) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    var car = { manufacturer: manufacturer, model: model };
    options.forEach(function (option) {
        var _a = option.split(':'), key = _a[0], value = _a[1];
        car[key] = value.trim();
    });
    return car;
}
var myCar = make_car("Toyota", "Old", "Color: Black", "Year:2009");
console.log(myCar);
