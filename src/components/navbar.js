import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../images/logo.png";
import leftshape from "../images/leftshape.png";
import people from "../images/people-group.png";

import Appdev from "../images/Appdev.png";
import Softdev from "../images/Softdev.png";
import Webdev from "../images/Webdev.png";
import Trainings from "../images/Trainings.png";

import Ellipse2 from "../images/Ellipse2.png";
import Intersect from "../images/Intersect.png";

import Group1 from "../images/Group1.png";
import Group2 from "../images/Group2.png";
import Group3 from "../images/Group3.png";
import Group4 from "../images/Group4.png";
import Group5 from "../images/Group5.png";

import "../components/navbar.css";

export default function navbar() {
  return (
    <div>
      <img alt="imageq"  className="leftshape" src={leftshape} />
      <img alt="image2"  className="people" src={people} />
      <div>
        <Navbar bg="light" expand="lg" id="navbar-main">
          <Container>
            <Navbar.Brand id="navbar-logo">
              <img alt="image3"  src={logo} />
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

        <h3 id="digital">
          Digital Products <br />
          For your Ideas
        </h3>

        <div id="ensuring">
          <span>Ensuring the best</span> <br />
          <span>returns on your requirements...</span>
        </div>
      </div>

      <div className="how-can-we">
        <div id="how-can-text">
          <h4>
            How can we <br />
            help you?
          </h4>
          <hr id="help-hr"></hr>
        </div>

        <div className="how-can">
          <img alt="image4"  className="how-can-image1" src={Trainings} />
          <img alt="image5"   className="how-can-image" src={Webdev} />

          <img alt="image6"  className="how-can-image" src={Softdev} />

          <img alt="image7"  className="how-can-image" src={Appdev} />
        </div>
      </div>
      <div className="container-intersect" >
        <div className="intersect-div">
          <img alt="image8"  className="Intersect" src={Intersect} />
          <img alt="image9"  className="Ellpise2" src={Ellipse2} />
        </div>
        <div className="our-work">
          <div className="work-sections">
            <img alt="imagea"  className="Group1" src={Group1} />
            <span className="Group-spans">
              Data Analysis for Dissertation / Thesis of Ph.D
            </span>
          </div>

          <div className="work-sections">
            <span className="Group-spans">
              Assignments / Project for IT-Comp. Science
            </span>
            <img alt="imaged"  className="Group1" src={Group2} />
          </div>

          <div className="work-sections">
          <img alt="imagef"  className="Group1" src={Group3} />
            <span className="Group-spans">
            Technical Writing Service - Manual / User Guide preparation            </span>
          </div>

          <div className="work-sections">
            <span className="Group-spans">
            Video Creation            
            </span>
            <img alt="imageg"  className="Group1" src={Group4} />
          </div>

          <div className="work-sections">
          <img alt="imageh"  className="Group1" src={Group5} />
            <span className="Group-spans">
            Academics Service - Book chapters writing / QB development            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
