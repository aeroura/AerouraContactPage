import React, { Component } from 'react';
import "./SpecializeBoxes.css";
import BrooklynBridge from './Images/BrooklynBridge.jpg';
import Macys from './Images/Macy\'s.jpg';
import BroadwayStreet from './Images/BroadwayStreet.jpg';

export default class SpecializeBoxes extends Component {
    render() {
        return (
            <div className="SpecializeBoxes">
                <h3 className="headingText">We Specialize In...</h3>
                <div className="row">
                    <div className="col-md-4">
                       <h4 className="headingText">Local Travel</h4> 
                       <div className="box">
                        <img src={BrooklynBridge} alt="BrooklynBridge" className="img-fluid"></img>
                            <div className="descriptionText">
                                <p>Relax and Enjoy. There's not much else to it and we're just fine with that.</p>
                                <p>A trip for the entire family or a solo adventure is just around the corner.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                    <h4 className="headingText">Planning Trips</h4>
                        <div className="box">
                        <img src={Macys} alt="Macys" className="img-fluid"></img>
                            <div className="descriptionText">
                                <p>There's magic in planning and we can't get enough of it.</p>
                                <p>We enjoy planning your vacation, weekend Getaways, and family retreats.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                    <h4 className="headingText">New York City</h4>
                        <div className="box">
                        <img src={BroadwayStreet} alt="BroadwayStreet" className="img-fluid"></img>
                            <div className="descriptionText">
                                <p>The best and brightest come to New York. There's no place like it so reach out to us to get the ins-and-outs of our booming city.</p>
                                <p>We love it and we know you will too.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
