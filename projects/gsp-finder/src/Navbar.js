import React from 'react';
import { Link } from 'react-router-dom'


const Navbar = () => {
    return (
        <div>
            <nav>
                <div className="nav-wrapper">
                    <Link to='/'className="brand-logo"> Find a Pupper</Link>
                    <ul className="right hide-on-med-and-down">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/about'>About</Link></li>
                        <li><Link to='/pets'>Pets</Link></li>
                        <li><input className='Pet-Search' name='zip' placeholder='Please Insert ZIP Code'></input></li>
                        <li><a class="btn-small flow-text red-text text-lighten-3 blue-grey lighten-5">Search</a></li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};
export default Navbar;

