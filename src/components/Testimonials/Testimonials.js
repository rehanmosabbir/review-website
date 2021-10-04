import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";

const Testimonials = () => {
  return (
    <div className="container">
      <div className="row row-cols-1 row-cols-md-3 g-4 mt-4">
        <div className="col">
          <div class="card border-danger mb-3" style={{ maxWidth: "18rem" }}>
            <div class="card-header">HI!</div>
            <div class="card-body text-danger">
              <p class="card-text">
                <FontAwesomeIcon className="fs-2 me-3" icon={faQuoteLeft} />I
                would suggest everyone to visit Rehan's Educare if you are
                planning to study abroad. If even you are doing the process
                yourself, you should visit Rehan's Educare.
              </p>
              <h5 class="card-title blockquote-footer pt-2">
                NAZMUN NAHAR MISTI
              </h5>
            </div>
          </div>
        </div>
        <div className="col">
          <div class="card border-danger mb-3" style={{ maxWidth: "18rem" }}>
            <div class="card-header">HI!</div>
            <div class="card-body text-danger">
              <p class="card-text">
                <FontAwesomeIcon className="fs-2 me-3" icon={faQuoteLeft} />
                In a word Rehan's Educare has the best environment and equipment
                to assist a student with everything he needs to get admitted at
                a foreign school.
              </p>
              <h5 class="card-title blockquote-footer pt-2">MIR AFTAB UDDIN</h5>
            </div>
          </div>
        </div>
        <div className="col">
          <div class="card border-danger mb-3" style={{ maxWidth: "18rem" }}>
            <div class="card-header">HELLO!</div>
            <div class="card-body text-danger">
              <p class="card-text">
                <FontAwesomeIcon className="fs-2 me-3" icon={faQuoteLeft} />I
                would suggest everyone to visit Rehan's Educare if you are
                planning to study abroad. If even you are doing the process
                yourself, you should visit Rehan's Educare.
              </p>
              <h5 class="card-title blockquote-footer pt-2">
                SABBIR AHMED SAZAL
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
