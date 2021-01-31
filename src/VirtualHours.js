import React, { Component } from 'react';
import "./VirtualHours.css";

export default class VirtualHours extends Component {
    render() {
        return (
            <div className="virtualHours">
                <h1>Virtual Hours</h1>
                <h3>Meet With Our Friendly Representatives via Video Chat to Plan Your Future Trips.</h3>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col">
                            <div className="videoAppointment">
                                <h4>Your Details</h4>
                                <div className="row">
                                    <div className="col">

                                    </div>
                                    <div className="col">

                                    </div>
                                </div>
                                <form>
                                    <div className="form-row">
                                        <div className="form-group col-md-3">
                                            <label for="title">Title</label>
                                            <select id="title" className="form-control">
                                             <option selected>Choose...</option>
                                             <option>Mr.</option>
                                             <option>Mrs.</option>
                                             <option>Ms.</option>
                                             <option>Other</option>
                                            </select>
                                        </div>
                                        <div className="form-group col-md-4">
                                            <label for="firstName">First Name</label>
                                            <input type="text" className="form-control" id="firstName" placeholder="First Name"/>
                                        </div>
                                        <div className="form-group col-md-5">
                                            <label for="lastName">Last Name</label>
                                            <input type="text" className="form-control" id="lastName" placeholder="Last Name"/>
                                        </div>
                                    </div>
                                    <div className="form-row">
                                    <div className="form-group col-md-4">
                                            <label for="inputEmail4">Email</label>
                                            <input type="email" className="form-control" id="inputEmail4" placeholder="Email"/>
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="form-group col-md-6">
                                            <label for="phoneNumber">Phone Number</label>
                                            <input type="tel" className="form-control" id="phoneNumber" placeholder="1-(555)-555-5555"/>
                                        </div>
                                        <div className="form-group col-md-3">
                                            <label for="callTime">Best Time To Call You</label>
                                            <select id="callTime" className="form-control">
                                             <option selected>No Preference</option>
                                             <option>11am</option>
                                             <option>12pm</option>
                                             <option>1pm</option>
                                             <option>2pm</option>
                                            </select>
                                        </div>
                                    </div>
                                    <button type="submit" className="btn btn-primary">Submit</button>
                                </form>
                                <p>
                                
                                </p>
                                <div className="Disclaimer">
                                    <i></i>
                                    <p></p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <i></i>
                            <h2>Call A Specialist</h2>
                            <h5>1-800-###-####</h5>
                            <h6>Call Toll Free until 2pm EST</h6>
                            <hl></hl>
                            <i></i>
                            <h3>Virtual Hours (EST)</h3>
                            <h5>Monday</h5> <p>11 am - 2pm</p>
                            <h5>Wednesday</h5> <p>11 am - 2pm</p>
                            <h5>Friday</h5> <p>11 am - 2pm</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
