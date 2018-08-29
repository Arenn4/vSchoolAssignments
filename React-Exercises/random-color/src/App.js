import React, { Component } from 'react';
import axios from 'axios'
import Color from './Color'

import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
      color: ''
    }
  }

componentDidMount(){
  axios.get('http://www.colr.org/json/colors/random/').then(response =>{
    console.log(response)
    this.setState({
    color: response.data.colors[0].hex
  })
  })
}

  render() {
    return (
      <div>
        <Color color={this.state.color}  />
      </div>
    );
  }
}

export default App;
