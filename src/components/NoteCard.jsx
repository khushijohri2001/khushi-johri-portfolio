import React, { useState } from "react";
import ReactGA from "react-ga4";

const NoteCard = ({ thumbnail, title, pdf }) => {
  const [hoverEffect, setHoverEffect] = useState("");

  const clickHandler = (notes) => {
    ReactGA.event({
      category: "Notes",
      action: "Opened",
      label: notes,
    });
  };
  
  return (
    <div className="max-w-72 h-full">
      <h3 className="text-2xl text-center mb-8 max-sm:text-left">{title}</h3>

      <div className="relative">
        <a
          href={pdf}
          without
          rel="noopener noreferrer"
          target="_blank"
          onMouseEnter={() => setHoverEffect(title)}
          onMouseLeave={() => setHoverEffect("")}
        >
          <img
            src={thumbnail}
            alt={title}
            trailingIcon="picture_as_pdf"
            className="rounded-lg"
            onClick={() => clickHandler(title)}
          />

          <div
            className={`${
              hoverEffect === title &&
              "absolute w-full h-full bg-black bottom-0 bg-opacity-40 flex items-end"
            } transition ease-in-out duration-700`}
          >
            <button
              className={`${
                hoverEffect === title
                  ? "transition ease-in-out duration-700 rounded-b-md text-center py-2 w-full"
                  : "opacity-0 max-sm:opacity-100 text-xl w-auto"
              } p-1 px-4 mt-3 text-black/70 bg-white font-semibold block text-black text-xl  text-left rounded-md`}
            >
              Click to Download
            </button>
          </div>
        </a>
      </div>
    </div>
  );
};

export default NoteCard;
