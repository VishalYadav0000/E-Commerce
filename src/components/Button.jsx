import React from "react";

const Button = ({ children, onClick, className = "", type = "button" }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
