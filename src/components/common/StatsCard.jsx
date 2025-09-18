import React from "react";

const StatsCard = ({ value, label, className = "" }) => {
  return (
    <div className={`text-center ${className}`}>
      <div className="text-3xl font-bold text-amber-500 mb-2">{value}</div>
      <div className="text-white">{label}</div>
    </div>
  );
};

export default StatsCard;
