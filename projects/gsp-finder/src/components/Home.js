import React, { Component } from 'react';
import { connect } from 'react-redux'
import {randomImage} from '../redux'


let dog1 = "https://images.unsplash.com/photo-1500165974561-f16bc21927a3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=939d7da75cca443dd482fec64a2afadd&auto=format&fit=crop&w=1350&q=80"
let dog2 = "https://images.unsplash.com/photo-1528131252466-a990929e6d62?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e9c471ca147426675008997b66d7605a&auto=format&fit=crop&w=1350&q=80"
let dog3 = "https://images.unsplash.com/photo-1478254475213-0bffd484f46c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=3bd7a29c3482d8e37d3edc8635986d67&auto=format&fit=crop&w=1353&q=80"
let dog4 = "https://images.unsplash.com/photo-1526385265182-44590cd25648?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=291486061418451272ec68a5d41b14ea&auto=format&fit=crop&w=1350&q=80"

class Home extends Component {
      componentDidMount(){
            setInterval(this.props.randomImage, 8000)
      }

    render(){
        const images = [
            dog1,
            dog2,
            dog3,
            dog4
        ]
        
    return (
        <div>
            <div className='home-container'>
                
                <img className="home-fade" alt=""/>
                <img className='home-image' alt="" src={images[this.props.currentImage]}/>
                <h1 className='home-title'>Find Your New Best Friend!</h1>
            </div>
            
        </div>  
        )
    }
}
export default connect(state=>state, {randomImage}) (Home);
