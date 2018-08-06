//1
var wizards = ["Edwin Odesseiron", "Harry Potter", "Ronny the Bear", "Gandalf the Grey"] 
wizards.forEach(function(names){
    console.log(names)
})

//2
var wizards = [  
    {
      name: "Edwin Odesseiron",
      age: 37,
      alignment: "lawful evil"
    },
    {
      name: "Harry Potter",
      age: 21,
      alignment: "neutral good"
    },
    {
      name: "Hermony Granger",
      age: 21,
      alignment: "lawful good"
    },
    {
      name: "Ronny the Bear",
      age: 21,
      alignment: "neutral good"
    },
    {
      name: "Gandalf",
      age: 100,
      alignment: "neutral good"
    }
  ]
//2.1
  function listed(wizards){
    var names = wizards.map(function(nm){
        return (nm.name)
    })
    return names
  }
  console.log(listed(wizards))
//2.2

wizards.forEach(function(alive){
    alive.isAlive = true;
  })
console.log((wizards))

//2.3
  function good(wizards){
      var neuGood = wizards.filter(function(wiz){
          if(wiz.alignment === 'neutral good'){
              return wiz
          }
      })
      return neuGood
  }
console.log(good(wizards))

//2.4
function lawGood(wizards){
    var lawgood = wizards.findIndex(function(law){
        if(law.alignment === 'lawful good'){
            return law
        }
    })
    return lawgood
  }
console.log(lawGood(wizards))
//2.5
function alive(wizards){
    var okay = wizards.every(function(ok){
        return (ok.isAlive = true)
    })
    return okay
}
console.log(alive(wizards))

//2.6
function ngood(wizards){
    var negood = wizards.find(function(wizard){  
    return wizard.alignment =  'neutral good'
})
return negood
}
console.log(ngood(wizards))
//2.7
function assassinate(wizards){
   wizards.forEach(function(murder){
        if(murder.alignment === "neutral good"){
            return murder.isAlive = false
        }
    })
}
console.log(assassinate(wizards))
console.log(wizards)

//2.8
function living(wizards){
    var live = wizards.every(function(alive){
        return alive.isAlive
    })
    return live
}
console.log(living(wizards))
//2.9
function halfAlive(wizards){
    var someOKAY = wizards.some(function(alive){
        return (alive.isAlive = true)
    })
    return someOKAY
}
console.log(halfAlive(wizards))



