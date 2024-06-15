var guestlist = ["ruba", "sohail", "safa"];
//invite each guest for dinner
for (var i = 0; i < guestlist.length; i++) {
    console.log(guestlist[i]);
}
guestlist.forEach(function (guest) {
    console.log("Dear ".concat(guest, ",you are invited for dinner"));
});
