import React, {Component} from 'react';
import Navbar from '../Navbar'
import Body from '../Body'
import Products from '../Products'
// import Brand from '../Products/Brand'
import ContactUs from '../ContactUs'
import Footer from '../Footer'
import GPS from '../GPS'
import Header from '../Header'
import './styles.css'

class App extends Component {
  constructor(){
    super()
    this.state = {
      status: true
    };
  }

  changeDisplay = e =>{
    this.setState(prevState =>{
      return{
      status: !prevState.status
      }
    })
  }
  
  
  render(){
  return(
    <div className='container'>
      <Header />
      <Navbar status={this.state.status} changeDisplay={this.changeDisplay}/>
      <Body />
      <Products />
      <ContactUs />
      <GPS />
      <Footer />
    </div>
  )
}
}

export default App;
