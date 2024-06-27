let userNames = ["Admin", "Sohail", "safwan", "Mavil", "Rayyan"];
if (userNames.length === 0) {
    console.log("Your array is empty so we need to find some users")
}else{ 
userNames.forEach(function (oneUser) {
    if (oneUser === "Admin") {
        console.log("Hello! $(oneUser), Would you like to see a status report?");
    }
    else {
        console.log("Hello! $(oneUser), thank you for logging again!");
    }
});
}