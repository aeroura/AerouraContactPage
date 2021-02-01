import React, { Component } from 'react';
import "./TravelPlans.css";

export default class TravelPlans extends Component {
    render() {
        return (
            <div className="TravelPlans">
                <div className="container-fluid">
                    <div className="travelPlansForm">
                        <div className="row">
                            <h3>Your Travel Plans</h3>
                        </div>
                        <hl></hl>
                        <div className="form-row">
                            <p>Fields marked* are required</p>  
                        </div>
                        <form>
                            <div className="form-row">
                                <div className="form-group col-md-3">
                                    <label>Destination</label>
                                    <select id="title" className="form-control">
                                        <option selected>Choose...</option>
                                        <option>New York</option>
                                        <option>Mexico</option>
                                        <option>Peru</option>
                                        <option>Other</option>
                                    </select>
                                </div>
                            </div>
                            <div className="form-row">
                                <div class="form-group col-md-6">
                                    <label for="QuestionsOrConcerns">TravelPlans</label>
                                    <textarea class="form-control" id="QuestionsOrConcerns" rows="3" 
                                        placeholder= "E.g. Number of travelers, duration, travel dates, level of accommodations">
                                    </textarea>
                                </div>
                            </div>
                            <button type="submit" className="btn btn-primary">Submit Inquiry</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
