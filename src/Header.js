import React, { Component } from 'react';
import "./Header.css";

export default class Header extends Component {
    render() {
        return (
            <div className="header">
            <ul>
                <li>Aeroura Travel</li>
                <li>About</li>
                <li>Community</li>
                <li>Languages</li>
            </ul>

            {/*<input type="text" placeholder="Search"></input>*/}
            
        </div>
        )
    }
}
