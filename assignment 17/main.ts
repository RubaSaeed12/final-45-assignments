let guestlist:string[] = ["ruba", "sohail", "safa"] 
console.log("Unfortunately! the new dinner table have not enough space so we can invite only two persons")
guestlist.unshift("safwan", "mavil")
console.log("updated list of guest", guestlist)
// now removing the guest from the list
while (guestlist.length > 2) {
    let removedGuest : string | undefined = guestlist.pop()
    if (removedGuest !== undefined) {
        console.log(`Sorry! ${removedGuest}, we cant invite you`)
  }
}
//print a message to each guest who is invited
guestlist.forEach( guest=> {
    console.log(`Dear ${guest}, you are stil invited for dinner!`)
});
guestlist.splice(0, guestlist.length)
console.log("updated list of guest:", guestlist)