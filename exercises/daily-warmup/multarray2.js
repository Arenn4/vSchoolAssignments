// Create an array of everyone that has at least one dog and sort them by age.
// Create an array of pets' first names.
// Display the pets' names in <li>s.
// Only display names of pets if their owners are older than 20.
// Only display pets who have nicknames.


    //Output: 
    // ['<li>Alfred</li>',
    // '<li>Charles</li>',
    // '<li>Bark Obama</li>', 
    // '<li>Christopher George Latore Wallace</li>',
    // '<li>Morty Jr.</li>', 
    // '<li>Snuffels</li>']
    
const peopleWithPets = [
        {
            firstName: "Sarah",
            lastName: "Palin",
            age: 47,
            pets: ["dog", "cat"]
        }, 
        {
            firstName: "Frank",
            lastName: "Zappa",
            age: 12,
            pets: ["dog"]
        }, 
        {
            firstName: "Rick",
            lastName: "Sanchez",
            age: 78,
            pets: ["cat", "parrot"]
        }, 
        {
            firstName: "Morty",
            lastName: "Smith",
            age: 13,
            pets: ["cat", "parrot", "dog"]
        }, 
        {
            firstName: "Kyle",
            lastName: "Mooney",
            age: 27,
            pets: ["dog"]
        }
    ];
//1
const peopleWithPets = peopleAndPets.filter(person => {
    const dogsOnly = person.pets.filter(pet => {
        return pet.type === 'dog'
    })
    return dogsOnly.length > 0
})

const sorted = peopleWithDogs.sort((a, b) => {
    return a.age > b.age
})

//2
const firstNames = peopleAndPets.reduce((agg, value)=>{
    const names = value.pets.reduce((agg, value)=>{
        return agg.concat(value.name)
    }, [])
    return agg.concat(names)
}, [])

console.log(firstNames)

//3
const liArray = firstNames.map(name => {
    return `<li>${name}</li>`
})
console.log(liArray)


const peopleAndPets = [
        {
            firstName: "Sarah",
            lastName: "Palin",
            age: 47,
            pets: [
                {
                    name: "Alfred",
                    type: "dog",
                    nickNames: ["Lil Alfred", "Alfy", "Alfinator"]
                },
                {
                    name: "Charles",
                    type: "cat",
                    nickNames: ["Charley"]
                },
                {
                    name: "Bark Obama",
                    type: "dog",
                    nickNames: ["Barack", "Mr. President"]
                },
                {
                    name: "Christopher George Latore Wallace",
                    type: "dog",
                    nickNames: ["Notorious D.I.G.", "Diggie Smalls"]
                }
    
            ]
        },
        {
            firstName: "Frank",
            lastName: "Zappa",
            age: 12,
            pets: [
                {
                    name: "Howard",
                    type: "dog",
                    nickNames: []
                },
                {
                    name: "Bear",
                    type: "dog",
                    nickNames: []
                }
            ]
        },
        {
            firstName: "Rick",
            lastName: "Sanchez",
            age: 78,
            pets: [
                {
                    name: "Bird Person",
                    type: "bird",
                    nickNames: ["Phoenixperson"]
                },
                {
                    name: "Krombopulos Michael",
                    type: "Gromflomite",
                    nickNames: ["Assassin man"]
                },
                {
                    name: "Squanchy",
                    type: "Cat-person",
                    nickNames: ["Squanch", "Smarf", "Thunder Cat"]
                }
    
            ]
        },
        {
            firstName: "Morty",
            lastName: "Smith",
            age: 23,
            pets: [
                {
                    name: "Morty Jr.",
                    type: "Gazorpazorp",
                    nickNames: ["Gwendolyn Jr."]
                },
                {
                    name: "Snuffels",
                    type: "dog",
                    nickNames: ["Snowball"]
                }
    
            ]
        }
    ];