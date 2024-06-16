var guestlist = ["ruba", "sohail", "safa"];
console.log("Great News! we have found a new bigger table");
//unshift method
guestlist.unshift("raiha");
//splice method
guestlist.splice(Math.floor(guestlist.length / 2), 0, "safwan");
//push method
guestlist.push("mavil");
console.log(guestlist);
//forEach method
guestlist.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", you all are invited for dinner!"));
});
