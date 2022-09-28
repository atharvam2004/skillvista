import React from "react";
import "../../Styles/Contactus/Headercontact.css";

function Headerservices() {
  return (
    <>
      <div className="contact-us-page">
        <div className="contact-map">
          <div className="Home-titles">
            <h3 id="digital">Contact Us</h3>

            <div id="ensuring2">
              <span>Extraordinary service for extraordinary customers. </span>{" "}
            </div>
          </div>
        </div>
        <div className="have-some">
          <h4>Have some questions?</h4> <br />
          <label>
            First name: <br />{" "}
          </label>
          <input
            type="text"
            className="input-contact"
            placeholder="Enter first name"
          />
          <label>
            Last name:
            <br />{" "}
          </label>
          <input
            type="text"
            className="input-contact"
            placeholder="Enter Last name"
          />
          <label>
            Phone:
            <br />{" "}
          </label>
          <input
            type="text"
            className="input-contact"
            placeholder="Enter Phone number"
          />
          <label>
            Email:
            <br />{" "}
          </label>
          <input
            type="text"
            className="input-contact"
            placeholder="ENter Email address"
          />
          <input
            type="textarea"
            name="textValue"
            className="textarea-contact"
            placeholder="Message"
          />
          <button type="submit" className="button-submit">
            Send Message
          </button>
        </div>

        <div className="get-intouch">
          <h5 className="getintouch-text">Get in touch</h5>
          9834343667
          <br />
          inamdar.online@gmail.com
          <br />
          Pune
        </div>
      </div>
    </>
  );
}

export default Headerservices;
