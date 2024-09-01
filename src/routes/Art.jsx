import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { GoldBorderButton } from "../components/constant/Buttons";
import { digitalArt } from "../data/data";

const Art = () => {
  const { artId } = useParams();

  const [artInfo, setArtInfo] = useState();

  useEffect(() => {
    const currentProjectInfo = digitalArt.find((info) => info.id === artId);
    setArtInfo(currentProjectInfo);
  }, [artId]);

  const { id, title, description, imgUrl } = artInfo !== undefined && artInfo;

  return (
    <div className="w-[80%] m-auto my-16 h-screen flex flex-col justify-center items-center max-sm:h-auto">
      {artInfo !== undefined ? (
        <>
          <h1 className="text-4xl max-sm:text-3xl max-sm:mt-20">{title}</h1>

          <div className="flex flex-col justify-center items-center gap-4 mt-10 ">
            <img
              src={imgUrl}
              alt={title}
              className="w-[35%] rounded-md max-sm:w-full"
            />

            <div className="flex flex-col gap-3 items-center text-white/70">
              <p>{description}</p>

              <div className="">
                <GoldBorderButton
                  label="Instagram"
                  path="https://www.instagram.com/iamdatingart/"
                />
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

export default Art;
