import React, { Component } from 'react';
import './App.css';
import People from './People'

class App extends Component {
  constructor(){
    super()
    this.state = {
      fName: '',
      lName: '',
      email: '',
      birth: '',
      phone: '',
      favFood: '',
      introduction: '',
      names: []
    }
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value
                    // [event.target.name]: event.target.value,
                    // [event.target.name]: event.target.value,
                    // [event.target.name]: event.target.value,
                    // [event.target.name]: event.target.value,
                    // [event.target.name]: event.target.value,
     })
  }

  addBadge = event =>{
    event.preventDefault()
    // this.state.names.push(this.state.myName)
    this.setState(prevState =>{
      const displayNames = [
        ...prevState.names, 
        {
          fName: prevState.fName,
          lName: prevState.lName,
          email: prevState.email,
          birth: prevState.birth,
          phone: prevState.phone,
          favFood: prevState.favFood,
          introduction: prevState.introduction
        }
      ]
      
      return{names: displayNames, fName: "", lName: '', email: '', birth: '', phone: '', favFood: '', introduction: '',}
    })
  }

  render() {
    const displayPeople = this.state.names.map((data, i) =>{
      return <People key={data.name+i}
                    name={data.fName + '' + data.lName}
                    email={data.email}
                    birth={data.birth}
                    phone={data.phone}
                    favFood={data.favFood}
                    introduction={data.introduction}
      />
    })

    return (
      <div >
        <form className='badge' name='badge' onSubmit={this.addBadge}>
          <input type="text" className='input1' name='fName' value={this.state.fName} onChange={this.handleChange} placeholder='First Name' required/>
          <input type="text" className='input2' name='lName' value={this.state.lName} onChange={this.handleChange} placeholder='Last Name'required/>
          <input type="text" className='input3' name='email' value={this.state.email} onChange={this.handleChange} placeholder='Enter Email'required/>
          <input type="text" className='input4' name='birth' value={this.state.birth} onChange={this.handleChange} placeholder='Place of Birth'required/>
          <input type="text" className='input5' name='phone' value={this.state.phone} onChange={this.handleChange} placeholder='Phone Number'required/>
          <input type="text" className='input6' name='favFood' value={this.state.favFood} onChange={this.handleChange} placeholder='Favorite Food'required/>
          <input type="text" className='intro' name='introduction' value={this.state.introduction} onChange={this.handleChange} placeholder='Tell us about yourself!'required/>
          <button>Submit</button>
        </form>
        {displayPeople}
      </div>
    );
  }
}

export default App;
