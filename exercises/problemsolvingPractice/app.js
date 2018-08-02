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

//return words in an array that has a specific character value
function letter(arr){
    for(var i = 0; i < arr.length; i++){
        if(arr[i].indexof('!') != -1){
            return (arr[i])
        }
    }
}
console.log(letter(["#3", "$$$", "C%4!", "Hey!"]))