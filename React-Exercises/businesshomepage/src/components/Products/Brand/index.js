import React from 'react'
import './styles.css'


const Brand = (props) => {

    return (
        <div className='prodcontainer'>
            <h1 className='prodname'>{props.name}</h1>
            <p className='prodabv'>{props.abv}</p>
            <img className='prodimg' src={props.image}/>
            <p className='proddesc'>{props.description}</p>
        </div>
    )
}

export default Brand