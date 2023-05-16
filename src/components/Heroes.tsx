import React from "react";
import Button from "./Button";
import "./Heroes.css";

function Heroes() {
  return (
    <div className="hero-container">
      <h1>Wealth Sim</h1>
      <p>
        Empower Your Financial Future: Dive into the Stock Market with Wealth
        Sim, Your Virtual Gateway to Stock Market Proficiency!
      </p>
      <div className="hero-btns">
        <Button
          link="/sign-up"
          buttonStyle="btn--primary"
          buttonSize="btn--medium"
        >
          GET STARTED
        </Button>
        <Button
          link="/sign-up"
          buttonStyle="btn--primary"
          buttonSize="btn--medium"
        >
          CONTACT US
        </Button>
      </div>
    </div>
  );
}

export default Heroes;
