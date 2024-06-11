// Assignment 2
//storing a person name in a variable
var personName = "Ruba Saeed";
//printing a person name in lower case
console.log("Lowercase:", personName.toLowerCase());
//printing a person name in upper case
console.log("uppercase:", personName.toUpperCase());
//printing a person name in title case
console.log("Titlecase:", personName.replace(/\b\w/g, function (c) { return c.toUpperCase(); }));
