import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

import { Container, Nav, Navbar, Button } from "react-bootstrap";
import "../style/header.css";

const Header = ({ toggleDarkMode, darkMode }) => {
  return (
    <Navbar
      expand="lg"
      bg={darkMode ? "dark" : "light"}
      variant={darkMode ? "dark" : "light"}
      className="shadow-sm py-3 sticky-top"
    >
      <Container>
        <Navbar.Brand
          href="/"
          style={{
            fontWeight: "bold",
            fontSize: "1.8rem",
            background: "linear-gradient(to right, #007bff, #00bfff)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            letterSpacing: "1px",
          }}
        >
          Sumit Kumar
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="portfolio-navbar" />
        <Navbar.Collapse id="portfolio-navbar">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" className="me-3 fw-medium">
              Home
            </Nav.Link>
            <Nav.Link
              as={HashLink}
              smooth
              to="/#project"
              className="me-3 fw-medium"
            >
              Projects
            </Nav.Link>
            <Nav.Link
              as={HashLink}
              smooth
              to="/#contact"
              className="me-3 fw-medium"
            >
              Contact
            </Nav.Link>
            <Nav.Link as={HashLink} smooth to="/#about" className="fw-medium">
              About
            </Nav.Link>
            <Nav.Link as={Link} to="/admin" className="fw-medium">
              Admin
            </Nav.Link>
            <Button
              variant={darkMode ? "outline-light" : "outline-dark"}
              onClick={toggleDarkMode}
            >
              {darkMode ? "Light Mode" : "Dark Mode"}
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
