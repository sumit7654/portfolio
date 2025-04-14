import axios from "axios";
import React, { useEffect, useState, useCallback } from "react";
// import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Card, Nav } from "react-bootstrap";
import {
  FaUsers,
  FaChartBar,
  FaProjectDiagram,
  FaSignOutAlt,
  FaCogs,
} from "react-icons/fa";

const AdminDashboard = ({ darkMode }) => {
  const BASE_URL = process.env.REACT_APP_API_URL;
  const [usercontact, setusercontact] = useState([]);
  const [datacount, setdatacount] = useState(0);
  const [projectcount, setprojectcount] = useState(0);

  const fetchuser = useCallback(
    async (req, res) => {
      try {
        const contactres = await axios.get(`${BASE_URL}/api/v1/contact`);
        const projectres = await axios.get(`${BASE_URL}/api/v1/project`);

        if (contactres.data.success) {
          setusercontact(contactres.data.data);
          setdatacount(contactres.data.count);
        }
        if (projectres.data.success) {
          setprojectcount(projectres.data.count);
        }
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    },
    [BASE_URL]
  );

  useEffect(() => {
    fetchuser();
    const interval = setInterval(() => {
      fetchuser(); // Auto-fetch every 30 seconds
    }, 30000);

    return () => clearInterval(interval); // Clean up on unmount
  }, [fetchuser]);

  return (
    <div
      className={`d-flex min-vh-100 ${
        darkMode ? "dark-section" : "light-section"
      }`}
    >
      {/* Sidebar */}
      <div className="bg-dark text-white p-3" style={{ width: "250px" }}>
        <h3 className="mb-4 text-center fw-bold border-bottom pb-3">
          Admin Panel
        </h3>
        <Nav className="flex-column gap-2">
          <Nav.Link className="text-white" href="#">
            <FaChartBar className="me-2" />
            Dashboard
          </Nav.Link>
          <Nav.Link className="text-white" href="#">
            <FaUsers className="me-2" />
            Users
          </Nav.Link>
          <Nav.Link className="text-white" href="project">
            <FaProjectDiagram className="me-2" />
            Projects
          </Nav.Link>
          <Nav.Link className="text-white" href="#">
            <FaCogs className="me-2" />
            Settings
          </Nav.Link>
          <Nav.Link className="text-white mt-4" href="#">
            <FaSignOutAlt className="me-2" />
            Logout
          </Nav.Link>
        </Nav>
      </div>

      {/* Main content */}
      <Container fluid className="p-4" style={{ backgroundColor: "#f8f9fa" }}>
        <h2 className="mb-4 fw-bold">Welcome Admin 👋</h2>
        <Row className="g-4">
          <Col md={4}>
            <Card className="shadow border-0 rounded-4">
              <Card.Body>
                <Card.Title className="fw-semibold mb-3">
                  Total Query
                </Card.Title>
                <h3 className="text-primary">{datacount}</h3>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4}>
            <Card className="shadow border-0 rounded-4">
              <Card.Body>
                <Card.Title className="fw-semibold mb-3">
                  Total Projects
                </Card.Title>
                <h3 className="text-success">{projectcount}</h3>
              </Card.Body>
            </Card>
          </Col>

          {/* <Col md={4}>
            <Card className="shadow border-0 rounded-4">
              <Card.Body>
                <Card.Title className="fw-semibold mb-3">Site Visitors</Card.Title>
                <h3 className="text-warning">7,850</h3>
              </Card.Body>
            </Card>
          </Col> */}
        </Row>

        <Card className="mt-5 shadow-sm border-0 rounded-4">
          <Card.Body>
            <Card.Title className="mb-4 fw-semibold">
              Recent Activities
            </Card.Title>
            {usercontact.length > 0 ? (
              <ul className="list-group list-group-flush">
                {usercontact.slice(0, 8).map((entry, index) => (
                  <li
                    key={index}
                    className="list-group-item"
                    title={entry.query}
                  >
                    📌<strong>{entry.email}</strong>: "
                    {entry.query.slice(0, 100)}..."{" "}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-muted">No recent contact activity.</p>
            )}
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};

export default AdminDashboard;
