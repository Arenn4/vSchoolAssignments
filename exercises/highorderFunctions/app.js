//1
// for (var i = 0; i < cars.length; i++) {  
//     console.log(`${cars[i]} goes vroom`);
//   }
cars.forEach(function(cars){
      return (cars + " goes vroom")
  })

//2
// var angryCars = [];

// for (var i = 0; i < cars.length; i++) {  
//   angryCars.push(cars[i].toUpperCase());
// }
function carChange(angryCars){
    var up = angryCars.map(function(cars){
        return cars.toUpperCase()
    })
}

//3
// var newCars = [];

// for (var i = 0; i < cars.length; i++) {  
//   if (cars[i].year > 2005){
//     newCars.push(cars[i]);
//   }
// }
function filtCars(newCars){
    var newer = newCars.filter(function(num){
        if(num.year > 2005){
            return num
        }
    })
    return newer
}

//4
// for (var i = 0; i < cars.length; i++) {  
//     if (cars[i].model === "E150"){
//       var coolVan = cars[i];
//       break;
//     }
//   }
function coolCars(){
    var cool = cars.find(function(vans){
    if(vans.model === 'E150'){
        return vans
    }
})
return cool
}

//5
// for (var i = 0; i < cars.length; i++) {  
//     if (cars[i].model === "E150"){
//       console.log("It is true that there is one or more E150s");
//       break;
//     }
//   }
cars.some(function(car){
    return car = 'E150'
})

//6
// for (var i = 0; i < cars.length; i++) {  
//     if (cars[i].make != "E150"){
//       console.log("It is false that every car is an E150");
//       break;
//     }
//   }
cars.every(function(car){
    return car = 'E150'
})


//7
// var numberOfFords = 0;  
// var numberOfChevys = 0;

// for (var i = 0; i < cars.length; i++) {  
//   if (cars[i].model === "ford"){
//     numberOfFords ++;
//   }
//   if (cars[i].model === "chevy"){
//     numberOfchevys ++;
//   }
// }

// var carTotals = { numberOfFords: numberOfFords, numberOfchevys: numberOfchevys }
cars.reduce(function(numberOfChevys, numberOfFords){
    return numberOfChevys + numberOfFords
})
