import React from "react";
import Terms from "../components/terms/terms";
import Termscontent from "../components/terms/terms-content";

import Navbar1 from "../components/navbar";
import Footer from "../components/footer";

function termsconditions() {
  return (
    <>
      {" "}
      <Navbar1 />
      <Terms />
      <Termscontent />
      <Footer />
    </>
  );
}

export default termsconditions;
