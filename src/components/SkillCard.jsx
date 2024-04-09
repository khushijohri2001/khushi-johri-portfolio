import React from "react";

const SkillCard = ({ label }) => {
  return (
    <div className="bg-gradient-to-r from-purple-bright to-blue-bright text-transparent bg-clip-text inline-block">
      <h3>{label}</h3>
    </div>
  );
};

export default SkillCard;
