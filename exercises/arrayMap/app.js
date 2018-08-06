//1
function doubleNumbers(arr){
    var double = arr.map(function(dbl){
        return (dbl * 2)
    })
    return double
}

console.log(doubleNumbers([2, 5, 100])); // [4, 10, 200] 

//2
function stringItUp(arr){
    var str = arr.map(function(string){
        return string.toString()
    })
    return str
}

console.log(stringItUp([2, 5, 100])); // ["2", "5", "100"]  

//3
function capitalizeNames(arr){
    var cap = arr.map(function(up){
        return up[0].toUpperCase(0) + up.toLowerCase().slice(1);
    })
    return cap
}


console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"])); // ["John", "Jacob", "Jingleheimer", "Schmidt"]

//4
function namesOnly(arr){
    var names = arr.map(function(name){
        return name.name
    })
    return names
}

console.log(namesOnly([  
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
// ["Angelina Jolie", "Eric Jones", "Paris Hilton", "Kayne West", "Bob Ziroll"]

//5
function makeStrings(arr){
    var names = arr.map(function(nm){
        if(nm.age > 18){
            return (nm.name + " can go to The Matrix")
        }else if(nm.age < 18){
            return (nm.name + " is under age!")
        }
    })
    return names
}

console.log(makeStrings([  
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
// ["Angelina Jolie can go to The Matrix", 
// "Eric Jones is under age!!", 
// "Paris Hilton is under age!!", 
// "Kayne West is under age!!", 
// "Bob Ziroll can go to The Matrix"]

//6
function readyToPutInTheDOM(arr){
    var names = arr.map(function(nm){
        if(nm.age > 0){
            return ("<h1>"+ nm.name + "</h1>" + "<h2>" + nm.age + "</h2>")
        }
    })
    return names
}

console.log(readyToPutInTheDOM([  
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
// ["<h1>Angelina Jolie</h1><h2>80</h2>", 
// "<h1>Eric Jones</h1><h2>2</h2>", 
// "<h1>Paris Hilton</h1><h2>5</h2>", 
// "<h1>Kayne West</h1><h2>16</h2>", 
// "<h1>Bob Ziroll</h1><h2>100</h2>"]