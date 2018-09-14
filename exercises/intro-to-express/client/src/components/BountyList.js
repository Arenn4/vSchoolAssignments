import React, { Component } from 'react';
import axios from 'axios'

class BountyList extends Component{
    constructor(props){
        super(props)
        this.state ={
            status: true,
            firstName: "",
            lastName: "",
            bountyAmount: "",
            type: ""
        }
    }

    changeDisplay = e =>{
        this.setState(prevState =>{
          return{
          status: !prevState.status
          }
        })
      }

    handleDelete = e =>{
        axios.delete(`/bounties/${this.props.person.id}`).then(res =>{
          this.setState({
            bounties: res.data
          })
        })
      }

      updateBounty = e =>{
        
        const changeBounty ={
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            bountyAmount: this.state.bountyAmount,
            type: this.state.type
        }
        axios.put('/bounties/' + e.target.id, changeBounty).then(res =>{
          this.setState(prevState=>({
            bounties: [...prevState, res.changeBounty]
          }))
        })
      }

      handleChange = event =>{
        this.setState({ [event.target.name]: event.target.value })
    }

    

    render(){
    return (
        <div>
            <form className='card-container'>
              <div class="row">
                <div class="col s12 m6">
                  <div className="card">
                    <div className="card-image">
                      <img className='bounty-img'src={this.props.person.img ? this.props.person.img : "https://materializecss.com/images/sample-1.jpg"}/>
                      <span class="card-title">{this.props.person.firstName} {this.props.person.lastName}</span>
                      <button onClick={this.handleDelete} id={this.props.person.id} class="btn-floating halfway-fab waves-effect waves-light red"><i class="material-icons">close</i>
                      </button>
                      {/* Start edit bounty */}
                      {this.state.status
                      ?
                        <a onClick={this.changeDisplay} class="btn-floating waves-effect left halfway-fab waves-light green"><i class="material-icons">add</i>
                        </a>
                      :
                        <div onDoubleClick={this.changeDisplay} class="row">
                        <form onSubmit={this.updateBounty} id={this.props.person.id} class="col s12">
                          <div class="row">
                            <div class="input-field col s6">
                              <input id="first" type="text" class="validate" name="firstName" value={this.state.firstName} onChange={this.handleChange}/>
                              <label for="first">First Name</label>
                            </div>
                            <div class="input-field col s6">
                              <input id="last" type="text" class="validate" name="lastName" value={this.state.lastName} onChange={this.handleChange}/>
                              <label for="last">Last Name</label>
                            </div>
                          </div>
                        
                          <div class="row">
                            <div class="input-field col s12">
                              <input id="upbounty" type="text" class="validate" name='bountyAmount' value={this.state.bountyAmount} onChange={this.handleChange}/>
                              <label for="bounty">Bounty Amount</label>
                            </div>
                          </div>
                          <div class="row">
                            <div class="input-field col s12">
                              <input id="alliance-type" type="text" class="validate" name='type' value={this.state.type} onChange={this.handleChange}/>
                              <label for="type">Type: (Jedi or Sith)</label>
                            </div>
                          </div>
                          <button class="waves-effect #2e7d32 green darken-3 waves-light btn-small">Button</button>
                        </form>
                      </div>
                      }
                      {/* end edit bounty */}
                    </div>
                    <div class="card-content">
                      <h6>{this.props.person.type}</h6>
                      <p>Reward: {this.props.person.bountyAmount}</p>
                      <p>ID: {this.props.person.id}</p>
                    </div>
                  </div>
                </div>
              </div>
            </form>
        </div>
    );
    }
};

export default BountyList;