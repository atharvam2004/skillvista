import React from "react";
import "../../Styles/Home/Project.css";
import MobDev from "../../assets/img/Group7.png";
import WebDev from "../../assets/img/Group6.png";
import SoftDev from "../../assets/img/Group8.png";

function Projects() {
  return (
    <div className="our-projects-div">
      <div id="how-can-text">
        <h4>Our Projects</h4>
        <hr id="help-hr"></hr>
      </div>
      <div className="our-projects">
        <div className="MobDev" id="dev-div">
          <img alt="MobDev" className="Projectimg" src={MobDev} />
          <div className="projects-text" id="projects-para">
            <h4>Website Development</h4>
            <p className="projects-para" >

            </p>
          </div>
        </div>

        <div className="WebDev" id="dev-div">
          <img alt="MobDev" className="Projectimg" src={SoftDev} />
          <div className="projects-text2" id="projects-para">
          <h4>Software Development</h4>
            <p className="projects-para">

            </p>
          </div>
        </div>

        <div className="SoftDev" id="dev-div">
          <img alt="MobDev" className="Projectimg" src={WebDev} />
          <div className="projects-text3" id="projects-para">
          <h4> Mobile App Development</h4>
            <p className="projects-para">

            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
