import React from "react";

const PillHeader = ({ active, onClick, label }) => {
  return (
    <div className="w-1/3">
      <div
        className={` 
        py-4 w-full text-lg font-semibold relative text-center transition ease-in-out duration-300 z-0 cursor-pointer border border-gray-600 max-sm:text-[12px] max-sm:py-2

        ${
          active === "first" &&
          label === "Web Development" &&
          "text-[#462523] font-extrabold bg-gold-gradient-text" 
        } 
        ${active === "second" && label === "Digital Art" && "text-[#462523] font-extrabold bg-gold-gradient-text"} 
        
        ${
          active === "third" && label === "Blogs" && "text-[#462523] font-extrabold bg-gold-gradient-text"
        } 

        ${label === "Web Development" && "rounded-l-full"}
        ${label === "Digital Art" && "border-x-0"}
        ${label === "Blogs" && "rounded-r-full"}
        `}
        onClick={onClick}
      >
        {label}
      </div>
    </div>
  );
};

export default PillHeader;
