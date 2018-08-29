import React from 'react'

const Person = (props) =>{

    return(
        <div>
            <h3>{ props.name }</h3>
            <h4>{ props.mass }</h4>
            <h5>{ props.height }</h5>
        </div>
    )
}

export default Person;