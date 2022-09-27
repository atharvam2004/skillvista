import React from "react";
import "../../Styles/services/development.css";
import trainings from "../../assets/img/trainservices.png";


function development() {
  return (
    <>
      <div className="development-div">
        <div className="website-dev" id="development-card">
          <div className="dev-text">
            <h5 className="dev-header">Website Development</h5>
            <p className="dev-para">
              Website development is a catch-all term for the work that goes
              into building a website. This includes everything from markup and
              coding to scripting, network configuration, and CMS development.
            </p>
          </div>
        </div>

        <div className="app-dev" id="development-card">
          <div className="dev-text">
            <h5 className="dev-header">Mobile App Development</h5>
            <p className="dev-para">
              Software application development is the process used to design,
              create, and support computer software. It is often done by people
              who have a background in computer programming
            </p>
          </div>
        </div>
        <div className="software-dev" id="development-card">
          <div className="dev-text">
            <h5 className="dev-header">Software Development</h5>
            <p className="dev-para">
              Software development is the process programmers use to build
              computer programs. The process, also known as the Software
              Development Life Cycle (SDLC), includes several phases that
              provide a method for building product
            </p>
          </div>
        </div>
      </div>
      <div className="trainings-div">
      <img alt="mageq" className="training-img" src={trainings} />
        <p className="dev-para2">
          Academic training is a form of work authorization available to J-1
          students, and is for paid and unpaid work off-campus. The training
          must be a direct application of your coursework and/or research to a
          professional position in your field of study. Pre-completion -
          Training you do before you finish your degree.
        </p>
      </div>
    </>
  );
}

export default development;
