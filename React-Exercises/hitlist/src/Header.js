import React from 'react';
import './header.css'

const Header = () => {
    return (
        <div className='header'>
            <img className='donnie' src='data:image/jpeg;base64,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'></img>
            <nav className='title'>Don Corleone's Hit List</nav>
        </div>
    );
};

export default Header;