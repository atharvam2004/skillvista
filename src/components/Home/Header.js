import React from "react";
import "../../Styles/Home/Header.css";

import leftshape from "../../assets/img/leftshape.png";
import people from "../../assets/img/people-group.png";

function Header() {
  return (
    <>
      <img alt="mageq" className="leftshape" src={leftshape} />
      <img alt="mage2" className="people" src={people} />
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
    </>
  );
}

export default Header;
