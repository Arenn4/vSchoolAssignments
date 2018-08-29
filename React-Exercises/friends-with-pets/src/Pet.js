import React from 'react'


const Pet = (props) =>{

    return(
        <div>
            <h5>name: {props.animal}</h5>
            <h5>breed: {props.breed}</h5>
        </div>
    )
}

export default Pet