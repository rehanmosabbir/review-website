import React from "react";

import { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import SingleService from "../SingleService/SingleService";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("./serviceData.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <>
      <Container className="mt-5">
        <h2 className="text-center mb-3">Our Services</h2>
        <hr className="w-50 m-auto" />
        <Row xs={1} md={2} className="g-4 mt-5">
          {services?.map((service) => (
            <SingleService service={service} key={service.id}></SingleService>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default Services;
