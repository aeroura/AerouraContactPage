import React from 'react';
import './Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faVideo, faCheckSquare, faInfoCircle } from '@fortawesome/free-solid-svg-icons';

function Contact() {
    return (
        <div>
            <div className="virtualHours">
                <h1 style={{fontFamily: 'Spectral'}}>Virtual Hours</h1>
                <p style={{fontFamily: 'Karla'}}>Meet With Our Friendly Representatives via Video Chat to Plan Your Future Trips.</p>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-8" id="firstSection">
                            <div className="videoAppointment">
                                <p style={{fontFamily: 'Spectral'}}>Your Details</p>
                                <hr className="horizontalLine"></hr>
                                <div className="row" id="arrangeAppointmentSection">
                                    <div className="col-xl-2 col-lg-2 col-md-3 col-sm-2 col-xs-2" id="videoIconSection">
                                        <FontAwesomeIcon icon={faVideo} style={{ color: 'white'}} id="videoIcon" />
                                    </div>
                                    <div className="col-xl-10 col-lg-10 col-md-9 col-sm-10 col-xs-10" id="videoAppointmentInfo">
                                        <span className="videoAppointmentSpan">
                                            <p style={{fontFamily: 'Spectral'}}>Arrange a video appointment</p>
                                        </span>
                                        <div className="row" id="appointmentRequest">
                                           <p style={{fontFamily: 'Karla'}}>  <FontAwesomeIcon icon={faCheckSquare} size="2x" style={{ color: 'rgb(19, 143, 137)' }}/> <tab></tab>
                                           Request your appointment and a specialist will be in touch to confirm a date and time to suit you</p>
                                        </div>
                                    </div>
                                </div>
                                <form>
                                    <div className="form-row">
                                        <div className="form-group col-md-3">
                                            <label for="title" style={{fontFamily: 'Karla'}}>Title</label>
                                            <select id="title" className="form-control">
                                             <option selected>Choose...</option>
                                             <option>Mr.</option>
                                             <option>Mrs.</option>
                                             <option>Ms.</option>
                                             <option>Other</option>
                                            </select>
                                        </div>
                                        <div className="form-group col-md-4">
                                            <label for="firstName" style={{fontFamily: 'Karla'}}>First Name</label>
                                            <input type="text" className="form-control" id="firstName" placeholder="First Name"/>
                                        </div>
                                        <div className="form-group col-md-5">
                                            <label for="lastName" style={{fontFamily: 'Karla'}}>Last Name</label>
                                            <input type="text" className="form-control" id="lastName" placeholder="Last Name"/>
                                        </div>
                                    </div>
                                    <div className="form-row">
                                    <div className="form-group col-md-6">
                                            <label for="email" style={{fontFamily: 'Karla'}}>Email</label>
                                            <input type="email" className="form-control" id="email" placeholder="Email"/>
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="form-group col-md-6">
                                            <label for="phoneNumber" style={{fontFamily: 'Karla'}}>Phone Number</label>
                                            <input type="tel" className="form-control" id="phoneNumber" placeholder="1-(555)-555-5555"/>
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label for="callTime" style={{fontFamily: 'Karla'}}>Best Time To Call You</label>
                                            <select id="callTime" className="form-control">
                                             <option selected>No Preference</option>
                                             <option>11am</option>
                                             <option>12pm</option>
                                             <option>1pm</option>
                                             <option>2pm</option>
                                            </select>
                                        </div>
                                    </div>
                                </form>
                                <p className="sub-text" style={{fontFamily: 'Source Sans Pro'}}>
                                We ask you for your number so that one of our specialists can call or text you to discuss your travel plans. 
                                Standard rates may apply. By submitting this form, you agree to us getting in touch with you in this way.
                                </p>
                                <div className="row" id="Disclaimer">
                                    <div className="col-md-1">
                                        <FontAwesomeIcon icon={faInfoCircle} size="2x"/>
                                    </div>
                                    <div className="co-md-11">
                                        <p style={{fontFamily: 'Source Sans Pro'}}>Your privacy is paramount to Aeroura Travel and we will never share your personal data with anyone.
                                            For further info, please see our <a href="www.facebook.com">privacy policy.</a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="hours">
                                <FontAwesomeIcon icon={faClock} size="3x" style={{ color: 'rgb(19, 143, 137)' }} />
                                <h3 style={{fontFamily: 'Spectral'}}>Virtual Hours (EST)</h3>
                                <div className="table-responsive">
                                    <table className="table">
                                        <tbody style={{fontFamily: 'Karla'}}>
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
                            <hr className="horizontalLine"></hr>
                        <div>
                        <div className="travelPlansForm">
                            <p style={{fontFamily: 'Spectral'}}>Your Travel Plans</p>
                        <hr className="horizontalLine"></hr>
                            <p className="sub-text" style={{fontFamily: 'Source Sans Pro'}}>Fields marked* are required</p>  
                        <form>
                            <div className="form-row">
                                <div className="form-group col-md-8">
                                    <label style={{fontFamily: 'Karla'}}>Destination</label>
                                    <select id="title" className="form-control">
                                        <option selected>Choose...</option>
                                        <option>New York</option>
                                        <option>Mexico</option>
                                        <option>Peru</option>
                                        <option>Other</option>
                                    </select>
                                </div>
                            </div>
                            <div className="form-row">
                                <div class="form-group col-md-11">
                                    <label for="QuestionsOrConcerns" style={{fontFamily: 'Karla'}}>TravelPlans</label>
                                    <textarea class="form-control" id="QuestionsOrConcerns" rows="3" 
                                        placeholder= "E.g. Number of travelers, duration, travel dates, level of accommodations">
                                    </textarea>
                                </div>
                            </div>
                            
                        </form>
                    </div>
                    <button type="submit" className="btn btn-primary" id="submitButton" style={{fontFamily: 'Source Sans Pro'}}>Submit Inquiry</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;
