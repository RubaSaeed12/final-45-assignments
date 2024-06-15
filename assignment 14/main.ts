let guestlist: string[] = ["ruba", "sohail", "safa"]
//invite each guest for dinner
for (let i = 0; i < guestlist.length; i++) {
    console.log(guestlist[i]);
    
}
guestlist.forEach(guest => {
    console.log(`Dear ${guest},you are invited for dinner`)
    
});
