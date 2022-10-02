import React from "react";
import "../../Styles/ourprojects/headerprojects.css";
import laptop from "../../assets/img/laptop.png";


function headerprojects() {
  return (
    <>
    <div className="headerprojects-div">
    <div className="Home-titles">
          <h3 id="digital2">
            Our Projects <br />

          </h3>

          <div id="ensuring2">
          <span>Clients always get exceptional work from us... </span> <br />

          </div>
        </div>
        <img alt="laptoppng" className="laptop" src={laptop} />

    </div>
    </>
  );
}

export default headerprojects;
