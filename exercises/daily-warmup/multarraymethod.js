//1
function sortedOfAge(arr){
    var sorted = arr.filter(function(age){
        if(age.age > 18){
            return age.firstName
        }
    })
    return sorted
}
    
var sorte = [  
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
        age: 13
      },{
        firstName: "Kyle",
        lastName: "Mooney",
        age: 27
      }
    ]  
console.log(sortedOfAge(sorte))

//2
function toDisplayInHTML(arr){
    var list = arr.sort(function(a, b){
        return a - b
})
return list
}
console.log(toDisplayInHTML(sorte))