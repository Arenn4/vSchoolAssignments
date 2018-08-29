import React from 'react'


const Superhero = (props) =>{
    const getPhrase =() =>{
        alert(props.catchphrase)
    }
    return (
        <div>
            <h1>{props.name}</h1>
            <h3>{props.superpowers}</h3>
            <img src={props.image}/>
            <button className='App' onClick={getPhrase}>
                Get Catchphrase!
            </button>
        </div>
    )
}



export default Superhero