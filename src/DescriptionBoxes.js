import React, { Component } from 'react';
import JehieliProfessional from './Images/JehieliPortrait.jpg';
import BrookfieldPlace from './Images/BrookfieldPlace.jpg';
import JehieliMountains from './Images/JehieliMountains.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhoneAlt, faClock } from '@fortawesome/free-solid-svg-icons';
import "./DescriptionBoxes.css";

export default class DescriptionBoxes extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col">
                        <h4>Places to See - NYC</h4>
                        <div className="PlacesToSee">
                            <img src={BrookfieldPlace} alt="BrookfieldPlace" width={610} height={270} mode='fit'></img>
                            <h6>Brookfield Place - </h6>
                        </div>
                    </div>
                    <div className="col">
                        <div className="TravelCounselor">
                            <div className="row">
                                <div className="col-md-3">
                                    <img src={JehieliProfessional} alt="Josue" width={200} height={300}></img>
                                </div>
                                <div className="col-md-9">
                                    <div className="Name">
                                        <h3>Josue Jehieli Bastidas</h3>
                                        <h5>Travel Counselor</h5>
                                    </div>
                                    <div className="ContactInfo">
                                    
                                        <p><FontAwesomeIcon icon={faPhoneAlt} style={{ color: 'rgb(19, 143, 137)' }} /> (347)-619-2214</p>
                                        <p><FontAwesomeIcon icon={faEnvelope} style={{ color: 'rgb(19, 143, 137)' }} /> Josue@aeroura.com</p>
                                        <button type="submit" className="btn btn-primary">Schedule an Appointment</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="VirtualHours">
                            <div className="row">
                                <div className="col-md-7">
                                    <img src={JehieliMountains} alt="JehieliMountains" width={350} height={300} mode='fit'></img>
                                </div>
                                <div className="col-md-5">
                                    <div className="Title">
                                        <h4><FontAwesomeIcon icon={faClock} style={{ color: 'rgb(19, 143, 137)' }} /> Virtual Hours</h4>
                                        <h6>Monday, Wednesday, Friday</h6>
                                        <h6>11am - 2pm (EST)</h6>
                                    </div>
                                    <div className="joinButton">
                                        <button type="submit" className="btn btn-primary">Join Here</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
