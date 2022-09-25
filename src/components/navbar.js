import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../assets/img/logo.png";

import "../Styles/navbar.css";

export default function navbar() {
  return (
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
  );
}
