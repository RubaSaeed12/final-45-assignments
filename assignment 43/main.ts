let magicians: string[] = ["John", "Chris", "Hazal"]
function show_magicians(magicians:string[]) {
    magicians.forEach(name => console.log(name)) 
}
//Function to make magicians great through.map()
function make_great(magicians:string[]) {
    return magicians.map(name => `The Great ${name}`)
}
//making a copy of original array through.slice()
let copy_magicians = magicians.slice()
//modified the copied array to add "The great"
let copy_great_magicians = make_great(copy_magicians)
//show both arrays original and copied
show_magicians(magicians)
show_magicians(copy_great_magicians)    
