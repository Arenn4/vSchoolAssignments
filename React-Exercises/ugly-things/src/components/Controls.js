import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addUgly } from '../redux'
import { removeUgly } from '../redux'
import Display from 'react'

class Controls extends Component {
    constructor(props){
        super(props);

        this.state = {
            name: "",
            imgUrl: "",
            description: "" 
        }
        
    }

    handleChange = event =>{
        this.setState({ [event.target.name]: event.target.value })
    }
    handleSubmit = e =>{
        e.preventDefault()
        //this will take the local state values and add to our array
        //how do we take those values and call our function on the submit?
        const displayUgly = {
            name: this.state.name,
            imgUrl: this.state.imgUrl,
            description: this.state.description

        }
        if(this.state.name.length > 0 && this.state.imgUrl.length > 0 && this.state.description.length > 0){
            this.props.addUgly(displayUgly)
            this.setState(prevState => ({
                name: "",
                imgUrl: "",
                description: ""
            }))
        }
    }
    


    render() {
        
    return (
        <div>
            <form className='inputContainer' onSubmit={this.handleSubmit}>
                <input type="text" name='name' value ={this.state.name} onChange={this.handleChange} placeholder='Title'/>
                <input type="text" name='imgUrl' value ={this.state.imgUrl} onChange={this.handleChange} placeholder='Image Url'/>
                <input type="text" name='description' value ={this.state.description} onChange={this.handleChange} placeholder='Description'/>
                {/* <button>Submit</button> */}
                <button class="btn waves-effect waves-light" type="submit" name="action">Submit
                <i class="material-icons right">send</i>
                </button>
            </form>    
        </div>
        );
    };
}
//we connect to our redux to use the functions provided 
export default connect(null, { addUgly, removeUgly}) (Controls);