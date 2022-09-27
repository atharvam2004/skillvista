import React from "react";
import "../../Styles/services/Servicesdetails.css";
import Group1 from "../../assets/img/Group1.png";
import Group2 from "../../assets/img/Group2.png";
import Group3 from "../../assets/img/Group3.png";
import Group4 from "../../assets/img/Group4.png";
import Group5 from "../../assets/img/Group5.png";
function Servicesdetails() {
  return (
    <>
      <div className="Servicesdetails-main-div">
        <div className="Servicesdetails-div">
          <img alt="grp1" className="Group2" src={Group1} />

          <div className="Services-content">
            <h5>Data Analysis for Dissertation / Thesis of Ph.D</h5>
          </div>
        </div>

        <div className="Servicesdetails-div">
          <img alt="grp1" className="Group2" src={Group2} />

          <div className="Services-content">
            <h5>Assignments / Project for IT-Comp. Science</h5>
          </div>
        </div>

        <div className="Servicesdetails-div">
          <img alt="grp1" className="Group2" src={Group3} />

          <div className="Services-content">
            <h5>Video Creation </h5>
          </div>
        </div>
      </div>
      <div className="Servicesdetails-main-div">
        <div className="Servicesdetails-div">
          <img alt="grp1" className="Group2" src={Group4} />

          <div className="Services-content">
            <h5>
              Technical Writing Service - Manual / User Guide preparation{" "}
            </h5>
          </div>
        </div>

        <div className="Servicesdetails-div">
          <img alt="grp1" className="Group2" src={Group5} />

          <div className="Services-content">
            <h5>Academics Service - Book chapters writing / QB dev </h5>
          </div>
        </div>
      </div>
    </>
  );
}

export default Servicesdetails;
