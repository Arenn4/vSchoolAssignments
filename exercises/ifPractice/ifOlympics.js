// Example of switch statement
switch(fruits) {
    case "Banana":
        text = "Banana is good!";
        break;
    case "Orange":
        text = "I am not a fan of orange.";
        break;
    case "Apple":
        text = "How you like them apples?";
        break;
    default:
        text = "I have never heard of that fruit...";
}


// Preliminaries
if (a > b) {
    console.log(a + " Is greater than " + b)
}

if (a = b) {
console.log (a + "is the length of " + b)
}

if(a === b) {
    console.log("These are the same!")
    } else {
        console.log("these are not equal!")
    }
// Bronze Medal
var person = {
    name: "boe",
    age: 12,
};

if (person.age >= 18 && person.name[0] == "b") {
    console.log("You are allowed to go to the movies!")
    } else { 
        console.log("You are not allowed into the movie!")
}
// Silver
if (a === b){
    console.log("strict") 
    } else if (a == b){
        console.log("abstract")
    } else {
        console.log("not equal at all")
}

// Gold Medal
if (typeof "dog" == "string") {
    console.log("This is a string")
    } else {
        console.log("no")
}

if (typeof "true" == "boolean" ) {
    console.log("is boolean")
    } else {
    console.log("not boolean")
}

if (typeof variable === 'undefined') {
    console.log("Variable is not defined")
}






var myNum = 10;
myNum % 2 == 0 ? console.log("Even") : console.log("odd");



