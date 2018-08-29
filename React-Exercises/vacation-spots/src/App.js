import React from 'react';
import Cards from './Cards'


const App = () =>{

  let vacationSpots = [
    {
      place: "Meridian, Idaho",
      price: 40,
      timeToGo: "Spring"
    },{
      place: "Cancun",
      price: 900,
      timeToGo: "Winter"
    },{
      place: "China",
      price: 1200,
      timeToGo: "Fall"
    },{
      place: "Russia",
      price: 1100,
      timeToGo: "Summer"
    },{
      place: "Lebanon",
      price: 400,
      timeToGo: "Spring"
    }
  ]



  const displayVacationSpots = vacationSpots.map((destination, i) =>{

    return <Cards key={destination.place + 1}
                  place={destination.place}
                  price={destination.price}
                  season={destination.timeToGo}
    />
  })


  return (
    <div>
      {displayVacationSpots}
    </div>
  )
}


export default App;
