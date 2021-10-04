import React from "react";
import { Card, Col, Button } from "react-bootstrap";
import "./SingleService.css";

const SingleService = (props) => {
  console.log(props.service);
  const { image, course, cost } = props.service;
  return (
    <Col xs={6} md={4} className="mb-4">
      <Card className="card-height" style={{ width: "16rem" }}>
        <Card.Img variant="top" src={image} className="card-img-height" />
        <Card.Body>
          <Card.Title className="fs-6">{course}</Card.Title>
          <hr />
          <Card.Text className="d-inline-block mt-4 text-decoration-line-through">
            ৳ {cost}
          </Card.Text>
          <Card.Text className="d-inline-block ms-1 mt-4">
            <span className="text-danger">৳ {cost - 500}</span>
          </Card.Text>
          <Button variant="danger" className="d-inline-block ms-5">
            Enroll
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default SingleService;
