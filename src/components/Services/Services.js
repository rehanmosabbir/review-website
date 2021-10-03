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
      <Container>
        <Row xs={1} md={2} className="g-4">
          {services?.map((service) => (
            <SingleService service={service} key={service.id}></SingleService>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default Services;
