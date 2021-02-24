import React, { useState} from 'react';
import './App.css';
import Footer from "./Footer.js";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import Home from "./Home.js";
import About from "./About.js";
/*import Community from "./Community.js";*/
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Switch, Link, Redirect } from 'react-router-dom';


function App() {
  /* useState for hamburger menu */
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);
/* useState for dropdown menu */
  const [showDropDown, setShowDropDown] = useState(false);
  const handleShowDropDown = () => setShowDropDown(!showDropDown);
  return (

  <BrowserRouter>
    <div className="App">
{/* Header with links Navbar Bootstrap */}
<nav className="navbar navbar-expand-lg navbar-light bg-light" id="navHeader">
<button class="custom-toggler navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar" 
    aria-controls="navbar" aria-expanded={!isNavCollapsed ? true : false} aria-label="Toggle navigation" 
    onClick={handleNavCollapse}>
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="navbarToggle">
    <span className="homeLink"><Link to="/">AEROURA TRAVEL</Link></span>
      <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
      <li className="nav-item"><Link to="/about">About</Link></li>
      {/*<li className="nav-item"><Link to="/community">Community</Link></li>*/}
      
    </ul>
      <div className="dropdown">
      <button className="btn" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" 
       onClick={handleShowDropDown} aria-expanded="false">
        <FontAwesomeIcon icon={faGlobe} size="2x" style={{ color: 'rgb(19, 143, 137)' }} />
      </button>
      {showDropDown ?
      <div className="dropdown" aria-labelledby="dropdownMenuButton" id="dropDownMenu">
        <a className="dropdown-item" href="google.com">English</a>
        <a className="dropdown-item" href="google.com">Spanish</a>
      </div> 
      : null}
    </div>
  </div>
</nav>

      {/* Content wrap to keep footer at bottom of page */}
      <div className="content-wrap">
        {/* Contains website data in multiple routes */}
          <Switch>
              <Route exact path="/" component={Home} render={()=> (
                <Redirect to="home"/>
              )} />
              <Route exact path="/about" component={About} />
              {/* <Route path="/community" component={Community} /> */}
             {/* This gives an error  <Route component={Error} /> */}
          </Switch>
        
      </div>
      
      <Footer/>
      
    </div>
    </BrowserRouter>
  );
}

export default App;

/* 

<DropdownButton id="dropdown-item-button" title="Dropdown button">
<FontAwesomeIcon icon={faGlobe} size="2x" style={{ color: 'rgb(19, 143, 137)' }} />
  <Dropdown.Item as="button">English</Dropdown.Item>
  <Dropdown.Item as="button">Spanish</Dropdown.Item>
</DropdownButton>


<div className="dropdown">
      <button className="btn" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        <FontAwesomeIcon icon={faGlobe} size="2x" style={{ color: 'rgb(19, 143, 137)' }} />
      </button>
      <div className="dropdown-menu" aria-labelledby="dropdownMenuButton" id="menu">
        <a className="dropdown-item" href="google.com">English</a>
        <a className="dropdown-item" href="google.com">Spanish</a>
      </div>

*/