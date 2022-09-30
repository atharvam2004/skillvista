import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../assets/img/logo.png";
import { Link } from "react-router-dom";

import "../Styles/navbar.css";

export default function navbar() {
  return (
    <div>
    
        <Navbar bg="light" expand="lg" id="navbar-main">
          <Container>
            <Navbar.Brand id="navbar-logo">
              <img alt="age3" src={logo} />
            </Navbar.Brand>

            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
              <Link to={"/home"} id="navbar-item">
                  Home
                </Link>
                <Link to={"/services"} id="navbar-item">
                  Services
                </Link>
                <Link to={"/#"} id="navbar-item">
                  OurWork
                </Link>
                <Link to={"/contactus"} id="navbar-item">
                  Contact
                </Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

    </div>
  );
}
