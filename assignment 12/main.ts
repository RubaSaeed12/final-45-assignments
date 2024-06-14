let names: string[] = ["sohail", "ruba", "safa", "mavil", "safwan" ]


for (let i = 0; i < names.length; i++) {
    console.log(`hey, ${names[i]}! how are you ?`);
    
}
names.forEach(friend => {
    console.log(`Hi ${friend}! how are you ?`)

}) 
for (let  friendNmae of names) {
    console.log(`Dear, ${friendNmae}! how do you do?`)
    
}
