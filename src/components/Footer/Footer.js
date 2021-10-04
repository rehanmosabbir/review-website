import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faPhoneVolume,
  faClock,
  faMailBulk,
} from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Footer = () => {
  return (
    <div className=" bg-secondary text-white pt-5 mt-5">
      <div className="d-flex justify-content-around border-bottom pb-5">
        <div>
          <h4 className="mb-3">
            <FontAwesomeIcon
              className="me-2 text-danger"
              icon={faMapMarkerAlt}
            />
            Address
          </h4>
          <p className="mb-0">152/2/A-2, Green Road Rowshan Tower,</p>
          <p className="mb-0">4th Floor, Panthapath Signal,</p>
          <p>Dhaka-1205</p>
        </div>
        <div>
          <h4 className="mb-3">
            <FontAwesomeIcon
              className="me-2 text-danger"
              icon={faPhoneVolume}
            />
            Contact Us
          </h4>
          <p className="mb-0">01972 277 866</p>
          <p>016 30 31 30 31</p>
          <p>info@rehanedubd.com</p>
        </div>
        <div>
          <h4 className="mb-3">
            <FontAwesomeIcon className="me-2 text-danger" icon={faClock} />
            Opening Hours
          </h4>
          <p>Mon - Sat: 10am - 11pm</p>
          <p>Sunday: Closed</p>
        </div>
        <div>
          <h4 className="mb-3">
            <FontAwesomeIcon className="me-2 text-danger" icon={faMailBulk} />
            Keep in touch
          </h4>
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Subscribe"
              aria-label="Recipient's username"
              aria-describedby="button-addon2"
            />
            <button
              className="btn btn-danger btn-sm"
              type="button"
              id="button-addon2"
            >
              Send
            </button>
          </div>
        </div>
      </div>
      <p className="text-center text-white py-4 m-0">
        © 2021 Rehan's Educare - All rights reserved
      </p>
    </div>
  );
};

export default Footer;
