//Test for equality and inequality with strings
let string1: string = "hello world"
let string2: string = "hello world"
console.log(string1 == string2)
console.log(string1 !== string2)
//Test using the lowerCase function
let upperCase : string = "HELLO"
let lowerCase : string = "hello"
console.log(upperCase.toLocaleLowerCase() === lowerCase)
//Test for <,>,greater than or equal to, and less than equal to
let num1 : number = 10
let num2 : number = 10
console.log(num1 === num2)
console.log(num1 !== num2)
console.log(num1 >= num2)
console.log(num1 <= num2)
//Test using "and" and "or" operators
let x: number = 10
let y: number = 20
let z: number = 30
console.log( x < y && y < z)
console.log( x > y || y > z)
// Test whether an item is in a array
let array1: number[] = [1,2,3,4,]
let itemTofind : number = 3
console.log(array1.indexOf(itemTofind) !== -1)
//Test whether an item is not in a arary
console.log(array1.indexOf(itemTofind) === -1)
