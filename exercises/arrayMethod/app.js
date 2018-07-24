var names = ["alvin", "paul", "lisa", "stan"]
//.push() - adds to end of array
names.push("joe")
console.log(names)
//.pop - removes from the end of the array
names.pop()
console.log(names)
//.shift - removes from the beginning of the array
names.shift()
console.log(names)
//.unshift() - adds to the begginning of the array
names.unshift("paul")
console.log(names)
//.splice(startingPoint, amount, [args]) - takes a starting point, amount, argument
names.splice(2, 1, "Guy Fieri")
console.log(names)
//.slice(startIndex [, endIndex]) -returns a copy portion of the array, (end portion not included)
var newNames = names.slice(0,2)
console.log(newNames)
//
console.log(names) 



