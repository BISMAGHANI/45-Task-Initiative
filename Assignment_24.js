"use strict";
// Equality and Unequalty 
console.log("Equality Test with strings: ", "Apple" === "Apple");
// Equality and Unequalty 
console.log("Inequality Test with strings: ", "Apple" != "Orange");
// • Tests using the lower case function
console.log("Lower case function test: ", "HELLO".toLowerCase() === "hello");
// • Numerical tests involving equality 
console.log("Equality Test with numbers: ", 26 === 26);
// • Numerical tests involving inequality 
console.log("Equality Test with numbers: ", 26 != 36);
// Greater than test
console.log("Greater than test: ", 10 > 5);
//  less than test
console.log("less than test: ", 10 < 5);
// Greater than or equal to test
console.log("Greater than or equal to test: ", 10 >= 10);
// less than or equal to
console.log("less than or equal to test: ", 5 <= 10);
// • Tests using "and" and "or" operators
console.log("And operator test: ", 5 === 5 && 10 > 5);
// • Tests using "and" and "or" operators
console.log("or operator test: ", 5 === 5 || false);
// • Test whether an item is in a array
const fruits = [`Mango`, `PineApple`, `Amrood`];
console.log(`test "Amrood" in the array:`, fruits.includes("Amrood"));
// • Test whether an item is not in a array
console.log(`Testing "Apple" is not an Array: `, fruits.includes(`Apple`));
