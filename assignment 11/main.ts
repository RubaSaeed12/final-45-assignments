let names: string[] = ["ruba, safa, raiha, ayesha"]
//loop method
for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
 }
//for each method
names.forEach(friend => { 
    console.log(friend)
});
//for ofloop method
for (const friendName  of names) {
    console.log(friendName)
}


