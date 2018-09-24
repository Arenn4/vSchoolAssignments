import React, { Component, Fragment } from 'react';
import {connect} from 'react-redux';
import {getAnimals} from '../redux';
import './styles.css'

class Pets extends Component {
componentDidMount(){
    this.props.getAnimals()
}
    render(){
        return (
            <div className="container-page">
                { this.props.animals.map(animal => {
                    return (
                        <div className="dog-container">
                            <div className="col s8 m3">
                                <div className="card">
                                    <div className="card-image">
                                        <img className='image'style={{width: 400}}
                                         src=
                                             {animal.media.photos && animal.media.photos.photo['2']['$t'] 
                                             ?
                                             animal.media.photos && animal.media.photos.photo['2']['$t']
                                            :
                                            "data:image/png;base64,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" }
                                         />
                                        
                                        <span className="card-title red lighten-2">{animal.name['$t']}</span>
                                    </div>
                                        <div className="card-content">
                                            <p>{animal.age['$t']}</p>
                                            <p>{animal.sex['$t']}</p>
                                            <p>{animal.contact.city.$t}, {animal.contact.state.$t}</p>
                                            <p>{animal.description.$t}</p>
                                        </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>        
        );
    }
};
    
export default connect(state=>state, {getAnimals})(Pets);