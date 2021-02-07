import React from 'react';
import './About.css';
import JehieliGreece from './Images/JehieliGreece.jpg';

function About() {
    return (
        <div className="About">
            <div className="aboutLandingPage">
                <div className="aboutText">
                    <p className="aboutTitle">
                        At Aeroua Travel, we believe in empowering individuals through global services
                        and travel, so that we can learn from each other; by sharing ideas.</p>
                </div>
            </div>
            <div className="row" id="visionRow">
                <div className="col-md-10" id="visionText">
                    <p>Vision</p>
                    <p>All people feels empowered through technology in global service and travel.</p>
                </div>
                <div className="col-md-2" id="visionImage">
                    <img src={JehieliGreece} alt="JehieliGreece" width={300} height={280}></img>
                </div>
            </div>
        </div>
    )
}

export default About
