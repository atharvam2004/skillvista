import React from "react";
import "../../Styles/Home/Feedback.css";
import { Row, Col, Container  } from "react-bootstrap";

import Ellipse from "../../assets/img/Ellipse2.png";
import man2 from "../../assets/img/man2.png";
import man1 from "../../assets/img/man1.png";

function Feedback() {
  return (
    <div className="our-clients">
      <img alt="ellipse" className="ellipse" src={Ellipse} />

      <div id="how-can-text">
        <h4>
          What our Clients <br />
          are saying?
        </h4>
        <hr id="help-hr"></hr>
      </div>

      <div className="Rectangles">
        <Container>
          <Row>
            <Col lg={4} md={12}>
              <div className="Rectangle1">
                <img alt="man1" className="man1" src={man1} />
                <br />
                <p className="client-review">
                  {" "}
                  An IT startup, good, knowledgeable and collaborative staff,
                  providing business softwares and android app services. Also
                  provides Digital Marketing, ERP Softwares, E-commerce
                  websites, Android apps all are best products. They provide
                  24/7 service support to their clients. Happy clients from all
                  over Maharashtra State.
                </p>
              </div>
            </Col>
            <Col lg={4} md={12}>
              <div className="Rectangle2">
                <img alt="man2" className="man1" src={man2} />
                <p className="client-review">
                  {" "}
                  An IT startup, good, knowledgeable and collaborative staff,
                  providing business softwares and android app services. Also
                  provides Digital Marketing, ERP Softwares, E-commerce
                  websites, Android apps all are best products. They provide
                  24/7 service support to their clients. Happy clients from all
                  over Maharashtra State.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default Feedback;
