// Given an array of integers and a target integer, return the indices of the FIRST two numbers which add up to the target.

// Assume the same element may not be used twice.

const twoSum = (arr, num) => {
//returns [0, 2] because 1 + 3 equals 4
    for(let i = 0; i < arr.length; i++){
        for(let j = i + 1; j < arr.length; j++){
            if(arr[i] + arr[j] === num){
                return [i, j]
            }
        }
    }
}

console.log(twoSum([1,2,3], 4))