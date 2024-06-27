var currentUsers = ["Sohail", "Safa", "Mavil", "Safwan", "Ruba"];
var newUsers = ["Sohail", "Ruba", "Raiha", "Saad", "Ayesha"];
newUsers.forEach(function (newOneUser) {
    if (currentUsers.some(function (currentOneUser) { return currentOneUser.toLocaleLowerCase() === newOneUser.toLocaleLowerCase(); })) {
        console.log("Sorry! ".concat(newOneUser, " is already taken."));
    }
    else {
        console.log("This Username ".concat(newOneUser, " is available"));
    }
});
