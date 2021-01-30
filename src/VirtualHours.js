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
                                <form id="contact-form" >
                                    <div className="form-group">
                                        <label htmlFor="name">Name</label>
                                        <input type="text" className="form-control" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="exampleInputEmail1">Email address</label>
                                        <input type="email" className="form-control" aria-describedby="emailHelp" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="message">Message</label>
                                        <textarea className="form-control" rows="5"></textarea>
                                    </div>
                                    <button type="submit" className="btn btn-primary">Submit</button>
                                </form>
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
