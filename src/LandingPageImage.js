import React, { Component } from 'react';
import "./LandingPageImage.css";

export default class LandingPageImage extends Component {
    render() {
        
        return (
            <div className="landingPage" style={{ backgroundImage: "url(/BrooklynBridge.jpg)" }}>
                <h1>Aeroura Travel</h1>
                <h3>Experience The World</h3>
            </div>
        )
    }
}
