import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCogs, faStar, faCommentDots, faMap, faBell } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './About.css';
import JehieliGreece from './Images/JehieliGreece.jpg';
import Oculus from './Images/Oculus.jpg';

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
            {/* Vision Section */}
            <div className="row" id="visionRow">
                <div className="col-md-10" id="visionText">
                    <p>Vision</p>
                    <p>All people feels empowered through technology in global service and travel.</p>
                </div>
                <div className="col-md-2" id="visionImage">
                    <img src={JehieliGreece} alt="JehieliGreece" width={300} height={280}></img>
                </div>
            </div>
            {/* Mission Section */}
            <div className="row" id="missionRow">
                <div className="col-md-2" id="missionImage">
                    <img src={Oculus} alt="Oculus" width={300} height={280}></img>
                </div>
                <div className="col-md-10" id="missionText">
                    <p>MISSION</p>
                    <p>To prvide friendly quality service to travelers seeking cultural experiences.</p>
                </div>
            </div>
            {/* Values Section 1 */}
            <div className="ourValues">
                <h3>Our Values</h3>
                <div className="row" id="values1">
                    <div className="col-md-4">
                       <h4><FontAwesomeIcon icon={faCogs} style={{ color: 'rgb(19, 143, 137)' }} /> Resourcefulness</h4>
                       <p>We may not always have the answer, but we are committed to finding it.</p>
                    </div>
                    <div className="col-md-4">
                        <h4><FontAwesomeIcon icon={faStar} style={{ color: 'rgb(19, 143, 137)' }} /> Honesty</h4>
                       <p>We stand by the truth and what is best for our customers, even if it may cost us business.</p>
                    </div>
                    <div className="col-md-4">
                        <h4><FontAwesomeIcon icon={faCommentDots} style={{ color: 'rgb(19, 143, 137)' }} /> Communication</h4>
                       <p>Communication is clear and concise, and always necessary throughout.</p>
                    </div>
                </div>
                {/* Values Section 2 */}
                <div className="row" id="values2">
                    <div className="col-md-4">
                       <h4><FontAwesomeIcon icon={faMap} style={{ color: 'rgb(19, 143, 137)' }} /> Planning</h4>
                       <p>We may not always have the answer, but we are committed to finding it.</p>
                    </div>
                    <div className="col-md-4">
                        <h4><FontAwesomeIcon icon={faBell} style={{ color: 'rgb(19, 143, 137)' }} /> Service</h4>
                       <p>We may not always have the answer, but we are committed to finding it.</p>
                    </div>
                    <div className="col-md-4">
                        <img src={JehieliGreece} alt="JehieliGreece" width={440} height={280} id="valuesImage"></img>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
