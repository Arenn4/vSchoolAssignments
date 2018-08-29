import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state ={
      backgroundColor: 'cyan',
      left: 0,
      top: 0
    }
  }

  componentDidMount(){
    window.addEventListener('keydown', this.moveBox)
  }

  componentWillUnmount(){
    window.addEventListener('keydown', this.moveBox)
  }

  moveBox = e =>{
    if(e.code === 'ArrowUp'){
      this.setState(prevState => ({
        top: prevState.top - 25
      }))
    }else if(e.code === 'ArrowDown'){
      this.setState(prevState => ({
        top: prevState.top + 25
      }))
    }else if(e.code === 'ArrowLeft'){
      this.setState(prevState => ({
        left: prevState.left - 25
      }))
    }else if(e.code === 'ArrowRight'){
      this.setState(prevState => ({
        left: prevState.left + 25
      }))
    }
  }

  componentWillMount(){
    window.addEventListener('keydown', e =>{
      if(e.code === 'KeyB'){
        this.setState({
          backgroundColor: 'blue'
        })
      }
    })
    //Axios requests (AJAX) request
    //Adding window event listeners
    //HTML <canvas>
  }
componentWillUnmount(){
  window.addEventListener('keydown', null)
}

  render(){

    const styles ={
      container: {
        backgroundColor: this.state.backgroundColor
      },
      box: {
        backgroundColor: 'coral',
        width: '100px',
        height: '100px',
        transition: '1s'
      }
    }

  return (
    <div>
      <div style={ styles.container }>Hey Werld</div>
      <div style={ styles.box }></div>
    </div>
    )
  }
}

export default App;
