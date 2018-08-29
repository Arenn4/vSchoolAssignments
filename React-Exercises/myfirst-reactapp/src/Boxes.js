import React from 'react'

const Boxes = (props) =>{

        // const contain = {
        //     display: 'grid',

        // }

    return (
        <div >
            <div style={{backgroundColor: props.backgroundColor}}>{props.title}</div>
            <div style={{backgroundColor: props.backgroundColor}}>{props.subtitle}</div>
            <div style={{backgroundColor: props.backgroundColor}}>{props.description}</div>
        </div>
    )
}


export default Boxes