// every([1,2,"3"], (num)=>{
//     return typeof num === "number";
//   });
//   // returns false
const some = (arr, func) =>{
    for(let i = 0; i< arr.length; i++){
        if(func(arr[i])){
            return true
        }
    }
}

const every = (arr, func) =>{
    for(let i = 0; i < arr.length; ii++){
        if(!func(arr[i])){
            return false;
        }
    }
    return true;
}