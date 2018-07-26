//Write a function that returns an array containg the numbers 1-100
//if the number is divisible by 3, replace the word with "fizz"
//if the number is divisible by 5, replace it with "buzz"
//if the number is divisible by both 3 & 5, replace it with "fizzbuzz"
function fizzBuzz(){
    var arr = []
    for (var i = 1; i <= 100; i++){
      if (i % 3 === 0 && i % 5 === 0){
        arr.push("FizzBuzz")
      } else if (i % 3 === 0){
        arr.push("fizz")
      } else if (i % 5 === 0){
        arr.push("buzz")
      }else {
        arr.push(i)
      }
    }
    return arr
}
console.log(fizzBuzz())