// map() method
let guestlist: string[] = ["ruba", "sohail", "safa"]
let invitation:string[] = guestlist.map(guest => (`Dear ${guest},you are invited for dinner`) )
console.log(invitation)

invitation.forEach(invitations => {
    console.log(invitations)
    
});
//now printing the name who cant make dinner
let unableAttend: string = guestlist.splice(1,1)[0]
console.log(`${unableAttend} can not make dinner`)
//push
guestlist.push("Raiha Salman")
console.log(guestlist)
//print a message
guestlist.forEach(guest => {
    console.log(`Dear, ${guest} you are invited for dinner!`)
    
});
