import colorSharpLeft from "../assets/images/color-sharp-left.png";
import "animate.css";
import { useEffect, useState } from "react";
import ProjectCardList from "./ProjectCardList";
import PillHeader from "./PillHeader";
import { useActiveLink } from "../context/active-link-context";
import { navHeaderTitle } from "../data/data";

const ProjectSection = () => {
  const [activeTab, setActiveTab] = useState("first");
  const { active } = useActiveLink();

  const tabActiveHandler = (value) => setActiveTab(value);

  useEffect(() => {
    active === "Blogs" ? setActiveTab("third") : setActiveTab("first");
  }, [active]);

  return (
    <section className="py-36 relative text-center " id="Projects">
      <div className="max-sm:w-[90%] max-sm:m-auto">
        <h2 className="text-5xl font-bold max-sm:text-3xl">Projects</h2>
        <p className="text-[#B8B8B8] text-lg leading-6 mt-3 mb-11 mx-auto w-[56%] max-sm:w-full max-sm:text-base max-sm:text-justify">
          Take a look at some of my major tech projects as well as some
          additional projects from my hobbies such as digital art and writing
          content
        </p>

        <div id="projects-tabs">
          <div
            className="w-[72%] mx-auto bg-[rgb(255 255 255 / 10%)] flex items-center justify-between max-sm:w-full"
            id="pills-tab"
          >
            {navHeaderTitle.map(({ serialNumber, label }) => (
              <PillHeader
                active={activeTab}
                onClick={() => tabActiveHandler(serialNumber)}
                label={label}
              />
            ))}
          </div>

          <div className="mt-12 min-h-80 max-sm:my-8 max-sm:w-[85%] max-sm:m-auto ">
            <ProjectCardList active={activeTab} />
          </div>
        </div>
      </div>
      <img
        className="absolute top-20 -z-30 w-[40%]"
        src={colorSharpLeft}
        alt="bg"
      />
    </section>
  );
};

export default ProjectSection;
