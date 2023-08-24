import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

interface LoginProps {
  onLogin: () => void;
}

function Login({ onLogin }: LoginProps) {
  const [mode, setMode] = useState("Sign Up");
  const [name, setName] = useState(""); // Add name state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSignUpClick = () => {
    setMode("Sign Up");
  };

  const handleSignInClick = () => {
    setMode("Log In");
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost/connect.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: `mode=${mode}&name=${encodeURIComponent(
          name
        )}&email=${encodeURIComponent(email)}&password=${encodeURIComponent(
          password
        )}`,
      });
      const data = await response.json();
      if (data.success) {
        // Call the onLogin function to update login status
        onLogin();
        // Redirect to Dashboard with email and password as parameters
        navigate(
          `/Dashboard/${encodeURIComponent(email)}/${encodeURIComponent(
            password
          )}`
        );
      } else {
        setMessage(data.message);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="container">
      <div className="form-box">
        <h1>{mode}</h1>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            {mode === "Sign Up" && (
              <div className="input-field">
                <input
                  type="text"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
            )}
            <div className="input-field">
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="input-field">
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button type="submit">Submit</button>
          </div>
          <p>{message}</p>
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
