import React from "react";

const Card = ({ children, className = "", hover = false, ...props }) => {
  const baseClasses =
    "bg-white/10 backdrop-blur-lg rounded-xl border border-white/20";
  const hoverClasses = hover
    ? "hover:transform hover:scale-105 transition-all duration-300"
    : "";

  return (
    <div className={`${baseClasses} ${hoverClasses} ${className}`} {...props}>
      {children}
    </div>
  );
};

export default Card;
