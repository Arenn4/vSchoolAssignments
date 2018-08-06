//1
function fiveAndGreaterOnly(arr) {
    var highNum = arr.filter(function(num){
        if(num >= 5){
            return num
        }
    })
    return highNum
}

console.log(fiveAndGreaterOnly([3, 6, 8, 2])); /// [6, 8]

//2
function evensOnly(arr) {
    var even = arr.filter(function(num){
        if(num % 2 === 0)
        return num
    })
    return even
}

evensOnly([3, 6, 8, 2]); /// [6, 8, 2]  

//3
function fiveCharactersOrFewerOnly(arr) {
    var arr1 = arr.filter(function(short){
        if(short.length < 5)
            return short
    })
    return arr1
}

console.log(fiveCharactersOrFewerOnly(["dog", "wolf", "by", "family", "eaten", "camping"])) // ["by", "dog", "wolf", "eaten"]  

//4
function peopleWhoBelongToTheIlluminati(arr){
    var belong = arr.filter(function(fame){
        if(fame.member){
            return fame
        }
    })
    return belong
}

console.log(peopleWhoBelongToTheIlluminati([  
    {
        name: "Angelina Jolie",
        member: true
    },
    {
        name: "Eric Jones",
        member: false
    },
    {
        name: "Paris Hilton",
        member: true
    },
    {
        name: "Kayne West",
        member: false
    },
    {
        name: "Bob Ziroll",
        member: true
    }
]))

//5
function ofAge(arr){
    var old = arr.filter(function(yee){
        if(yee.age > 18){
            return yee
        }
    })
    return old
}

console.log(ofAge([  
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
]))