import React, { Component } from 'react';
import axios from 'axios'

class NewBounty extends Component{
    constructor(){
        super()
        this.state = {
            bounties: [],
            status: true,
            firstName: "",
            lastName: "",
            bountyAmount: "",
            type: ""
        }
    }

    handleSubmit = e =>{
        const addBounty = {
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                bountyAmount: this.state.bountyAmount,
                type: this.state.type
        }
        axios.post('/bounties', addBounty).then(res =>{
          this.setState(prevState =>({
            bounties: [...prevState, addBounty]
          }))

        })
    }

    handleChange = event =>{
        this.setState({ [event.target.name]: event.target.value })
    }

    render(){
    return (
        <div>
            <div className='new-bounty'>
            <form onSubmit={this.handleSubmit} class="col s12">
              <div class="row">
                <div class="input-field col s6">
                  <input id="first_name" type="text" name="firstName" value={this.state.firstName} class="validate" onChange={this.handleChange}/>
                  <label for="first_name">First Name</label>
                </div>
                <div class="input-field col s6">
                  <input id="last_name" type="text" name="lastName" value={this.state.lastName} class="validate" onChange={this.handleChange}/>
                  <label for="last_name">Last Name</label>
                </div>
              </div>
            
              <div class="row">
                <div class="input-field col s12">
                  <input id="bounty" type="text" name="bountyAmount"value={this.state.bountyAmount} class="validate" onChange={this.handleChange}/>
                  <label for="bounty">Bounty Amount</label>
                </div>
              </div>
              <div class="row">
                <div class="input-field col s12">
                  <input id="alliance-type" type="text" name="type" value={this.state.type} class="validate" onChange={this.handleChange}/>
                  <label for="type">Type: (Jedi or Sith)</label>
                </div>
              </div>
              <button class="waves-effect #ffb74d orange lighten-2 waves-light btn-small">Button</button>
            </form>
          </div>
        </div>
        );
    }
};

export default NewBounty;