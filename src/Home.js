import React, {useState, useEffect, useRef} from 'react';
import JehieliProfessional from './Images/JehieliPortrait.jpg';
import BrookfieldPlace from './Images/BrookfieldPlace.jpg';
import JehieliMountains from './Images/JehieliMountains.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {FaTwitter, FaFacebookSquare, FaLinkedin, FaInstagram, FaArrowCircleUp} from 'react-icons/fa';
import { faEnvelope, faPhoneAlt, faClock, faVideo, faCheckSquare, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import NYCTravel from './Images/TravelBanner.jpeg';//Check to see jpg vs jpeg
import BrooklynBridge from './Images/BrooklynBridge.jpg';
import Macys from './Images/Macy\'s.jpg';
import BroadwayStreet from './Images/BroadwayStreet.jpg';
import TimeSquare from './Images/TimeSquare.jpg';
import { useTranslation } from "react-i18next";
import i18n from "i18next";
import './Home.css';


export default function Home({lang}) {
    
    /* Set and change languages */
    const { t } = useTranslation();
    const [activeLanguage, setActiveLanguage] = useState(lang);

    i18n.on('languageChanged', function(lang) {
        setActiveLanguage(i18n.changeLanguage(activeLanguage));
    })

    


    /* Open and close side panel */
    const [isActive, setIsActive] = useState(true);
    //Toggle the icon bar
    const [iconBarStyle, setIconBarStyle] = useState({});   
    //Reduce opacity of toggle button
    const [sidePanelStyle, setSidePanelSyle] = useState({});
    const toggle = () => {
         
        if (isActive === true) {
            //Must find a way to add multiple styles 
            setIconBarStyle({transition: "cubic-bezier(0, .52, 0, 1) transform .3s", transform: "translate3d(-100vw, 0, 0)"});
            setSidePanelSyle({backgroundColor: "rgb(255, 255, 255, 0.2)"});
        }
        else {
            setIconBarStyle({transform: "translate3d(0, -50%, 0)"});
            setSidePanelSyle({backgroundColor: "rgb(255, 255, 255)"});
        }
        setIsActive(!isActive);
    }

    //Scroll to top button
    const [showScroll, setShowScroll] = useState(false)

    useEffect(()=>{
      window.addEventListener('scroll', checkScrollTop)
      return function cleanup() {
        window.removeEventListener('scroll', checkScrollTop)
      }
    })
  
    const checkScrollTop = () => {
      if (!showScroll && window.pageYOffset > 500){
        setShowScroll(true)
      } else if (showScroll && window.pageYOffset <= 500){
        setShowScroll(false)
      }
    };
  
    const scrollTop = () =>{
      window.scrollTo({top: 0, behavior: 'smooth'});
    };

    //Used to scroll to bottom of page
    const fillOutForm = useRef(null)
    const executeScroll = () => fillOutForm.current.scrollIntoView() 

    //Slides info objects
    const slides = ([
        {
            title: 'BrookfieldPlace',
            image: BrookfieldPlace,
        },
        {
            title: "BrooklynBridge",
            image: BrooklynBridge
        },
        {
            title: "Times Square",
            image: TimeSquare
        },
    ]);
    
    //State for active slide index
    const [activeSlide, setActiveSlide] = useState(0);
    // Set the length of the slides array
    const { length } = slides;

    //used to control next and prev slides in carousel
    const nextSlide = () => {
    // Check if we've reached the final slide in the array
    // If so, go back to 0, else activeSlide + 1
    setActiveSlide(activeSlide === length - 1 ? 0 : activeSlide + 1);
    }

    const prevSlide = () => {
    // Check if we've reached the first slide in the array
    // If so, go back to 2, else activeSlide - 1
    setActiveSlide(activeSlide === 0 ? 2 : activeSlide - 1);
    }

    return (
    <div className="Home">
            <button className="btn" id="sidePanel" onClick={toggle} style={sidePanelStyle}>&#9776;
            </button> 
            <div className="iconBarActive" style={iconBarStyle}>
                <a href="facebook.com"><FaFacebookSquare className="facebook"/></a>
                <a href="twitter.com"><FaTwitter className="twitter"/></a>
                <a href="instagram.com"><FaInstagram className="instagram"/></a>
                <a href="linkedin.com"><FaLinkedin className="linkedin"/></a>  
            </div>
      <div className="landingPage">
          <div className="text">
              <p className="title" style={{fontFamily: 'Spectral'}}>AEROURA TRAVEL</p>
              <p className="subTitle" style={{fontFamily: 'Karla'}}>{t('landing.page.title')}</p>
          </div>
      </div>
      <div className="descriptionBoxes">
                <div className="row">
                    <div className="col-lg-4 col-md-12 col-sm-6 col-xs-12">
                        <h4 style={{fontFamily: 'Spectral'}}>Places to See - NYC</h4>
                        <div className="PlacesToSee">
                            <div className="carousel" data-ride="carousel">
                                <div className="carousel-inner">
                                {slides.map((s, i) => (
                                    <div 
                                    // if active slide, include the "active" class
                                className={i === activeSlide ? "carousel-item active" : "carousel-item"}
                                key={s.title}
                                // if not active, hide from screen readers for accessibility
                                aria-hidden={i !== activeSlide}>
                                    <img className="d-block w-100" src={s.image} alt={`${s.title}`} />
                                        <div className="carousel-caption d-none d-md-block">
                                            <h5 style={{fontFamily: 'Karla'}}>{s.title}</h5>
                                        </div>
                                    </div>
                                ))}
                                </div>
                                    <button className="carousel-control-prev" data-slide="prev" onClick={prevSlide}>
                                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span className="sr-only">Previous</span>
                                    </button>
                                    <button className="carousel-control-next" data-slide="next" onClick={nextSlide}>
                                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span className="sr-only">Next</span>
                                    </button>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12" id="TravelCounselor">
                            <img src={JehieliProfessional} alt="Josue" className="josueImage"></img>
                        <div className="josuePortraitInfo">
                            <div className="Name">
                                <h3 className="nameHead" style={{fontFamily: 'Spectral'}}>Josue Jehieli Bastidas</h3>
                                <h5 className="nameSub" style={{fontFamily: 'Karla'}}>Travel Counselor</h5>
                            </div>
                            <div className="ContactInfo">
                                <p style={{fontFamily: 'Source Sans Pro'}}><FontAwesomeIcon icon={faPhoneAlt} style={{ color: 'rgb(19, 143, 137)' }} /> (347)-619-2214</p>
                                <p style={{fontFamily: 'Source Sans Pro'}}><FontAwesomeIcon icon={faEnvelope} style={{ color: 'rgb(19, 143, 137)' }} /> Josue@aeroura.com</p>
                                <button type="submit" className="btn btn-primary" id="scheduleBtn" onClick={executeScroll}
                                 style={{fontFamily: 'Source Sans Pro'}}>Schedule an Appointment</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12" id="VirtualHours">
                        <img src={JehieliMountains} alt="JehieliMountains" className="josueMountainsImage"></img>
                        <div className="virtualHoursInfo">
                            <div className="Title">
                                <h4 className="TitleIcon" style={{fontFamily: 'Spectral'}}><FontAwesomeIcon icon={faClock} style={{ color: 'rgb(19, 143, 137)' }} /> Virtual Hours</h4>
                                <h6 className="TitleText" style={{fontFamily: 'Karla'}}>Monday, Wednesday, Friday</h6>
                                <h6 className="TitleText" style={{fontFamily: 'Karla'}}>11am - 2pm (EST)</h6>
                            </div>
                            <div className="joinButton">
                                <button type="submit" className="btn btn-primary" onClick={executeScroll} style={{fontFamily: 'Source Sans Pro'}}>Join Here</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="travelBanner">
                <img src={NYCTravel} alt="NYCTravel" className="travelBannerBackground">  
                </img>
                <div className="travelBannerText" style={{fontFamily: 'Spectral'}}>
                    NYC TRAVEL
                </div>
            </div>
            <div className="SpecializeBoxes">
                <h3 className="headingText" style={{fontFamily: 'Spectral'}}>We Specialize In...</h3>
                <div className="row">
                    <div className="col-md-4">
                       <h4 className="headingText" style={{fontFamily: 'Karla'}}>Local Travel</h4> 
                       <div className="box">
                        <img src={BrooklynBridge} alt="BrooklynBridge" className="img-fluid"></img>
                            <div className="descriptionText">
                                <p style={{fontFamily: 'Source Sans Pro'}}>Relax and Enjoy. There's not much else to it and we're just fine with that.</p>
                                <p style={{fontFamily: 'Source Sans Pro'}}>A trip for the entire family or a solo adventure is just around the corner.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                    <h4 className="headingText" style={{fontFamily: 'Karla'}}>Planning Trips</h4>
                        <div className="box">
                        <img src={Macys} alt="Macys" className="img-fluid"></img>
                            <div className="descriptionText">
                                <p style={{fontFamily: 'Source Sans Pro'}}>There's magic in planning and we can't get enough of it.</p>
                                <p style={{fontFamily: 'Source Sans Pro'}}>We enjoy planning your vacation, weekend Getaways, and family retreats.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                    <h4 className="headingText" style={{fontFamily: 'Karla'}}>New York City</h4>
                        <div className="box">
                        <img src={BroadwayStreet} alt="BroadwayStreet" className="img-fluid"></img>
                            <div className="descriptionText">
                                <p style={{fontFamily: 'Source Sans Pro'}}>The best and brightest come to New York. There's no place like it so reach out to us to get the ins-and-outs of our booming city.</p>
                                <p style={{fontFamily: 'Source Sans Pro'}}>We love it and we know you will too.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="virtualHours" ref={fillOutForm}>
                <h1 style={{fontFamily: 'Spectral'}}>Virtual Hours</h1>
                <p style={{fontFamily: 'Karla'}}>Meet With Our Friendly Representatives via Video Chat to Plan Your Future Trips.</p>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-8" id="firstSection">
                            <div className="videoAppointment">
                                <p style={{fontFamily: 'Spectral'}}>Your Details</p>
                                <hr className="horizontalLine"></hr>
                                <div className="row" id="arrangeAppointmentSection">
                                    <div className="col-xl-2 col-lg-2 col-md-3 col-sm-2 col-xs-2" id="videoIconSection">
                                        <FontAwesomeIcon icon={faVideo} style={{ color: 'white'}} id="videoIcon" />
                                    </div>
                                    <div className="col-xl-10 col-lg-10 col-md-9 col-sm-10 col-xs-10" id="videoAppointmentInfo">
                                        <span className="videoAppointmentSpan">
                                            <p style={{fontFamily: 'Spectral'}}>Arrange a video appointment</p>
                                        </span>
                                        <div className="row" id="appointmentRequest">
                                           <p style={{fontFamily: 'Karla'}}>  <FontAwesomeIcon icon={faCheckSquare} size="2x" style={{ color: 'rgb(19, 143, 137)' }}/> <tab></tab>
                                           Request your appointment and a specialist will be in touch to confirm a date and time to suit you</p>
                                        </div>
                                    </div>
                                </div>
                                <form>
                                    <div className="form-row">
                                        <div className="form-group col-md-3">
                                            <label for="title" style={{fontFamily: 'Karla'}}>Title</label>
                                            <select id="title" className="form-control">
                                             <option selected>Choose...</option>
                                             <option>Mr.</option>
                                             <option>Mrs.</option>
                                             <option>Ms.</option>
                                             <option>Other</option>
                                            </select>
                                        </div>
                                        <div className="form-group col-md-4">
                                            <label for="firstName" style={{fontFamily: 'Karla'}}>First Name</label>
                                            <input type="text" className="form-control" id="firstName" placeholder="First Name"/>
                                        </div>
                                        <div className="form-group col-md-5">
                                            <label for="lastName" style={{fontFamily: 'Karla'}}>Last Name</label>
                                            <input type="text" className="form-control" id="lastName" placeholder="Last Name"/>
                                        </div>
                                    </div>
                                    <div className="form-row">
                                    <div className="form-group col-md-6">
                                            <label for="email" style={{fontFamily: 'Karla'}}>Email</label>
                                            <input type="email" className="form-control" id="email" placeholder="Email"/>
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="form-group col-md-6">
                                            <label for="phoneNumber" style={{fontFamily: 'Karla'}}>Phone Number</label>
                                            <input type="tel" className="form-control" id="phoneNumber" placeholder="1-(555)-555-5555"/>
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label for="callTime" style={{fontFamily: 'Karla'}}>Best Time To Call You</label>
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
                                <p className="sub-text" style={{fontFamily: 'Source Sans Pro'}}>
                                We ask you for your number so that one of our specialists can call or text you to discuss your travel plans. 
                                Standard rates may apply. By submitting this form, you agree to us getting in touch with you in this way.
                                </p>
                                <div className="row" id="Disclaimer">
                                    <div className="col-md-1">
                                        <FontAwesomeIcon icon={faInfoCircle} size="2x"/>
                                    </div>
                                    <div className="co-md-11">
                                        <p style={{fontFamily: 'Source Sans Pro'}}>Your privacy is paramount to Aeroura Travel and we will never share your personal data with anyone.
                                            For further info, please see our <a href="www.facebook.com">privacy policy.</a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="hours">
                                <FontAwesomeIcon icon={faClock} size="3x" style={{ color: 'rgb(19, 143, 137)' }} />
                                <h3 style={{fontFamily: 'Spectral'}}>Virtual Hours (EST)</h3>
                                <div className="table-responsive">
                                    <table className="table">
                                        <tbody style={{fontFamily: 'Karla'}}>
                                            <tr>
                                                <td>Monday</td>
                                                <td>11 am - 2pm</td>
                                            </tr>
                                            <tr>
                                                <td>Wednesday</td>
                                                <td>11 am - 2pm</td>
                                            </tr>
                                            <tr>
                                                <td>Friday</td>
                                                <td>11 am - 2pm</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <hr className="horizontalLine"></hr>
                        <div>
                        <div className="travelPlansForm">
                            <p style={{fontFamily: 'Spectral'}}>Your Travel Plans</p>
                        <hr className="horizontalLine"></hr>
                            <p className="sub-text" style={{fontFamily: 'Source Sans Pro'}}>Fields marked* are required</p>  
                        <form>
                            <div className="form-row">
                                <div className="form-group col-md-8">
                                    <label style={{fontFamily: 'Karla'}}>Destination</label>
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
                                <div class="form-group col-md-11">
                                    <label for="QuestionsOrConcerns" style={{fontFamily: 'Karla'}}>TravelPlans</label>
                                    <textarea class="form-control" id="QuestionsOrConcerns" rows="3" 
                                        placeholder= "E.g. Number of travelers, duration, travel dates, level of accommodations">
                                    </textarea>
                                </div>
                            </div>
                            
                        </form>
                    </div>
                    <button type="submit" className="btn btn-primary" id="submitButton" style={{fontFamily: 'Source Sans Pro'}}>Submit Inquiry</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <FaArrowCircleUp className="scrollTop" onClick={scrollTop} style={{height: 40, display: showScroll ? 'flex' : 'none'}}/>
    </div>
    )
}


/* 




*/