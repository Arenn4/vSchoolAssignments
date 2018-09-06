// Write a function that takes an array as a parameter and returns a new array with the contents randomly "shuffled".

// Example
const shuffle = (arr) =>{
    //break into a singular string
    //math random
    //then break back into an array
    const copyArr = [...arr]
    const newArr = []
    while(copyArr.length > 0){
        newArr.push(...copyArr.splice(Math.floor(Math.random() * copyArr.length), 1))
    }
    return newArr
}


console.log(shuffle([1,2,3,4,5]));
//returns [3,5,4,1,2]

