// Even/Odd Looping
for (i = 0; i < 100; i++) {
    if(i % 2 === 0) {
        console.log("Even")
    } else {
        console.log("Odd")
    }
}
// Loops and Arrays Practice
// 1
var officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer",  "computer"];
var count = 0
for (i = 0; i < officeItems.length; i++) {
    if (officeItems[i] === "computer") {
        count++
    }
}
console.log(count)

// 2
var peopleWhoWantToSeeMadMaxFuryRoad = [  
    {
      name: "Mike",
      age: 12,
      gender: "male"
    },{
      name: "Madeline",
      age: 80,
      gender: "female"
    },{
      name: "Cheryl",
      age: 22,
      gender: "female"
    },{
      name: "Sam",
      age: 30,
      gender: "male"
    },{
      name: "Suzy",
      age: 4,
      gender: "female"
    }
  ] 
for ( var i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++) {
    if (peopleWhoWantToSeeMadMaxFuryRoad[i].age < 18 && peopleWhoWantToSeeMadMaxFuryRoad[i].gender === "male") {
        console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " You are not old enough, do not let HIM in") 
    } else if (peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18 && peopleWhoWantToSeeMadMaxFuryRoad[i].gender === "male"){
        console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " You are old enough, PLEASE let HIM in")
    }  else if (peopleWhoWantToSeeMadMaxFuryRoad[i].age < 18 && peopleWhoWantToSeeMadMaxFuryRoad[i].gender === "female") {
        console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " You are not old enough, do not let HER in") 
    } else {
        console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " You are old enough, PLEASE let HER in")  
    }
}

//Optional Bonus Challenge
arr1 = [2, 5, 435, 4, 3]
var sum = 0
for (var i = 0; i <arr1.length; i++) {
    sum += arr1[i]
}
if (sum % 2 == 0){
    console.log("The light is on")
} else {
    console.log("The light is off")
}



//  Loop Olympics
// Pre-lim 1
for (var i = 0; i <= 10; i++) {
    console.log(i)
}
//Pre-lim 2
for (var i = 10; i >= 0; i--) {
    console.log(i)
}
// Pre-lim 3
var fruit = ["banana", "orange", "apple", "kiwi"]
for (var i = 0; i <= fruit.length; i++){
    console.log(fruit[i])
}
// Bronze Medal
//1
var num = []
for (i = 0; i <= 10; i++) {
    num.push(i)
}
console.log(num)

//2
for (var i = 0; i <= 100; i+=2) {
    console.log(i)
}

//3
var fruit = ["banana", "orange", "apple", "kiwi", "pear", "peach"]
var newFru = []
for (var i = 0; i < fruit.length; i+=2){
    newFru.push(fruit[i])
}
console.log(newFru)

//Silver Medal
//1
var peopleArray = [  
    {
      name: "Harrison Ford",
      occupation: "Actor"
    },
    {
      name: "Justin Bieber",
      occupation: "Singer"
    },
    {
      name: "Vladimir Putin",
      occupation: "Politician"
    },
    {
      name: "Oprah",
      occupation: "Entertainer"
    }
  ]

for (var i = 0; i < peopleArray.length; i++){
      console.log(peopleArray[i].name)
}
  //2
names = []
occupation = []
for (var i = 0; i < peopleArray.length; i++){
    names.push(peopleArray[i].name)
    occupation.push(peopleArray[i].occupation)
}
console.log(names)
console.log(occupation)
//3
names = []
occupation = []
for (var i = 0; i < peopleArray.length; i+=2){
    names.push(peopleArray[i].name)
    occupation.push(peopleArray[i+1].occupation)
}
console.log(names)
console.log(occupation)
//Gold Medal
//1
arr = []
zero = [0, 0, 0]
for (var i = 0; i < zero.length ; i++) {
    if (i <= 0){
        arr.push(zero)
    } else if (i <= 1) {
        arr.push(zero)
    } else if (i <= 2){
        arr.push(zero)
    }
}
console.log(arr)
//2
// arr = [
        //     arr1 = [],
        //     arr2 = [],
        //     arr3 = []
        // ]
arr = []
zero = [0, 0, 0]
arr2 = [1, 1, 1]
arr3 = [2, 2, 2]
for (var i = 0; i < zero.length ; i++) {
    if (i <= 0){
        arr.push(zero)
    } else if (i <= 1) {
        arr.push(arr2)
    } else if (i <= 2){
        arr.push(arr3)
    }
}
console.log(arr)
//3
arr = [[0, 0, 0], [0, 0, 0], [0, 0, 0]]
for (var i = 0; i < arr.length ; i++) {
    for (var j = 0; j < arr[i]; j++){
        if (arr[i][j] === 0){
            arr[i][j] = "x"
        }
    }
}
console.log(arr)
