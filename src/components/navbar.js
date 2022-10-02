import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../assets/img/logo.png";
import { Link } from "react-router-dom";

import "../Styles/navbar.css";

export default function navbar() {
  return (

    <>
      <Navbar id="navbar-main" expand="lg">
        <Container>
          <Link to={"/"}><Navbar.Brand id="navbar-logo">
            <img alt="age3" src={logo} />
          </Navbar.Brand></Link>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="justify-content-end" style={{ width: "100%" }}>
              <Link id="navbar-item" to={"/"}>Home</Link>
              <Link id="navbar-item" to={"/services"}>Services</Link>
              <Link id="navbar-item" to={"/projects"}>Our Work</Link>
              <Link id="navbar-item" to={"/contactus"}>Contact</Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
