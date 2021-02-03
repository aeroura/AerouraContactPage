import React, { Component } from 'react';
import "./Footer.css";
import {FaTwitter, FaFacebookSquare, FaLinkedin, FaInstagram} from 'react-icons/fa';

export default class Footer extends Component {
    render() {
        return (
    <div className="main-footer">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-5">
              <ul className="footerList">
                <li>Aeroura Travel</li>
                <li>Privacy Policy</li>
                <li>Terms & Conditions</li>
              </ul>
               {/*&copy;{new Date().getFullYear()}*/}
            </div>
            <div className="col-md-5"></div>
            <div className="col-md-2">
              <div className="icons">
                  <FaFacebookSquare
                    className="footer-icons"
                    />
                  <FaTwitter
                  className="footer-icons"
                  />
                  <FaInstagram
                  className="footer-icons"
                  />
                  <FaLinkedin
                  className="footer-icons"
                  />    
              </div>
            </div>
          </div>
        </div>
    </div>
        )
    }
}
