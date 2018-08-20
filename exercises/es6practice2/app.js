//1
function collectAnimals(...rest) {  
    return rest
}

console.log(collectAnimals("dog", "cat", "mouse", "jackolope", "platypus")); 
// ["dog", "cat", "mouse", "jackolope", "platypus"]

//2
//Make a food object with the array names as properties using Object Literals:
const food = {
    fruit: ["apple", "pear"],
    sweets: ["cake", "pie"],
    vegetables: ["carrot"]
}


//3
//Use destructuring to fill in the blanks and use the property names as variables:
const vacation = {  
    location: "Burly Idaho",
    duration: "2 weeks"
  };

  //answer destruct
let {location, duration} = vacation
  
console.log(`We're going to have a good time in ${location} for ${duration}`)

//4
//Use destructuring to make this code ES6:
const [firstItem] = items;

//5
//Write destructuring code to assign variables that will help us print the expected string. Also, change the string to be using Template literals:
const favoriteActivitiesInOrder = ["magnets", "snowboarding", "philanthropy", "janitor work", "eating"];

let [...rest] = favoriteActivitiesInOrder
// your code

console.log("My top three favorite activities are, " + firstFav + ", " + secondFav + ", and " + thirdFav");

//6
//Use the Rest and Spread Operator to help take any number of arrays, and return one array. You will need to change how the arrays are passed in.

function combineAnimals() {  
 
}

const realAnimals = ["dog", "cat", "mouse"];
const magicalAnimals = ["jackolope"];
const mysteriousAnimals = ["platypus"];

combineAnimals(realAnimals, magicalAnimals, mysteriousAnimals); 

// ["dog", "cat", "mouse", "jackolope", "platypus"]

