import React from "react";
import Headerservices from "../components/services/Headerservices";
import Development from "../components/services/development";
import Servicesdetails from "../components/services/Servicesdetails";
import Navbar1 from "../components/navbar";
import Footer from "../components/footer";

function Services() {
  return (
    <>
      <Navbar1 />
      <Headerservices />
      <Development />
      <Servicesdetails />
      <Footer />
    </>
  );
}

export default Services;
