import React from "react";
import "../Styles/footer.css";
import logo from "../assets/img/logo.png";

const Footer = () => (
  <div>
    <div className="footer">
      <div className="footer-content">
        <img alt="logofooter" src={logo} />
        <h5>Information</h5>
        <br />
        <span id="footer-span">About Us</span>
        <span id="footer-span">Terms & Conditions</span>
        <span id="footer-span">Terms & Conditions</span>
        <span id="footer-span">Privacy policy</span>
        <span id="footer-span">FAQs</span>
      </div>
    </div>
  </div>
);

export default Footer;
