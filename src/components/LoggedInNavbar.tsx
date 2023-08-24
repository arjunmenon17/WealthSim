import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);
  const location = useLocation(); // Using the useLocation hook from react-router-dom

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            Wealth Sim
            {/* <img
              src="/src/assets/logo.png"
              alt="WealthSim"
              className="navbar-logo"
            /> */}
            <i className="material-symbols-outlined">chart_data</i>
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li
              className={`nav-item ${
                location.pathname === "/dashboard" ? "active" : ""
              }`}
            >
              <Link
                to="/dashboard"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Dashboard
              </Link>
            </li>
            <li
              className={`nav-item ${
                location.pathname === "/about" ? "active" : ""
              }`}
            >
              <Link to="/about" className="nav-links" onClick={closeMobileMenu}>
                About
              </Link>
            </li>
            <li
              className={`nav-item ${
                location.pathname === "/learn" ? "active" : ""
              }`}
            >
              <Link to="/learn" className="nav-links" onClick={closeMobileMenu}>
                Learn
              </Link>
            </li>
            <li
              className={`nav-item ${
                location.pathname === "/invest" ? "active" : ""
              }`}
            >
              <Link
                to="/invest"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Invest
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
