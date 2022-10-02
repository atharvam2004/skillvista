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
        <div className="services-data-divs">
          <img alt="Data" className="Dataimg" src={Data} />
          <div className="Data-content">
            <h5>
              Data Analysis <br /> for Dissertation / Thesis of Ph.D
            </h5>
            <p className="Data-para">
              Data Analysis is the process of systematically applying
              statistical and/or logical techniques to describe and illustrate,
              condense and recap, and evaluate data. According to Shamoo and
              Resnik (2003) various analytic procedures “provide a way of
              drawing inductive inferences from data and distinguishing the
              signal  from the noise  present in the data”..
            </p>
          </div>
        </div>
        <div className="services-data-divs">
          <div className="Data-content">
            <h5>
              Assignments / Project <br />
              for IT-Comp. Science
            </h5>
            <p className="Data-para">
              We’ve observed a lot of students that have a lot of problems when
              it comes to writing college assignments. When they first started
              college, their teachers assigned them many assignments to
              complete, and managing all of them at the same time takes time.
              Our Experts will help you to How to Write My Assignment On
              Computer Science.
            </p>
          </div>
          <img alt="Data" className="Dataimg" src={Assign} />
        </div>
        <div className="services-data-divs">
          <img alt="Data" className="Dataimg" src={Video} />
          <div className="Data-content">
            <h5>Video Creation</h5>
            <p className="Data-para">
              Video production is basically the entire process of creating a
              video. Whether it's a short film, a full-length movie, business
              marketing video, television commercial, music video, or other type
              of film, the process may vary a little with the specifics, but the
              overall process is basically the same.
            </p>
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
            <p className="Data-para2">
              A technical manual is a “how-to guide or manual” created for a
              single objective of making it simple for the end-user to
              understand the technicality of using a product or service.
              Technical manual contains instructions for installation, use,
              maintenance, and steps for effective deployment of equipment.
              Describing the nuts and bolts of a product, the technical manual
              acts as a “how-to” guide for your customers to get them up to
              speed with the product they are using and help them solve any
              challenges they are facing while using it
            </p>
          </div>
        </div>

        <div className="Servicesdetails-div">
          <div className="Services-content">
            <img alt="grp1" className="Group2" src={Group5} />

            <h5>
              Academics Service -<br /> Book chapters writing / QB dev{" "}
            </h5>
            <p className="Data-para2">
              An academic book chapter is a section or division of a book
              focused on a research theme. It is an expert compilation that
              provides a balanced view and a perspective on research that is
              usually scattered in journals and other publications. A book
              chapter is more broadly focused than a journal article and often
              has a greater educational value as book chapters often appear in
              the reading lists of undergraduate and postgraduate students.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Servicesdetails;
