import React, { ReactNode } from "react";
import { Link } from "react-router-dom";
import "./Button.css";

interface Props {
  children: ReactNode;
  link: string;
  type?: "button" | "submit" | "reset" | undefined;
  onClick?: () => void;
  buttonStyle?: "btn--primary" | "btn--outline";
  buttonSize?: "btn--medium" | "btn--large";
}

function Button({
  children,
  link = "/sign-up",
  type = "button",
  onClick,
  buttonStyle = "btn--primary",
  buttonSize = "btn--medium",
}: Props) {
  return (
    <Link to={link} className="btn-mobile">
      <button
        className={`btn ${buttonStyle} ${buttonSize}`}
        type={type}
        onClick={onClick}
      >
        {children}
      </button>
    </Link>
  );
}

export default Button;
