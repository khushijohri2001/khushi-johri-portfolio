import { Link } from "react-router-dom";
import { useMediaMatch } from "../context/media-match-context";

const ProjectCard = ({ id, title, description, imgUrl, active }) => {
  const { matches } = useMediaMatch();
  const link =
    (active === "first" && "project/" + id) ||
    (active === "second" && "art/" + id) ||
    (active === "third" && "blog/" + id);

  return (
    <div className="relative cursor-pointer">
      {active === "third" ? (
        <div>
          <h4 className="text-4xl font-bold mt-2 text-white">Coming Soon</h4>
        </div>
      ) : (
        <>
          <img
            src={imgUrl}
            alt={title}
            className={`${
              active === "second" ? "w-80 h-full" : "w-80 h-full"
            }  object-cover rounded-lg max-ms:w-full max-sm:h-auto`}
          />

          {matches ? (
            <div className="absolute top-0 flex flex-col items-center justify-around h-full w-full z-50 opacity-0 transition delay-300 ease-in bg-purple-blue-gradient-bright rounded-lg hover:opacity-100">
              <h4 className="text-lg font-bold mt-2">{title}</h4>
              <span className="text-sm mx-4 text-gray-200/80">
                {description}
              </span>
              <div>
                <Link to={link}>
                  <button className="w-24 p-1 rounded-md text-black/70 bg-white text-sm font-semibold">
                    View More
                  </button>
                </Link>
              </div>
            </div>
          ) : (
            <div className="text-left mt-4 flex flex-col gap-2">
              <h4 className="text-lg font-bold">{title}</h4>
              <span className="text-sm -mt-2 leading-tight text-gray-200/80">
                {description}
              </span>
              <div>
                <Link to={link}>
                  <button className="w-24 p-1 mt-3 rounded-md text-black/70 bg-white text-sm font-semibold">
                    View More
                  </button>
                </Link>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default ProjectCard;
