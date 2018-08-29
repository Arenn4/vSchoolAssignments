import React, { Component } from 'react';
import './App.css';
import Lists from './Lists'

class App extends Component {
  constructor (){
    super()

    this.state = {
      myName: '',
      names: []
    }
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  addName = event =>{
    event.preventDefault()
    // this.state.names.push(this.state.myName)
    this.setState(prevState =>{
      const displayNames = [
        ...prevState.names, 
        {
          myName: prevState.myName
        }
      ]
      
      return{names: displayNames, myName: ""}
    })
  }

  

  render() {

    const displayList = this.state.names.map((data, i) =>{
      return <Lists key={data.name+i}
                    name={data.myName}

      />
    })

    return (

      <div >
        <form onSubmit={this.addName}>
          <input type="text" name='myName' placeholder='Insert Name' value={this.state.myName} onChange={this.handleChange}/>
          <button>Submit</button>
          <h1>{this.state.myName}</h1>
          {displayList}
        </form>
      </div>
    );
  }
}

export default App;
