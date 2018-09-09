import React from 'react';
import { Link } from 'react-router-dom'
import './footer.css'

const Footer = () => {
    return (
        <div>
            <footer className="page-footer">
                <div className="container">
                  <div className="row">
                    <div className="col l6 s12">
                      <h5 className="white-text">Additional Information</h5>
                      <p className="grey-text text-lighten-4">This is my first attempt using materialize and material UI within the same project to combine components of both CSS frameworks.</p>
                    </div>
                    <div className="col l4 offset-l2 s12">
                      <h5 className="white-text">Jump to Pages</h5>
                      <ul>
                        <li> <Link className="grey-text text-lighten-3" to="/">Jump to Home</Link></li>
                        <li> <Link className="grey-text text-lighten-3" to="/about">Jump to About</Link></li>
                        <li> <Link className="grey-text text-lighten-3" to="/pets">Jump to Pets</Link></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="footer-copyright">
                  <div className="container">
                  <a className="grey-text text-lighten-4 left" href="/www.petfinder.com/developers/api-docs/">PetFinder API </a>
                  <a className="grey-text text-lighten-4 right" href="www.petfinder.com">Petfinder.com</a>
                  </div>
                </div>
        </footer>
        </div>
    );
};

export default Footer;