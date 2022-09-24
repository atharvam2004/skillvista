import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../images/logo.png";
import leftshape from "../images/leftshape.png";
import people from "../images/people-group.png";
import { Row, Col } from "react-bootstrap";

import Appdev from "../images/Appdev.png";
import Softdev from "../images/Softdev.png";
import Webdev from "../images/Webdev.png";
import Trainings from "../images/Trainings.png";

import Intersect from "../images/Intersect.png";
import Ellipse from "../images/Ellipse2.png";

import Group1 from "../images/Group1.png";
import Group2 from "../images/Group2.png";
import Group3 from "../images/Group3.png";
import Group4 from "../images/Group4.png";
import Group5 from "../images/Group5.png";

import Group6 from "../images/Group6.png";
import Group7 from "../images/Group7.png";
import Group8 from "../images/Group8.png";

import man2 from "../images/man2.png";
import man1 from "../images/man1.png";

import "../components/navbar.css";

export default function navbar() {
  return (
    <div>
      <img alt="mageq" className="leftshape" src={leftshape} />
      <img alt="mage2" className="people" src={people} />
      <div>
        <Navbar bg="light" expand="lg" id="navbar-main">
          <Container>
            <Navbar.Brand id="navbar-logo">
              <img alt="mage3" src={logo} />
            </Navbar.Brand>

            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
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
          <img alt="mage4" className="how-can-image1" src={Trainings} />
          <img alt="mage5" className="how-can-image" src={Webdev} />

          <img alt="mage6" className="how-can-image" src={Softdev} />

          <img alt="mage7" className="how-can-image" src={Appdev} />
        </div>
      </div>


      
      <div className="container-intersect">
        <div className="intersect-div">
          <img alt="mage8" className="Intersect" src={Intersect} />
        </div>
        <div className="our-work">
          <div className="work-sections">
            <img alt="magea" className="Group1" src={Group1} />
            <span className="Group-spans">
              Data Analysis for Dissertation / Thesis of Ph.D
            </span>
          </div>

          <div className="work-sections">
            <span className="Group-spans">
              Assignments / Project for IT-Comp. Science
            </span>
            <img alt="maged" className="Group1" src={Group2} />
          </div>

          <div className="work-sections">
            <img alt="magef" className="Group1" src={Group3} />
            <span className="Group-spans">
              Technical Writing Service - Manual / User Guide preparation{" "}
            </span>
          </div>

          <div className="work-sections">
            <span className="Group-spans">Video Creation</span>
            <img alt="mageg" className="Group1" src={Group4} />
          </div>

          <div className="work-sections">
            <img alt="mageh" className="Group1" src={Group5} />
            <span className="Group-spans">
              Academics Service - Book chapters writing / QB development{" "}
            </span>
          </div>
        </div>
      </div>
      <div className="our-projects-div">
        <div id="how-can-text">
          <h4>Our Projects</h4>
          <hr id="help-hr"></hr>
          <div className="our-projects">
            <div className="MobDev"></div>
            <div className="WebDev"></div>
            <div className="SoftDev"></div>

          </div>
        </div>
      </div>

      <div className="our-clients">
        <img alt="ellipse" className="ellipse" src={Ellipse} />

        <div id="how-can-text">
          <h4>
            What our Clients <br />
            are saying?
          </h4>
          <hr id="help-hr"></hr>
        </div>

        <div className="Rectangles">
          <Container>
            <Row>
              <Col lg={4} md={12}>
                <div className="Rectangle1">
                  <img alt="man1" className="man1" src={man1} />
                  <br />
                  <p className="client-review"> An IT startup, good, knowledgeable and collaborative staff,
                  providing business softwares and android app services. Also
                  provides Digital Marketing, ERP Softwares, E-commerce
                  websites, Android apps all are best products. They provide
                  24/7 service support to their clients. Happy clients from all
                  over Maharashtra State.</p>
                 
                </div>
              </Col>
              <Col lg={4} md={12}>
                <div className="Rectangle2">
                  <img alt="man2" className="man1" src={man2} />
                  <p className="client-review"> An IT startup, good, knowledgeable and collaborative staff,
                  providing business softwares and android app services. Also
                  provides Digital Marketing, ERP Softwares, E-commerce
                  websites, Android apps all are best products. They provide
                  24/7 service support to their clients. Happy clients from all
                  over Maharashtra State.</p>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </div>
  );
}
