function calculateTax (amount){
const tax = .1
console.log("You tax is:",amount * tax);
}
calculateTax(100)

function convertToUpperCase (text){
    return text.toUpperCase();
}
const original = "the quick brown fox";
const uppercase = convertToUpperCase(original);
console.log(uppercase);

function findMaximum (num1, num2){
    if (num1 >num2){return num1;}
    else {return num2} 
}
let num1 = 34
let num2 = 68
console.log("The maximum number is:",findMaximum(num1,num2))

function isPalindrome (word){
word = word.toLowerCase();
const reversed = word.split("").reverse().join("");
return word === reversed
}

function calculateDiscountedPrice(originalPrice,discountPercentage){
const discountAmount = (originalPrice*discountPercentage)/100
return (originalPrice, discountAmount)
}
console.log("Your returing price is:",calculateDiscountedPrice(100,20))



// This is required for the test to function properly  
module.exports = { calculateTax, convertToUpperCase, findMaximum, isPalindrome, calculateDiscountedPrice };