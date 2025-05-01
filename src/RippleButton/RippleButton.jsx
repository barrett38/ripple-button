import React from "react";
import "./RippleButton.css";

const RippleButton = ({ label = "Click Me", onClick }) => {
  return (
    <button className="animated-button" onClick={onClick}>
      {label}
      <span className="ripple" />
    </button>
  );
};

export default RippleButton;
