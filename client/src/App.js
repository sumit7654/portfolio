import "./App.css";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import React, { useState } from "react";
import Header from "./component/Header.js";
import ProjectSection from "./component/ProjectSection.js";
import MainContent from "./component/MainContent.js";
import Contact from "./component/Contact.js";
import Footer from "./component/Footer.js";
import "@fortawesome/fontawesome-free/css/all.min.css";
import About from "./component/About.js";
import Adminlogin from "./pages/Adminlogin.js";
import Adminregister from "./pages/Adminregister.js";
import ProjectUpload from "./pages/ProjectUpload.js";
import AdminDashboard from "./component/AdminDashboard.js";
import NotFound from "./component/NotFound.js";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <div className={darkMode ? "dark-mode" : "light-mode"}>
      <ToastContainer position="top-center" autoClose={3000} />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
              <MainContent darkMode={darkMode} />
              <ProjectSection darkMode={darkMode} />
              <About darkMode={darkMode} />
              <Contact darkMode={darkMode} />

              <Footer darkMode={darkMode} />
            </>
          }
        />
        <Route
          path="/admin"
          element={
            <>
              <Header toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
              <Adminlogin />
            </>
          }
        />
        <Route
          path="/admin-register"
          element={
            <>
              <Header toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
              <Adminregister
                toggleDarkMode={toggleDarkMode}
                darkMode={darkMode}
              />
            </>
          }
        />
        <Route
          path="/project"
          element={
            <>
              <Header toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
              <ProjectUpload
                toggleDarkMode={toggleDarkMode}
                darkMode={darkMode}
              />
            </>
          }
        />
        <Route
          path="/admin-dashboard"
          element={
            <>
              <Header toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
              <AdminDashboard
                toggleDarkMode={toggleDarkMode}
                darkMode={darkMode}
              />
            </>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
