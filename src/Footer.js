import React, { Component } from 'react';
import "./Footer.css";

export default class Footer extends Component {
    render() {
        return (
    <div className="main-footer">
        <div className="container">
          <div className="row">
            <p className="col">
              &copy;{new Date().getFullYear()}  All rights reserved 
            </p>
            <p className="col">
            Terms Of Service | Privacy | Advertise
            </p>
          </div>
        </div>
    </div>
        )
    }
}
