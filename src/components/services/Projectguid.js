import React from "react";
import "../../Styles/services/Projectguid.css";
import operation from "../../assets/img/operation.png";
import supply from "../../assets/img/supply.png";
function Projectguid() {
  return (
    <>
      <div className="Projectguide-main">
        <div className="Projectguide-heading">
          <h3>Project Guidance and Lectures</h3>
        </div>
        <div className="Projectguide-divs">
          <div className="Projectguide-div">
          <img alt="Data" className="Projectguideimg" src={operation} />
          <div className="Projectguide-text"></div>

          </div>
          <div className="Projectguide-div">
          <img alt="Data" className="Projectguideimg" src={supply} />
          <div className="Projectguide-text"></div>


          </div>
        </div>
      </div>
    </>
  );
}

export default Projectguid;
