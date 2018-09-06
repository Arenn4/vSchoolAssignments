import React from 'react';
import { connect } from 'react-redux'
import './style.css'

const Display = (props) => {
    return (
        <div>
            <div className='contain'>
                <h1>{props.minutes}:{props.seconds}:{props.milliSeconds}</h1>
            </div>
        </div>
    );
};

export default connect(state =>state, {})(Display);