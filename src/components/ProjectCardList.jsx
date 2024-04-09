import React, { useEffect, useState } from "react";
import { devBlogs, devProjects, digitalArt } from "../data";
import ProjectCard from "./ProjectCard";

const ProjectCardList = ({ active }) => {
  const [dataList, setDataList] = useState(devProjects);

  useEffect(() => {
    if (active === "first") {
      setDataList(devProjects);
    } else if (active === "second") {
      setDataList(digitalArt);
    } else if(active === "third"){
        setDataList(devBlogs)
    }
  }, [active]);

  return (
        <div className="flex flex-wrap gap-14 items-center justify-center">
          {dataList && dataList.map((project, index) => {
            return <ProjectCard key={index} {...project} active={active} />;
          })}
          
        </div>
  );
};

export default ProjectCardList;
