// src/component/ProjectSection.js
import React, { useEffect, useState } from "react";
import { Card, Button, Row, Col } from "react-bootstrap";
import axios from "axios";
// import { HashLink } from "react-router-hash-link";

const ProjectSection = () => {
  const BASE_URL = process.env.REACT_APP_API_URL;

  const [projects, setprojects] = useState([]);

  const fetchData = async () => {
    try {
      const { data } = await axios.get(`${BASE_URL}/api/v1/project`);
      if (data.success) {
        setprojects(data.data);
      }
    } catch (error) {
      console.error("Fetching problem in project", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container my-5" id="project">
      <h2 className="text-center mb-4 fw-bold">My Projects</h2>
      {projects.length === 0 ? (
        <p className="text-center">No projects to display.</p>
      ) : (
        <Row>
          {projects.map((proj, idx) => (
            <Col md={6} lg={4} key={idx} className="mb-4">
              <Card className="shadow-sm h-100">
                <Card.Img
                  variant="top"
                  src={`/uploads/${proj.preview}`}
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <Card.Body>
                  <Card.Title>{proj.title}</Card.Title>
                  <Card.Text>{proj.description}</Card.Text>
                  <div className="mb-2">
                    {proj.language.map((lang, i) => (
                      <span key={i} className="badge bg-secondary me-1">
                        {lang}
                      </span>
                    ))}
                  </div>
                  <Button
                    href={proj.link}
                    target="_blank"
                    variant="primary"
                    className="w-100"
                  >
                    View Project
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      )}
    </div>
  );
};

export default ProjectSection;
