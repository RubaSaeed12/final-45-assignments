var names = ["ruba, safa, raiha,ayesha"];
//loop method
for (var i = 0; i < names.length; i++) {
    console.log(names[i]);
}
//for each method
names.forEach(function (friend) {
    console.log(friend);
});
//for ofloop method
for (var _i = 0, names_1 = names; _i < names_1.length; _i++) {
    var friendName = names_1[_i];
    console.log(friendName);
}
