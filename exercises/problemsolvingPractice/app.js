//1
//return highest num in an array
// function highNum(arr){
//     var high = 0
//     for(var i = 0; i < arr.length; i++){
//         if(arr[i] > high){
//         high = arr[i]
//     } else {
//         return high
//     }
// }
// }
// console.log(highNum([2, 3, 5, 8, 1]))

//2
//return words in an array that has a specific character value
function letter(str){
    console.log(str.match(/!/gi))
}
letter(["#3", "$$$", "C%4!", "Hey!"])

//3
//Write a function that takes a num1 and num2 and returns whether num1 is divisible by num2.
function isDivisible(num1, num2){
    if((num1 % num2 == 0)){
        return true
    } else  return false
}

console.log(isDivisible(4, 2))
console.log(isDivisible(9, 3)) 
console.log(isDivisible(15, 4))
