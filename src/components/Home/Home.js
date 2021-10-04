import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import SingleService from "../SingleService/SingleService";
import Testimonials from "../Testimonials/Testimonials";
import "./Home.css";

const Home = () => {
  const [servicesMini, setServicesMini] = useState([]);

  useEffect(() => {
    fetch("./serviceDataMini.json")
      .then((res) => res.json())
      .then((data) => setServicesMini(data));
  }, []);
  return (
    <>
      <div className="header d-flex justify-content-center align-items-center">
        <div className="p-5 fw-bold text-white text-center">
          <h2 className="display-3 fw-lighter">
            Welcome to <span className="text-danger">Rehan's Educare</span>
          </h2>
          <div className="w-75 m-auto  text-black fw-lighter">
            <p className="objective-text mt-3">
              To help students achieve the highest success by providing quality
              education, guidance, care & inspiration
            </p>
          </div>
          <button className="btn btn-danger btn-lg mt-3">Learn more</button>
        </div>
      </div>
      <Container className="mt-5">
        <h2 className="text-center mb-3">Our Happy Students</h2>
        <hr className="w-50 m-auto" />
        <Testimonials></Testimonials>
      </Container>
      <Container className="mt-5">
        <h2 className="text-center mb-3">Our Services</h2>
        <hr className="w-50 m-auto" />
        <Row xs={1} md={2} className="g-4 mt-5">
          {servicesMini?.map((service) => (
            <SingleService service={service} key={service.id}></SingleService>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default Home;
