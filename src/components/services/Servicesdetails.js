import React from "react";
import "../../Styles/services/Servicesdetails.css";
import Data from "../../assets/img/Data.png";
import Assign from "../../assets/img/Assign.png";
import Video from "../../assets/img/Video.png";
import Group4 from "../../assets/img/Group4.png";
import Group5 from "../../assets/img/Group5.png";
function Servicesdetails() {
  return (
    <>
      <div className="services-data">
        <div className="services-data-divs" >
          <img alt="Data" className="Dataimg" src={Data} />
          <div className="Data-content">
            <h5>Data Analysis <br /> for Dissertation / Thesis of Ph.D</h5>
          </div>
        </div>
        <div className="services-data-divs" >
          <div className="Data-content">
            <h5>Assignments / Project <br />for IT-Comp. Science</h5>
          </div>
          <img alt="Data" className="Dataimg" src={Assign} />


        </div>
        <div className="services-data-divs" >
          <img alt="Data" className="Dataimg" src={Video} />
          <div className="Data-content">
            <h5>Video Creation</h5>
          </div>

        </div>
      </div>

      <div className="Servicesdetails-main-div">
        <div className="Servicesdetails-div">
          <div className="Services-content">
            <img alt="grp1" className="Group2" src={Group4} />

            <h5>
              Technical Writing Service -<br /> Manual / User Guide preparation{" "}
            </h5>
          </div>
        </div>

        <div className="Servicesdetails-div">
          <div className="Services-content">
            <img alt="grp1" className="Group2" src={Group5} />

            <h5>
              Academics Service -<br /> Book chapters writing / QB dev{" "}
            </h5>
          </div>
        </div>
      </div>
    </>
  );
}

export default Servicesdetails;
