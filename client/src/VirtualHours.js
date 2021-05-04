import React, { Component } from 'react';
import "./VirtualHours.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faVideo, faCheckSquare, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

export default class VirtualHours extends Component {

state={
    name:'',
    lastname:'',
    email:'',
    message:'',
    phonenumber:'',
    sent:false
}

//Handle Inputs
handleName= (e) => {
    this.setState({
        name:e.target.value
    })
}

handleLastName= (e) => {
    this.setState({
        lastname:e.target.value
    })
}

handleEmail= (e) => {
    this.setState({
        email:e.target.value
    })
}

handleMessage= (e) => {
    this.setState({
        message:e.target.value
    })
}
handlePhoneNumber= (e) => {
    this.setState({
        phonenumber:e.target.value
    })
}


//End of handle inputs

formSubmit=(e)=>{
    e.preventDefault();

    let data = {
        name:this.state.name,
        lastname:this.state.lastname,
        email:this.state.email,
        message:this.state.message,
        phonenumber:this.state.phonenumber
    }

    axios.post('./api/forma',data)
    .then(res=>{
        this.setState({
            sent:true,
        },this.resetForm())
    })
    .catch(()=>{
        console.log('Message not sent');
    })
}

// For reseting initial data
resetForm=()=>{
    this.setState({
        name:'',
        lastname:'',
        email:'',
        message:'',
        phonenumber:''
    })

    setTimeout(()=>{
        this.setState({
            sent:false,
        })
    },3000)
}
    render() {
        return (
            <div className="virtualHours">
            <form onSubmit={this.formSubmit}>
                <h1>Virtual Hours</h1>
                <p>Meet With Our Friendly Representatives via Video Chat to Plan Your Future Trips.</p>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-8" id="firstSection">
                            <div className="videoAppointment">
                                <p>Your Details</p>
                                <hr className="horizontalLine"></hr>
                                <div className="row" id="arrangeAppointmentSection">
                                    <div className="col-md-1" id="videoIcon">
                                        <FontAwesomeIcon icon={faVideo} size="3x" style={{ color: 'white' }} />
                                    </div>
                                    <div className="col">
                                        <span className="pb-0">
                                            <p>Arrange a video appointment</p>
                                        </span>
                                        <div className="row">
                                            <div className="col-md-1 pt-0 mt-0">
                                                <FontAwesomeIcon icon={faCheckSquare} size="3x" style={{ color: 'rgb(19, 143, 137)' }}/>
                                            </div>
                                            <div className="col-md-11 p-0">
                                                <p>Request your appointment and a specialist will be in touch to confirm a date and time to suit you</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <form>
                                    <div className="form-row">
                                        <div className="form-group col-md-3">
                                            <label for="title">Title</label>
                                            <select id="title" className="form-control">
                                             <option selected>Choose...</option>
                                             <option>Mr.</option>
                                             <option>Mrs.</option>
                                             <option>Ms.</option>
                                             <option>Other</option>
                                            </select>
                                        </div>
                                        <div className="form-group col-md-4">
                                            <label HtmlFor="firstname">First Name</label>
                                            <input type="text" className="form-control" id="firstname" placeholder="First Name"
                                            value={this.state.name}
                                            onChange={this.handleName}
                                            />
                                        </div>
                                        <div className="form-group col-md-5">
                                            <label HtmlFor="lastname">Last Name</label>
                                            <input type="text" className="form-control" id="lastname" placeholder="Last Name"
                                            value={this.state.lastname}
                                            onChange={this.handleLastName}
                                            />
                                        </div>
                                    </div>
                                    <div className="form-row">
                                    <div className="form-group col-md-4">
                                            <label HtmlFor="email">Email</label>
                                            <input type="email" className="form-control" id="email" placeholder="Email"
                                            value={this.state.email}
                                            onChange={this.handleEmail}
                                            />
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="form-group col-md-6">
                                            <label HtmlFor="phonenumber">Phone Number</label>
                                            <input type="tel" className="form-control" id="phonenumber" placeholder="1-(555)-555-5555"
                                            value={this.state.phonenumber}
                                            onChange={this.handlePhoneNumber}
                                            />
                                        </div>
                                        <div className="form-group col-md-3">
                                            <label for="callTime">Best Time To Call You</label>
                                            <select id="callTime" className="form-control">
                                             <option selected>No Preference</option>
                                             <option>11am</option>
                                             <option>12pm</option>
                                             <option>1pm</option>
                                             <option>2pm</option>
                                            </select>
                                        </div>
                                    </div>
                                </form>
                                <p className="sub-text">
                                We ask you for your number so that one of our specialists can call or text you to discuss your travel plans. 
                                Standard rates may apply. By submitting this form, you agree to us getting in touch with you in this way.
                                </p>
                                <div className="row" id="Disclaimer">
                                    <div className="col-md-1">
                                        <FontAwesomeIcon icon={faInfoCircle} size="2x"/>
                                    </div>
                                    <div className="co-md-11">
                                        <p>Your privacy is paramount to Aeroura Travel and we will never share your personal data with anyone.
                                            For further info, please see our <a href="www.facebook.com">privacy policy.</a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="hours">
                                <FontAwesomeIcon icon={faClock} size="3x" style={{ color: 'rgb(19, 143, 137)' }} />
                                <h3>Virtual Hours (EST)</h3>
                                <div className="row">
                                    <div className="col-md-6">
                                        <p>Monday</p>
                                    </div>
                                    <div className="col-md-6">
                                        <p>11 am - 2pm</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <p>Wednesday</p>
                                    </div>
                                    <div className="col-md-6">
                                        <p>11 am - 2pm</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <p>Friday</p>
                                    </div>
                                    <div className="col-md-6">
                                        <p>11 am - 2pm</p>
                                    </div>
                                </div>
                            </div>
                            <hr className="horizontalLine"></hr>
                        <div>
                        <div className="travelPlansForm">
                            <p>Your Travel Plans</p>
                        <hr className="horizontalLine"></hr>
                            <p className="sub-text">Fields marked* are required</p>  
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
                            
                        </form>
                    </div>
                    <div className={this.state.sent ?'msg msgAppear':'msg'}>Message has been sent</div>
                    <button type="submit" className="btn btn-primary">Submit Inquiry</button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
            </div>
        )
    }
}
