var words = ['dog', 'cat', 'camel', 'unicorn']

function addS(arr){
    var newArr = []
    for(var i = 0; i < arr.length; i++){
        if(typeof arr[i]  === 'number'){
            return 'no numbers'
        }else if(arr[i].lastIndexOf('s') !== arr[i].length - 1){
            newArr.push(`${arr[i]}s`)
        }else{
            newArr.push(arr[i])
        }
    }
    return newArr
}

//  else if(typeof arr[i] !== "string"){
//     return 'no numbers'
// }else if(typeof `${arr[i]}s` === `${arr[i]}s`)
// return 'no extra s'


module.exports = {
    addS: addS
}























//HOW ASSERT FUNCTIONS//

// assert(Actual, expected)

// var assert = function(actual, expected){
//     try {
//         if(actual !== expected){
//             throw {
//                 type: 'Fail', 
//                 details: {actual: actual, expected: expected}
//             }
//         } else{
//             console.log('Success', 
//                 { 
//                     type: "Test Passed", 
//                     details: {actual: actual, expected: expected}
//                 })
//         }
//     }
//     catch(err){
//         console.log(err)
//     }
// }

// function addTwoNums(num1, num2){
//     return num1 + num2
// }


// assert(true, true)
// assert(addTwoNums(2, 2), 4)





