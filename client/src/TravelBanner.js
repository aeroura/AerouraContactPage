import React, { Component } from 'react';
import NYCTravel from './Images/TravelBanner.jpeg';
import "./TravelBanner.css";

export default class TravelBanner extends Component {
    render() {
        return (
            <div className="travelBanner">
                <img src={NYCTravel} alt="NYCTravel" className="travelBannerBackground">  
                </img>
                <div className="travelBannerText">
                    NYC TRAVEL
                </div>
            </div>
        )
    }
}
