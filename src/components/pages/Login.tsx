import React, { useState } from "react";
import "./Login.css";
import Button from "../Button";

function Login() {
  const [mode, setMode] = useState("Sign Up");

  const handleSignUpClick = () => {
    setMode("Sign Up");
  };

  const handleSignInClick = () => {
    setMode("Log In");
  };

  return (
    <div className="container">
      <div className="form-box">
        <h1>{mode}</h1>
        <form>
          <div className="input-group">
            {mode == "Sign Up" && (
              <div className="input-field">
                <input type="text" placeholder="Name"></input>
              </div>
            )}
            <div className="input-field">
              <input type="email" placeholder="Email"></input>
            </div>
            <div className="input-field">
              <input type="password" placeholder="Password"></input>
            </div>
          </div>
          <div className="btn-field">
            <button
              type="button"
              className={mode === "Sign Up" ? "active" : ""}
              onClick={handleSignUpClick}
            >
              Sign Up
            </button>
            <button
              type="button"
              className={mode === "Log In" ? "active" : ""}
              onClick={handleSignInClick}
            >
              Sign In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
