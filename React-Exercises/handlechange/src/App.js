import React, { Component } from 'react';


class Form extends Component {
    constructor (){
        super() 

        this.state = {
            myName: '',
            age: '',
            hairColor: '',
            employed: '',
            names: []
        }
    }

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value })
        console.log(this.state)
    }
    handleSubmit = event =>{
      event.preventDefault()
      this.state.names.push(this.state.myName)
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" name='myName' placeholder='Full Name' value={this.state.myName} onChange={this.handleChange}  />
                <input type="text" name='age' placeholder='Age' value={this.state.age} onChange={this.handleChange} />
                <input type="text" name='hairColor' placeholder='Hair Color' value={this.state.hair} onChange={this.handleChange} />
                <input type="text" name='employed' placeholder='Are you Employed?' value={this.state.job} onChange={this.handleChange} />
                <button>Submit</button>
                <h1>Name: {this.state.myName}</h1>
                <h1>Age: {this.state.age}</h1>
            </form>
        );
    }
}

export default Form;
