import React, { Component } from 'react';
import "./SpecializeBoxes.css";

export default class SpecializeBoxes extends Component {
    render() {
        return (
            <div className="SpecializeBoxes">
                <h3>We Specialize In...</h3>
                <div className="row">
                    <div className="col">
                        <h4>Lesiure Travel</h4>
                        <div className="box">
                            <image></image>
                            <p>Relax and Enjoy.</p>
                            <p>Relax and Enjoy.</p>
                        </div>
                    </div>
                    <div className="col">
                    <h4>Planning Trips</h4>
                        <div className="box">
                            <image src="BrooklynBridge.jpg"></image>
                            <p>Relax and Enjoy.</p>
                            <p>Relax and Enjoy.</p>
                        </div>
                    </div>
                    <div className="col">
                    <h4>New York City</h4>
                        <div className="box">
                            <image></image>
                            <p>Relax and Enjoy.</p>
                            <p>Relax and Enjoy.</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
