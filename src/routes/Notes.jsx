import React from "react";
import { devNotes } from "../data/data";
import NoteCard from "../components/NoteCard";

const Notes = () => {
  return (
    <section className="w-[80%] m-auto my-8 mt-36 flex flex-col h-full justify-center items-center max-sm:my-34">
      <>
        <h1 className="text-5xl mb-16 max-sm:text-3xl max-sm:mb-20">
          Notes List
        </h1>

        <div className=" flex justify-center flex-wrap gap-20 max-sm:flex-col max-sm:gap-32">
          {devNotes.map(({ thumbnail, title, pdf }) => {
            return <NoteCard thumbnail={thumbnail} title={title} pdf={pdf} />;
          })}
        </div>
      </>
    </section>
  );
};

export default Notes;
