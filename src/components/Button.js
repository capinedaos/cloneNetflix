import React from "react";
import "../styles/Button.css"

const Button = ({ text }) => {
  return (
    <div className="button">
      <button>{text} </button>
    </div>
  );
};

export default Button;
