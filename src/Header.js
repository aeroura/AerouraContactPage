import React, { Component } from 'react';
import "./Header.css";

export default class Header extends Component {
    render() {
        return (
            <div className="header">
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Categories</li>
                <li>Newsletter</li>
            </ul>

            {/*<input type="text" placeholder="Search"></input>*/}
            
        </div>
        )
    }
}
