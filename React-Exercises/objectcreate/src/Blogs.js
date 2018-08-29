import React from 'react'
import './blog.css'

const Blogs = (props) =>{

    return (
        <div className='blogsContainer'>
            <div className='articleBlock'>
                <h1>{props.title}</h1>
                <h3>{props.subtitle}</h3>
                <h6>Posted by: {props.author} on {props.datePosted}</h6>
            </div>
        </div>
    )
}


export default  Blogs