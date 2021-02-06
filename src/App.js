import React from 'react';
import './App.css';
import Footer from "./Footer.js";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { Nav, Navbar } from "react-bootstrap";
import Home from "./Home.js";
import About from "./About.js";
import Community from "./Community.js";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';


function App() {
  return (
  <BrowserRouter>
    <div className="App">
      
      <ul className="row" id="header">
        <div className="col-md-2">
            <li><b><Link to="/">AEROURA TRAVEL</Link></b></li>  
        </div>
        <div className="col-md-8"></div>
        <div className="col-md-2">
            <li><Link to="/about">About</Link></li>
            <li><Link to="/community">Community</Link></li>
            <FontAwesomeIcon icon={faGlobe} size="2x" style={{ color: 'rgb(19, 143, 137)' }} />
        </div>
        </ul> 

      <div className="content-wrap">
        
          <Switch>
              <Route exact path="/" component={Home}/>
              <Route path="/about" component={About} />
              <Route path="/community" component={Community} />
              <Route component={Error} />
          </Switch>
        
      </div>
      
      <Footer/>
      
    </div>
    </BrowserRouter>
  );
}

export default App;

/* 

  <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="#home"><Link to="/">AEROURA TRAVEL</Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#about"><Link to="/about">About</Link></Nav.Link>
          <Nav.Link href="#community"><Link to="/community">Community</Link></Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link><FontAwesomeIcon icon={faGlobe} size="2x" style={{ color: 'rgb(19, 143, 137)' }} /></Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>


    <ul className="row">
        <div className="col-md-2">
            <li><b><Link to="/">AEROURA TRAVEL</Link></b></li>  
        </div>
        <div className="col-md-8"></div>
        <div className="col-md-2">
            <li><Link to="/about">About</Link></li>
            <li><Link to="/community">Community</Link></li>
            <FontAwesomeIcon icon={faGlobe} size="2x" style={{ color: 'rgb(19, 143, 137)' }} />
        </div>
        </ul> 


        <ul className="nav navbar-nav">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/community">Community</Link>
          </li>
        </ul>
*/