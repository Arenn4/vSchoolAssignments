//Exercise Funtions

//1
function addNum (a , b) { 
    return a + b
}

//2
function bigNum (a, b, c) {
    if (a > b && a > c) {
        return a
    } else if (b > a && b > c) {
        return b
    } else if (c > a && c > b) {
        return c
    }
}

function bigNum (num1, num2, num3){
    return Math.max(num1, num2, num3)
}//this function is the same as above, just shorter

//2
function evendd(num) {
    if(num % 2 === 0)
        return "even"
            else {
                return "odd"
            }
}

//3
function yarr(str){
    str = "poops poops poops poops poops"
        if(str.length <= 20){
            console.log(str + str) 
        } else {
            console.log(str.slice(0, 20))
        }
}
console.log(yarr())

//function, arrays
function findTheBiggest(arr){
    var hongKong = 0
    for (var i = 0; i < arr.length; i++) {
        if(arr[i] > hongKong){
            hongKong = arr[i]
        }
    }
    return hongKong
}


console.log(findTheBiggest([20, 5, 30])) //30
console.log(findTheBiggest([22, 22, 3])) //22
console.log(findTheBiggest([10, 100, 1000])) //1000

//Loops and Arays
function createEvenArray(highestNum){
    var arr1 = []
    for (var i = 2; i <= highestNum; i+=2){
            arr1.push(i)
        }
    return arr1
}
console.log(createEvenArray(10))

var evensOnlyArray = createEvenArray(10)

function addOdds(array){
    var arr2 = []
    arr2.push(2, 4, 6, 8, 10)
    for (var i = 0; i < array.length; i++){
        arr2.push(array[i] + 1)
    }
    return arr2
}
console.log(addOdds(evensOnlyArray))
var numberArray = addOdds([2, 4, 6, 8, 10])

function sortNums(numberArray) {  
    return numberArray.sort(function(a, b){return a-b});
}
console.log(sortNums(numberArray))
