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
        axios.delete(`/bounties/${this.props.person._id}`).then(res =>{
          this.setState({
            bounties: res.data
          })
        })
      }

      updateBounty = e =>{
          e.preventDefault()
          // e.persist()
        const changeBounty ={
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            bountyAmount: this.state.bountyAmount,
            type: this.state.type
        }
        
        axios.put('/bounties/' + this.props.person._id, changeBounty).then(res =>{
          this.props.getdata()
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
                      <img className='bounty-img'src={this.props.person.img ? this.props.person.img : "data:image/png;base64,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"}/>
                      <span class="card-title">{this.props.person.firstName} {this.props.person.lastName}</span>
                      <button onClick={this.handleDelete} id={this.props.person._id} class="btn-floating halfway-fab waves-effect waves-light red"><i class="material-icons">close</i>
                      </button>
                      {/* Start edit bounty */}
                      {this.state.status
                      ?
                        <a onClick={this.changeDisplay} class="btn-floating waves-effect left halfway-fab waves-light green"><i class="material-icons">add</i>
                        </a>
                      :
                      <div onDoubleClick={this.changeDisplay} class="row">
                        <form onSubmit={this.updateBounty} id={this.props.person._id} class="col s12">
                          <div className="row">
                            <div className="input-field col s6">
                              <input id="first" type="text" className="validate" name="firstName" value={this.state.firstName} onChange={this.handleChange}/>
                              <label for="first">First Name</label>
                            </div>
                            <div className="input-field col s6">
                              <input id="last" type="text" className="validate" name="lastName" value={this.state.lastName} onChange={this.handleChange}/>
                              <label for="last">Last Name</label>
                            </div>
                          </div>
                        
                          <div className="row">
                            <div className="input-field col s12">
                              <input id="upbounty" type="text" className="validate" name='bountyAmount' value={this.state.bountyAmount} onChange={this.handleChange}/>
                              <label for="bounty">Bounty Amount</label>
                            </div>
                          </div>
                          <div className="row">
                            <div className="input-field col s12">
                              <input id="alliance-type" type="text" className="validate" name='type' value={this.state.type} onChange={this.handleChange}/>
                              <label for="type">Type: (Jedi or Sith)</label>
                            </div>
                          </div>
                          <button className="waves-effect #2e7d32 green darken-3 waves-light btn-small">Button</button>
                        </form>
                      </div>
                      }
                      {/* end edit bounty */}
                    </div>
                    <div class="card-content">
                      <h6>{this.props.person.type}</h6>
                      <p>Reward: {this.props.person.bountyAmount}</p>
                      <p>ID: {this.props.person._id}</p>
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