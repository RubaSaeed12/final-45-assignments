// map() method
var guestlist = ["ruba", "sohail", "safa"];
var invitation = guestlist.map(function (guest) { return ("Dear ".concat(guest, ",you are invited for dinner")); });
console.log(invitation);
invitation.forEach(function (invitations) {
    console.log(invitations);
});
//now printing the name who cant make dinner
var unableAttend = guestlist.splice(1, 1)[0];
console.log("".concat(unableAttend, " can not make dinner"));
//push
guestlist.push("Raiha Salman");
console.log(guestlist);
//print a message
guestlist.forEach(function (guest) {
    console.log("Dear, ".concat(guest, " you are invited for dinner!"));
});
