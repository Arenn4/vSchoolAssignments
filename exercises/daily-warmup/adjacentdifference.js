

const combined = arr => {
    let max = 0
    let maxArr = []
    for (let i = 0; i < arr.length - 2; i++){
        let temp = arr[i].length + arr[i + 1].length + arr[i + 2].length
        if(temp > max){
            max = temp
            maxArr = [arr[i], arr[i + 1], arr[i + 2]]
        }
    }
    return maxArr
}

console.log(combined(['this', 'is', 'an', 'array'])) //['is', 'an', 'array']