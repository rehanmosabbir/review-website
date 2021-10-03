import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <Navbar bg="danger" variant="dark" className="py-2">
        <Container>
          <Navbar.Brand href="/">MealDB</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link>
              <NavLink
                activeStyle={{
                  fontWeight: "bold",
                  color: "black",
                  textDecoration: "none",
                }}
                to="/home"
              >
                Home
              </NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink
                activeStyle={{
                  fontWeight: "bold",
                  color: "black",
                  textDecoration: "none",
                }}
                to="/services"
              >
                Services
              </NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink
                activeStyle={{
                  fontWeight: "bold",
                  color: "black",
                  textDecoration: "none",
                }}
                to="/about"
              >
                About
              </NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink
                activeStyle={{
                  fontWeight: "bold",
                  color: "black",
                  textDecoration: "none",
                }}
                to="/contact"
              >
                Contact us
              </NavLink>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
