import React, { Component } from 'react';
import './App.css';
import axios from 'axios'
import People from './People'
import Header from './Header'

class App extends Component {
  constructor(){
    super()
    this.state = {
      data: []
    }
  }

componentDidMount(){
  axios.get('http://api.vschool.io:6543/hitlist.json').then(response =>{
    this.setState({
      data: response.data
    })
  })
}

  render() {

    const hitlist = this.state.data.map((person, i)=>{
      return (
        <People 
        key={person.name+i}
        name={person.name}
        image={person.image} 
        />
      )
    })

    return (
      <div className='maincontainer'>
        <Header />
        {hitlist}
      </div>
    );
  }
}

export default App;
