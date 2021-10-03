import React from "react";
import { Card, Col, Button } from "react-bootstrap";
import "./SingleService.css";

const SingleService = (props) => {
  console.log(props.service);
  const { image, course, cost } = props.service;
  return (
    <Col xs={6} md={4}>
      <Card className="card-height">
        <Card.Img variant="top" src={image} className="card-img-height" />
        <Card.Body>
          <Card.Title>{course}</Card.Title>
          <Card.Text>{cost}</Card.Text>
          <Button variant="warning">Enroll</Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default SingleService;
