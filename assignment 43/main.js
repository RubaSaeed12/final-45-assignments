var magicians = ["John", "Chris", "Hazal"];
function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
//Function to make magicians great through.map()
function make_great(magicians) {
    return magicians.map(function (name) { return "The Great ".concat(name); });
}
//making a copy of original array through.slice()
var copy_magicians = magicians.slice();
//modified the copied array to add "The great"
var copy_great_magicians = make_great(copy_magicians);
//show both arrays original and copied
show_magicians(magicians);
show_magicians(copy_great_magicians);
