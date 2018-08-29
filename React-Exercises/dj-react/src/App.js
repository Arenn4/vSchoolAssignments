import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super()

    this.state = {
        bgColor: 'black'
    }
}

smallChange = () => {
  if(this.state.bgColor === 'black'){
    this.setState({
      bgColor: 'white'
    })
  }else if(this.state.bgColor === 'white'){
    this.setState({
      bgColor: 'black'
    })
  }
}
partyChange = event => {
  if(className === 'topleft' || className ==='topright' && this.state.bgColor === 'black' || this.state.bgColor === 'white' ){
    this.setState({
      bColor: 'purple'
    })
  }else if(this.state.bgColor === 'purple' && className==='topleft' || this.state.bgColor === 'purple' && className==='topright'){
    this.setState({
      bColor: 'black'
    })
  }
}

  render() {
    return (
      <div>
        <button className='btn2' onClick={this.partyChange}>Party DJ</button>
        <button className='btn1' onClick={this.smallChange}>Small DJ</button>
        <div className='boardcontainer'>
          <div style={{backgroundColor:this.state.bgColor}} className='topleft'></div>
          <div style={{backgroundColor:this.state.bgColor}}  className='topright'></div>
          <div style={{backgroundColor:this.state.bgColor}}  className='bottomleft'></div>
          <div style={{backgroundColor:this.state.bgColor}}  className='bottomright'></div>
        </div>
      </div>
    );
  }
}

export default App;