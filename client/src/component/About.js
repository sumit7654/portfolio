import React from "react";
import { motion } from "framer-motion";

const About = ({ darkMode }) => {
  return (
    <section
      className={`py-5 ${
        darkMode ? "bg-dark text-light" : "bg-light text-dark"
      }`}
      id="about"
    >
      <div className="container">
        <motion.h2
          className="text-center mb-4 fw-bold"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h2>

        <div className="row align-items-center">
          {/* Text Content */}
          <motion.div
            className="col-md-7"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="lead mb-3">
              I’m a passionate Full Stack Developer with experience in building
              modern, high-performance web apps using the MERN stack. I love
              solving real-world problems and continuously improving my skill
              set.
            </p>
            <p>
              From responsive UI to scalable backend systems, I enjoy the entire
              development cycle. I'm always looking to learn the latest
              technologies and build meaningful products that make a difference.
            </p>

            <div className="mt-4">
              <h6 className="fw-bold mb-2">Tech Stack:</h6>
              <div className="d-flex flex-wrap gap-2">
                {[
                  "React",
                  "Node.js",
                  "Express",
                  "MongoDB",
                  "Redux",
                  "Tailwind",
                  "Bootstrap",
                  "Python",
                  "Machine Learning",
                ].map((tech) => (
                  <span
                    key={tech}
                    className={`badge ${
                      darkMode ? "bg-secondary" : "bg-dark text-light"
                    } px-3 py-2`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Optional Image */}
          <motion.div
            className="col-md-5 text-center mt-4 mt-md-0"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <img
              src="/images/profile.jpg" // use your own image here
              alt="Me"
              className="img-fluid rounded-4 shadow"
              style={{ maxHeight: "300px" }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
