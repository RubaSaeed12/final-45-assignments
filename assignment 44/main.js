function make_sandwhich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("Making a sandwich with: ".concat(items.join(',')));
}
make_sandwhich("ham", "cheese");
make_sandwhich("lettuce", "tomato");
make_sandwhich("avocado", "mayo", "ketchup");
