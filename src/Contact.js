import React from 'react';
import './Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faVideo, faCheckSquare, faInfoCircle } from '@fortawesome/free-solid-svg-icons';

function Contact() {
    return (
        <div className="app-contact">
            {/* Full Form Section */}
            <div className="virtualHours">
                <h1>Virtual Hours</h1>
                <p>Meet With Our Friendly Representatives via Video Chat to Plan Your Future Trips.</p>
                <div className="container-fluid" id="contactFormSection">
                    {/* Form video icon and description Section */}
                            <div className="videoAppointment">
                                <p>Your Details</p>
                                <hr className="horizontalLine"></hr>
                                <div className="row" id="arrangeAppointmentSection">
                                    <div className="col-xl-1 col-lg-1 col-md-2 col-sm-1 col-xs-1" id="videoIconSection">
                                        <FontAwesomeIcon icon={faVideo} style={{ color: 'white'}} id="videoIcon" />
                                    </div>
                                    <div className="col-xl-10 col-lg-10 col-md-9 col-sm-10 col-xs-10" id="videoAppointmentInfo">
                                        <span className="videoAppointmentSpan">
                                            <p>Arrange a video appointment</p>
                                        </span>
                                        <div className="row" id="appointmentRequest">
                                           <p>  <FontAwesomeIcon icon={faCheckSquare} size="2x" style={{ color: 'rgb(19, 143, 137)' }}/> <tab></tab>
                                           Request your appointment and a specialist will be in touch to confirm a date and time to suit you</p>
                                        </div>
                                    </div>
                                </div>
                                {/* Prefix */}
                                <form className ="scheduleTripForm">
                                    <div className="form-row">
                                        <div className="form-group col-md-2">
                                            <label for="title">Title</label>
                                            <select id="title" className="form-control">
                                             <option selected>Choose...</option>
                                             <option>Mr.</option>
                                             <option>Mrs.</option>
                                             <option>Ms.</option>
                                             <option>Other</option>
                                            </select>
                                        </div>
                                        {/* First Name */}
                                        <div className="form-group col-md-3">
                                            <label for="firstName">First Name</label>
                                            <input type="text" className="form-control" id="firstName" placeholder="First Name"/>
                                        </div>
                                        {/* Last Name */}
                                        <div className="form-group col-md-3">
                                            <label for="lastName">Last Name</label>
                                            <input type="text" className="form-control" id="lastName" placeholder="Last Name"/>
                                        </div>
                                        {/* Email */}
                                        <div className="form-group col-md-4">
                                            <label for="email">Email</label>
                                            <input type="email" className="form-control" id="email" placeholder="Email"/>
                                        </div>
                                    </div>
                                    {/* Phone Number */}
                                    <div className="form-row">
                                        <div className="form-group col-md-4">
                                            <label for="phoneNumber">Phone Number</label>
                                            <input type="tel" className="form-control" id="phoneNumber" placeholder="1-(555)-555-5555"/>
                                        </div>
                                        {/* Best time to call */}
                                        <div className="form-group col-md-4">
                                            <label for="callTime">Best Time To Call You</label>
                                            <select id="callTime" className="form-control">
                                             <option selected>No Preference</option>
                                             <option>8am</option>
                                             <option>9am</option>
                                             <option>10am</option>
                                             <option>11am</option>
                                             <option>12pm</option>
                                             <option>1pm</option>
                                             <option>2pm</option>
                                             <option>3pm</option>
                                             <option>4pm</option>
                                             <option>5pm</option>
                                             <option>6pm</option>
                                            </select>
                                        </div>
                                        {/* More info text field */}
                                            <div class="form-group col-md-4">
                                                <label for="QuestionsOrConcerns">TravelPlans</label>
                                                <textarea class="form-control" id="QuestionsOrConcerns" rows="3" 
                                                    placeholder= "E.g. Number of travelers, duration, travel dates, level of accommodations">
                                                </textarea>
                                            </div>
                                    </div>
                                    {/* Submit Button */}
                                    <div className="form-row">
                                        <div className="col">
                                           <button type="submit" className="submitButton btn btn-primary">Submit</button> 
                                        </div>
                                    </div>               
                                </form>
                                {/* Disclaimer Section */}
                                <p className="sub-text">
                                We ask you for your number so that one of our specialists can call or text you to discuss your travel plans. 
                                Standard rates may apply. By submitting this form, you agree to us getting in touch with you in this way.
                                </p>
                                {/* Disclaimer icon */}
                                <div className="row" id="Disclaimer">
                                    <div className="col-md-1">
                                        <FontAwesomeIcon icon={faInfoCircle} size="2x"/>
                                    </div>
                                    {/* Privacy Policy */}
                                    <div className="co-md-11">
                                        <p>Your privacy is paramount to Aeroura Travel and we will never share your personal data with anyone.
                                            For further info, please see our <a href="www.facebook.com">privacy policy.</a>
                                        </p>
                                    </div>
                                </div>
                            </div>                       
                </div>
            </div>
        </div>
    )
}

export default Contact;
