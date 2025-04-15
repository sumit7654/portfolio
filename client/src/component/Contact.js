import React, { useRef, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = ({ darkMode }) => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [email, setemail] = useState("");
  const [name, setname] = useState("");
  const [query, setquery] = useState("");
  const [number, setnumber] = useState("");

  const handleSubmit = async (e) => {
    const BASE_URL = process.env.REACT_APP_API_URL;

    e.preventDefault();
    try {
      if (!name || !email || !query || !number) {
        return toast.warning("All field are required!");
      }

      setLoading(true);

      const { data } = await axios.post(`${BASE_URL}/api/v1/contact`, {
        name,
        email,
        number,
        query,
      });

      if (data.success) {
        toast.success("Message sent successfully");
        setname("");
        setemail("");
        setquery("");
        setnumber("");
        formRef.current.reset();
      }
      setLoading(false);
      // Simulate API delay

      // toast.success("Message sent successfully! (simulated)");
      // Reset state (important!)
    } catch (error) {
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        toast.error(error.response.data.message);
        setLoading(false);
      } else {
        console.log(error);
        toast.warning(error);
        toast.error("Something went wrong. Please try again.", error);
        setLoading(false);
      }
    }
  };
  return (
    <section
      className={`py-5 px-3 ${
        darkMode ? "bg-dark text-light" : "bg-light text-dark"
      }`}
      id="contact"
    >
      <div className="container max-w-2xl mx-auto">
        <motion.h2
          className="text-center mb-5 fw-bold"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Get in Touch
        </motion.h2>

        <motion.form
          ref={formRef}
          onSubmit={handleSubmit}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <div className="mb-4">
            <label className="form-label">Your Name</label>
            <input
              type="text"
              name="name"
              className="form-control rounded-3 p-3"
              placeholder="Enter full name"
              onChange={(e) => setname(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label className="form-label">Email</label>
            <input
              type="email"
              name="email"
              className="form-control rounded-3 p-3"
              placeholder="Enter email here"
              onChange={(e) => setemail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="form-label">Mobile </label>
            <input
              type="number"
              name="number"
              className="form-control rounded-3 p-3"
              placeholder="+91 9876543210"
              onChange={(e) => setnumber(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label className="form-label">query</label>
            <textarea
              name="query"
              className="form-control rounded-3 p-3"
              rows="2"
              placeholder="Write your message here..."
              onChange={(e) => setquery(e.target.value)}
            ></textarea>
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="btn btn-primary px-5 py-2 rounded-3"
              disabled={loading}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </div>
        </motion.form>
        
      </div>
    </section>
  );
};

export default Contact;
