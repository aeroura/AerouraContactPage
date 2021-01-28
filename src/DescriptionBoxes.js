import React, { Component } from 'react';
import "./DescriptionBoxes.css";

export default class DescriptionBoxes extends Component {
    render() {
        return (
            <div className="DescriptionBoxes">
                <div className="PlacesToSee">
                    <h1>Places to See- NYC</h1>
                    <image></image>
                    <h6>Brookfield Place</h6>
                </div>
                <div className="TravelCounselor">
                    <div className="row">
                        <div className="col">
                            <image></image>
                        </div>
                        <div className="col">
                            <div className="Name">
                                <h1>Josue Jehieli</h1>
                                <h2>TravelCounselor</h2>
                            </div>
                            <div className="ContactInfo">
                                <p>347-619-2214</p>
                                <p>Josue@aeroura.com</p>
                                <button>Schedule an Appointment</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="VirtualHours">
                <div className="row">
                        <div className="col">
                            <image></image>
                        </div>
                        <div className="col">
                            <div className="Title">
                                <h4>VirtualHours</h4>
                                <h6>Monday, Wednesday, Friday</h6>
                                <h4>11am - 2pm (EST)</h4>
                            </div>
                            <div className="ContactInfo">
                                <button className="JoinHere">Join Here</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
