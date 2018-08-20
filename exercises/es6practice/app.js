//1
const name = 'John'
let age = 101
const pets = ["cat", "dog"]

const petObjects = []

for (let i = 0; i < pets.length; i++){
  var pet = {type: pets[i]}
  if (pets[i] === "cat"){
    let name = "fluffy"
  } else {
    let name = "spot"
  }
  pet.name = name
  petObjects.push(pet)
}

//2
const vegetables = carrots.map(carrot => {
    return { type: "carrot", name: carrot }
})


//3
const friends = (person) => !!person.friendly

//4
const doMathSum = (a, b) => a + b


const produceProduct = (a, b) => a * b


//5
const dogs = animals.filter((animal) => {
    if (animal.type === "dog"){
        return true
    } else {
      return false
    }
  })


//6
// Write a function that will take `location` and `name` and output this if `location="Hawaii"` and `name="Janice"`: ``` Hi Janice!
// Welcome to Hawaii.
