import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faTag,
  faClock,
  faMailBulk,
} from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Footer = () => {
  return (
    <div className=" bg-secondary text-white pt-5 mt-5">
      <div className="d-flex justify-content-around border-bottom pb-5">
        <div>
          <h4>
            <FontAwesomeIcon
              className="me-2 text-danger"
              icon={faMapMarkerAlt}
            />
            Address
          </h4>
          <p>97845 Baker st. </p>
          <p>567 Los Angeles - US</p>
        </div>
        <div>
          <h4>
            <FontAwesomeIcon className="me-2 text-danger" icon={faTag} />
            Reservations
          </h4>
          <p>+94 423-23-221</p>
          <p>reservations@Foores.com</p>
        </div>
        <div>
          <h4>
            <FontAwesomeIcon className="me-2 text-danger" icon={faClock} />
            Opening Hours
          </h4>
          <p>Mon - Sat: 10am - 11pm</p>
          <p>Sunday: Closed</p>
        </div>
        <div>
          <h4>
            <FontAwesomeIcon className="me-2 text-danger" icon={faMailBulk} />
            Keep in touch
          </h4>
          <div class="input-group mb-3">
            <input
              type="text"
              class="form-control"
              placeholder="Recipient's username"
              aria-label="Recipient's username"
              aria-describedby="button-addon2"
            />
            <button
              class="btn btn-warning btn-sm"
              type="button"
              id="button-addon2"
            >
              Send
            </button>
          </div>
        </div>
      </div>
      <p className="text-center text-white py-4 m-0">
        © 2021 Foores Restaurant - All rights reserved
      </p>
    </div>
  );
};

export default Footer;
