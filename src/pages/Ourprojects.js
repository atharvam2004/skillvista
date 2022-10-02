import React from "react";
import Headerprojects from "../components/ourprojects/headerprojects";
import Projectcontent from "../components/ourprojects/projectscontent";

import Navbar1 from "../components/navbar";
import Footer from "../components/footer";

function Ourprojects() {
  return (
    <>
      <Navbar1 />
      <Headerprojects />
      <Projectcontent />
      <Footer />
    </>
  );
}

export default Ourprojects;
