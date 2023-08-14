import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Button from "./Button";
import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);
  const [buttons, setButtons] = useState(true);
  const location = useLocation(); // Using the useLocation hook from react-router-dom

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButtons = () => {
    if (window.innerWidth <= 960) {
      setButtons(false);
    } else {
      setButtons(true);
    }
  };

  useEffect(() => {
    showButtons();
  }, []);

  useEffect(() => {
    window.addEventListener("resize", showButtons);
    return () => {
      window.removeEventListener("resize", showButtons);
    };
  }, []); // Clean up the event listener when the component is unmounted

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
                location.pathname === "/" ? "active" : ""
              }`}
            >
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
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
            <li className="nav-item">
              <Link
                to="/login"
                className="nav-links-mobile"
                onClick={closeMobileMenu}
              >
                Log In
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/login"
                className="nav-links-mobile"
                onClick={closeMobileMenu}
              >
                Sign Up
              </Link>
            </li>
          </ul>
          {buttons && (
            <>
              <Button type="button" buttonStyle="btn--primary" link="/login">
                LOGIN
              </Button>
              <Button type="button" buttonStyle="btn--primary" link="/login">
                SIGN UP
              </Button>
            </>
          )}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
