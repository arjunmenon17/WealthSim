import React, { useState } from "react";
import Navbar from "./components/Navbar";
import LoggedInNavbar from "./components/LoggedInNavbar"; // Import the new component
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Learn from "./components/pages/Learn";
import Login from "./components/pages/Login";
import Dashboard from "./components/pages/Dashboard";
import Invest from "./components/pages/Invest";
import "./App.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <>
      <Router>
        {/* Use conditional rendering to display the appropriate navbar */}
        {isLoggedIn ? <LoggedInNavbar /> : <Navbar />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/learn" element={<Learn />} />
          {/* Pass the onLogin function to the Login component */}
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/invest" element={<Invest />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
