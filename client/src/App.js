import './App.css';
import DescriptionBoxes from "./DescriptionBoxes.js";
import Footer from "./Footer.js";
import Header from "./Header.js";
import LandingPageImage from "./LandingPageImage.js";
import SpecializeBoxes from "./SpecializeBoxes.js";
import TravelBanner from "./TravelBanner.js";
import VirtualHours from "./VirtualHours.js";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <div className="content-wrap">
      <Header/>
      <LandingPageImage/>
      <DescriptionBoxes/>
      <TravelBanner/>
      <SpecializeBoxes/>
      <VirtualHours/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
