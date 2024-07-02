let magicians:string[] = ["John", "Chris", "Hazal"]
function show_magicians(magicians:string[]) {
    magicians.forEach(magician => {
        console.log(magician)
        
    });
    
}
function make_great(magicians:string[]) {
    return magicians.map(magicians => `The Great ${magicians}`)
}
let great_magicians = make_great(magicians)
show_magicians(great_magicians)

