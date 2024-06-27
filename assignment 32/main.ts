let currentUsers = ["Sohail","Safa", "Mavil", "Safwan","Ruba"]
let newUsers = ["Sohail", "Ruba", "Raiha", "Saad","Ayesha"]
newUsers.forEach(newOneUser => {
    if (currentUsers.some(currentOneUser => currentOneUser.toLocaleLowerCase() === newOneUser.toLocaleLowerCase())) {
        console.log(`Sorry! ${newOneUser} is already taken.`)
    }else{ 
        console.log(`This Username ${newOneUser } is available`)
    }
    
});