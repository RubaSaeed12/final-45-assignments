function make_car(manufacturer:string, model:string, ...options:string[]) {
    let car ={manufacturer,model}
    options.forEach(option => {
        let [key,value]= option.split(':')
        car[key]=value.trim()
        
        
    });
    return car
}
let myCar = make_car("Toyota", "Old", "Color: Black", "Year:2009")
console.log(myCar)