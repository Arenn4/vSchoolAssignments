import React from 'react'



const Cards = (props) =>{

    const styles = {
        border: '1px solid black',
        width: '33%',
        padding: '20px',
        backgroundColor: ''
    }

    return (
        <div>
            <div style={styles}>
                <h2>{props.place}</h2>
                <h4>{props.price}</h4>
                <h5>{props.season}</h5>
            </div>
        </div>
    )
}

export default Cards