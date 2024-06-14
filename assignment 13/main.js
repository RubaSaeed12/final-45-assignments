var transportationMode = ["car", "motorcycle", "bus"];
for (var i = 0; i < transportationMode.length; i++) {
    console.log("I would like to own a ".concat(transportationMode[i]));
}
transportationMode.forEach(function (mode) {
    console.log("i would like to own a ".concat(mode));
});
