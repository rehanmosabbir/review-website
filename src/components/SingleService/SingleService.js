import React from "react";
import { Card, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const SingleService = (props) => {
  console.log(props.service);
  const { image, course, cost } = props.service;
  return (
    <Col xs={6} md={4}>
      <Card>
        <Card.Img variant="top" src={image} />
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
