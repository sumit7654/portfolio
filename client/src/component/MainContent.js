import React from "react";
import "../style/MainContent.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import { motion } from "framer-motion";
// import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const MainContent = ({ darkMode }) => {
  return (
    <div
      className={`py-5 ${darkMode ? "dark-section" : "light-section"}`}
      style={{ minHeight: "80vh" }}
    >
      <Container>
        <Row className="align-items-center">
          {/* Left Content */}
          <Col md={6} className="text-center text-md-start">
            <motion.h1
              className="fw-bold display-5 text-primary mb-3"
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7 }}
            >
              Hi, I'm{" "}
              <span className={darkMode ? "text-light" : "text-dark"}>
                Sumit Kumar
              </span>
            </motion.h1>

            <motion.p
              className={`lead mb-4  ${darkMode ? "text-light" : "text-dark"}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              A passionate full-stack developer crafting modern and
              high-performance websites and web apps using MERN Stack and
              cutting-edge tech.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <Button
                href="/SUMIT_KUMAR_resume_2025.pdf"
                variant="primary"
                className="me-3 px-4"
              >
                View Resume
              </Button>
              <Button
                as={HashLink}
                smooth
                to="/#contact"
                variant="outline-primary"
                className="px-4"
              >
                Contact Me
              </Button>
            </motion.div>
          </Col>

          {/* Right Image */}
          <Col md={6} className="text-center mt-4 mt-md-0">
            <motion.img
              src="/images/profile.jpg" // Change to your image path
              alt="Profile"
              className="img-fluid rounded-circle shadow "
              style={{ maxHeight: "420px" }}
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default MainContent;
