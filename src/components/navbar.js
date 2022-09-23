import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "../images/logo.png";
import leftshape from "../images/leftshape.png";
import people from "../images/people-group.png";

import Appdev from "../images/Appdev.png";
import Softdev from "../images/Softdev.png";
import Webdev from "../images/Webdev.png";
import Trainings from "../images/Trainings.png";


import Ellipse2 from "../images/Ellipse2.png";
import Intersect from "../images/Intersect.png";


import "../components/navbar.css";

export default function navbar() {
  return (
    <div>
            <img className="leftshape" src={leftshape} />
      <img className="people" src={people} />
      <div>
        <Navbar bg="light" expand="lg" id="navbar-main">
          <Container>
            <Navbar.Brand id="navbar-logo">
              <img src={logo} />
            </Navbar.Brand>

            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ml-auto">
                <Nav.Link href="#home" id="navbar-item">
                  Home
                </Nav.Link>
                <Nav.Link href="#link" id="navbar-item">
                  Services
                </Nav.Link>
                <Nav.Link href="#link" id="navbar-item">
                  OurWork
                </Nav.Link>
                <Nav.Link href="#link" id="navbar-item">
                  Contact
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>



      <div className="Home-titles">
        <h5 id="welcome">WELCOME</h5>

        <h3 id="digital">Digital Products  <br/>For your Ideas</h3>

        <div id="ensuring">
          <span>Ensuring the best</span> <br/>
          <span>returns on your requirements...</span>
        </div>
      </div>

      <div className="how-can-we">
        <div id="how-can-text">
          <h4 >How can we <br/>help you?</h4>
        <hr id="help-hr"></hr></div>
        
        <div className="how-can">
        <img className="how-can-image" src={Trainings} />
        <img className="how-can-image" src={Webdev} />

        <img className="how-can-image" src={Softdev} />

        <img className="how-can-image" src={Appdev} />
        </div>
        
      </div>


      <div className="intersect-div">
      <img className="Intersect" src={Intersect} />
      <img className="Ellpise2" src={Ellipse2} />

       

      </div>
    </div>
  );
}
