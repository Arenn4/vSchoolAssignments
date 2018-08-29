import React, { Component } from 'react';
import './App.css';
import axios from 'axios'
import Person from './Person'

class App extends Component {
  constructor(){
    super()
    this.state = {
      data: []
    }
  }



  componentDidMount(){
    axios.get('https://swapi.co/api/people/').then(response =>{
      this.setState({
        data: response.data.results
      })
    })
  }



  render() {

  const displayStarWars = this.state.data.map(person =>{
      return (<Person
        key = { person.url}
        name = { person.name }
        mass = { person.mass }
        height = { person.height }
      />
      )
  })

    return (
      <div>
        {displayStarWars}
        </div>
    );
  }
}

export default App;
