import React from 'react'

const Color = props =>{


    const styles ={
        backgroundColor: `#${props.color}` //this is the list of colors
    }


    return(
        <div style={styles}>
             OHHH HAAYYYY DERRR FOLKS
        </div>   
    )
}

export default Color;