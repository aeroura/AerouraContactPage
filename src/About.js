import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCogs, faStar, faCommentDots, faMap, faBell, faArrowRight, faClock, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './About.css';
import JehieliGreece from './Images/JehieliGreece.jpg';
import JehieliPortrait from './Images/JehieliPortrait.jpg';
import Oculus from './Images/Oculus.jpg';
import CityHallPark from './Images/CityHallPark.jpg';
import BatteryPark from './Images/BatteryPark.jpg';
import WorldTradeCenter from './Images/WorldTradeCenter.jpg';
import JehieliMuseum from './Images/JehieliMuseum.jpg';

function About() {
    return (
        <div className="About">
            {/* Landing Page Image */}
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
                    <p>To provide friendly quality service to travelers seeking cultural experiences.</p>
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
            <div className="adventurousTeam">
                <div className="adventurousTeamTitle"><h1>Our Adventurous Team</h1></div>
                {/* Jehieli Section */}
                <div className="row" id="teamSectionRow">
                    <div className="col-md-2" id="imagePortrait">
                        <img src={JehieliPortrait} alt="JehieliPortrait" width={200} height={200}></img>
                        <p className ="imagePortaitText">Josue Jehieli Bastidas</p>
                        <FontAwesomeIcon icon={faArrowRight} className="arrowIcon"/>
                    </div>
                    <div className="col-md-7" id="teamText">
                        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
                            et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                    </div>
                    <div className="col-md-3" id="imageSection">
                        <img src={CityHallPark} alt="CityHallPark" width={250} height={200} className="image"></img>
                        <p className ="imageText">City Hall Park</p>
                    </div>
                </div>
                {/* Joab Section */}
                <div className="row" id="teamSectionRow">
                    <div className="col-md-2" id="imagePortrait">
                        <img src={JehieliPortrait} alt="JehieliPortrait" width={200} height={200}></img>
                        <p className ="imagePortaitText">Joab Bastidas</p>
                        <FontAwesomeIcon icon={faArrowRight} className="arrowIcon"/>
                    </div>
                    <div className="col-md-7" id="teamText">
                        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
                            et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                    </div>
                    <div className="col-md-3" id="imageSection">
                        <img src={Oculus} alt="Oculus" width={250} height={200} className="image"></img>
                        <p className ="imageText">Oculus</p>
                    </div>
                </div>
                {/* Luis Section */}
                <div className="row" id="teamSectionRow">
                    <div className="col-md-2" id="imagePortrait">
                        <img src={JehieliPortrait} alt="JehieliPortrait" width={200} height={200}></img>
                        <p className ="imagePortaitText">Luis Ugalde</p>
                        <FontAwesomeIcon icon={faArrowRight} className="arrowIcon"/>
                    </div>
                    <div className="col-md-7" id="teamText">
                        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
                            et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                    </div>
                    <div className="col-md-3" id="imageSection">
                        <img src={BatteryPark} alt="BatteryPark" width={250} height={200} className="image"></img>
                        <p className ="imageText">Battery Park</p>
                    </div>
                </div>
                {/* Alexis Section */}
                <div className="row" id="teamSectionRow">
                    <div className="col-md-2" id="imagePortrait">
                        <img src={JehieliPortrait} alt="JehieliPortrait" width={200} height={200}></img>
                        <p className ="imagePortaitText">Alexis Sanchez</p>
                        <FontAwesomeIcon icon={faArrowRight} className="arrowIcon"/>
                    </div>
                    <div className="col-md-7" id="teamText">
                        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
                            et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                    </div>
                    <div className="col-md-3" id="imageSection">
                        <img src={WorldTradeCenter} alt="WorldTradeCenter" width={250} height={200} className="image"></img>
                        <p className ="imageText">World Trade Center</p>
                    </div>
                </div>
            </div>
            {/* Contact Us Section */}
            <div classame="contactUsSection">
                <div className="row" id="contactUsRow">
                    <div className="col-md-7">
                        <h2>Reach Out To Us</h2>
                        <h4>We love to hear from travelers and share their stories together. 
                            We get back to you within 24 hours.
                        </h4>
                        {/* Contact us form Section */}
                        <div className="contactUs">
                            <h4>Contact Us</h4>
                            <hr></hr>
                            <p>Fields Marked * are required</p>
                            {/* Form Tag */}
                            <form>
                                <div className="form-row">
                                    <div className="form-group col-md-3">
                                        <label for="firstName">First name</label>
                                        <input type="text" className="form-control" id="firstName" placeholder="First Name"/>
                                    </div>
                                    <div class="form-group col-md-5">
                                        <label for="LastName">Last name</label>
                                        <input type="text" className="form-control" id="lastName" placeholder="Last Name"/>
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div class="form-group col-md-10">
                                        <label for="QuestionsOrConcerns">Subject</label>
                                        <textarea class="form-control" id="QuestionsOrConcerns" rows="3">
                                        </textarea>
                                    </div>
                                </div>
                                <button type="submit" className="btn btn-primary">Submit</button>
                            </form>
                        </div>
                        {/* Virtual Hours Section */}
                        <div className="row" id="virtualHoursSection">
                            <div className="col-md-6">
                                <FontAwesomeIcon icon={faClock} size="3x" style={{ color: 'rgb(19, 143, 137)' }} />
                                <h3>Virtual Hours (EST)</h3>
                                <div className="table-responsive">
                                    <table className="table">
                                        <tbody>
                                            <tr>
                                                <td>Monday</td>
                                                <td>11 am - 2pm</td>
                                            </tr>
                                            <tr>
                                                <td>Wednesday</td>
                                                <td>11 am - 2pm</td>
                                            </tr>
                                            <tr>
                                                <td>Friday</td>
                                                <td>11 am - 2pm</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            {/* Call Specialist Section */}
                            <div className="col-md-6" id="callSpecialist">
                                <FontAwesomeIcon icon={faPhoneAlt} size="3x" style={{ color: 'rgb(19, 143, 137)' }} />
                                <h3>Call a Specialist</h3>
                                <p className="phoneNumber">1-800-###-####</p>
                                <p>Call toll free until 2pm EST</p>
                            </div>
                        </div>
                    </div>
                    {/* Pic of Jehieli in museum */}
                    <div className="col-md-5">
                        <img src={JehieliMuseum} alt="JehieliMuseum" width={700} height={800} ></img>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default About