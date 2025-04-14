import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Adminregister = ({ darkMode }) => {
  const navigate = useNavigate();
  //states
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [number, setnumber] = useState("");
  const [role, setrole] = useState("");
  const [password, setpassword] = useState("");
  const handlesubmit = async (e) => {
    e.preventDefault();
    try {
      if (!name || !email || !number || !role || !password) {
        return toast.warning("Required all field!");
      }

      const { data } = await axios.post("/api/v1/admin-register", {
        name,
        email,
        number,
        role,
        password,
      });
      if (data.success) {
        toast.success("Admin registered successfully");
        setname("");
        setemail("");
        setnumber("");
        setrole("");
        setpassword("");
        navigate("/admin");
      }
    } catch (error) {
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        toast.error(error.response.data.message || "Registration failed");
        setname("");
        setemail("");
        setnumber("");
        setrole("");
        setpassword("");
      } else {
        toast.error("Something went wrong...");
        console.log(error);
      }
    }
  };

  return (
    <>
      <div
        className={`container d-flex justify-content-center align-items-center min-vh-100 bg-light  ${
          darkMode ? "bg-dark text-light" : "bg-light text-dark"
        }`}
      >
        <div
          className="card p-4 shadow-lg"
          style={{ width: "100%", maxWidth: 450, borderRadius: 20 }}
        >
          <h3 className="text-center text-primary fw-bold mb-4">
            Admin Registration
          </h3>
          <form onSubmit={handlesubmit}>
            <div className="mb-3">
              <label htmlFor="adminName" className="form-label">
                Full Name
              </label>
              <input
                type="text"
                className="form-control"
                id="adminName"
                name="name"
                value={name}
                onChange={(e) => setname(e.target.value)}
                placeholder="Enter full name"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="adminEmail" className="form-label">
                Email address
              </label>
              <input
                type="email"
                name="email"
                className="form-control"
                id="adminEmail"
                value={email}
                onChange={(e) => setemail(e.target.value)}
                placeholder="Enter email"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="adminNumber" className="form-label">
                Phone Number
              </label>
              <input
                type="text"
                name="number"
                className="form-control"
                id="adminNumber"
                value={number}
                onChange={(e) => setnumber(e.target.value)}
                placeholder="Enter phone number"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="adminRole" className="form-label">
                Role
              </label>
              <input
                type="text"
                name="role"
                className="form-control"
                id="adminRole"
                value={role}
                onChange={(e) => setrole(e.target.value)}
                placeholder="Enter role (e.g., Superadmin)"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="adminpassword" className="form-label">
                Password
              </label>
              <input
                type="password"
                name="password"
                className="form-control"
                id="adminPassword"
                value={password}
                onChange={(e) => setpassword(e.target.value)}
                placeholder="Enter password"
              />
            </div>
            <button type="submit" className="btn btn-primary w-100">
              Register Admin
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Adminregister;
