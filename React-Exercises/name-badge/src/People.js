import React from 'react';
import './People.css'

const People = (props) => {
    return (
        <div>
            <div className='badge1'>
                <div className='badgetitle'>Badge:</div>
                <div className='name1'>Name: {props.name}</div>
                <div className='email'>Enter Email: {props.email}</div>
                <div className='birth'>Place of Birth: {props.birth}</div>
                <div className='phone'>Phone Number:{props.phone}</div>
                <div className='food'>Favorite Food: {props.favFood}</div>
                <div className='introResponse'>{props.introduction}</div>
            </div>
        </div>
    );
};

export default People;

