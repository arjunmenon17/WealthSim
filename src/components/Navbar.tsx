import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import "./Navbar.css";


function Navbar() {
  const [click, setClick] = useState(false);
  const [buttons, setButtons] = useState(true);

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

  window.addEventListener("resize", showButtons);
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
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-links" onClick={closeMobileMenu}>
                About
              </Link>
            </li>
            <li className="nav-item">
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
                to="/signup"
                className="nav-links-mobile"
                onClick={closeMobileMenu}
              >
                Sign Up
              </Link>
            </li>
          </ul>
          {buttons && (
            <>
              <Button type="button" buttonStyle="btn--outline" link="/login">
                LOGIN
              </Button>
              <Button type="button" buttonStyle="btn--outline" link="/sign-up">
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
