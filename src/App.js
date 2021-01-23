import './App.css';
import DescriptionBoxes from "./DescriptionBoxes.js";
import Footer from "./Footer.js";
import Header from "./Header.js";
import LandingPageImage from "./LandingPageImage.js";
import SpecializeBoxes from "./SpecializeBoxes.js";
import TravelBanner from "./TravelBanner.js";
import TravelPlans from "./TravelPlans.js";
import VirtualHours from "./VirtualHours.js";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <LandingPageImage/>
      <DescriptionBoxes/>
      <TravelBanner/>
      <SpecializeBoxes/>
      <VirtualHours/>
      <TravelPlans/>
      <Footer/>
    </div>
  );
}

export default App;
