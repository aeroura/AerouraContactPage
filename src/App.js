import React from 'react';
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
  return (
  <BrowserRouter>
    <div className="App">
{/* Header with links Navbar Bootstrap */}
<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarToggler">
    <span className="homeLink"><Link to="/">AEROURA TRAVEL</Link></span>
      <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
      <li className="nav-item"><Link to="/about">About</Link></li>
      {/*<li className="nav-item"><Link to="/community">Community</Link></li>*/}
    </ul>
    <li className="nav-item" id="globeIcon">
      <FontAwesomeIcon icon={faGlobe} size="2x" style={{ color: 'rgb(19, 143, 137)' }} />
    </li>
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


*/