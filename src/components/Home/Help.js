import React from "react";
import "../../Styles/Home/Help.css";

import Appdev from "../../assets/img/Appdev.png";
import Softdev from "../../assets/img/Softdev.png";
import Webdev from "../../assets/img/Webdev.png";
import Trainings from "../../assets/img/Trainings.png";

function Help() {
  return (
    <div className="how-can-we">
      <div id="how-can-text">
        <h4>
          How can we <br />
          help you?
        </h4>
        <hr id="help-hr"></hr>
      </div>

      <div className="how-can">
        <img alt="mage4" className="how-can-image" src={Trainings} />
        <img alt="mage5" className="how-can-image" src={Webdev} />

        <img alt="mage6" className="how-can-image" src={Softdev} />

        <img alt="mage7" className="how-can-image" src={Appdev} />
      </div>
    </div>
  );
}

export default Help;
