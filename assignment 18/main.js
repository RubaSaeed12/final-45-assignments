var placeToVisit = ["Monaco", "Turkey", "Canada", "France", "Thailand"];
console.log("original order", placeToVisit);
// array in alphabetic order
console.log("/n Alphabetical order:", placeToVisit.slice().sort());
// array is still in its original order
console.log("original order:", placeToVisit);
// reversing alphabetical order
console.log("reverse order:", placeToVisit.slice().sort().reverse());
// array is still in its original order
console.log("original order:", placeToVisit);
// reversing order to show that it has changed
console.log("reverse order changed:");
placeToVisit.reverse();
console.log(placeToVisit);
// reversing order by printing the list to show its original order
console.log("original order:", placeToVisit.sort());
console.log(placeToVisit);
// reversing alphabetical order
console.log("reverse alphabetical order changed:", placeToVisit.sort().reverse());
console.log(placeToVisit);
