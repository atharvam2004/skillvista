import React from "react";
import "../../Styles/Home/Project.css";

function Projects() {
  return (
    <div className="our-projects-div">
      <div id="how-can-text">
        <h4>Our Projects</h4>
        <hr id="help-hr"></hr>
    
      </div>
      <div className="our-projects">
          <div className="MobDev" id="dev-div"></div>
          <div className="WebDev" id="dev-div"></div>
          <div className="SoftDev" id="dev-div"></div>
        </div>
    </div>
  );
}

export default Projects;
