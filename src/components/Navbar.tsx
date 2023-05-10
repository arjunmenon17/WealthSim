import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-left">
          <Link to="/" className="navbar-logo">
            Wealth Simfwerfsdfgsfd
            <img
              src="/src/assets/logo.png"
              alt="WealthSim"
              className="navbar-logo"
            />
          </Link>
        </div>
        <ul className="navbar-right">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link">
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/learn" className="nav-link">
              Learn
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/login" className="nav-link">
              Log In
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/signup" className="nav-link">
              Sign Up
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
