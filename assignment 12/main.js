var names = ["sohail", "ruba", "safa", "mavil", "safwan"];
for (var i = 0; i < names.length; i++) {
    console.log("hey, ".concat(names[i], "! how are you ?"));
}
names.forEach(function (friend) {
    console.log("Hi ".concat(friend, "! how are you ?"));
});
for (var _i = 0, names_1 = names; _i < names_1.length; _i++) {
    var friendNmae = names_1[_i];
    console.log("Dear, ".concat(friendNmae, "! how do you do?"));
}
