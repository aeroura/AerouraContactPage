import React, { useEffect, useRef, useState, Suspense} from 'react';
import './App.css';
import Footer from "./Footer.js";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import Home from "./Home.js";
import About from "./About.js";
/*import Community from "./Community.js";*/
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import { useTranslation } from "react-i18next";
import i18n from "i18next";
import WebFont from 'webfontloader';

  
function App() {
    //Google Fonts
    useEffect(() => {
      WebFont.load({
        google: {
          families: ['Spectral', 'Karla', 'Source Sans Pro']
        }
      });
     }, []);

  /* useState for hamburger menu */
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);
  
  /* useState for dropdown menu */
  const [showDropDown, setShowDropDown] = useState(false);
  const handleShowDropDown = () => setShowDropDown(!showDropDown);

  /* Used to hide dropdown on outside click */
    const myRef = useRef();

    const handleClickOutside = e => {
        if (!myRef.current.contains(e.target)) {
          setShowDropDown(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    });

  /* Translation code */
  const { t, i18n } = useTranslation();

const changeLanguage = lng => {
  i18n.changeLanguage(lng);
}


  return (
<Suspense fallback="loading">
  <BrowserRouter>
    <div className="App">
{/* Header with links Navbar Bootstrap */}
<nav className="navbar navbar-expand-lg navbar-light bg-light" id="navHeader">
  {/* Hamburger menu button */}
<button class="custom-toggler navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar" 
    aria-controls="navbar" aria-expanded={!isNavCollapsed ? true : false} aria-label="Toggle navigation" 
    onClick={handleNavCollapse}>
    <span className="navbar-toggler-icon"></span>
  </button>
  {/* Hamburger menu section */}
  <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="navbarToggle">
    <span className="homeLink" style={{fontFamily: 'Karla'}}><NavLink exact to="/" activeClassName="active" style={{textDecoration: 'none'}}
    >AEROURA TRAVEL</NavLink></span>
      <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
      <li className="nav-item" style={{fontFamily: 'Karla'}}><Link to="/about" style={{textDecoration: 'none'}}>About</Link></li>
      {/*<li className="nav-item"><Link to="/community">Community</Link></li>*/}
      
    </ul>
     {/* Dropdown section */}
   <div className="dropdown">
      <button className="btn" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" 
       onClick={handleShowDropDown} aria-expanded="false" ref={myRef}>
        <FontAwesomeIcon icon={faGlobe} size="2x" style={{ color: 'rgb(19, 143, 137)' }} id="icon" />
      </button>
      {showDropDown ?
      <div className="dropdown" aria-labelledby="dropdownMenuButton" id="dropDownMenu">
          <a className="dropdown-item" onClick={() => changeLanguage('en')} style={{fontFamily: 'Karla'}}>English</a>
          <a className="dropdown-item" onClick={() => changeLanguage('es')} style={{fontFamily: 'Karla'}}>Spanish</a>
      </div> 
      : null}
    </div>  
  </div>
</nav>

      {/* Content wrap to keep footer at bottom of page */}
      <div className="content-wrap">
        {/* Contains website data in multiple routes */}
          <Switch>
            <Route exact path="/">
              <Home  />
            </Route>
            <Route path="/about">
              <About/>
            </Route>
              {/* <Route path="/community" component={Community} /> */}
             {/* This gives an error  <Route component={Error} /> */}
          </Switch>
        
      </div>
      
      <Footer/>
      
    </div>
    </BrowserRouter>
    </Suspense>
  );
      }

export default App;

/* 

----Replace if above doesnt work------
<Route path='/' component={Home} exact />
<Route path='/about' component={About} exact />

<Route exact path="/" component={Home}/>
<Route exact path="/about" component={About} />

--------Extra Info for Navlink-------
<NavLink className="navbar-item" activeClassName="is-active" to="/">
  Home
</NavLink>

  ------Back up in case previous dropdown doesnt work-----
          <a className="dropdown-item" onClick={() => changeLanguage('en')}>English</a>
        <a className="dropdown-item" onClick={() => changeLanguage('es')}>Spanish</a>

********Fonts*****
Spectral - Headings
Karla- Body
Source Sans Pro - Detailed text


*/