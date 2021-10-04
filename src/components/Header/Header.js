import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="main-nav">
      <Navbar bg="danger" variant="dark" className="py-2">
        <Container>
          <NavLink to="/" className="fs-5">
            REHAN'S EDUCARE
          </NavLink>
          <Nav className="ms-auto">
            <NavLink
              activeStyle={{
                fontWeight: "bold",
                color: "#222",
                textDecoration: "none",
              }}
              to="/home"
            >
              Home
            </NavLink>

            <NavLink
              activeStyle={{
                fontWeight: "bold",
                color: "#222",
                textDecoration: "none",
              }}
              to="/services"
            >
              Services
            </NavLink>

            <NavLink
              activeStyle={{
                fontWeight: "bold",
                color: "#222",
                textDecoration: "none",
              }}
              to="/about"
            >
              About
            </NavLink>

            <NavLink
              activeStyle={{
                fontWeight: "bold",
                color: "#222",
                textDecoration: "none",
              }}
              to="/contact"
            >
              Contact us
            </NavLink>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
