import { useMediaMatch } from "../context/media-match-context";
import "./css/project-section.css";

const ProjectCard = ({ title, description, imgUrl, gitSrc, liveLink }) => {
  const { matches } = useMediaMatch();

  return (
    <div>
      <div className="proj-imgbx">
        <img src={imgUrl} alt={title} />
        {matches ? (
          <div className="proj-txtx">
            <h4>{title}</h4>
            <span>{description}</span>
            {gitSrc && liveLink && (
              <div className="">
                <button>
                  <a href={gitSrc} target="_blank" rel="noreferrer">
                    {" "}
                    Source Code{" "}
                  </a>
                </button>
                <button className="left-space">
                  <a href={liveLink} target="_blank" rel="noreferrer">
                    Live Link
                  </a>
                </button>
              </div>
            )}
          </div>
        ) : (
          <div>
            <h4>{title}</h4>
            <span>{description}</span>
            {gitSrc && liveLink && (
              <div>
                <button>
                  <a href={gitSrc} target="_blank" rel="noreferrer">
                    Source Code
                  </a>
                </button>
                <button className="left-space">
                  <a href={liveLink} target="_blank" rel="noreferrer">
                    Live Link
                  </a>
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export { ProjectCard };
