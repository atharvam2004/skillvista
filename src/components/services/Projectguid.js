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
          <div className="Projectguide-div" id="projectguide-div1">
            <img alt="Data" className="Projectguideimg" src={operation} />
            <div className="Projectguide-text">
              <h4>Operation Management</h4>
              <p className="Data-para2">
                Operations management is the branch of management that
                administers the complete production timeline of a service/
                product from the input stage to the finished stage, including
                planning, organizing, and supervising the operations,
                manufacturing and production processes, and service delivery to
                lead to the desired ...
              </p>
            </div>
          </div>
          <div className="Projectguide-div">
            <img alt="Data" className="Projectguideimg" src={supply} />
            <div className="Projectguide-text">
              <h4>Supply Chain Management</h4>
              <p className="Data-para2">
                Supply chain management is the management of the flow of goods
                and services and includes all processes that transform raw
                materials into final products. It involves the active
                streamlining of a business's supply-side activities to maximize
                customer value and gain a competitive advantage in the
                marketplace.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Projectguid;
