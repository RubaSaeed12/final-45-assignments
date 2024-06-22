//Test for equality and inequality with strings
var string1 = "hello world";
var string2 = "hello world";
console.log(string1 == string2);
console.log(string1 !== string2);
//Test using the lowerCase function
var upperCase = "HELLO";
var lowerCase = "hello";
console.log(upperCase.toLocaleLowerCase() === lowerCase);
//Test for <,>,greater than or equal to, and less than equal to
var num1 = 10;
var num2 = 10;
console.log(num1 === num2);
console.log(num1 !== num2);
console.log(num1 >= num2);
console.log(num1 <= num2);
//Test using "and" and "or" operators
var x = 10;
var y = 20;
var z = 30;
console.log(x < y && y < z);
console.log(x > y || y > z);
// Test whether an item is in a array
var array1 = [1, 2, 3, 4,];
var itemTofind = 3;
console.log(array1.indexOf(itemTofind) !== -1);
//Test whether an item is not in a arary
console.log(array1.indexOf(itemTofind) === -1);
