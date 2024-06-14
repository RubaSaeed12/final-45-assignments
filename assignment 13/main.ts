let transportationMode:string[] =["car", "motorcycle", "bus"]
for (let i = 0; i < transportationMode.length; i++) {
    console.log(`I would like to own a ${transportationMode[i]}`);
}
transportationMode.forEach(mode => {
    console.log(`i would like to own a ${mode}`)
    
});
