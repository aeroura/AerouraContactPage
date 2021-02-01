import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import "./Header.css";

export default class Header extends Component {
    render() {
        return (
            <div className="header">
            <ul className="row">
                <div className="col-md-2">
                  <li><b>AEROURA TRAVEL</b></li>  
                </div>
                <div className="col-md-8"></div>
                <div className="col-md-2">
                    <li>About</li>
                    <li>Community</li>
                    <FontAwesomeIcon icon={faGlobe} size="2x" style={{ color: 'rgb(19, 143, 137)' }} />
                </div>
            </ul>
        </div>
        )
    }
}
