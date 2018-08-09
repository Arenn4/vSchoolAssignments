//1
function leastToGreatest(arr) {
    var least = arr.sort(function(a,b){
        return a - b
    })
    return least
}

console.log(leastToGreatest([1, 3, 5, 2, 90, 20])) // [1, 2, 3, 5, 20, 90]  

//2
function greatestToLeast(arr) {
    var great = arr.sort(function(a, b){
        return b - a
    })
    return great
}

console.log(greatestToLeast([1, 3, 5, 2, 90, 20]))

//3
function lengthSort(arr) {
    var short = arr.sort(function(a, b){
        return a.length > b.length
    })
    return short
}

console.log(lengthSort(["dog", "wolf", "by", "family", "eaten"]))

//4
function alphabetical(arr) {
    var alpha = arr.sort(function(a, b){
        return a > b
    })
    return alpha
}

console.log(alphabetical(["dog", "wolf", "by", "family", "eaten"])) // ["by", "dog", "eaten", "family", "wolf"]  

//5
function byAge(arr){
    var age = arr.sort(function(a, b){
        return a.age > b.age
    })
    return age
}

var people = [  
    {
        name: "Quiet Samurai",
        age: 22
    },
    {
        name: "Arrogant Ambassador",
        age: 100
    },
    {
        name: "Misunderstood Observer",
        age: 2
    },
    {
        name: "Unlucky Swami",
        age: 77
    }
]
console.log(byAge(people))