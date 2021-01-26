import React, { Component } from 'react';
import "./Footer.css";

export default class Footer extends Component {
    render() {
        return (
    <div className="main-footer">
        <div className="container">
          <div className="row">
            <div className="col">Aeroura Travel
              &copy;{new Date().getFullYear()} 
              Privacy Policy Terms & Conditions
            </div>
            <div className="col">
              <h6>Facebook</h6>
              <h6>Twitter</h6>
              <h6>Gmail</h6>
              <h6>Instagram</h6>
              <h6>Linkedin</h6>
            </div>
          </div>
        </div>
    </div>
        )
    }
}
