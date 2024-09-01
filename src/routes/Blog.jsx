import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { GoldBorderButton, GoldTextButton } from "../components/constant/Buttons";
import { devBlogs } from "../data/data";

const Blogs = () => {
  const { blogId } = useParams();

  const [blogInfo, setBlogInfo] = useState();

  useEffect(() => {
    const currentProjectInfo = devBlogs.find(
      (info) => info.id === blogId
    );

    setBlogInfo(currentProjectInfo);
  }, [blogId]);

  const {
    id,
    title,
    description,
    features,
    techStack,
    imgUrl,
    gitSrc,
    liveLink,
  } = blogInfo !== undefined && blogInfo;

  return (
    <div className="w-[80%] m-auto my-8 h-screen flex flex-col justify-center items-center max-sm:h-auto">
      {blogInfo !== undefined ? (
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
        <div>Coming Soon</div>
      )}
    </div>
  );
};

export default Blogs;
