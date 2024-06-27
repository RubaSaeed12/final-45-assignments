let userNmaes = ["Sohail", "Safwan","Mavil","Admin", "Rayyan"]
userNmaes = []
if (userNmaes.length === 0) {
    console.log("Your array is empty we need to find some users!")
}
else{ 
    userNmaes.forEach(oneUser =>{ 
    if(oneUser === "admin"){
        console.log(`Hello! ${oneUser}, would you like to see a status report?`)
    }else{ 
        console.log(`Hello! $(oneUser), thank you for logging in again!`)
    }    
})
}