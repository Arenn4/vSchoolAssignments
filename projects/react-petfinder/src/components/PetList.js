import React, { Component } from 'react';
import {connect} from 'react-redux';
import {getAnimals} from '../redux';

class PetList extends Component {
    componentDidMount(){
        this.props.getAnimals()
    }
    render(){
        console.log(this.props.getAnimals)
        return (
            <div>
                {this.props.animals.map(animal=>{
                    return <Pets {...animal}/>
                })}
            </div> 
            )
    };
};

export default connect(state=>state, {getAnimals})(PetList);