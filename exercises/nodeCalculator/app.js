var ask = require('readline-sync')

function addNums(num1,num2){
    return +num1 + +num2
}
// console.log(addNums(2, 2))

function multNums(num1, num2){
    return parseInt(num1 * num2)
}
// console.log(multNums(2, 2))

function divNums(num1, num2){
    return parseInt(num1 / num2)
}
// console.log(divNums(4, 2))

function subNums(num1, num2){
    return parseInt(num1 - num2)
}
// console.log(subNums(4, 3))



var num1 = ask.question("Please enter your first number: ")
var num2 = ask.question("Please enter your second number: ")
var hasCalculated = true;

while(hasCalculated){
    var choices = ['addNums', 'multNums', 'divNums', 'subNums', ]
    var index = ask.keyInSelect(choices, 'What would you like to do? ')

    if (choices[index] === 'addNums'){
         console.log(addNums(num1, num2))
         hasCalculated = false;
    }
    if (choices[index] === 'multNums'){
        console.log(multNums(num1, num2))
        hasCalculated = false;
   }
   if (choices[index] === 'divNums'){
    console.log(divNums(num1, num2))
    hasCalculated = false;
    }
    if (choices[index] === 'subNums'){
        console.log(subNums(num1, num2))
        hasCalculated = false;
   }
}