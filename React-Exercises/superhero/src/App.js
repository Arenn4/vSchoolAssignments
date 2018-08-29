import React, { Component } from 'react';
import Superhero from './SuperHero'
import heroes from './heroes.json'




class App extends Component {

 
  render() {
    const supheroes = heroes.SuperHeroes
    const displayHeroes = supheroes.map((hero, i) => {
      return <Superhero key={hero.name + i}
                        name={hero.name}
                        superpowers={hero.superpower}
                        image={hero.image}
                        catchphrase={hero.catchphrase}
                        // sayPhrase= {Eventhandler}
      />
    })
    return (
      <div>
        {displayHeroes}
      </div>
    )
  }
}

export default App;


