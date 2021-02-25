import React, { useEffect, useRef, useState} from 'react';
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


function App() {
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

  return (

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
    <span className="homeLink"><NavLink exact to="/" activeClassName="active" style={{textDecoration: 'none'}}
    >AEROURA TRAVEL</NavLink></span>
      <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
      <li className="nav-item"><Link to="/about" style={{textDecoration: 'none'}}>About</Link></li>
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
            <Route exact path="/">
              <Home/>
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
  );
}

export default App;

/* 

----Replace if above doesnt work------
<Route exact path="/" component={Home}/>
<Route exact path="/about" component={About} />

--------Extra Info for Navlink-------
<NavLink className="navbar-item" activeClassName="is-active" to="/">
  Home
</NavLink>




const SampleComponent = () => {
    const [clickedOutside, setClickedOutside] = useState(false);
    const myRef = useRef();

    const handleClickOutside = e => {
        if (!myRef.current.contains(e.target)) {
            setClickedOutside(true);
        }
    };

    const handleClickInside = () => setClickedOutside(false);

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    });

    return (
        <button ref={myRef} onClick={handleClickInside}>
            {clickedOutside ? 'Bye!' : 'Hello!'}
        </button>
    );
};

*/