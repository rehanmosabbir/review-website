import React from "react";
import { Col, Form, Row, Button } from "react-bootstrap";

const Contact = () => {
  return (
    <div className="py-5">
      <div className="container">
        <div className="row py-5">
          <div className="col-md-4">
            <h5>Contact Details</h5>
            <p>
              152/2/A-2, Green Road Rowshan Tower, 4th Floor, Panthapath Signal,
              Dhaka-1205
            </p>
            <p>01972 277 866</p>
            <p>016 30 31 30 31</p>
            <p>info@capstonebd.com</p>
          </div>
          <div className="col-md-8">
            <h2>Contact Us</h2>
            <Form>
              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Control type="text" placeholder="Name" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                  <Form.Control type="email" placeholder="Email" />
                </Form.Group>
              </Row>

              <Form.Group className="mb-3" controlId="formGridAddress1">
                <Form.Control placeholder="Subject" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formGridAddress1">
                <Form.Control
                  as="textarea"
                  placeholder="Message"
                  style={{ height: "100px" }}
                />
              </Form.Group>

              <Form.Group className="mb-3" id="formGridCheckbox">
                <Form.Check
                  type="checkbox"
                  label="I consent to having this website store my submitted information so they can respond to my inquiry.*"
                />
              </Form.Group>

              <Button variant="danger" type="submit">
                SEND
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
