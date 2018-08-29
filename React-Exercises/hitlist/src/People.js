import React from 'react';
import './people.css'

const People = (props) => {
    return (
        <div className='hitcontain'>
            <p className='names'>{props.name}</p>
            <img src={props.image}></img>
        </div>
    );
};

export default People;