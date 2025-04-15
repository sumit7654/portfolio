import React, { useState } from "react";
import { Container, Form, Row, Col, Button, Card } from "react-bootstrap";
import "../style/projectupload.css";
import { toast } from "react-toastify";
import axios from "axios";

const ProjectUpload = ({ darkMode }) => {
  const BASE_URL = process.env.REACT_APP_API_URL;

  const [loading, setLoading] = useState(false);

  const [title, settitle] = useState("");
  const [description, setdescription] = useState("");
  const [language, setlanguage] = useState("");
  const [link, setlink] = useState("");
  const [preview, setpreview] = useState(null);

  const handlesubmit = async (e) => {
    e.preventDefault();

    try {
      if (!title || !description || !language || !link || !preview) {
        return toast.warning("All field are required !");
      }
      setLoading(true);

      const formData = new FormData();
      formData.append("title", title);
      formData.append("description", description);
      formData.append("language", language);
      formData.append("link", link);
      formData.append("preview", preview); // This is the file

      const { data } = await axios.post(
        `${BASE_URL}/api/v1/project`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (data.success) {
        toast.success("Project submitted successfully");
        settitle("");
        setdescription("");
        setlanguage("");
        setlink("");
        setpreview("");
        setLoading(false);
      }
    } catch (error) {
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        toast.error(error.response.data.message);
        settitle("");
        setdescription("");
        setlanguage("");
        setlink("");
        setpreview("");
        setLoading(false);
      } else {
        toast.error("Try after some time !");
        setLoading(false);
        return console.log(error);
      }
    }
  };
  return (
    <Container
      className={`py-5 d-flex justify-content-center align-items-center min-vh-100 ${
        darkMode ? "bg-dark text-light" : "bg-light text-dark"
      }`}
    >
      <Card
        className="p-4 shadow rounded-4"
        style={{ maxWidth: "720px", width: "100%" }}
      >
        <h2 className="text-center fw-bold mb-4 gradient-text">
          Upload Your Project
        </h2>
        <Form onSubmit={handlesubmit}>
          {/* Title */}
          <Form.Group className="mb-3" controlId="projectTitle">
            <Form.Label>Project Title</Form.Label>
            <Form.Control
              type="text"
              name="title"
              placeholder="Enter your project title"
              value={title}
              onChange={(e) => settitle(e.target.value)}
            />
          </Form.Group>

          {/* Description */}
          <Form.Group className="mb-3" controlId="projectDescription">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              name="description"
              rows={3}
              value={description}
              onChange={(e) => setdescription(e.target.value)}
              placeholder="Write a short description"
            />
          </Form.Group>

          <Row>
            {/* Language/Stack */}
            <Col md={6}>
              <Form.Group className="mb-3" controlId="techStack">
                <Form.Label>Languages / Stack</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="e.g. MERN, Django"
                  value={language}
                  onChange={(e) => setlanguage(e.target.value)}
                />
              </Form.Group>
            </Col>

            {/* Project Image */}
            <Col md={6}>
              <Form.Group className="mb-3" controlId="projectImage">
                <Form.Label>Project Image</Form.Label>
                <Form.Control
                  type="file"
                  accept=".jpg,.jpeg,.png"
                  onChange={(e) => setpreview(e.target.files[0])}
                />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            {/* Preview Link */}
            <Col md={6}>
              <Form.Group className="mb-3" controlId="livePreview">
                <Form.Label>Live Preview</Form.Label>
                <Form.Control
                  type="url"
                  placeholder="https://live-demo.com"
                  value={link}
                  onChange={(e) => setlink(e.target.value)}
                />
              </Form.Group>
            </Col>

            {/* GitHub Link */}
            {/* <Col md={6}>
              <Form.Group className="mb-3" controlId="githubLink">
                <Form.Label>GitHub Link</Form.Label>
                <Form.Control
                  type="url"
                  placeholder="https://github.com/project"
                />
              </Form.Group>
            </Col> */}
          </Row>

          {/* Submit */}
          <Button
            variant="primary"
            type="submit"
            className="w-100 py-2 fw-semibold rounded-pill"
            disabled={loading}
          >
            {loading ? "Uploading..." : "Upload Project"}
          </Button>
        </Form>
      </Card>
    </Container>
  );
};

export default ProjectUpload;
