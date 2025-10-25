// src/components/UIButton.jsx
import React from "react";

function UIButton({ label, onClick, type = "button", style = {}, className = "" }) {
  // Default button styles
  const defaultStyle = {
    backgroundColor: "#007bff",
    color: "white",
    padding: "10px 18px",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    fontSize: "16px",
    transition: "background 0.3s ease",
  };

  // Handle hover effect
  const [isHover, setIsHover] = React.useState(false);

  const hoverStyle = isHover
    ? { backgroundColor: "#0056b3" }
    : {};

  return (
    <button
      type={type}
      className={className}
      style={{ ...defaultStyle, ...hoverStyle, ...style }}
      onClick={onClick}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      {label}
    </button>
  );
}

export default UIButton;
