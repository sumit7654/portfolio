import axios from "axios";
import React, { useState } from "react";
import { Form, Button, Card, Container } from "react-bootstrap";
import { FaUserShield, FaLock } from "react-icons/fa";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
// import "./Adminlogin.css";

const Adminlogin = () => {
  //usestate
  const navigate = useNavigate();
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const handlesubmit = async (e) => {
    e.preventDefault();

    try {
      if (!email || !password) {
        return toast.warning("All field are required!");
      }
      const { data } = await axios.post("/api/v1/admin-login", {
        email,
        password,
      });
      if (data.success) {
        toast.success("Login successfully ");
        setpassword("");
        setemail("");
        navigate("/admin-dashboard");
      }
    } catch (error) {
      setpassword("");
      setemail("");
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        toast.error(error.response.data.message);
      } else toast.error("something went wrong...");
    }
  };

  return (
    <div className="admin-login-wrapper">
      <Container className="d-flex justify-content-center align-items-center min-vh-100">
        <Card className="p-4 shadow-lg admin-login-card">
          <h2 className="text-center mb-4 gradient-text">Admin Login</h2>
          <Form onSubmit={handlesubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>
                <FaUserShield className="me-2" />
                Email
              </Form.Label>
              <Form.Control
                name="email"
                type="text"
                value={email}
                onChange={(e) => setemail(e.target.value)}
                placeholder="Enter username"
              />
            </Form.Group>

            <Form.Group className="mb-4" controlId="formBasicPassword">
              <Form.Label>
                <FaLock className="me-2" />
                Password
              </Form.Label>
              <Form.Control
                type="password"
                value={password}
                placeholder="Password"
                onChange={(e) => setpassword(e.target.value)}
              />
            </Form.Group>

            <Button variant="primary" type="submit" className="w-100 login-btn">
              Log In
            </Button>
          </Form>
        </Card>
      </Container>
    </div>
  );
};

export default Adminlogin;
