import React from "react";
import "../../Styles/ourprojects/projectscontent.css";
import int1 from "../../assets/img/Intersect-0.png";
import int2 from "../../assets/img/Intersect-1.png";
import int3 from "../../assets/img/Intersect-2.png";
import int4 from "../../assets/img/Intersect-3.png";
import int5 from "../../assets/img/Intersect-4.png";
import int6 from "../../assets/img/Intersect-5.png";

function projectscontent() {
  return (
    <>
      <div className="our-projects-main" >
        <div className="Project-divs" id="projectdivs1">
          <div className="Project-div">
            <img alt="int1" className="Projectimg" src={int1} />
            <div className="Project-text">
              <p>
                Website development is a catch-all term for the work that goes
                into building a website. This includes everything from markup
                and coding to scripting, network configuration, and CMS
                development.
              </p>
            </div>
          </div>
          <div className="Project-div">
            <img alt="int1" className="Projectimg" src={int2} />
            <div className="Project-text">
              <p>
                Website development is a catch-all term for the work that goes
                into building a website. This includes everything from markup
                and coding to scripting, network configuration, and CMS
                development.
              </p>
            </div>
          </div>
          <div className="Project-div">
            <img alt="int1" className="Projectimg" src={int3} />
            <div className="Project-text">
              <p>
                Website development is a catch-all term for the work that goes
                into building a website. This includes everything from markup
                and coding to scripting, network configuration, and CMS
                development.
              </p>
            </div>
          </div>
        </div>




        
        <div className="Project-divs" id="projectdivs2">
          <div className="Project-div">
            <img alt="int1" className="Projectimg" src={int4} />
            <div className="Project-text">
              <p>
                Website development is a catch-all term for the work that goes
                into building a website. This includes everything from markup
                and coding to scripting, network configuration, and CMS
                development.
              </p>
            </div>
          </div>
          <div className="Project-div">
            <img alt="int1" className="Projectimg" src={int5} />
            <div className="Project-text">
              <p>
                Website development is a catch-all term for the work that goes
                into building a website. This includes everything from markup
                and coding to scripting, network configuration, and CMS
                development.
              </p>
            </div>
          </div>
          <div className="Project-div">
            <img alt="int1" className="Projectimg" src={int6} />
            <div className="Project-text">
              <p>
                Website development is a catch-all term for the work that goes
                into building a website. This includes everything from markup
                and coding to scripting, network configuration, and CMS
                development.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default projectscontent;
