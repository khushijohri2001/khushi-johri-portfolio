import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { devProjects } from "../data";
import { GoldBorderButton, GoldTextButton } from "../components/constant/Buttons";

const Project = () => {
  const { projectId } = useParams();

  const [projectInfo, setProjectInfo] = useState();

  useEffect(() => {
    const currentProjectInfo = devProjects.find(
      (info) => info.id === projectId
    );

    setProjectInfo(currentProjectInfo);
  }, [projectId]);

  const {
    id,
    title,
    description,
    features,
    techStack,
    imgUrl,
    gitSrc,
    liveLink,
  } = projectInfo !== undefined && projectInfo;

  return (
    <div className="w-[80%] m-auto my-8 h-screen flex flex-col justify-center items-center max-sm:h-auto max-sm:my-28">
      {projectInfo !== undefined ? (
        <>
          <h1 className="text-5xl max-sm:text-3xl">{title}</h1>

          <div className="flex gap-10 mt-16 max-sm:flex-col ">
            <img src={imgUrl} alt={title} className="w-[60%] rounded-md max-sm:w-full" />

            <div className="flex flex-col justify-between text-white/70 max-sm:gap-10">
              <p>{description}</p>
              <p>
                <span className="text-lg text-white">Features:</span> <br /> {features.join(", ")}
              </p>
              <p>
              <span className="text-lg text-white">Tech Stack:</span> <br /> {techStack.join(", ")}{" "}
              </p>
              <div className="flex gap-4 max-sm:justify-between">
                <GoldBorderButton label="Source Code" path={gitSrc} />
                <GoldTextButton label="Live Link" path={liveLink} />
              </div>
            </div>

          </div>
        </>
      ) : (
        <div>...Loading</div>
      )}
    </div>
  );
};

export default Project;
