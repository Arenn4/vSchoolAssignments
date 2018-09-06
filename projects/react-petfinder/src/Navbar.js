import React from 'react';
import { Link } from 'react-router-dom'


const Navbar = () => {
    return (
        <div>
            <nav>
                <div className="nav-wrapper">
                    <a href="#!" className="brand-logo">Find a Pupper</a>
                    <ul className="right hide-on-med-and-down">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/about'>About</Link></li>
                        <li><Link to='/pets'>Pets</Link></li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};
export default Navbar;






