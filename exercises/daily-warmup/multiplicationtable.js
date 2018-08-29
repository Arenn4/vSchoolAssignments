const multTable = (n) => {
    arr1 = []
    arr2 = []
    for (let i = 0; i < n; i++){
        for (let j = 0; j < n; j++){
            arr2.push((i + 1) * (j + 1))
        }
        arr1.push(arr2)
        arr2 = []
    }
    return arr1
}
console.log(multTable(5))

function multTable2(n){
    const table = []
    for(let i = 0; i < n; i++){
        const tempArray = []
        for(let j = 0; j < n; j++){
            tempArray.push((i + 1) * (j + 1))
        }
        table.push(tempArray)
    }
    return table
}
console.log(multTable2(6))
//each array needs to increment by its beginning value
//while count [i]< 10 i++



// Output:
//  [
//    [1,2,3,4,5...],
//    [2,4,6,8,10...],
//    [3,6,9,12,15...],
//    ...
//  ]