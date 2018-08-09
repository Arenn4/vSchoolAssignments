// //1
// function sortedOfAge(arr){
//     var sorted = arr.filter(function(age){
//         if(age.age > 18){
//             return age.firstName
//         }
//     })
//     return sorted
// }
    
var people = [  
  {
    firstName: "Sarah",
    lastName: "Palin",
    age: 47
  },{
    firstName: "Frank",
    lastName: "Zappa",
    age: 12
  },{
    firstName: "Rick",
    lastName: "Sanchez",
    age: 78
  },{
    firstName: "Morty",
    lastName: "Smith",
    age: 29
  },{
    firstName: "Kyle",
    lastName: "Mooney",
    age: 27
  },{
    firstName: "Pasha",
    lastName: "Datsyuk",
    age: 13
  },{
    firstName: "Lev",
    lastName: "Tolstoy",
    age: 82
  }
]
// console.log(sortedOfAge(people))

var over18 = [
  {
      firstName: "Sarah",
      lastName: "Palin",
      age: 47
  },
  {
      firstName: "Rick",
      lastName: "Sanchez",
      age: 78
  },
  {
      firstName: "Morty",
      lastName: "Smith",
      age: 29
  },
  {
      firstName: "Kyle",
      lastName: "Mooney",
      age: 27
  },
  {
      firstName: "Lev",
      lastName: "Tolstoy",
      age: 82
  },
]

function olderThan18(arr){
  return arr.filter(function(person){
      if(person.age > 18){
          return person
      }
  })
}

// //2
// function toDisplayInHTML(arr){
//     var list = arr.sort(function(a, b){
//         return a - b 
// })
// return list
// }
// console.log(toDisplayInHTML(sorte))

module.exports = {
  olderThan18: olderThan18,
  people: people,
  over18: over18
}