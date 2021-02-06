import React from 'react';
import DescriptionBoxes from "./DescriptionBoxes.js";
import LandingPageImage from "./LandingPageImage.js";
import SpecializeBoxes from "./SpecializeBoxes.js";
import TravelBanner from "./TravelBanner.js";
import VirtualHours from "./VirtualHours.js";
import './Home.css';


export default function Home() {
    return (
    <div className="Home">
      <LandingPageImage/>
      <DescriptionBoxes/>
      <TravelBanner/>
      <SpecializeBoxes/>
      <VirtualHours/>
    </div>
    )
}
