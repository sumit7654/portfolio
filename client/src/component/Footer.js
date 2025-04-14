import React from "react";
import { motion } from "framer-motion";

const Footer = ({ darkMode }) => {
  return (
    <footer
      className={`py-4 mt-5 border-top ${
        darkMode
          ? "bg-dark text-light border-secondary"
          : "bg-light text-dark border-muted"
      }`}
    >
      <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center">
        <motion.p
          className="mb-2 mb-md-0 fw-light"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          © {new Date().getFullYear()} Sumit Kumar. All rights reserved.
        </motion.p>

        <motion.div
          className="d-flex gap-3"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className={`text-decoration-none fs-5 ${
              darkMode ? "text-light" : "text-dark"
            }`}
          >
            <i className="fab fa-github"></i>
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className={`text-decoration-none fs-5 ${
              darkMode ? "text-light" : "text-dark"
            }`}
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a
            href="mailto:youremail@example.com"
            className={`text-decoration-none fs-5 ${
              darkMode ? "text-light" : "text-dark"
            }`}
          >
            <i className="fas fa-envelope"></i>
          </a>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
