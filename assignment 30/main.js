var userNames = ["Admin", "Sohail", "safwan", "Mavil", "Rayyan"];
userNames.forEach(function (oneUser) {
    if (oneUser === "Admin") {
        console.log("Hello! $(oneUser), Would you like to see a status report?");
    }
    else {
        console.log("Hello! $(oneUser), thank you for logging again!");
    }
});
