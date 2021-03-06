import React from 'react';

const About = () => {
    return (
        <div className='about-container'>
            <h1 className='about-title'>About Us</h1>
            <p className="about-desc">My goal of this project was to be able to initially make an API call to pull information on available German Shorthaird Pointers around my home town. As I progressed through this project I added functionality to search by ZIP code around the United States. </p>
            <img className="about-image" alt="" src="https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/42671741/2/?bust=1536111581&width=1439" />
            <img className="about-image" alt="" src="https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/42493669/3/?bust=1534441130&width=1439" />
            <img className="about-image" alt="" src="https://brdhntr.files.wordpress.com/2012/03/dsc1937.jpg" />
        </div>
    );
};

export default About;