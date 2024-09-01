import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import colorSharpRight from "../assets/images/color-sharp-right.png";
import { useMediaMatch } from "../context/media-match-context";
import { SkillCard } from "../components";
import { skillList } from "../data/data";

const SkillSection = () => {
  const { matches } = useMediaMatch();
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="relative py-36" id="Skills">
      <div className="text-center bg-light-background rounded-3xl py-14 px-12 max-sm:px-4 max-sm:w-[90%] max-sm:m-auto">
        <h2 className="text-5xl font-bold max-sm:text-3xl">Skills</h2>
        <p className="text-[#B8B8B8] text-lg leading-6 mt-3 mb-11 max-sm:w-full max-sm:text-base max-sm:text-justify">
          The following is a list of some of my current technical skills I am
          proficient in, {matches && <br />} as well as what I am looking
          forward to learning over the next few months to enhance my skills
        </p>
        <Carousel
          responsive={responsive}
          infinite={true}
          className="text-3xl font-bold w-[80%] mx-auto py-8 relative max-sm:w-full max-sm:text-2xl z-[100]"
        >
          {skillList.map(({ id, label }) => (
            <SkillCard key={id} label={label} />
          ))}
        </Carousel>
        <h3 className="mt-16 text-2xl bg-gold-gradient-text bg-clip-text text-transparent max-sm:text-base">
          Learning NodeJS, ExpressJS, MongoDB, React Native, Three.js.
        </h3>
      </div>
      <img
        className="absolute top-[28%] right-[-4%] bottom-0 w-[40%] -z-10"
        src={colorSharpRight}
        alt="img"
      />
    </section>
  );
};
export default SkillSection;
