import React, { Component } from 'react';
import axios from 'axios'
import Navbar from './components/Navbar'
import './styles.css'
import boba from './boba.jpg'
import BountyList from './components/BountyList';
import NewBounty from './components/NewBounty';

class App extends Component {
  constructor(){
    super()
    this.state ={
      bounties: [],
      status: true,
      firstName: "",
      lastName: "",
      bountyAmount: "",
      type: ""
    }
  }

//get
  componentDidMount(){
    axios.get(`/bounties`).then(res =>{
      this.setState({
        bounties: res.data
      })
    })
    
  }

//post
  

//delete


  //dynamic rendering
  
//update, put
  

  //changes the input values for submission


  render() {

    const displayBounty = this.state.bounties.map(person =>{
      return <BountyList 
              key={person.id}
              person={person}
      />
    })
    
    return (
      <div>
        <Navbar />
        <div className="container">
          {displayBounty}
        </div>
        <NewBounty />
      </div>
    );
  }
}

export default App;

{/* <h3>{person.type}</h3>
            <h4>Name: {person.firstName} {person.lastName}</h4>
            <h6>Reward: {person.bountyAmount}</h6>
            <button onClick={this.handleDelete}>Delete</button> */}