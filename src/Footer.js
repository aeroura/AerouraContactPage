import React, { Component } from 'react';
import "./Footer.css";
import {FaTwitter, FaFacebookSquare, FaLinkedin, FaInstagram} from 'react-icons/fa';

export default class Footer extends Component {
  
    render() {
        return (
    <div className="main-footer">
        <div className="container-fluid">
          <div className="row">
          {/* Footer List Items Section */}
            <div className="col-lg-8 col-md-12 col-sm-12 col-xs-12">
              <ul className="footerList">
                <li>Aeroura Travel</li>
                <a href="facebook.com"><li>Privacy Policy</li></a>
                <a href="facebook.com"><li>Terms & Conditions</li></a>
              </ul>
               {/*&copy;{new Date().getFullYear()}*/}
            </div>
            {/* Footer Icons Section */}
            <div className="col-lg-4 col-md-12 col-sm-12 col-xs-12" id="footerIcons">
              <div className="icons">
                  <a href="facebook.com"><FaFacebookSquare className="footer-icons"/></a>
                  <a href="twitter.com"><FaTwitter className="footer-icons"/></a>
                  <a href="instagram.com"><FaInstagram className="footer-icons"/></a>
                  <a href="linkedin.com"><FaLinkedin className="footer-icons"/></a>
              </div>
            </div>
          </div>
        </div>
    </div>
        )
    }
}

/*

          
*/